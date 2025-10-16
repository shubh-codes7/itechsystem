'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { Check } from 'lucide-react'
import axios from "axios"

export default function ModalForm() {

  const options = [
    {value: "MERN Stack Development", label: "MERN Stack Development"},
    {value: "Programming Languages", label: "Programming Languages"},
    {value: "Data Analytics", label: "Data Analytics"},
    {value: "Cloud Computing & DevOps", label: "Cloud Computing & DevOps"},
    {value: "MEAN Stack Development", label: "MEAN Stack Development"},
    {value: "Ui/Ux and Graphic Design", label: "Ui/Ux and Graphic Design"},
    {value: "Mobile App Development", label: "Mobile App Development"},
    {value: "Digital Marketing", label: "Digital Marketing"},
    {value: "SAP", label: "SAP"},
    {value: "Software Testing", label: "Software Testing"},
    {value: "Salesforce", label: "Salesforce"},
    {value: "DotNET", label: "DotNET"},
    {value: "Java Full Stack", label: "Java Full Stack"},
    {value: "PHP Web Development", label: "PHP Web Development"},
    {value: "Python Development", label: "Python Development"},
    {value: "Web Development", label: "Web Development"},
  ]

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    location: "",
    course: "",
  })

  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  function handleChange(e){
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value }))
  }

  async function submitForm(e){
    e.preventDefault()
    
    if (!form.name || !form.mobile || !form.location || !form.course) {
      alert("Please fill all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/form-demo`,
        form
      );
      console.log("Server Response:", res.data);

      alert("✅ Demo booked successfully!");
      setForm({ name: "", mobile: "", location: "", course: "" });
      setOpen(false)
      localStorage.setItem("demoFormSubmitted", "true");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{

    const formSubmitted = localStorage.getItem("demoFormSubmitted");
    const shownCount = parseInt(localStorage.getItem("demoFormShownCount") || "0");

    if (formSubmitted === "true") {
      return;
    }

    if(shownCount < 3){
      const timer = setTimeout(()=>{
        setOpen(true)
        localStorage.setItem("demoFormShownCount", (shownCount + 1).toString());
      }, 30000)

      return () =>  clearTimeout(timer)
    }
  }, [])
  
  return (
    <Dialog open={open} onOpenChange={handleOpenChange} >
        <DialogTrigger asChild>
          <Button >Contact Now</Button>
        </DialogTrigger>

        <DialogContent className="flex md:flex-row flex-col w-[80vw] p-0 overflow-hidden">

          <DialogHeader className="flex flex-col justify-center p-4 text-white bg-gradient-to-br from-blue-900 to-purple-900">
            <DialogTitle className="text-center text-xl">Enquire Now!</DialogTitle>
            <DialogDescription className="text-center text-white mb-2">
              Get ahead of competition, Enquire now!
            </DialogDescription>
            <div>
              
              <div className="flex gap-1">
                <Check className="text-green-500"/>
                <p className="text-sm">Get Free career counselling</p>
              </div>
              <div className="flex gap-1">
                <Check className="text-green-500" />
                <p className="text-sm">Attend demo classes</p>
              </div>
              <div className="flex gap-1">
                <Check className="text-green-500" />
                <p className="text-sm">Flexible Timings</p>
              </div>
              <div className="flex gap-1">
                <Check className="text-green-500" />
                <p className="text-sm">Expert Trainers</p>
              </div>
              
              
            </div>
          </DialogHeader>

          <form onSubmit={submitForm} className="md:w-[50w]  p-4 md:py-4 md:px-2">
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Your Name</Label>
              <Input onChange={handleChange} value={form.name} id="name" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input onChange={handleChange} value={form.mobile} id="mobile" name="mobile" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="location">Email</Label>
              <Input onChange={handleChange} value={form.location} id="location" name="location"  />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="course">Select Course</Label>
              <Select 
                
                id="course" 
                value={form.course} 
                onValueChange={(value) => setForm((prev) => ({ ...prev, course: value }))}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Course" />
                </SelectTrigger>
                <SelectContent>
                  {
                    options.map((item, idx) => {
                      return <SelectItem key={idx} value={item.value}>{item.label}</SelectItem>
                    })
                  }
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter className="mt-2">
            <DialogClose asChild>
              <Button variant="outline" disabled={loading}>Cancel</Button>
            </DialogClose >
            <Button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
          </DialogFooter>
          </form>

        </DialogContent>
    </Dialog>
  )
}
