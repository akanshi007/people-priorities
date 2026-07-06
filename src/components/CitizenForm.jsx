import {
  User,
  Phone,
  MapPinned,
  Languages,
  FolderOpen,
  FileText,
  ImagePlus,
} from "lucide-react";

import { useState } from "react";
import { analyzeComplaintAI } from "../services/gemini";
import { saveComplaint } from "../services/storage";
import { getAddress } from "../services/location";
import LocationPicker from "./LocationPicker";
import toast from "react-hot-toast";

function CitizenForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    ward: "",
    language: "English",
    category: "",
    complaint: "",
    image: null,
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!location) {
      alert("Please select a complaint location.");
      return;
    }

    setLoading(true);

    try {
      const raw = await analyzeComplaintAI(formData.complaint);

      const cleaned = raw
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      const aiResult = JSON.parse(cleaned);

      setResult(aiResult);

      const complaintData = {
        ...formData,
        ...aiResult,
        location,
        address,
        date: new Date().toLocaleString(),
      };

      saveComplaint(complaintData);

      alert("Complaint submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        ward: "",
        language: "English",
        category: "",
        complaint: "",
        image: null,
      });

      setLocation(null);
      setAddress("");
    } catch (err) {
      console.error(err);
      alert("AI analysis failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 space-y-8"
    >

      <div className="text-center">

        <h1 className="text-4xl font-bold text-slate-900">
          Submit a Complaint
        </h1>

        <p className="text-slate-500 mt-3">
          Help improve your community with AI-powered complaint analysis.
        </p>

      </div>

      {/* Name */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <User size={18} />
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="
          w-full
          mt-2
          rounded-xl
          border
          border-slate-300
          bg-slate-50
          px-4
          py-3
          outline-none
          focus:ring-4
          focus:ring-blue-100
          focus:border-blue-600
          transition
          "
        />

      </div>

      {/* Phone */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <Phone size={18} />
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="9876543210"
          required
          className="
          w-full
          mt-2
          rounded-xl
          border
          border-slate-300
          bg-slate-50
          px-4
          py-3
          outline-none
          focus:ring-4
          focus:ring-blue-100
          focus:border-blue-600
          transition
          "
        />

      </div>

      {/* Ward */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <MapPinned size={18} />
          Ward
        </label>

        <select
          name="ward"
          value={formData.ward}
          onChange={handleChange}
          required
          className="
          w-full
          mt-2
          rounded-xl
          border
          border-slate-300
          bg-slate-50
          px-4
          py-3
          outline-none
          focus:ring-4
          focus:ring-blue-100
          focus:border-blue-600
          transition
          "
        >

          <option value="">Select Ward</option>
          <option>Ward 1</option>
          <option>Ward 2</option>
          <option>Ward 3</option>
          <option>Ward 4</option>
          <option>Ward 5</option>

        </select>

      </div>
            {/* Language */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <Languages size={18} />
          Language
        </label>

        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="
          w-full
          mt-2
          rounded-xl
          border
          border-slate-300
          bg-slate-50
          px-4
          py-3
          outline-none
          focus:ring-4
          focus:ring-blue-100
          focus:border-blue-600
          transition
          "
        >

          <option>English</option>
          <option>Hindi</option>
          <option>Telugu</option>
          <option>Tamil</option>
          <option>Kannada</option>

        </select>

      </div>

      {/* Category */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <FolderOpen size={18} />
          Category (Optional)
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="
          w-full
          mt-2
          rounded-xl
          border
          border-slate-300
          bg-slate-50
          px-4
          py-3
          outline-none
          focus:ring-4
          focus:ring-blue-100
          focus:border-blue-600
          transition
          "
        >

          <option value="">Auto Detect</option>

          <option>Roads</option>
          <option>Water Supply</option>
          <option>Electricity</option>
          <option>Garbage</option>
          <option>Healthcare</option>

        </select>

      </div>

      {/* Complaint */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <FileText size={18} />
          Complaint
        </label>

        <textarea
          rows={6}
          name="complaint"
          value={formData.complaint}
          onChange={handleChange}
          placeholder="Describe your issue in detail..."
          required
          className="
          w-full
          mt-2
          rounded-xl
          border
          border-slate-300
          bg-slate-50
          px-4
          py-3
          outline-none
          resize-none
          focus:ring-4
          focus:ring-blue-100
          focus:border-blue-600
          transition
          "
        />

      </div>

      {/* Image Upload */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <ImagePlus size={18} />
          Upload Image (Optional)
        </label>

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="
          w-full
          mt-3
          rounded-xl
          border-2
          border-dashed
          border-blue-300
          bg-blue-50
          p-4
          cursor-pointer
          "
        />

      </div>

      {/* Location */}

      <div>

        <label className="flex items-center gap-2 font-semibold text-slate-700">
          <MapPinned size={18} />
          Complaint Location
        </label>

        <div className="mt-4 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">

          <LocationPicker
            setLocation={async (loc) => {

              setLocation(loc);

              const place = await getAddress(
                loc.lat,
                loc.lng
              );

              setAddress(place);

            }}
          />

        </div>

        {location && (

          <div
            className="
            mt-5
            bg-gradient-to-r
            from-blue-50
            to-cyan-50
            border
            border-blue-200
            rounded-2xl
            p-5
            shadow
            "
          >

            <h3 className="font-bold text-blue-700">
              📍 Selected Location
            </h3>

            <p className="mt-3 text-slate-700">
              {address || "Fetching address..."}
            </p>

            <p className="text-xs text-slate-500 mt-3">
              Latitude : {location.lat.toFixed(5)}
            </p>

            <p className="text-xs text-slate-500">
              Longitude : {location.lng.toFixed(5)}
            </p>

          </div>

        )}

      </div>

      {/* Submit Button */}

      <button
        type="submit"
        disabled={loading}
        className="
        w-full
        bg-gradient-to-r
        from-blue-700
        to-cyan-600
        hover:from-blue-800
        hover:to-cyan-700
        text-white
        py-4
        rounded-xl
        text-lg
        font-semibold
        shadow-xl
        transition
        duration-300
        disabled:opacity-50
        "
      >

        {loading ? "Analyzing Complaint..." : "Analyze with AI"}

      </button>
            {/* AI Result */}

      {result && (

        <div
          className="
          mt-8
          rounded-3xl
          border
          border-green-200
          bg-gradient-to-br
          from-green-50
          to-emerald-50
          p-8
          shadow-xl
          "
        >

          <div className="flex items-center gap-3 mb-6">

            <div className="text-4xl">
              🤖
            </div>

            <div>

              <h2 className="text-3xl font-bold text-green-700">
                AI Analysis Complete
              </h2>

              <p className="text-slate-500">
                Generated using Google Gemini AI
              </p>

            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl p-5 shadow">

              <h3 className="font-semibold text-slate-500 mb-2">
                Category
              </h3>

              <p className="text-xl font-bold text-slate-800">
                {result.category}
              </p>

            </div>

            <div className="bg-white rounded-2xl p-5 shadow">

              <h3 className="font-semibold text-slate-500 mb-2">
                Department
              </h3>

              <p className="text-xl font-bold text-slate-800">
                {result.department}
              </p>

            </div>

            <div className="bg-white rounded-2xl p-5 shadow">

              <h3 className="font-semibold text-slate-500 mb-2">
                Urgency
              </h3>

              <span
                className={`
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  font-semibold
                  ${
                    result.urgency === "High"
                      ? "bg-red-100 text-red-700"
                      : result.urgency === "Medium"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }
                `}
              >
                {result.urgency}
              </span>

            </div>

            <div className="bg-white rounded-2xl p-5 shadow">

              <h3 className="font-semibold text-slate-500 mb-2">
                Priority
              </h3>

              <p className="text-2xl font-bold text-blue-700">
                ⭐ {result.priority}/5
              </p>

            </div>

          </div>

          <div className="mt-8 bg-white rounded-2xl shadow p-6">

            <h3 className="text-xl font-bold text-slate-800 mb-3">
              AI Summary
            </h3>

            <p className="text-slate-600 leading-7">
              {result.summary}
            </p>

          </div>

        </div>

      )}

    </form>

  );

}

export default CitizenForm;