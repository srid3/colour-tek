import { Link } from "react-router-dom";
import { Shield, Droplets, Sun } from "lucide-react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Products = () => {
  const categories = [
    {
      name: "Interior Paints",
      description: "Premium paints for your indoor spaces",
      image: "./interior.avif",
      products: [
        { name: "Colourtek Xtreme Clean", type: "Premium Emulsion" },
        { name: "Colourtek Fresh", type: "Anti-bacterial Paint" },
        { name: "Colourtek Matt", type: "Luxury Matt Finish" },
      ],
    },
    {
      name: "Exterior Paints",
      description: "Weather-resistant paints for lasting protection",
      image: "./exterior.avif",
      products: [
        { name: "Colourtek Weather Shield", type: "Exterior Emulsion" },
        { name: "Colourtek Shield", type: "All-Weather Protection" },
        { name: "Colourtek Tex", type: "Textured Finish" },
      ],
    },
    {
      name: "Wood & Metal",
      description: "Specialized coatings for wood and metal surfaces",
      image: "./woodmetal.avif",
      products: [
        { name: "Colourtek Wood Guard", type: "Wood Protection" },
        { name: "Colourtek Metal Shield", type: "Anti-rust Coating" },
        { name: "Colourtek Gloss", type: "High Gloss Enamel" },
      ],
    },
    {
      name: "Waterproofing",
      description: "Innovative solutions for waterproofing needs",
      image: "waterproof.avif",
      products: [
        { name: "ColourTek Roof Seal", type: "Leak Protection" },
        { name: "ColourTek Wall Shield", type: "Crack Bridging" },
        { name: "ColourTek HydroGuard", type: "Deep Protection" }
      ],
    },
  ];

  const features = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Superior Protection",
      description:
        "Advanced formulas that provide lasting protection against wear and tear",
    },
    {
      icon: <Droplets className="h-12 w-12" />,
      title: "Easy Application",
      description: "Smooth, hassle-free application for professional results",
    },
    {
      icon: <Sun className="h-12 w-12" />,
      title: "Weather Resistant",
      description: "Engineered to withstand harsh weather conditions",
    },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80"
            alt="Products Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl max-w-2xl">
              Discover our complete range of high-quality paints and coatings
              designed for every surface and requirement
            </p>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <h1 className="text-4xl font-bold mb-8">All Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <LazyLoadImage
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2 mb-6">
                  {category.products.map((product, i) => (
                    <li key={i} className="flex justify-between">
                      <span className="font-medium">{product.name}</span>
                      <span className="text-gray-600">{product.type}</span>
                    </li>
                  ))}
                </ul>
                <Link
  to={`/products/${category.name === "Wood & Metal"
    ? "wood-and-metal" 
    : category.name.split(" ")[0].toLowerCase()
  }`}
  className="block text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
>
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
