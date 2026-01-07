import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import myImage from "../assets/Ghibli.png";

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
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const timelineData = [
    {
      year: "2025",
      title: "Web Developer",
      company: "K-Win Technologies",
      description:
        "Developed POS front-end and Built admin dashboards with real-time notifications using Socket.io. Contributed to ERP system UIdesign .",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
        "Mantine",
        "TypeScript",
      ],
      type: "work",
    },
    {
      year: "2023",
      title: "Junior Web Developer",
      company: "Ga Mone Pwint",
      description:
        "Assisted in building front-end components and improving e-commerce site performance. Collaborated withsenior developers to maintain and update the system.",
      technologies: ["HTML", "JavaScript", "SASS", "CSS"],
      type: "work",
    },
    {
      year: "2022",
      title: "Web Developer",
      company: "Page Myanmar",
      description:
        "In OJT, Developed and maintained multiple  projects, focusing on modern JavaScript frameworks.",
      technologies: ["JavaScript", "HTML", "CSS", "jQuery"],
      type: "on job training",
    },
    {
      year: "2019",
      title: "Computer Science (undergraduate)",
      company: "University of Computer Studies ,Monywa",
      description: "Specializing in Software Engineering and Web Development.",
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
    // {
    //   name: "AWS",
    //   level: 70,
    //   color: "from-orange-400 to-orange-600",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    // },
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

  // Premium Journey Card Component
  const JourneyCard = ({ item, index }) => {
    const isWork = item.type === "work";

    return (
      <div
        ref={(el) => (timelineItemsRef.current[index] = el)}
        className="group relative"
      >
        {/* Main Card */}
        <div
          className={`
          relative overflow-hidden
          rounded-2xl sm:rounded-3xl
          bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90
          backdrop-blur-2xl
          border border-white/10
          p-5 sm:p-6 lg:p-8
          transition-all duration-500 ease-out
          hover:border-white/20
          hover:shadow-2xl
          ${isWork ? "hover:shadow-cyan-500/10" : "hover:shadow-purple-500/10"}
          transform hover:-translate-y-1 sm:hover:-translate-y-2
          text-left
        `}
        >
          {/* Animated Gradient Orb */}
          <div
            className={`
            absolute -top-20 -right-20 w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64
            rounded-full blur-3xl opacity-20 group-hover:opacity-40
            transition-all duration-700
            ${isWork ? "bg-gradient-to-br from-cyan-400 to-blue-600" : "bg-gradient-to-br from-purple-400 to-pink-600"}
          `}
          />

          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden rounded-2xl sm:rounded-3xl">
            <div
              className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/05 to-transparent`}
            />
          </div>

          {/* Content Container */}
          <div className="relative z-10">
            {/* Top Row: Badge + Year */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5">
              {/* Type Badge */}
              <div
                className={`
                inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2
                rounded-full text-xs sm:text-sm font-semibold
                border backdrop-blur-sm
                transition-all duration-300 group-hover:scale-105
                ${
                  isWork
                    ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                    : "bg-purple-500/10 border-purple-500/30 text-purple-300"
                }
              `}
              >
                <span className="text-base sm:text-lg">
                  {isWork ? "💼" : "🎓"}
                </span>
                <span>{isWork ? "Work Experience" : "Education"}</span>
              </div>

              {/* Year Badge */}
              <div
                className={`
                px-3 sm:px-4 py-1.5 sm:py-2
                rounded-full font-mono text-xs sm:text-sm font-bold
                bg-white/5 border border-white/10 text-white
                shadow-inner backdrop-blur-sm
                transition-all duration-300 group-hover:bg-white/10
              `}
              >
                {item.year}
              </div>
            </div>

            {/* Title */}
            <h3
              className={`
              text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3
              bg-gradient-to-r bg-clip-text text-transparent
              leading-tight
              transition-all duration-500
              ${
                isWork
                  ? "from-white via-cyan-100 to-white group-hover:from-cyan-300 group-hover:via-white group-hover:to-cyan-300"
                  : "from-white via-purple-100 to-white group-hover:from-purple-300 group-hover:via-white group-hover:to-purple-300"
              }
            `}
            >
              {item.title}
            </h3>

            {/* Company/Institution */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div
                className={`
                w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full
                ${isWork ? "bg-cyan-400" : "bg-purple-400"}
                animate-pulse
              `}
              />
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-medium">
                {item.company}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">
              {item.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {item.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`
                    px-2.5 sm:px-3 py-1 sm:py-1.5
                    rounded-lg text-xs sm:text-sm font-medium
                    bg-white/5 border border-white/10
                    text-gray-400
                    transition-all duration-300
                    hover:bg-white/10 hover:border-white/20 hover:text-white
                    hover:scale-105 cursor-default
                  `}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Accent Line */}
          <div
            className={`
            absolute bottom-0 left-0 right-0 h-0.5 sm:h-1
            bg-gradient-to-r opacity-0 group-hover:opacity-100
            transition-opacity duration-500
            ${isWork ? "from-cyan-500 via-blue-500 to-cyan-500" : "from-purple-500 via-pink-500 to-purple-500"}
          `}
          />
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradientShift">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 py-8 sm:py-12">
        <div className="container mx-auto max-w-7xl">
          {/* Enhanced Hero Section */}
          <div
            ref={heroRef}
            className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16 sm:mb-20 min-h-screen"
          >
            {/* Advanced Profile Image with 3D Perspective */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <div
                ref={profileRef}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
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
                <div className="absolute inset-6 sm:inset-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-42 lg:h-52 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-2 sm:mb-4 animate-float">
                    <img
                      src={myImage}
                      alt="Kyaw Min Htet"
                      className="w-full h-full rounded-b-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Kyaw Min Htet
                  </h3>

                  {/* Animated Lighting Effect */}
                  <div
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.5), transparent 40%)`,
                    }}
                  />
                </div>

                {/* Floating Particles Around Profile */}
                <div className="absolute inset-0 rounded-full hidden sm:block">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"
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
                className="glass-premium rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl w-full"
                style={{
                  transform: `
                    perspective(1000px) 
                    rotateY(${-transform.rotateY * 0.3}deg) 
                    rotateX(${-transform.rotateX * 0.3}deg)
                  `,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
                  Hi, I'm a{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift">
                    Full-Stack Developer
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  I bridge the gap between design and logic to build
                  high-performance web applications. Specializing in React and
                  Node.js, I focus on shipping robust, full-stack solutions that
                  look as good as they function.
                </p>

                <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Beyond the code, I'm an open-source contributor, tech trend
                  seeker, and a firm believer that most problems can be solved
                  with better logic and a great cup of coffee.
                </p>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <a href="#projects" className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <button className="relative w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
                      View Projects
                    </button>
                  </a>

                  <a href="#contact" className="relative group">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl"></div>
                    <button className="relative w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-white rounded-xl font-bold border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-sm sm:text-base">
                      Contact Me
                    </button>
                  </a>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="glass-premium-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <h3 className="font-bold text-2xl sm:text-3xl text-blue-400 mb-1">
                      1+
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">Years Experience</p>
                  </div>
                  <div className="glass-premium-secondary rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:scale-105 transition-all duration-300">
                    <h3 className="font-bold text-2xl sm:text-3xl text-purple-400 mb-1">
                      20+
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== NEW PREMIUM MY JOURNEY SECTION ===== */}
          <div ref={timelineRef} className="relative py-12 sm:py-16 lg:py-24">
            {/* Section Header with Animated Underline */}
            <div className="text-center mb-10 sm:mb-14 lg:mb-20">
              <div className="inline-block relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h2>
                {/* Animated Underline */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-pulse opacity-50 blur-sm"></div>
                </div>
              </div>
              <p className="text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
                A timeline of my professional growth and educational milestones
              </p>
            </div>

            {/* Journey Cards Container */}
            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Line - Tablet and Desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2">
                <div className="h-full w-full bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-purple-500/50"></div>
                {/* Animated Glow - Top */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping opacity-50"></div>
                </div>
                {/* Animated Glow - Bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50">
                  <div className="absolute inset-0 bg-purple-400 rounded-full animate-ping opacity-50"></div>
                </div>
              </div>

              {/* Journey Items */}
              <div className="space-y-6 md:space-y-0">
                {timelineData.map((item, index) => (
                  <div
                    key={index}
                    className={`
                      relative
                      md:grid md:grid-cols-2 md:gap-8 lg:gap-12
                      ${index !== timelineData.length - 1 ? "md:mb-12" : ""}
                    `}
                  >
                    {/* Tablet/Desktop: Content Side */}
                    <div
                      className={`
                        hidden md:block
                        ${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12"}
                      `}
                    >
                      <JourneyCard item={item} index={index} />
                    </div>

                    {/* Tablet/Desktop: Spacer Side */}
                    <div className="hidden md:block"></div>

                    {/* Center Node - Tablet and Desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div
                        className={`
                          w-4 h-4 lg:w-5 lg:h-5 rounded-full
                          border-3 lg:border-4 border-gray-900
                          shadow-xl
                          transition-all duration-300
                          ${item.type === "work" ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-cyan-400/50" : "bg-gradient-to-r from-purple-400 to-pink-500 shadow-purple-400/50"}
                        `}
                      >
                        <div
                          className={`
                            absolute inset-0 rounded-full animate-pulse opacity-50
                            ${item.type === "work" ? "bg-cyan-400" : "bg-purple-400"}
                          `}
                        />
                      </div>
                    </div>

                    {/* Mobile Only: Single Column Layout */}
                    <div className="md:hidden px-2">
                      <JourneyCard item={item} index={index} />
                    </div>
                  </div>
                ))}
              </div>
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
                  <h3 className="font-bold text-white text-center">
                    {skill.name}
                  </h3>
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

        /* Mobile text optimizations */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Mobile-specific adjustments */
        @media (max-width: 425px) {
          .max-w-sm {
            max-width: 300px;
          }

          .timeline-card-mobile {
            text-align: center;
            margin: 0 auto;
          }
        }

        @media (min-width: 426px) and (max-width: 767px) {
          .timeline-card-mobile {
            text-align: left;
            margin-left: 4rem;
            margin-right: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
