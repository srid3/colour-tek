import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export type ProductFeature = {
  icon: React.ReactNode;
  title: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  features: ProductFeature[];
  coverage: string;
  finishType: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="h-4 w-4 mr-2" />
            Coverage: {product.coverage}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Shield className="h-4 w-4 mr-2" />
            Finish: {product.finishType}
          </div>
        </div>
        <Link
          to={`/products/${product.id}`}
          className="block text-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;