import { Shield, Sun, Droplets } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const Exterior = () => {
  const products: Product[] = [
    {
      id: 'weather-shield',
      name: 'ColourTek Weather Shield',
      description: 'Advanced exterior paint with superior weather protection',
      image: '../exterior1.avif',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
      features: [
        { icon: <Shield />, title: 'Weather Resistant' },
        { icon: <Sun />, title: 'UV Protection' },
        { icon: <Droplets />, title: 'Water Repellent' }
      ],
      coverage: '300-350 sq ft/L',
      finishType: 'Matt'
    },
    {
      id: 'exterior-shield',
      name: 'ColourTek Exterior Shield',
      description: 'Long-lasting exterior paint with anti-algal properties',
      image: '../exterior2.avif',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80',
      features: [
        { icon: <Shield />, title: 'Anti-Algal' },
        { icon: <Sun />, title: 'Color Lock' },
        { icon: <Droplets />, title: 'Crack Bridge' }
      ],
      coverage: '250-300 sq ft/L',
      finishType: 'Smooth'
    }
  ];

  return (
    <div className="pt-20">
      <ProductHero
        title="Exterior Paints"
        description="Protect and beautify your exterior walls with our weather-resistant paints"
        image="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80"
      />
      
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exterior;