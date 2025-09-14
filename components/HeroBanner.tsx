'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Secure your Brand',
    'Protect your Trademark',
    'Register your Copyright',
    'Build your Legacy'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-light leading-tight minimal-heading">
                <span className="block transition-all duration-500 ease-in-out">
                  {texts[currentText]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl minimal-text">
                India's most trusted trademark and copyright registration experts. 
                Protect your intellectual property with our professional services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="minimal-card p-6 rounded-lg">
                <div className="text-2xl font-light text-gray-900">5000+</div>
                <div className="text-sm minimal-text">Trademarks Registered</div>
              </div>
              <div className="minimal-card p-6 rounded-lg">
                <div className="text-2xl font-light text-gray-900">100%</div>
                <div className="text-sm minimal-text">Success Rate</div>
              </div>
              <div className="minimal-card p-6 rounded-lg">
                <div className="text-2xl font-light text-gray-900">24/7</div>
                <div className="text-sm minimal-text">Expert Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-normal"
                onClick={() => window.location.href = '/trademark-form'}
              >
                Start Trademark Registration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-red-300 text-red-700 hover:bg-red-50 px-8 py-3 text-lg font-light"
                onClick={() => window.location.href = '/copyright-form'}
              >
                Copyright Registration
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm minimal-text">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-red-500" />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-red-500" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-red-500" />
                <span>Fast Processing</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="minimal-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mx-auto">
                  <Shield className="w-12 h-12 text-red-600" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-light minimal-heading mb-4">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start text-left">
                      <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Expert Legal Team</h4>
                        <p className="minimal-text text-sm">Qualified IP attorneys with 10+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-start text-left">
                      <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">All-Inclusive Pricing</h4>
                        <p className="minimal-text text-sm">No hidden charges, government fees included</p>
                      </div>
                    </div>
                    <div className="flex items-start text-left">
                      <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">Quick Turnaround</h4>
                        <p className="minimal-text text-sm">File applications within 24 hours of documentation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <p className="text-center font-medium text-gray-900">
                    🎉 Limited Time Offer: 50% OFF on all registrations!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}