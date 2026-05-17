'use client';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  pct: number;
}

const skillGroups = [
  {
    category: "Design",
    items: [
      { name: "Figma", pct: 95 },
      { name: "UI/UX Design", pct: 90 },
      { name: "Design Systems", pct: 85 },
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", pct: 90 },
      { name: "TypeScript", pct: 82 },
      { name: "Tailwind CSS", pct: 92 },
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
                  <span className="font-mono text-xs text-muted">{skill.pct}%</span>
                </div>
                <div className="h-[2px] bg-bg3 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 bottom-0 bg-accent transition-transform duration-1000 ease-out origin-left"
                    style={{ transform: animate ? `scaleX(${skill.pct / 100})` : 'scaleX(0)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
