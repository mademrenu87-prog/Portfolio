import { useState } from "react";
import { site } from "../content/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — the mailto link still works as a fallback.
    }
  }

  return (
    <section id="contact" className="border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="rounded-lg overflow-hidden border border-rule">
          <div className="bg-term px-4 py-3 flex items-center gap-2 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E0605A]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#E6B450]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4FB37E]" />
            <span className="ml-3 font-mono text-[11px] text-termdim">contact — zsh</span>
          </div>
          <div className="bg-term px-6 sm:px-10 py-12 font-mono text-termtext">
            <p className="text-termdim text-sm">$ contact --renuka</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
              Let's build something reliable.
            </h2>
            <p className="mt-3 text-sm text-termdim max-w-lg">
              Open to DevOps / Release Engineering roles. Reach out directly — I usually reply
              within a day.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
              <button onClick={copyEmail} className="contact-link text-left w-full">
                <span className="text-accent">email {copied && "· copied!"}</span>
                <span className="block mt-1 text-termtext">{site.email}</span>
              </button>
              <a href={site.github} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="text-accent">github</span>
                <span className="block mt-1 text-termtext">
                  {site.github.replace("https://", "")}
                </span>
              </a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span className="text-accent">linkedin</span>
                <span className="block mt-1 text-termtext">
                  {site.linkedin.replace("https://", "")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
