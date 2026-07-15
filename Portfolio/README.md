# Renuka Mulammagari — Portfolio

A data-driven, interactive portfolio built to showcase DevOps / Release Engineering
work: CI/CD automation, release governance, Kubernetes/OpenShift operations, and
production reliability.

**Live-editable by design** — nearly the entire site (name, summary, skills, projects,
experience, contact links) is driven from a single file, `src/content/site.ts`. You
never need to touch component markup to update content.

## Stack

- **React 18 + TypeScript**, built with **Vite**
- **Tailwind CSS** — design tokens (colors/fonts) in `tailwind.config.js`
- Zero external UI libraries — every interactive piece (typewriter hero, project
  filter, scroll-driven release pipeline, copy-to-clipboard contact) is hand-written
- **GitHub Actions** CI — lints and builds on every push/PR

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Requires Node 18+ (20 LTS recommended).

## Where to edit things

| You want to change…             | Edit this file                    |
| -------------------------------- | ---------------------------------- |
| Name, tagline, summary, links    | `src/content/site.ts` → `site`     |
| Terminal "focus" list in hero    | `src/content/site.ts` → `terminalFocus` |
| Skills                           | `src/content/site.ts` → `skillGroups` |
| Projects                         | `src/content/site.ts` → `projects` |
| Experience timeline              | `src/content/site.ts` → `experience` |
| Colors & fonts (design tokens)   | `tailwind.config.js`               |
| Global styles (chips, cards, etc)| `src/index.css`                    |

**You never edit component markup for content changes** — it all flows from
`src/content/site.ts`.

## The signature element

`src/components/ReleasePipeline.tsx` renders a fixed vertical pipeline
(DEV → QA → UAT → PROD) that "promotes" a build as you scroll down the page —
a small piece of interactivity on-theme for a release engineer's site. It's hidden
on small screens and respects `prefers-reduced-motion`.

The project grid on `/projects` also has a live **tag filter** (`--tag=kubernetes`,
`--tag=release`, etc.) built with plain React state — no library.

## Deploying

Any static host works since this builds to plain HTML/CSS/JS:

```bash
npm run build       # outputs to dist/
```

- **Vercel**: import the GitHub repo, framework preset "Vite" — zero config.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: use the `gh-pages` package or a Pages-deploy Action pointed at `dist/`.

## Before you go live — replace these placeholders

- [ ] `src/content/site.ts` → `github` and `linkedin` — currently placeholders,
      replace with your real profile URLs.
- [ ] Consider adding a real domain / custom `<meta>` tags in `index.html` once you
      have one.
- [ ] Optional: drop a resume PDF/DOCX in `public/` and link it from the hero or
      contact section.

## Pushing this to your GitHub repo

This project is git-initialized locally with an initial commit already made. To push
it to your repo (`mademrenu87-prog/Portfolio`):

```bash
cd Portfolio
git remote add origin https://github.com/mademrenu87-prog/Portfolio.git
git branch -M main
git push -u origin main
```

If the remote repo already has commits (e.g. a README created on GitHub), pull first:

```bash
git pull origin main --allow-unrelated-histories
# resolve any conflicts, then:
git push -u origin main
```
