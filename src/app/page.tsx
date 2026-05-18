'use client';
import Nav from "@/components/layout/Nav";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal(); // Initialize our interactive scroll reveal observer
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Nav />
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 md:px-16 pt-32 pb-16 max-w-7xl mx-auto gap-16 transition-colors duration-500">
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-[10px] tracking-widest uppercase text-accent font-medium">
            <span className="w-8 h-[1px] bg-accent inline-block" /> Available for opportunities
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-light butchered leading-none tracking-tight">
            Glenn <span className="text-accent font-semibold">Tan</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl text-muted italic font-light">Designer &amp; Developer</p>
          <p className="text-muted max-w-md text-sm md:text-base leading-relaxed font-light">
            I craft thoughtful digital experiences — blending sharp design with robust engineering. Passionate about products that make people's lives genuinely better.
          </p>
          <div className="flex gap-4 pt-4 flex-wrap">
            <a href="#projects" className="px-8 py-3 bg-accent text-bg font-medium text-xs tracking-widest uppercase transition-all hover:bg-accent2 hover:-translate-y-0.5">
              View My Work
            </a>
            <a href="mailto:you@email.com" className="px-8 py-3 border border-borderCustom text-textMain font-medium text-xs tracking-widest uppercase transition-all hover:border-accent hover:-translate-y-0.5">
              Get In Touch
            </a>
          </div>
        </div>

        {/* Hero Geometric Frame Graphic */}
        <div className="hidden lg:flex justify-center items-center relative">
          <div className="relative w-[340px] h-[420px]">
            <div className="w-full h-full bg-bg3 border border-borderCustom flex items-center justify-center font-serif text-7xl text-accent/60 transition-colors duration-500">
              ✦
            </div>
            <div className="absolute top-6 left-6 -right-6 -bottom-6 border border-borderCustom -z-10 transition-colors duration-500" />
            <div className="absolute -bottom-6 -right-8 flex flex-col gap-2">
              <div className="bg-cardBg border border-borderCustom px-4 py-2.5 flex items-center gap-3 transition-colors duration-500">
                <span className="font-serif text-xl font-semibold text-accent">3+</span>
                <span className="text-[10px] tracking-wider text-muted uppercase whitespace-nowrap">Years Exp</span>
              </div>
              <div className="bg-cardBg border border-borderCustom px-4 py-2.5 flex items-center gap-3 transition-colors duration-500">
                <span className="font-serif text-xl font-semibold text-accent">12</span>
                <span className="text-[10px] tracking-wider text-muted uppercase whitespace-nowrap">Projects Done</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL CONTENT BLOCKS - Clean, manageable and modular */}
      <Work />
      <Projects />
      <Certificates />
      <Skills />

      {/* FOOTER */}
      <footer className="border-t border-borderCustom px-6 md:px-16 py-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-500">
        <div className="font-serif text-lg text-accent">Glenn Tan</div>
        <div className="flex gap-6 text-xs text-muted uppercase tracking-wider">
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
        </div>
        <p className="text-[11px] text-muted">&copy; {currentYear} Your Name. All rights reserved.</p>
      </footer>
    </>
  );
}