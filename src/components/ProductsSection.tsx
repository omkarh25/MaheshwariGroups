/**
 * ProductsSection Component
 * 
 * Displays a grid of product categories with images and descriptions.
 * Each product card features hover animations and links to detailed product pages.
 */
import React from 'react';

interface Product {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const products: Product[] = [
  {
    href: '/products/panellocks',
    imageSrc: '/images/img2.jpg',
    title: 'Panel Locks',
    description: 'Premium quality panel locks engineered for industrial applications'
  },
  {
    href: '/products/keylocks',
    imageSrc: '/images/img1.jpg',
    title: 'Key Locks',
    description: 'Advanced security solutions for diverse industrial needs'
  },
  {
    href: '/products/hinges',
    imageSrc: '/images/img2.jpg',
    title: 'Hinges',
    description: 'Durable and precision-engineered hinges for heavy-duty use'
  },
  {
    href: '/products/3pointlocks',
    imageSrc: '/images/img1.jpg',
    title: '3-Point Locks',
    description: 'State-of-the-art multi-point locking systems'
  },
  {
    href: '/products/gasketings',
    imageSrc: '/images/img2.jpg',
    title: 'Gasketings',
    description: 'High-quality gasketings for various industrial applications'
  },
  {
    href: '/products/generatoraccessories',
    imageSrc: '/images/img1.jpg',
    title: 'Generator Accessories',
    description: 'Reliable accessories for generator maintenance and performance'
  },
  {
    href: '/products/dmc',
    imageSrc: '/images/img2.jpg',
    title: 'DMC',
    description: 'DMC products for industrial use'
  },
  {
    href: '/products/otherindustrialaccessories',
    imageSrc: '/images/img1.jpg',
    title: 'Other Industrial Accessories',
    description: 'A variety of other industrial accessories'
  }
];

function ProductCard({ href, imageSrc, title, description }: Product) {
  return (
    <a 
      href={href} 
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl 
        transition-all duration-300 animate-fade-in hover:-translate-y-2"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-display font-bold text-primary mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <span className="text-secondary hover:text-secondary-light font-medium inline-flex items-center transition-colors">
          View Catalog
          <i className="fas fa-chevron-right ml-2 text-sm" />
        </span>
      </div>
    </a>
  );
}

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <h2 className="font-display text-4xl font-bold text-center text-primary mb-4">
          Our Premium Products
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Discover our comprehensive range of high-quality industrial hardware solutions 
          designed for reliability and performance.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <ProductCard key={product.href} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
