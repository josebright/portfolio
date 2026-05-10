# Engineering Guidelines

Clean Code & Clean Architecture — based on the works of Robert C. Martin (Uncle Bob).
**Mandatory for all engineers on this project.**

## How to Use This Document

These standards govern the project. Every engineer reads them, follows them, and enforces them in code review.

- Treat the rules as defaults. Deviations require justification in the PR description.
- Code review must reject PRs that violate the hard rules (function size, file size, naming, dependency direction).
- If a rule conflicts with reality on a specific task, raise it with a tech lead before bending it. Do not silently bend it.
- Tests are not optional. Untested code is broken code, regardless of whether it currently works.

---

## 1. Naming

**DO**

- Use intention-revealing names. The name must answer _why_ it exists, _what_ it does, and _how_ it is used.
- Use pronounceable names: `generationTimestamp`, not `genymdhms`.
- Use searchable names. Single letters allowed only inside loops shorter than 5 lines.
- Pick one word per concept across the codebase. If we use `fetch` for HTTP, never use `get` or `retrieve` for the same operation.
- Class names are noun phrases (`Customer`, `OrderProcessor`). Method names are verb phrases (`saveOrder`, `calculateTotal`).
- Use solution-domain names where standard (`Factory`, `Visitor`) and problem-domain names everywhere else.

**DON'T**

- No disinformation. Don't call something `accountList` if it isn't a List.
- No names that differ only slightly: `XYZControllerForEfficientHandling` vs `XYZControllerForEfficientStorage`.
- No Hungarian notation, no `m_` or `_` prefixes for members, no type encoding in names.
- No puns, no jokes, no cultural references, no abbreviations except universally known ones (URL, ID, HTTP).
- No mental-mapping single letters (`r`, `x`, `tmp`) outside tiny scopes.

---

## 2. Functions

**DO**

- Functions must be small. **Hard ceiling: 20 lines. Target: under 10 lines.**
- A function does one thing at one level of abstraction. If you can extract another function with a meaningful name from inside it, extract it.
- Use descriptive names, even long ones. A 40-character function name beats a 4-line comment.
- **Maximum 3 parameters.** Zero, one, or two are preferred. If you need more, group them into an object.
- Use exceptions, not error codes.
- Extract every try/catch body into its own function.
- A function either does something (command) or answers something (query). Never both.
- Every function must be unit-testable in isolation. If it isn't, it's wrong.

**DON'T**

- No function longer than 20 lines. No exceptions for "just this once."
- No flag arguments (`render(true)`). Split into two functions.
- No output arguments. Return values.
- No duplicated code. If you copy-paste, extract a function.
- No hidden side effects. If a function called `isValid()` also modifies state, that is a bug.
- Don't return null. Throw, or return Optional / a special-case object / an empty collection.
- Don't pass null. If a parameter can be absent, the function signature must say so explicitly.

---

## 3. Comments

**DO**

- Explain **WHY**, never **WHAT**. The code shows what.
- Comments are allowed for: legal headers, public API documentation, warnings about consequences, TODOs with a ticket number, and explanations of non-obvious algorithms or business rules.
- Treat the urge to write a comment as a first signal that the code itself isn't expressive enough. Try renaming or extracting first.

**DON'T**

- No comments to explain bad code. Rewrite the code.
- No redundant comments that restate what the code already says.
- No commented-out code. Delete it. Git remembers.
- No journal/changelog comments at the top of files. That's what version control is for.
- No misleading or stale comments. A wrong comment is worse than no comment.
- No closing-brace comments (`// end if`).
- No author tags, no signatures, no `// added by X on Y`.

---

## 4. Formatting

**DO**

- Files target **200 lines**. **Hard ceiling: 500 lines.** Above 500, split the file.
- Lines target **100 characters**. **Hard ceiling: 120.**
- Group related code vertically. Separate distinct concepts with one blank line.
- Declare variables as close to their use as possible.
- Caller above callee in the file. Read top-down like a newspaper.
- Team formatter and linter config is non-negotiable. Run it on save.

**DON'T**

- No 1000-line files.
- No personal style preferences that override the team config.
- No scattering related code across the file.

---

## 5. Objects and Data Structures

**DO**

- Objects expose behavior and hide data. Data structures expose data and have no behavior. Pick one per type.
- Follow the **Law of Demeter**: a method may call methods on its own object, its parameters, objects it creates, and its direct fields. That's it.
- Keep classes focused. One responsibility, one reason to change.

**DON'T**

- No hybrids that mix object behavior with public data fields.
- No reflex getters/setters that just expose internals. If you're writing `setX`/`getX` for every field, you have a data structure, not an object.
- No train wrecks: `a.getB().getC().getD().doSomething()`.

---

## 6. Error Handling

**DO**

- Use exceptions, not return codes.
- Write the try/catch/finally first when coding error paths, then fill in the happy path.
- Provide context in every exception: what was being attempted, with what inputs.
- Define exception classes based on how the caller will catch them, not how the error was generated.
- Wrap third-party APIs behind your own interfaces so you control the dependency.

**DON'T**

- Don't return null. Don't pass null.
- Don't swallow exceptions silently. Logging without rethrowing is silent swallowing.
- Don't use exceptions for normal control flow.

---

## 7. Tests

**DO**

- Follow TDD: write a failing test first, write the minimum code to pass, then refactor.
- Test code is production code. It must be as clean as the system it tests.
- One assertion per test, or one logical concept per test.
- Tests must be **FIRST**: Fast, Independent, Repeatable, Self-validating, Timely.
- Use the Arrange-Act-Assert (or Given-When-Then) pattern. Each section visually separated.
- Coverage target: **90% for business logic, 100% for use cases.** Don't game the metric — coverage without assertions is meaningless.
- Every bug fix starts with a failing test that reproduces the bug.

**DON'T**

- No untested code merged to main. Period.
- No tests that depend on each other or on execution order.
- No tests that rely on real network, real database, or real time. Use fakes/mocks at boundaries.
- No skipped tests sitting in the repo. Either fix them or delete them.
- No "this is too simple to test." If it's too simple to test, it's too simple to break — but it will.

---

## 8. Classes

**DO**

- Keep classes small. Measure by responsibilities, not lines, but as a rule of thumb: **under 200 lines.**
- **Single Responsibility Principle:** a class has one and only one reason to change. One actor it answers to.
- Maximize cohesion: most methods should use most fields.
- Organize for change. Put volatile concerns behind interfaces.

**DON'T**

- No god classes. If a class has "Manager", "Processor", or "Handler" in its name and 30+ methods, it's wrong.
- No mixing of business logic with infrastructure (DB calls, HTTP calls, file I/O) in the same class.

---

## 9. SOLID Principles (Mandatory)

Every engineer must internalize these. They will be referenced by name in code review.

- **Single Responsibility** — a module has one reason to change. One actor.
- **Open/Closed** — open for extension, closed for modification. Add behavior by adding code, not by editing existing code.
- **Liskov Substitution** — subtypes must be usable wherever their base type is used, with no surprises.
- **Interface Segregation** — many small, client-specific interfaces beat one fat interface.
- **Dependency Inversion** — depend on abstractions, not concretions. High-level modules must not depend on low-level modules; both depend on abstractions.

---

## 10. Architecture: The Dependency Rule

This is the hard rule of our codebase architecture. It will be enforced by code review and, where possible, by tooling.

**DO**

- Source code dependencies point **INWARD** only — from details toward policy.
- Inner layers know nothing about outer layers. Entities know nothing about use cases. Use cases know nothing about controllers, databases, or frameworks.
- To cross a boundary outward, define an interface in the inner layer and implement it in the outer layer (Dependency Inversion).

**DON'T**

- Business rules must NEVER import from frameworks, databases, HTTP libraries, or UI code.
- No inner layer may reference any class from an outer layer. Period.
- No ORM annotations on entities. No `@Entity`, `@Table`, `@Column` inside the domain layer.
- No HTTP request/response objects passed into use cases.

### The Four Layers (inside out)

1. **Entities** — enterprise-wide business rules. Most stable. Pure objects, no dependencies on anything else in the project.
2. **Use Cases** — application-specific business rules. Orchestrate entities to fulfill a single user-facing operation. Depend only on entities and on interfaces they define themselves.
3. **Interface Adapters** — controllers, presenters, gateways, repositories. Translate between use cases and the outside world.
4. **Frameworks & Drivers** — the web framework, database, message queues, external APIs. The volatile outer ring. Treated as plugins.

### Treat Details as Plugins

**DO**

- Database is a detail. Defer the choice as long as possible. The use case must not know if it's Postgres, Mongo, or in-memory.
- Web is a delivery mechanism. The use case must not know whether it was triggered by HTTP, gRPC, a CLI command, or a queue message.
- The framework is a tool. Keep it at arm's length. Wrap it. Be ready to replace it.
- Defer decisions about details until you must make them. Early decisions are uninformed decisions.

**DON'T**

- Don't marry the framework. Spring/Express/Django annotations stop at the controller layer.
- Don't let SQL strings appear outside the repository implementations.
- Don't let HTTP status codes leak into use cases or entities.

### Boundaries

**DO**

- Draw boundaries between things that change for different reasons or at different rates.
- Cross every boundary using Dependency Inversion: inner defines the interface, outer implements it.
- Use the Humble Object pattern at hard-to-test boundaries (UI, DB drivers): keep them thin and dumb, push logic inward.
- Pass simple data structures (DTOs) across boundaries. Never pass entities, ORM objects, or framework objects.

**DON'T**

- Don't draw boundaries everywhere. Boundaries cost. Draw them where change rates differ, not as ceremony.
- Don't pass framework types across boundaries. Convert at the edge.

### Component Rules

- **Common Closure** — classes that change together belong together.
- **Common Reuse** — classes used together belong together; don't force consumers to depend on classes they don't need.
- **Reuse/Release Equivalence** — the unit of reuse is the unit of release. Versioned, documented, deliberate.
- **Acyclic Dependencies** — no cycles in the component dependency graph. Ever. Tooling must enforce this.
- **Stable Dependencies** — depend in the direction of stability. Volatile components depend on stable ones, never the reverse.
- **Stable Abstractions** — the more stable a component, the more abstract it must be. Stable concrete code is a trap.

### Screaming Architecture

**DO**

- Top-level package/folder names must reveal the **DOMAIN**: `Billing/`, `OrderProcessing/`, `Inventory/`, `UserAccounts/`.
- A new engineer should be able to look at the folder structure and tell what the system does.

**DON'T**

- Don't structure the top level by framework concerns: `controllers/`, `models/`, `views/`, `services/`. That tells us _what we used_, not _what we built_.

---

## 11. Engineering Discipline

**DO**

- **Boy Scout Rule:** leave the code cleaner than you found it. Every commit.
- Refactor continuously. Refactoring is part of the work, not a separate phase.
- Care about your code. We treat software as a craft.
- If you spot a violation in someone else's PR, call it out. If you spot one in yours, fix it before pushing.

**DON'T**

- No broken windows. Small messes become big ones, fast — especially across many engineers.
- No "we'll clean it up later." Later does not come.
- No "it works, ship it" over "it works, is tested, is clean, ship it."

---

## 12. Code Review Checklist

Every reviewer must verify the following before approving:

| Check             | What to verify                                                                  |
| ----------------- | ------------------------------------------------------------------------------- |
| Naming            | Names reveal intent, no abbreviations, one word per concept.                    |
| Function size     | No function over 20 lines. No function with more than 3 parameters.             |
| Function purpose  | Each function does one thing at one level of abstraction.                       |
| File size         | No file over 500 lines.                                                         |
| Tests             | New code has tests. Bug fixes have a regression test. Tests are FIRST.          |
| No null           | No null returned, no null passed.                                               |
| No flags          | No boolean flag arguments.                                                      |
| No comments smell | No commented-out code. No redundant comments. No stale comments.                |
| SOLID             | SRP, OCP, LSP, ISP, DIP all hold.                                               |
| Dependency Rule   | No inner layer imports outer layer. No framework code in entities or use cases. |
| Boundaries        | DTOs cross boundaries, not entities or framework objects.                       |
| Error handling    | Exceptions used, context provided, third-party APIs wrapped.                    |
| Component graph   | No new cyclic dependencies introduced.                                          |
| Screaming         | New top-level packages reveal domain, not framework.                            |
| Boy Scout         | PR leaves touched files cleaner than it found them.                             |

---

## 13. Hard Rules — No Exceptions

- **Never commit secrets, API keys, or credentials.** Use `.env.local` (git-ignored) and reference via env vars. The `.env.example` documents required keys without values.
- **Never commit static keys** that should be in env. If it's a secret, it's an env var.
- **No duplication.** Always check whether existing code can be reused or extended before creating a new function/component/module.
- **Always understand existing code before changing it.** If you can adjust an existing function to fit a new request, do that instead of creating a new one.
- **Always use components.** Reuse functions, code, and logic to reduce repetition.
