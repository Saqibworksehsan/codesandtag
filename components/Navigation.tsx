'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/logo2.png" 
              alt="Codes & Tags Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="font-light text-xl text-gray-900">Codes & Tags</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Home
            </Link>
            <Link href="/trademark-form" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
            <Link href="/trademarks" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Trademarks
            </Link>
            <Link href="/copyrights" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Copyrights
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-light"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Resources
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border border-gray-100 z-50"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-light"
                    >
                      Blog (Coming Soon)
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-light">
              Contact
            </Link>

            <Button 
              onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20know%20about%20your%20services', '_blank')}
              className="bg-red-600 hover:bg-red-700 text-white font-normal"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/trademarks" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                onClick={closeMenu}
              >
                Trademarks
              </Link>
              <Link 
                href="/copyrights" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                onClick={closeMenu}
              >
                Copyrights
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-600 hover:text-gray-900 transition-colors font-light"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <div className="pt-4">
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20know%20about%20your%20services', '_blank');
                    closeMenu();
                  }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-normal"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}