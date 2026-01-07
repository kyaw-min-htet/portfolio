import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/about';
import Projects from './pages/project';
import Contact from './pages/contact';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Analytics />
    </div>
  );
};

export default App;
