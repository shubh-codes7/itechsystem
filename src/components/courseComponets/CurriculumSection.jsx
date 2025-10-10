'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Code, Database, Globe, Smartphone, Brain, FileText, Users, Award, Download } from "lucide-react"


// const modules = [
//   {
//     id: "1",
//     title: "Frontend Fundamentals",
//     duration: "4 weeks",
//     topics: ["HTML5 & CSS3", "JavaScript ES6+", "Responsive Design", "Git & GitHub"],
//     projects: 3
//   },
//   {
//     id: "2", 
//     title: "React Development",
//     duration: "6 weeks",
//     topics: ["React Components", "State Management", "React Router", "Testing"],
//     projects: 4
//   },
//   {
//     id: "3",
//     title: "Backend Development",
//     duration: "5 weeks", 
//     topics: ["Node.js & Express", "RESTful APIs", "Authentication", "Middleware"],
//     projects: 3
//   },
//   {
//     id: "4",
//     title: "Database Management",
//     duration: "3 weeks",
//     topics: ["MongoDB", "PostgreSQL", "Database Design", "ORMs"],
//     projects: 2
//   },
//   {
//     id: "5",
//     title: "Full Stack Projects",
//     duration: "4 weeks",
//     topics: ["MERN Stack", "Deployment", "DevOps Basics", "Performance"],
//     projects: 2
//   }
// ]

// const tools = [
//   { name: "React", icon: "⚛️", category: "Frontend" },
//   { name: "Node.js", icon: "🟢", category: "Backend" },
//   { name: "MongoDB", icon: "🍃", category: "Database" },
//   { name: "PostgreSQL", icon: "🐘", category: "Database" },
//   { name: "Express", icon: "🚀", category: "Backend" },
//   { name: "TypeScript", icon: "🔷", category: "Language" },
//   { name: "Docker", icon: "🐳", category: "DevOps" },
//   { name: "AWS", icon: "☁️", category: "Cloud" }
// ]

const additionalOfferings = [
  { icon: Brain, title: "GenAI Integration", description: "Learn to integrate AI tools and LLMs into your applications" },
  { icon: FileText, title: "Resume Building", description: "Professional resume crafting with ATS optimization" },
  { icon: Users, title: "Mock Interviews", description: "Practice with industry experts from top tech companies" },
  { icon: Award, title: "Industry Projects", description: "Work on real-world projects with live mentorship" }
]

export default function CurriculumSection({title, modules, tools, why}) {
  const handleDownloadSyllabus = () => {
    console.log('Download syllabus clicked')
    // todo: remove mock functionality
    alert('Syllabus download would be implemented here')
  }

  return (
    <section id="curriculum" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-curriculum-status">Industry-Aligned Curriculum</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-curriculum-title">
            Master <span className="text-primary">{title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {why}
          </p>
          
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {modules.length > 0 && modules.map((module, index) => (
            <Card 
              key={module.id} 
              className="hover-elevate transition-all duration-200 border-card-border"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" data-testid={`badge-module-${module.id}-number`}>
                    Module {index + 1}
                  </Badge>
                  <span className="text-sm text-muted-foreground" data-testid={`text-module-${module.id}-duration`}>
                    {module.duration}
                  </span>
                </div>
                <CardTitle className="text-xl mb-2" data-testid={`text-module-${module.id}-title`}>
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-secondary mr-3 flex-shrink-0" />
                      <span className="text-sm" data-testid={`text-module-${module.id}-topic-${topicIndex}`}>
                        {topic}
                      </span>
                    </div>
                  ))}
                  <div className="pt-3 border-t border-border">
                    <span className="text-sm font-medium text-primary" data-testid={`text-module-${module.id}-projects`}>
                      {module.projects} Hands-on Projects
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        {tools.length > 0 && <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-tools-title">
            What You'll Master
          </h3>
          <div className="flex justify-center gap-4">
            {tools.map((tool, index) => (
              <Card 
                key={index} 
                className="p-4 text-center hover-elevate transition-all duration-200"
                data-testid={`card-tool-${index}`}
              >
                <img src={tool.icon} />
                <div className="text-sm font-medium">{tool.name}</div>
                
              </Card>
            ))}
          </div>
        </div>}

        {/* Additional Offerings */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-offerings-title">
            Exclusive Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalOfferings.map((offering, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-elevate transition-all duration-200"
                data-testid={`card-offering-${index}`}
              >
                <offering.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="font-semibold mb-2" data-testid={`text-offering-${index}-title`}>
                  {offering.title}
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-offering-${index}-description`}>
                  {offering.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}