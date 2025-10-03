'use client'

import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, DollarSign } from "lucide-react";

// TODO: Remove mock data functionality
const mockJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "New York, NY",
    type: "Full-time",
    experience: "2-4 years",
    salary: "$70,000 - $90,000",
    skills: ["React", "JavaScript", "CSS", "TypeScript"],
    postedDate: "2024-01-15",
    status: "Active"
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3-5 years",
    salary: "$85,000 - $110,000",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    postedDate: "2024-01-14",
    status: "Active"
  },
  {
    id: 3,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Austin, TX",
    type: "Full-time",
    experience: "1-3 years",
    salary: "$75,000 - $95,000",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
    postedDate: "2024-01-13",
    status: "Active"
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Design Studio",
    location: "Los Angeles, CA",
    type: "Contract",
    experience: "2-4 years",
    salary: "$60 - $80/hour",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    postedDate: "2024-01-12",
    status: "Filled"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    type: "Full-time",
    experience: "3-6 years",
    salary: "$90,000 - $120,000",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    postedDate: "2024-01-11",
    status: "Active"
  }
];

const columns = [
  { key: 'title', label: 'Job Title', sortable: true },
  { key: 'company', label: 'Company', sortable: true },
  { key: 'location', label: 'Location', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

export default function Jobs() {
  const [jobs, setJobs] = useState(mockJobs);

  const handleAdd = () => {
    console.log('Add new job triggered');
  };

  const handleEdit = (job ) => {
    console.log('Edit job:', job.title);
  };

  const handleDelete = (job ) => {
    setJobs(jobs.filter(j => j.id !== job.id));
    console.log('Delete job:', job.title);
  };

  const getStatusColor = (statusg) => {
    switch (status.toLowerCase()) {
      case 'active': return 'default';
      case 'filled': return 'secondary';
      case 'expired': return 'destructive';
      default: return 'outline';
    }
  };

  const getTypeColor = (type) => {
    switch (type.toLowerCase()) {
      case 'full-time': return 'default';
      case 'part-time': return 'secondary';
      case 'contract': return 'outline';
      case 'internship': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-jobs-title">Jobs</h1>
        <p className="text-muted-foreground">
          Manage job postings and opportunities for students.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Job Postings</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={jobs}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add Job Posting"
          />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <Card key={job.id} className="hover-elevate">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg" data-testid={`text-job-title-${job.id}`}>
                    {job.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {job.company}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Badge variant={getTypeColor(job.type)}>
                    {job.type}
                  </Badge>
                  {/* <Badge variant={getStatusColor(job.status)}>
                    {job.status}
                  </Badge> */}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {job.experience} experience
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  {job.salary}
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Required Skills:</h4>
                <div className="flex flex-wrap gap-1">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  Posted: {new Date(job.postedDate).toLocaleDateString()}
                </span>
                <Button size="sm" variant="outline" data-testid={`button-apply-${job.id}`}>
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}