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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMobileMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Navbar bar */}
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
            onClick={handleLinkClick}
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
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
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
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Hire Me
            </motion.a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 bg-white/5 text-white active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile dropdown — rendered as a portal-like fixed layer, outside the header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              key="mobile-menu"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-16 left-0 right-0 z-50 md:hidden"
            >
              <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-[#111118]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <div className="flex flex-col p-3 gap-1">
                  {links.map((link, i) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04, duration: 0.2 }}
                        onClick={handleLinkClick}
                        className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors duration-150 ${
                          isActive
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-white/70 hover:text-white hover:bg-white/6 active:bg-white/10"
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}

                  <div className="mt-2 pt-2 border-t border-white/8">
                    <a
                      href="#contact"
                      onClick={handleLinkClick}
                      className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground active:opacity-80 transition-opacity"
                    >
                      Hire Me
                    </a>
                  </div>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
