import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, Users, Trophy, Star, Medal, Zap } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "1st Position",
    subtitle: "Sheikh Russell Digital IT Competition",
    detail: "Sub-District Level — First place in a regional digital technology competition.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "rgba(212,175,55,0.2)",
  },
  {
    icon: Medal,
    title: "Top 4 Finisher",
    subtitle: "Idea Generation Competition",
    detail: "NITER Business & Innovation Club — Among the top idea submissions.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    icon: Star,
    title: "Top 10 of 150+ Projects",
    subtitle: "SHOW US YOUR PROJECT — Online Competition",
    detail: "Ranked in the global top 10 out of 150+ submitted projects in an online-based competition. Projects recognized: Doraemon's Pocket & Quick Chat Connect.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "rgba(16,185,129,0.2)",
  },
];

const organizations = [
  { name: "NITER Science Society", icon: Zap },
  { name: "NITER Islamic Society", icon: Star },
  { name: "NITER Computer Club", icon: Award },
  { name: "NITER Business & Innovation Club", icon: Trophy },
  { name: "Tarunner Alo Foundation", icon: Users },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] } },
};

export function Achievements() {
  return (
    <Section id="achievements" title="Milestones" subtitle="Awards & Involvement">
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Achievements */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary" size={26} />
            <h3 className="text-2xl font-display font-bold text-white">Achievements</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-4"
          >
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ x: 6, boxShadow: `0 12px 40px -8px ${item.glow}` }}
                  transition={{ duration: 0.25 }}
                  className={`glass-panel rounded-2xl p-6 border ${item.border} flex gap-5 items-start group cursor-default`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`w-11 h-11 rounded-xl ${item.bg} ${item.border} border flex items-center justify-center shrink-0`}
                  >
                    <Icon className={item.color} size={20} />
                  </motion.div>

                  <div>
                    <p className={`text-sm font-bold ${item.color} mb-0.5`}>{item.title}</p>
                    <p className="text-white font-semibold font-display mb-1.5">{item.subtitle}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Organizations */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-primary" size={26} />
            <h3 className="text-2xl font-display font-bold text-white">Organizations</h3>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-3"
          >
            {organizations.map((org, i) => {
              const Icon = org.icon;
              return (
                <motion.div
                  key={org.name}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] } },
                  }}
                  whileHover={{ x: -5, backgroundColor: "rgba(212,175,55,0.06)" }}
                  className="glass-panel rounded-2xl px-6 py-4 flex items-center gap-4 group cursor-default border border-white/[0.07] hover:border-primary/25 transition-colors duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0"
                  >
                    <Icon className="text-primary" size={16} />
                  </motion.div>
                  <span className="text-white/75 group-hover:text-white font-medium transition-colors duration-300">
                    {org.name}
                  </span>
                  <motion.div
                    className="ml-auto text-primary/0 group-hover:text-primary/60 transition-colors duration-300"
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                  >
                    →
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social Work Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-6 glass-panel rounded-2xl p-5 border border-white/[0.07]"
          >
            <p className="text-white/50 text-sm leading-relaxed">
              <span className="text-primary font-semibold">Tarunner Alo Foundation</span> — Active participation in social initiatives, development programs, and charitable activities serving the community.
            </p>
          </motion.div>
        </div>

      </div>
    </Section>
  );
}
