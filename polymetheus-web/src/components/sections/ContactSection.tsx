import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const ContactSection = () => {
  return (
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
  );
};