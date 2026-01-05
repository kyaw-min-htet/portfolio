import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const profileRef = useRef(null);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineItemsRef = useRef([]);
  const skillItemsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.querySelector(".glass-premium"),
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }

    // Timeline animations
    if (timelineItemsRef.current.length > 0) {
      timelineItemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    // Skills animations
    if (skillItemsRef.current.length > 0) {
      skillItemsRef.current.forEach((skill, index) => {
        gsap.fromTo(
          skill,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: skill,
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



  const timelineData = [
    {
      year: "2020",
      title: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Led development of enterprise-scale applications using React and Node.js, serving 100k+ users.",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      type: "work",
    },
    {
      year: "2019",
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      description:
        "Built responsive web applications for high-profile clients, improving performance by 40%.",
      technologies: ["Vue.js", "JavaScript", "SASS", "Webpack"],
      type: "work",
    },
    {
      year: "2018",
      title: "Junior Developer",
      company: "StartUp Hub",
      description:
        "Developed and maintained multiple client projects, focusing on modern JavaScript frameworks.",
      technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
      type: "work",
    },
    {
      year: "2017",
      title: "Computer Science Degree",
      company: "University of Technology",
      description:
        "Graduated with honors, specializing in Software Engineering and Web Development.",
      technologies: ["Algorithms", "Data Structures", "Web Development"],
      type: "education",
    },
  ];

  const skillsData = [
    {
      name: "React",
      level: 95,
      color: "from-blue-400 to-blue-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      level: 90,
      color: "from-yellow-400 to-orange-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "Node.js",
      level: 85,
      color: "from-green-400 to-green-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "TypeScript",
      level: 80,
      color: "from-blue-500 to-blue-700",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Python",
      level: 75,
      color: "from-indigo-400 to-indigo-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "MongoDB",
      level: 82,
      color: "from-green-500 to-emerald-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "AWS",
      level: 70,
      color: "from-orange-400 to-orange-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "Docker",
      level: 65,
      color: "from-cyan-400 to-cyan-600",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
  ];

  // Calculate 3D transforms based on mouse and scroll
  const calculate3DTransform = () => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const moveX = (mousePosition.x - centerX) / centerX;
    const moveY = (mousePosition.y - centerY) / centerY;

    return {
      rotateY: moveX * 15,
      rotateX: -moveY * 15,
      rotateZ: scrollY * 0.05,
      translateX: moveX * 10,
      translateY: moveY * 10,
    };
  };

  const transform = calculate3DTransform();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradientShift">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>



      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Hero Section */}
          <div
            ref={heroRef}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20 min-h-screen"
          >
            {/* Advanced Profile Image with 3D Perspective */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div
                ref={profileRef}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
                style={{
                  transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) rotateZ(${transform.rotateZ}deg) translateX(${transform.translateX}px) translateY(${transform.translateY}px)`,
                  transformStyle: "preserve-3d",
                  transition: "transform 0.1s ease-out",
                }}
              >
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-rotateBorder p-1">
                  <div className="w-full h-full rounded-full bg-gray-900"></div>
                </div>

                {/* Inner Glow Ring */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-600/50 to-purple-600/50 blur-xl animate-pulse"></div>

                {/* Profile Content */}
                <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-4 animate-float">
                    <span className="text-4xl lg:text-5xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    John Developer
                  </h3>
                  <p className="text-sm lg:text-base text-gray-300">
                    Full Stack Engineer
                  </p>

                  {/* Animated Lighting Effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.5), transparent 40%)`,
                    }}
                  />
                </div>

                {/* Floating Particles Around Profile */}
                <div className="absolute inset-0 rounded-full">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 15}%`,
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Glass Card */}
            <div className="w-full lg:w-3/5 flex items-center">
              <div
                className="glass-premium rounded-3xl p-8 lg:p-12 shadow-2xl"
                style={{
                  transform: `
                    perspective(1000px) 
                    rotateY(${-transform.rotateY * 0.3}deg) 
                    rotateX(${-transform.rotateX * 0.3}deg)
                  `,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                  Hi, I'm a{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
                    Full-Stack Developer
                  </span>
                </h1>

                <p className="text-lg lg:text-xl text-gray-300 mb-6 leading-relaxed">
                  I specialize in building modern web applications using React,
                  Node.js, and other cutting-edge technologies. With a strong
                  foundation in both front-end aesthetics and back-end logic, I
                  strive to deliver complete, robust solutions.
                </p>

                <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed">
                  When I'm not coding, you can find me exploring new tech
                  trends, contributing to open source, or enjoying a good cup of
                  coffee.
                </p>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="#projects" className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <button className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg">
                      View Projects
                    </button>
                  </a>

                  <a href="#contact" className="relative group">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"></div>
                    <button className="relative px-6 py-3 bg-transparent text-white rounded-xl font-bold border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
                      Contact Me
                    </button>
                  </a>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-premium-secondary rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <h3 className="font-bold text-3xl text-blue-400 mb-1">
                      5+
                    </h3>
                    <p className="text-gray-300">Years Experience</p>
                  </div>
                  <div className="glass-premium-secondary rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <h3 className="font-bold text-3xl text-purple-400 mb-1">
                      50+
                    </h3>
                    <p className="text-gray-300">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div ref={timelineRef} className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

              {timelineData.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (timelineItemsRef.current[index] = el)}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                  >
                    <div className="glass-premium rounded-2xl p-6 hover:scale-105 transition-all duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            item.type === "work"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-purple-500/20 text-purple-400"
                          }`}
                        >
                          {item.type === "work" ? "💼 Work" : "🎓 Education"}
                        </span>
                        <span className="text-sm text-gray-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 rounded-lg text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg z-10"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
               {skillsData.map((skill, index) => (
                 <div
                   key={skill.name}
                   ref={(el) => (skillItemsRef.current[index] = el)}
                   className="glass-premium rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center"
                 >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 mb-3"
                  />
                  <h3 className="font-bold text-white text-center">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-12">
            <div className="glass-premium rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on challenging projects and
                collaborate with creative minds. Whether you have a project in
                mind or just want to connect, I'd love to hear from you!
              </p>
              <a href="#contact" className="inline-block relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <button className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

       {/* Custom Styles */}
       <style jsx>{`

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rotateBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }

        .animate-rotateBorder {
          animation: rotateBorder 8s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

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

        .glass-premium-secondary {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px) saturate(120%);
          -webkit-backdrop-filter: blur(10px) saturate(120%);
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default About;
