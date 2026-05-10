export interface ExperienceEntry {
  readonly title: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly summary: string;
  readonly highlights: ReadonlyArray<string>;
  readonly impact: string;
  readonly stack?: ReadonlyArray<string>;
}

export const experience: ReadonlyArray<ExperienceEntry> = [
  {
    title: 'Founder & President',
    company: 'CapacityDey Tech Club',
    location: 'Abuja, Nigeria',
    period: '01/2024 – Present',
    summary:
      'Founded a developer community bridging technical skills and real-world client and business needs.',
    highlights: [
      'Mentored 50+ developers, leading a core team of 10+, embedding SDLC, UX, and security-focused practices.',
      'Delivered GT Augment (no-code AR platform) and BioMedigo (hospital record tracker for Africa).',
      'Architected secure AWS cloud infra: IAM role design, S3 encryption, API Gateway access control, GitLab CI/CD vulnerability scans.',
      'Conducted internal cloud security workshops on DevSecOps, secret management, and infrastructure hardening.',
    ],
    impact:
      'Graduated client-ready engineers, improved cloud deployment security posture by 60%, shipped production-grade solutions.',
  },
  {
    title: 'Software Engineer',
    company: 'TechVenia',
    location: 'Brussels, Belgium',
    period: '04/2023 – Present',
    summary: 'Projects: SciVenia and Mubazar.',
    highlights: [
      'Deployed scalable backend infrastructure on Azure EC2 with Dockerized containers.',
      'Integrated Application Insights for observability; implemented rate limiting + JWT refresh.',
      'Optimized Redis caching for 3× faster real-time messaging throughput.',
      'Built real-time group chat and notifications with WebSockets + Redis.',
      'Introduced AI-assisted workflows for research, prototyping, and integration.',
    ],
    impact:
      'More stable releases, faster feature throughput, better UX (real-time collab), and a cleaner codebase across two active products.',
    stack: ['Laravel', 'React', 'Azure', 'Docker', 'Redis', 'WebSockets', 'Stripe'],
  },
  {
    title: 'Technical Lead / Software Engineer',
    company: 'GT Merch',
    location: 'Innopolis, Russia',
    period: '10/2023 – 01/2025',
    summary: 'Sole engineer responsible for all tech-related solutions.',
    highlights: [
      'Re-designed GT Merch (WordPress) with multi-store (Nigeria/Russia), payments, delivery, translations.',
      'Proposed and oversaw GT Augment (AR SaaS): business dashboard + mobile scanner.',
      'Trained staff to self-manage WordPress, cutting external dependence.',
    ],
    impact:
      'Faster site, lower hosting costs, cross-border operations, AR product deepening customer engagement.',
    stack: ['WordPress', 'PHP', 'AR', 'Multi-store'],
  },
  {
    title: 'Co-Founder & Software Engineer',
    company: 'CoinForBarter',
    location: 'Lagos, Nigeria',
    period: '08/2021 – 01/2023',
    summary: 'Crypto payment gateway (web, mobile, POS) for African markets.',
    highlights: [
      'Focused on product design, new features, and deep debugging across dashboard and mobile.',
      'Built Scan-to-Pay, Point of Sale, and a PHP SDK for merchant integrations.',
      'Supported beta launch; received YC interest before regulatory wind-down.',
    ],
    impact:
      'Delivered a complete multi-surface payment experience and a developer-friendly SDK in a challenging market.',
    stack: ['PHP', 'Laravel', 'Mobile', 'POS', 'Crypto'],
  },
  {
    title: 'Technical Support Engineer',
    company: 'Tek Experts',
    location: 'Lagos, Nigeria',
    period: '10/2021 – 09/2022',
    summary: 'Azure Web Apps, Azure DevOps/GitHub Actions, ARM/Terraform, Docker/Kubernetes.',
    highlights: [
      'Diagnosed pipeline failures, config drift, container/app startup errors, and RBAC issues for enterprise customers.',
      'Drove cost-savings guidance (>$200/month per customer) via right-sizing and lifecycle policies.',
      'Consistently among top performers with 5-star customer ratings.',
    ],
    impact: 'Faster incident resolution, fewer repeat escalations, happier customers.',
    stack: ['Azure', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Technical Lead / Full-stack Engineer',
    company: 'FirstFounders Inc.',
    location: 'Lagos, Nigeria',
    period: '08/2020 – 08/2021',
    summary: 'Progressed Intern → Frontend → Full-stack → Tech Lead within a year.',
    highlights: [
      'Built client sites/systems: KairosTreats, Ten4Style, Tulip Foundation, Ara Foundation, Rebirth Africa, FirstChoice.',
      'Led PockerLawyer (legal-tech), Uncircle (health-tech), and FirstChoice replatform.',
      'Owned deployments and servers; ran incident-free launches.',
    ],
    impact: 'Multiple production deliveries, stronger engineering practices, dependable releases.',
    stack: ['React', 'Node.js', 'PHP', 'WordPress'],
  },
];
