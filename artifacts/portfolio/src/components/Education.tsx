import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

export function Education() {
  const educations = [
    {
      degree: "BSc in Industrial & Production Engineering (IPE)",
      institution: "National Institute of Textile Engineering and Research (NITER)",
      period: "2023 — 2027 (Expected)",
      grade: "CGPA: 3.42 (2nd Year)"
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "Alauddin Ahmed Chowdhury Nasim College, Parshuram, Feni",
    },
    {
      degree: "Secondary School Certificate (SSC) — Science",
      institution: "Mirzanagar Touhid Academy, Feni",
      grade: "GPA: 4.00"
    }
  ];

  return (
    <Section id="education" title="Education" subtitle="Academic Background">
      <div className="grid lg:grid-cols-3 gap-8">
        {educations.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="glass-panel p-8 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500" />
            
            <GraduationCap className="text-primary mb-6" size={32} />
            
            {edu.period && (
              <span className="inline-block px-3 py-1 rounded-md bg-white/5 text-xs text-white/70 mb-4 border border-white/10">
                {edu.period}
              </span>
            )}
            
            <h3 className="text-xl font-display font-bold text-white mb-2 leading-tight">{edu.degree}</h3>
            <p className="text-white/80 font-medium mb-1">{edu.institution}</p>
            
            {edu.grade && (
              <div className="mt-4 pt-4 border-t border-white/10">
                <span className="text-primary font-semibold">{edu.grade}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
