import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [isHovered, setIsHovered] = useState("");
  const [particles] = useState(() => {
    const particleArray = [];
    for (let i = 0; i < 30; i++) {
      particleArray.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }
    return particleArray;
  });
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const socialCardsRef = useRef([]);
  const footerRef = useRef(null);

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

    // Description animation
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }

    // CTA Button animation
    if (ctaButtonRef.current) {
      gsap.fromTo(
        ctaButtonRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.4,
          ease: "back.out(1.7)",
        }
      );
    }

    // Social cards animations
    if (socialCardsRef.current.length > 0) {
      socialCardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            rotation: 5,
          },
          {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 0.6,
            delay: 0.6 + index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    // Footer animation
    if (footerRef.current) {
      gsap.fromTo(
        footerRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com/kyaw-min-htet",
      hoverEmoji: "🚀",
      color: "hover:text-gray-100 hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      url: "https://www.linkedin.com/in/kyaw-min-htet-4b2a97311/",
      hoverEmoji: "🌟",
      color: "hover:text-blue-100 hover:bg-blue-600",
    },
    {
      name: "Facebook",
      icon: "https://cdn.simpleicons.org/facebook",
      url: "https://www.facebook.com/sai.kaung.hein.2025/",
      hoverEmoji: "👥",
      color: "hover:text-blue-100 hover:bg-blue-500",
    },
    {
      name: "Telegram",
      // emoji: "✈️",
      icon: "https://www.svgrepo.com/show/452115/telegram.svg",
      url: "https://t.me/@Alien_X01",
      hoverEmoji: "💬",
      color: "hover:text-blue-100 hover:bg-blue-400",
    },
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animated Title */}
          <div className="mb-8">
            <h2
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift mb-4"
            >
              Get In Touch 🤝
            </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>

          {/* Description with Emoji */}
          <p
            ref={descriptionRef}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I'm currently open to new opportunities and collaborations 🌟
            Whether you have a question or just want to say hi 👋, I'll try my
            best to get back to you! 📧
          </p>

          {/* Premium CTA Button */}
          <div ref={ctaButtonRef} className="relative inline-block mb-20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kyawminhtet.1dev@gmail.com" target="_blank"
              className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              <span className="text-2xl animate-bounce">💌</span>
              Say Hello
              <span className="text-2xl animate-wave">✨</span>
            </a>
          </div>

          {/* Premium Social Media Icons */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Connect With Me 🌐
            </h3>

            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <div
                  key={social.name}
                  className="relative group"
                  onMouseEnter={() => setIsHovered(social.name)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 ${social.color.split(" ")[1]} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300 scale-110`}
                  ></div>

                  {/* Social Card */}
                  <div
                    ref={(el) => (socialCardsRef.current[index] = el)}
                    className="relative"
                  >
                    <a
                      href={social.url}
                      className={`relative glass-premium rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${social.color} border border-white/10 hover:border-white/30`}
                    >
                      {/* Emoji/Icon Display */}
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        {isHovered === social.name ? (
                          <span className="text-3xl animate-bounce">
                            {social.hoverEmoji}
                          </span>
                        ) : (
                          <img
                            src={social.icon}
                            alt={social.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'block';
                            }}
                          />
                        )}
                        <span 
                          className="text-2xl hidden" 
                          style={{ display: 'none' }}
                        >
                          {social.emoji}
                        </span>
                      </div>

                      <span className="text-white font-semibold">
                        {social.name}
                      </span>
                      {/* <span className="text-sm text-gray-300">
                        {social.emoji}
                      </span> */}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Footer */}
          <div
            ref={footerRef}
            className="glass-premium-secondary rounded-2xl p-6 mt-12"
          >
            <footer className="text-gray-300">
              <p className="mb-2 flex items-center justify-center gap-2">
                <span className="animate-pulse">❤️</span>©{" "}
                {new Date().getFullYear()} My Portfolio. Built with
                <span className="text-blue-400 hover:text-blue-300 transition-colors">
                  ⚛️ React
                </span>{" "}
                &
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  🎨 Tailwind
                </span>
                <span className="animate-pulse">🚀</span>
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy
                </span>
                <span>•</span>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms
                </span>
                <span>•</span>
                <span className="hover:text-green-400 transition-colors cursor-pointer">
                  Sitemap
                </span>
              </div>
            </footer>
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

        @keyframes wave {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(-20deg);
          }
        }

        .animate-gradientShift {
          background-size: 200% 200%;
          animation: gradientShift 4s ease infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
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
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow:
            0 4px 16px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Contact;
