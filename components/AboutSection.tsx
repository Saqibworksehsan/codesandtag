'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Shield } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Certified IP attorneys and legal experts with extensive experience in trademark and copyright law.',
    },
    {
      icon: Users,
      title: '5000+ Happy Clients',
      description: 'Trusted by startups, MSMEs, and enterprises across India for protecting their intellectual property.',
    },
    {
      icon: Clock,
      title: 'Fast Processing',
      description: 'Quick documentation and filing process with transparent tracking and regular status updates.',
    },
    {
      icon: Shield,
      title: 'Legal Protection',
      description: 'Comprehensive protection for your brand, ensuring your intellectual property rights are secured.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Codes & Tags
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are India's leading intellectual property consultancy, specializing in trademark registration, 
            copyright protection, and MSME advisory services. Our mission is to make IP protection accessible, 
            affordable, and efficient for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Intellectual Property Protection Matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Brand Protection</h4>
                    <p className="text-gray-600 text-sm">Protect your brand name, logo, and unique identity from unauthorized use by competitors.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Legal Rights</h4>
                    <p className="text-gray-600 text-sm">Establish exclusive legal rights and the ability to take action against infringement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Value</h4>
                    <p className="text-gray-600 text-sm">Increase your business valuation and create valuable intellectual property assets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-700 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Our Commitment to You</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 mr-3" />
                  <span>100% Success Rate in Registrations</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-3" />
                  <span>Government Approved Consultancy</span>
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 mr-3" />
                  <span>Personalized Service for Every Client</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}