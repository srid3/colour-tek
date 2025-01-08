import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null); // Updated type

  const navLinks = [
    {
      name: 'Products',
      path: '/products',
      submenu: [
        { name: 'Interior Paints', path: '/products/interior' },
        { name: 'Exterior Paints', path: '/products/exterior' },
        { name: 'Wood & Metal', path: '/products/woodmetal' },
        { name: 'Waterproofing', path: '/products/waterproofing' },
      ]
    },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Colours', path: '/colours' },
    { name: 'Where to Buy', path: '/where-to-buy' }
  ];

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center" onClick={handleLinkClick}>
            <img src="/logo.png" alt="Colourtek" className="h-12" />
            {/* <div className="flex flex-col items-center mt-3">
              <h1 className="text-3xl font-bold">olour Tek</h1>
              <div className="w-full h-0.5 bg-yellow-400"></div>
              <p className="text-sm text-gray-700">Painting Service</p>
            </div> */}
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.submenu ? (
                  <button className="text-gray-700 hover:text-blue-600 flex items-center">
                    {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`text-gray-700 hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : ''}`}
                  >
                    {link.name}
                  </Link>
                )}
                {link.submenu && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity">
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
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" /> // Render X icon when the menu is open
            ) : (
              <Menu className="h-6 w-6" /> // Render Menu icon when the menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-white shadow-lg">
          <div className="space-y-4 px-4 py-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                {link.submenu ? (
                  <details className="group">
                    <summary className="text-gray-700 hover:text-blue-600 flex items-center cursor-pointer">
                      {link.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </summary>
                    <div className="pl-4 mt-2 space-y-2">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block text-gray-700 hover:text-blue-600"
                          onClick={handleLinkClick}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    to={link.path}
                    className={`block text-gray-700 hover:text-blue-600 ${location.pathname === link.path ? 'text-blue-600' : ''}`}
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700"
              onClick={handleLinkClick}
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
