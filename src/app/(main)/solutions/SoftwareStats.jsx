import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "50+",
    label: "Software Solutions",
    description: "Deployed successfully"
  },
  {
    value: "200+",
    label: "Happy Clients",
    description: "Across industries"
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee", 
    description: "Reliable performance"
  },
  {
    value: "24/7",
    label: "Technical Support",
    description: "Always available"
  }
];

export default function SoftwareStats() {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Trusted by Businesses Worldwide</h3>
          <p className="text-muted-foreground">Our software solutions power organizations across various industries</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="text-center p-6 hover-elevate transition-all duration-200"
            >
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2" >
                  {stat.value}
                </div>
                <div className="font-semibold mb-1" >
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground" >
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}