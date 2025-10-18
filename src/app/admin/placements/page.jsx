'use client'
import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import axios from "axios";
import { PlacementForm } from "./PlacementForm";

const columns = [
  { key: 'name', label: 'name', sortable: true },
  { key: 'company', label: 'Company', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'course', label: 'Course', sortable: true },
];

export default function Placements() {
  const [placements, setPlacements] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPlacement, setEditingPlacement] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPlacements = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/placements`);
        setPlacements(res.data);
      } catch (error) {
        console.error('Error fetching Placements:', error);
        alert('Failed to fetch Placements');
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchPlacements();
    }, []);

    const handleAdd = () => {
    setEditingPlacement(null);
    setIsFormOpen(true);
  };

  const handleEdit = (placement) => {
    setEditingPlacement(placement);
    setIsFormOpen(true);
  };

  const handleDelete = async (placement) => {
    if (!confirm(`Are you sure you want to delete "${placement.name}"?`)) return;
    
    try {
      setLoading(true);
      await axios.delete(`/api/placements/${placement._id}`);
      setPlacements(prev => prev.filter(e => e._id !== placement._id));
      alert('placement deleted successfully');
    } catch (error) {
      console.error('Error deleting placement:', error);
      alert('Failed to delete placement');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      
      if (editingPlacement) {
        const res = await axios.put(
          `/api/placements/${editingPlacement._id}`,
          formData
        );
        setPlacements(placements.map(e => 
          e._id === editingPlacement._id ? res.data : e
        ));
        alert('placement updated successfully');
      } else {
        const res = await axios.post('/api/placements', formData);
        setPlacements([res.data, ...placements]);
        alert('placement created successfully');
      }
      
      setIsFormOpen(false);
      setEditingPlacement(null);
    } catch (error) {
      console.error('Error saving placement:', error);
      alert(error.response?.data?.error || 'Failed to save placement');
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingPlacement(null);
  };

  return (
    <div className="space-y-6 ">

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


      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingPlacement ? 'Edit Placement' : 'Add New Placement'}
            </DialogTitle>
          </DialogHeader>
          <PlacementForm
            initialData={editingPlacement}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={loading}
          />
        </DialogContent>
      </Dialog>

    </div>
  );
}