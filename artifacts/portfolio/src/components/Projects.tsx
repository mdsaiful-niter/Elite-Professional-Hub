import { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Trophy, Globe } from "lucide-react";

const projects = [
  {
    title: "Doraemon's Pocket",
    description: "A comprehensive collection of 750+ curated AI tools, organized for productivity and innovation. A go-to resource for AI enthusiasts and professionals worldwide.",
    tech: ["Web", "AI Curation", "Vercel"],
    link: "https://clue-follower.vercel.app/",
    achievement: "🏆 Top 10 — SHOW US YOUR PROJECT",
    color: "from-amber-500/20 via-yellow-500/10 to-transparent",
    glow: "rgba(212,175,55,0.3)",
    number: "01",
  },
  {
    title: "Quick Chat Connect",
    description: "A real-time anonymous messaging platform enabling private, instant communication with clean UX and modern web technology.",
    tech: ["Web App", "Real-time", "Vercel"],
    link: "https://quick-chat-connect.vercel.app/",
    achievement: "🏆 Top 10 — SHOW US YOUR PROJECT",
    color: "from-blue-500/20 via-cyan-500/10 to-transparent",
    glow: "rgba(59,130,246,0.3)",
    number: "02",
  },
  {
    title: "Gaussian Elimination Solver",
    description: "An academic mathematical tool solving systems of linear equations using Gaussian elimination with echelon form step-by-step visualization.",
    tech: ["Mathematics", "Web", "Algorithm"],
    link: "https://comef.vercel.app/",
    color: "from-emerald-500/15 via-green-500/8 to-transparent",
    glow: "rgba(16,185,129,0.25)",
    number: "03",
  },
  {
    title: "EchonSolver",
    description: "An engineering economics calculation tool helping students and professionals solve complex financial-engineering problems with precision.",
    tech: ["Engineering", "Finance", "Web"],
    link: "https://engi-econ-buddy.vercel.app/",
    color: "from-purple-500/15 via-violet-500/8 to-transparent",
    glow: "rgba(139,92,246,0.25)",
    number: "04",
  },
  {
    title: "IPE-B App",
    description: "A dedicated academic material manager for IPE department students, centralizing study resources and departmental content in one seamless platform.",
    tech: ["Academic Tool", "Mobile App"],
    color: "from-rose-500/15 via-pink-500/8 to-transparent",
    glow: "rgba(244,63,94,0.25)",
    number: "05",
  },
  {
    title: "Typing Master",
    description: "A modern and interactive typing speed test web application where users can improve their typing speed and accuracy in real-time with instant feedback.",
    tech: ["Web App", "Productivity", "Vercel"],
    link: "https://type-master-web.vercel.app/",
    color: "from-orange-500/20 via-amber-500/10 to-transparent",
    glow: "rgba(249,115,22,0.3)",
    number: "06",
  },
];

function ProjectCard({ project, idx }: { project: typeof projects[0]; idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-60, 60], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-60, 60], [-8, 8]), { stiffness: 300, damping: 30 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.23, 1, 0.32, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative glass-panel rounded-3xl overflow-hidden flex flex-col h-full cursor-pointer group"
        animate={{ boxShadow: hovered ? `0 30px 60px -12px ${project.glow}, 0 0 0 1px rgba(255,255,255,0.08)` : "0 4px 24px rgba(0,0,0,0.3)" }}
        transition={{ duration: 0.3 }}
      >
        {/* Dynamic gradient background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} z-0`}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Shimmer line across top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{ background: `linear-gradient(90deg, transparent, ${project.glow}, transparent)` }}
          animate={{ opacity: hovered ? 1 : 0, scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative z-10 p-8 flex flex-col h-full">
          {/* Number + Badge row */}
          <div className="flex items-start justify-between mb-5">
            <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors duration-300 select-none">
              {project.number}
            </span>
            {project.achievement && (
              <motion.div
                animate={{ scale: hovered ? 1.05 : 1 }}
                className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/25"
              >
                <Trophy size={11} />
                {project.achievement}
              </motion.div>
            )}
          </div>

          {/* Title */}
          <motion.h3
            className="text-2xl font-display font-bold text-white mb-3 leading-tight"
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-white/55 mb-6 flex-grow leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <motion.span
                key={t}
                whileHover={{ scale: 1.08, y: -2 }}
                className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full cursor-default"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-primary transition-colors duration-300"
              whileHover={{ x: 4 }}
            >
              <Globe size={15} />
              View Live Project
              <motion.span animate={{ x: hovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                <ExternalLink size={13} />
              </motion.span>
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Featured Works" subtitle="Portfolio">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </Section>
  );
}
