'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary text-white p-2 rounded-lg">
              <span className="font-bold text-lg">C&T</span>
            </div>
            <span className="font-bold text-xl text-primary">Codes & Tags</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/copyrights" className="text-gray-700 hover:text-primary transition-colors">
              Copyrights
            </Link>
            <Link href="/trademarks" className="text-gray-700 hover:text-primary transition-colors">
              Trademark
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-primary transition-colors"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                Resources
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md border z-50"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <div className="py-2">
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      Blog (Coming Soon)
                    </Link>
                    <a 
                      href="https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20copyright%20registration" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      Copyrights Applicant – WhatsApp
                    </a>
                    <a 
                      href="https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20trademark%20registration" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                    >
                      Trademark Applicant – WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact Us
            </Link>

            <Button 
              onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20know%20about%20your%20services', '_blank')}
              className="bg-green-600 hover:bg-green-700"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/copyrights" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Copyrights
              </Link>
              <Link 
                href="/trademarks" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Trademark
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Blog (Coming Soon)
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Contact Us
              </Link>
              <div className="pt-4 space-y-2">
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20copyright%20registration', '_blank');
                    closeMenu();
                  }}
                  variant="outline"
                  className="w-full text-sm"
                >
                  Copyrights – WhatsApp
                </Button>
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20trademark%20registration', '_blank');
                    closeMenu();
                  }}
                  variant="outline"
                  className="w-full text-sm"
                >
                  Trademark – WhatsApp
                </Button>
                <Button 
                  onClick={() => {
                    window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20know%20about%20your%20services', '_blank');
                    closeMenu();
                  }}
                  className="w-full bg-green-600 hover:bg-green-700"
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