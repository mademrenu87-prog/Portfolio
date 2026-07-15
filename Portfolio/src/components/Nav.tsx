import { useEffect, useState } from "react";
import { site } from "../content/site";

const SECTIONS = ["skills", "projects", "experience", "contact"];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-ink hover:text-accent transition-colors">
          renuka<span className="text-accent">@</span>devops<span className="text-inksoft">:~$</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-inksoft">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition-colors hover:text-accent ${
                active === id ? "text-accent" : ""
              }`}
            >
              {id}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="font-mono text-xs border border-ink px-3 py-1.5 rounded-sm hover:bg-ink hover:text-paper transition-colors"
        >
          get_in_touch()
        </a>
      </div>
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
