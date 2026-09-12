import { Section } from "./Section";
import { Brain, CheckCircle2 } from "lucide-react";

const strengths = [
  "Fast Learner",
  "Leadership",
  "Management Under Pressure",
  "Critical Thinking",
  "Multi-Angle Analysis",
  "Expert Communicator & Debater",
];

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="The Architect">
      <div className="grid lg:grid-cols-12 gap-10 items-start">

        {/* Left — Bio */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-lg text-white/70 leading-relaxed">
            Industrial and Production Engineering student passionate about problem-solving, process
            improvement, and technology. Skilled in AI tools, research, web development, and graphic
            design. I enjoy turning ideas into practical solutions and continuously learning new
            skills. Seeking opportunities to contribute, grow, and create meaningful value in a
            professional environment.
          </p>

        </div>

        {/* Right — Strengths */}
        <div className="lg:col-span-5">
          <div className="glass-panel rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-primary" size={24} />
              <h3 className="text-xl font-display font-bold text-white">Key Strengths</h3>
            </div>
            <ul className="space-y-3">
              {strengths.map((strength) => (
                <li key={strength} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="font-medium text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </Section>
  );
}
