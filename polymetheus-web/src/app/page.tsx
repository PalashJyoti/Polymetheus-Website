"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Github, Linkedin, Code, Brain, Eye, Database, Users, ArrowRight, Send } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Development",
      description: "Custom machine learning models and AI solutions tailored to your business needs"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Solutions",
      description: "Full-stack applications built with cutting-edge technologies and best practices"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision & Deep Learning",
      description: "Advanced image processing and neural network implementations for complex problems"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Engineering",
      description: "Scalable data pipelines and analytics infrastructure for data-driven insights"
    }
  ];

  const projects = [
    {
      title: "Indian Army CCTV Emotion Detection",
      description: "Advanced computer vision system for real-time emotion recognition in security applications",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      category: "AI/Computer Vision"
    },
  ];

  const team = [
    {
      name: "Palash Goswami",
      role: "Co-Founder & Developer",
      expertise: "",
      avatar: "👨‍💻"
    },
    {
      name: "Md Sakir Ahmed",
      role: "Co-Founder & Developer",
      expertise: "",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. Debajit Sarma",
      role: "Chief Advisor",
      expertise: "",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Polymetheus
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 opacity-80"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left lg:pl-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Engineering Intelligence for the Future
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl">
              Custom AI and Software Solutions that bridge the gap between human creativity and machine intelligence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                See Our Work <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Right side - Hero Image/Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Animated circuit board background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-3xl blur-xl"></div>
              
              {/* Main illustration container */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                
                {/* AI Brain Network Visualization */}
                <div className="relative w-full h-80 flex items-center justify-center">
                  
                  {/* Central AI Core */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
                      <Brain className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Orbital Nodes */}
                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-cyan-400/80 rounded-full flex items-center justify-center">
                      <Code className="w-4 h-4 text-slate-900" />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500/80 rounded-full flex items-center justify-center">
                      <Database className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-green-500/80 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-slate-900" />
                    </div>
                  </div>

                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    <defs>
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    
                    {/* Animated connection lines */}
                    <g className="animate-pulse">
                      <line x1="160" y1="80" x2="160" y2="140" stroke="url(#lineGradient)" strokeWidth="2" />
                      <line x1="160" y1="180" x2="160" y2="240" stroke="url(#lineGradient)" strokeWidth="2" />
                      <line x1="80" y1="160" x2="140" y2="160" stroke="url(#lineGradient)" strokeWidth="2" />
                      <line x1="180" y1="160" x2="240" y2="160" stroke="url(#lineGradient)" strokeWidth="2" />
                    </g>
                  </svg>

                  {/* Floating particles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-12 right-12 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-16 left-16 w-1 h-1 bg-purple-500 rounded-full animate-ping delay-300"></div>
                    <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-700"></div>
                    <div className="absolute bottom-12 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
                  </div>
                </div>

                {/* Tech stack indicators */}
                <div className="flex justify-center space-x-4 mt-6">
                  <div className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-cyan-400 border border-cyan-400/30">
                    AI/ML
                  </div>
                  <div className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-purple-400 border border-purple-400/30">
                    Deep Learning
                  </div>
                  <div className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-blue-400 border border-blue-400/30">
                    Computer Vision
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              About Polymetheus
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">The Fire of Knowledge</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Named after the fusion of "Polymath" and "Prometheus," we embody the spirit of bringing 
                the fire of knowledge and technology to solve humanity's most complex challenges.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                We're not just another tech consultancy. We're innovators, problem-solvers, and digital 
                architects who believe that the intersection of artificial intelligence and human creativity 
                holds the key to unprecedented possibilities.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-600"></div>
                <span className="text-cyan-400 font-semibold">AI-Driven. Human-Led.</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                <h4 className="text-xl font-bold mb-4 text-purple-400">What Sets Us Apart</h4>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <ChevronRight className="text-cyan-400" size={16} />
                    Deep expertise in cutting-edge AI technologies
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="text-cyan-400" size={16} />
                    End-to-end solution development and deployment
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="text-cyan-400" size={16} />
                    Focus on scalable, production-ready systems
                  </li>
                  <li className="flex items-center gap-3">
                    <ChevronRight className="text-cyan-400" size={16} />
                    Collaborative approach with transparent communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We craft intelligent solutions that transform ideas into powerful, scalable realities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Showcasing innovative solutions that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-6">
                  <div className="text-sm text-cyan-400 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              The brilliant minds behind Polymetheus, united by passion for innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 text-center"
              >
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-400">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Ready to transform your ideas into intelligent solutions? Let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Get In Touch</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="text-purple-400" size={20} />
                  <span className="text-slate-300">hello@polymetheus.com</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all duration-300">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-white hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
              Polymetheus
            </span>
          </div>
          <p className="text-slate-400 mb-4">Igniting Innovation through Intelligence</p>
          <p className="text-slate-500 text-sm">
            © 2025 Polymetheus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}