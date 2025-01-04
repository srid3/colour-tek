import { useParams } from "react-router-dom";
import { Shield, Droplets, Leaf } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  const products = [
    {
      id: "premium-emulsion",
      name: "ColourTek Premium Emulsion",
      category: "Interior Paints",
      description:
        "High-quality interior emulsion with smooth finish and durability.",
      rating: 4.5,
      reviews: 120,
      coverage: "350-400 sq ft/L",
      dryingTime: "2-3 hours",
      finishType: "Matt",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Durable Finish",
          description: "Long-lasting interior walls.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Smooth Application",
          description: "Ensures an even coat.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Eco-Friendly",
          description: "Safe for home interiors.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Premium+Emulsion",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "silk-luxury",
      name: "ColourTek Silk Luxury",
      category: "Interior Paints",
      description: "A luxurious, silky-smooth paint for premium interiors.",
      rating: 4.7,
      reviews: 150,
      coverage: "300-350 sq ft/L",
      dryingTime: "3-4 hours",
      finishType: "Silk",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Luxury Finish",
          description: "Adds an elegant sheen to walls.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Easy Maintenance",
          description: "Washable for hassle-free cleaning.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Low VOC",
          description: "Environmentally friendly and safe.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Silk+Luxury",
        "https://via.placeholder.com/400x300?text=Luxurious+Look",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "weather-shield",
      name: "ColourTek Weather Shield",
      category: "Exterior Paints",
      description: "Protects exterior walls from harsh weather conditions.",
      rating: 4.6,
      reviews: 110,
      coverage: "300-350 sq ft/L",
      dryingTime: "4-6 hours",
      finishType: "Semi-Gloss",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Weather Resistant",
          description: "Resists cracking and peeling.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Superior Coverage",
          description: "Applies evenly across walls.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Eco-Friendly",
          description: "Non-toxic and safe.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Weather+Shield",
        "https://via.placeholder.com/400x300?text=Extreme+Protection",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "exterior-shield",
      name: "ColourTek Exterior Shield",
      category: "Exterior Paints",
      description: "Provides long-lasting protection against the elements.",
      rating: 4.8,
      reviews: 200,
      coverage: "320-380 sq ft/L",
      dryingTime: "4-6 hours",
      finishType: "Gloss",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "UV Protection",
          description: "Prevents fading from sunlight.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Weatherproof",
          description: "Resistant to rain and humidity.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Eco-Friendly",
          description: "Low VOC and environmentally safe.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Exterior+Shield",
        "https://via.placeholder.com/400x300?text=All-Weather+Durability",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "wood-guard",
      name: "ColourTek Wood Guard",
      category: "Wood Finishes",
      description:
        "Premium wood finish that enhances and protects wooden surfaces.",
      rating: 4.7,
      reviews: 180,
      coverage: "250-300 sq ft/L",
      dryingTime: "6-8 hours",
      finishType: "Satin",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Scratch Resistant",
          description: "Prevents damage from daily wear.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Waterproof",
          description: "Protects against moisture.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Low Odor",
          description: "Safe for indoor use.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Wood+Guard",
        "https://via.placeholder.com/400x300?text=Enhanced+Wood+Protection",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "metal-shield",
      name: "ColourTek Metal Shield",
      category: "Metal Finishes",
      description: "High-performance paint for protecting metal surfaces.",
      rating: 4.6,
      reviews: 95,
      coverage: "280-320 sq ft/L",
      dryingTime: "6-8 hours",
      finishType: "Gloss",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Rust Protection",
          description: "Prevents corrosion on metal surfaces.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Durable Finish",
          description: "Long-lasting and weather-resistant.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Eco-Friendly",
          description: "Safe for the environment.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Metal+Shield",
        "https://via.placeholder.com/400x300?text=Rust+Protection",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "roof-seal",
      name: "ColourTek Roof Seal",
      category: "Roof Coatings",
      description: "Waterproof roof coating for long-term protection.",
      rating: 4.9,
      reviews: 250,
      coverage: "200-250 sq ft/L",
      dryingTime: "8-10 hours",
      finishType: "Matt",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Waterproof",
          description: "Seals and protects against leaks.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Weatherproof",
          description: "Resists extreme weather conditions.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Eco-Friendly",
          description: "Low VOC and safe for the environment.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Roof+Seal",
        "https://via.placeholder.com/400x300?text=Leak+Protection",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
    {
      id: "wall-shield",
      name: "ColourTek Wall Shield",
      category: "Interior & Exterior Paints",
      description: "Protective paint for both interior and exterior walls.",
      rating: 4.8,
      reviews: 220,
      coverage: "350-400 sq ft/L",
      dryingTime: "4-5 hours",
      finishType: "Semi-Gloss",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Scratch Resistant",
          description: "Protects walls from minor damages.",
        },
        {
          icon: <Droplets className="h-6 w-6" />,
          title: "Easy to Clean",
          description: "Washable surface for easy maintenance.",
        },
        {
          icon: <Leaf className="h-6 w-6" />,
          title: "Eco-Friendly",
          description: "Safe for use indoors and outdoors.",
        },
      ],
      images: [
        "https://via.placeholder.com/400x300?text=Wall+Shield",
        "https://via.placeholder.com/400x300?text=Dual+Purpose+Paint",
        "https://via.placeholder.com/400x300?text=Premium+Quality",
      ],
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div className="pt-20 text-center">Product not found.</div>;
  }

  return (
    <div className="bg-gray-50 mt-10 pt-20 px-6 max-w-7xl mx-auto">
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="mb-6 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 md:w-2/3">
            {product.description}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, idx) => (
              <svg
                key={idx}
                className={`h-6 w-6 ${
                  idx < product.rating ? "text-yellow-500" : "text-gray-300"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.667.446l2.15 5.747 6.26.385a.75.75 0 01.418 1.368l-4.75 3.65 1.675 6.627a.75.75 0 01-1.14.824l-5.91-3.57-5.91 3.57a.75.75 0 01-1.14-.824l1.675-6.627-4.75-3.65a.75.75 0 01.418-1.368l6.26-.385 2.15-5.747A.75.75 0 0112 2.25z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
            <span className="text-gray-600">{product.reviews} reviews</span>
          </div>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {product.images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <img
              src={image}
              alt={`Image ${index + 1} of ${product.name}`}
              className="object-cover w-full h-72 md:h-96"
            />
          </div>
        ))}
      </section>

      <section className="bg-gray-50 p-8">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
          Key Features
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center bg-white border-2 border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="bg-primary text-white p-4 rounded-full mr-6">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductDetails;