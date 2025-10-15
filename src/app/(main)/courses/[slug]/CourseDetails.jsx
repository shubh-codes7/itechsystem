import CertificationSection from "@/components/courseComponets/CertificationSection";
import CurriculumSection from "@/components/courseComponets/CurriculumSection";
import DemoBooking from "@/components/courseComponets/DemoBooking";
import HeroSection from "@/components/courseComponets/HeroSection";

export default async function CourseDetailsSubpage({slug}) {

    
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses/${slug}`, { cache: 'force-cache' });
  const course = await res.json()

  return (
    <div>
      <HeroSection
        title={course.title}
        subheading={course.description}
      />
      <CurriculumSection
        title={course.title}
        modules={course.modules}
        tools={course.tools}
        why={course.why}
      />
      <DemoBooking />
      <CertificationSection />
    </div>
  )
}