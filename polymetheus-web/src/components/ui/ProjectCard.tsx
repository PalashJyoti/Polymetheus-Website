interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  category: string;
}

export const ProjectCard = ({ title, description, tech, category }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
      <div className="p-6">
        <div className="text-sm text-cyan-400 mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((techItem, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};