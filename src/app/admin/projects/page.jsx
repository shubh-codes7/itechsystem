'use client'

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { ProjectForm } from "./ProjectForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const columns = [
  { key: 'title', label: 'Project Title', sortable: true },
  { key: 'studentName', label: 'Student Name', sortable: true },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/projects`);
      setProjects(res.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
      alert('Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleAdd = () => {
    setEditingProject(null);
    setIsFormOpen(true);
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setIsFormOpen(true);
  };

  const handleDelete = async (project) => {
    if (!confirm(`Are you sure you want to delete "${project.title}"?`)) return;
    
    try {
      setLoading(true);
      await axios.delete(`/api/projects/${project._id}`);
      setProjects(prev => prev.filter(p => p._id !== project._id));
      alert('Project deleted successfully');
    } catch (error) {
      console.error('Error deleting project:', error);
      alert('Failed to delete project');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      
      if (editingProject) {
        const res = await axios.put(
          `/api/projects/${editingProject._id}`,
          formData
        );
        setProjects(projects.map(p => 
          p._id === editingProject._id ? res.data : p
        ));
        alert('Project updated successfully');
      } else {
        const res = await axios.post('/api/projects', formData);
        setProjects([res.data, ...projects]);
        alert('Project created successfully');
      }
      
      setIsFormOpen(false);
      setEditingProject(null);
    } catch (error) {
      console.error('Error saving project:', error);
      alert(error.response?.data?.error || 'Failed to save project');
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingProject(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={projects}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add New Project"
          />
        </CardContent>
      </Card>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingProject ? 'Edit Project' : 'Add New Project'}
            </DialogTitle>
          </DialogHeader>
          <ProjectForm
            initialData={editingProject}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
