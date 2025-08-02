import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 group">
      <div className="text-cyan-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};