import { Shield, Users, Leaf, Award } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const About = () => {
  const milestones = [
    { year: "1970", event: "Founded as a small paint shop" },
    { year: "1985", event: "Launched first eco-friendly paint line" },
    { year: "2000", event: "Expanded nationwide with 100+ stores" },
    { year: "2010", event: "Introduced advanced colour technology" },
    { year: "2020", event: "Achieved carbon-neutral operations" }
  ];

  const values = [
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Quality",
      description: "Committed to delivering superior products that exceed expectations"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Customer Focus",
      description: "Putting our customers first in everything we do"
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Sustainability",
      description: "Dedicated to environmental responsibility and green practices"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Innovation",
      description: "Continuously improving our products and processes"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <div className="absolute inset-0">
          <LazyLoadImage
            src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl">
              Leading the way in innovative paint solutions since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the world's most trusted and innovative paint company,
              transforming spaces and enriching lives through color and protection.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide superior quality paints and coatings that protect,
              beautify, and enhance the spaces where people live, work, and play.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:w-1/2"></div>
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1 md:w-1/2 p-6 bg-white rounded-lg shadow-lg ml-4 md:ml-0 md:mx-4">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="text-center">
                <LazyLoadImage
                  src={`https://images.unsplash.com/photo-${
                    index === 0
                      ? '1560250097-0b93528c311a'
                      : index === 1
                      ? '1573496359142-b89c29f46f0b'
                      : '1573497019940-1c28c88b4f3e'
                  }?auto=format&fit=crop&q=80`}
                  alt="Team Member"
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">
                  {index === 0
                    ? 'John Smith'
                    : index === 1
                    ? 'Sarah Johnson'
                    : 'Michael Chen'}
                </h3>
                <p className="text-gray-600">
                  {index === 0
                    ? 'CEO'
                    : index === 1
                    ? 'Head of Innovation'
                    : 'Technical Director'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;