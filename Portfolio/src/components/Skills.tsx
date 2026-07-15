import { skillGroups } from "../content/site";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-rule bg-paperalt">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
          $ cat skills.md
        </p>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold mb-12">
          Experience &amp; Skills
        </h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm font-semibold text-ink border-b border-rule pb-2 mb-4">
                ## {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
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
