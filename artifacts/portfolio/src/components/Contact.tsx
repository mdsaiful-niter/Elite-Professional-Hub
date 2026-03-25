import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import { MapPin, Phone, Mail, Send, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <Section id="contact" title="Get in Touch" subtitle="Let's Collaborate">
      <div className="grid lg:grid-cols-12 gap-12">
        
        <motion.div 
          className="lg:col-span-5 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-display font-bold text-white mb-6">Contact Information</h3>
          <p className="text-white/60 mb-8 leading-relaxed">
            Whether you have a question, a project proposition, or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <a href="mailto:msislam07@niter.edu.bd" className="flex items-center gap-4 group p-4 glass-panel rounded-2xl hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1">Email</p>
                <p className="text-white font-medium">msislam07@niter.edu.bd</p>
              </div>
            </a>

            <a href="tel:+8801318881674" className="flex items-center gap-4 group p-4 glass-panel rounded-2xl hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1">Phone / WhatsApp</p>
                <p className="text-white font-medium">+8801318881674</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 glass-panel rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1">Location</p>
                <p className="text-white font-medium">Parshuram, Feni, Bangladesh</p>
              </div>
            </div>
            
            <a href="https://www.linkedin.com/in/md-saiful-a18011283" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass-panel rounded-2xl hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="text-sm text-white/50 mb-1">LinkedIn</p>
                <p className="text-white font-medium">Connect Professionally</p>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl space-y-6">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-white/70 font-medium">Your Name</label>
                <input 
                  id="name"
                  type="text" 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white/70 font-medium">Your Email</label>
                <input 
                  id="email"
                  type="email" 
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm text-white/70 font-medium">Subject</label>
              <input 
                id="subject"
                type="text" 
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-white/70 font-medium">Message</label>
              <textarea 
                id="message"
                rows={5}
                required
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                placeholder="Hello Saiful, I would like to discuss..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl font-semibold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"} <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </Section>
  );
}
