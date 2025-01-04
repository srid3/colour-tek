import { LazyLoadImage } from 'react-lazy-load-image-component';

type ProductHeroProps = {
  title: string;
  description: string;
  image: string;
};

const ProductHero = ({ title, description, image }: ProductHeroProps) => {
  return (
    <div className="relative h-[400px] mb-16">
      <div className="absolute inset-0">
        <LazyLoadImage
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl max-w-2xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;