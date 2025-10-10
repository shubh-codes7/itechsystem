'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, ExternalLink, Github, Linkedin, LinkedinIcon, LucideLinkedin, MapPin, TrendingUp, Users } from "lucide-react"
import project1 from "@/../public/images/Project1.png"
import project2 from "@/../public/images/Project2.png"
import Image from "next/image"
import projectbg from "@/../public/images/project_bg.jpg"
import HeroSection from "@/components/HeroSection"





const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, admin dashboard, and real-time inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: project1,
    liveUrl: "#",
    githubUrl: "#",
    studentName: "Arjun Patel"
  },
  {
    id: "2", 
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with interactive charts, data visualization, and export capabilities.",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
    image: project2,
    liveUrl: "#",
    githubUrl: "#",
    studentName: "Priya Sharma"
  },
  {
    id: "2", 
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with interactive charts, data visualization, and export capabilities.",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
    image: project2,
    liveUrl: "#",
    githubUrl: "#",
    studentName: "Priya Sharma"
  },
  {
    id: "2", 
    title: "Analytics Dashboard",
    description: "Business intelligence dashboard with interactive charts, data visualization, and export capabilities.",
    technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
    image: project2,
    liveUrl: "#",
    githubUrl: "#",
    studentName: "Priya Sharma"
  }
]



export default function ProjectsPage() {
  const handleProjectClick = (project, type) => {
    console.log(`${type} link clicked for project: ${project.title}`)
    // todo: remove mock functionality
    alert(`Would open ${type} link for ${project.title}`)
  }

  return (
    <section className=" bg-muted/30">
      {/* Page Hero */}
      <HeroSection
        badge="Our Projects"
        slug1="Your Ideas💡"
        slug2="Our Code."
        description="From concept to launch, we transform your vision into real, working projects with industry-grade execution."
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center my-16">
          <Badge className="mb-4" data-testid="badge-showcase-status">#Students Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-showcase-title">
            Our <span className="text-primary">Students</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Our students don’t just learn—they build. From e-commerce platforms to data dashboards, these projects showcase the creativity, skill, and industry-readiness of our graduates.
          </p>
        </div>



        {/* Student Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-elevate transition-all duration-200" data-testid={`card-project-${project.id}`}>
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex mt-2 items-center justify-between">
                    <CardTitle className="text-xl " data-testid={`text-project-${project.id}-title`}>
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleProjectClick(project, 'live')}
                        className="p-2 rounded-md hover-elevate transition-colors"
                        data-testid={`button-project-${project.id}-live`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleProjectClick(project, 'github')}
                        className="p-2 rounded-md hover-elevate transition-colors"
                        data-testid={`button-project-${project.id}-github`}
                      >
                        <Github className="w-4 h-4" />
                      </button>
                      <button><LucideLinkedin className="w-4 h-4"/></button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`text-project-${project.id}-student`}>
                    by {project.studentName}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4" data-testid={`text-project-${project.id}-description`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" data-testid={`badge-project-${project.id}-tech-${index}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Projects Heading */}
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-showcase-status">#Clients Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-showcase-title">
            Our <span className="text-primary">Clients</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            From startups to enterprises, we turn client visions into powerful digital solutions. These projects reflect our commitment to quality, innovation, and real-world impact—delivered with full-stack precision and business insight.
          </p>
        </div>

        {/* Client Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover-elevate transition-all duration-200" data-testid={`card-project-${project.id}`}>
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex mt-2 items-center justify-between">
                    <CardTitle className="text-xl " data-testid={`text-project-${project.id}-title`}>
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleProjectClick(project, 'live')}
                        className="p-2 rounded-md hover-elevate transition-colors"
                        data-testid={`button-project-${project.id}-live`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleProjectClick(project, 'github')}
                        className="p-2 rounded-md hover-elevate transition-colors"
                        data-testid={`button-project-${project.id}-github`}
                      >
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2" data-testid={`text-project-${project.id}-student`}>
                    by {project.studentName}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4" data-testid={`text-project-${project.id}-description`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" data-testid={`badge-project-${project.id}-tech-${index}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}