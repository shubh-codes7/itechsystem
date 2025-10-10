import CoursesPage from "./Courses";

// app/courses/page.jsx
export const metadata = {
  title: "Top IT Training Courses in India",
  description:
    "Explore professional IT training courses by I-Tech System — covering Python, Java, Full Stack Development, Data Science, SAP, Salesforce, Cloud Computing, Web Design, and more across India.",
  keywords:
    "IT training, software training, programming courses, full stack development, data science, SAP training, Salesforce course, cloud computing course, web development",
  alternates: {
    canonical: "https://www.itechsystem.in/courses",
  },
  openGraph: {
    title: "Top IT Training Courses in India | I-Tech System",
    description:
      "Join India's leading IT training institute. Learn Python, Java, Web Development, Data Analytics, Cloud, and SAP from experts at I-Tech System.",
    url: "https://www.itechsystem.in/courses",
    siteName: "I-Tech System",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top IT Training Courses in India | I-Tech System",
    description:
      "Master in-demand IT skills — Python, Java, Full Stack, Cloud, SAP, Data Analytics — with expert-led courses at I-Tech System.",
  },
};


export default function page() {
  return <CoursesPage />
}