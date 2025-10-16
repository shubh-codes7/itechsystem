import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useState } from "react";

export default function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    message: "",
    requirement: "",
  });

  const options = [
    { value: "Course", label: "Course" },
    { value: "Project", label: "Project" },
    { value: "IT Solutions", label: "IT Solutions" },
  ];

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function submitForm(e) {
    e.preventDefault();

    if (!form.name || !form.mobile || !form.requirement) {
      alert("Please fill all fields before submitting.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/form-enq`,
        form
      );
      console.log("Server Response:", res.data);

      alert("✅ Demo booked successfully!");
      setForm({ name: "", mobile: "", message: "", requirement: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="w-full flex items-center justify-center ">
      <form
        onSubmit={submitForm}
        className="md:w-[50vw] border-2 rounded-2xl p-8 shadow-lg"
      >
        <h3 className="text-center mb-4 font-bold text-3xl">Contact Now</h3>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Your Name</Label>
            <Input
              onChange={handleChange}
              value={form.name}
              id="name"
              name="name"
              placeholder="John Doe"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              onChange={handleChange}
              value={form.mobile}
              id="mobile"
              name="mobile"
              placeholder="9876543212"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">Message</Label>
            <Input
              onChange={handleChange}
              value={form.message}
              id="message"
              name="message"
              placeholder="Your message"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="requirement">I am Looking For</Label>
            <Select
              id="requirement"
              value={form.requirement}
              onValueChange={(value) =>
                setForm((prev) => ({ ...prev, requirement: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your requirement"/>
              </SelectTrigger>
              <SelectContent>
                {options.map((item, idx) => {
                  return (
                    <SelectItem key={idx} value={item.value}>
                      {item.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button type="submit" className="mt-4 mx-auto block" disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
      </form>
    </div>
  );
}
