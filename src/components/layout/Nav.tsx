'use client';
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "projects", "certificates", "skills"];
      let current = "home";
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-40 flex justify-between items-center px-6 md:px-16 py-5 border-b border-borderCustom bg-bg/85 backdrop-blur-md transition-colors duration-500">
      <a href="#home" className="font-serif text-xl font-semibold text-accent tracking-wide">YN.</a>
      
      <div className="flex items-center gap-6 md:gap-10">
        <ul className="flex gap-4 md:gap-8 text-[11px] tracking-widest uppercase font-medium">
          {["work", "projects", "certificates", "skills"].map((sec) => (
            <li key={sec}>
              <a 
                href={`#${sec}`} 
                className={`transition-colors duration-200 ${activeSection === sec ? 'text-accent' : 'text-muted hover:text-accent'}`}
              >
                {sec === "certificates" ? "Certs" : sec}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Switcher Button */}
        <button 
          onClick={toggleTheme}
          className="p-2 border border-borderCustom text-accent hover:border-accent transition-colors text-xs font-mono tracking-tighter"
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? 'DAY' : 'NIGHT'}
        </button>
      </div>
    </nav>
  );
}