'use client'
import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Building, Calendar, TrendingUp, Users } from "lucide-react";

// TODO: Remove mock data functionality
const mockPlacements = [
  {
    id: 1,
    studentName: "John Doe",
    studentEmail: "john.doe@email.com",
    company: "TechCorp Inc.",
    position: "Frontend Developer",
    package: "$75,000",
    course: "Full Stack Development",
    placementDate: "2024-01-15",
    status: "Confirmed"
  },
  {
    id: 2,
    studentName: "Jane Smith",
    studentEmail: "jane.smith@email.com",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    package: "$95,000",
    course: "Full Stack Development",
    placementDate: "2024-01-10",
    status: "Confirmed"
  },
  {
    id: 3,
    studentName: "Mike Johnson",
    studentEmail: "mike.johnson@email.com",
    company: "DataTech Solutions",
    position: "Data Scientist",
    package: "$85,000",
    course: "Data Science",
    placementDate: "2024-01-08",
    status: "Confirmed"
  },
  {
    id: 4,
    studentName: "Sarah Wilson",
    studentEmail: "sarah.wilson@email.com",
    company: "MobileFirst",
    position: "Mobile Developer",
    package: "$80,000",
    course: "Mobile App Development",
    placementDate: "2024-01-05",
    status: "Pending"
  },
  {
    id: 5,
    studentName: "Alex Brown",
    studentEmail: "alex.brown@email.com",
    company: "DesignCo",
    position: "UI/UX Designer",
    package: "$65,000",
    course: "UI/UX Design",
    placementDate: "2024-01-03",
    status: "Confirmed"
  }
];

const columns = [
  { key: 'studentName', label: 'Student Name', sortable: true },
  { key: 'company', label: 'Company', sortable: true },
  { key: 'position', label: 'Position', sortable: true },
  { key: 'package', label: 'Package', sortable: true },
  { key: 'course', label: 'Course', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

export default function Placements() {
  const [placements, setPlacements] = useState(mockPlacements);

  const handleAdd = () => {
    console.log('Add new placement triggered');
  };

  const handleEdit = (placement ) => {
    console.log('Edit placement:', placement.studentName);
  };

  const handleDelete = (placement) => {
    setPlacements(placements.filter(p => p.id !== placement.id));
    console.log('Delete placement:', placement.studentName);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed': return 'default';
      case 'pending': return 'secondary';
      case 'rejected': return 'destructive';
      default: return 'outline';
    }
  };

  const confirmedPlacements = placements.filter(p => p.status === 'Confirmed');
  const averagePackage = confirmedPlacements.reduce((sum, p) => {
    const packageValue = parseInt(p.package.replace(/[$,]/g, ''));
    return sum + packageValue;
  }, 0) / confirmedPlacements.length;

  const placementsByCompany = confirmedPlacements.reduce((acc, placement) => {
    acc[placement.company] = (acc[placement.company] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-placements-title">Placements</h1>
        <p className="text-muted-foreground">
          Track student placements and success metrics.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Placements</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{confirmedPlacements.length}</div>
            <p className="text-xs text-muted-foreground">
              This year
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Package</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${averagePackage.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              +12% from last year
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">
              Placement success rate
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Recruiter</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">TechCorp</div>
            <p className="text-xs text-muted-foreground">
              Most placements
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Placements</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={placements}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add Placement"
          />
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Placements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {placements.slice(0, 5).map((placement) => (
                <div key={placement.id} className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {placement.studentName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none" data-testid={`text-student-${placement.id}`}>
                      {placement.studentName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {placement.position} at {placement.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={getStatusColor(placement.status)}>
                      {placement.status}
                    </Badge>
                    <p className="text-sm font-medium mt-1">{placement.package}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Recruiting Companies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(placementsByCompany)
                .sort(([,a], [,b]) => b-a)
                .slice(0, 5)
                .map(([company, count], index) => (
                  <div key={company} className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium" data-testid={`text-company-${index}`}>
                        {company}
                      </span>
                    </div>
                    <Badge variant="outline">{count} placements</Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}