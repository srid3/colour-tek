import { Shield, Droplets, Heart } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const Interior = () => {
  const products: Product[] = [
    {
      id: 'premium-emulsion',
      name: 'ColourTek Premium Emulsion',
      description: 'Superior quality interior wall paint with excellent coverage and durability',
      image: 'https://ik.imagekit.io/colourtek/tr:w-1200/int.avif?updatedAt=1736271136937',
      features: [
        { icon: <Shield />, title: 'Superior Coverage' },
        { icon: <Droplets />, title: 'Washable' },
        { icon: <Heart />, title: 'Low VOC' }
      ],
      coverage: '350-400 sq ft/L',
      finishType: 'Matt'
    },
    {
      id: 'silk-luxury',
      name: 'ColourTek Silk Luxury',
      description: 'Luxurious silk finish paint for a smooth and elegant look',
      image: 'https://ik.imagekit.io/colourtek/tr:w-1200/int2.avif?updatedAt=1736271393264',
      features: [
        { icon: <Shield />, title: 'Silk Finish' },
        { icon: <Droplets />, title: 'Stain Resistant' },
        { icon: <Heart />, title: 'Easy Clean' }
      ],
      coverage: '400-450 sq ft/L',
      finishType: 'Silk'
    }
  ];

  return (
    <div className="pt-20">
      <ProductHero
        title="Interior Paints"
        description="Transform your indoor spaces with our premium interior paint collection"
        image="https://ik.imagekit.io/colourtek/tr:w-1200/interior.avif?updatedAt=1736271196230"
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

export default Interior;