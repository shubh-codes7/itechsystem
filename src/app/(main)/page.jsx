'use client'

import Hero from "@/components/Hero";
import EventsSection from "@/components/Events"
import CoursesSection from "@/components/Courses";
import Placements from "@/components/Placements";



export default function Home() {
  return (
    <>
      <Hero />
      <CoursesSection />
      <EventsSection />
      <Placements />
    </>
  );
}
