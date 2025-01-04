import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Heart, Download } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Colours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Colors' },
    { id: 'neutral', name: 'Neutrals' },
    { id: 'warm', name: 'Warm Colors' },
    { id: 'cool', name: 'Cool Colors' },
    { id: 'bold', name: 'Bold & Vibrant' }
  ];

  const colours = [
    {
      name: "Morning Mist",
      code: "#E8E8E8",
      category: "neutral",
      image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?auto=format&fit=crop&q=80"
    },
    {
      name: "Desert Sand",
      code: "#E5C7A3",
      category: "warm",
      image: "https://images.unsplash.com/photo-1509005084666-3cbc75184cbb?auto=format&fit=crop&q=80"
    },
    {
      name: "Ocean Blue",
      code: "#4F8CB6",
      category: "cool",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80"
    },
    {
      name: "Forest Green",
      code: "#3C6E47",
      category: "cool",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80"
    },
    {
      name: "Sunset Orange",
      code: "#F4845F",
      category: "warm",
      image: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&q=80"
    },
    {
      name: "Royal Purple",
      code: "#7B4B94",
      category: "bold",
      image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80"
    }
  ];

  const filteredColours = selectedCategory === 'all'
    ? colours
    : colours.filter(colour => colour.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80"
            alt="Colours Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Colour Collection</h1>
            <p className="text-xl max-w-2xl mb-8">
              Explore our curated collection of colours to find the perfect shade for your space
            </p>
            <Link
              to="/colour-visualizer"
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 inline-flex items-center"
            >
              <Palette className="h-5 w-5 mr-2" />
              Try Colour Visualizer
            </Link>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Colour Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {filteredColours.map((colour, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <LazyLoadImage
                  src={colour.image}
                  alt={colour.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 0%, ${colour.code}99 100%)`
                  }}
                ></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">{colour.name}</h3>
                    <p className="text-gray-600">{colour.code}</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full border-2 border-gray-200"
                    style={{ backgroundColor: colour.code }}
                  ></div>
                </div>
                <div className="flex space-x-4">
                  <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    <Palette className="h-4 w-4" />
                    <span>Try It</span>
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-500">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-600">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Colour Guide */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Colour Selection Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Room Size & Light</h3>
              <p className="text-gray-600">
                Consider the size of your room and natural light when selecting colours.
                Lighter shades can make small spaces feel larger, while darker tones add coziness to spacious rooms.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Colour Psychology</h3>
              <p className="text-gray-600">
                Different colours evoke different emotions. Blues are calming, yellows energizing,
                and greens bring a natural balance. Choose colours that match your room's purpose.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Colour Combinations</h3>
              <p className="text-gray-600">
                Use the 60-30-10 rule: 60% dominant colour, 30% secondary colour,
                and 10% accent colour for a balanced and harmonious look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colours;