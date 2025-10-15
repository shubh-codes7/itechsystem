'use client'

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { ServiceForm } from "./ServiceForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const columns = [
  { key: 'title', label: 'Service Title', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
];

export default function Services() {
  const [services, setServices] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/services`);
      setServices(res.data);
    } catch (error) {
      console.error('Error fetching services:', error);
      alert('Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleAdd = () => {
    setEditingService(null);
    setIsFormOpen(true);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };

  const handleDelete = async (service) => {
    if (!confirm(`Are you sure you want to delete "${service.title}"?`)) return;
    
    try {
      setLoading(true);
      await axios.delete(`/api/services/${service.slug}`);
      setServices(prev => prev.filter(s => s.slug !== service.slug));
      alert('Service deleted successfully');
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      
      if (editingService) {
        const res = await axios.put(
          `/api/services/${editingService.slug}`,
          formData
        );
        setServices(services.map(s => 
          s.slug === editingService.slug ? res.data : s
        ));
        alert('Service updated successfully');
      } else {
        const res = await axios.post('/api/services', formData);
        setServices([res.data, ...services]);
        alert('Service created successfully');
      }
      
      setIsFormOpen(false);
      setEditingService(null);
    } catch (error) {
      console.error('Error saving service:', error);
      alert(error.response?.data?.error || 'Failed to save service');
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingService(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Services</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={services}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add New Service"
          />
        </CardContent>
      </Card>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingService ? 'Edit Service' : 'Add New Service'}
            </DialogTitle>
          </DialogHeader>
          <ServiceForm
            initialData={editingService}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
