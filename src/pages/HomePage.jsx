import { Link } from "react-router-dom";
import {
  Sparkles,
  MapPinned,
  BarChart3,
  ArrowRight,
} from "lucide-react";

function HomePage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 min-h-screen">

      {/* Hero Section */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              🇮🇳 AI-Powered Governance Platform
            </span>

            <h1 className="text-6xl font-extrabold leading-tight text-slate-900">

              People's
              <br />

              <span className="text-blue-700">
                Priorities
              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-8 max-w-xl">

              Empower citizens to report local issues with AI-assisted
              analysis, smart prioritization, live location mapping and
              real-time dashboards for faster decision making.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                to="/citizen"
                className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-7 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2"
              >
                Report Complaint
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/dashboard"
                className="border-2 border-blue-700 text-blue-700 px-7 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition"
              >
                View Dashboard
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="bg-white rounded-3xl shadow-2xl p-10">

              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=900"
                alt="Smart City"
                className="rounded-2xl w-full h-[380px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-slate-900">

            Why Choose People's Priorities?

          </h2>

          <p className="text-slate-600 mt-4 text-lg">

            AI-driven complaint management designed for citizens and public
            representatives.

          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">

              <Sparkles className="text-blue-700" size={32} />

            </div>

            <h3 className="text-2xl font-bold mt-6">

              AI Complaint Analysis

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Gemini AI automatically categorizes complaints, assigns urgency,
              prioritizes cases and recommends the responsible department.

            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">

              <MapPinned className="text-green-700" size={32} />

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Live Location Mapping

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              Citizens pinpoint the exact issue on an interactive map with
              automatic address detection.

            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-8">

            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center">

              <BarChart3 className="text-purple-700" size={32} />

            </div>

            <h3 className="text-2xl font-bold mt-6">

              Smart Dashboard

            </h3>

            <p className="mt-4 text-slate-600 leading-7">

              View complaint trends, ward-wise reports, department workload and
              AI-powered insights in one place.

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default HomePage;