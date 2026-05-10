# Bright8 Portfolio

Personal portfolio of **Uchenna Bright Ugwumadu** — Cloud Software Engineer | Full-Stack Developer.

> _Build. Bright. Beyond._

## Stack

- **Next.js 15** (App Router, RSC, Turbopack)
- **React 19** + **TypeScript 5** (strict, `noUncheckedIndexedAccess`)
- **MUI 6** + **Emotion** (`styled()` API, theme-driven)
- **Sora** (display) + **Inter** (body) via `next/font`
- **Vitest** + **React Testing Library**
- **ESLint 9** (flat config) + **Prettier 3**
- **Husky** + **lint-staged**

## Architecture

Domain-named folders following Screaming Architecture (see `docs/engineering-guidelines.md`):

```text
src/
  app/                  # App Router routes
    about/  projects/  experience/  contact/  api/contact/
  components/
    ui/                 # primitives (Logo, Section, SectionHeading)
    layout/             # NavBar, Footer
    sections/           # Hero, AboutPanels, ProjectGrid, ExperienceTimeline, SkillsCloud, ContactForm
  content/              # typed profile, projects, experience, skills
  lib/                  # theme, fonts, site constants
public/
  assets/               # images, svg, profile photo
  cv/                   # downloadable resume
docs/
  engineering-guidelines.md
  design/               # Figma exports (Bright8 brand presentation)
```

**Engineering guidelines** are in [`docs/engineering-guidelines.md`](docs/engineering-guidelines.md). Hard rules (function ≤20 lines, file ≤500 lines, no nulls, SOLID, no comment smells, FIRST tests, Dependency Rule) are enforced by review.

## Getting started

Requires Node ≥ 20 (see `.nvmrc`).

```bash
nvm use
npm install
cp .env.example .env.local   # fill in CONTACT_TO_EMAIL etc. if wiring email
npm run dev                  # http://localhost:3000
```

## Scripts

| Command                 | What it does                 |
| ----------------------- | ---------------------------- |
| `npm run dev`           | Start dev server (Turbopack) |
| `npm run build`         | Production build             |
| `npm run start`         | Run the production build     |
| `npm run lint`          | ESLint                       |
| `npm run typecheck`     | `tsc --noEmit`               |
| `npm test`              | Vitest run                   |
| `npm run test:watch`    | Vitest watch                 |
| `npm run test:coverage` | Vitest with coverage         |
| `npm run format`        | Prettier write               |
| `npm run verify`        | typecheck + lint + test      |

## Contact form

Set the env vars in `.env.local` to wire the contact form to **Resend**:

```env
CONTACT_FROM_EMAIL=hello@bright8.dev
CONTACT_TO_EMAIL=uchennaugwumadu8@gmail.com
RESEND_API_KEY=re_xxx
```

Without these, submissions validate but no email is sent (logged for inspection in dev).

## Deploy

Vercel (recommended). Set `NEXT_PUBLIC_SITE_URL` and the contact env vars in the project's environment configuration.
