"use client";
import { useState, useEffect } from 'react';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PortfolioSection } from '@/components/sections/PortfolioSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [viewMode, setViewMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

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
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
      
      <Header scrollToSection={scrollToSection} scrollY={scrollY} />
      
      <HeroSection scrollToSection={scrollToSection} viewMode={viewMode} />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
}