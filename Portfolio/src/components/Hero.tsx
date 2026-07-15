import { useEffect, useState } from "react";
import { site, terminalFocus } from "../content/site";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const fullText = `${site.name} — ${site.role}`;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setTyped(fullText);
      return;
    }

    let i = 0;
    const speed = 32;
    const interval = setInterval(() => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-36 pb-24 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
          // devops &nbsp;·&nbsp; release engineering
        </p>
        <h1 className="text-4xl sm:text-5xl font-mono font-bold leading-[1.1] tracking-tight">
          Hi, I'm Renuka —<br />
          a DevOps Engineer<br />
          focused on <span className="text-accent">shipping</span><br />
          reliable software.
        </h1>
        <p className="mt-6 text-inksoft text-base leading-relaxed max-w-md">
          {site.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="font-mono text-sm bg-ink text-paper px-5 py-3 rounded-sm hover:bg-accent transition-colors"
          >
            view_projects &rarr;
          </a>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-sm border border-ink px-5 py-3 rounded-sm hover:border-accent hover:text-accent transition-colors"
          >
            say_hello()
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-inksoft">based in {site.location}</p>
      </div>

      <div className="rounded-lg overflow-hidden border border-rule shadow-xl shadow-ink/5">
        <div className="bg-term px-4 py-3 flex items-center gap-2 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#E0605A]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#E6B450]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#4FB37E]" />
          <span className="ml-3 font-mono text-[11px] text-termdim">renuka@devops — zsh</span>
        </div>
        <div className="bg-term px-5 py-6 font-mono text-[13px] leading-relaxed min-h-[280px]">
          <p className="text-termdim">$ whoami</p>
          <p className="text-termtext mt-1">{typed}</p>
          <p className="mt-5 text-termdim">$ cat focus.txt</p>
          <ul className="mt-1 text-termtext space-y-1">
            {terminalFocus.map((line) => (
              <li key={line}>
                <span className="text-accent">&gt;</span> {line}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-termdim">
            $ <span className="cursor-blink">_</span>
          </p>
        </div>
      </div>
    </section>
  );
}
