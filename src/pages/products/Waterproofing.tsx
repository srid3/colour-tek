import { Shield, Droplets, Sun } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const Waterproofing = () => {
  const products: Product[] = [
    {
      id: 'roof-seal',
      name: 'ColourTek Roof Seal',
      description: 'Advanced roof waterproofing solution',
      image: 'https://ik.imagekit.io/colourtek/uzun-firca-ile-likit-malzeme-suren-isci.jpg?updatedAt=1736272065487',
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
      image: 'https://ik.imagekit.io/colourtek/waterproof.avif?updatedAt=1736268899810',
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
        image='https://ik.imagekit.io/colourtek/tr:w-1200/wp.avif?updatedAt=1736271917894'
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