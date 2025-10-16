import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

//Not in use ---------------------------------------------------------------------------------------------------------------
export default function ServicesHero() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <Badge className="mb-4" >
            IT Training Institute
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-[Poppins] mb-6">
            <span className="text-primary">I-Tech Systems</span>
            <br />
            Professional Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive IT training and development services to empower your career and business growth. 
            From web development to digital marketing, we provide industry-leading expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" >
              View All Courses
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}