'use client'

import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// TODO: Remove mock data functionality
const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-featured online shopping platform with payment integration",
    technologies: ["React", "Node.js", "Stripe", "MongoDB"],
    studentName: "John Doe",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    status: "Completed"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates",
    technologies: ["Vue.js", "Firebase", "Socket.io"],
    studentName: "Jane Smith",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with forecasting",
    technologies: ["React", "D3.js", "Weather API"],
    studentName: "Mike Johnson",
    liveUrl: "",
    githubUrl: "https://github.com/example",
    status: "Completed"
  },
  {
    id: 4,
    title: "Social Media App",
    description: "Instagram-like social media platform",
    technologies: ["React Native", "Express", "PostgreSQL"],
    studentName: "Sarah Wilson",
    liveUrl: "https://example.com",
    githubUrl: "",
    status: "In Progress"
  }
];

const columns = [
  { key: 'title', label: 'Project Title', sortable: true },
  { key: 'studentName', label: 'Student', sortable: true },
  { key: 'technologies', label: 'Technologies', sortable: false },
  { key: 'status', label: 'Status', sortable: true },
];

export default function Projects() {
  const [projects, setProjects] = useState(mockProjects);

  const handleAdd = () => {
    console.log('Add new project triggered');
  };

  const handleEdit = (project ) => {
    console.log('Edit project:', project.title);
  };

  const handleDelete = (project ) => {
    setProjects(projects.filter(p => p.id !== project.id));
    console.log('Delete project:', project.title);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-projects-title">Projects</h1>
        <p className="text-muted-foreground">
          Showcase student projects and achievements.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Student Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={projects}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add Project"
          />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover-elevate">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg" data-testid={`text-project-title-${project.id}`}>
                  {project.title}
                </CardTitle>
                <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                  {project.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                by {project.studentName}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                {project.liveUrl && (
                  <Button size="sm" variant="outline" data-testid={`button-live-${project.id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button size="sm" variant="outline" data-testid={`button-github-${project.id}`}>
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}