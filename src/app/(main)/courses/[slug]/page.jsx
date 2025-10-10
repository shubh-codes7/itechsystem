import CertificationSection from "@/components/courseComponets/CertificationSection";
import CurriculumSection from "@/components/courseComponets/CurriculumSection";
import DemoBooking from "@/components/courseComponets/DemoBooking";
import HeroSection from "@/components/courseComponets/HeroSection";


export async function generateMetadata({ params }) {
  const { slug } = params;
  const courses = {
    "app-dev": "App Development",
    "mern": "MERN Stack Development",
    "mean": "MEAN Stack Development",
    "uiux": "UI/UX & Graphics Design",
    "cloud": "Cloud Computing & DevOps",
    "data-analytics": "Data Analytics",
    "programming": "Diploma in Programming Languages",
    "web-dev": "Web development",
    "python-dev": "Python Development",
    "php-dev": "PHP Web Development",
    "java-dev": "Java Full Stack",
    "dotnet": "DotNET",
    "salesforce": "Salesforce",
    "testing": "Software Testing",
    "sap": "SAP",
    "marketing": "Digital Marketing",
    "python": "Python Programming",
    "java": "Java Programming",
    "cpp": "CPP Programming"
  }

  const course = courses[slug]

  return {
    title: `${course} Training in India`,
    description: `Join the ${course} training program at I-Tech System and learn from expert instructors with practical projects and placement support.`,
  };
}




export default async function CourseDetails({ params }) {
  const { slug } = await params
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses/${slug}`);

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



