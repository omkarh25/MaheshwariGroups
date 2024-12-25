'use client';

/**
 * Contact section component with interactive elements
 * Implements SOLID principles and handles user interactions
 */
import { useState } from 'react';
import Button from './Button';

const ContactSection = () => {
  const [showForm, setShowForm] = useState(false);

  const handleContact = () => {
    // For now, just toggle the form visibility
    // In a real application, this could open a modal or navigate to a contact form
    setShowForm(!showForm);
  };

  return (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-xl font-semibold text-blue-900 mb-2">Need More Information?</h2>
      <p className="text-blue-700 mb-4">
        Contact our team for detailed specifications, pricing, and customization options.
      </p>
      <Button onClick={handleContact}>
        Contact Us
      </Button>
      
      {showForm && (
        <div className="mt-4 p-4 bg-white rounded-lg">
          <p className="text-gray-700">
            Please email us at info@maheshwarigroups.com or call us at +91-XXXXXXXXXX
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
