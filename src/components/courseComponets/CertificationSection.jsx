import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"


const certifications = [
  {
    id: "1",
    title: "Course Certificate",
    description: "Industry-recognized certification upon course completion.",
    icon: "🎓",
    verified: true
  },
  {
    id: "2",
    title: "Internship Certificate",
    description: "Internship Certificate to Boost Your Resume. (if applicable)",
    icon: "📁",
    verified: true
  }
]

export default function CertificationSection() {

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-certification-status">Industry Certified</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-certification-title">
            Boost Your <span className="text-primary">Career</span> with Recognized Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get industry-recognized certifications that employers trust and value. 
            Our certificates are backed by leading tech companies and accepted globally.
          </p>
        </div>

        {/* Certifications */}
        <div className="flex justify-center gap-6 mb-16">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="text-center hover-elevate transition-all duration-200"
            >
              <CardHeader>
                <div className="text-6xl mb-4">{cert.icon}</div>
                <CardTitle className="text-xl flex items-center justify-center gap-2" data-testid={`text-cert-${cert.id}-title`}>
                  {cert.title}
                  {cert.verified && (
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground" data-testid={`text-cert-${cert.id}-description`}>
                  {cert.description}
                </p>
                {cert.verified && (
                  <Badge variant="secondary" className="mt-3" data-testid={`badge-cert-${cert.id}-verified`}>
                    Verified & Trusted
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

      

        {/* Industry Recognition */}
        <div className="text-center">
          <div className="bg-card border border-card-border rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-4" data-testid="text-guarantee-title">
              100% Placement Assistance
            </h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We don’t just teach—we place. From resume building and mock interviews to salary negotiation and lifetime job support, our institute ensures you're fully prepared to land your dream role in tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                <span>Lifetime Job Support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                <span>Resume Building</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                <span>Interview Preparation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                <span>Salary Negotiation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}