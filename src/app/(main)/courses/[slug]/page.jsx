import CourseDetailsSubpage from "./CourseDetails";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses/${slug}`);
  const course = await res.json();
  
  return {
    title: course?.seo?.title || course?.title || "course",
    description: course?.seo?.description || course?.description || "",
  };
}

export default async function CourseDetails({ params }) {
  const { slug } = await params
  
  return <CourseDetailsSubpage slug={slug} />
}



