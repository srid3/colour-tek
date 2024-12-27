import { Shield, Droplets, Sun } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const Waterproofing = () => {
  const products: Product[] = [
    {
      id: 'roof-seal',
      name: 'ColourTek Roof Seal',
      description: 'Advanced roof waterproofing solution',
      image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80',
      features: [
        { icon: <Shield />, title: 'Leak Protection' },
        { icon: <Droplets />, title: 'Water Resistant' },
        { icon: <Sun />, title: 'UV Stable' }
      ],
      coverage: '40-50 sq ft/L',
      finishType: 'Matt'
    },
    {
      id: 'wall-shield',
      name: 'ColourTek Wall Shield',
      description: 'Exterior wall waterproofing coating',
      image: 'https://images.unsplash.com/photo-1621873495884-845a939892d4?auto=format&fit=crop&q=80',
      features: [
        { icon: <Shield />, title: 'Crack Bridging' },
        { icon: <Droplets />, title: 'Moisture Guard' },
        { icon: <Sun />, title: 'All Weather' }
      ],
      coverage: '30-40 sq ft/L',
      finishType: 'Textured'
    }
  ];

  return (
    <div className="pt-20">
      <ProductHero
        title="Waterproofing Solutions"
        description="Complete waterproofing solutions for lasting protection"
        image="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80"
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

export default Waterproofing;