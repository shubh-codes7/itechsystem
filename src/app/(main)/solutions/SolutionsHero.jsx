import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SolutionsHero() {
  return (
    <section className="py-24 bg-gradient-to-r from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <Badge className="mb-4" data-testid="badge-solutions-status">
            Software Solutions
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-[Poppins] mb-6" data-testid="text-hero-title">
            <span className="text-primary">Enterprise</span>
            <br />
            Software Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive software solutions designed to streamline your business operations. 
            From healthcare to education, we provide industry-specific software that drives efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" data-testid="button-request-demo">
              Request Demo
            </Button>
            <Button variant="outline" size="lg" data-testid="button-view-features">
              View Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}