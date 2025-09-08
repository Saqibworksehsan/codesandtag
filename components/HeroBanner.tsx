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
    <section className="relative bg-gradient-to-r from-primary via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block transition-all duration-500 ease-in-out">
                  {texts[currentText]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100">
                India's most trusted trademark and copyright registration experts. 
                Protect your intellectual property with our professional services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-blue-200">Trademarks Registered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-blue-200">Expert Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-3 text-lg"
                onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20register%20my%20trademark', '_blank')}
              >
                Start Your Trademark Registration
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
                onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20copyright%20registration', '_blank')}
              >
                Copyright Registration
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Government Approved</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                <span>Fast Processing</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-center w-20 h-20 bg-amber-500 rounded-full mx-auto">
                  <Shield className="w-12 h-12 text-black" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start text-left">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Expert Legal Team</h4>
                        <p className="text-blue-200 text-sm">Qualified IP attorneys with 10+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-start text-left">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">All-Inclusive Pricing</h4>
                        <p className="text-blue-200 text-sm">No hidden charges, government fees included</p>
                      </div>
                    </div>
                    <div className="flex items-start text-left">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Quick Turnaround</h4>
                        <p className="text-blue-200 text-sm">File applications within 24 hours of documentation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/20 p-4 rounded-lg border border-amber-400/30">
                  <p className="text-center font-semibold">
                    🎉 Limited Time Offer: 50% OFF on all registrations!
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
}