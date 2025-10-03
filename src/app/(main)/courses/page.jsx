'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/HeroSection"
import Placements from "@/components/Placements"

// import mernImg from '@/../public/course_imgs/mern.jpg'
// import langImg from '@/../public/course_imgs/programmingLang.jpg'
// import dsImg from '@/../public/course_imgs/data-science.jpg'
// import uiuxImg from '@/../public/course_imgs/mern.jpg'
// // import frontendImg from '@/../public/course_imgs/frontend.png'
// import dotnetImg from '@/../public/course_imgs/dotnet.jpg'
// import javaImg from '@/../public/course_imgs/java.jpg'
// import phpImg from '@/../public/course_imgs/php.jpg'
// import pythonImg from '@/../public/course_imgs/python.jpg'
// import meanImg from '@/../public/course_imgs/mean.jpg'
// // import appImg from '@/../public/course_imgs/app.jpg'
// import testingImg from '@/../public/course_imgs/testing.jpg'
// import marketingImg from '@/../public/course_imgs/marketing.webp'
// import cloudImg from '@/../public/course_imgs/cloud.jpg'
// import salesforceImg from '@/../public/course_imgs/salesforce.png'
// import sapImg from '@/../public/course_imgs/sap.jpg'
import { useFetch } from "@/hooks/use-fetch"
import { useEffect, useState } from "react"




// const courses = [
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


export default function Courses() {

  const [courses, setCourses] = useState([])

  const { data : body, error, loading, refetch } = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses`);
  

  useEffect( ()=>{
    if(body){
      setCourses(body)
    }
  }, [body])

  return (
    <section className=" bg-muted/30">
      <HeroSection
        badge="Our Courses"
        slug1="Industry"
        slug2="In-Demand Courses"
        description="Explore our complete catalog of career-focused tech programs. Whether you're into coding, design, data, or cloud—there’s a course here to match your ambition and skill level."
      />
      <div className="max-w-7xl py-20 mx-auto px-6">     

        {/* Our Courses */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {courses.length > 0 && courses.map((course, idx) => (
              <Card key={idx} className="overflow-hidden hover-elevate transition-all duration-200 pt-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={course.image} 
                    alt={course.title}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex mt-2 items-center justify-between">
                    <CardTitle className="text-xl ">
                      <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                    </CardTitle>
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


        {/* Recent Placements */}
        <Placements />

      </div>
    </section>
  )
}