const Products = () => {
  const products = [
    {
      name: "ColourTek Xtreme Clean",
      image: "https://ik.imagekit.io/colourtek/xtreamclean.avif?updatedAt=1736268899741",
      description: "Premium washable interior emulsion"
    },
    {
      name: "ColourTek Weather Shield",
      image: "https://ik.imagekit.io/colourtek/weathershield.avif?updatedAt=1736268899621",
      description: "Advanced exterior wall paint"
    },
    {
      name: "ColourTek Eco Fresh",
      image: "https://ik.imagekit.io/colourtek/ecofresh.avif?updatedAt=1736268899923",
      description: "Low VOC interior paint"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative paint solutions designed for every need
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-200 mb-4">{product.description}</p>
                {/* <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;