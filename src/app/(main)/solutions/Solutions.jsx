'use client'

import HeroSection from "@/components/HeroSection";
import SoftwareStats from "./SoftwareStats";
import SolutionsGrid from "./SolutionsGrid";

export default function SolutionsPage() {
  return (
    <div>
      <HeroSection
        badge="Software Solutions"
        slug1="Enterprise"
        slug2="Software Solutions"
        description="Comprehensive software solutions designed to streamline your business operations. From healthcare to education, we provide industry-specific software that drives efficiency and growth."
      />
      <SoftwareStats />
      <SolutionsGrid />
    </div>
  )
}