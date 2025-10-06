import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Star,
  ChevronRight,
  Filter,
  Search,
  Code,
  Database,
  Shield,
  Cloud,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { Badge } from "./ui/badge";

export default function UpcomingBatchesSection() {
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

  const upcomingItems = [
    {
      id: 1,
      type: "batch",
      category: "Full Stack Development",
      title: "MERN Stack Bootcamp",
      description:
        "Master MongoDB, Express.js, React, and Node.js in this comprehensive 16-week program.",
      startDate: "2025-10-15",
      duration: "16 weeks",
      time: "6:00 PM - 9:00 PM",
      mode: "Hybrid",
      price: "₹5,000",
      instructor: "Rajesh Kumar",
      rating: 4.9,
      enrolled: 24,
      maxCapacity: 30,
      level: "Beginner to Advanced",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      type: "workshop",
      category: "Data Science",
      title: "AI/ML Workshop Series",
      description:
        "Hands-on workshop covering machine learning fundamentals and real-world applications.",
      startDate: "2025-10-08",
      duration: "2 days",
      time: "10:00 AM - 5:00 PM",
      mode: "In-person",
      price: "₹8,500",
      instructor: "Dr. Priya Sharma",
      rating: 4.8,
      enrolled: 18,
      maxCapacity: 25,
      level: "Intermediate",
      icon: Database,
      gradient: "from-purple-500 to-pink-500",
      tags: ["Python", "TensorFlow", "ML"],
    },
    {
      id: 3,
      type: "batch",
      category: "Cloud Computing",
      title: "AWS Solutions Architect",
      description:
        "Prepare for AWS certification while building scalable cloud solutions.",
      startDate: "2025-10-22",
      duration: "12 weeks",
      time: "7:00 PM - 10:00 PM",
      mode: "Online",
      price: "₹3,000",
      instructor: "Amit Singh",
      rating: 4.9,
      enrolled: 15,
      maxCapacity: 20,
      level: "Intermediate",
      icon: Cloud,
      gradient: "from-green-500 to-teal-500",
      tags: ["AWS", "Cloud", "DevOps"],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredItems(upcomingItems);
    } else {
      setFilteredItems(
        upcomingItems.filter((item) => item.type === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTypeLabel = (type) => {
    const labels = {
      batch: "Training Batch",
      workshop: "Workshop",
      webinar: "Webinar",
      bootcamp: "Bootcamp",
    };
    return labels[type] || type;
  };

  const getProgressPercentage = (enrolled, maxCapacity) => {
    return (enrolled / maxCapacity) * 100;
  };

  return (
    <section className="p-4 py-20 bg-gradient-to-r from-primary/5 to-secondary/5" >
      <div className="relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Badge className="mb-4" data-testid="badge-overview-status">
            Upcoming Programs
          </Badge>

          <h2
            className="text-4xl font-bold mb-6"
          >
            Upcoming Events
          </h2>
          <p className="text-lg mx-auto text-foreground max-w-[600px]">
            Join our upcoming training batches, workshops, and events. Choose
            from expert-led programs designed to accelerate your tech career.
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
        <div className="flex flex-col justify-center md:flex-row gap-8">
          {filteredItems.map((item, index) => {
            const IconComponent = item.icon;
            const progressPercentage = getProgressPercentage(
              item.enrolled,
              item.maxCapacity
            );

            return (
              <div
                key={item.id}
                className={`group md:w-98 relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${item.gradient}`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="ml-3">
                        <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                      {item.rating}
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                      >
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
                      <span className="mx-2">•</span>
                      <span>{item.level}</span>
                    </div>
                  </div>

                  {/* Enrollment Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{item.enrolled} enrolled</span>
                      <span>{item.maxCapacity} max</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${item.gradient} transition-all duration-500`}
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-2xl font-bold text-gray-900">
                      {item.price}
                    </div>

                    <button className="group/btn flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                      <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Instructor */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold mr-2">
                        {item.instructor.charAt(0)}
                      </div>
                      <span>Instructor: {item.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}
