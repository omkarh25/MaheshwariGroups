/**
 * Hinges Product Page
 * 
 * Displays a responsive grid of hinge products with detailed overlay view
 * Data sourced from MaheshwariCatalog.xlsx
 */
'use client';

import { useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import ProductOverlay from '../../../components/ProductOverlay';

// Rest of the file remains the same...
interface Product {
  itemNo: number;
  catalog: string;
  companyPartNo: string;
  pageNo?: string;
  partNo: string;
  imageName: string;
  imagePath: string;
}

// Product data from Excel catalog
const products: Product[] = [
  {
    itemNo: 1,
    catalog: "MIS",
    companyPartNo: "MH109",
    pageNo: "259",
    partNo: "SK2-238-4",
    imageName: "SMH1",
    imagePath: "/images/Catalog/Hinges/SMH1.png"
  },
  {
    itemNo: 2,
    catalog: "NRACK",
    companyPartNo: "MH110",
    partNo: "HN 01",
    imageName: "SMH2",
    imagePath: "/images/Catalog/Hinges/SMH2.jpg"
  },
  {
    itemNo: 3,
    catalog: "MIS",
    companyPartNo: "MH112",
    pageNo: "260",
    partNo: "SK2-390",
    imageName: "SMH3",
    imagePath: "/images/Catalog/Hinges/SMH4.jpg"
  },
  {
    itemNo: 4,
    catalog: "NRACK",
    companyPartNo: "MH113A",
    partNo: "HN 14",
    imageName: "SMH4",
    imagePath: "/images/Catalog/Hinges/SMH5.jpg"
  },
  {
    itemNo: 5,
    catalog: "NRACK",
    companyPartNo: "MH118",
    partNo: "HN 17",
    imageName: "SMH5",
    imagePath: "/images/Catalog/Hinges/SMH6.jpg"
  },
  {
    itemNo: 6,
    catalog: "NRACK",
    companyPartNo: "MH111",
    partNo: "HN 23",
    imageName: "SMH6",
    imagePath: "/images/Catalog/Hinges/SMH7.jpg"
  },
  {
    itemNo: 7,
    catalog: "NRACK",
    companyPartNo: "MH119",
    partNo: "HN 27",
    imageName: "SMH7",
    imagePath: "/images/Catalog/Hinges/SMH12.png"
  },
  {
    itemNo: 8,
    catalog: "MIS",
    companyPartNo: "MH128",
    pageNo: "249",
    partNo: "SK2-037S",
    imageName: "SMH8",
    imagePath: "/images/Catalog/Hinges/SMH13.png"
  },
  {
    itemNo: 9,
    catalog: "MIS",
    companyPartNo: "MH148A",
    pageNo: "259",
    partNo: "SK2-238-1",
    imageName: "SMH9",
    imagePath: "/images/Catalog/Hinges/SMH14.png"
  },
  {
    itemNo: 10,
    catalog: "MIS",
    companyPartNo: "MH117",
    pageNo: "258",
    partNo: "SK2-237",
    imageName: "SMH10",
    imagePath: "/images/Catalog/Hinges/SMH15.png"
  },
  {
    itemNo: 11,
    catalog: "MIS",
    companyPartNo: "MH150",
    pageNo: "257",
    partNo: "SK2-063-1AL",
    imageName: "SMH11",
    imagePath: "/images/Catalog/Hinges/SMH16.png"
  },
  {
    itemNo: 12,
    catalog: "MIS",
    companyPartNo: "MH151",
    pageNo: "253",
    partNo: "SK2-057",
    imageName: "SMH12",
    imagePath: "/images/Catalog/Hinges/SMH17.jpg"
  },
  {
    itemNo: 13,
    catalog: "MIS",
    companyPartNo: "MH108",
    pageNo: "253",
    partNo: "SK2-058",
    imageName: "SMH13",
    imagePath: "/images/Catalog/Hinges/SMH18.png"
  },
  {
    itemNo: 14,
    catalog: "MIS",
    companyPartNo: "MH148",
    pageNo: "254",
    partNo: "SK2-060",
    imageName: "SMH14",
    imagePath: "/images/Catalog/Hinges/SMH19.png"
  },
  {
    itemNo: 15,
    catalog: "MIS",
    companyPartNo: "MH126",
    pageNo: "275",
    partNo: "SK2-017",
    imageName: "SMH15",
    imagePath: "/images/Catalog/Hinges/SMH20.png"
  },
  {
    itemNo: 16,
    catalog: "MIS",
    companyPartNo: "MH141",
    pageNo: "275",
    partNo: "SK2-017",
    imageName: "SMH16",
    imagePath: "/images/Catalog/Hinges/SMH21.png"
  },
  {
    itemNo: 17,
    catalog: "NRACK",
    companyPartNo: "MH124",
    partNo: "HL-003-1",
    imageName: "SMH17",
    imagePath: "/images/Catalog/Hinges/SMH22.png"
  },
  {
    itemNo: 18,
    catalog: "MIS",
    companyPartNo: "MH127",
    pageNo: "254",
    partNo: "SK2-063",
    imageName: "SMH18",
    imagePath: "/images/Catalog/Hinges/SMH23.png"
  }
];

export default function HingesPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Hinges</h1>
      
      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.companyPartNo}
            name={`${product.imageName} (${product.partNo})`}
            imagePath={product.imagePath}
            description={`Catalog: ${product.catalog}\nPart No: ${product.partNo}`}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {/* Product overlay */}
      {selectedProduct && (
        <ProductOverlay
          isOpen={isOverlayOpen}
          onClose={handleCloseOverlay}
          product={{
            name: `${selectedProduct.imageName} (${selectedProduct.partNo})`,
            imagePath: selectedProduct.imagePath,
            specifications: {
              "Catalog": selectedProduct.catalog,
              "Company Part No": selectedProduct.companyPartNo,
              "Part No": selectedProduct.partNo,
              ...(selectedProduct.pageNo && { "Page No": selectedProduct.pageNo })
            }
          }}
        />
      )}
    </main>
  );
}
