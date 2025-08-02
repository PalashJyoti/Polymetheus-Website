import { ChevronRight } from 'lucide-react';

export const AboutSection = () => {
  return (
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
  );
};