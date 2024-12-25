/**
 * Footer component displayed at the bottom of every page
 */
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Maheshwari Groups. All rights reserved.</p>
    </footer>
  )
}

export default Footer
