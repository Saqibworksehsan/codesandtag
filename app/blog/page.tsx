'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Users } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Latest insights on trademark, copyright, and intellectual property
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12">
            <CardHeader>
              <div className="bg-primary text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10" />
              </div>
              <CardTitle className="text-3xl mb-4">Blog Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xl text-gray-600 mb-8">
                We're working on bringing you valuable content about intellectual property, 
                trademark registration, copyright protection, and business guidance.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="bg-blue-100 text-primary w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Expert Articles</h3>
                  <p className="text-sm text-gray-600">In-depth guides on IP protection</p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Latest Updates</h3>
                  <p className="text-sm text-gray-600">Current legal and regulatory news</p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">Case Studies</h3>
                  <p className="text-sm text-gray-600">Real client success stories</p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                <h4 className="font-semibold text-blue-800 mb-2">Get Notified</h4>
                <p className="text-blue-700 mb-4">
                  Want to be the first to know when we publish new content? 
                  Contact us and we'll keep you updated!
                </p>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20be%20notified%20about%20your%20blog%20updates', '_blank')}
                >
                  Notify Me on WhatsApp
                </Button>
              </div>

              <div className="text-center">
                <h4 className="font-semibold mb-4">Need Help Right Now?</h4>
                <p className="text-gray-600 mb-6">
                  While our blog is under development, our experts are ready to help you with 
                  your trademark and copyright needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20trademark%20registration', '_blank')}
                    className="bg-primary hover:bg-blue-800"
                  >
                    Trademark Help
                  </Button>
                  <Button 
                    onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20copyright%20registration', '_blank')}
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Copyright Help
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}