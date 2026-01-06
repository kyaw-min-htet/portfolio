# 🚀 Modern Portfolio Website

A stunning, modern portfolio website built with React, Vite, and Tailwind CSS. Features premium glass morphism design, GSAP scroll animations, and a fully responsive layout.

## ✨ Features

### 🎨 **Design & UX**

- **Glass Morphism UI** - Premium glass effects with backdrop blur
- **Dark/Light Mode** - Smooth theme switching with system preference detection
- **Responsive Design** - Mobile-first approach, looks perfect on all devices
- **Premium Animations** - GSAP-powered scroll animations and micro-interactions
- **Interactive Elements** - Magnetic hover effects, floating particles, and smooth transitions

### 📱 **Pages & Sections**

- **About Page** - Professional introduction with timeline and technical skills
- **Projects Page** - Showcase of featured work with premium cards
- **Contact Page** - Social media integration with animated icons
- **Premium Navbar** - Glass morphism navigation with scroll progress

### 🛠️ **Technical Skills Display**

- **Technology Icons** - Professional tech logos from DevIcon CDN
- **Hover Animations** - Smooth scale and glow effects
- **Organized Layout** - Clean grid system for skill presentation

### 🌐 **Social Integration**

- **Facebook** - Connect professionally
- **GitHub** - Portfolio and projects
- **LinkedIn** - Professional network
- **Telegram** - Direct communication

## 🛠️ Technology Stack

### **Frontend**

- **React 19.2.0** - Modern React with hooks and composition
- **Vite 7.3.0** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **GSAP** - Professional animation library
- **ScrollTrigger** - Scroll-based animations

### **Icons & Assets**

- **DevIcon** - Professional technology icons
- **React Icons** - Additional UI icons
- **Custom SVGs** - Optimized social media icons

### **Development Tools**

- **ESLint** - Code quality and consistency
- **Vite Plugin React SWC** - Fast refresh and development
- **CSS-in-JS** - Styled-jsx for component-specific styles

## 🚀 Getting Started

### **Prerequisites**

- Node.js 18+
- npm or yarn package manager

### **Installation**

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install
```

### **Development**

```bash
# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### **Building for Production**

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### **Code Quality**

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── Ghibli.png
│   └── vite.svg
├── src/
│   ├── assets/            # Component assets
│   │   └── Ghibli.png
│   ├── components/        # Reusable components
│   │   └── Navbar.jsx    # Premium navigation bar
│   ├── constants/         # Application constants
│   │   └── constant.js
│   ├── pages/            # Page components
│   │   ├── about.jsx     # About page with timeline
│   │   ├── contact.jsx    # Contact with social links
│   │   └── project.jsx    # Projects showcase
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.jsx           # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## 🎯 Key Features Explained

### **Glass Morphism Design**

- Premium glass effect using backdrop-filter and transparency
- Smooth borders with subtle shadows
- Consistent across all components

### **GSAP Scroll Animations**

- Staggered animations on scroll
- Professional easing functions
- Performance-optimized with ScrollTrigger

### **Responsive Navigation**

- Mobile-friendly hamburger menu
- Desktop navigation with hover effects
- Scroll progress indicator
- Keyboard navigation support

### **Interactive Elements**

- Magnetic hover effects on navigation
- Scale animations on cards
- Smooth theme transitions
- Particle background effects

## 🌟 Customization

### **Adding New Projects**

Edit `src/pages/project.jsx`:

```jsx
const projects = [
  // ... existing projects
  {
    title: "Your New Project",
    description: "Project description...",
    tags: ["React", "TypeScript"],
    link: "https://your-project-url.com",
    gradient: "from-purple-500 to-indigo-600",
  },
];
```

### **Updating Skills**

Edit `src/pages/about.jsx`:

```jsx
const skillsData = [
  // ... existing skills
  {
    name: "Your Skill",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/your-skill/your-skill-original.svg",
  },
];
```

### **Theme Customization**

- Modify colors in `tailwind.config.js` if needed
- Update glass effects in component styles
- Adjust animation timings in GSAP effects

## 🎨 Design System

### **Color Palette**

- **Primary**: Blue to Purple gradient
- **Secondary**: Pink accents
- **Glass**: White/Black transparency
- **Dark Mode**: Purple to Indigo background

### **Typography**

- **Headings**: Bold gradient text
- **Body**: Clean gray tones
- **UI Elements**: Medium weight with good contrast

### **Spacing**

- **Container**: Max-width with responsive padding
- **Components**: Consistent gap and padding scales
- **Mobile**: Optimized spacing for touch

## 🚀 Deployment

### **Vercel**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### **Netlify**

```bash
# Build and upload dist folder
npm run build
# Upload dist/ to Netlify
```

### **GitHub Pages**

```bash
# Build and deploy to gh-pages
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 🔧 Configuration

### **Meta Tags**

Update `index.html` for SEO:

- Title
- Description
- Meta tags for social sharing

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Safari 14+
- ✅ Chrome Mobile 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Portfolio**: [Live Demo](https://your-portfolio-url.com)
- **GitHub**: https://github.com/kyaw-min-htet
- **LinkedIn**: https://www.linkedin.com/in/kyaw-min-htet-4b2a97311/
- **Email**: kyawminhtet.1dev@gmail.com

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind CSS** - For the utility-first CSS framework
- **GSAP** - For the powerful animation library
- **DevIcon** - For the technology icons
- **Vite Team** - For the lightning-fast build tool

---

<div align="center">
  Made with ❤️ using React & Tailwind CSS
</div>
