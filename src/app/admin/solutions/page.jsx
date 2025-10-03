'use client'

import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// TODO: Remove mock data functionality
const mockSolutions = [
  {
    id: 1,
    title: "E-learning Platform Architecture",
    description: "Scalable architecture design for online learning platforms",
    industry: "Education",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
    complexity: "High",
    duration: "3 months",
    caseStudyUrl: "https://example.com/case-study-1",
    status: "Published"
  },
  {
    id: 2,
    title: "Real-time Chat System",
    description: "Building scalable real-time messaging systems",
    industry: "Communication",
    technologies: ["Socket.io", "Redis", "Node.js"],
    complexity: "Medium",
    duration: "1 month",
    caseStudyUrl: "https://example.com/case-study-2",
    status: "Published"
  },
  {
    id: 3,
    title: "Microservices Migration",
    description: "Migrating monolithic applications to microservices",
    industry: "Enterprise",
    technologies: ["Docker", "Kubernetes", "API Gateway"],
    complexity: "High",
    duration: "6 months",
    caseStudyUrl: "",
    status: "Draft"
  },
  {
    id: 4,
    title: "Mobile App Performance Optimization",
    description: "Optimizing React Native app performance",
    industry: "Mobile",
    technologies: ["React Native", "Redux", "Performance Tools"],
    complexity: "Medium",
    duration: "2 months",
    caseStudyUrl: "https://example.com/case-study-4",
    status: "Published"
  }
];

const columns = [
  { key: 'title', label: 'Solution Title', sortable: true },
  { key: 'industry', label: 'Industry', sortable: true },
  { key: 'complexity', label: 'Complexity', sortable: true },
  { key: 'duration', label: 'Duration', sortable: false },
  { key: 'status', label: 'Status', sortable: true },
];

export default function Solutions() {
  const [solutions, setSolutions] = useState(mockSolutions);

  const handleAdd = () => {
    console.log('Add new solution triggered');
  };

  const handleEdit = (solution) => {
    console.log('Edit solution:', solution.title);
  };

  const handleDelete = (solution) => {
    setSolutions(solutions.filter(s => s.id !== solution.id));
    console.log('Delete solution:', solution.title);
  };

  const getComplexityColor = (complexity) => {
    switch (complexity.toLowerCase()) {
      case 'low': return 'default';
      case 'medium': return 'secondary';
      case 'high': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-solutions-title">Solutions</h1>
        <p className="text-muted-foreground">
          Manage case studies and technical solutions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={solutions}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add Solution"
          />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {solutions.map((solution) => (
          <Card key={solution.id} className="hover-elevate">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg" data-testid={`text-solution-title-${solution.id}`}>
                  {solution.title}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant={getComplexityColor(solution.complexity)}>
                    {solution.complexity}
                  </Badge>
                  <Badge variant={solution.status === 'Published' ? 'default' : 'secondary'}>
                    {solution.status}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {solution.industry} • {solution.duration}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{solution.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Technologies Used:</h4>
                <div className="flex flex-wrap gap-1">
                  {solution.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-muted-foreground">
                  Duration: {solution.duration}
                </span>
                {solution.caseStudyUrl && (
                  <Button size="sm" variant="outline" data-testid={`button-case-study-${solution.id}`}>
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Case Study
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