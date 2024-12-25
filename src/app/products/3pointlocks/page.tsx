/**
 * Page component for displaying 3-Point Locks products
 * Implements a responsive layout with product information
 */
'use client';

import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

export default function ThreePointLocksPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-50 p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-900">3-Point Locks</h1>
          <p className="mt-2 text-gray-600">
            Explore our comprehensive range of high-quality 3-Point Locks designed for superior security and reliability.
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6">
          {/* Product Images */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/KeyLock1.png"
                alt="3-Point Lock Front View"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/images/KeyLock2.png"
                alt="3-Point Lock Side View"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Enhanced security with three locking points
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Durable construction for long-lasting performance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Easy installation and maintenance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Suitable for various industrial applications
              </li>
            </ul>
          </div>

          {/* Applications Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Industrial Cabinets</h3>
                <p className="text-sm text-gray-600 mt-1">Perfect for securing industrial control cabinets</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Equipment Enclosures</h3>
                <p className="text-sm text-gray-600 mt-1">Ideal for protecting valuable equipment</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-800">Security Doors</h3>
                <p className="text-sm text-gray-600 mt-1">Enhanced security for industrial doors</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
