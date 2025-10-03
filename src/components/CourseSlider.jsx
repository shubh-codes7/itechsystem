import { useState } from "react";
import { Code, Smartphone, Globe, Search, TestTube, Settings, Palette, Database, Cloud, Shield, TrendingUp, Briefcase } from "lucide-react";

export default function CourseSlider() {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  const courses = [
    { id: 'web-development', name: 'Web Development', icon: Globe },
    { id: 'software-development', name: 'Software Development', icon: Code },
    { id: 'android-development', name: 'Android Development', icon: Smartphone },
    { id: 'digital-marketing', name: 'Digital Marketing', icon: TrendingUp },
    { id: 'software-testing', name: 'Software Testing', icon: TestTube },
    { id: 'automation-testing', name: 'Automation Testing', icon: Settings },
    { id: 'ui-ux-design', name: 'UI/UX Design', icon: Palette },
    { id: 'data-science', name: 'Data Science', icon: Database },
    { id: 'cloud-computing', name: 'Cloud Computing', icon: Cloud },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'seo-optimization', name: 'SEO Optimization', icon: Search },
    { id: 'business-analysis', name: 'Business Analysis', icon: Briefcase }
  ];

  // Duplicate courses for seamless looping
  const duplicatedCourses = [...courses, ...courses, ...courses];

  const handleCourseClick = (courseId) => {
    console.log(`Navigating to course: ${courseId}`);
    // Navigate to course page - would use wouter's useLocation hook in real implementation
    window.location.href = `/courses/${courseId}`;
  };

  const CourseCard = ({ course, onClick, isHovered, onHover, onLeave }) => {
    const IconComponent = course.icon;
    
    return (
      <div
        onClick={() => onClick(course.id)}
        onMouseEnter={() => onHover(course.id)}
        onMouseLeave={onLeave}
        className={`
          flex-shrink-0 w-fit p-6 h-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 border border-border rounded-lg
          flex items-center justify-center gap-3 cursor-pointer 
          transition-all duration-300 ease-in-out
          hover-elevate
          ${isHovered ? 'scale-105 shadow-lg' : 'hover:scale-105'}
        `}
        data-testid={`card-course-${course.id}`}
      >
        <div className="bg-primary/10 p-2 rounded-md">
          <IconComponent className="w-5 h-5 text-primary" />
        </div>
        <div className="text-center">
          <h3 className="text-sm font-semibold text-white line-clamp-2 leading-tight">
            {course.name}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <section className="py-6 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        

        <div className="space-y-6">
          {/* First Row - Left to Right */}
          <div className="relative overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
            <div 
              className="flex gap-4 animate-scroll-left"
              style={{
                width: `${duplicatedCourses.length * 176}px`, // 40*4 + 16 gap = 176px per card
                animationDuration: '45s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
              }}
            >
              {duplicatedCourses.map((course, index) => (
                <CourseCard
                  key={`top-${course.id}-${index}`}
                  course={course}
                  onClick={handleCourseClick}
                  isHovered={hoveredCourse === `top-${course.id}-${index}`}
                  onHover={(id) => setHoveredCourse(`top-${course.id}-${index}`)}
                  onLeave={() => setHoveredCourse(null)}
                />
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]">
            <div 
              className="flex gap-4 animate-scroll-right"
              style={{
                width: `${duplicatedCourses.length * 176}px`,
                animationDuration: '40s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite'
              }}
            >
              {duplicatedCourses.reverse().map((course, index) => (
                <CourseCard
                  key={`bottom-${course.id}-${index}`}
                  course={course}
                  onClick={handleCourseClick}
                  isHovered={hoveredCourse === `bottom-${course.id}-${index}`}
                  onHover={(id) => setHoveredCourse(`bottom-${course.id}-${index}`)}
                  onLeave={() => setHoveredCourse(null)}
                />
              ))}
            </div>
            
            {/* Gradient overlays */}
            <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right linear infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}