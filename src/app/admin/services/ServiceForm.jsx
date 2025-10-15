"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

export function ServiceForm({ initialData, onSubmit, onCancel, loading }) {
  const [formData, setFormData] = useState({
    slug: initialData?.slug || "",
    title: initialData?.title || "",
    shortDescription: initialData?.shortDescription || "",
    fullDescription: initialData?.fullDescription || "",
    icon: initialData?.icon || "",
    category: initialData?.category || "",
    features: initialData?.features || [],
    benefits: initialData?.benefits || [],
    technologies: initialData?.technologies || [],
    seo: initialData?.seo || {
      title: "",
      description: ""
    }
  });

  const [newFeature, setNewFeature] = useState("");
  const [newBenefit, setNewBenefit] = useState("");
  const [newTechnology, setNewTechnology] = useState("");

  const handleIconUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Step 1: Show local preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, icon: reader.result }));
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
      setFormData((prev) => ({ ...prev, icon: data.secure_url }));
    } catch (err) {
      console.error("Upload failed", err);
    }
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }));
      setNewFeature("");
    }
  };

  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setFormData((prev) => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()],
      }));
      setNewBenefit("");
    }
  };

  const removeBenefit = (index) => {
    setFormData((prev) => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index),
    }));
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
    <form className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Service Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, slug: e.target.value }))
              }
              required
            />
          </div>

          <div>
            <Label htmlFor="category">Category</Label>
            <Select 
              id="category" 
              value={formData.category} 
              onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="testing">Testing</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="icon">Icon</Label>
            <Input
              id="icon"
              value={formData.icon}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, icon: e.target.value }))
              }
              placeholder="Enter URL or upload file"
              required
            />
            <Input
              type="file"
              accept="image/*"
              onChange={handleIconUpload}
              className="cursor-pointer mt-2"
            />
            {formData.icon && (
              <img
                src={formData.icon}
                alt="Icon Preview"
                className="w-16 h-16 object-cover rounded border mt-2"
              />
            )}
          </div>

          <div>
            <Label htmlFor="shortDescription">Short Description (10-15 words)</Label>
            <Textarea
              id="shortDescription"
              value={formData.shortDescription}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  shortDescription: e.target.value,
                }))
              }
              rows={2}
            />
          </div>

          <div>
            <Label htmlFor="fullDescription">Full Description</Label>
            <Textarea
              id="fullDescription"
              value={formData.fullDescription}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  fullDescription: e.target.value,
                }))
              }
              rows={5}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SEO</CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="border rounded-lg p-4 space-y-4 bg-muted/30">
            <div className="flex flex-col gap-4">
              <div>
                <Label htmlFor="seo-title">Title Tag (50-60 characters)</Label>
                <Input
                  id="seo-title"
                  placeholder="Best Web Development Services"
                  value={formData.seo.title}
                  maxLength="60"
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, seo: {...prev.seo, title: e.target.value} }))
                  }
                />
              </div>

              <div>
                <Label htmlFor="seo-description">Description Tag (120-160 characters)</Label>
                <Textarea
                  id="seo-description"
                  value={formData.seo.description}
                  maxLength={160}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      seo: {...prev.seo, description: e.target.value.slice(0, 160)}
                    }))
                  }
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Add Feature"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), addFeature())
              }
            />
            <Button type="button" onClick={addFeature}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.features.map((feature, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {feature}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => removeFeature(index)}
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
          <CardTitle>Benefits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Add Benefit"
              value={newBenefit}
              onChange={(e) => setNewBenefit(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), addBenefit())
              }
            />
            <Button type="button" onClick={addBenefit}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.benefits.map((benefit, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {benefit}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => removeBenefit(index)}
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
          <CardTitle>Technologies</CardTitle>
          <span className="text-xs mb-2">
            Add the technologies, tools, or frameworks used in this service.
          </span>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              placeholder="Add Technology"
              value={newTechnology}
              onChange={(e) => setNewTechnology(e.target.value)}
              onKeyPress={(e) =>
                e.key === "Enter" && (e.preventDefault(), addTechnology())
              }
            />
            <Button type="button" onClick={addTechnology}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {formData.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {tech}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 hover:bg-transparent"
                  onClick={() => removeTechnology(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} disabled={loading} type="button">
         {loading ? "Saving Service..." : "Save Service"}
        </Button>
      </div>
    </form>
  );
}