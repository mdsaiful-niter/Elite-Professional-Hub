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
  { x: 10, y: 25, size: 4, duration: 4, delay: 0 },
  { x: 88, y: 18, size: 6, duration: 5, delay: 0.5 },
  { x: 15, y: 75, size: 5, duration: 4.5, delay: 0.3 },
  { x: 50, y: 8,  size: 4, duration: 6, delay: 0.8 },
  { x: 30, y: 55, size: 3, duration: 5, delay: 0.6 },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const textX = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), { stiffness: 80, damping: 25 });
  const textY = useSpring(useTransform(mouseY, [0, 1], [-4, 4]), { stiffness: 80, damping: 25 });
  const imgX = useSpring(useTransform(mouseX, [0, 1], [6, -6]), { stiffness: 60, damping: 25 });
  const imgY = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 60, damping: 25 });

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
    <section
      ref={containerRef}
      id="top"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-[#09090b]"
    >
      {/* Mobile background image (hidden on lg+) */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src={`${import.meta.env.BASE_URL}saiful-islam.jpeg`}
          alt=""
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/90 via-[#09090b]/65 to-[#09090b]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
      </div>

      {/* Desktop background glow (hidden on mobile) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[50%] bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => <FloatingParticle key={i} {...p} />)}

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Text Content */}
          <motion.div style={{ x: textX, y: textY }}>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
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
            <div className="mb-5 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
                className="text-5xl md:text-7xl font-display font-bold leading-none text-white/90"
              >
                Md Saiful
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.38, ease: [0.23, 1, 0.32, 1] }}
                className="text-5xl md:text-7xl font-display font-bold leading-none text-gradient-gold"
              >
                Islam
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/50 font-medium tracking-widest uppercase text-xs mb-6"
            >
              Industrial &amp; Production Engineer · NITER · University of Dhaka
            </motion.p>

            {/* Tagline card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card rounded-2xl px-5 py-4 mb-8 max-w-md"
            >
              <p className="text-sm text-white/75 font-light leading-relaxed">
                Bridging engineering excellence with the cutting-edge world of artificial intelligence.
              </p>
              <p className="italic text-primary/90 mt-1.5 font-medium text-xs">
                "Engineering the Future, One System at a Time."
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-wrap items-center gap-3"
            >
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
                href="https://www.linkedin.com/in/md-saiful-a18011283"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -3, backgroundColor: "rgba(212,175,55,0.15)" }}
                whileTap={{ scale: 0.95 }}
                className="p-3.5 rounded-xl glass-card text-white border border-white/20 transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Full Photo */}
          <motion.div
            style={{ x: imgX, y: imgY }}
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative hidden lg:flex justify-center items-end"
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
