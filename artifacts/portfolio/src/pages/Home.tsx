import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      {/* Global abstract glowing effects behind everything */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <Navigation />
      
      <div className="relative z-10 pb-12 pt-16">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
