"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Code,
  Settings,
  FolderOpen,
  Cpu,
  Home,
  User,
  GraduationCap,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/slices/courses.slice";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResponsiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const {data: courses, isLoading, error} = useSelector(state => state.courses)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!courses || courses.length == 0){
      dispatch(fetchCourses())
    }
  }, [dispatch, courses])

  const categorizedCourses = {
    fullstack: [],
    programming: [],
    data: [],
    other: [],
  };

  // Group courses dynamically
  courses.forEach((course) => {
    const cat = course.category?.toLowerCase();
    if (categorizedCourses[cat]) {
      categorizedCourses[cat].push(course);
    } else {
      categorizedCourses.other.push(course);
    }
  });

  const courseDropdown = [
    {
      title: "Full Stack Development",
      courses: categorizedCourses.fullstack,
    },
    {
      title: "Programming Languages",
      courses: categorizedCourses.programming,
    },
    {
      title: "Data Science",
      courses: categorizedCourses.data,
    },
    {
      title: "Other",
      courses: categorizedCourses.other,
    },
  ];


  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
      hasDropdown: false,
    },
    {
      name: "About",
      href: "/about",
      icon: User,
      hasDropdown: false,
    },
    {
      name: "Courses",
      href: "/courses",
      icon: GraduationCap,
      hasDropdown: true,
      dropdownItems: courseDropdown
    },
    {
      name: "Services",
      href: "/services",
      icon: Settings,
      hasDropdown: false,
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FolderOpen,
      hasDropdown: false,
    },
    {
      name: "Solutions",
      href: "/solutions",
      icon: Cpu,
      hasDropdown: false,
    },
    // {
    //   name: 'Jobs',
    //   href: '/jobs',
    //   icon: Briefcase,
    //   hasDropdown: false
    // },
    {
      name: "Contact",
      href: "/contact",
      icon: Phone,
      hasDropdown: false,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileDropdownToggle = (itemName, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/courses/${path}`);
    setActiveDropdown('courses');
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b bg-gradient-to-r from-slate-800 to-slate-900 text-white border-gray-200/50"
            : "bg-white/90 backdrop-blur-sm bg-gradient-to-r from-slate-800 to-slate-900 text-white"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-1 items-center">
              <a href="/" className="flex items-center group">
                <Code className="w-6 h-6 lg:w-7 lg:h-7 text-white" />

                <div className="ml-3 flex-1">
                  <h1 className="text-xl lg:text-2xl font-semibold text-white bg-clip-text">
                    I-Tech System
                  </h1>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() =>
                      item.hasDropdown && handleMouseEnter(item.name)
                    }
                    onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center px-1 py-2 text-white hover:text-blue-600 font-medium transition-all duration-300 group relative"
                    >
                      <IconComponent className="w-4 h-4 mr-2 opacity-70 group-hover:opacity-100" />
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                    </Link>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2  w-[70vw] bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-200/50 overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.name
                            ? "opacity-100 translate-y-0 visible"
                            : "opacity-0 translate-y-2 invisible"
                        }`}
                      >
                        <div className="p-3 grid grid-cols-4 gap-2 text-black">
                          {item.dropdownItems.map((dropdownItem, index) => (
                            <div>
                              <h3 className="mb-2 font-semibold">{dropdownItem.title}</h3>
                              <div>
                                {dropdownItem.courses.map((course, idx) => (
                                  <div className="flex" key={idx}>
                                    <img
                                      src={course.icon}
                                      width={40}
                                      height={40}
                                      alt="Icon"
                                      className="flex-shrink-0"
                                    />
                                    <button
                                      onClick={()=>handleNavigation(course.slug)}
                                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm"
                                    >
                                      {course.title}
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200/50">
            <div className="container mx-auto px-6 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.name}>
                      <div className="flex items-center">
                        <a
                          href={item.href}
                          className="flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium flex-1"
                          onClick={() =>
                            !item.hasDropdown && setIsMenuOpen(false)
                          }
                        >
                          <IconComponent className="w-5 h-5 mr-3 opacity-70" />
                          {item.name}
                        </a>
                        {item.hasDropdown && (
                          <button
                            onClick={(e) =>
                              handleMobileDropdownToggle(item.name, e)
                            }
                            className="p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Dropdown */}
                      {item.hasDropdown && (
                        <div
                          className={`ml-6 mt-2 space-y-1 transition-all duration-300 ${
                            activeDropdown === item.name ? "block" : "hidden"
                          }`}
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Phone className="w-4 h-4 mr-2 text-blue-500" />
                  +91 98765 43210
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="w-4 h-4 mr-2 text-blue-500" />
                  info@itechsystem.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
