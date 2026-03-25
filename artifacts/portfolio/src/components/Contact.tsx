import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, Phone, Mail, Send, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please check your connection and try again.");
    }
  };

  const inputClass =
    "w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200";

  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's Collaborate">
      <div className="grid lg:grid-cols-12 gap-12">

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-white/60 leading-relaxed mb-6">
            Have a question, project idea, or just want to say hello? Send a message and I'll get back to you promptly.
          </p>

          {[
            { href: "mailto:msislam07@niter.edu.bd", icon: Mail, label: "Email", value: "msislam07@niter.edu.bd" },
            { href: "tel:+8801318881674", icon: Phone, label: "Phone / WhatsApp", value: "+8801318881674" },
            { href: "https://www.linkedin.com/in/md-saiful-a18011283", icon: Linkedin, label: "LinkedIn", value: "Connect Professionally", target: "_blank" },
          ].map(({ href, icon: Icon, label, value, target }) => (
            <a
              key={label}
              href={href}
              target={target}
              rel={target ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 group p-4 glass-panel rounded-2xl hover:border-primary/30 transition-colors duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-200 shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-xs text-white/40 mb-0.5">{label}</p>
                <p className="text-white font-medium text-sm">{value}</p>
              </div>
            </a>
          ))}

          <div className="flex items-center gap-4 p-4 glass-panel rounded-2xl">
            <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center text-primary shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-white/40 mb-0.5">Location</p>
              <p className="text-white font-medium text-sm">Parshuram, Feni, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl space-y-5">
            <h3 className="text-2xl font-display font-bold text-white mb-2">Send a Message</h3>
            <p className="text-white/40 text-sm mb-6">Your message will be delivered directly to my inbox.</p>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs text-white/60 font-medium uppercase tracking-wide">Your Name</label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs text-white/60 font-medium uppercase tracking-wide">Your Email</label>
                <input id="email" name="email" type="email" required className={inputClass} placeholder="john@example.com" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs text-white/60 font-medium uppercase tracking-wide">Subject</label>
              <input id="subject" name="subject" type="text" required className={inputClass} placeholder="Project Inquiry" />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs text-white/60 font-medium uppercase tracking-wide">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className={`${inputClass} resize-none`}
                placeholder="Hello Saiful, I would like to discuss..."
              />
            </div>

            {/* Status feedback */}
            {status === "success" && (
              <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-4 py-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                <p className="text-emerald-400 text-sm font-medium">Message sent! I'll get back to you soon.</p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3">
                <AlertCircle size={18} className="text-red-400 shrink-0" />
                <p className="text-red-400 text-sm">{errorMsg}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-xl font-semibold bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                    className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                  />
                  Sending…
                </>
              ) : (
                <>Send Message <Send size={16} /></>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </Section>
  );
}
