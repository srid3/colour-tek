import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div className="relative h-[80vh] md:h-screen">
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/colourtek/photo-1562259949-e8e7689d7828.avif?updatedAt=1736269341837"
          srcSet="
            https://ik.imagekit.io/colourtek/tr:w-400/photo-1562259949-e8e7689d7828.avif?updatedAt=1736269341837 400w,
            https://ik.imagekit.io/colourtek/tr:w-800/photo-1562259949-e8e7689d7828.avif?updatedAt=1736269341837 800w,
            https://ik.imagekit.io/colourtek/tr:w-1200/photo-1562259949-e8e7689d7828.avif?updatedAt=1736269341837 1200w
          "
          sizes="(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px"
          alt="Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Transform Your Space with ColourTek</h1>
          <p className="text-lg md:text-xl mb-8">Experience the perfect blend of innovation and aesthetics with our premium paint solutions.</p>
          <div className="flex flex-col space-y-4 pr-36 md:flex-row md:space-x-4 md:space-y-0">
            <Link to={'/products'} className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
              Explore Products
            </Link>
            <Link to={'/where-to-buy'} className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black">
              Find a Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;