import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, ArrowLeft, Sparkles, Wrench } from "lucide-react";
import { services } from "@/data/services.js";
import Link from 'next/link'

export const metadata = {
  title: "Professional IT services across India",
  description:
    "I-Tech System delivers expert-led IT services across India — including Software Development, Web Development, App Development, Cloud Applications, Software testing. ",
  keywords:
    "IT services, software development, web development, app development, cloud applications and services",
}

const categoryColors = {
  Development: "bg-primary/10 text-primary",
  Marketing: "bg-secondary/10 text-secondary",
  Testing: "bg-chart-3/10 text-chart-3",
  Infrastructure: "bg-chart-4/10 text-chart-4",
  Consulting: "bg-chart-5/10 text-chart-5"
};

export default function ServiceDetail({ params }) {
  const { slug } = params;
  const service = services.find((item) => item.id === Number(slug));
  const { 
  title, 
  fullDescription, 
  category, 
  features, 
  benefits,
  technologies,
} = service
  

  if (!service) {
    return <h1 className="p-6 text-red-500">Service not found!</h1>;
  }
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <Link href="/services">Back to Services</Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
               
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-2" data-testid="text-service-title">
                    {title}
                  </h1>
                  <Badge className={categoryColors[category]} data-testid="badge-category">
                    {category}
                  </Badge>
                </div>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed" data-testid="text-service-description">
                {fullDescription}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold font-poppins" data-testid="text-features-title">
                Key Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3"
                    data-testid={`feature-${index}`}
                  >
                    <div className="mt-0.5 shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-semibold font-poppins" data-testid="text-benefits-title">
                  Why Choose Us
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <Card 
                    key={index} 
                    className="p-4 hover-elevate transition-all duration-200"
                    data-testid={`benefit-${index}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">
                        <Check className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-semibold font-poppins" data-testid="text-technologies-title">
                  Technologies & Tools
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                    data-testid={`technology-${index}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-poppins" data-testid="text-cta-title">
                  Ready to get started?
                </h3>
                <p className="text-muted-foreground">
                  Contact us to discuss your project requirements and get a customized solution.
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  // onClick={() => console.log('Get started clicked')}
                >
                  <Link href='tel:9834975865' >Call Now</Link>
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                  // onClick={() => console.log('Contact us clicked')}
                >
                  <Link href='/contact' >Contact Us</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
