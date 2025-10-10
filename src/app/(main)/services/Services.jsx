'use client'

import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ServicesGrid from "@/app/(main)/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <div>
      <HeroSection
        badge="Our Services"
        slug1="Comprehensive"
        slug2="IT Services"
        description="Comprehensive IT training and development services to empower your career and business growth. 
          From web development to digital marketing, we provide industry-leading expertise."
      />
      <ServicesGrid />
      <ContactSection />
    </div>
  )
}