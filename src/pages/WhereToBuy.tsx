// import { useState } from 'react';
// import { MapPin, Phone, Clock, Star } from 'lucide-react';

const WhereToBuy = () => {
  // const [searchQuery] = useState('');

  // const stores = [
  //   {
  //     name: "ColourTek Store - Downtown",
  //     address: "123 Main Street, Downtown, City 12345",
  //     phone: "+1 (800) 123-4567",
  //     hours: "9:00 AM - 6:00 PM",
  //     rating: 4.8,
  //     image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80"
  //   },
  //   {
  //     name: "ColourTek Store - Westside",
  //     address: "456 West Avenue, Westside, City 12345",
  //     phone: "+1 (800) 123-4568",
  //     hours: "9:00 AM - 7:00 PM",
  //     rating: 4.6,
  //     image: "https://images.unsplash.com/photo-1581058897921-c053cb52f370?auto=format&fit=crop&q=80"
  //   },
  //   {
  //     name: "ColourTek Store - Eastside",
  //     address: "789 East Boulevard, Eastside, City 12345",
  //     phone: "+1 (800) 123-4569",
  //     hours: "8:00 AM - 6:00 PM",
  //     rating: 4.7,
  //     image: "https://images.unsplash.com/photo-1613082442324-62ef5249275e?auto=format&fit=crop&q=80"
  //   }
  // ];


  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[300px] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613082442324-62ef5249275e?auto=format&fit=crop&q=80"
            alt="Store Locator Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">Find a Store</h1>
            <p className="text-xl max-w-2xl">
              Locate your nearest ColourTek store and get expert advice for your painting needs
            </p>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
      {/* ... */}
    </div>
  );
};

export default WhereToBuy;