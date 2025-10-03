'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

export function CourseForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    slug: initialData?.slug || "",
    title: initialData?.title || "",
    image: initialData?.image || "",
    icon: initialData?.icon || "",
    description: initialData?.description || "",
    why: initialData?.why || "",
    modules: initialData?.modules || [],
    tools: initialData?.tools || [],
    technologies: initialData?.technologies || [],
  });

  const [newTechnology, setNewTechnology] = useState("");
  const [newModule, setNewModule] = useState({
    title: "",
    duration: "",
    topics: [],
    projects: 0,
  });
  const [newModuleTopic, setNewModuleTopic] = useState("");
  const [newTool, setNewTool] = useState({
    name: "",
    icon: ""
  });

  const handleImageUpload = async (e, field) => {
  const file = e.target.files?.[0];
  if (!file) return;

  // Step 1: Show local preview
  const reader = new FileReader();
  reader.onloadend = () => {
    setFormData(prev => ({ ...prev, [field]: reader.result })); // preview
  };
  reader.readAsDataURL(file);

  // Step 2: Upload to Cloudinary
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
    console.log(data);

    // Step 3: Replace preview with hosted URL
    setFormData(prev => ({ ...prev, [field]: data.secure_url }));
  } catch (err) {
    console.error("Upload failed", err);
  }
};


  const handleToolIconUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewTool(prev => ({ ...prev, icon: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addTechnology = () => {
    if (newTechnology.trim()) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, newTechnology.trim()]
      }));
      setNewTechnology("");
    }
  };

  const removeTechnology = (index) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter((_, i) => i !== index)
    }));
  };

  const addModuleTopic = () => {
    if (newModuleTopic.trim()) {
      setNewModule(prev => ({
        ...prev,
        topics: [...prev.topics, newModuleTopic.trim()]
      }));
      setNewModuleTopic("");
    }
  };

  const removeModuleTopic = (index) => {
    setNewModule(prev => ({
      ...prev,
      topics: prev.topics.filter((_, i) => i !== index)
    }));
  };


  const addModule = () => {
    if (newModule.title.trim()) {
      setFormData(prev => ({
        ...prev,
        modules: [...prev.modules, newModule]
      }));
      setNewModule({ title: "", duration: "", topics: [], projects: 0 });
    }
  };

  const removeModule = (index) => {
    setFormData(prev => ({
      ...prev,
      modules: prev.modules.filter((_, i) => i !== index)
    }));
  };

  const addTool = () => {
    if (newTool.name.trim()) {
      setFormData(prev => ({
        ...prev,
        tools: [...prev.tools, newTool]
      }));
      setNewTool({ name: "", icon: ""});
    }
  };

  const removeTool = (index) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.filter((_, i) => i !== index)
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
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Course Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
                
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="image">Image Link</Label>
              <Input
                id="image"
                value={formData.image}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                required
              />
              <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'image')}
                  className="cursor-pointer"
                />
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="w-full h-32 object-cover rounded border" />
                )}
            </div>
            <div>
              <Label htmlFor="icon">Icon Link</Label>
              <Input
                id="icon"
                value={formData.icon}
                onChange={(e) => setFormData(prev => ({ ...prev, icon: e.target.value }))}
                placeholder="Enter URL or upload file"
                required
              />
              <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, 'icon')}
                  className="cursor-pointer"
                />
                {formData.icon && (
                  <img src={formData.icon} alt="Icon Preview" className="w-16 h-16 object-cover rounded border" />
                )}
            </div>
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              data-testid="input-description"
            />
          </div>
          
          <div>
            <Label htmlFor="why">Why take this course? (max 250 chars)</Label>
            <Textarea
              id="why"
              value={formData.why}
              onChange={(e) => setFormData(prev => ({ ...prev, why: e.target.value.slice(0, 250) }))}
              maxLength={250}
              data-testid="input-why"
            />
            <p className="text-xs text-muted-foreground mt-1">
              {formData.why.length}/250 characters
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Add technology"
              value={newTechnology}
              onChange={(e) => setNewTechnology(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
              data-testid="input-new-technology"
            />
            <Button type="button" onClick={addTechnology}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {formData.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {tech}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => removeTechnology(index)}
                  data-testid={`button-remove-technology-${index}`}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Modules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-4 bg-muted/30">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="module-title">Module Title</Label>
                <Input
                  id="module-title"
                  placeholder="e.g., C Fundamentals"
                  value={newModule.title}
                  onChange={(e) => setNewModule(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="module-duration">Duration</Label>
                <Input
                  id="module-duration"
                  placeholder="e.g., 4 weeks"
                  value={newModule.duration}
                  onChange={(e) => setNewModule(prev => ({ ...prev, duration: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="module-projects">Number of Projects</Label>
              <Input
                id="module-projects"
                type="number"
                min="0"
                placeholder="e.g., 2"
                value={newModule.projects}
                onChange={(e) => setNewModule(prev => ({ ...prev, projects: parseInt(e.target.value) || 0 }))}
              />
            </div>

            <div>
              <Label>Topics</Label>
              <div className="flex gap-2 mb-2">
                <Input
                  placeholder="Add topic"
                  value={newModuleTopic}
                  onChange={(e) => setNewModuleTopic(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addModuleTopic())}
                />
                <Button type="button" onClick={addModuleTopic}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {newModule.topics.map((topic, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1">
                    {topic}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 hover:bg-transparent"
                      onClick={() => removeModuleTopic(index)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </div>

            <Button type="button" onClick={addModule} className="w-full">
              Add Module
            </Button>
          </div>

          <div className="space-y-2">
            {formData.modules.map((module, index) => (
              <Card key={module.id || index}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">{module.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {module.duration} • {module.projects} project{module.projects !== 1 ? 's' : ''}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {module.topics.map((topic, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeModule(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Tools</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-4 bg-muted/30">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tool-name">Tool Name</Label>
                <Input
                  id="tool-name"
                  placeholder="e.g., GCC"
                  value={newTool.name}
                  onChange={(e) => setNewTool(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="tool-icon">Icon URL</Label>
                <Input
                  id="tool-icon"
                  placeholder="e.g., http://icon8-gcc.com"
                  value={newTool.icon}
                  onChange={(e) => setNewTool(prev => ({ ...prev, icon: e.target.value }))}
                />
              </div>
            </div>

            <Button type="button" onClick={addTool} className="w-full">
              Add Tool
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {formData.tools.map((tool, index) => (
              <Card key={index}>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      {tool.icon && (
                        <img src={tool.icon} alt={tool.name} className="w-8 h-8" />
                      )}
                      <span className="font-medium">{tool.name}</span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTool(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          Save Course
        </Button>
      </div>
    </form>
  );
}
