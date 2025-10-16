'use client'

import { useEffect, useRef, useState } from "react";
import { Code } from 'lucide-react';
import Image from "next/image";
import laptopImg from '@/../public/images/laptop.png'

export default function HeroElement() {

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const courses = [
    { name: 'Cloud Computing', icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000" },
    { name: 'Salesforce', icon: "https://img.icons8.com/?size=100&id=38804&format=png&color=000000"},
    { name: 'MySql', icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"},
    { name: 'ReactJs', icon: "https://img.icons8.com/?size=100&id=38192&format=png&color=000000"},
    { name: 'Python Programming', icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000"},
    { name: 'Java Programming', icon: "https://img.icons8.com/?size=100&id=Pd2x9GWu9ovX&format=png&color=000000"},
    { name: 'C++ Programming', icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000"},
    { name: 'Php Programming', icon: "https://img.icons8.com/?size=100&id=f0R4xVI4Sc8O&format=png&color=000000"},
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div ref={containerRef} className="relative">
      <style jsx>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(200px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(200px) rotate(-360deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="relative md:h-[600px] h-[500px] flex items-center justify-center">
        {/* 3D Laptop */}
        <div 
          className="relative transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1200px) rotateY(${mousePos.x * 15}deg) rotateX(${-mousePos.y * 15}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          
          {/* Center Image */}
          <Image alt="programming laptop" src={laptopImg} width={350}/>

          {/* Orbiting Course Icons */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
            {courses.map((course, index) => {
              const angle = (index / courses.length) * 360;
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    animation: `orbit 20s linear infinite`,
                    animationDelay: `${-(index / courses.length) * 20}s`
                  }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <img
                        src={course.icon}
                        width={40}
                        height={40}
                        alt={course.title}
                        className="flex-shrink-0"
                      />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      
    </div>
  );
}