import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Countdown App',
      description: 'A React-based countdown timer with sharing capabilities and customizable messages.',
      tags: ['React', 'Vite', 'Tailwind'],
      link: '#',
    },
    {
      title: 'AI Bedtime Story',
      description: 'An AI-powered application that generates personalized bedtime stories for children.',
      tags: ['AI', 'Node.js', 'React'],
      link: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, single-page portfolio website with smooth scrolling and responsive design.',
      tags: ['React', 'Tailwind', 'Design'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                 <span className="text-white font-bold opacity-30 text-4xl">Project {index + 1}</span>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 group"
                >
                  View Project
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
