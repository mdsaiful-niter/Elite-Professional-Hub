import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = ["about", "skills", "projects", "experience", "achievements", "contact"];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
    if (!href) return;
    e.preventDefault();
    setIsMobileMenuOpen(false);
    // Wait for the menu close animation to finish, then scroll
    setTimeout(() => {
      const id = href.replace("#", "");
      if (id === "top" || id === "") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(id);
        if (el) {
          const offset = 64; // navbar height
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    }, 300);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/[0.04] border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#top"
          whileHover={{ scale: 1.05 }}
          onClick={handleNavClick}
          className="text-xl font-display font-bold tracking-tighter text-white flex items-center gap-0.5"
        >
          SAIFUL
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="text-primary"
          >.</motion.span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -1 }}
                onClick={handleNavClick}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-250 ${
                  isActive ? "text-primary" : "text-white/60 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.a>
            );
          })}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleNavClick}
            className="ml-3 px-5 py-2 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/12 transition-colors duration-300"
          >
            Hire Me
          </motion.a>
        </nav>

        {/* Mobile Toggle — plain button for reliable touch */}
        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="md:hidden text-white p-2 rounded-lg border border-white/10 bg-white/5 active:scale-95 transition-transform"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X size={20} /></motion.span>
              : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><Menu size={20} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden overflow-hidden border-t border-white/[0.08] bg-[#0f0f14]/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={handleNavClick}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
