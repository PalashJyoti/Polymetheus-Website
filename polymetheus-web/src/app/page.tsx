"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Github, Linkedin, Code, Brain, Eye, Database, Users, ArrowRight, Send, Zap, Network, Cpu } from 'lucide-react';

const NeuralBrainHero = ({ viewMode = 'desktop' }) => {
  const [activeNeurons, setActiveNeurons] = useState<Set<number>>(new Set());
  type Particle = {
    top: number;
    left: number;
    delay: number;
    duration: number;
    color: string;
  };
  const [floatingParticles, setFloatingParticles] = useState<Particle[]>([]);

  // Generate slower traveling neuron activations
  useEffect(() => {
    const interval = setInterval(() => {
      const newActiveNeurons = new Set<number>();
      // Randomly activate 3-5 neurons at a time for slower effect
      const numActive = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < numActive; i++) {
        newActiveNeurons.add(Math.floor(Math.random() * 30));
      }
      setActiveNeurons(newActiveNeurons);
    }, 1500); // Slower interval

    return () => clearInterval(interval);
  }, []);

  // Generate random positions for floating particles only on the client
  useEffect(() => {
    const particleCount = viewMode === 'mobile' ? 8 : viewMode === 'tablet' ? 10 : 12;
    setFloatingParticles(
      [...Array(particleCount)].map(() => ({
        top: Math.random() * 80 + 10,
        left: Math.random() * 80 + 10,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 1,
        color: ['bg-cyan-400', 'bg-purple-400', 'bg-blue-400'][Math.floor(Math.random() * 3)]
      }))
    );
  }, [viewMode]);

  // Neuron positions inside and around the brain
  const neurons = [
    // Inner brain neurons
    { id: 0, x: 50, y: 45, size: 4 },
    { id: 1, x: 45, y: 55, size: 3 },
    { id: 2, x: 55, y: 40, size: 5 },
    { id: 3, x: 60, y: 50, size: 4 },
    { id: 4, x: 40, y: 48, size: 3 },
    { id: 5, x: 52, y: 58, size: 4 },
    { id: 6, x: 48, y: 35, size: 3 },
    { id: 7, x: 65, y: 45, size: 4 },
    { id: 8, x: 35, y: 52, size: 5 },
    { id: 9, x: 58, y: 62, size: 3 },
    { id: 10, x: 42, y: 38, size: 4 },
    { id: 11, x: 68, y: 55, size: 3 },
    { id: 12, x: 32, y: 45, size: 4 },
    { id: 13, x: 55, y: 32, size: 3 },
    { id: 14, x: 62, y: 65, size: 5 },
    
    // Outer network neurons
    { id: 15, x: 25, y: 25, size: 6 },
    { id: 16, x: 75, y: 25, size: 6 },
    { id: 17, x: 25, y: 75, size: 6 },
    { id: 18, x: 75, y: 75, size: 6 },
    { id: 19, x: 15, y: 50, size: 5 },
    { id: 20, x: 85, y: 50, size: 5 },
    { id: 21, x: 50, y: 15, size: 5 },
    { id: 22, x: 50, y: 85, size: 5 },
    { id: 23, x: 20, y: 35, size: 4 },
    { id: 24, x: 80, y: 35, size: 4 },
    { id: 25, x: 20, y: 65, size: 4 },
    { id: 26, x: 80, y: 65, size: 4 },
    { id: 27, x: 35, y: 20, size: 4 },
    { id: 28, x: 65, y: 20, size: 4 },
    { id: 29, x: 35, y: 80, size: 4 },
  ];

  // Connection paths between neurons
  const connections = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 }, { from: 3, to: 4 },
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 }, { from: 7, to: 8 },
    { from: 8, to: 9 }, { from: 9, to: 10 }, { from: 10, to: 11 }, { from: 11, to: 12 },
    { from: 12, to: 13 }, { from: 13, to: 14 }, { from: 0, to: 15 }, { from: 3, to: 16 },
    { from: 8, to: 17 }, { from: 14, to: 18 }, { from: 4, to: 19 }, { from: 7, to: 20 },
    { from: 6, to: 21 }, { from: 9, to: 22 }, { from: 15, to: 23 }, { from: 16, to: 24 },
    { from: 17, to: 25 }, { from: 18, to: 26 }, { from: 21, to: 27 }, { from: 21, to: 28 },
    { from: 22, to: 29 }, { from: 19, to: 25 }, { from: 20, to: 26 }, { from: 23, to: 27 },
    { from: 24, to: 28 }, { from: 15, to: 19 }, { from: 16, to: 20 }, { from: 17, to: 19 },
    { from: 18, to: 20 }, { from: 2, to: 6 }, { from: 5, to: 9 }, { from: 1, to: 4 },
    { from: 3, to: 7 }, { from: 10, to: 13 }, { from: 11, to: 14 }
  ];

  const getContainerSize = () => {
    switch (viewMode) {
      case 'mobile': return 300;
      case 'tablet': return 400;
      default: return 500;
    }
  };

  const getOpacity = () => {
    return viewMode === 'mobile' ? 'opacity-20' : viewMode === 'tablet' ? 'opacity-30' : '';
  };

  const containerSize = getContainerSize();

  return (
    <div className={`${viewMode === 'desktop' ? 'min-h-screen' : 'absolute inset-0'} flex items-center justify-center p-6 overflow-hidden ${getOpacity()}`}>
      <div className="relative w-full max-w-4xl">
        
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`${viewMode === 'mobile' ? 'w-[400px] h-[400px]' : viewMode === 'tablet' ? 'w-[500px] h-[500px]' : 'w-[600px] h-[600px]'} bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl`}></div>
        </div>

        {/* Main brain visualization container */}
        <div className={`relative flex items-center justify-center ${viewMode === 'mobile' ? 'min-h-[400px]' : viewMode === 'tablet' ? 'min-h-[500px]' : 'min-h-[600px]'}`}>
          
          {/* Neural network SVG */}
          <div className={`relative w-[${containerSize}px] h-[${containerSize}px]`}>
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                  <stop offset="70%" stopColor="#8b5cf6" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </radialGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>

                <linearGradient id="activeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9">
                    <animate attributeName="stop-color" 
                      values="#22d3ee;#60a5fa;#a78bfa;#22d3ee" 
                      dur="3s" 
                      repeatCount="indefinite"/>
                  </stop>
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1">
                    <animate attributeName="stop-color" 
                      values="#8b5cf6;#a78bfa;#60a5fa;#8b5cf6" 
                      dur="3s" 
                      repeatCount="indefinite"/>
                  </stop>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9">
                    <animate attributeName="stop-color" 
                      values="#06b6d4;#22d3ee;#8b5cf6;#06b6d4" 
                      dur="3s" 
                      repeatCount="indefinite"/>
                  </stop>
                </linearGradient>
              </defs>

              {/* Brain outline/structure */}
              <circle 
                cx="50" 
                cy="50" 
                r="22" 
                fill="url(#brainGradient)" 
                stroke="#3b82f6" 
                strokeWidth="0.3" 
                strokeOpacity="0.4"
                className="animate-pulse"
              />
              
              {/* Additional brain structure layers */}
              <circle 
                cx="50" 
                cy="50" 
                r="18" 
                fill="none" 
                stroke="#8b5cf6" 
                strokeWidth="0.2" 
                strokeOpacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              
              <circle 
                cx="50" 
                cy="50" 
                r="14" 
                fill="none" 
                stroke="#06b6d4" 
                strokeWidth="0.2" 
                strokeOpacity="0.3"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />

              {/* Neural connections */}
              {connections.map((connection, index) => {
                const fromNeuron = neurons.find(n => n.id === connection.from);
                const toNeuron = neurons.find(n => n.id === connection.to);
                const isActive = activeNeurons.has(connection.from) || activeNeurons.has(connection.to);

                if (!fromNeuron || !toNeuron) return null;
                
                return (
                  <line
                    key={index}
                    x1={fromNeuron.x}
                    y1={fromNeuron.y}
                    x2={toNeuron.x}
                    y2={toNeuron.y}
                    stroke={isActive ? "url(#activeGradient)" : "url(#connectionGradient)"}
                    strokeWidth={isActive ? "0.5" : "0.2"}
                    strokeOpacity={isActive ? "1" : "0.3"}
                    filter={isActive ? "url(#glow)" : "none"}
                    className={isActive ? "" : ""}
                  />
                );
              })}

              {/* Neurons */}
              {neurons.map((neuron) => {
                const isActive = activeNeurons.has(neuron.id);
                const isInnerNeuron = neuron.id < 15;
                
                return (
                  <g key={neuron.id}>
                    {/* Neuron glow effect when active */}
                    {isActive && (
                      <circle
                        cx={neuron.x}
                        cy={neuron.y}
                        r={neuron.size + 3}
                        fill="url(#activeGradient)"
                        fillOpacity="0.4"
                        filter="url(#glow)"
                      />
                    )}
                    
                    {/* Main neuron */}
                    <circle
                      cx={neuron.x}
                      cy={neuron.y}
                      r={neuron.size}
                      fill={isActive ? "url(#activeGradient)" : 
                        (isInnerNeuron ? "#3b82f6" : "#6366f1")
                      }
                      fillOpacity={isActive ? "0.9" : "0.4"}
                      stroke={isActive ? "#ffffff" : "none"}
                      strokeWidth={isActive ? "0.3" : "0"}
                      filter={isActive ? "url(#glow)" : "none"}
                    />
                    
                    {/* Inner core for larger neurons */}
                    {neuron.size > 4 && (
                      <circle
                        cx={neuron.x}
                        cy={neuron.y}
                        r={neuron.size - 2}
                        fill={isActive ? "#ffffff" : "#1e293b"}
                        fillOpacity={isActive ? "0.6" : "0.2"}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Floating particles around the brain */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingParticles.map((particle, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full animate-ping ${particle.color}`}
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [viewMode, setViewMode] = useState('desktop');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkViewMode = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setViewMode('mobile');
      } else if (width < 1024) {
        setViewMode('tablet');
      } else {
        setViewMode('desktop');
      }
    };
    
    checkViewMode();
    window.addEventListener('resize', checkViewMode);
    
    return () => window.removeEventListener('resize', checkViewMode);
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
              <div>
                <img src="/logo.png" alt="Logo" className="w-10 h-10" />
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
        
        {/* Background Neural Network for Mobile only */}
        {viewMode === 'mobile' && (
          <div className="absolute inset-0 z-0">
            <NeuralBrainHero viewMode={viewMode} />
          </div>
        )}
        
        <div className={`relative z-10 max-w-7xl mx-auto px-4 lg:px-8 min-h-screen`}>
          {/* Desktop Layout */}
          {viewMode === 'desktop' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
              {/* Text content */}
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
              
              {/* Desktop Neural Network */}
              <div className="hidden lg:block">
                <NeuralBrainHero viewMode="desktop" />
              </div>
            </div>
          )}

          {/* Tablet Layout - Graphics Above Text */}
          {viewMode === 'tablet' && (
            <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
              {/* Neural Network Graphics Above */}
              <div className="w-full flex justify-center">
                <NeuralBrainHero viewMode="tablet" />
              </div>
              
              {/* Text content below */}
              <div className="max-w-4xl">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                  Engineering Intelligence for the Future
                </h1>
                <p className="text-xl text-slate-300 mb-8 px-4">
                  Custom AI and Software Solutions that bridge the gap between human creativity and machine intelligence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          )}

          {/* Mobile Layout - Text with Background Graphics */}
          {viewMode === 'mobile' && (
            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Engineering Intelligence for the Future
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-3xl px-4">
                Custom AI and Software Solutions that bridge the gap between human creativity and machine intelligence
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          )}
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