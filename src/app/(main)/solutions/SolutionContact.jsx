import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Calendar, FileText } from "lucide-react";

export default function SolutionsContact() {
  const handleContactClick = (method) => {
    console.log(`Contact via ${method} clicked`);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" >
            Get Started Today
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" >
            Ready to Transform Your <span className="text-primary">Business</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let our software solutions streamline your operations and boost productivity. 
            Contact us for a personalized demo and consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 text-center">
                <div className="bg-secondary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="font-semibold mb-2">Schedule a Call</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak with our software experts about your requirements
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleContactClick('call')}
                >
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 text-center">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Request Demo</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  See our software solutions in action with a live demo
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleContactClick('demo')}
                >
                  Request Demo
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 text-center">
                <div className="bg-chart-3/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <Mail className="w-8 h-8 text-chart-3" />
                </div>
                <h4 className="font-semibold mb-2">Email Consultation</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Get detailed information about pricing and features
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleContactClick('email')}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 text-center">
                <div className="bg-chart-4/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <FileText className="w-8 h-8 text-chart-4" />
                </div>
                <h4 className="font-semibold mb-2">Download Brochure</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Get detailed information about all our software solutions
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleContactClick('brochure')}
                >
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div>
            <Card className="p-8 bg-gradient-to-b from-secondary/10 to-primary/10 border-secondary/20 h-full flex flex-col justify-center">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4" >
                  Custom Development Available
                </h3>
                <p className="text-muted-foreground mb-6">
                  Don't see what you need? We also provide custom software development 
                  tailored to your specific business requirements.
                </p>
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full"
                    onClick={() => handleContactClick('custom-consultation')}
                  >
                    Custom Solution Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full"
                    onClick={() => handleContactClick('portfolio')}
                  >
                    View Our Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}