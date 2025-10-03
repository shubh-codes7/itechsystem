'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Code, ExternalLink, Github, Linkedin, LinkedinIcon, LucideLinkedin, MapPin, TrendingUp, Users } from "lucide-react"
import project1 from "@/../public/images/Project1.png"
import project2 from "@/../public/images/Project2.png"
import Image from "next/image"
import projectbg from "@/../public/images/project_bg.jpg"
import HeroSection from "@/components/HeroSection"


const placements = [
  {
    id: "1",
    name: "Arjun Patel",
    role: "Full Stack Developer",
    company: "TCS",
    package: "₹9.2L",
    location: "Bangalore",
    image: "https://static.vecteezy.com/system/resources/thumbnails/006/487/917/small_2x/man-avatar-icon-free-vector.jpg",
    testimonial: "The hands-on projects and mentorship helped me land my dream job!"
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Frontend Developer",
    company: "Infosys",
    package: "₹8.5L",
    location: "Hyderabad", 
    image: "https://static.vecteezy.com/system/resources/previews/004/899/680/non_2x/beautiful-blonde-woman-with-makeup-avatar-for-a-beauty-salon-illustration-in-the-cartoon-style-vector.jpg",
    testimonial: "Excellent curriculum that perfectly aligned with industry requirements."
  },
  {
    id: "3",
    name: "Carlos Rodriguez",
    role: "Backend Developer",
    company: "Wipro",
    package: "₹10.1L",
    location: "Pune",
    image: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png",
    testimonial: "From zero coding knowledge to a successful career in just 6 months!"
  }
]


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



export default function Projects() {
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

        {/* Placement Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-total-placements">500+</div>
            <div className="text-muted-foreground">Total Placements</div>
          </Card>
          <Card className="text-center p-6 hover-elevate">
            <div className="text-3xl font-bold text-secondary mb-2" data-testid="text-stat-placement-rate">95%</div>
            <div className="text-muted-foreground">Placement Rate</div>
          </Card>
          <Card className="text-center p-6 hover-elevate">
            <div className="text-3xl font-bold text-primary mb-2" data-testid="text-stat-avg-package">₹8.5L</div>
            <div className="text-muted-foreground">Average Package</div>
          </Card>
          <Card className="text-center p-6 hover-elevate">
            <div className="text-3xl font-bold text-secondary mb-2" data-testid="text-stat-top-package">₹15L</div>
            <div className="text-muted-foreground">Highest Package</div>
          </Card>
        </div> */}

        {/* Recent Placements */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-placements-title">
            Recent Placements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {placements.map((student) => (
              <Card key={student.id} className="hover-elevate transition-all duration-200" data-testid={`card-student-${student.id}`}>
                <CardHeader className="text-center">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={student.image} alt={student.name} />
                    <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg" data-testid={`text-student-${student.id}-name`}>
                    {student.name}
                  </CardTitle>
                  <div className="space-y-2">
                    <Badge variant="secondary" data-testid={`badge-student-${student.id}-role`}>
                      {student.role}
                    </Badge>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span data-testid={`text-student-${student.id}-location`}>{student.location}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-semibold" data-testid={`text-student-${student.id}-company`}>
                        {student.company}
                      </div>
                      <div className="text-lg font-bold text-primary flex items-center">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span data-testid={`text-student-${student.id}-package`}>{student.package}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground italic" data-testid={`text-student-${student.id}-testimonial`}>
                    "{student.testimonial}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

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

        {/* Hiring Partners */}
        {/* <div>
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-partners-title">
            Our Hiring Partners
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div 
                key={index} 
                className="text-center p-4 hover-elevate transition-all duration-200"
                data-testid={`div-company-${index}`}
              >
                <div className="text-4xl mb-2">{company.logo}</div>
                <div className="text-sm font-medium text-muted-foreground" data-testid={`text-company-${index}-name`}>
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}