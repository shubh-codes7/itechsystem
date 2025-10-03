import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const handleContactClick = (method) => {
    console.log(`Contact via ${method} clicked`);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-contact-status">
            Contact Now!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-contact-title">
            Consult Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our expert team today to discuss your needs and goals. 
            We're here to help you succeed.
          </p>
        </div>

        <div className=" gap-12">
          {/* Contact Information */}
          <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9422248005, +91 9834975865</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 flex items-center space-x-4">
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@itechnasik.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 flex items-center space-x-4">
                <div className="bg-chart-3/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Sumangal Luxuria, 3rd Floor,<br/>
                    Beside Westside Mall, College Road, Nashik-422005
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 flex items-center space-x-4">
                <div className="bg-chart-4/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-chart-4" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Fri: 8:00 AM - 8:00 PM<br />
                    Sat: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          

        </div>
        {/* Success Metrics */}
        <Card className="mt-6 p-6 bg-secondary/5 border-secondary/20">
          <CardContent className="p-0">
            <h4 className="font-semibold mb-4 text-center" data-testid="text-success-title">
              Why Choose I-Tech Systems?
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary mb-1" data-testid="text-metric-industry">
                  100%
                </div>
                <div className="text-xs text-muted-foreground">Industry Expert Faculty</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-1" data-testid="text-metric-practical">
                  80%
                </div>
                <div className="text-xs text-muted-foreground">Hands-on Training</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary mb-1" data-testid="text-metric-support">
                  24/7
                </div>
                <div className="text-xs text-muted-foreground">Learning Support</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}