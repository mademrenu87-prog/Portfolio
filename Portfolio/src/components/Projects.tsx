import { useMemo, useState } from "react";
import { projects } from "../content/site";

const ALL = "all";

export default function Projects() {
  const [filter, setFilter] = useState<string>(ALL);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort()];
  }, []);

  const visible = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
          $ ls ./projects
        </p>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold mb-6">
          Infrastructure &amp; Release Projects
        </h2>

        {/* Interactive filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by tag">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`filter-pill ${filter === tag ? "active" : ""}`}
              aria-pressed={filter === tag}
            >
              --tag={tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-head">{project.command}</div>
              <div className="p-6">
                <h3 className="font-mono font-semibold text-lg">{project.title}</h3>
                <p className="mt-2 text-sm text-inksoft leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span key={s} className="tag-pill">
                      {s}
                    </span>
                  ))}
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-3 text-xs font-mono">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <dt className="text-inksoft">{m.label}</dt>
                      <dd className="text-accent">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="font-mono text-sm text-inksoft mt-8">
            No projects match --tag={filter}
          </p>
        )}
      </div>
    </section>
  );
}
