'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
// import { useToast } from "@/hooks/use-toast"
import { Calendar, Phone, Mail, User, CheckCircle } from "lucide-react"

const benefits = [
  "Live coding demonstration",
  "Career guidance session", 
  "Curriculum walkthrough",
  "Placement assistance overview",
  "Q&A with industry experts"
]

export default function DemoBooking() {
  const [selectedSlot, setSelectedSlot] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    console.log(`Form field ${field} updated:`, value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const selectedSlotData = availableSlots.find(slot => slot.id === selectedSlot)
      if (!selectedSlotData) {
        throw new Error("Please select a demo slot")
      }

      const bookingData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        experience: formData.experience || "",
        selectedSlotId: selectedSlot,
        selectedDate: selectedSlotData.date,
        selectedTime: selectedSlotData.time
      }

      const response = await fetch('/api/demo-bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to book demo')
      }

      // toast({
      //   title: "Demo Booked Successfully!",
      //   description: "You'll receive a confirmation email shortly with meeting details.",
      // })
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", experience: "" })
      setSelectedSlot("")
      
    } catch (error) {
      console.error('Error booking demo:', error)
      // toast({
      //   title: "Booking Failed",
      //   description: error instanceof Error ? error.message : "Failed to book demo. Please try again.",
      //   variant: "destructive",
      // })
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-demo-status">Free Demo Class</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-demo-title">
            Experience Our <span className="text-primary">Teaching Method</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a live demo session to see our interactive teaching approach and meet our expert instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Demo Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-demo-benefits-title">
              What You'll Get in the Demo
            </h3>
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center" data-testid={`div-benefit-${index}`}>
                  <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                  <span data-testid={`text-benefit-${index}`}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Available Slots */}
            {/* <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center" data-testid="text-slots-title">
                <Calendar className="w-5 h-5 mr-2" />
                Available Demo Slots
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableSlots.map((slot) => (
                  <Card 
                    key={slot.id}
                    className={`cursor-pointer transition-all duration-200 hover-elevate ${
                      selectedSlot === slot.id ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                    onClick={() => handleSlotSelect(slot.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium" data-testid={`text-slot-${slot.id}-date`}>
                            {new Date(slot.date).toLocaleDateString('en-US', { 
                              weekday: 'short', 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span data-testid={`text-slot-${slot.id}-time`}>{slot.time}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            <span data-testid={`text-slot-${slot.id}-available`}>{slot.available} spots</span>
                          </div>
                          {slot.available >= 5 && (
                            <Badge variant="destructive" className="text-xs">
                              Almost Full
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div> */}
          </div>

          {/* Booking Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center" data-testid="text-form-title">
                <User className="w-6 h-6 mr-2" />
                Get in touch
              </CardTitle>
              
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <Label htmlFor="experience">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Do we get placement assistance?"
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    data-testid="input-experience"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Booking Demo...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Free Demo
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Need help? <br />
                    <a href="tel:+919834975865" className="text-primary hover:underline">
                      <Phone className="w-4 h-4 inline mr-1" />
                      +91 9834975865
                    </a>
                    {" or "}
                    <a href="mailto:info@itechnasik.com" className="text-primary hover:underline">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Us
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}