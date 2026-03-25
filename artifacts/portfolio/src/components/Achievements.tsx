import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Star } from "lucide-react";

export function Achievements() {
  const achievements = [
    "1st Position — Sheikh Russell Digital IT Competition (Sub-District Level)",
    "Top 4 — Idea Generation Competition, NITER Business & Innovation Club",
    "Selected Top 10 — 'Show Me Your Project' Competition (from 100+ entries)",
    "Recognized Projects: Doraemon's Pocket & Quick Chat Connect"
  ];

  const organizations = [
    "NITER Science Society",
    "NITER Islamic Society",
    "NITER Computer Club",
    "NITER Business & Innovation Club",
    "Tarunner Alo Foundation (Social volunteer work)"
  ];

  return (
    <Section id="achievements" title="Milestones" subtitle="Awards & Involvement">
      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-10 rounded-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <Award className="text-primary" size={32} />
            <h3 className="text-3xl font-display font-bold text-white">Achievements</h3>
          </div>
          <ul className="space-y-6">
            {achievements.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 text-primary font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-white/80 leading-relaxed pt-1">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Organizations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-10 rounded-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <Star className="text-primary" size={32} />
            <h3 className="text-3xl font-display font-bold text-white">Organizations</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {organizations.map((org, i) => (
              <span 
                key={i} 
                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {org}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
