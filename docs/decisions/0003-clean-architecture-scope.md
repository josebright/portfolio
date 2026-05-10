# 0003 — Clean Architecture applied to the scope of a portfolio site

- Status: Accepted
- Date: 2026-05-10

## Context

`docs/engineering-guidelines.md` mandates Clean Architecture: four-layer split (Entities → Use Cases → Adapters → Frameworks), Dependency Rule, DTOs across boundaries, no framework code in entities or use cases. These rules were written for backend systems with non-trivial business logic.

A portfolio is a content site with one piece of logic worth boundary-protecting (the contact form). Applying the four-layer split literally to "render the About page" produces ceremony folders with one file each — the kind of premature abstraction the same guidelines warn against ("Don't draw boundaries everywhere. Boundaries cost.").

## Decision

Apply the guidelines selectively:

| Rule                                                                        | Applied        | Notes                                                                                                                                             |
| --------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Naming, function ≤20 lines, file ≤500 lines, max 3 params                   | ✅             | Hard rules across the codebase                                                                                                                    |
| No null returned/passed, no flag args, no comment smells                    | ✅             | Hard rules                                                                                                                                        |
| SOLID for component design                                                  | ✅             | Hard rules                                                                                                                                        |
| FIRST tests, TDD where it pays off, ≥85% coverage on `lib/`, ≥75% on `api/` | ✅             | Per-path coverage thresholds in `vitest.config.ts`                                                                                                |
| No secrets in code, env via `.env.local`                                    | ✅             | Hard rules                                                                                                                                        |
| Screaming Architecture                                                      | ✅             | See ADR 0002                                                                                                                                      |
| Boundary between content/data and presentation                              | ✅             | `content/` is typed data; components consume it                                                                                                   |
| Four-layer Entities/UseCases/Adapters/Frameworks                            | ⚠️ Selectively | Applied only where real logic exists (the contact form: zod-validated payload → use case → Resend adapter). NOT applied to static page rendering. |
| Repository pattern over MDX content                                         | ❌             | Files-as-content; an interface for "load 8 static files" is ceremony                                                                              |

## Consequences

- **Good:** the architecture rigour shows up where it matters (contact form, rate limiter, observability hook) and stays out of the way for static rendering.
- **Good:** new contributors do not pay the cognitive cost of four-layer abstraction for components that just render typed content.
- **Bad:** a future "we should add a database" decision will require re-introducing the layers properly. That is fine — defer the decision until the requirement is real.

## Alternatives considered

- **Apply the full literal split everywhere.** Rejected by the guidelines themselves ("Don't draw boundaries everywhere").
- **Skip Clean Architecture entirely.** Would have lost the discipline on the contact form, which IS real logic worth protecting.
