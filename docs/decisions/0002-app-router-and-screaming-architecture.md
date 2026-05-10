# 0002 — Next 15 App Router with Screaming Architecture

- Status: Accepted
- Date: 2026-05-10

## Context

The old codebase was Pages Router with framework-shaped folders (`pages/`, `components/`). The engineering guidelines mandate **Screaming Architecture** — top-level folders reveal domain, not framework — and call out `controllers/`, `models/`, `views/` explicitly as anti-patterns.

## Decision

Migrate to **Next 15 App Router**. Top-level domain routes mirror the site's domains:

```
src/app/
  about/      projects/      experience/      blog/      contact/
  api/contact/
```

`components/` is split by purpose, not framework: `ui/` (primitives), `layout/` (chrome), `sections/` (page-shaped composites), `seo/`, `observability/`, `blog/`. Content lives in `content/` as typed TypeScript modules.

## Consequences

- **Good:** opening the file tree tells you what the site is (a portfolio with projects, experience, blog, contact), not what it uses.
- **Good:** App Router gives us `generateMetadata`, dynamic OG images via `next/og`, route-handler API endpoints, and metadata-driven `sitemap.ts` / `robots.ts` / `manifest.ts`.
- **Good:** RSC reduces client JS for content pages; only sections that need interactivity are `'use client'`.
- **Bad:** mental model shift for anyone last on Pages Router; some MUI integration paths are App-Router-specific (`@mui/material-nextjs/v15-appRouter`).

## Alternatives considered

- **Stay on Pages Router.** Loses metadata API, dynamic OG, and the long-term maintenance trajectory. Next is investing in App Router.
- **Different framework (Astro, Remix).** Both viable. Next was the incumbent and the owner already knows it; switching frameworks for a portfolio rebuild is unjustified risk.
