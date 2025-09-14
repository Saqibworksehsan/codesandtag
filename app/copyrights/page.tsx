'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageCircle, MapPin, Clock, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Experts
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Get professional guidance for your trademark and copyright needs
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <Users className="w-6 h-6 mr-2" />
              <span>Expert Team</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Email Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <CardTitle>Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Send us your queries anytime</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.location.href = 'mailto:info.codesandtags@gmail.com'}
              >
                info.codesandtags@gmail.com
              </Button>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <CardTitle>Call Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Speak with our experts directly</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.location.href = 'tel:+919884056282'}
              >
                +91-9884056282
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <CardTitle>WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Quick chat for instant support</p>
              <Button 
                className="w-full bg-green-500 hover:bg-green-600"
                onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20trademark%20and%20copyright%20services', '_blank')}
              >
                Chat Now
              </Button>
            </CardContent>
          </Card>

          {/* Office Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center pb-4">
              <div className="bg-amber-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <CardTitle>Visit Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">Meet us in person for detailed consultation</p>
              <Button variant="outline" className="w-full">
                Schedule Visit
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                    <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
                    <p><strong>Sunday:</strong> Closed (Emergency support available)</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Office Address</h3>
                  <div className="text-gray-600">
                    <p>Codes & Tags</p>
                    <p>Intellectual Property Consultants</p>
                    <p>Chennai, Tamil Nadu 600001</p>
                    <p>India</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Response Channels</h3>
                  <div className="space-y-3">
                    <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <MessageCircle className="w-5 h-5 text-green-500 mr-3" />
                      <div>
                        <p className="font-medium">WhatsApp (Fastest)</p>
                        <p className="text-sm text-gray-600">Response within 5 minutes</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <Phone className="w-5 h-5 text-blue-500 mr-3" />
                      <div>
                        <p className="font-medium">Phone Call</p>
                        <p className="text-sm text-gray-600">Available during office hours</p>
                      </div>
                    </div>
                    <div className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                      <Mail className="w-5 h-5 text-red-500 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-gray-600">Response within 2 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Services & Support */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Services</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Trademark Services</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Trademark search and clearance</li>
                    <li>• Trademark registration</li>
                    <li>• Trademark renewal</li>
                    <li>• Opposition and rectification</li>
                    <li>• International trademark filing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Copyright Services</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Copyright registration</li>
                    <li>• Software copyright</li>
                    <li>• Literary work copyright</li>
                    <li>• Artistic work copyright</li>
                    <li>• Copyright infringement handling</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">MSME Consultancy</h3>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• MSME registration</li>
                    <li>• Business compliance</li>
                    <li>• Legal documentation</li>
                    <li>• Startup advisory</li>
                    <li>• IP strategy consultation</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Free Consultation Available</h4>
                  <p className="text-sm text-blue-700">
                    Get expert advice on your intellectual property needs. 
                    No charges for initial consultation calls.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary to-blue-700 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Brand?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of satisfied clients who trust us with their intellectual property
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20get%20started%20with%20trademark%20registration', '_blank')}
                >
                  Start Your Trademark Journey
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-primary"
                  onClick={() => window.location.href = 'tel:+919884056282'}
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}