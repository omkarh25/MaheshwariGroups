import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maheshwari Groups",
  description: "Industrial Supplies and Accessories",
};

/**
 * Root layout component that wraps all pages
 * Provides consistent navigation and footer across the site
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 min-h-screen flex flex-col`}>
        <ResponsiveNavbar />
        <main className="flex-grow container mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
