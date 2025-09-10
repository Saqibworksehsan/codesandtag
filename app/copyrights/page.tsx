import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, FileText, Shield } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton"; // import the client button

export const metadata = {
  title: "Copyright Registration Services - Codes & Tags",
  description:
    "Protect your creative works with professional copyright registration. Fast, affordable, and reliable copyright filing services in India.",
};

export default function CopyrightsPage() {
  const process = [
    "Document collection and verification",
    "Copyright application preparation",
    "Filing with copyright office",
    "Follow-up and status tracking",
    "Certificate delivery",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Copyright Registration Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Protect your creative works and intellectual property
          </p>
          <div className="flex justify-center items-center space-x-8 text-lg">
            <div className="flex items-center">
              <Clock className="w-6 h-6 mr-2" />
              <span>3-6 Months</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              <span>Legal Protection</span>
            </div>
            <div className="flex items-center">
              <FileText className="w-6 h-6 mr-2" />
              <span>Official Certificate</span>
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
                  Copyright Registration
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
                        ₹4,999
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ₹8,999
                      </span>
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                        44% OFF
                      </span>
                    </div>
                    <p className="text-amber-700 mt-2">
                      Limited time offer - All inclusive package
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">3-6</div>
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
                        "Complete documentation assistance",
                        "Government fee included",
                        "Expert consultation",
                        "Status tracking updates",
                        "Certificate delivery",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ✅ Client button – no onClick prop passed from server */}
                  <WhatsAppButton
                    size="lg"
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-lg py-3"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Registration Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {process.map((step, index) => (
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
                <CardTitle>Why Choose Copyright Registration?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Legal Protection</h4>
                    <p className="text-gray-600">
                      Protect your original works from unauthorized use and
                      infringement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Official Recognition</h4>
                    <p className="text-gray-600">
                      Get government-issued certificate proving your ownership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Lifetime Validity</h4>
                    <p className="text-gray-600">
                      Copyright protection lasts for the lifetime of the author
                      plus 60 years.
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
                    "Copy of the work to be copyrighted",
                    "Author identification proof",
                    "Declaration of ownership",
                    "Power of attorney (if applicable)",
                    "NOC from employer (if work for hire)",
                  ].map((doc, index) => (
                    <li key={index} className="flex items-center">
                      <FileText className="w-4 h-4 text-primary mr-2" />
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