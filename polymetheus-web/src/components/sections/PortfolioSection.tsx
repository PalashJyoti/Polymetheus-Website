import { ProjectCard } from '../ui/ProjectCard';

export const PortfolioSection = () => {
  const projects = [
    {
      title: "Indian Army CCTV Emotion Detection",
      description: "Advanced computer vision system for real-time emotion recognition in security applications",
      tech: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
      category: "AI/Computer Vision"
    },
  ];

  return (
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
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};