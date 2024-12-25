const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Transform Your Space with ColourTek</h1>
          <p className="text-xl mb-8">Experience the perfect blend of innovation and aesthetics with our premium paint solutions.</p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
              Explore Products
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black">
              Find a Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;