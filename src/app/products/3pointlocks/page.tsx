/**
 * 3PointLocks Product Page
 * 
 * Displays a responsive grid of 3-point lock products with detailed overlay view
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

const products: Product[] = [
  {
    itemNo: 1,
    catalog: "MIS",
    companyPartNo: "M3L01",
    pageNo: "57",
    partNo: "SK1-081-2",
    imageName: "TPLS1",
    imagePath: "/images/Catalog/3PointLocks/TPLS1.jpg"
  },
  {
    itemNo: 2,
    catalog: "NRACK",
    companyPartNo: "M3L02",
    partNo: "M5 1002Z-1-1",
    imageName: "TPLS2",
    imagePath: "/images/Catalog/3PointLocks/TPLS2.jpg"
  },
  {
    itemNo: 3,
    catalog: "MIS",
    companyPartNo: "M3L03",
    pageNo: "60",
    partNo: "SK1-083-2B",
    imageName: "TPLS3",
    imagePath: "/images/Catalog/3PointLocks/TPLS3.png"
  },
  {
    itemNo: 4,
    catalog: "MIS",
    companyPartNo: "M3L04",
    pageNo: "53",
    partNo: "SK1-028",
    imageName: "TPLS4",
    imagePath: "/images/Catalog/3PointLocks/TPLS4.png"
  },
  {
    itemNo: 5,
    catalog: "MIS",
    companyPartNo: "M3L05",
    pageNo: "55",
    partNo: "SK1-033-1",
    imageName: "TPLS5",
    imagePath: "/images/Catalog/3PointLocks/TPLS5.jpg"
  },
  {
    itemNo: 6,
    catalog: "NRACK",
    companyPartNo: "M3L06",
    partNo: "M5 480-2-1",
    imageName: "TPLS6",
    imagePath: "/images/Catalog/3PointLocks/TPLS6.jpg"
  },
  {
    itemNo: 7,
    catalog: "MIS",
    companyPartNo: "M3L07",
    pageNo: "52",
    partNo: "SK1-LG2",
    imageName: "TPLS7",
    imagePath: "/images/Catalog/3PointLocks/TPLS7.jpg"
  },
  {
    itemNo: 8,
    catalog: "NRACK",
    companyPartNo: "M3L21",
    partNo: "M5-100-3",
    imageName: "TPLS8",
    imagePath: "/images/Catalog/3PointLocks/TPLS8.jpg"
  },
  {
    itemNo: 9,
    catalog: "NRACK",
    companyPartNo: "M3L22",
    partNo: "M5 4086Z-1-1B",
    imageName: "TPLS9",
    imagePath: "/images/Catalog/3PointLocks/TPLS9.jpg"
  },
  {
    itemNo: 10,
    catalog: "MIS",
    companyPartNo: "M3L26",
    pageNo: "60",
    partNo: "SK1-085-3",
    imageName: "TPLS10",
    imagePath: "/images/Catalog/3PointLocks/TPLS10.png"
  },
  {
    itemNo: 11,
    catalog: "MIS",
    companyPartNo: "M3L27",
    pageNo: "61",
    partNo: "SK1-090",
    imageName: "TPLS11",
    imagePath: "/images/Catalog/3PointLocks/TPLS11.jpg"
  },
  {
    itemNo: 12,
    catalog: "MIS",
    companyPartNo: "M3L30",
    pageNo: "54",
    partNo: "SK1-029",
    imageName: "TPLS12",
    imagePath: "/images/Catalog/3PointLocks/TPLS12.jpg"
  },
  {
    itemNo: 13,
    catalog: "MIS",
    companyPartNo: "M3L31",
    pageNo: "51",
    partNo: "SK1-LG1",
    imageName: "TPLS13",
    imagePath: "/images/Catalog/3PointLocks/TPLS13.jpg"
  },
  {
    itemNo: 14,
    catalog: "NRACK",
    companyPartNo: "M3L09",
    partNo: "M5102-1",
    imageName: "TPLS14",
    imagePath: "/images/Catalog/3PointLocks/TPLS14.jpg"
  },
  {
    itemNo: 15,
    catalog: "MIS",
    companyPartNo: "M3L09",
    pageNo: "70",
    partNo: "R3-01",
    imageName: "TPLS15",
    imagePath: "/images/Catalog/3PointLocks/TPSL15.png"
  },
  {
    itemNo: 16,
    catalog: "MIS",
    companyPartNo: "M3L10",
    pageNo: "64",
    partNo: "R1-01",
    imageName: "TPLS16",
    imagePath: "/images/Catalog/3PointLocks/TPSL16.png"
  },
  {
    itemNo: 17,
    catalog: "MIS",
    companyPartNo: "M3L12",
    pageNo: "64",
    partNo: "R1-03",
    imageName: "TPLS17",
    imagePath: "/images/Catalog/3PointLocks/TPSL17.png"
  },
  {
    itemNo: 18,
    catalog: "MIS",
    companyPartNo: "M3L11",
    pageNo: "65",
    partNo: "R1-05",
    imageName: "TPLS18",
    imagePath: "/images/Catalog/3PointLocks/TPSL18.png"
  },
  {
    itemNo: 19,
    catalog: "MIS",
    companyPartNo: "M3L14",
    pageNo: "70",
    partNo: "1-T3PS81",
    imageName: "TPLS19",
    imagePath: "/images/Catalog/3PointLocks/TPSL19.png"
  },
  {
    itemNo: 20,
    catalog: "MIS",
    companyPartNo: "M3L15",
    pageNo: "76",
    partNo: "SG-Y09-1000",
    imageName: "TPLS20",
    imagePath: "/images/Catalog/3PointLocks/TPLS20.png"
  },
  {
    itemNo: 21,
    catalog: "MIS",
    companyPartNo: "M3L16",
    pageNo: "71",
    partNo: "SG-B02-1000",
    imageName: "TPLS21",
    imagePath: "/images/Catalog/3PointLocks/TPLS21.png"
  },
  {
    itemNo: 22,
    catalog: "MIS",
    companyPartNo: "M3L29",
    pageNo: "74",
    partNo: "SG-Y05-1000",
    imageName: "TPLS22",
    imagePath: "/images/Catalog/3PointLocks/TPLS22.png"
  }
];

export default function ThreePointLocksPage() {
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
      <h1 className="text-3xl font-bold text-gray-900 mb-8">3-Point Locks</h1>
      
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
