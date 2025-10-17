import { useState, useEffect } from "react";
import { ChevronRight, Code, Play, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Link from "next/link";
import ModalForm from "./ModalForm";
import HeroElement from "./3DElement";
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    "Data Science & AI",
    "Full Stack Development",
    "Programming Languages",
    "Mobile App Development",
    "Cloud Computing",
    "Software Testing"
  ];

  const stats = [
    {
      icon: Star,
      label: "Project based learning",
      description: "Gain hands-on experience by working on real-world projects.",
    },
    {
      icon: Star,
      label: "Expert Instructors",
      description: "Get placed in top companies with our internship programs.",
    },
    {
      icon: Star,
      label: "Internship Opportunities",
      description: "Become job ready by our expert instructors.",
    },
    {
      icon: Star,
      label: "Placement Assistance",
      description: "Get assistance throughout your job search journey.",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen p-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container relative z-10 mx-auto py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div
            className={`lg:w-1/2 text-white transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-gray-500/20 rounded-full border border-blue-400/30 mb-6 backdrop-blur-sm">
              <Code className="w-4 h-4 mr-2 text-white" />
              <span className="text-sm text-primary">
                Get job ready!
              </span>
            </div>

            <h1 className="text-5xl font-[Poppins] text-white lg:text-7xl font-bold leading-tight">
              Master
              <span className="block font-mono bg-clip-text text-blue-200 max-w-[30rem]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={skills[currentSkill]}
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400  overflow-hidden"
                    initial={{ opacity: 0, scale: 1.3 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.8 }}
                  >
                    {skills[currentSkill]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-xl text-white mb-8 leading-relaxed max-w-2xl">
              Join thousands of successful graduates who transformed their
              careers with our industry-leading IT training programs. Learn from
              experts, build real projects, and land your dream job in tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button><Link href="/courses">Explore Courses</Link></Button>
              <ModalForm />            
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-gray-400">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-slate-800"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-slate-800"></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-slate-800"></div>
                  <div className="w-8 h-8 bg-gray-600 rounded-full border-2 border-slate-800 flex items-center justify-center text-xs font-bold">
                    5K+
                  </div>
                </div>
                <span className="text-sm">Happy Students</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 Rating</span>
              </div>
            </div>
          </div>


          {/* Right Content - Stats Cards */}
          <div
            className={`lg:w-1/2  mt-16 lg:mt-0 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Floating Code Element */}
            {/* <div className="m-12 relative">
              <div className="bg-slate-800 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 font-mono text-sm">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="ml-4 text-gray-400">
                    career-transformation.js
                  </span>
                </div>
                <div className="text-gray-300">
                  <span className="text-blue-400">const</span>
                  <span className="text-white"> success = </span>
                  <span className="text-green-400">learnWithUs()</span>
                  <div className="ml-4 text-gray-400">
                    // 85% job placement rate
                  </div>
                  <div className="ml-4 text-gray-400">
                    // Industry-expert instructors
                  </div>
                  <div className="ml-4 text-gray-400">
                    // Real-world projects
                  </div>
                </div>
              </div>
            </div> */}

            <HeroElement />

          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center p-6 hover-elevate transition-all duration-200"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div
                className="text-2xl font-bold mb-2"
              >
                {stat.label}
              </div>
              
              <div
                className="text-sm text-muted-foreground"
              >
                {stat.description}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
