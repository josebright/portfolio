# 0004 — Rejected: command palette (cmd+k)

- Status: Accepted
- Date: 2026-05-10

## Context

Mid-rebuild, "experimental navigation" was on the 2026 design-trend list. The portfolio could ship a `cmd+k` palette (`cmdk` library) for jump-to-page and jump-to-social as a "credible engineer signal."

## Decision

**Skip.** A 5-page editorial portfolio does not benefit from a command palette.

## Consequences

- **Good:** ~8 KB and a maintained dependency saved.
- **Good:** the brand language (editorial, restrained) is preserved — a palette is a SaaS-product pattern, not an editorial one.
- **Good:** recruiters scanning the site need fast load and clear content, not keyboard-shortcut flex.
- **Bad:** none meaningful for this site's scope.

## Alternatives considered

- **Ship `cmdk`.** Rejected. The credibility signal of a command palette is real on a tool / app product; on a personal portfolio it is decoration. The credibility signal _that matters_ lives in the GitHub repo and the case-study writing.
- **Ship a simpler "press / to focus search" pattern.** The site has no search. Adding search to add a `/` shortcut would be feature-driven-by-shortcut.

## Reversal criteria

Reconsider if the site grows past ~15 routes or adds a real searchable corpus (e.g. a substantial blog).
