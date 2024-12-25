'use client';

/**
 * HeroSection Component
 * 
 * Displays the main hero section of the landing page with a background image,
 * headline, and call-to-action button.
 */
import { useState } from 'react';
import Button from './Button';

/**
 * HeroSection Component
 * 
 * Displays the main hero section of the landing page with a background image,
 * headline, call-to-action button, and PDF catalog viewer modal.
 */
export default function HeroSection() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  /**
   * Handles opening and closing the PDF catalog modal
   */
  const togglePdfViewer = () => {
    setIsPdfOpen(!isPdfOpen);
  };

  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/Cover1.jpg" 
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
            onClick={togglePdfViewer}
            variant="secondary"
            className="inline-flex items-center animate-bounce-soft"
          >
            View Catalog
            <i className="fas fa-book-open ml-2" />
          </Button>

          {/* PDF Viewer Modal */}
          {isPdfOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
              <div className="relative w-full max-w-6xl h-[90vh] bg-white rounded-lg shadow-xl">
                {/* Close button */}
                <button
                  onClick={togglePdfViewer}
                  className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-full z-10"
                >
                  ×
                </button>
                {/* PDF Viewer */}
                <iframe
                  src="/MHBCatalog.pdf"
                  className="w-full h-full rounded-lg"
                  title="MHB Catalog"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
