'use client'

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { CourseForm } from "@/components/CourseForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

const columns = [
  { key: 'title', label: 'Course Title', sortable: true },
  { key: 'slug', label: 'Slug', sortable: true },
  // { key: 'technologies', label: 'Technologies', sortable: false },
  // { key: 'students', label: 'Students', sortable: true },
  // { key: 'status', label: 'Status', sortable: true },
];

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all courses
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/courses`);
      setCourses(res.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
      alert('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleAdd = () => {
    setEditingCourse(null);
    setIsFormOpen(true);
    console.log('Add new course triggered');
  };

  const handleEdit = (course) => {
    setEditingCourse(course);
    setIsFormOpen(true);
    console.log('Edit course:', course.title);
  };

  const handleDelete = async (course) => {
    if (!confirm(`Are you sure you want to delete "${course.title}"?`)) return;
    
    try {
      setLoading(true);
      // Use the course's slug to delete
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses/${course.slug}`);
      
      // Remove from local state
      setCourses(prev => prev.filter(c => c.slug !== course.slug));
      console.log('Course deleted:', res.data);
      alert('Course deleted successfully');
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Failed to delete course');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (formData) => {
    console.log('Form data:', formData);
    
    try {
      setLoading(true);
      
      if (editingCourse) {
        // Update existing course
        const res = await axios.put(
          `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses/${editingCourse.slug}`,
          formData
        );
        
        // Update local state
        setCourses(courses.map(c => 
          c.slug === editingCourse.slug ? res.data : c
        ));
        
        console.log('Course updated:', res.data);
        alert('Course updated successfully');
      } else {
        // Create new course
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses`,
          formData
        );
        
        // Add to local state
        setCourses([...courses, res.data]);
        
        console.log('Course created:', res.data);
        alert('Course created successfully');
      }
      
      setIsFormOpen(false);
      setEditingCourse(null);
    } catch (error) {
      console.error('Error saving course:', error);
      
      if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else {
        alert('Failed to save course');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingCourse(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-courses-title">
          Courses
        </h1>
        <p className="text-muted-foreground">
          Manage all courses offered by I-Tech Systems.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && <p>Loading...</p>}
          <DataTable
            columns={columns}
            data={courses}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            addButtonText="Add Course"
          />
        </CardContent>
      </Card>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto custom-dialog">
          <DialogHeader>
            <DialogTitle>
              {editingCourse ? 'Edit Course' : 'Add New Course'}
            </DialogTitle>
          </DialogHeader>
          <CourseForm
            initialData={editingCourse}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}