'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Users, Building2 } from "lucide-react";

export default function EnquiryForms() {
  const [activeForm, setActiveForm] = useState('courses');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    course: '',
    service: '',
    position: '',
    solution: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (enquiryType) => {
    console.log(`${enquiryType} enquiry submitted:`, formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      course: '',
      service: '',
      position: '',
      solution: ''
    });
  };

  const enquiryTypes = [
    {
      id: 'courses',
      title: 'Course Enquiry',
      subtitle: 'Join our training programs',
      icon: GraduationCap,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'services',
      title: 'Service Enquiry',
      subtitle: 'Professional IT services',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'recruitment',
      title: 'Recruitment',
      subtitle: 'Hire our talented graduates',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'solutions',
      title: 'Software Solutions',
      subtitle: 'Custom software development',
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    }
  ];

  const renderFormFields = () => {
    const commonFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
              data-testid="input-name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
              data-testid="input-email"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter your phone number"
            data-testid="input-phone"
          />
        </div>
      </>
    );

    const specificFields = {
      courses: (
        <div>
          <label className="block text-sm font-medium mb-2">Course Interest</label>
          <select
            value={formData.course}
            onChange={(e) => handleInputChange('course', e.target.value)}
            className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            data-testid="select-course"
          >
            <option value="">Select a course</option>
            <option value="web-development">Web Development</option>
            <option value="software-development">Software Development</option>
            <option value="android-development">Android Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="software-testing">Software Testing</option>
            <option value="automation-testing">Automation Testing</option>
          </select>
        </div>
      ),
      services: (
        <div>
          <label className="block text-sm font-medium mb-2">Service Required</label>
          <select
            value={formData.service}
            onChange={(e) => handleInputChange('service', e.target.value)}
            className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            data-testid="select-service"
          >
            <option value="">Select a service</option>
            <option value="web-design">Web Design & Development</option>
            <option value="cloud-applications">Cloud Applications</option>
            <option value="seo">Search Engine Optimization</option>
            <option value="web-hosting">Web Hosting Services</option>
            <option value="domain-registration">Domain Registration</option>
            <option value="technical-team">Technical Team Contract</option>
          </select>
        </div>
      ),
      recruitment: (
        <div>
          <label className="block text-sm font-medium mb-2">Position/Role</label>
          <input
            type="text"
            value={formData.position}
            onChange={(e) => handleInputChange('position', e.target.value)}
            className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="e.g., Junior Developer, Software Tester"
            data-testid="input-position"
          />
        </div>
      ),
      solutions: (
        <div>
          <label className="block text-sm font-medium mb-2">Software Solution</label>
          <select
            value={formData.solution}
            onChange={(e) => handleInputChange('solution', e.target.value)}
            className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            data-testid="select-solution"
          >
            <option value="">Select a solution</option>
            <option value="hospital-management">Hospital Management Software</option>
            <option value="opd-management">OPD Management Software</option>
            <option value="pathology-lab">Pathology Lab Software</option>
            <option value="billing-software">Billing Software</option>
            <option value="erp-service">ERP for Service Industries</option>
            <option value="institute-management">Institute Management Software</option>
            <option value="custom-solution">Custom Solution</option>
          </select>
        </div>
      )
    };

    return (
      <div className="space-y-4">
        {commonFields}
        {specificFields[activeForm]}
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="w-full p-3 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Tell us more about your requirements..."
            data-testid="textarea-message"
          />
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-enquiry-status">
            Enquiry Forms
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-enquiry-title">
            What Can We Help You <span className="text-primary">With</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the appropriate enquiry type below and fill out the form. 
            Our team will get back to you within 24 hours.
          </p>
        </div>

        {/* Enquiry Type Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {enquiryTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setActiveForm(type.id)}
                className={`p-6 border rounded-lg transition-all duration-200 text-left hover-elevate ${
                  activeForm === type.id 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
                data-testid={`button-enquiry-${type.id}`}
              >
                <div className={`${type.bgColor} p-3 rounded-lg w-fit mb-4`}>
                  <IconComponent className={`w-6 h-6 ${type.color}`} />
                </div>
                <h3 className={`font-semibold mb-1 ${activeForm === type.id ? 'text-primary' : ''}`}>
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground">{type.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Enquiry Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary" data-testid="text-form-title">
                {enquiryTypes.find(type => type.id === activeForm)?.title} Form
              </CardTitle>
            </CardHeader>
            <CardContent>
              {renderFormFields()}
              <Button 
                size="lg" 
                className="w-full mt-6"
                onClick={() => handleSubmit(activeForm)}
                data-testid="button-submit-enquiry"
              >
                Submit {enquiryTypes.find(type => type.id === activeForm)?.title}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}