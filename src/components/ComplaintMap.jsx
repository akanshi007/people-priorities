import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function ComplaintMap({ complaints }) {
  const validComplaints = complaints.filter(
    (c) =>
      c.location &&
      typeof c.location.lat === "number" &&
      typeof c.location.lng === "number"
  );

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "18px",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {validComplaints.map((item, index) => (
        <Marker
          key={index}
          position={[item.location.lat, item.location.lng]}
        >
          <Popup>
            <div className="space-y-2">
              <h3 className="font-bold text-blue-700">
                {item.category}
              </h3>

              <p>
                <strong>Ward:</strong> {item.ward}
              </p>

              <p>
                <strong>Department:</strong> {item.department}
              </p>

              <p>
                <strong>Priority:</strong> ⭐ {item.priority}
              </p>

              <p>
                <strong>Address:</strong>
                <br />
                {item.address}
              </p>

              <p className="text-xs text-gray-500">
                {item.date}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ComplaintMap;