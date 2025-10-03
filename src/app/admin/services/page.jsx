'use client'

import { useState } from "react";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// TODO: Remove mock data functionality
const mockServices = [
  {
    id: 1,
    name: "Career Counseling",
    description: "One-on-one career guidance and planning sessions",
    category: "Counseling",
    duration: "1 hour",
    price: "$50",
    status: "Active"
  },
  {
    id: 2,
    name: "Resume Review",
    description: "Professional resume review and optimization",
    category: "Career Services",
    duration: "30 minutes",
    price: "$25",
    status: "Active"
  },
  {
    id: 3,
    name: "Mock Interviews",
    description: "Practice interviews with industry professionals",
    category: "Interview Prep",
    duration: "45 minutes", 
    price: "$40",
    status: "Active"
  },
  {
    id: 4,
    name: "Portfolio Review",
    description: "Detailed feedback on student portfolios",
    category: "Portfolio",
    duration: "1 hour",
    price: "$60",
    status: "Upcoming"
  },
  {
    id: 5,
    name: "Industry Mentoring",
    description: "Long-term mentoring with industry experts",
    category: "Mentoring",
    duration: "3 months",
    price: "$300",
    status: "Active"
  }
];

const columns = [
  { key: 'name', label: 'Service Name', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
  { key: 'duration', label: 'Duration', sortable: false },
  { key: 'price', label: 'Price', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
];

export default function Services() {
  const [services, setServices] = useState(mockServices);

  const handleAdd = () => {
    console.log('Add new service triggered');
  };

  const handleEdit = (service) => {
    console.log('Edit service:', service.name);
  };

  const handleDelete = (service) => {
    setServices(services.filter(s => s.id !== service.id));
    console.log('Delete service:', service.name);
  };

  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-services-title">Services</h1>
        <p className="text-muted-foreground">
          Manage all services offered by your institute.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={services}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add Service"
          />
        </CardContent>
      </Card>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Services by Category</h2>
        
        {Object.entries(servicesByCategory).map(([category, categoryServices]) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {category}
                <Badge variant="outline">{categoryServices.length} services</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <Card key={service.id} className="hover-elevate">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium" data-testid={`text-service-name-${service.id}`}>
                            {service.name}
                          </h4>
                          <Badge variant={service.status === 'Active' ? 'default' : 'secondary'}>
                            {service.status}
                          </Badge>
                        </div>
                        
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                        
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-sm text-muted-foreground">
                            {service.duration}
                          </span>
                          <span className="font-semibold text-primary">
                            {service.price}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}