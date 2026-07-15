import { useEffect, useState } from "react";

const STAGES = ["DEV", "QA", "UAT", "PROD"] as const;

/**
 * Signature interactive element.
 * A fixed vertical release pipeline that "promotes" a build through
 * DEV -> QA -> UAT -> PROD as the visitor scrolls down the page —
 * a small, on-theme piece of interactivity for a release engineer's site.
 * Hidden on small screens; respects prefers-reduced-motion by disabling
 * the transition (the fill still updates, just without animation).
 */
export default function ReleasePipeline() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setProgress(pct);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.min(
    STAGES.length - 1,
    Math.floor(progress * STAGES.length)
  );

  return (
    <div
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-0"
      aria-hidden="true"
    >
      {STAGES.map((stage, i) => (
        <div key={stage} className="flex flex-col items-center">
          <div
            className={`w-2.5 h-2.5 rounded-full border transition-colors duration-300 motion-reduce:transition-none ${
              i <= activeIndex
                ? "bg-accent border-accent"
                : "bg-transparent border-rule"
            }`}
          />
          <span
            className={`mt-1 mb-1 font-mono text-[9px] tracking-widest transition-colors duration-300 motion-reduce:transition-none ${
              i <= activeIndex ? "text-accent" : "text-inksoft/50"
            }`}
          >
            {stage}
          </span>
          {i < STAGES.length - 1 && (
            <div
              className={`w-px h-8 transition-colors duration-300 motion-reduce:transition-none ${
                i < activeIndex ? "bg-accent" : "bg-rule"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
