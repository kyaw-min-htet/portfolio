import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectCardsRef = useRef([]);
  const titleRef = useRef(null);

  const projects = [
    {
      title: 'Countdown App',
      description: 'A React-based countdown timer with sharing capabilities and customizable messages.',
      tags: ['React', 'Vite', 'Tailwind'],
      link: '#',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'AI Bedtime Story',
      description: 'An AI-powered application that generates personalized bedtime stories for children.',
      tags: ['AI', 'Node.js', 'React'],
      link: '#',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, single-page portfolio website with smooth scrolling and responsive design.',
      tags: ['React', 'Tailwind', 'Design'],
      link: '#',
      gradient: 'from-green-500 to-teal-600',
    },
  ];

  // GSAP Animations
  useEffect(() => {
    // Title animation
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    }

    // Project cards animations
    if (projectCardsRef.current.length > 0) {
      projectCardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: index * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                ref={(el) => (projectCardsRef.current[index] = el)}
                className="glass-premium rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 flex flex-col"
              >
                {/* Premium Header with Gradient */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden group`}>
                  {/* Animated Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-white/20 transform rotate-45 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 font-bold text-6xl group-hover:text-white/30 transition-all duration-300">
                      {index + 1}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                
                {/* Premium Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Premium Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-gray-200 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Premium CTA Button */}
                  <a 
                    href={project.link}
                    className="relative group/btn inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-all duration-300"
                  >
                    <span className="relative z-10">View Project</span>
                    <span className="transform transition-transform group-hover/btn:translate-x-2">→</span>
                    
                    {/* Button Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-0 group-hover/btn:opacity-20 blur-xl transition-all duration-300"></div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .glass-premium {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;
