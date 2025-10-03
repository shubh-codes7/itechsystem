import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, Train, Bus } from "lucide-react";

export default function LocationMap() {
  

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-location-title">
            Visit Our <span className="text-primary">Institute</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of Nashik's Education Center, our institute is easily accessible 
            by all modes of transportation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {/* Map Section */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="w-5 h-5 mr-2" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Google Map Embed */}
                <div className="w-full h-96 bg-muted rounded-lg mb-6 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14996.128154309989!2d73.7618112!3d20.00717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40a52546ee71a3a8!2sI+Tech+System!5e0!3m2!1sen!2sin!4v1556254955661!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="I-Tech Systems Location"
                    data-testid="google-map"
                  />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Address 1</h4>
                    <p className="text-muted-foreground">
                      I-Tech System
                      09, Sumangal Luxuria, 3rd Floor,<br/>
                      Beside Westside Mall, Yeolekar Mala,<br/>
                      College Road, Nashik-422005<br/>
                      +91 9422248005, +91 9834975865
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Address 2</h4>
                    <p className="text-muted-foreground">
                     I-Tech System
                     1, Basement, Anant Chambers,<br/>
                     Behind Dholya Ganapati Mandir,<br/>
                     Ashok Stambh, Nashik.<br/>
                     +91 9096871111
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
 
        </div>
      </div>
    </section>
  );
}