'use client';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
}

const skillGroups = [
  {
    category: "Knowledge Domain",
    items: [
      { name: "Time Series"},
      { name: "Financial Econometrics"},
      { name: "Deep Learing"},
      { name: "Machine Learning"},
      { name: "Optimisation"},
      { name: "Discrete Mathematics"},
      { name: "Data Analytics"}
    ]
  },
  {
    category: "Software Skills",
    items: [
      { name: "Python"},
      { name: "R"},
      { name: "SQL"},
      { name: "PowerBI"},
      { name: "Git"},
      { name: "AWS"}
    ]
  }
];

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-28 px-8 max-w-6xl mx-auto">
      <div className="flex items-baseline gap-6 mb-16">
        <span className="font-mono text-xs text-accent tracking-widest">04</span>
        <h2 className="font-serif text-4xl font-light">Skills</h2>
        <div className="flex-1 h-[1px] bg-accent/15 self-end mb-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-6">
            <h3 className="font-mono text-xs tracking-widest uppercase text-accent border-b border-accent/15 pb-3">
              {group.category}
            </h3>
            {group.items.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-light">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
