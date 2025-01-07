import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import Colours from './pages/Colours';
import About from './pages/About';
import Contact from './pages/Contact';
import WhereToBuy from './pages/WhereToBuy';
// import ProductDetails from './pages/ProductDetails';
import ColourVisualizer from './pages/ColourVisualizer';
import Interior from './pages/products/Interior';
import Exterior from './pages/products/Exterior';
import Waterproofing from './pages/products/Waterproofing';
import WoodMetal from './pages/products/WoodMetal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import Sitemap from './pages/Sitemap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/interior" element={<Interior />} />
          <Route path="products/exterior" element={<Exterior />} />
          <Route path="products/woodmetal" element={<WoodMetal />} />
          <Route path="products/waterproofing" element={<Waterproofing />} />
          {/* <Route path="products/:id" element={<ProductDetails />} /> */}
          <Route path="solutions" element={<Solutions />} />
          <Route path="colours" element={<Colours />} />
          <Route path="colour-visualizer" element={<ColourVisualizer />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="where-to-buy" element={<WhereToBuy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="sitemap" element={<Sitemap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;