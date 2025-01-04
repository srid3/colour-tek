import { Shield, Paintbrush, Droplets } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const WoodMetal = () => {
  const products: Product[] = [
    {
      id: 'wood-guard',
      name: 'ColourTek Wood Guard',
      description: 'Premium wood finish for lasting protection and beauty',
      image: '../wood1.avif',
      image: 'https://images.unsplash.com/photo-1610505466122-b1fe0e911a57?auto=format&fit=crop&q=80',
      features: [
        { icon: <Shield />, title: 'Deep Protection' },
        { icon: <Paintbrush />, title: 'Rich Finish' },
        { icon: <Droplets />, title: 'Water Resistant' }
      ],
      coverage: '150-200 sq ft/L',
      finishType: 'Satin'
    },
    {
      id: 'metal-shield',
      name: 'ColourTek Metal Shield',
      description: 'Anti-corrosive paint for metal surfaces',
      image: '../metal1.avif',
      image: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?auto=format&fit=crop&q=80',
      features: [
        { icon: <Shield />, title: 'Rust Protection' },
        { icon: <Paintbrush />, title: 'Quick Dry' },
        { icon: <Droplets />, title: 'Weather Resistant' }
      ],
      coverage: '120-150 sq ft/L',
      finishType: 'Gloss'
    }
  ];

  return (
    <div className="pt-20">
      <ProductHero
        title="Wood & Metal Paints"
        description="Specialized coatings for wood and metal surfaces"
        image="../woodmetal1.avif"
        image="https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&q=80"
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

export default WoodMetal;