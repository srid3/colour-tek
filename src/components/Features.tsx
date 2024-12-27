import { Shield, Droplets, Heart, Sun } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Superior Protection",
      description: "Advanced formula that shields your walls from damage"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Easy Application",
      description: "Smooth and effortless application for perfect results"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Eco-Friendly",
      description: "Low VOC formulation safe for your family and environment"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Long-Lasting",
      description: "Durable finish that maintains its beauty for years"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Colourtek?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the perfect combination of innovation and quality with our advanced paint technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
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
  );
};

export default Features;