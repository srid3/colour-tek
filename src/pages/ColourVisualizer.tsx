import React, { useState } from 'react';
import { Upload, Camera, Palette, RotateCcw } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ColourVisualizer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedColour, setSelectedColour] = useState("#E8E8E8");

  const colours = [
    { name: "Morning Mist", code: "#E8E8E8" },
    { name: "Desert Sand", code: "#E5C7A3" },
    { name: "Ocean Blue", code: "#4F8CB6" },
    { name: "Forest Green", code: "#3C6E47" },
    { name: "Sunset Orange", code: "#F4845F" },
    { name: "Royal Purple", code: "#7B4B94" }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Colour Visualizer</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload a photo of your room and experiment with different colours to visualize
            your perfect space before you paint
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Image Upload Area */}
          <div className="md:col-span-2">
            {selectedImage ? (
              <div className="relative rounded-lg overflow-hidden">
                <LazyLoadImage
                  src={selectedImage}
                  alt="Room Preview"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-4 right-4 space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                    <RotateCcw className="h-5 w-5" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                    <Camera className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-[600px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <label className="cursor-pointer">
                    <span className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                      Upload Image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <p className="text-gray-500 mt-2">or drag and drop</p>
                </div>
              </div>
            )}
          </div>

          {/* Colour Selection Panel */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-6">Choose Your Colour</h2>
            
            {/* Colour Picker */}
            <div className="mb-8">
              <div
                className="w-full h-40 rounded-lg mb-4"
                style={{ backgroundColor: selectedColour }}
              ></div>
              <input
                type="color"
                value={selectedColour}
                onChange={(e) => setSelectedColour(e.target.value)}
                className="w-full h-12 cursor-pointer"
              />
            </div>

            {/* Preset Colours */}
            <h3 className="font-semibold mb-4">Popular Colours</h3>
            <div className="grid grid-cols-3 gap-4">
              {colours.map((colour, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center"
                  onClick={() => setSelectedColour(colour.code)}
                >
                  <div
                    className="w-12 h-12 rounded-full border-2 border-gray-200 mb-2"
                    style={{ backgroundColor: colour.code }}
                  ></div>
                  <span className="text-sm text-gray-600">{colour.name}</span>
                </button>
              ))}
            </div>

            {/* Tools */}
            <div className="mt-8">
              <h3 className="font-semibold mb-4">Tools</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200">
                  <Palette className="h-5 w-5" />
                  <span>Save to My Colours</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                  <Camera className="h-5 w-5" />
                  <span>Take Screenshot</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColourVisualizer;