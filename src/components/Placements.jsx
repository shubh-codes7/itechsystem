'use client'

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import axios from "axios";

export default function Placements() {
  const [isHovered, setIsHovered] = useState(false);
  const [placedStudents, setPlacedStudents] = useState([])

  useEffect(()=>{

    async function fetchPlacements(){
      try {
        const res = await axios.get('/api/placements')
        setPlacedStudents(res.data)
      } catch (error) {
        console.error("Error fetching placements:", error);
      }
    }

    fetchPlacements()
  }, [])

  return (
    <section className="py-16  ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" >
            Our <span className="text-primary">Placed Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet our successful graduates who are now working at top companies. 
            Your success story could be next!
          </p>
        </div>

        {/* Marquee Container */}
        <div 
          className="relative overflow-hidden "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex gap-6 animate-marquee"
            style={{
              width: `${placedStudents.length * 350}px`,
              animationDuration: '20s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: isHovered ? 'paused' : 'running'
            }}
          >
            {placedStudents.map((student, index) => (
              <Card 
                key={`${student._id}-${index}`}
                className="flex-shrink-0 min-w-fit hover-elevate transition-all duration-300 bg-gradient-to-r from-primary/5 to-secondary/5"
              >
                <CardContent className="px-6">
                  {/* Student Header */}
                    <div className="mb-2">
                      <h3 className="font-bold text-lg text-center text-black" >
                        {student.name}
                      </h3>
                      <Badge className="bg-secondary/10 mx-auto block mt-2 text-secondary border-secondary/20">
                        {student.company}
                    </Badge>
                    </div>
                    

                  {/* Course */}
                  <div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Company:</strong> {student.role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Course:</strong> {student.course}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Placement Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹5 LPA</div>
              <div className="text-sm text-muted-foreground">Highest Package</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">₹3.2 LPA</div>
              <div className="text-sm text-muted-foreground">Average Package</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
}