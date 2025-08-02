"use client";
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  scrollY: number;
}

export const Header = ({ scrollToSection, scrollY }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};