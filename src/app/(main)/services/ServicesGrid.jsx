import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import { services } from "@/data/services.js";

const categoryColors = {
  Development: "bg-primary/10 text-primary border-primary/20",
  Marketing: "bg-secondary/10 text-secondary border-secondary/20", 
  Testing: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  Infrastructure: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  Consulting: "bg-chart-5/10 text-chart-5 border-chart-5/20"
};


export default function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6">
            End to End <span className="text-primary">IT Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From development to deployment, we offer end-to-end IT services 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = LucideIcons[service.icon]
            return (
              <Card 
                key={service.id}
                className="p-6 hover-elevate transition-all duration-200 h-full flex flex-col"
              >

                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <Badge 
                      className={`text-xs ${categoryColors[service.category]}`}
                      data-testid={`badge-category-${service.id}`}
                    >
                      {service.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground flex-1" >
                    {service.shortDescription}
                  </p>
                  
                  <Link  href={`/services/${service.id}`}>

                  <button 
                    className="mt-4 text-sm font-medium text-primary hover:text-primary/80 text-left"
                  >
                    Learn More →
                  </button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}