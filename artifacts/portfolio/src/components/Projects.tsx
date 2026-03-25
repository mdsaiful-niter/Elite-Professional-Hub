import { motion } from "framer-motion";
import { Section } from "./Section";
import { ExternalLink, Trophy } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Doraemon's Pocket",
      description: "A comprehensive collection of 750+ curated AI tools, organized for productivity and innovation. A go-to resource for AI enthusiasts.",
      tech: ["Web", "AI Curation", "Vercel"],
      link: "https://clue-follower.vercel.app/",
      achievement: "Recognized in NITER competition"
    },
    {
      title: "Quick Chat Connect",
      description: "A real-time anonymous messaging platform enabling private, instant communication with clean UX and modern web tech.",
      tech: ["Web App", "Real-time", "Vercel"],
      link: "https://quick-chat-connect.vercel.app/",
      achievement: "Recognized in NITER competition"
    },
    {
      title: "Gaussian Elimination Solver",
      description: "An academic mathematical tool solving systems of linear equations using Gaussian elimination with echelon form visualization.",
      tech: ["Mathematics", "Web", "Algorithm"],
      link: "https://comef.vercel.app/"
    },
    {
      title: "EchonSolver",
      description: "An engineering economics calculation tool helping students and professionals solve complex financial-engineering problems.",
      tech: ["Engineering", "Finance", "Web"],
      link: "https://engi-econ-buddy.vercel.app/"
    },
    {
      title: "IPE-B App",
      description: "A dedicated academic material manager for IPE department students, centralizing study resources and departmental content.",
      tech: ["Academic Tool", "Mobile App"],
    }
  ];

  return (
    <Section id="projects" title="Featured Works" subtitle="Portfolio">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl flex flex-col h-full relative group overflow-hidden"
          >
            {/* Subtle hover background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500 z-0" />
            
            <div className="relative z-10 flex flex-col h-full">
              {project.achievement && (
                <div className="flex items-center gap-2 text-xs font-medium text-primary mb-4 bg-primary/10 inline-flex w-fit px-3 py-1 rounded-full border border-primary/20">
                  <Trophy size={14} />
                  {project.achievement}
                </div>
              )}
              
              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-white/60 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors w-fit"
                >
                  View Live Project <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
