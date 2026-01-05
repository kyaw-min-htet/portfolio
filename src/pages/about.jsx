import React from 'react';

const About = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video md:aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center shadow-lg transform hover:rotate-2 transition-transform duration-500">
               <span className="text-gray-400 text-lg">Profile Image</span>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Hi, I'm a Full-Stack Developer
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I specialize in building modern web applications using React, Node.js, and other cutting-edge technologies. With a strong foundation in both front-end aesthetics and back-end logic, I strive to deliver complete, robust solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends, contributing to open source, or enjoying a good cup of coffee.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 shadow-lg text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all hover:scale-105 text-center"
              >
                Contact Me
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-xl text-blue-600 mb-1">5+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <h3 className="font-bold text-xl text-purple-600 mb-1">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
