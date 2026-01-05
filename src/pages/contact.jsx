import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [isHovered, setIsHovered] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      emoji: '💻',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      url: '#',
      hoverEmoji: '🚀',
      color: 'hover:text-gray-100 hover:bg-gray-800'
    },
    {
      name: 'LinkedIn',
      emoji: '💼',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
      url: '#',
      hoverEmoji: '🌟',
      color: 'hover:text-blue-100 hover:bg-blue-600'
    },
    {
      name: 'Facebook',
      emoji: '📘',
      icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzE4NzdmMiI+PHBhdGggZD0iTTEyIDJDNi40NzcgMiAyIDYuNDc3IDIgMTJzNC40NzcgMTAgMTAgMTAgMTAtNC40NzcgMTAtMTBTMTcuNTIzIDIgMTIgMnptMi40NTUgMTAuMDc2aC0xLjYxNHY0LjYxNWgtMS45MDR2LTQuNjE1aC0xLjYxNXYtMS44MDRoMS42MTRWOC40MDdjMC0xLjM0OC4zMi0yLjM5OCAxLjUyMi0yLjM5OGguMzkyYy43MjQgMCAxLjI1LjA3MSAxLjU5My4xMzZ2MS44NjNjLS4xNzYtLjAzMy0uNDc4LS4wNjctLjg5OC0uMDY3LS44NyAwLTEuMTU0LjU2My0xLjE1NCAxLjI5MnYyLjQ0aDEuODU0bC0uMjQ1IDEuODA0eiIvPjwvc3ZnPg==',
      url: '#',
      hoverEmoji: '👥',
      color: 'hover:text-blue-100 hover:bg-blue-500'
    },
    {
      name: 'Telegram',
      emoji: '✈️',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/telegram/telegram-original.svg',
      url: '#',
      hoverEmoji: '💬',
      color: 'hover:text-blue-100 hover:bg-blue-400'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Premium Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animated Title */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradientShift mb-4">
              Get In Touch 🤝
            </h2>
            <div className="w-32 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>

          {/* Description with Emoji */}
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities and collaborations 🌟 
            Whether you have a question or just want to say hi 👋, 
            I'll try my best to get back to you! 📧
          </p>

          {/* Premium CTA Button */}
          <div className="relative inline-block mb-20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <a 
              href="mailto:hello@example.com" 
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
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className="relative group"
                  onMouseEnter={() => setIsHovered(social.name)}
                  onMouseLeave={() => setIsHovered('')}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 ${social.color.split(' ')[1]} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-all duration-300 scale-110`}></div>
                  
                  {/* Social Card */}
                  <a
                    href={social.url}
                    className={`relative glass-premium rounded-2xl p-6 flex flex-col items-center gap-3 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${social.color} border border-white/10 hover:border-white/30`}
                  >
                    {/* Emoji/Icon Display */}
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {isHovered === social.name ? (
                        <span className="text-3xl animate-bounce">{social.hoverEmoji}</span>
                      ) : (
                        <img 
                          src={social.icon} 
                          alt={social.name}
                          className="w-full h-full object-contain filter brightness-0 invert"
                        />
                      )}
                    </div>
                    
                    <span className="text-white font-semibold">{social.name}</span>
                    <span className="text-sm text-gray-300">{social.emoji}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Footer */}
          <div className="glass-premium-secondary rounded-2xl p-6 mt-12">
            <footer className="text-gray-300">
              <p className="mb-2 flex items-center justify-center gap-2">
                <span className="animate-pulse">❤️</span>
                © {new Date().getFullYear()} My Portfolio. Built with 
                <span className="text-blue-400 hover:text-blue-300 transition-colors">⚛️ React</span> & 
                <span className="text-cyan-400 hover:text-cyan-300 transition-colors">🎨 Tailwind</span>
                <span className="animate-pulse">🚀</span>
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
                <span>•</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
                <span>•</span>
                <span className="hover:text-green-400 transition-colors cursor-pointer">Sitemap</span>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
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
