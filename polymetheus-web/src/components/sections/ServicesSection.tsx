import { Brain, Code, Eye, Database } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

export const ServicesSection = () => {
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

  return (
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
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};