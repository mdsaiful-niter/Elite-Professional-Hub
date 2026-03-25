import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Co-owner & Operations Manager",
      company: "ICONIC HOME — Student Hostel",
      period: "Concurrent with studies",
      description: "Co-founded and manage ICONIC HOME, a student hostel business. Oversee day-to-day operations, logistics, maintenance, budgeting, and deliver consistent customer service excellence to residents."
    },
    {
      role: "Business Operations Manager",
      company: "MAYER ACHOL — Cloth Store",
      period: "Concurrent with studies",
      description: "Manage operations of MAYER ACHOL, a retail clothing store. Responsible for sourcing & procurement, inventory management, sales operations, marketing campaigns, customer relations, and supply chain oversight."
    },
    {
      role: "AI Content Designer",
      company: "Campus Programs (NITER)",
      period: "Ongoing",
      description: "Designed compelling banners, posters, promotional materials, and event videos utilizing advanced AI tools for various campus organizations."
    },
    {
      role: "Industrial Tour",
      company: "4A Yarn Dyeing & Jacket Manufacturing",
      period: "Academic",
      description: "Gained hands-on industrial exposure to textile manufacturing processes, rigorous quality control, and production management methodologies."
    }
  ];

  return (
    <Section id="experience" title="Experience" subtitle="Career Journey">
      <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative pl-10 md:pl-16"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full glass-panel-gold flex items-center justify-center z-10">
              <Briefcase size={14} className="text-primary" />
            </div>

            <div className="glass-panel p-6 md:p-8 rounded-3xl hover:border-primary/20 transition-all duration-300">
              <span className="text-primary font-medium text-sm mb-2 block">{exp.period}</span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">{exp.role}</h3>
              <h4 className="text-white/70 font-medium mb-4">{exp.company}</h4>
              <p className="text-white/60 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
