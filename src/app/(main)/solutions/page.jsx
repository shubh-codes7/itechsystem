'use client'

import HeroSection from "@/components/HeroSection";
import SoftwareStats from "./SoftwareStats";
import SolutionsContact from "./SolutionContact";
import SolutionsGrid from "./SolutionsGrid";
import SolutionsHero from "./SolutionsHero";

export default function Solutions() {
  return (
    <div>
      {/* <SolutionsHero /> */}
      <HeroSection
        badge="Software Solutions"
        slug1="Enterprise"
        slug2="Software Solutions"
        description="Comprehensive software solutions designed to streamline your business operations. From healthcare to education, we provide industry-specific software that drives efficiency and growth."
      />
      <SoftwareStats />
      <SolutionsGrid />
      {/* <SolutionsContact /> */}
    </div>
  )
}