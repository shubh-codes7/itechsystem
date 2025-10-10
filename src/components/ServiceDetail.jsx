import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, ArrowLeft, Sparkles, Wrench } from "lucide-react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

const categoryColors = {
  Development: "bg-primary/10 text-primary",
  Marketing: "bg-secondary/10 text-secondary",
  Testing: "bg-chart-3/10 text-chart-3",
  Infrastructure: "bg-chart-4/10 text-chart-4",
  Consulting: "bg-chart-5/10 text-chart-5"
};

export default function ServiceDetail({ 
  title, 
  fullDescription, 
  category, 
  icon, 
  features, 
  benefits,
  technologies,
  onBack 
}) {
  const IconComponent = (Icons[icon as keyof typeof Icons] as LucideIcon) || Icons.Briefcase;
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-8 gap-2"
          data-testid="button-back"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Button>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <IconComponent className="w-12 h-12 text-primary" />
                </div>
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
                  onClick={() => console.log('Get started clicked')}
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  size="lg"
                  onClick={() => console.log('Contact us clicked')}
                  data-testid="button-contact"
                >
                  Contact Us
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
