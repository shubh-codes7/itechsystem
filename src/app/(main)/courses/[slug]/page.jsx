
import CertificationSection from "@/components/courseComponets/CertificationSection";

import CurriculumSection from "@/components/courseComponets/CurriculumSection";
import DemoBooking from "@/components/courseComponets/DemoBooking";
import HeroSection from "@/components/courseComponets/HeroSection";



export default async function CourseDetails({ params }) {
  const { slug } = await params
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses/${slug}`, {
  cache: "no-store",
});

if (!res.ok) {
  console.error("Fetch failed", res.status, res.statusText);
  // optional: throw an error or return fallback
  return <div>Error fetching course: {res.status}</div>;
}

let course = {};
try {
  course = await res.json();
} catch (err) {
  console.error("Invalid JSON response:", err);
}
  

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
  );
}
