import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 py-6 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Wilcox Oil Company Logo" className="w-[100px]" />
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-tight">
                Wilcox Oil
              </span>
              <span className="text-xs text-gray-600 leading-tight">
                Powering Infrastructure. Building the Future.
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">

            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              Home
            </Link>

            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              About Us
            </Link>

            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              Services
            </Link>

            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              Projects
            </Link>

            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              Careers
            </Link>

            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-amber-600">
              Contact
            </Link>

          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-amber-600 text-white text-sm px-4 py-2 rounded-md hover:bg-amber-700 transition"
          >
            Request Quote
          </Link>

          {/* Mobile Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-6 space-y-4">

            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600">
              Home
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600">
              About Us
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600">
              Services
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600">
              Projects
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600">
              Careers
            </Link>

            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-amber-600">
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
            >
              Request Quote
            </Link>

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;