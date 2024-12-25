/**
 * Home page component for Maheshwari Groups website
 * 
 * Assembles the landing page sections in the correct order
 * and manages the overall page layout.
 */
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import AboutSection from '../components/AboutSection';
import PartnersSection from '../components/PartnersSection';

export default function HomePage() {
  return (
    <main className="bg-neutral-background">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <PartnersSection />
    </main>
  );
}
