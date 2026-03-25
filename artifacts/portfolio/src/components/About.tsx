import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Globe2, Target, CheckCircle2 } from "lucide-react";

export function About() {
  const strengths = [
    "Fast learner",
    "Leadership",
    "Management under pressure",
    "Critical thinking",
    "Multi-angle analysis",
    "Expert communicator & debater",
  ];

  return (
    <Section id="about" title="About Me" subtitle="The Architect">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        
        <motion.div 
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-lg text-white/70 leading-relaxed">
            I am a driven Industrial & Production Engineering student at <span className="text-white font-medium">NITER (University of Dhaka affiliation)</span>, combining rigorous engineering foundations with a profound passion for AI and digital innovation.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            With hands-on experience managing real business operations — from a student accommodation facility to an apparel retail business — I bring strategic thinking and operational excellence to every endeavor.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Fluent in AI tools, creative design, and digital systems, I position myself as a bridge between traditional engineering paradigms and the cutting-edge capabilities of artificial intelligence.
          </p>
          
          <div className="flex gap-6 pt-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full glass-panel-gold flex items-center justify-center text-primary">
                <Globe2 size={24} />
              </div>
              <div>
                <p className="text-sm text-white/50">Languages</p>
                <p className="font-medium text-white">Bangla, English, Hindi</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Brain className="text-primary" size={28} />
              <h3 className="text-2xl font-display text-white">Key Strengths</h3>
            </div>
            
            <ul className="space-y-4">
              {strengths.map((strength, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-white/80"
                >
                  <CheckCircle2 size={18} className="text-primary shrink-0" />
                  <span className="font-medium">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
