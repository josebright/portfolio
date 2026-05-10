export interface CaseStudy {
  readonly problem: string;
  readonly approach: ReadonlyArray<string>;
  readonly outcome: ReadonlyArray<string>;
  readonly lessons: ReadonlyArray<string>;
}

export interface Project {
  readonly slug: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly highlights: ReadonlyArray<string>;
  readonly stack: ReadonlyArray<string>;
  readonly impact?: string;
  readonly links: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  readonly caseStudy?: CaseStudy;
}

export const projects: ReadonlyArray<Project> = [
  {
    slug: 'scivenia-mubazar-cloud',
    title: 'SciVenia & Mubazar Cloud Deployment',
    tagline: 'AWS · GitLab CI/CD · EC2 · multi-region',
    summary:
      'Deployed and managed cloud infrastructure on AWS using GitLab CI/CD pipelines and EC2 containerized environments for two production platforms.',
    highlights: [
      'Designed CI/CD pipelines automating build, test, and deploy across staging and production.',
      'Configured EC2 with load balancing and auto-scaling for multi-region availability.',
      'Integrated monitoring, log aggregation, and rollback automation.',
      'Hardened deployments with IAM roles, security groups, and secrets management.',
    ],
    impact: '40% faster release cycle · 99.9% uptime · improved incident visibility.',
    stack: ['AWS', 'GitLab CI/CD', 'EC2', 'Docker', 'IAM', 'CloudWatch'],
    links: [],
    caseStudy: {
      problem:
        'Two TechVenia products — SciVenia (scientific event platform) and Mubazar (musician opportunity marketplace) — needed reliable, secure, multi-region deployments without an internal platform team. Releases were ad-hoc, secrets lived in environment files, and rollback was manual.',
      approach: [
        'Replaced manual SSH deploys with GitLab CI/CD pipelines: lint → test → build → image → deploy.',
        'Containerised both apps and ran them on EC2 with an Application Load Balancer and auto-scaling groups across two AWS regions.',
        'Moved secrets out of repo into AWS Secrets Manager with per-environment IAM roles for the CI runners.',
        'Wired CloudWatch metrics, structured JSON logs to a central aggregator, and added a one-click rollback job that re-deploys the previous image tag.',
      ],
      outcome: [
        'Release cycle dropped from ~3 hours of operator time to ~25 minutes of pipeline time — 40% faster end-to-end.',
        'Service uptime measured at 99.9% over the first quarter post-migration.',
        'Mean time to detect production regressions fell because every release shipped its own dashboards.',
        'Onboarding a new engineer to a deploy now takes one short walkthrough instead of a half-day knowledge transfer.',
      ],
      lessons: [
        'Treat the pipeline as the product — every deploy is the result of a tested, versioned process, not muscle memory.',
        'Push secrets and config into managed services on day one; refactoring them out later costs more than doing it right initially.',
        'A rollback button you do not trust is a button you will not press at 3am. Practise the rollback in staging weekly.',
      ],
    },
  },
  {
    slug: 'smart-home-cve-recommender',
    title: 'Smart Home CVE Vulnerabilities Recommendation App',
    tagline: 'AI-powered IoT vulnerability triage',
    summary:
      'AI-powered system that analyzes NVD data, detects vulnerabilities, and recommends mitigations for IoT devices, with an API and dashboard.',
    highlights: [
      'API for vulnerability scoring and lookup.',
      'Dashboard for search, filter, and prioritisation.',
      'Automated risk triage with improved remediation accuracy.',
    ],
    stack: ['Python', 'AI/ML', 'NVD', 'REST API'],
    links: [
      { label: 'API repo', href: 'https://github.com/josebright/smart-home-vulnerabilities' },
      { label: 'Dashboard repo', href: 'https://github.com/josebright/shd-risk-assessment' },
    ],
    caseStudy: {
      problem:
        'Smart home device owners and small operators routinely run firmware with known vulnerabilities and no good way to triage risk. The NVD feed lists tens of thousands of CVEs; mapping which apply to a specific device, with what severity, is tedious manual work that nobody actually does.',
      approach: [
        'Built a service that ingests NVD data and matches CVEs to a registered device fingerprint (vendor, model, firmware version).',
        'Layered an AI scoring model over the raw CVSS scores to weight vulnerabilities by exploitability in a smart-home context (network exposure, privileges required, attack complexity).',
        'Exposed a small REST API for programmatic lookup and a dashboard for human triage with search, filter, and priority sort.',
        'Generated mitigation suggestions per CVE — patch links, configuration hardening, or network isolation steps when no patch exists.',
      ],
      outcome: [
        'Triage time per device dropped from "I will not bother" to a few seconds of automated lookup.',
        'Remediation accuracy improved because suggestions were tied to the specific firmware version instead of generic advice.',
        'The API surface let other tools (asset management, SIEM) integrate without re-implementing the matching logic.',
      ],
      lessons: [
        'Raw CVSS is a poor priority signal on its own. Context (where the device sits, who can reach it) matters more than the headline score.',
        'AI as a scoring layer over deterministic data is more useful than AI as the source of truth — the dashboard always shows the underlying CVE so users can verify.',
        'Ship the API first, dashboard second. Other tools need the data; humans need the UI. Both audiences win when the data layer is clean.',
      ],
    },
  },
  {
    slug: 'company-info-app',
    title: 'Company Info App',
    tagline: 'React · Apollo GraphQL · SSR',
    summary:
      'SSR company-profiles application with secure auth, create/edit flows, logo upload with size validation, and deep-link prefill.',
    highlights: [
      'Apollo GraphQL queries/mutations with robust error and empty-state handling.',
      'Logo upload (JPEG/PNG) with size validation.',
      'Deep-link prefill via query params and a list/detail view for quick retrieval.',
    ],
    stack: ['React', 'Apollo GraphQL', 'Next.js (SSR)', 'Validation'],
    links: [],
    caseStudy: {
      problem:
        'A multi-tenant company-profiles app needed fast first-paint, deep-linkable list/detail views, and a forgiving create/edit flow that handled image uploads without blowing up on invalid files. The previous implementation was a CSR app that loaded the whole catalogue before showing anything and had no upload validation.',
      approach: [
        'Server-rendered the list and detail routes via Next.js so the first paint had real content and the URL alone was a shareable record.',
        'Modelled the data layer in Apollo GraphQL with explicit error and empty-state branches — a missing record is not the same as an error, and the UI should not pretend they are.',
        'Validated logo uploads at the boundary: file type (JPEG / PNG), size cap, and dimension check, with clear inline feedback rather than a generic toast.',
        'Used query parameters for deep-link prefill on the create form so a "share this draft" link was free.',
      ],
      outcome: [
        'First contentful paint was fast enough that the loading shimmer became unnecessary; we removed it.',
        'Upload-related support tickets dropped because rejections happened in the UI with a clear reason instead of failing silently on the server.',
        'Detail pages were deep-linkable, which made customer support and sales hand-offs noticeably easier.',
      ],
      lessons: [
        'Apollo error handling is not free — every query needs an explicit empty/error branch or you ship a broken UI to a real user.',
        'Validate file uploads at the client edge AND the server. Client gives feedback; server is the source of truth.',
        'SSR is the cheapest performance win for content-heavy pages. Reach for it before code-splitting or lazy-loading.',
      ],
    },
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    tagline: 'React · Open-Meteo · offline-first',
    summary:
      'Single-page app with city search, favorites, and notes (add/edit/remove). Offline-first with local persistence and unit tests.',
    highlights: [
      'City search via Open-Meteo with favorites and notes.',
      'Offline-first persistence with local storage.',
      'Modern, accessible UI with unit-test coverage.',
    ],
    stack: ['React', 'LocalStorage', 'Testing'],
    links: [],
    caseStudy: {
      problem:
        'Weather apps usually fail in the moment they matter most — bad signal, no signal, or a flaky API. I wanted a small app that worked offline by default, kept favourites and travel notes between sessions, and stayed accessible without relying on a service worker setup that would itself become a maintenance burden.',
      approach: [
        'Treated the most recent forecast as cached state in `localStorage` so the last good view was always available offline.',
        'Used Open-Meteo (no API key, no quota) and a thin fetch wrapper that fell back to cached data with a clear "stale" indicator.',
        'Modelled favourites and per-city notes as plain serialisable objects — easy to migrate, easy to back up, easy to test.',
        'Wrote unit tests around the storage layer because that is where this kind of app actually breaks.',
      ],
      outcome: [
        'The app survived flaky networks and full offline mode without a blank screen or crash.',
        'Favourites and notes persisted across reloads with zero backend.',
        'Test coverage on the storage and formatting modules made future changes safe.',
      ],
      lessons: [
        'Offline-first does not require a service worker. `localStorage` plus a stale indicator solves 80% of the same problem with 5% of the complexity.',
        'For tiny apps, plain serialisable objects beat heavyweight state libraries every time.',
        'The valuable tests are around the boundaries: storage, formatting, fetch fallback. Snapshot tests on the UI add little.',
      ],
    },
  },
  {
    slug: 'loan-database-dashboard',
    title: 'Loan Database Dashboard',
    tagline: 'React · TypeScript · Material UI',
    summary:
      'Admin dashboard with secure login and a clean, responsive Material UI experience. Simulated backends with Mirage JS and JSON Generator.',
    highlights: [
      'TypeScript + hooks for safer state management.',
      'React Router navigation with structured folder conventions.',
      'Simulated backends and persistence via IndexedDB/LocalStorage.',
    ],
    stack: ['React', 'TypeScript', 'Material UI', 'SCSS', 'Mirage JS', 'IndexedDB'],
    links: [{ label: 'Repo', href: 'https://github.com/josebright/lendsqr-fe-test' }],
    caseStudy: {
      problem:
        "Build a loan-management admin dashboard end-to-end without a real backend, while still proving the UI behaves correctly on realistic data, persists across sessions, and stays responsive on a desktop user's typical workflow.",
      approach: [
        'Modelled the API contract first and stood up a Mirage JS server that mirrors it — so the frontend code is identical between mocked and real backends.',
        'Generated realistic-shape data with JSON Generator (varied user states, balances, dates) so visual tests caught real edge cases instead of golden-path-only bugs.',
        'Persisted user state to IndexedDB via a thin storage adapter — survives reload, survives tab close, but resettable for QA.',
        'Used TypeScript end-to-end with strict typing on the API responses and component props; refactors stopped being scary.',
        'Component library: Material UI for the heavy lifting, SCSS modules for the few places MUI was the wrong fit.',
      ],
      outcome: [
        'Local development was fast: no auth setup, no environment juggling, no backend to keep alive.',
        'Edge cases (empty states, partial loads, RBAC mismatches) showed up early because the seeded data forced them.',
        'When the real backend arrived, swapping the Mirage layer for the live API took an afternoon — every component talked to the contract, not to Mirage directly.',
      ],
      lessons: [
        'Mock the API at the contract boundary, not inside components. The blast radius when the real backend arrives stays tiny.',
        'Realistic seed data is part of the test strategy. Five sample rows in five different states catches more bugs than one in the happy path.',
        'TypeScript pays back the most when you refactor — and you will refactor.',
      ],
    },
  },
  {
    slug: 'coinforbarter-php-sdk',
    title: 'CoinForBarter PHP SDK',
    tagline: 'Laravel · merchant integration · webhooks',
    summary:
      'Laravel-friendly SDK to integrate CoinForBarter quickly: auth, charge, verify, and webhooks. Includes examples and tests.',
    highlights: [
      'Auth, charge, verify, webhooks API surface.',
      'Examples and basic tests speed merchant onboarding.',
      'Reduces integration bugs through clear interfaces.',
    ],
    stack: ['PHP', 'Laravel', 'HTTP client', 'Testing'],
    links: [{ label: 'Repo', href: 'https://github.com/josebright/coinforbarter-v1-php-sdk' }],
    caseStudy: {
      problem:
        'CoinForBarter merchants integrating directly against the REST API repeatedly hit the same problems: signing requests, retry logic on flaky networks, parsing webhook signatures, and writing boilerplate around charge / verify / refund flows. Each merchant was solving it on their own — slowly, inconsistently, and often incorrectly.',
      approach: [
        'Designed a small typed client surface around four verbs that mapped to merchant intent: charge, verify, refund, webhooks.',
        'Hid HTTP, signing, idempotency keys, and retry policy inside the SDK so merchants only think in domain terms.',
        'Wrote a Laravel-style facade so it slotted into existing PHP apps with one line of config.',
        'Shipped runnable examples for the three most common scenarios — POS, e-commerce checkout, and webhook receiver.',
      ],
      outcome: [
        'New merchant integrations went from days to hours; the SDK README is the integration guide.',
        'Webhook signature handling was centralised — eliminated a class of replay-attack mistakes that early integrators made.',
        'Bug reports dropped to almost zero because the surface area got smaller and was tested.',
        'Merchants who upgraded got new endpoints automatically — no support ticket queue.',
      ],
      lessons: [
        "A good SDK is a contract, not a wrapper. Design the verbs from the merchant's problem, not the API's shape.",
        "Idempotency, retries, and signature verification belong in the SDK, not in every merchant's integration code.",
        'The fastest documentation is a working example. Ship those before the prose.',
      ],
    },
  },
];

export function findProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getCaseStudySlugs(): ReadonlyArray<string> {
  return projects.filter((project) => Boolean(project.caseStudy)).map((project) => project.slug);
}
