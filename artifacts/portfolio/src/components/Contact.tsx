import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, Phone, Mail, Linkedin, ExternalLink } from "lucide-react";

const contacts = [
  {
    href: "mailto:msislam07@niter.edu.bd",
    icon: Mail,
    label: "Email",
    value: "msislam07@niter.edu.bd",
  },
  {
    href: "tel:+8801318881674",
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+8801318881674",
  },
  {
    href: "https://www.linkedin.com/in/md-saiful-islam-niter/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Md Saiful islam",
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's Collaborate">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-white/60 leading-relaxed text-lg">
          Have a question, project idea, or just want to say hello? Reach out through any of the channels below — I'm always happy to connect.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
        {contacts.map(({ href, icon: Icon, label, value, external }, i) => (
          <motion.a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center gap-4 group hover:border-primary/40 transition-colors duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-200">
              <Icon size={24} />
            </div>
            <div>
              <p className="text-xs text-white/40 mb-1 uppercase tracking-wide font-medium">{label}</p>
              <p className="text-white font-semibold text-sm break-all">{value}</p>
            </div>
            {external && (
              <ExternalLink size={14} className="text-white/20 group-hover:text-primary/50 transition-colors" />
            )}
          </motion.a>
        ))}
      </div>

      <motion.div
        className="glass-panel rounded-2xl p-5 max-w-4xl mx-auto flex items-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
          <MapPin size={18} />
        </div>
        <div>
          <p className="text-xs text-white/40 mb-0.5 uppercase tracking-wide font-medium">Location</p>
          <p className="text-white font-semibold text-sm">Parshuram, Feni, Bangladesh</p>
        </div>
      </motion.div>
    </Section>
  );
}
