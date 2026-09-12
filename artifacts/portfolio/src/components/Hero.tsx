import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Github, ChevronDown } from "lucide-react";

function FloatingParticle({ x, y, size, duration, delay }: { x: number; y: number; size: number; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/20 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [-12, 12, -12], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

const particles = [
  { x: 10, y: 25, size: 4, duration: 4, delay: 0 },
  { x: 88, y: 18, size: 6, duration: 5, delay: 0.5 },
  { x: 15, y: 75, size: 5, duration: 4.5, delay: 0.3 },
  { x: 50, y: 8,  size: 4, duration: 6, delay: 0.8 },
  { x: 30, y: 55, size: 3, duration: 5, delay: 0.6 },
];

function HeroSignalGraphic() {
  return (
    <div aria-hidden="true" className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {/* Slow scan beams make the background motion readable without competing with the copy. */}
      <motion.div
        className="absolute top-[18%] left-[-20%] h-px w-[140%] bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        animate={{ x: ["-18%", "18%"], opacity: [0, 0.8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[65%] left-[-20%] h-px w-[140%] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
        animate={{ x: ["18%", "-18%"], opacity: [0, 0.65, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Orbiting rings and nodes create a visible systems/HUD-style focal point. */}
      <motion.div
        className="absolute left-[2%] top-[16%] h-[22rem] w-[22rem] rounded-full border border-primary/25 md:left-[54%] md:top-[15%] md:h-[34rem] md:w-[34rem]"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <motion.span
          className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_rgba(212,175,55,0.95)]"
          animate={{ scale: [1, 1.7, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      <motion.div
        className="absolute left-[8%] top-[23%] h-[18rem] w-[18rem] rounded-full border border-blue-300/20 md:left-[58%] md:top-[21%] md:h-[25rem] md:w-[25rem]"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-300 shadow-[0_0_16px_rgba(147,197,253,0.9)]" />
      </motion.div>
      <motion.div
        className="absolute left-[23%] top-[35%] h-28 w-28 rounded-full bg-primary/15 blur-2xl md:left-[67%] md:top-[38%] md:h-44 md:w-44"
        animate={{ scale: [0.75, 1.25, 0.75], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[29%] top-[42%] h-3 w-3 rounded-full border border-primary/80 bg-primary/50 shadow-[0_0_22px_rgba(212,175,55,0.9)] md:left-[72%] md:top-[45%]"
        animate={{ scale: [1, 1.8, 1], opacity: [0.55, 1, 0.55] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#09090b]"
    >
      {/* Animated background graphics — contained so they never create page scroll */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-32 right-[10%] h-80 w-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, 24, 0], scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-40 left-[8%] h-96 w-96 rounded-full bg-blue-500/10 blur-[110px] pointer-events-none"
        animate={{ x: [0, 34, 0], y: [0, -26, 0], scale: [1.05, 0.92, 1.05], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Mobile background image (hidden on tablet and desktop) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <img
          src={`${import.meta.env.BASE_URL}saiful-islam.jpeg`}
          alt=""
          className="w-full h-full object-contain object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/65 to-[#09090b]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
      </div>

      {/* Desktop background glow (hidden on mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(212,175,55,0.8) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "46px 46px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}
      <HeroSignalGraphic />

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 overflow-visible">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* LEFT — Text Content */}
          <div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/35 bg-primary/10 backdrop-blur-sm mb-7"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
              />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                AI Innovator &amp; Digital Creator
              </span>
            </motion.div>

            {/* Name */}
            <div className="mb-5">
              <div className="text-5xl md:text-7xl font-display font-bold leading-none text-white/90">
                Md Saiful
              </div>
              <div className="text-5xl md:text-7xl font-display font-bold leading-none text-gradient-gold">
                Islam
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-white/50 font-medium tracking-widest uppercase text-xs mb-6">
              Industrial &amp; Production Engineer · NITER · University of Dhaka
            </p>

            {/* Tagline card */}
            <div className="glass-card rounded-2xl px-5 py-4 mb-8 max-w-md">
              <p className="text-sm text-white/75 font-light leading-relaxed">
                Bridging engineering excellence with the cutting-edge world of artificial intelligence.
              </p>
              <p className="italic text-primary/90 mt-1.5 font-medium text-xs">
                "Engineering the Future, One System at a Time."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:shadow-[0_0_48px_rgba(212,175,55,0.6)] transition-shadow duration-300 flex items-center gap-2 text-sm"
              >
                View Projects <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-semibold glass-card hover:bg-white/12 transition-colors duration-300 flex items-center gap-2 text-white border border-white/20 text-sm"
              >
                Contact Me <Mail size={16} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/md-saiful-islam-niter/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3, backgroundColor: "rgba(212,175,55,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-xl glass-card text-white border border-white/20 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://github.com/mdsaiful-niter"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3, backgroundColor: "rgba(212,175,55,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-xl glass-card text-white border border-white/20 transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </motion.a>
            </div>
          </div>

          {/* RIGHT — Full Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden md:flex justify-center items-center"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-3xl blur-2xl" />

            {/* Gold ring accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-primary/10"
              style={{ borderStyle: "dashed" }}
            />

            {/* Photo */}
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
              <img
                src={`${import.meta.env.BASE_URL}saiful-islam.jpeg`}
                alt="Md Saiful Islam"
                className="w-full h-auto object-contain block"
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-white/25 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}>
          <ChevronDown className="text-primary/40" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
