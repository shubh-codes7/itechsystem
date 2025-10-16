'use client'


import { useState, useEffect } from 'react';
import { 
  Award, 
  Users, 
  BookOpen, 
  Target, 
  Eye, 
  Heart,
  Trophy,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Code,
  Database,
  Shield,
  Cloud,
  Smartphone,
  Cpu,
  Lightbulb,
  Rocket,
  GraduationCap,
  Building,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronRight,
  Users2,
  Briefcase,
  Coffee,
  Clock
} from 'lucide-react';
import HeroSection from '@/components/HeroSection';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [counters, setCounters] = useState({
    students: 0,
    courses: 0,
    years: 0,
    placement: 0
  });

  const awards = [
    {
      title: "Best IT Training Institute 2024",
      organization: "National Education Excellence Awards",
      year: "2024",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Excellence in Digital Education",
      organization: "Maharashtra IT Association",
      year: "2023",
      icon: Award,
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Top Placement Record Award",
      organization: "Indian Skills Development Council",
      year: "2023",
      icon: Star,
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Innovation in Tech Training",
      organization: "EdTech India Summit",
      year: "2022",
      icon: Lightbulb,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const achievements = [
    { number: "85%", label: "Placement Rate", icon: TrendingUp },
    { number: "18+", label: "Years Experience", icon: Calendar },
    { number: "30+", label: "Courses Offered", icon: BookOpen },
    { number: "4.9", label: "Average Rating", icon: Star }
  ];

  const whyBest = [
    {
      icon: Users2,
      title: "Expert Instructors",
      description: "Learn from industry veterans with 10+ years of real-world experience in top tech companies."
    },
    {
      icon: Rocket,
      title: "Project-Based Learning",
      description: "Build 15+ real-world projects that you can showcase to potential employers."
    },
    {
      icon: Briefcase,
      title: "100% Job Assistance",
      description: "Dedicated placement cell with tie-ups with 200+ companies for guaranteed job support."
    },
    {
      icon: Code,
      title: "Latest Curriculum",
      description: "Updated course content aligned with current industry trends and requirements."
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Weekend, weekday, and intensive bootcamp options to fit your schedule."
    },
    {
      icon: Coffee,
      title: "Lifetime Support",
      description: "Access to alumni network, career guidance, and technical support even after course completion."
    }
  ];

  const technologies = [
    { name: "Full Stack Development", icon: Code, students: "3000+" },
    { name: "Data Science & AI", icon: Database, students: "2500+" },
    { name: "Cloud Computing", icon: Cloud, students: "2000+" },
    { name: "Cybersecurity", icon: Shield, students: "1800+" },
    { name: "Mobile Development", icon: Smartphone, students: "1500+" },
    { name: "DevOps & Automation", icon: Cpu, students: "1200+" }
  ];

  const timeline = [
    {
      year: "2016",
      title: "Foundation",
      description: "Started with a vision to transform IT education in Pune with just 10 students and 2 instructors."
    },
    {
      year: "2018",
      title: "Expansion",
      description: "Launched advanced courses in Data Science and Cloud Computing. Reached 1000+ students milestone."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Pioneered online learning during pandemic. Introduced hybrid learning model with virtual labs."
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Received multiple awards and established partnerships with major tech companies for placements."
    },
    {
      year: "2024",
      title: "Excellence Milestone",
      description: "Achieved 95% placement rate and expanded to serve 15,000+ students across multiple locations."
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const targets = { students: 15000, courses: 50, years: 8, placement: 95 };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          
          setCounters({
            students: Math.floor(targets.students * progress),
            courses: Math.floor(targets.courses * progress),
            years: Math.floor(targets.years * progress),
            placement: Math.floor(targets.placement * progress)
          });

          if (step >= steps) {
            clearInterval(timer);
            setCounters(targets);
          }
        }, stepDuration);
      };

      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      });

      const counterElement = document.getElementById('counter-section');
      if (counterElement) {
        observer.observe(counterElement);
      }

      return () => observer.disconnect();
    }
  }, [isVisible]);

  return (
    <>
    {/* <HeaderSection /> */}
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeroSection
        badge="About i-Tech System"
        slug1="Transforming"
        slug2="Careers in Tech"
        description="For over 8 years, we've been at the forefront of IT education, empowering thousands 
              of students to achieve their dream careers in technology with industry-leading training programs."
      />

      {/* Stats Counter Section */}
      <section id="counter-section" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-evenly gap-4">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index}
                  className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {achievement.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and a clear vision for the future of technology education.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg border border-gray-200">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'mission' && (
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To democratize quality technology education by providing industry-relevant training programs 
                  that bridge the gap between academic learning and real-world application, ensuring every 
                  student achieves their career aspirations in the tech industry.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                <Eye className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become the leading technology education institute that shapes the future workforce, 
                  fostering innovation and excellence in every student while contributing to India's 
                  digital transformation journey.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Excellence", desc: "Striving for the highest standards in education and outcomes" },
                    { title: "Innovation", desc: "Embracing new technologies and teaching methodologies" },
                    { title: "Integrity", desc: "Maintaining transparency and honesty in all interactions" },
                    { title: "Empowerment", desc: "Enabling students to reach their full potential" }
                  ].map((value, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm">{value.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Trophy className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and educational bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{transitionDelay: `${index * 150}ms`}}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${award.gradient} rounded-full flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm text-gray-500 mb-2">{award.year}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We're the Best */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> i-Tech System?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach technology - we transform careers and lives through our comprehensive approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyBest.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies & Specializations */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Specializations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive training programs across the most in-demand technology domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{transitionDelay: `${index * 100}ms`}}
                >
                  <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.students} students trained</p>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a small training center to a leading IT education institute - here's our story.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{transitionDelay: `${index * 200}ms`}}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg ml-16 md:ml-0">
                      <div className="text-blue-600 font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     
    </div>
    </>
  );
}