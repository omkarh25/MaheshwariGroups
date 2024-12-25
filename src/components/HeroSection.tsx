/**
 * HeroSection Component
 * 
 * Displays the main hero section of the landing page with a background image,
 * headline, and call-to-action button.
 */
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/img1.jpg" 
          alt="Industrial Hardware" 
          className="w-full h-full object-cover scale-105 transition-transform duration-10000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="relative z-10 container mx-auto px-6 max-w-8xl h-full flex items-center">
        <div className="text-white max-w-3xl animate-fade-in">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Leading Industrial Hardware Solutions
          </h2>
          <p className="text-xl md:text-2xl font-light mb-8 text-gray-100">
            Your trusted partner for premium quality industrial supplies since 1980
          </p>
          <Button 
            href="#products"
            variant="secondary"
            className="inline-flex items-center animate-bounce-soft"
          >
            Explore Products
            <i className="fas fa-arrow-right ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
