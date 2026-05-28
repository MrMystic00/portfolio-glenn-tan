interface WorkItem {
    period: string;
    role: string;
    company: string;
    desc: string;
    tags: string[];
  }
  
  const workHistory: WorkItem[] = [
    {
      period: "2025 ",
      role: "Data Analytics Intern",
      company: "SBS Transit Rail Pte. Ltd. · Internship",
      desc: "Data analytics experience in transportation and asset management, involving data cleaning, transformation, forecasting, and dashboard development using Python, SQL, AWS Athena, Amazon SageMaker, and Power BI. Worked on large-scale datasets to support operational decision-making, optimise processing workflows, and develop visual analytics solutions for train disruption management and inventory demand forecasting.",
      tags: ["Data Analytics", "Time Series", "Python"],
    },
    {
      period: "2021 — 2022",
      role: "Section Sergeant Automotive Technician",
      company: "Singapore Armed Forces · National Service",
      desc: "Served in the Singapore Armed Forces as a Section Sergeant Automotive Technician, leading a team of approximately 70 servicemen in maintenance operations and training activities. Provided technical support for preventive maintenance operations, conducted On Job Experience training for multiple trainee batches, and demonstrated strong leadership and teamwork skills, earning recognition as Best Section Commander and Best Section during Maintenance Field Training.",
      tags: ["Leadership", "Coaching", "Communication"],
    },
    {
      period: "2019 — 2020",
      role: "Routine Maintenance Intern ",
      company: "Shell Chemicals Seraya Pte. Ltd. · Internship ",
      desc: "Completed an internship at Shell Chemicals Seraya Pte. Ltd. in routine maintenance operations, supporting procurement, logistics coordination, and project tracking activities. Communicated with multiple vendors, assisted in purchasing maintenance materials through SAP, coordinated material dispatch schedules with warehouse logistics, and monitored maintenance project progress using Microsoft Excel.",
      tags: ["Communication", "Excel", "Routine Planning"],
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