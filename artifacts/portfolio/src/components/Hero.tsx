import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}saiful-islam.jpeg`}
          alt="Md Saiful Islam"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/95 via-[#09090b]/75 to-[#09090b]/30" />
        {/* Bottom fade to match page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#09090b] to-transparent" />
        {/* Gold glow accent */}
        <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              AI Innovator &amp; Digital Creator
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl font-display font-bold leading-none mb-6"
          >
            <span className="text-white/90">Md Saiful</span>
            <br />
            <span className="text-gradient-gold">Islam</span>
          </motion.h1>

          {/* Tagline glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="glass-card rounded-2xl px-6 py-4 mb-10 max-w-xl"
          >
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Industrial &amp; Production Engineer bridging engineering excellence with the
              cutting-edge world of artificial intelligence.
            </p>
            <p className="italic text-primary/90 mt-2 font-medium">
              "Engineering the Future, One System at a Time."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-white/15 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 text-white border border-white/20"
            >
              Contact Me <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/md-saiful-a18011283"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl glass-card hover:bg-primary/20 hover:text-primary hover:-translate-y-1 transition-all duration-300 text-white border border-white/20"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
