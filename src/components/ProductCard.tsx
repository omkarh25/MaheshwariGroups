/**
 * ProductCard Component
 * 
 * A reusable card component for displaying product information
 * with responsive design and click handling for overlay display
 */
import Image from 'next/image';
import { useState } from 'react';

interface ProductCardProps {
  name: string;
  imagePath: string;
  description?: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imagePath,
  description,
  onClick
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className="group relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="aspect-w-4 aspect-h-3 w-full">
        <Image
          src={imagePath}
          alt={name}
          fill
          className={`
            object-cover
            duration-700 ease-in-out
            ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          `}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
        )}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
    </div>
  );
};

export default ProductCard;
