'use client'

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { SolutionForm } from "./SolutionForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const columns = [
  { key: 'title', label: 'Solution Title', sortable: true },
  { key: 'category', label: 'Category', sortable: true },
];

export default function Solutions() {
  const [solutions, setSolutions] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSolution, setEditingSolution] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSolutions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/solutions`);
      setSolutions(res.data);
    } catch (error) {
      console.error('Error fetching solutions:', error);
      alert('Failed to fetch solutions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSolutions();
  }, []);

  const handleAdd = () => {
    setEditingSolution(null);
    setIsFormOpen(true);
  };

  const handleEdit = (solution) => {
    setEditingSolution(solution);
    setIsFormOpen(true);
  };

  const handleDelete = async (solution) => {
    if (!confirm(`Are you sure you want to delete "${solution.title}"?`)) return;
    
    try {
      setLoading(true);
      await axios.delete(`/api/solutions/${solution._id}`);
      setSolutions(prev => prev.filter(s => s._id !== solution._id));
      alert('Solution deleted successfully');
    } catch (error) {
      console.error('Error deleting solution:', error);
      alert('Failed to delete solution');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      
      if (editingSolution) {
        const res = await axios.put(
          `/api/solutions/${editingSolution._id}`,
          formData
        );
        setSolutions(solutions.map(s => 
          s._id === editingSolution._id ? res.data : s
        ));
        alert('Solution updated successfully');
      } else {
        const res = await axios.post('/api/solutions', formData);
        setSolutions([res.data, ...solutions]);
        alert('Solution created successfully');
      }
      
      setIsFormOpen(false);
      setEditingSolution(null);
    } catch (error) {
      console.error('Error saving solution:', error);
      alert(error.response?.data?.error || 'Failed to save solution');
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingSolution(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={solutions}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add New Solution"
          />
        </CardContent>
      </Card>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingSolution ? 'Edit Solution' : 'Add New Solution'}
            </DialogTitle>
          </DialogHeader>
          <SolutionForm
            initialData={editingSolution}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
