import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Nippon Paint Neo" className="h-12" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Solutions</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Colours</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Where to Buy</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
              Contact Us
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700">Products</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Solutions</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Colours</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Where to Buy</a>
            <a href="#" className="block px-3 py-2 text-blue-600">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;