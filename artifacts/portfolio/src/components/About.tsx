import { Section } from "./Section";
import { Brain, Globe2, CheckCircle2, Briefcase, GraduationCap } from "lucide-react";

const strengths = [
  "Fast Learner",
  "Leadership",
  "Management Under Pressure",
  "Critical Thinking",
  "Multi-Angle Analysis",
  "Expert Communicator & Debater",
];

const stats = [
  { icon: GraduationCap, label: "University", value: "NITER · Dhaka" },
  { icon: Briefcase, label: "Businesses", value: "2 Active" },
  { icon: Globe2, label: "Languages", value: "Bangla, English, Hindi" },
];

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="The Architect">
      <div className="grid lg:grid-cols-12 gap-10 items-start">

        {/* Left — Bio */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-lg text-white/70 leading-relaxed">
            I am a driven Industrial & Production Engineering student at{" "}
            <span className="text-white font-medium">NITER (University of Dhaka affiliation)</span>,
            combining rigorous engineering foundations with a passion for AI and digital innovation.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Beyond academics, I run two real businesses — co-managing{" "}
            <span className="text-white font-medium">ICONIC HOME</span> (a student hostel) and
            operating <span className="text-white font-medium">MAYER ACHOL</span> (a retail clothing
            store) — bringing strategic thinking and operational excellence to every challenge.
          </p>
          <p className="text-lg text-white/70 leading-relaxed">
            Fluent in AI tools and creative design, I position myself as a bridge between traditional
            engineering and the cutting-edge world of artificial intelligence.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-panel rounded-2xl p-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={16} />
                </div>
                <div>
                  <p className="text-white/45 text-xs mb-0.5">{label}</p>
                  <p className="text-white text-sm font-medium leading-tight">{value}</p>
                </div>
              </div>
            ))}
          </div>
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
