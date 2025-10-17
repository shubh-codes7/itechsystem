"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Code, Database, Filter, Layout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import mernImg from "@/../public/course_imgs/mernImg.jpg";
import langImg from "@/../public/course_imgs/programmingImg.jpg";
import dsImg from "@/../public/course_imgs/dataAnalyticsImg.jpg";
import uiuxImg from "@/../public/course_imgs/uiuxImg.jpg";
import { useEffect, useMemo, useState } from "react";

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
    slug: "programming-diploma",
    title: "Master in Programming",
    image: langImg,
    description:
      "Develop efficient programs while learning data structures, algorithms, and OOP concepts.",
    technologies: ["C++", "Java", "Python", "LeetCode", "Algorithms"],
  },
  {
    id: "3",
    slug: "data-analytics",
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
    description: "Master Graphic design",
    technologies: ["figma", "photoshop"],
  },
];

const categories = [
  { id: "all", name: "All", icon: Filter },
  { id: "fullstack", name: "Full Stack", icon: Layout },
  { id: "programming", name: "Programming", icon: Code },
  { id: "data", name: "Data", icon: Database },
  { id: "other", name: "Other", icon: Cloud },
];

function PopularCourseCard({ course }) {
  return (
    <Card className="overflow-hidden hover-elevate pt-0 transition-all duration-200">
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
            <CardTitle className="text-xl hover:underline transition-all duration-300">
              {course.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">{course.description}</p>
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
  );
}

function CourseGridCard({ course }) {
  return (
    <Card className="p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
      <Link href={`/courses/${course.slug}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={course.icon}
              width={40}
              height={40}
              alt={course.title}
              className="flex-shrink-0"
            />
            <h3 className="font-semibold leading-5 text-lg">{course.title}</h3>
          </div>
          <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
        </div>
        <p className="text-sm text-muted-foreground text-center leading-relaxed">
          {course.description}
        </p>
      </Link>
    </Card>
  );
}

function LoadingSkeleton({ count = 5 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />
            <div className="flex-1 h-5 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function CourseSection() {
  const [allCourses, setAllCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/courses");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setAllCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      alert("Failed to fetch courses");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return allCourses;
    }
    return allCourses.filter((item) => item.category === selectedCategory);
  }, [selectedCategory, allCourses]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            Kickstart your tech career with our top-rated programs. Learn from
            experts, build real projects, and get job-ready with skills that
            companies demand.
          </p>
        </div>

        {/* Popular Courses Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {popularCourses.map((course) => (
              <PopularCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        {/* In-Demand Courses Section */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6"
            data-testid="text-showcase-title"
          >
            Industry <span className="text-primary">In-Demand</span> Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Explore our complete catalog of career-focused tech programs.
            Whether you're into coding, design, data, or cloud—there's a course
            here to match your ambition and skill level.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000"
          style={{ transitionDelay: "200ms" }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Courses Grid or Loading State */}
        {isLoading ? (
          <LoadingSkeleton />
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredItems.map((course, index) => (
              <CourseGridCard key={course.id || index} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No courses found in this category.
            </p>
          </div>
        )}

        <Button className="block mx-auto mt-8">
          <Link href="/courses">Explore All Courses</Link>
        </Button>
      </div>
    </section>
  );
}