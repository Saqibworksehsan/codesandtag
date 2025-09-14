'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Clock, Shield, Star, CreditCard } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function TrademarksPage() {
  const handlePayment = () => {
    const options = {
      key: 'rzp_test_9WaeLb4ndt8j9E', // Replace with your Razorpay key
      amount: 699900, // Amount in paise (₹6,999)
      currency: 'INR',
      name: 'Codes & Tags',
      description: 'Trademark Registration Service',
      image: '/logo2.png',
      handler: function (response: any) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // Redirect to form after successful payment
        window.location.href = '/trademark-form';
      },
      theme: {
        color: '#dc2626'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const processSteps = [
    'Trademark search and clearance',
    'Application preparation and filing',
    'Examination by trademark office',
    'Publication in trademark journal',
    'Opposition period (if any)',
    'Registration certificate issuance',
    'Renewal maintenance support'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trademark Registration
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Protect your brand name and logo legally
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              <span>12-18 Months</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              <span>10 Years Validity</span>
            </div>
            <div className="flex items-center">
              <Star className="w-6 h-6 mr-2" />
              <span>100% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Service Details */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="w-8 h-8 text-primary mr-3" />
                  Trademark Registration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">
                      Special Offer
                    </h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl font-bold text-primary">
                        ₹6,999
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ₹15,999
                      </span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                        56% OFF
                      </span>
                    </div>
                    <p className="text-amber-700 mt-2">
                      Limited time offer - All inclusive package
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">12-18</div>
                      <div className="text-sm text-gray-600">Months Timeline</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">What's Included:</h4>
                    <div className="space-y-2">
                      {[
                        'Comprehensive trademark search',
                        'Professional application drafting',
                        'Government filing & fees',
                        'Status tracking & updates',
                        'Opposition handling (if required)',
                        'Certificate delivery',
                        'Free consultation calls'
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-red-700 text-lg py-3"
                      onClick={handlePayment}
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now - ₹6,999
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full border-2 border-green-500 text-green-700 hover:bg-green-500 hover:text-white text-lg py-3"
                      onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20want%20to%20know%20about%20trademark%20registration', '_blank')}
                    >
                      WhatsApp Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Trademark search and clearance',
                    'Application preparation and filing',
                    'Examination by trademark office',
                    'Publication in trademark journal',
                    'Opposition period (if any)',
                    'Registration certificate issuance',
                    'Renewal maintenance support'
                  ].map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold mr-3 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Info */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Why Choose Trademark Registration?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Brand Protection</h4>
                    <p className="text-gray-600">
                      Protect your brand name and logo from unauthorized use by competitors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Legal Rights</h4>
                    <p className="text-gray-600">
                      Establish exclusive legal rights and the ability to take action against infringement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Business Value</h4>
                    <p className="text-gray-600">
                      Increase your business valuation and create valuable intellectual property assets.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Trademark application form',
                    'Logo/wordmark representation',
                    'Applicant identification proof',
                    'Address proof documents',
                    'Power of attorney (if applicable)',
                    'Priority document (if claiming priority)'
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-primary mr-2" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-center">Package Includes:</h4>
                  {[
                    'Comprehensive trademark search',
                    'Professional application drafting',
                    'Government filing & fees',
                    'Status tracking & updates',
                    'Opposition handling (if required)',
                    'Certificate delivery',
                    'Free consultation calls'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-blue-800 text-lg py-3"
                    onClick={() => window.open('https://razorpay.me/@codesandtags', '_blank')}
                  >
                    Pay Now - ₹6,999
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg py-3"
                    onClick={() => window.open('https://paypal.me/codesandtags', '_blank')}
                  >
                    Pay via PayPal
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Lead Form */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get Free Trademark Consultation</CardTitle>
                <p className="text-center text-gray-600">Fill this form and we'll call you within 30 minutes</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="brandName" className="text-sm font-medium">
                      Brand Name / Logo Name *
                    </Label>
                    <Input
                      id="brandName"
                      type="text"
                      placeholder="Enter your brand name"
                      value={formData.brandName}
                      onChange={(e) => setFormData({...formData, brandName: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactNo" className="text-sm font-medium">
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNo"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.contactNo}
                      onChange={(e) => setFormData({...formData, contactNo: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-sm font-medium">
                      Business Description (Optional)
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of your business/product"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={3}
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                    Get Free Consultation
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4 text-center">Or Contact Us Directly</h4>
                  <div className="space-y-3">
                    <a href="tel:+919884056282" className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <Phone className="w-5 h-5 text-primary mr-3" />
                      <span>+91-9884056282</span>
                    </a>
                    <a href="mailto:info.codesandtags@gmail.com" className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <span>info.codesandtags@gmail.com</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process Timeline */}
        <Card className="mt-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">7-Step Trademark Registration Process</CardTitle>
            <p className="text-center text-gray-600">Professional end-to-end service with complete transparency</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-7 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="font-medium text-sm mb-2">Step {index + 1}</h4>
                  <p className="text-xs text-gray-600 leading-tight">{step}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block w-full h-0.5 bg-gray-200 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}