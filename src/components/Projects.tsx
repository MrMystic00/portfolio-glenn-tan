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
    icon: "✈️",
    name: "Tokyo Itinerary Optimiser Website",
    desc: "Developed a browser extension utilizing Gurobi optimization models to generate optimized attraction recommendations and travel planning in Tokyo, Japan.",
    tags: ["Gurobi", "Python", "Optimisation"],
    link: "https://github.com/MrMystic00/Tokyo-Itinerary-Optimiser-App",
    linkText: "View Github →"
  },
  {
    icon: "🐾",
    name: "Pet Image Classifier with Deep Learning",
    desc: "Developed a deep learning model using ResNet34 to classify different cat and dog breeds, while experimenting with various optimisers and learning rates to evaluate model performance.",
    tags: ["Python", "Deep Learning", "PyTorch"],
    link: "https://github.com/MrMystic00/Pet-Image-Classifier-Project",
    linkText: "View Project →"
  },
  {
    icon: "🎓",
    name: "Data Analysis on QS World Ranking",
    desc: "This project explores the factors influencing university rankings using the QS World University Rankings 2024 dataset obtained from Kaggle. The analysis focuses on understanding how institutional characteristics and performance indicators relate to global university rankings through statistical analysis and regression techniques.",
    tags: ["R", "Data Analysis", "Statitsitcal Testing", "Linear Regression"],
    link: "https://github.com/MrMystic00/QS-World-Ranking-Data-Analysis",
    linkText: "View Project →"
  }
// ,
//   {
//     icon: "🔐",
//     name: "Auth Microservice",
//     desc: "Open-source authentication microservice with OAuth2, JWT, and role-based access control. 300+ GitHub stars and actively maintained.",
//     tags: ["Node.js", "PostgreSQL", "Docker"],
//     link: "#",
//     linkText: "View on GitHub →"
//   }
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