import { motion } from "framer-motion";
import { Section } from "./Section";
import { Settings, Cpu, Layers, Code } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Engineering & Analytical",
      icon: <Settings className="text-primary" size={24} />,
      skills: ["Operations Management", "Process Optimization", "Productivity Improvement", "Systems Thinking", "Engineering Economics", "Data Analysis (Excel)", "Mathematical Problem Solving"]
    },
    {
      title: "AI & Creative",
      icon: <Cpu className="text-primary" size={24} />,
      skills: ["Generative AI (Text/Image/Video)", "Prompt Engineering", "AI-Assisted Design", "200+ AI Tools Expertise", "AI Content Creation", "Banner/Poster/Video Design"]
    },
    {
      title: "Software & Tools",
      icon: <Layers className="text-primary" size={24} />,
      skills: ["Microsoft Office Suite", "AutoCAD", "Canva", "Lovable", "Zapier", "n8n"]
    },
    {
      title: "Programming",
      icon: <Code className="text-primary" size={24} />,
      skills: ["C (Basic)", "Algorithmic Logic"]
    }
  ];

  return (
    <Section id="skills" title="Arsenal" subtitle="Technical & Soft Skills">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl hover:border-primary/30 transition-colors duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-white/5 group-hover:bg-primary/10 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
