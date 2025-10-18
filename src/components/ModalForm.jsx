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

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
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
    
    if (!form.name || !form.mobile || !form.email || !form.course) {
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
      setForm({ name: "", mobile: "", email: "", course: "" });
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
            <DialogDescription className="text-center text-white mb-2 md:block hidden">
              Get ahead of competition, Enquire now!
            </DialogDescription>
            <div className="md:block hidden">
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
              {/* add our team will contact you shortly-------------------------- */}
            </div>

            <p><br/>Our team will contact you shortly!</p>
            
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
              <Label htmlFor="email">Email</Label>
              <Input onChange={handleChange} value={form.email} id="email" name="email" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="course">Course</Label>
              <Input onChange={handleChange} value={form.course} id="course" name="course" />
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
