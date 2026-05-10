export interface UsesGroup {
  readonly title: string;
  readonly items: ReadonlyArray<{ readonly name: string; readonly note?: string }>;
}

export const usesGroups: ReadonlyArray<UsesGroup> = [
  {
    title: 'Editor',
    items: [
      { name: 'VS Code', note: 'with TypeScript, ESLint, and Prettier extensions' },
      { name: 'GitHub Copilot' },
      { name: 'Vim keybindings' },
    ],
  },
  {
    title: 'Languages I reach for first',
    items: [
      { name: 'TypeScript', note: 'frontend and Node services' },
      { name: 'Python', note: 'data work, scripting, AI integration' },
      { name: 'PHP', note: 'Laravel projects, legacy hardening' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Next.js (App Router)', note: 'this site' },
      { name: 'React + Material UI' },
      { name: 'NestJS', note: 'backend services with clean module boundaries' },
      { name: 'Laravel', note: 'when the team is PHP-native' },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { name: 'AWS', note: 'Lambda, EC2, S3, CloudFormation, IAM' },
      { name: 'Azure', note: 'Web Apps, DevOps, Storage, RBAC' },
      { name: 'Vercel', note: 'preview deploys for frontends and edge runtimes' },
    ],
  },
  {
    title: 'CI/CD and ops',
    items: [
      { name: 'GitHub Actions', note: 'default for new projects' },
      { name: 'GitLab CI/CD', note: 'long-tail TechVenia work' },
      { name: 'Docker' },
      { name: 'Application Insights / CloudWatch', note: 'observability before features' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Vitest + React Testing Library' },
      { name: 'Jest', note: 'legacy projects' },
      { name: 'Cypress', note: 'when E2E coverage actually matters' },
    ],
  },
  {
    title: 'Hardware',
    items: [
      { name: 'MacBook Pro' },
      { name: 'External monitor', note: 'one big horizontal screen, no clamshells' },
      { name: 'Mechanical keyboard' },
    ],
  },
];
