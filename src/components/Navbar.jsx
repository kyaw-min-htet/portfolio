import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode with persistent preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScroll = documentHeight - windowHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Touch gesture support for mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      setTouchEnd(null);
      setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
      setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;

      if (isRightSwipe && !isMobileMenuOpen) {
        setIsMobileMenuOpen(true);
      } else if (isLeftSwipe && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [touchStart, touchEnd, isMobileMenuOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

if (e.altKey) {
      switch(e.key) {
        case '1':
          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '2':
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          break;
        case '3':
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          break;
          case "2":
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
            break;
          case "3":
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
            break;
          case "4":
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
            break;
          case "d":
            toggleDarkMode();
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Mouse tracking for magnetic effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth scroll with loading states
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Add loading state
          document.body.style.cursor = "wait";

          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            document.body.style.cursor = "default";
          }, 100);
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  useEffect(() => {
    // Add custom styles for premium effects
    const style = document.createElement("style");
    style.textContent = `
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-3px); }
    }
    
    @keyframes staggeredReveal {
      0% { 
        opacity: 0;
        transform: translateY(20px) rotateX(-10deg);
      }
      100% { 
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
      }
    }
    
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    @keyframes slideInRight {
      0% {
        transform: translateX(100%);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    @keyframes slideOutRight {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
    
    @keyframes activeIndicator {
      0% {
        transform: scaleX(0);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: scaleX(1);
        opacity: 1;
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.05);
        opacity: 0.8;
      }
    }
    
    @keyframes magneticPull {
      0% { transform: translate(0, 0) rotateX(0deg); }
      100% { transform: translate(var(--magnetic-x), var(--magnetic-y)) rotateX(var(--rotate-x)); }
    }
    
    .premium-gradient {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #667eea 75%, #764ba2 100%);
      background-size: 400% 400%;
      animation: gradientShift 8s ease infinite;
    }
    
    .glass-premium {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: 
        0 8px 32px rgba(31, 38, 135, 0.15),
        0 2px 8px rgba(31, 38, 135, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.4);
    }
    
    .glass-premium-dark {
      background: rgba(17, 25, 40, 0.75);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.125);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        0 2px 8px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    }
    
    .shadow-premium {
      box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.08),
        0 8px 16px rgba(0, 0, 0, 0.06),
        0 2px 4px rgba(0, 0, 0, 0.04);
    }
    
    .shadow-premium-hover {
      box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.12),
        0 12px 24px rgba(0, 0, 0, 0.08),
        0 4px 8px rgba(0, 0, 0, 0.06);
    }
    
    .inner-glow {
      box-shadow: 
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    }
    
    .noise-texture {
      position: relative;
    }
    
    .noise-texture::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
      pointer-events: none;
      opacity: 0.3;
      mix-blend-mode: overlay;
    }
    
    .gradient-border {
      position: relative;
      background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
      padding: 1px;
      border-radius: 9999px;
    }
    
    .gradient-border::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      animation: shimmer 3s infinite;
    }
    
    .magnetic-link {
      transform-style: preserve-3d;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .staggered-link {
      opacity: 0;
      animation: staggeredReveal 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    }
    
    .loading-cursor {
      cursor: wait !important;
    }
    
    .dark {
      color-scheme: dark;
    }
    
    .slide-in-right {
      animation: slideInRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .slide-out-right {
      animation: slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .active-indicator {
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2);
      border-radius: 1px;
      animation: activeIndicator 0.3s ease-out;
    }
    
    .scroll-progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
      transition: width 0.3s ease;
    }
    
    .navbar-scale {
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .focus-visible:focus {
      outline: 2px solid #667eea;
      outline-offset: 2px;
      border-radius: 4px;
    }
    
    .dark .glass-premium {
      background: rgba(17, 25, 40, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.125);
    }
    
    .dark .glass-premium-dark {
      background: rgba(0, 0, 0, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Calculate magnetic effect
  const calculateMagneticEffect = (element, mouseX, mouseY) => {
    if (!element) return { x: 0, y: 0, rotateX: 0 };

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (mouseX - centerX) * 0.15;
    const deltaY = (mouseY - centerY) * 0.15;

    return {
      x: deltaX,
      y: deltaY,
      rotateX: -deltaY * 0.5,
    };
  };

  // Handle ripple effect
  const createRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      id: Date.now(),
      x,
      y,
      size,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  // Handle link hover with staggered animation
  const handleLinkHover = (index) => {
    setHoveredLink(index);
    linkRefs.current.forEach((ref, i) => {
      if (ref) {
        ref.style.animationDelay = `${i * 0.1}s`;
        ref.classList.add("staggered-link");
      }
    });
  };

  const handleLinkLeave = () => {
    setHoveredLink(null);
    linkRefs.current.forEach((ref) => {
      if (ref) {
        ref.classList.remove("staggered-link");
      }
    });
  };

  const navLinks = [
    { title: "About", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? "mt-4 mx-4 md:mx-8 lg:mx-12" : "mt-0 mx-0"
      }`}
    >
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg rounded-2xl"
            : "bg-transparent border-0"
        } ${isDarkMode ? "dark" : ""}`}
        style={{
          transform: isScrolled
            ? `scale(${0.98 + (scrollProgress / 100) * 0.02})`
            : "scale(1)",
        }}
      >
        {/* Scroll Progress Bar */}
        {isScrolled && (
          <div
            className="h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        )}
        <div
          className={`container mx-auto flex justify-between items-center transition-all duration-500 ${
            isScrolled ? "px-6 py-3" : "px-6 py-5"
          }`}
        >
          {/* Logo */}
<a
          href="#home"
          className="relative group focus-visible:focus"
          tabIndex={0}
          aria-label="Portfolio - Navigate to about section"
        >
          <span className="relative text-xl md:text-2xl font-bold text-gray-900 dark:text-white transform hover:scale-105 transition-all duration-300 inline-block">
            Portfolio.
          </span>
        </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 backdrop-blur-sm transition-all duration-300 focus-visible:focus"
            aria-label="Toggle dark mode"
            title="Toggle dark mode (Alt+D)"
          >
            {isDarkMode ? (
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <ul
            className="hidden md:flex items-center space-x-2"
            onMouseEnter={() => handleLinkHover(0)}
            onMouseLeave={handleLinkLeave}
          >
            {navLinks.map((link, index) => (
              <li key={link.title}>
                <a
                  ref={(el) => (linkRefs.current[index] = el)}
                  href={link.href}
                  className={`relative px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:scale-105 focus-visible:focus ${
                    hoveredLink !== null ? "staggered-link" : ""
                  } ${activeSection === link.href.substring(1) ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20" : "hover:bg-gray-100/50 dark:hover:bg-white/10"}`}
                  style={{
                    transform:
                      hoveredLink === index
                        ? `translate(${calculateMagneticEffect(linkRefs.current[index], mousePosition.x, mousePosition.y).x}px, ${calculateMagneticEffect(linkRefs.current[index], mousePosition.x, mousePosition.y).y}px)`
                        : "translate(0, 0)",
                  }}
                  aria-label={`Navigate to ${link.title} section (Alt+${index + 1})`}
                  tabIndex={0}
                >
                  <span className="relative z-10">{link.title}</span>
                </a>
              </li>
            ))}
            <li className="ml-2">
              <button
                onClick={createRipple}
                className="relative px-4 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 overflow-hidden focus-visible:focus"
                aria-label="Contact us - Navigate to contact section"
              >
                <span className="relative z-10">Let's Talk</span>
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="ripple"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  />
                ))}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {/* Dark Mode Toggle Mobile */}
            <button
              onClick={toggleDarkMode}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 backdrop-blur-sm transition-all duration-300 focus-visible:focus"
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-gray-600 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              className="text-gray-700 dark:text-gray-300 p-2 rounded-lg hover:bg-gray-100/50 dark:hover:bg-white/10 transition-colors focus-visible:focus"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-2" : "top-0"
                  }`}
                />
                <span
                  className={`absolute block w-full h-0.5 bg-current transition-all duration-300 top-2 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-2" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Advanced Mobile Menu - Slide-in Panel */}
        <div
          className={`md:hidden fixed top-0 right-0 w-80 h-full glass-premium shadow-premium transition-all duration-500 ease-in-out noise-texture ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100 slide-in-right"
              : "translate-x-full opacity-0 slide-out-right"
          }`}
          style={{ zIndex: 40 }}
        >
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Menu
            </h3>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:focus"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-5 h-5 text-gray-600 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.title}
                href={link.href}
                className={`relative group text-lg font-medium text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:translate-x-1 flex items-center justify-between ${
                  isMobileMenuOpen ? "staggered-link" : ""
                } ${activeSection === link.href.substring(1) ? "text-blue-600 dark:text-blue-400" : ""}`}
                style={{
                  animationDelay: isMobileMenuOpen ? `${index * 0.1}s` : "0s",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {link.title}
                </span>
                {activeSection === link.href.substring(1) && (
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                )}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}

            <div className="relative my-6">
              <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
            </div>

            {/* Mobile CTA Button */}
            <div className="gradient-border transform hover:scale-105 transition-all duration-300">
              <button
                onClick={createRipple}
                className="relative block text-center py-3 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-bold transition-all duration-300 overflow-hidden group w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Let's Talk
                </span>
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="ripple"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: ripple.size,
                      height: ripple.size,
                    }}
                  />
                ))}
              </button>
            </div>

            {/* Keyboard Shortcuts Info */}
            <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Keyboard Shortcuts
              </h4>
<div className="space-y-1 text-xs text-gray-500 dark:text-gray-500">
              <div>Alt + 1-3: Navigate sections</div>
              <div>Alt + D: Toggle dark mode</div>
              <div>Esc: Close mobile menu</div>
            </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            style={{ zIndex: 35 }}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu overlay"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
