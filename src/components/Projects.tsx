interface ProjectItem {
  icon: string;
  name: string;
  desc: string;
  tags: string[];
  link: string;
  linkText: string;
}

const projectList: ProjectItem[] = [
  {
    icon: "🧠",
    name: "AI Writing Assistant",
    desc: "A browser extension that uses LLMs to help writers improve clarity, tone, and style in real-time. Built with TypeScript and integrated with the OpenAI API.",
    tags: ["TypeScript", "OpenAI", "Chrome API"],
    link: "#",
    linkText: "View Project →"
  },
  {
    icon: "📊",
    name: "Analytics Dashboard",
    desc: "Real-time analytics platform for e-commerce teams. Features live data visualizations, cohort analysis, and automated reporting built with React and D3.js.",
    tags: ["React", "D3.js", "Python"],
    link: "#",
    linkText: "View Project →"
  },
  {
    icon: "🌿",
    name: "Sustainable Living App",
    desc: "Mobile app helping users track their carbon footprint and discover eco-friendly alternatives. Over 5,000 downloads in the first month. Designed and built solo.",
    tags: ["React Native", "Firebase", "Figma"],
    link: "#",
    linkText: "View Project →"
  },
  {
    icon: "🔐",
    name: "Auth Microservice",
    desc: "Open-source authentication microservice with OAuth2, JWT, and role-based access control. 300+ GitHub stars and actively maintained.",
    tags: ["Node.js", "PostgreSQL", "Docker"],
    link: "#",
    linkText: "View on GitHub →"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest">02</span>
        <h2 className="font-serif text-3xl md:text-4xl font-light">Featured Projects</h2>
        <div className="flex-1 h-[1px] bg-accent/15 self-end mb-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectList.map((project, index) => (
          <div 
            key={index}
            className="bg-cardBg border border-accent/15 p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-accent/5 border border-accent/15 flex items-center justify-center text-xl mb-6">
                {project.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-muted font-light leading-relaxed mb-6">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-wider uppercase border border-accent/15 px-[10px] py-0.5 text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              className="inline-flex items-center text-xs tracking-widest uppercase text-accent font-medium hover:gap-3 transition-all duration-200 gap-2"
            >
              {project.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}