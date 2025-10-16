import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Award, Users, TrendingUp } from "lucide-react";

export default function TrustSection() {
  const partnerCompanies = [
    "TCS", "Infosys", "Wipro", "Cognizant", "HCL Technologies", 
    "Tech Mahindra", "Mindtree", "Capgemini", "Accenture", "IBM India"
  ];

  const achievements = [
    {
      icon: Users,
      title: "5000+ Students Placed",
      description: "Successfully placed in top IT companies across India",
      color: "text-primary"
    },
    {
      icon: Building,
      title: "200+ Partner Companies",
      description: "Trusted hiring partners across various industries",
      color: "text-primary"
    },
    {
      icon: Award,
      title: "50+ Projects Delivered",
      description: "Custom software solutions for enterprises",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "95% Success Rate",
      description: "Student placement and project completion rate",
      color: "text-primary"
    }
  ];

  const testimonials = [
    {
      company: "TCS",
      feedback: "I-Tech Systems consistently provides well-trained candidates who integrate seamlessly into our development teams.",
      role: "HR Manager"
    },
    {
      company: "Wipro Technologies",
      feedback: "Their software solutions have streamlined our operations significantly. Excellent technical expertise and support.",
      role: "CTO"
    },
    {
      company: "Infosys Limited",
      feedback: "We've hired 50+ graduates from I-Tech Systems. Their practical training approach produces job-ready professionals.",
      role: "Talent Acquisition Lead"
    }
  ];

  return (
    <section className="py-24 bg-">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" >
            Industry Trust
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" >
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading companies across India trust I-Tech Systems for talent acquisition and software development. 
            Join our network of successful partnerships.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <Card key={index} className="text-center p-6 hover-elevate" >
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                    <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${achievement.color}`}>
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>        

        {/* Call to Action for Companies */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-primary">Partner With Us</h3>
              <p className="text-muted-foreground mb-6">
                Join our network of hiring partners or collaborate with us for your next software project. 
                Get access to skilled professionals and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover-elevate font-medium"
                  onClick={() => console.log('Corporate partnership enquiry')}
                >
                  Corporate Partnership
                </button>
                <button 
                  className="border border-primary text-primary px-6 py-3 rounded-md hover-elevate font-medium"
                  onClick={() => console.log('Project collaboration enquiry')}
                >
                  Project Collaboration
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}