export const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Polymetheus
          </span>
        </div>
        <p className="text-slate-400 mb-4">Igniting Innovation through Intelligence</p>
        <p className="text-slate-500 text-sm">
          © 2025 Polymetheus. All rights reserved.
        </p>
      </div>
    </footer>
  );
};