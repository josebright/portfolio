# 0000 — Architecture Decision Records

- Status: Accepted
- Date: 2026-05-10

## Context

We need a place to capture _why_ significant decisions on this codebase were made — not just what is in the code today. Code can be read; intent often cannot.

## Decision

Capture meaningful, hard-to-reverse decisions as numbered Markdown files in `docs/decisions/NNNN-short-title.md`. One file per decision. Use this template:

```text
- Status: Proposed | Accepted | Superseded by NNNN
- Date: YYYY-MM-DD

## Context
What problem we faced.

## Decision
What we chose.

## Consequences
What changes — good and bad.

## Alternatives considered
What we rejected and why.
```

## Consequences

- **Good:** new engineers can audit decisions in chronological order without spelunking commits.
- **Good:** changing a prior decision becomes explicit (a new ADR that "Supersedes 000X") instead of silent drift.
- **Bad:** small additional discipline at PR time when a real decision is being made.

## Alternatives considered

- **Document on the wiki / Notion.** Drifts from code, dies of neglect.
- **Inline comments in code.** Buries the why under implementation; no chronology.
- **Skip ADRs.** Was the status quo. Lost too much context across rewrites.
