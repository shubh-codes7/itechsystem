import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, MapPin, Calendar } from "lucide-react";

export default function Placements() {
  const [isHovered, setIsHovered] = useState(false);

  // Sample student placement data
  const placedStudents = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      company: "TCS",
      salary: "8 LPA",
      course: "Full Stack Development",
      passoutYear: "2024",
      location: "Bangalore",
      linkedin: "https://linkedin.com/in/rahul-sharma",
      github: "https://github.com/rahulsharma"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Software Engineer",
      company: "Infosys",
      salary: "7.5 LPA",
      course: "Java Development",
      passoutYear: "2024",
      location: "Pune",
      linkedin: "https://linkedin.com/in/priya-patel",
      github: "https://github.com/priyapatel"
    },
    {
      id: 3,
      name: "Arjun Kumar",
      role: "Android Developer",
      company: "Wipro",
      salary: "9 LPA",
      course: "Mobile App Development",
      passoutYear: "2024",
      location: "Chennai",
      linkedin: "https://linkedin.com/in/arjun-kumar",
      github: "https://github.com/arjunkumar"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "QA Engineer",
      company: "Cognizant",
      salary: "6.5 LPA",
      course: "Software Testing",
      passoutYear: "2024",
      location: "Hyderabad",
      linkedin: "https://linkedin.com/in/sneha-reddy",
      github: "https://github.com/snehareddy"
    },
    {
      id: 5,
      name: "Vikash Singh",
      role: "DevOps Engineer",
      company: "HCL Technologies",
      salary: "10 LPA",
      course: "Cloud Computing",
      passoutYear: "2024",
      location: "Noida",
      linkedin: "https://linkedin.com/in/vikash-singh",
      github: "https://github.com/vikashsingh"
    },
    {
      id: 6,
      name: "Ananya Gupta",
      role: "Frontend Developer",
      company: "Tech Mahindra",
      salary: "7 LPA",
      course: "React Development",
      passoutYear: "2024",
      location: "Mumbai",
      linkedin: "https://linkedin.com/in/ananya-gupta",
      github: "https://github.com/ananyagupta"
    },
    {
      id: 7,
      name: "Karthik Rajan",
      role: "Data Analyst",
      company: "Mindtree",
      salary: "8.5 LPA",
      course: "Data Science",
      passoutYear: "2024",
      location: "Bangalore",
      linkedin: "https://linkedin.com/in/karthik-rajan",
      github: "https://github.com/karthikrajan"
    },
    {
      id: 8,
      name: "Deepika Rao",
      role: "UI/UX Designer",
      company: "Capgemini",
      salary: "6 LPA",
      course: "Digital Marketing",
      passoutYear: "2024",
      location: "Pune",
      linkedin: "https://linkedin.com/in/deepika-rao",
      github: "https://github.com/deepikarao"
    }
  ];

  // Duplicate the array for seamless looping
  const duplicatedStudents = [...placedStudents, ...placedStudents];

  const handleSocialClick = (url, platform) => {
    console.log(`Opening ${platform}: ${url}`);
    window.open(url, '_blank');
  };

  return (
    <section className="py-24  ">
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
          className="relative overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex gap-6 animate-marquee"
            style={{
              width: `${duplicatedStudents.length * 350}px`,
              animationDuration: '60s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationPlayState: isHovered ? 'paused' : 'running'
            }}
          >
            {duplicatedStudents.map((student, index) => (
              <Card 
                key={`${student.id}-${index}`}
                className="flex-shrink-0 w-80 hover-elevate transition-all duration-300 bg-gradient-to-r from-primary/5 to-secondary/5"
              >
                <CardContent className="p-6">
                  {/* Student Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg text-black" >
                        {student.name}
                      </h3>
                      <button
                        onClick={() => handleSocialClick(student.linkedin, 'LinkedIn')}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleSocialClick(student.github, 'GitHub')}
                        className="text-gray-700 hover:text-gray-900 transition-colors"
                        title="GitHub Profile"
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground">{student.role}</p>
                  </div>

                  {/* Company & Salary */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                        {student.company}
                      </Badge>
                      <span className="font-bold text-primary text-lg">
                        {student.salary}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {student.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        Batch {student.passoutYear}
                      </div>
                    </div>
                  </div>

                  {/* Course */}
                  <div>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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