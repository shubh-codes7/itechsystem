'use client'

import { useEffect, useState } from "react";
import { DataTable } from "@/components/DataTable";
import { CourseForm } from "@/components/CourseForm";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";
import { useFetch } from "@/hooks/use-fetch";

const columns = [
  { key: 'title', label: 'Course Title', sortable: true },
  // { key: 'technologies', label: 'Technologies', sortable: false },
  // { key: 'modules', label: 'Modules', sortable: true },
  // { key: 'students', label: 'Students', sortable: true },
  // { key: 'status', label: 'Status', sortable: true },
];

export default function Courses() {
  const { data : body, error, loading, refetch } = useFetch("/api/courses");
  const [courses, setCourses] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

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

  const handleDelete = (course) => {
    setCourses(courses.filter(c => c.id !== course.id));
    console.log('Delete course:', course.title);
  };

  const handleFormSubmit = async (formData) => {
    console.log(formData);
    if (editingCourse) {
      setCourses(courses.map(c => 
        c.id === editingCourse?.id 
          ? { ...c, ...formData, technologies: formData.technologies }
          : c
      ));
      console.log('Course updated:', formData);
    } else {
      
      setCourses([...courses, formData]);

      try{
        const res = await axios.post('http://localhost:3000/api/courses', formData)
        console.log('User created', res.data)
      }catch(error){
        console.log(error);
      }
    }
    setIsFormOpen(false);
    setEditingCourse(null);
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingCourse(null);
  };

  useEffect(() => {
    if (body) {
      setCourses(body);
    }
  }, [body]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-courses-title">Courses</h1>
        <p className="text-muted-foreground">
          Manage all courses offered by I-Tech Systems.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Courses</CardTitle>
        </CardHeader>
        <CardContent>
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

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen} >
        <DialogContent className=" max-h-[90vh] overflow-y-auto">
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