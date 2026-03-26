import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, Phone, Mail, Send, Linkedin, CheckCircle2, AlertCircle } from "lucide-react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeV0Wf1Qu4igROevMSgijBBFxRuI5vvA9CxfJO9ptjo-pM6BQ/formResponse";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Submit via hidden iframe — this is a real form POST that Google Forms accepts
    if (formRef.current) {
      formRef.current.submit();
      // Show success after a short delay (iframe loads the Google response page silently)
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
      }, 1500);
    }
  };

  const inputClass =
    "w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-200";

  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's Collaborate">
      {/* Hidden iframe that absorbs the Google Form redirect response */}
      <iframe
        ref={iframeRef}
        name="hidden-google-form-iframe"
        title="Form submission"
        style={{ display: "none" }}
      />

      <div className="grid lg:grid-cols-12 gap-12">

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-4">
          <p className="text-white/60 leading-relaxed mb-6">
            Have a question, project idea, or just want to say hello? Send a message and I'll get back to you promptly.
          </p>

          {[
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
              href: "https://www.linkedin.com/in/md-saiful-a18011283",
              icon: Linkedin,
              label: "LinkedIn",
              value: "Connect Professionally",
              target: "_blank",
            },
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
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            action={FORM_ACTION}
            method="POST"
            target="hidden-google-form-iframe"
            className="glass-panel p-8 md:p-10 rounded-3xl space-y-5"
          >
            <div className="mb-2">
              <h3 className="text-2xl font-display font-bold text-white">Send a Message</h3>
              <p className="text-white/40 text-sm mt-1">
                Responses are collected securely and delivered to me directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs text-white/60 font-medium uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  id="name"
                  name="entry.1548333999"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs text-white/60 font-medium uppercase tracking-wide">
                  Your Email
                </label>
                <input
                  id="email"
                  name="entry.1001581522"
                  type="email"
                  required
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs text-white/60 font-medium uppercase tracking-wide">
                Subject
              </label>
              <input
                id="subject"
                name="entry.1138667942"
                type="text"
                required
                className={inputClass}
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs text-white/60 font-medium uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="entry.185803057"
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
                <p className="text-emerald-400 text-sm font-medium">
                  Message sent! I'll get back to you soon.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/25 rounded-xl px-4 py-3">
                <AlertCircle size={18} className="text-red-400 shrink-0" />
                <p className="text-red-400 text-sm">
                  Something went wrong. Please email me at msislam07@niter.edu.bd
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
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
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={16} />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </Section>
  );
}
