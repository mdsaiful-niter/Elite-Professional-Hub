import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, Linkedin, ChevronDown } from "lucide-react";

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
  { x: 10, y: 20, size: 4, duration: 4, delay: 0 },
  { x: 85, y: 15, size: 6, duration: 5, delay: 0.5 },
  { x: 70, y: 70, size: 3, duration: 3.5, delay: 1 },
  { x: 20, y: 80, size: 5, duration: 4.5, delay: 0.3 },
  { x: 50, y: 10, size: 4, duration: 6, delay: 0.8 },
  { x: 90, y: 50, size: 3, duration: 4, delay: 1.2 },
  { x: 30, y: 55, size: 5, duration: 5, delay: 0.6 },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const glowX = useSpring(useTransform(mouseX, [0, 1], [-60, 60]), { stiffness: 60, damping: 20 });
  const glowY = useSpring(useTransform(mouseY, [0, 1], [-40, 40]), { stiffness: 60, damping: 20 });
  const textX = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 80, damping: 25 });
  const textY = useSpring(useTransform(mouseY, [0, 1], [-6, 6]), { stiffness: 80, damping: 25 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} id="top" className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">

      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}saiful-islam.jpeg`}
          alt="Md Saiful Islam"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/96 via-[#09090b]/72 to-[#09090b]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
      </div>

      {/* Mouse-tracking glow */}
      <motion.div
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%)", x: glowX, y: glowY }}
        className="absolute top-1/3 left-1/4 w-[35rem] h-[35rem] rounded-full pointer-events-none"
      />

      {/* Floating particles */}
      {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-16">
        <motion.div style={{ x: textX, y: textY }} className="max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/35 bg-primary/10 backdrop-blur-sm mb-8"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              className="w-1.5 h-1.5 rounded-full bg-primary inline-block"
            />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              AI Innovator &amp; Digital Creator
            </span>
          </motion.div>

          {/* Name — staggered chars */}
          <div className="mb-6 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-8xl font-display font-bold leading-none"
            >
              <span className="text-white/90">Md Saiful</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.38, ease: [0.23, 1, 0.32, 1] }}
              className="text-6xl md:text-8xl font-display font-bold leading-none text-gradient-gold"
            >
              Islam
            </motion.div>
          </div>

          {/* Title line */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-white/50 font-medium tracking-widest uppercase text-sm mb-6"
          >
            Industrial &amp; Production Engineer · NITER · University of Dhaka
          </motion.p>

          {/* Tagline glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="glass-card rounded-2xl px-6 py-4 mb-10 max-w-xl"
          >
            <p className="text-base text-white/80 font-light leading-relaxed">
              Bridging engineering excellence with the cutting-edge world of artificial intelligence.
            </p>
            <p className="italic text-primary/90 mt-2 font-medium text-sm">
              "Engineering the Future, One System at a Time."
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:shadow-[0_0_48px_rgba(212,175,55,0.6)] transition-shadow duration-300 flex items-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl font-semibold glass-card hover:bg-white/12 transition-colors duration-300 flex items-center gap-2 text-white border border-white/20"
            >
              Contact Me <Mail size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/md-saiful-a18011283"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -3, backgroundColor: "rgba(212,175,55,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="p-4 rounded-xl glass-card text-white border border-white/20 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ChevronDown className="text-primary/50" size={22} />
        </motion.div>
      </motion.div>
    </section>
  );
}
