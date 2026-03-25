import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 relative overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-16 md:mb-24"
          >
            {subtitle && (
              <span className="text-primary font-display tracking-widest text-sm uppercase mb-4 block">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-gradient-silver">
                {title}
              </h2>
            )}
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mt-6 rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
