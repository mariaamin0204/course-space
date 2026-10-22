import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm transition-all shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-gray-900 tracking-tight">
              Course<span className="text-[#127C71]">space</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="text-gray-600 hover:text-[#127C71] font-medium transition-colors">
              Home
            </a>
            <a href="#courses" className="text-gray-600 hover:text-[#127C71] font-medium transition-colors">
              Courses
            </a>
            <a href="#testimonial" className="text-gray-600 hover:text-[#127C71] font-medium transition-colors">
              Testimonial
            </a>
            <a href="#mentor" className="text-gray-600 hover:text-[#127C71] font-medium transition-colors">
              Mentor
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2.5 rounded-full text-[#127C71] border border-[#127C71] hover:bg-[#127C71] hover:text-white font-medium transition-all duration-200">
              Sign In
            </button>
            <button className="px-5 py-2.5 rounded-full bg-[#127C71] text-white hover:bg-[#0d5d55] font-medium transition-all duration-200 shadow-md hover:shadow-lg">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-[#127C71] p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#127C71] hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#127C71] hover:bg-gray-50"
          >
            Courses
          </a>
          <a
            href="#testimonial"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#127C71] hover:bg-gray-50"
          >
            Testimonial
          </a>
          <a
            href="#mentor"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#127C71] hover:bg-gray-50"
          >
            Mentor
          </a>
          <div className="pt-4 flex flex-col space-y-2 border-t border-gray-100">
            <button className="w-full py-2.5 rounded-full text-[#127C71] border border-[#127C71] font-medium hover:bg-[#127C71] hover:text-white transition-all">
              Sign In
            </button>
            <button className="w-full py-2.5 rounded-full bg-[#127C71] text-white font-medium hover:bg-[#0d5d55] transition-all">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;