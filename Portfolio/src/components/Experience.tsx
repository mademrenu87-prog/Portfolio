import { experience } from "../content/site";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-rule bg-paperalt">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
          $ git log --oneline
        </p>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold mb-12">Experience</h2>

        <div className="space-y-10">
          {experience.map((item) => (
            <div key={item.title + item.company} className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-8">
              <div className="font-mono text-xs text-inksoft pt-1">{item.dates}</div>
              <div className="border-l border-rule pl-6">
                <h3 className="font-mono font-semibold">
                  {item.title} <span className="text-inksoft font-normal">· {item.company}</span>
                </h3>
                <p className="mt-2 text-sm text-inksoft leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
