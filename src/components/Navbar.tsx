/**
 * Navigation component for the website header
 * Provides links to all product categories and home page
 */
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Maheshwari Groups
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/products/hinges" className="text-gray-300 hover:text-white">
            Hinges
          </Link>
          <Link href="/products/keylocks" className="text-gray-300 hover:text-white">
            Key Locks
          </Link>
          <Link href="/products/panellocks" className="text-gray-300 hover:text-white">
            Panel Locks
          </Link>
          <Link href="/products/3pointlocks" className="text-gray-300 hover:text-white">
            3-Point Locks
          </Link>
          <Link href="/products/gasketings" className="text-gray-300 hover:text-white">
            Gasketings
          </Link>
          <Link href="/products/generatoraccessories" className="text-gray-300 hover:text-white">
            Generator Accessories
          </Link>
          <Link href="/products/dmc" className="text-gray-300 hover:text-white">
            DMC
          </Link>
          <Link href="/products/otherindustrialaccessories" className="text-gray-300 hover:text-white">
            Other Industrial Accessories
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
