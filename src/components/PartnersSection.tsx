/**
 * PartnersSection Component
 * 
 * Displays a grid of trusted partner companies with hover animations
 * and external links to their websites.
 */
import React from 'react';

interface Partner {
  name: string;
  href: string;
}

const partners: Partner[] = [
  {
    name: 'Keyman',
    href: 'https://www.keyman.com'
  },
  {
    name: 'Electro',
    href: 'https://www.electro-industries.com'
  },
  {
    name: 'SFX',
    href: 'https://www.sfx-electronics.com'
  },
  {
    name: 'IndoAsian',
    href: 'https://www.indoasian.com'
  },
  {
    name: 'HPL',
    href: 'https://www.hpl.in'
  }
];

export default function PartnersSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-8xl">
        <h2 className="font-display text-4xl font-bold text-center text-primary mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Collaborating with industry leaders to deliver excellence
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-logo p-6 text-center group hover:bg-primary-light rounded-xl 
                transition-all duration-300 animate-float"
            >
              <h3 className="text-xl font-display font-bold text-primary group-hover:text-secondary 
                transition-colors">
                {partner.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
