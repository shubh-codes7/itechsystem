'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, TrendingUp, Users, Star, Download, ExternalLink, CheckCircle } from "lucide-react"


const certifications = [
  {
    id: "1",
    title: "Full Stack Developer Certificate",
    description: "Industry-recognized certification upon course completion",
    icon: "🎓",
    verified: true
  },
  {
    id: "2",
    title: "Project Portfolio Certificate",
    description: "Showcase your completed projects with verified credentials",
    icon: "📁",
    verified: true
  },
  {
    id: "3",
    title: "Industry Partnership Certificate",
    description: "Backed by leading tech companies and industry experts",
    icon: "🤝",
    verified: true
  }
]

const careerBenefits = [
  {
    title: "Salary Increase",
    description: "Average 150% salary boost after completion",
    icon: TrendingUp,
    stats: "150%"
  },
  {
    title: "Job Opportunities",
    description: "Access to exclusive job portal with 500+ openings",
    icon: Users,
    stats: "500+"
  },
  {
    title: "Industry Recognition",
    description: "Certificate accepted by top-tier companies",
    icon: Star,
    stats: "95%"
  },
  {
    title: "Career Growth",
    description: "Alumni promoted to senior roles within 2 years",
    icon: Award,
    stats: "85%"
  }
]

const industryRecognition = [
  "Microsoft Technology Partner",
  "AWS Training Partner",
  "Google Cloud Partner",
  "NASSCOM Certified Course"
]

export default function CertificationSection() {
  const handleDownloadSample = () => {
    console.log('Download sample certificate clicked')
    // todo: remove mock functionality
    alert('Sample certificate download would be implemented here')
  }

  const handleViewCredentials = () => {
    console.log('View credentials clicked')
    // todo: remove mock functionality
    alert('Credential verification page would open here')
  }

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert) => (
            <Card 
              key={cert.id} 
              className="text-center hover-elevate transition-all duration-200"
              data-testid={`card-certification-${cert.id}`}
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

        {/* Career Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-benefits-title">
            Career Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover-elevate transition-all duration-200"
                data-testid={`card-benefit-${index}`}
              >
                <benefit.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2" data-testid={`text-benefit-${index}-stats`}>
                  {benefit.stats}
                </div>
                <h4 className="font-semibold mb-2" data-testid={`text-benefit-${index}-title`}>
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-benefit-${index}-description`}>
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8" data-testid="text-recognition-title">
            Industry Recognition & Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {industryRecognition.map((recognition, index) => (
              <Card 
                key={index} 
                className="p-6 hover-elevate transition-all duration-200"
                data-testid={`card-recognition-${index}`}
              >
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-medium" data-testid={`text-recognition-${index}`}>
                    {recognition}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="bg-card border border-card-border rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-4" data-testid="text-guarantee-title">
              100% Placement Assistance Guarantee
            </h4>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, modi! Asperiores ipsa, itaque consectetur dolore facilis incidunt optio ipsum. Ex?
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