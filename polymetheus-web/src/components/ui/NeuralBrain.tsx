"use client";
import React, { useState, useEffect } from 'react';

interface NeuralBrainProps {
  viewMode?: 'mobile' | 'tablet' | 'desktop';
}

export const NeuralBrain = ({ viewMode = 'desktop' }: NeuralBrainProps) => {
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
      const numActive = Math.floor(Math.random() * 3) + 3;
      for (let i = 0; i < numActive; i++) {
        newActiveNeurons.add(Math.floor(Math.random() * 30));
      }
      setActiveNeurons(newActiveNeurons);
    }, 1500);

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