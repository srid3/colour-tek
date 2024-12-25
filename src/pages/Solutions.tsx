import React from 'react';
import { Shield, Home, Building2, Factory } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Residential",
      description: "Complete painting solutions for homes",
      applications: [
        "Interior Walls",
        "Exterior Facades",
        "Wood Furniture",
        "Metal Surfaces"
      ]
    },
    {
      icon: <Building2 className="h-12 w-12" />,
      title: "Commercial",
      description: "Durable finishes for commercial spaces",
      applications: [
        "Office Buildings",
        "Retail Spaces",
        "Hotels",
        "Restaurants"
      ]
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: "Industrial",
      description: "Heavy-duty coatings for industrial use",
      applications: [
        "Manufacturing Plants",
        "Warehouses",
        "Storage Tanks",
        "Equipment"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80"
            alt="Solutions Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Paint Solutions</h1>
            <p className="text-xl max-w-2xl">
              Specialized coating solutions for every sector and application
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-blue-600 mb-6">
                {solution.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <h3 className="font-semibold mb-3">Applications:</h3>
              <ul className="space-y-2">
                {solution.applications.map((app, i) => (
                  <li key={i} className="flex items-center">
                    <Shield className="h-4 w-4 text-blue-600 mr-2" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
                alt="Commercial Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Hotel Chain</h3>
                <p className="text-gray-600 mb-4">
                  Complete interior and exterior painting solution for a 5-star hotel chain,
                  featuring our premium anti-bacterial and weather-shield coatings.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Read Case Study →
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                alt="Industrial Project"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Industrial Complex</h3>
                <p className="text-gray-600 mb-4">
                  Industrial-grade protective coatings for a manufacturing facility,
                  providing superior protection against harsh environmental conditions.
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Read Case Study →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;