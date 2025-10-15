"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

export function ProjectForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    studentName: initialData?.studentName || "",
    image: initialData?.image || "",
    liveUrl: initialData?.liveUrl || "",
    githubUrl: initialData?.githubUrl || "",
    linkedIn: initialData?.linkedIn || "",
    technologies: initialData?.technologies || [],
  });

  const [newTechnology, setNewTechnology] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);

    const formDataCloudinary = new FormData();
    formDataCloudinary.append("file", file);
    formDataCloudinary.append("upload_preset", "images");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dseumoebk/image/upload",
        {
          method: "POST",
          body: formDataCloudinary,
        }
      );
      const data = await res.json();
      setFormData((prev) => ({ ...prev, image: data.secure_url }));
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const addTechnology = () => {
    if (newTechnology.trim()) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTechnology.trim()],
      }));
      setNewTechnology("");
    }
  };

  const removeTechnology = (index) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Enter project title"
              required
            />
          </div>

          <div>
            <Label htmlFor="studentName">Student Name *</Label>
            <Input
              id="studentName"
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
              placeholder="Enter student name"
              required
            />
          </div>

          <div>
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Enter project description"
              rows={4}
              required
            />
          </div>

          <div>
            <Label htmlFor="image">Project Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-2 h-32 w-32 rounded-md object-cover"
              />
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Project Links</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="liveUrl">Live URL</Label>
            <Input
              id="liveUrl"
              type="url"
              value={formData.liveUrl}
              onChange={(e) =>
                setFormData({ ...formData, liveUrl: e.target.value })
              }
              placeholder="https://project-demo.com"
            />
          </div>

          <div>
            <Label htmlFor="githubUrl">GitHub URL</Label>
            <Input
              id="githubUrl"
              type="url"
              value={formData.githubUrl}
              onChange={(e) =>
                setFormData({ ...formData, githubUrl: e.target.value })
              }
              placeholder="https://github.com/username/repo"
            />
          </div>

          <div>
            <Label htmlFor="linkedIn">LinkedIn Profile</Label>
            <Input
              id="linkedIn"
              type="url"
              value={formData.linkedIn}
              onChange={(e) =>
                setFormData({ ...formData, linkedIn: e.target.value })
              }
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technologies Used</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={newTechnology}
              onChange={(e) => setNewTechnology(e.target.value)}
              placeholder="Add a technology"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTechnology();
                }
              }}
            />
            <Button type="button" onClick={addTechnology}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary">
                {tech}
                <button
                  type="button"
                  onClick={() => removeTechnology(index)}
                  className="ml-2 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save Project
        </Button>
      </div>
    </form>
  );
}
