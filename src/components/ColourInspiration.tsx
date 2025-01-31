import { Link } from 'react-router-dom';
import { Palette } from 'lucide-react';

const ColourInspiration = () => {
  const colourThemes = [
    {
      name: "Modern Minimalist",
      image: "https://ik.imagekit.io/colourtek/tr:w-1200/c1.avif?updatedAt=1736269674935",
      colors: ["#F5F5F5", "#E0E0E0", "#9E9E9E", "#424242"]
    },
    {
      name: "Natural Harmony",
      image: "https://ik.imagekit.io/colourtek/tr:w-1200/c2.avif?updatedAt=1736269675002",
      colors: ["#A8C69F", "#E3D9CA", "#B6A48B", "#8B7355"]
    },
    {
      name: "Urban Sophisticate",
      image: "https://ik.imagekit.io/colourtek/interior2.avif?updatedAt=1736268904886",
      colors: ["#445878", "#92A8D1", "#F1F1F1", "#333333"]
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Colour Inspiration</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover trending colour combinations and get inspired for your next project
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {colourThemes.map((theme, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={theme.image}
                alt={theme.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{theme.name}</h3>
                <div className="flex space-x-2 mb-6">
                  {theme.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Link
                  to="/colour-visualizer"
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  <Palette className="h-5 w-5" />
                  <span>Try in Visualizer</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/colours"
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white"
          >
            Explore All Colours
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ColourInspiration;