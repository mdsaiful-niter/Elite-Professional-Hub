import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-black/20 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-center md:text-left">
          <p className="text-2xl font-display font-bold text-white mb-2">SAIFUL<span className="text-primary">.</span></p>
          <p className="text-white/50 text-sm">© {new Date().getFullYear()} Md Saiful Islam. All rights reserved.</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="p-3 rounded-full glass-panel hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
