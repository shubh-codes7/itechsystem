'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit inquiry')
      }

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      })
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      })
      
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast({
        title: "Failed to Send Message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-contact-title">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our course? Need help choosing the right program? 
            Our team is here to help you start your tech journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-contact-info-title">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                    <span data-testid="text-contact-phone">+91 98765 43210</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:info@techmasteracademy.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <span data-testid="text-contact-email">info@techmasteracademy.com</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-muted-foreground" data-testid="text-contact-address">
                    Tech Hub, Electronic City<br />
                    Bangalore, Karnataka 560100
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-semibold mb-3" data-testid="text-response-time-title">
                Quick Response Guarantee
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
              <div className="text-sm">
                <strong>Business Hours:</strong><br />
                Monday - Friday: 9:00 AM - 8:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl" data-testid="text-form-title">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      data-testid="input-contact-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      data-testid="input-contact-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-email">Email Address *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    data-testid="input-contact-email"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-subject">Subject *</Label>
                  <Input
                    id="contact-subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    required
                    data-testid="input-contact-subject"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                    rows={5}
                    data-testid="textarea-contact-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={!formData.name || !formData.email || !formData.subject || !formData.message || isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}