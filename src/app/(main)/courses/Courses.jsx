'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import HeroSection from "@/components/HeroSection"
import Placements from "@/components/Placements"
import { fetchCourses } from "@/slices/courses.slice";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export default function CoursesPage() {

  const {data: courses, isLoading, error} = useSelector(state => state.courses)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!courses || courses.length == 0){
      dispatch(fetchCourses())
    }
  }, [dispatch, courses])

  // const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses`)
  // const courses = await res.json()

  if (isLoading) {
    return (
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">Loading courses...</div>
        </div>
      </section>
    );
  }

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
                <Link href={`/courses/${course.slug}`}>
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
                      {course.title}
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
                </Link>
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
