"use client";
import { ArrowRight } from 'lucide-react';
import { NeuralBrain } from '../ui/NeuralBrain';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  viewMode: 'mobile' | 'tablet' | 'desktop';
}

export const HeroSection = ({ scrollToSection, viewMode }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950 opacity-80"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Background Neural Network for Mobile only */}
      {viewMode === 'mobile' && (
        <div className="absolute inset-0 z-0">
          <NeuralBrain viewMode={viewMode} />
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
              <NeuralBrain viewMode="desktop" />
            </div>
          </div>
        )}

        {/* Tablet Layout - Graphics Above Text */}
        {viewMode === 'tablet' && (
          <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
            {/* Neural Network Graphics Above */}
            <div className="w-full flex justify-center">
              <NeuralBrain viewMode="tablet" />
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
  );
};