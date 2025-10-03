'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Hospital, 
  Stethoscope, 
  TestTube2, 
  Receipt, 
  Building2, 
  GraduationCap,
  Bug
} from "lucide-react";

const solutions = [
  {
    id: 1,
    title: "Hospital Management Software",
    description: "Complete hospital management system with patient records, appointment scheduling, billing, inventory management, and staff coordination.",
    icon: Hospital,
    category: "Healthcare",
    features: ["Patient Management", "Appointment Scheduling", "Billing & Insurance", "Inventory Control"]
  },
  {
    id: 2,
    title: "OPD Management Software for Doctors",
    description: "Streamlined outpatient department management with digital patient records, prescription management, and appointment systems.",
    icon: Stethoscope,
    category: "Healthcare", 
    features: ["Digital Prescriptions", "Patient History", "Appointment Queue", "Revenue Reports"]
  },
  {
    id: 3,
    title: "Pathology Lab Software",
    description: "Laboratory information management system with test result tracking, sample management, and automated report generation.",
    icon: TestTube2,
    category: "Healthcare",
    features: ["Sample Tracking", "Result Management", "Report Generation", "Quality Control"]
  },
  {
    id: 4,
    title: "Billing Software",
    description: "Comprehensive billing and invoicing solution with inventory management, tax compliance, and financial reporting capabilities.",
    icon: Receipt,
    category: "Finance",
    features: ["Invoice Generation", "Tax Compliance", "Payment Tracking", "Financial Reports"]
  },
  {
    id: 5,
    title: "ERP for Service Industries",
    description: "Enterprise resource planning system tailored for service industries with project management, resource allocation, and client management.",
    icon: Building2,
    category: "Enterprise",
    features: ["Project Management", "Resource Planning", "Client Portal", "Financial Integration"]
  },
  {
    id: 6,
    title: "Institute Management Software",
    description: "Educational institution management system with student enrollment, course management, attendance tracking, and academic reporting.",
    icon: GraduationCap,
    category: "Education",
    features: ["Student Enrollment", "Course Management", "Attendance Tracking", "Grade Management"]
  },
  {
  id: 7,
  title: "Fumigation PC",
  description: "Pest control management software to schedule fumigation, track services, and maintain client records efficiently.",
  icon: Bug, 
  category: "Healthcare",
  features: ["Service Scheduling", "Client Management", "Inventory Tracking", "Service Reports", "Notifications"]
}
];

const categoryColors = {
  Healthcare: "bg-secondary/10 text-secondary border-secondary/20",
  Finance: "bg-chart-4/10 text-chart-4 border-chart-4/20", 
  Enterprise: "bg-primary/10 text-primary border-primary/20",
  Education: "bg-chart-3/10 text-chart-3 border-chart-3/20"
};

export default function SolutionsGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-solutions-overview">
            Our Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-solutions-title">
            Industry-Specific <span className="text-primary">Software</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored software solutions designed to meet the unique requirements of different industries, 
            ensuring maximum efficiency and seamless operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={solution.id}
                className="p-8 hover-elevate transition-all duration-200 h-full"
                data-testid={`card-solution-${solution.id}`}
              >
                <CardContent className="p-0">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <Badge 
                      className={`${categoryColors[solution.category]}`}
                      data-testid={`badge-category-${solution.id}`}
                    >
                      {solution.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 leading-tight" data-testid={`text-solution-${solution.id}-title`}>
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6" data-testid={`text-solution-${solution.id}-description`}>
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-center text-sm text-muted-foreground"
                          data-testid={`text-feature-${solution.id}-${index}`}
                        >
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      className="flex-1 bg-primary text-secondary-foreground px-4 py-2 rounded-md hover-elevate font-medium text-sm"
                    >
                      Request Demo
                    </button>
                    <button 
                      className="px-4 py-2 border border-border rounded-md hover-elevate font-medium text-sm"
                    >
                      Learn More
                    </button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}