import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Globe, 
  Search, 
  TestTube, 
  Cog, 
  Server, 
  Mail,
  Users,
  Briefcase,
  Target
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Web Design and Development",
    description: "Modern, responsive websites built with latest technologies and best practices for optimal user experience.",
    icon: Code,
    category: "Development"
  },
  {
    id: 2,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs using cutting-edge programming languages.",
    icon: Briefcase,
    category: "Development"
  },
  {
    id: 3,
    title: "Web Based Application or Cloud Application",
    description: "Scalable cloud applications and web-based solutions for modern business requirements.",
    icon: Cloud,
    category: "Development"
  },
  {
    id: 4,
    title: "Android Apps Development",
    description: "Native Android applications with intuitive design and robust functionality for mobile success.",
    icon: Smartphone,
    category: "Development"
  },
  {
    id: 5,
    title: "Digital Marketing Services",
    description: "Complete digital marketing strategies to boost your online presence and drive business growth.",
    icon: Target,
    category: "Marketing"
  },
  {
    id: 6,
    title: "Software Testing",
    description: "Comprehensive software testing services to ensure your software meets quality standards and user expectations.",
    icon: TestTube,
    category: "Testing"
  },
  {
    id: 8,
    title: "Web Hosting Services",
    description: "Reliable, secure web hosting solutions with 99.9% uptime guarantee and 24/7 technical support.",
    icon: Server,
    category: "Infrastructure"
  },
  {
    id: 9,
    title: "Domain Registration",
    description: "Easy domain registration and management services for establishing your online identity.",
    icon: Globe,
    category: "Infrastructure"
  },
  {
    id: 11,
    title: "Technical Team on Contract Basis",
    description: "Dedicated technical teams available on contract to augment your development capabilities.",
    icon: Users,
    category: "Consulting"
  },
  {
    id: 12,
    title: "Recruitment",
    description: "Specialized IT recruitment services to help you find the right talent for your technical positions.",
    icon: Mail,
    category: "Consulting"
  }
];

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
          
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-services-title">
            End to End <span className="text-primary">IT Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From development to deployment, we offer end-to-end IT services 
            to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id}
                className="p-6 hover-elevate transition-all duration-200 h-full flex flex-col"
                data-testid={`card-service-${service.id}`}
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
                  
                  <h3 className="text-lg font-semibold mb-3 leading-tight" data-testid={`text-service-${service.id}-title`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground flex-1" data-testid={`text-service-${service.id}-description`}>
                    {service.description}
                  </p>
                  
                  <button 
                    className="mt-4 text-sm font-medium text-primary hover:text-primary/80 text-left"
                    onClick={() => console.log(`Learn more about ${service.title}`)}
                    data-testid={`button-learn-more-${service.id}`}
                  >
                    Learn More →
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}