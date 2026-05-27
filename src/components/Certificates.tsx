import { FaAws } from "react-icons/fa";
import { ReactNode } from "react";

interface CertItem {
  name: string;
  issuer: string;
  date: string;
  icon: ReactNode;
}

const certificatesList: CertItem[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    icon: <FaAws />,
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="bg-bg2 py-28 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline gap-6 mb-16">
          <span className="font-mono text-xs text-accent tracking-widest">03</span>
          <h2 className="font-serif text-3xl md:text-4xl font-light">Certificates</h2>
          <div className="flex-1 h-[1px] bg-accent/15 self-end mb-2" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {certificatesList.map((cert, index) => (
            <div
              key={index}
              className="bg-bg2 p-8 flex gap-5 items-start hover:bg-bg3 transition-colors duration-300"
            >
              <div className="w-10 h-10 border border-accent/15 flex items-center justify-center text-accent text-xl flex-shrink-0">
                {cert.icon}
              </div>

              <div className="space-y-1">
                <p className="text-lg font-medium leading-snug">{cert.name}</p>
                <p className="text-based text-muted">{cert.issuer}</p>
                <p className="font-mono text-[12px] text-accent tracking-wider pt-1">
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}