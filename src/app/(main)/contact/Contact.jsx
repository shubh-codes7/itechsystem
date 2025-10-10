"use client";

import HeroSection from "@/components/HeroSection";
import EnquiryForms from "./EnquiryForm";
import LocationMap from "./LocationMap";
import ContactSection from "@/components/ContactSection";

export default function Contact() {
  return (
    <div>
      <HeroSection
        badge="Get In Touch"
        slug1="Contact"
        slug2="I-Tech Systems"
        description="Ready to advance your career or transform your business? Our expert team is here to help you 
              choose the right training program or software solution for your needs."
      />
      <ContactSection />
      <EnquiryForms />
      <LocationMap />
    </div>
  );
}