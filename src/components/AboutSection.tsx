/**
 * AboutSection Component
 * 
 * Displays company information, certifications, and key features
 * in an engaging layout with animated cards.
 */
import React from 'react';

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: 'industry',
    title: 'Industry Expertise',
    description: 'Leveraging decades of experience to deliver innovative industrial solutions'
  },
  {
    icon: 'certificate',
    title: 'ISO 9001:2000 Certified',
    description: 'Maintaining rigorous international quality standards in all operations'
  },
  {
    icon: 'cogs',
    title: 'Quality Assurance',
    description: 'Comprehensive quality control with expert analysis at every stage'
  }
];

function FeatureCard({ icon, title, description }: FeatureCard) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-lg text-center group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-right">
      <i className={`fas fa-${icon} text-5xl text-secondary mb-6 group-hover:scale-110 transition-transform`} />
      <h3 className="text-2xl font-display font-bold text-primary mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-primary-light">
      <div className="container mx-auto px-6 max-w-8xl">
        <h2 className="font-display text-4xl font-bold text-center text-primary mb-4">
          About Maheshwari Industrial Supplies
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Four decades of excellence in industrial hardware solutions
        </p>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Maheshwari Industrial Supplies stands as a leading manufacturer & supplier of comprehensive 
            industrial hardware solutions. Our expertise spans across a wide range of control panel 
            accessories, including Acoustic Enclosure Locks, Hinges, 3 Point Locks, Mechanical 
            Interlock Hinges, and more.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With decades of industry experience and deep technical knowledge, we consistently deliver 
            innovative solutions that meet the evolving needs of modern industrial applications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
