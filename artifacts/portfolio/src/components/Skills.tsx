import { motion } from "framer-motion";
import { Section } from "./Section";
import { Settings, Cpu, Layers, Code } from "lucide-react";

const skillCategories = [
  {
    title: "Engineering & Analytical",
    icon: Settings,
    color: "from-amber-500/15 to-yellow-500/5",
    borderHover: "hover:border-amber-500/30",
    iconBg: "group-hover:bg-amber-500/10",
    glowColor: "rgba(212,175,55,0.15)",
    skills: [
      "Operations Management",
      "Process Optimization",
      "Productivity Improvement",
      "Systems Thinking",
      "Engineering Economics",
      "Data Analysis",
      "Mathematical Problem Solving",
    ],
  },
  {
    title: "AI & Creative",
    icon: Cpu,
    color: "from-blue-500/15 to-cyan-500/5",
    borderHover: "hover:border-blue-500/30",
    iconBg: "group-hover:bg-blue-500/10",
    glowColor: "rgba(59,130,246,0.15)",
    skills: [
      "Generative AI (Text / Image / Video)",
      "Prompt Engineering",
      "AI-Assisted Design",
      "200+ AI Tools Expertise",
      "AI Content Creation",
      "Banner & Poster Design",
      "Event Video Production",
    ],
  },
  {
    title: "Software & Tools",
    icon: Layers,
    color: "from-emerald-500/15 to-green-500/5",
    borderHover: "hover:border-emerald-500/30",
    iconBg: "group-hover:bg-emerald-500/10",
    glowColor: "rgba(16,185,129,0.15)",
    skills: ["Microsoft Office Suite", "AutoCAD", "Canva", "Lovable", "Zapier", "n8n"],
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-purple-500/15 to-violet-500/5",
    borderHover: "hover:border-purple-500/30",
    iconBg: "group-hover:bg-purple-500/10",
    glowColor: "rgba(139,92,246,0.15)",
    skills: ["C (Basic)", "Algorithmic Logic", "Web Fundamentals"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.35, ease: "backOut" },
  }),
};

export function Skills() {
  return (
    <Section id="skills" title="Arsenal" subtitle="Technical & Soft Skills">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: `0 24px 48px -8px ${category.glowColor}` }}
              transition={{ duration: 0.3 }}
              className={`glass-panel rounded-3xl p-8 border border-white/[0.08] ${category.borderHover} transition-all duration-400 group relative overflow-hidden`}
            >
              {/* Hover gradient fill */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center gap-4 mb-7">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`p-3 rounded-2xl bg-white/5 ${category.iconBg} transition-colors duration-300`}
                  >
                    <Icon className="text-primary" size={22} />
                  </motion.div>
                  <h3 className="text-xl font-display font-bold text-white">{category.title}</h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      custom={i}
                      variants={pillVariants}
                      whileHover={{ scale: 1.08, y: -3 }}
                      whileTap={{ scale: 0.96 }}
                      className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-white/5 border border-white/10 text-white/75 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-250 cursor-default select-none"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
