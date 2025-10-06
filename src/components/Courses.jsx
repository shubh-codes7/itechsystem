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
import axios from "axios";

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
    slug: "data_analytics",
    title: "Data Analytics",
    image: dsImg,
    description:
      "Learn to analyze data, generate insights, and make data-driven business decisions effectively.",
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

export default function CourseSection() {
  const [allCourses, setAllCourses] = useState([]);
  
  // Fetch all courses
  const fetchCourses = async () => {
    try {
      const res = await axios.get("/api/courses");
      console.log(res.data);
      setAllCourses(res.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      alert('Failed to fetch courses');
    } 
  };
  
  useEffect(() => {
    fetchCourses();
  }, []);

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
                <Link href={`/courses/${course.slug}`}>
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
                </Link>
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
