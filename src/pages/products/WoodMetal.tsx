import { Shield, Paintbrush, Droplets } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const WoodMetal = () => {
  const products: Product[] = [
    {
      id: 'wood-guard',
      name: 'ColourTek Wood Guard',
      description: 'Premium wood finish for lasting protection and beauty',
      image: 'https://ik.imagekit.io/colourtek/waterproof2.avif?updatedAt=1736268904040',
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
      image: 'https://ik.imagekit.io/colourtek/metal1.avif?updatedAt=1736268904360',
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
        image="https://ik.imagekit.io/colourtek/woodmetal1.avif?updatedAt=1736268904665"
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