import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'; // Ensure Leaflet CSS is imported

const Map = () => {
    const position = [40.7128, -74.0060];

  return (
    <div className="h-full  mt-10">
        <MapContainer
      center={position}
      zoom={13}
      className="w-full h-[350px] rounded shadow-md"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default Map;
