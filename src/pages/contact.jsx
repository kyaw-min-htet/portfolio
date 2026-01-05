import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">
          Get In Touch
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a 
          href="mailto:hello@example.com" 
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Say Hello
        </a>

        <div className="mt-20">
           <div className="flex justify-center gap-8 text-gray-500">
               <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
               <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-blue-600 transition-colors">Twitter</a>
           </div>
           
           <footer className="mt-12 text-gray-400 text-sm">
               © {new Date().getFullYear()} My Portfolio. Built with React & Tailwind.
           </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
