import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, ArrowRight, MessageCircle, Phone, Shield, Clock, Award } from 'lucide-react';

export default function TrademarksPage() {
  const handlePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 699900, // ₹6,999 in paise
      currency: 'INR',
      name: 'Legal Services',
      description: 'Trademark Registration Service',
      handler: function (response: any) {
        alert('Payment successful! Redirecting to form...');
        window.location.href = '/trademark-form';
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#dc2626'
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Trademark Registration Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Protect your brand with our comprehensive trademark registration services. 
              Get legal protection for your business name, logo, and intellectual property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handlePayment}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              >
                Register Now - ₹6,999
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-8 py-3 text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Consult Expert
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Benefits Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-red-600" />
                  Why Register Your Trademark?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Legal Protection</h4>
                      <p className="text-gray-600 text-sm">Exclusive rights to use your trademark</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Brand Recognition</h4>
                      <p className="text-gray-600 text-sm">Build trust and credibility with customers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Asset Value</h4>
                      <p className="text-gray-600 text-sm">Increase your business valuation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Legal Recourse</h4>
                      <p className="text-gray-600 text-sm">Take action against infringement</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-6 w-6 text-red-600" />
                  Our Registration Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Trademark Search</h4>
                      <p className="text-gray-600">Comprehensive search to ensure availability</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Application Filing</h4>
                      <p className="text-gray-600">Professional filing with trademark office</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Examination & Response</h4>
                      <p className="text-gray-600">Handle objections and examination reports</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Registration Certificate</h4>
                      <p className="text-gray-600">Receive your trademark registration certificate</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents Required */}
            <Card>
              <CardHeader>
                <CardTitle>Documents Required</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Trademark Logo/Wordmark</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Business Registration Certificate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Identity Proof</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Address Proof</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Power of Attorney</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">User Affidavit (if applicable)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Package Details */}
            <Card className="border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-red-800 flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Trademark Package
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600">₹6,999</div>
                  <div className="text-gray-600">Complete Registration</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Trademark Search Report</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Application Filing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Government Fee Included</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Expert Legal Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Regular Status Updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-red-600" />
                    <span className="text-sm">Certificate Delivery</span>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  Pay Now & Register
                </Button>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-sm text-gray-600">+91 9876543210</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-gray-600">Quick Support</div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat with Expert
                </Button>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Processing Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Application Filing</span>
                    <span className="text-sm font-semibold">1-2 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Examination</span>
                    <span className="text-sm font-semibold">12-18 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Publication</span>
                    <span className="text-sm font-semibold">4 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Registration</span>
                    <span className="text-sm font-semibold">1-2 months</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span className="text-sm">Total Duration</span>
                    <span className="text-sm text-red-600">18-24 months</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );
}