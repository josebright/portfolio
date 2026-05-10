# 0001 — MUI 6 with the Emotion `styled()` API (no Tailwind, no styled-components engine swap)

- Status: Accepted
- Date: 2026-05-10

## Context

The original portfolio used Next 13 + Tailwind. The owner explicitly rejected Tailwind for this rebuild and asked for "MUI + styled-components". MUI ships Emotion as its default style engine; the literal `styled-components` package is a supported but non-default integration that lags MUI's feature set and adds dual-runtime weight.

## Decision

Use **MUI 6** with its **default Emotion engine** and the `styled()` API from `@mui/material/styles`. The `styled()` API has the same tagged-template syntax and theming model as the `styled-components` package, satisfying the owner's stylistic preference without paying the engine-swap cost.

Theme is defined once in `src/lib/theme.ts` using `createTheme({ colorSchemes: { light, dark } })` so light/dark are both first-class.

## Consequences

- **Good:** writing styles uses the same tagged-template syntax the owner prefers.
- **Good:** zero engine-swap config — MUI's defaults work, including SSR cache via `@mui/material-nextjs`.
- **Good:** light/dark mode handled inside MUI without `next-themes`; one source of truth.
- **Bad:** any future engineer who searches "styled-components" in the repo will find it via the API, not the package — needs onboarding context (this ADR).

## Alternatives considered

- **Tailwind.** Owner rejected.
- **MUI with the literal `styled-components` package as engine.** Adds Babel/SWC plugin, ships both `@emotion/react` and `styled-components` runtimes, lags MUI's feature support. Net negative for syntactic preference that the default API already satisfies.
- **MUI 5.** Working but missing the unified `colorSchemes` API; would have needed `Experimental_CssVarsProvider` instead. MUI 6 stable.
