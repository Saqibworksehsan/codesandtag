import Link from 'next/link';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary text-white p-2 rounded-lg">
                <span className="font-bold text-lg">C&T</span>
              </div>
              <span className="font-bold text-xl">Codes & Tags</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for trademark registration, copyright protection, and intellectual property services in India.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+919884056282"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:info.codesandtags@gmail.com"
                className="bg-red-600 hover:bg-red-700 p-2 rounded transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/919884056282"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/trademarks" className="text-gray-300 hover:text-white transition-colors">
                  Trademark Registration
                </Link>
              </li>
              <li>
                <Link href="/copyrights" className="text-gray-300 hover:text-white transition-colors">
                  Copyright Registration
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  MSME Consultancy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Patent Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Legal Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog (Coming Soon)
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-300">+91-9884056282</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                <span className="text-gray-300">info.codesandtags@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-primary mt-1" />
                <span className="text-gray-300">
                  Chennai, Tamil Nadu<br />
                  India 600001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Codes & Tags. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Designed & Developed with ❤️ for protecting your intellectual property
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}