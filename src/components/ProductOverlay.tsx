/**
 * ProductOverlay Component
 * 
 * A modal overlay component for displaying detailed product information
 * with responsive design and animation
 */
import Image from 'next/image';
import { useEffect } from 'react';

interface ProductOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    imagePath: string;
    description?: string;
    specifications?: Record<string, string>;
  };
}

const ProductOverlay: React.FC<ProductOverlayProps> = ({
  isOpen,
  onClose,
  product
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:align-middle">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {/* Product Image */}
              <div className="relative h-64 w-full sm:h-96 sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="mt-3 text-center sm:mt-0 sm:text-left sm:w-1/2">
                <h3 className="text-2xl font-semibold leading-6 text-gray-900 mb-4">
                  {product.name}
                </h3>
                
                {product.description && (
                  <div className="mb-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Description</h4>
                    <p className="text-sm text-gray-600">{product.description}</p>
                  </div>
                )}

                {product.specifications && Object.keys(product.specifications).length > 0 && (
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2">Specifications</h4>
                    <dl className="space-y-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <dt className="font-medium text-gray-600">{key}:</dt>
                          <dd className="text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal footer */}
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverlay;
