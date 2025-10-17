'use client'

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Filter,
  Code,
  Shield,
  TrendingUp,
} from "lucide-react";
import { Badge } from "./ui/badge";
import axios from "axios";
import Link from 'next/link'

export default function UpcomingBatchesSection() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: "all", name: "All", icon: Filter },
    { id: "batch", name: "Training Batches", icon: Code },
    { id: "workshop", name: "Workshops", icon: Users },
    { id: "webinar", name: "Webinars", icon: TrendingUp },
    { id: "bootcamp", name: "Bootcamps", icon: Shield },
  ];

  // Fetch events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setUpcomingEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  // Trigger animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Filter events based on category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(upcomingEvents);
    } else {
      setFilteredItems(
        upcomingEvents.filter((item) => item.type === selectedCategory)
      );
    }
  }, [selectedCategory, upcomingEvents]); // include upcomingEvents as dependency

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };



  if (!upcomingEvents.length) {
    return null; // avoid rendering if no events
  }

  return (
    <section className="p-4 py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Badge className="mb-4">Upcoming Programs</Badge>
          <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-lg mx-auto text-foreground max-w-[600px]">
            Join our upcoming training batches, workshops, and events. Choose from expert-led programs designed to accelerate your tech career.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col justify-center md:flex-row gap-8 flex-wrap">
          {filteredItems.map((item, index) => {

            return (
              <div
                key={item._id}
                className={`group md:w-98 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium">Starts:</span>
                      <span className="ml-1">{formatDate(item.startDate)}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium">Duration:</span>
                      <span className="ml-1">{item.duration}</span>
                      <span className="mx-2">•</span>
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="font-medium">Mode:</span>
                      <span className="ml-1">{item.mode}</span>
                      <span>{item.level}</span>
                    </div>
                  </div>


                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-gray-100">
                    <div className="text-2xl font-bold text-gray-900">{item.price}</div>
                    <Link 
                      href={`https://wa.me/7507725127?text=Enroll me for ${item.title} ${item.type}`}
                    className="group/btn flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                      <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Instructor */}
                  <div className="mt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        {item.instructor.charAt(0)}
                      </div>
                      <span>Instructor: {item.instructor}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
