import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About ColourTek</h3>
            <p className="text-gray-400">
              Leading the way in innovative paint solutions with superior quality and sustainable practices.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/colours" className="text-gray-400 hover:text-white">Colour Selection</a></li>
              <li><a href="/where-to-buy" className="text-gray-400 hover:text-white">Where to Buy</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ColourTek Paints. All rights reserved.</p>
          <div className="mt-4">
            <ul className="flex justify-center space-x-6">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-white">Terms and Conditions</a></li>
              <li><a href="/sitemap" className="hover:text-white">Site Map</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
