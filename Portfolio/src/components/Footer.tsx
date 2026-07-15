import { site } from "../content/site";

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-2 font-mono text-xs text-inksoft">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <p>{site.location} · built with React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
