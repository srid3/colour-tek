import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, ShoppingBag } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    {
      name: 'Products',
      path: '/products',
      submenu: [
        { name: 'Interior Paints', path: '/products/interior' },
        { name: 'Exterior Paints', path: '/products/exterior' },
        { name: 'Wood & Metal', path: '/products/woodmetal' },
        { name: 'Waterproofing', path: '/products/waterproofing' }
      ]
    },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Colours', path: '/colours' },
    { name: 'Where to Buy', path: '/where-to-buy' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <LazyLoadImage src="/logo.avif" alt="Colourtek" className="h-12" />
            <div className="flex flex-col items-center mt-3">
              <h1 className="text-3xl font-bold">olour Tek</h1>
              <div className="w-full h-0.5 bg-yellow-400"></div>
              <p className="text-sm text-gray-700">Painting Service</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button 
                    className="text-gray-700 hover:text-blue-600 flex items-center"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                  >
                    {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link 
                    to={link.path}
                    className={`text-gray-700 hover:text-blue-600 ${
                      location.pathname === link.path ? 'text-blue-600' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
                
                {link.submenu && isProductsOpen && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2">
                    {link.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-blue-600">
                <ShoppingBag className="h-5 w-5" />
              </button>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;