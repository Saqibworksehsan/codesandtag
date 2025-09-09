'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copyright, Bookmark as Trademark, Building, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Trademark,
      title: 'Trademark Registration',
      description: 'Protect your brand name, logo, and identity with comprehensive trademark registration services.',
      features: [
        'Trademark search & clearance',
        'Professional application filing',
        'Government fee included',
        'Opposition handling',
        '10 years validity'
      ],
      price: '₹6,999',
      originalPrice: '₹15,999',
      discount: '56% OFF',
      link: '/trademarks',
      whatsappText: 'Hi, I want to register my trademark'
    },
    {
      icon: Copyright,
      title: 'Copyright Registration',
      description: 'Secure your creative works and intellectual property with official copyright registration.',
      features: [
        'All types of creative works',
        'Complete documentation',
        'Government registration',
        'Lifetime protection',
        'Legal certificate'
      ],
      price: '₹4,999',
      originalPrice: '₹8,999',
      discount: '44% OFF',
      link: '/copyrights',
      whatsappText: 'Hi, I need help with copyright registration'
    },
    {
      icon: Building,
      title: 'MSME Consultancy',
      description: 'Complete business setup and compliance solutions for micro, small & medium enterprises.',
      features: [
        'MSME registration',
        'Business compliance',
        'Legal documentation',
        'Startup advisory',
        'Ongoing support'
      ],
      price: '₹2,999',
      originalPrice: '₹5,999',
      discount: '50% OFF',
      link: '/contact',
      whatsappText: 'Hi, I need MSME consultancy services'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive intellectual property and business consultancy services 
            tailored to protect and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                    <div>
                      <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                      <div className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        {service.discount}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">All inclusive package</p>
                </div>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 pt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-blue-800"
                    onClick={() => window.location.href = service.link}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
                    onClick={() => window.open(`https://wa.me/919884056282?text=${encodeURIComponent(service.whatsappText)}`, '_blank')}
                  >
                    WhatsApp Consultation
                  </Button>
                </div>
              </CardContent>

              {/* Popular Badge */}
              {index === 0 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Custom Solutions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We offer personalized consultancy services for complex intellectual property needs, 
              international filings, and enterprise-level solutions.
            </p>
            <Button 
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
              onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20custom%20IP%20solutions%20for%20my%20business', '_blank')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}