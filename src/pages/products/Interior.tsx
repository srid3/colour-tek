import { Shield, Droplets, Heart } from 'lucide-react';
import ProductHero from '../../components/ProductHero';
import ProductCard, { Product } from '../../components/ProductCard';

const Interior = () => {
  const products: Product[] = [
    {
      id: 'premium-emulsion',
      name: 'ColourTek Premium Emulsion',
      description: 'Superior quality interior wall paint with excellent coverage and durability',
      image: '../interior1.jpg',
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
      image: '../interior2.jpg',
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
        image="https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80"
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