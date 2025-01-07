import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixes marker icons issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const WhereToBuy = () => {

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://ik.imagekit.io/colourtek/tr:w-1200/brown%20wooden%20bed%20frame%20with....jpg?updatedAt=1736272897700"
            alt="Store Locator Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Find Our Store</h1>
            <p className="text-xl max-w-2xl">
              Visit our ColourTek store and get expert advice for your painting needs.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
        <MapContainer
          center={[11.0168, 76.9558]}
          zoom={15}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={[37.7749, -122.4194]}>
            <Popup>
              <h3 className="font-semibold">ColourTek Store - Downtown</h3>
              <p>123 Main Street, Downtown, City 12345</p>
              <p>📞 +1 (800) 123-4567</p>
              <p>🕒 9:00 AM - 6:00 PM</p>
              <p>⭐ 4.8</p>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default WhereToBuy;
