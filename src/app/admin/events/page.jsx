'use client'

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { EventForm } from "./EventForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const columns = [
  { key: 'title', label: 'Event Title', sortable: true },
  { key: 'type', label: 'Type', sortable: true },
  { key: 'instructor', label: 'Instructor', sortable: true }
];

export default function Events() {
  const [events, setEvents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/events`);
      setEvents(res.data);
    } catch (error) {
      console.error('Error fetching events:', error);
      alert('Failed to fetch events');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAdd = () => {
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setIsFormOpen(true);
  };

  const handleDelete = async (event) => {
    if (!confirm(`Are you sure you want to delete "${event.title}"?`)) return;
    
    try {
      setLoading(true);
      await axios.delete(`/api/events/${event._id}`);
      setEvents(prev => prev.filter(e => e._id !== event._id));
      alert('Event deleted successfully');
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Failed to delete event');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      setLoading(true);
      
      if (editingEvent) {
        const res = await axios.put(
          `/api/events/${editingEvent._id}`,
          formData
        );
        setEvents(events.map(e => 
          e._id === editingEvent._id ? res.data : e
        ));
        alert('Event updated successfully');
      } else {
        const res = await axios.post('/api/events', formData);
        setEvents([res.data, ...events]);
        alert('Event created successfully');
      }
      
      setIsFormOpen(false);
      setEditingEvent(null);
    } catch (error) {
      console.error('Error saving event:', error);
      alert(error.response?.data?.error || 'Failed to save event');
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingEvent(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Manage Events</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={events}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add New Event"
          />
        </CardContent>
      </Card>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </DialogTitle>
          </DialogHeader>
          <EventForm
            initialData={editingEvent}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
            loading={loading}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}