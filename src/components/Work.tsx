interface WorkItem {
    period: string;
    role: string;
    company: string;
    desc: string;
    tags: string[];
  }
  
  const workHistory: WorkItem[] = [
    {
      period: "2023 — Present",
      role: "Senior Product Designer",
      company: "Company Name · Full-time",
      desc: "Led end-to-end design for the core product suite. Worked closely with engineering and product to ship features used by 200k+ users. Established a design system that reduced component build time by 40%.",
      tags: ["Figma", "Design Systems", "User Research"],
    },
    {
      period: "2021 — 2023",
      role: "Frontend Developer",
      company: "Another Company · Full-time",
      desc: "Built and maintained React-based web applications. Collaborated with designers to implement pixel-perfect interfaces and led migration from a legacy codebase to a modern stack.",
      tags: ["React", "TypeScript", "Node.js"],
    },
    {
      period: "2020 — 2021",
      role: "UI/UX Designer",
      company: "Freelance · Contract",
      desc: "Delivered brand identities, mobile app designs, and marketing websites for startups across Southeast Asia. Managed client relationships from brief to final handoff.",
      tags: ["Branding", "Mobile Design", "Prototyping"],
    },
  ];
  
  export default function Work() {
    return (
      <section id="work" className="bg-bg2 py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-baseline gap-6 mb-16">
            <span className="font-mono text-xs text-accent tracking-widest">01</span>
            <h2 className="font-serif text-3xl md:text-4xl font-light">Work Experience</h2>
            <div className="flex-1 h-[1px] bg-accent/15 self-end mb-2" />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-accent/15 border border-accent/15">
            {workHistory.map((item, index) => (
              <div 
                key={index} 
                className="bg-bg2 p-8 md:p-10 hover:bg-bg3 transition-colors duration-300 flex flex-col justify-between group"
              >
                <div>
                  <p className="font-mono text-[11px] text-accent tracking-widest mb-4">{item.period}</p>
                  <h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-accent2 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-xs text-muted mb-6">{item.company}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-8">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] tracking-wider uppercase border border-accent/15 px-3 py-1 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }