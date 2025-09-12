'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowLeft, CreditCard } from 'lucide-react';
import Link from 'next/link';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function TrademarkFormPage() {
  const [formData, setFormData] = useState({
    trademarkName: '',
    applicantName: '',
    email: '',
    phone: '',
    address: '',
    businessType: '',
    trademarkType: '',
    classes: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email the form data
    const emailBody = `
New Trademark Registration Application:

Trademark Name: ${formData.trademarkName}
Applicant Name: ${formData.applicantName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Business Type: ${formData.businessType}
Trademark Type: ${formData.trademarkType}
Classes: ${formData.classes}
Description: ${formData.description}

Please process this application.
    `;

    const mailtoLink = `mailto:info.codesandtags@gmail.com?subject=Trademark Registration Application - ${formData.trademarkName}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    setIsSubmitting(false);
  };

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
        // You can send payment details to your backend here
      },
      prefill: {
        name: formData.applicantName,
        email: formData.email,
        contact: formData.phone
      },
      theme: {
        color: '#1f2937'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
      
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-light minimal-heading mb-4">
            Trademark Registration Application
          </h1>
          <p className="text-xl minimal-text">
            Fill out the form below to start your trademark registration process
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-2xl font-light minimal-heading">Application Details</CardTitle>
                <p className="minimal-text">Please provide accurate information for your trademark application</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="trademarkName" className="text-sm font-medium text-gray-700">
                        Trademark Name *
                      </Label>
                      <Input
                        id="trademarkName"
                        type="text"
                        placeholder="Enter your trademark name"
                        value={formData.trademarkName}
                        onChange={(e) => setFormData({...formData, trademarkName: e.target.value})}
                        required
                        className="minimal-input mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="applicantName" className="text-sm font-medium text-gray-700">
                        Applicant Name *
                      </Label>
                      <Input
                        id="applicantName"
                        type="text"
                        placeholder="Full name or company name"
                        value={formData.applicantName}
                        onChange={(e) => setFormData({...formData, applicantName: e.target.value})}
                        required
                        className="minimal-input mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="minimal-input mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="minimal-input mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                      Address *
                    </Label>
                    <Textarea
                      id="address"
                      placeholder="Complete address with pincode"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                      rows={3}
                      className="minimal-input mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="businessType" className="text-sm font-medium text-gray-700">
                        Business Type *
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, businessType: value})}>
                        <SelectTrigger className="minimal-input mt-1">
                          <SelectValue placeholder="Select business type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="individual">Individual</SelectItem>
                          <SelectItem value="proprietorship">Proprietorship</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="llp">LLP</SelectItem>
                          <SelectItem value="private-limited">Private Limited</SelectItem>
                          <SelectItem value="public-limited">Public Limited</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="trademarkType" className="text-sm font-medium text-gray-700">
                        Trademark Type *
                      </Label>
                      <Select onValueChange={(value) => setFormData({...formData, trademarkType: value})}>
                        <SelectTrigger className="minimal-input mt-1">
                          <SelectValue placeholder="Select trademark type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="word">Word Mark</SelectItem>
                          <SelectItem value="logo">Logo/Device Mark</SelectItem>
                          <SelectItem value="combined">Combined Mark</SelectItem>
                          <SelectItem value="sound">Sound Mark</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="classes" className="text-sm font-medium text-gray-700">
                      Trademark Classes
                    </Label>
                    <Input
                      id="classes"
                      type="text"
                      placeholder="e.g., Class 25 (Clothing), Class 35 (Services)"
                      value={formData.classes}
                      onChange={(e) => setFormData({...formData, classes: e.target.value})}
                      className="minimal-input mt-1"
                    />
                    <p className="text-xs minimal-text mt-1">Leave blank if unsure - our experts will help you identify the right classes</p>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                      Business/Product Description
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Brief description of your business or products/services"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                      rows={4}
                      className="minimal-input mt-1"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="minimal-button flex-1"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </Button>
                    <Button 
                      type="button"
                      onClick={handlePayment}
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Pay Now - ₹6,999
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            <Card className="minimal-card mb-6">
              <CardHeader>
                <CardTitle className="text-xl font-light">Package Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-light text-gray-900">₹6,999</span>
                    <span className="text-sm text-gray-500 line-through">₹15,999</span>
                  </div>
                  <p className="text-sm minimal-text">All-inclusive package with government fees</p>
                  
                  <div className="space-y-2 pt-4">
                    {[
                      'Comprehensive trademark search',
                      'Professional application drafting',
                      'Government filing & fees',
                      'Status tracking & updates',
                      'Opposition handling',
                      'Certificate delivery',
                      'Expert consultation'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="minimal-text">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="minimal-card">
              <CardHeader>
                <CardTitle className="text-xl font-light">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm minimal-text">
                    Our experts are available to help you with your trademark application.
                  </p>
                  <div className="space-y-2">
                    <Button 
                      variant="outline"
                      className="w-full text-sm"
                      onClick={() => window.open('https://wa.me/919884056282?text=Hi,%20I%20need%20help%20with%20trademark%20registration', '_blank')}
                    >
                      WhatsApp Support
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full text-sm"
                      onClick={() => window.location.href = 'tel:+919884056282'}
                    >
                      Call: +91-9884056282
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}