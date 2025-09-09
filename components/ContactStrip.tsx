'use client';

import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactStrip() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Protect Your Brand?
          </h2>
          <p className="text-gray-300 text-lg">
            Contact our experts today for professional guidance and support
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
            <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-gray-400 text-sm mb-4">Get detailed responses to your queries</p>
            <Button 
              variant="outline"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white w-full"
              onClick={() => window.location.href = 'mailto:info.codesandtags@gmail.com'}
            >
              info.codesandtags@gmail.com
            </Button>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-gray-400 text-sm mb-4">Speak directly with our experts</p>
            <Button 
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white w-full"
              onClick={() => window.location.href = 'tel:+919884056282'}
            >
              +91-9884056282
            </Button>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors">
            <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-4">Quick chat for instant support</p>
            <Button 
              className="bg-green-600 hover:bg-green-700 w-full"
              onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20trademark%20and%20copyright%20services', '_blank')}
            >
              Chat Now
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Available 24/7 for your intellectual property needs • Response within 30 minutes
          </p>
        </div>
      </div>
    </section>
  );
}