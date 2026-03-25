import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-panel border-primary/20 mb-6">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              AI Innovator & Digital Creator
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            <span className="text-white">Hi, I'm </span>
            <br />
            <span className="text-gradient-gold">Md Saiful Islam</span>
          </h1>
          
          <p className="text-xl text-white/70 mb-8 max-w-xl font-light leading-relaxed">
            Industrial & Production Engineer bridging traditional engineering with the cutting-edge world of artificial intelligence. 
            <br className="hidden md:block" />
            <span className="italic text-white/90">"Engineering the Future, One System at a Time."</span>
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold glass-panel hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-white"
            >
              Contact Me <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-saiful-a18011283"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-panel hover:bg-primary/20 hover:text-primary transition-all duration-300 text-white"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:ml-auto w-full max-w-md aspect-[4/5]"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-lg" />
          <div className="relative w-full h-full glass-panel p-2 rounded-3xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={`${import.meta.env.BASE_URL}saiful-islam.jpeg`}
              alt="Md Saiful Islam"
              className="w-full h-full object-cover rounded-2xl grayscale-[20%] contrast-125"
            />
            {/* Overlay Gradient for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent rounded-2xl opacity-60" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
