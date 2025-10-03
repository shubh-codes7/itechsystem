'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Award, ArrowRight } from "lucide-react"
import heroImage from "@/../public/images/Hero_section_background_image_9af6e1b6.png"
import Image from "next/image"



export default function HeroSection({ onDemoClick, title, subheading }) {

  // title = title.split('%20').join(' ')

  const handleDemoClick = () => {
    console.log('Demo booking clicked')
    onDemoClick?.()
  }

  const handleExploreClick = () => {
    console.log('Explore curriculum clicked')
    document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundImage: `url(${heroImage})`}}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={heroImage} alt="Professional coding environment" fill style={{objectFit: "cover"}} priority/>
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-secondary text-secondary-foreground border-secondary-border" data-testid="badge-course-status">
            <TrendingUp className="w-4 h-4 mr-2" />
            95% Placement Rate
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold font-[Poppins] mb-6 leading-tight" data-testid="text-hero-title">
            Master
            <span className="text-primary"> {title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-description">
            {/* Transform your career with our comprehensive bootcamp. Learn React, Node.js, databases, and modern development tools. Join 500+ successful graduates now working at top tech companies. */}
            {subheading}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Users className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-2xl font-bold" data-testid="text-stat-graduates">500+</span>
              </div>
              <span className="text-gray-300">Graduates Placed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <Award className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-2xl font-bold" data-testid="text-stat-rating">4.9/5</span>
              </div>
              <span className="text-gray-300">Student Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
                <span className="text-2xl font-bold" data-testid="text-stat-salary">₹8.5L</span>
              </div>
              <span className="text-gray-300">Average Package</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-border text-lg px-8 py-6 h-auto"
              onClick={handleDemoClick}
              data-testid="button-book-demo"
            >
              Book Free Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto"
              onClick={handleExploreClick}
              data-testid="button-explore-curriculum"
            >
              Explore Curriculum
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-gray-300 mb-4">Trusted by students from</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              <span className="text-white font-medium">Gokhale</span>
              <span className="text-white font-medium">K K Wagh</span>
              <span className="text-white font-medium">Sandip</span>
              <span className="text-white font-medium">KBT</span>
              <span className="text-white font-medium">MET</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}