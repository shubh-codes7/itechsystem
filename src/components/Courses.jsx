"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import mernImg from "@/../public/course_imgs/mernImg.jpg";
import langImg from "@/../public/course_imgs/programmingImg.jpg";
import dsImg from "@/../public/course_imgs/dataAnalyticsImg.jpg";
import uiuxImg from "@/../public/course_imgs/uiuxImg.jpg";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/use-fetch";

const popularCourses = [
  {
    id: "1",
    slug: "mern",
    title: "Full Stack Development",
    image: mernImg,
    description:
      "Master full-stack development with MongoDB, Express, React, and Node.js together.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
  },
  {
    id: "2",
    slug: "programming",
    title: "Programming Languages",
    image: langImg,
    description:
      "Develop efficient programs while learning data structures, algorithms, and OOP concepts.",
    technologies: ["C++", "Java", "Python", "LeetCode", "Algorithms"],
  },
  {
    id: "3",
    slug: "data_science",
    title: "Data Science",
    image: dsImg,
    description:
      "Strengthen problem-solving by practicing algorithms, data structures, and coding patterns.",
    technologies: ["PowerBi", "Data Analytics"],
  },
  {
    id: "4",
    slug: "uiux",
    title: "UI/UX",
    image: uiuxImg,
    description: "Master Graphic desing",
    technologies: ["figma", "photoshop"],
  },
];

// const allCourses = [
//   {
//     id: "1",
//     slug: "mern",
//     title: "MERN Stack Development",
//     image: mernImg,
//     icon: "https://img.icons8.com/color/48/react-native.png",
//     description:
//       "Master full-stack development using MongoDB, Express, React, and Node.js.",
//     technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux"]
//   },
//   {
//     id: "2",
//     slug: "programming",
//     title: "Programming Languages",
//     image: langImg,
//     icon: "https://img.icons8.com/color/48/code.png",
//     description: "Learn foundational programming with C, C++, Java, and Python.",
//     technologies: ["C", "C++", "Core Java", "Python"],
//   },
//   {
//     id: "3",
//     slug: "data_science",
//     title: "Data Science",
//     image: dsImg,
//     icon: "https://img.icons8.com/color/48/artificial-intelligence.png",
//     description:"Explore analytics, visualization, and AI-powered insights with real data.",
//     technologies: ["Python", "Power BI", "SQL", "Data Analytics"],
//   },
//   {
//     id: "4",
//     slug: "uiux",
//     title: "UI/UX",
//     image: uiuxImg,
//     icon: "https://img.icons8.com/color/48/design.png",
//     description: "Design modern, user-friendly interfaces with top creative tools.",
//     technologies: ["Figma", "Photoshop", "Illustrator", "Adobe XD"],
//   },
//   {
//     id: "5",
//     slug: "frontend_dev",
//     title: "Frontend Development",
//     image: phpImg,
//     icon: "https://img.icons8.com/color/48/html-5--v1.png",
//     description: "Build responsive websites with HTML, CSS, JavaScript, and frameworks.",
//     technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Tailwind CSS"]
//   },
//   {
//     id: "6",
//     slug: "backend_dotnet",
//     title: "Core .NET Development",
//     image: dotnetImg,
//     icon: "https://img.icons8.com/color/48/c-sharp-logo.png",
//     description: "Develop enterprise-grade apps using C#, ASP.NET, and SQL server.",
//     technologies: ["C#", ".NET Core", "ASP.NET", "SQL", "MVC"]
//   },
//   {
//     id: "7",
//     slug: "backend_java",
//     title: "Java Development",
//     image: javaImg,
//     icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
//     description: "Build scalable apps with Core Java, Spring, and Hibernate.",
//     technologies: ["Core Java", "Advance Java", "SQL", "Spring", "Hibernate"]
//   },
//   {
//     id: "8",
//     slug: "backend_php",
//     title: "PHP Web Development",
//     image: phpImg,
//     icon: "https://img.icons8.com/officel/48/php-logo.png",
//     description: "Create robust websites using PHP, MySQL, and frameworks together.",
//     technologies: ["PHP", "Advance PHP", "MySQL", "CodeIgniter", "Laravel"]
//   },
//   {
//     id: "9",
//     slug: "backend_python",
//     title: "Python Web Development",
//     image: pythonImg,
//     icon: "https://img.icons8.com/color/48/python.png",
//     description: "Develop dynamic web applications using Python, Django, and databases.",
//     technologies: ["Python", "Advance Python", "MySQL", "Django", "Flask"]
//   },
//   {
//     id: "10",
//     slug: "mean",
//     title: "MEAN Stack Development",
//     image: meanImg,
//     icon: "https://img.icons8.com/color/48/angularjs.png",
//     description: "Full-stack development with MongoDB, Express, Angular, and Node.js.",
//     technologies: ["Angular", "Node.js", "Express.js", "MongoDB"]
//   },
//   {
//     id: "11",
//     slug: "app_dev",
//     title: "App Development",
//     image: meanImg,
//     icon: "https://img.icons8.com/color/48/android-os.png",
//     description: "Build cross-platform mobile applications for Android and iOS devices.",
//     technologies: ["React Native", "Flutter", "Java", "Kotlin"]
//   },
//   {
//     id: "12",
//     slug: "testing",
//     title: "Software Testing",
//     image: testingImg,
//     icon: "https://img.icons8.com/color/48/test-passed.png",
//     description: "Ensure quality with manual, automation, and performance testing skills.",
//     technologies: ["Manual Testing", "Automation Testing", "Selenium", "JMeter"]
//   },
//   {
//     id: "13",
//     slug: "marketing",
//     title: "Digital Marketing",
//     image: marketingImg,
//     icon: "https://img.icons8.com/?size=100&id=MQiz3TkEm0h6&format=png&color=000000",
//     description: "Learn SEO, social media, and digital branding for businesses.",
//     technologies: ["SEO", "Social Media", "Google Ads", "Analytics"]
//   },
//   {
//     id: "14",
//     slug: "cloud_computing",
//     title: "Cloud Computing",
//     image: cloudImg,
//     icon: "https://img.icons8.com/color/48/cloud.png",
//     description: "Master AWS, Azure, and cloud-based infrastructure deployment skills.",
//     technologies: ["AWS", "Azure", "Linux", "Networking"]
//   },
//   {
//     id: "15",
//     slug: "salesforce",
//     title: "Salesforce",
//     image: salesforceImg,
//     icon: "https://img.icons8.com/color/48/salesforce.png",
//     description: "Learn Salesforce CRM development, customization, and administration.",
//     technologies: ["Salesforce CRM", "Apex", "Lightning Components"]
//   },
//   {
//     id: "16",
//     slug: "sap",
//     title: "SAP",
//     image: sapImg,
//     icon: "https://img.icons8.com/color/48/sap.png",
//     description: "Understand enterprise SAP modules for business process management.",
//     technologies: ["SAP HANA", "SAP ABAP", "SAP FICO"]
//   },
// ]

export default function CourseSection() {
  const [allCourses, setAllCourses] = useState([]);
  const {
    data: body,
    error,
    loading,
    refetch,
  } = useFetch("http://localhost:3000/api/courses");
  useEffect(() => {
    if (body) {
      setAllCourses(body);
    }
  }, [body]);

  return (
    <section className="pt-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-showcase-status">
            Our Courses
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6"
            data-testid="text-showcase-title"
          >
            Our <span className="text-primary">Popular</span> Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kickstart your tech career with our top-rated programs. Learn from experts, build real projects, and get job-ready with skills that companies demand.
          </p>
        </div>

        {/* Our Courses */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {popularCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover-elevate pt-0 transition-all duration-200"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex mt-2 items-center justify-between">
                    <Link href={`/courses/${course.slug}`}>
                      <CardTitle className="text-xl hover:underline transition-all duration-300">
                        {course.title}
                      </CardTitle>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Courses */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6"
            data-testid="text-showcase-title"
          >
            Industry <span className="text-primary">In-Demand</span> Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our complete catalog of career-focused tech programs. Whether you're into coding, design, data, or cloud—there’s a course here to match your ambition and skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {allCourses.map((course, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer"
            >
              {/* Header with icon, title, and arrow */}
              <Link href={`/courses/${course.slug}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.icon}
                      width={40}
                      height={40}
                      alt="Icon"
                      className="flex-shrink-0"
                    />
                    <h3 className="font-semibold leading-5 text-lg">
                      {course.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {course.description}
                </p>
              </Link>
            </Card>
          ))}
        </div>

        <Button className="block mx-auto my-10">
          <Link href="/courses">Explore All Courses</Link>
        </Button>
      </div>
    </section>
  );
}
