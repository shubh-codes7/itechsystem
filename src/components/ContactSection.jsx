import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-contact-status">
            Contact Now!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" >
            Consult Now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact our expert team today to discuss your needs and goals. 
            We're here to help you succeed.
          </p>
        </div>

        <div className="gap-10">
          {/* Contact Information */}
          <div className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover-elevate">
              <CardContent className="p-0 flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9834975865, <br/>+91 9422248005 </p>
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
                <div className="bg-chart-3/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-chart-3" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Fri: 8:00 AM - 8:00 PM <br/>
                    Sat: 8:00 AM - 5:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          

        </div>
        
      </div>
    </section>
  );
}