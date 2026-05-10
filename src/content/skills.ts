export interface SkillGroup {
  readonly name: string;
  readonly items: ReadonlyArray<string>;
}

export const skillGroups: ReadonlyArray<SkillGroup> = [
  {
    name: 'Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Dart', 'Bash'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'AngularJS', 'Redux', 'Material UI', 'HTML', 'SCSS'],
  },
  {
    name: 'Mobile',
    items: ['Flutter', 'React Native'],
  },
  {
    name: 'Backend & APIs',
    items: ['Node.js', 'NestJS', 'Laravel', 'REST', 'GraphQL', 'JWT/Auth', 'Prisma'],
  },
  {
    name: 'Data & Realtime',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'WebSockets', 'Pub/Sub', 'Data Modeling'],
  },
  {
    name: 'Cloud & Infra',
    items: [
      'AWS (Lambda, EC2, S3, CloudFormation)',
      'Azure (Web Apps, DevOps, Storage, RBAC)',
      'Firebase',
      'DigitalOcean',
    ],
  },
  {
    name: 'CI/CD & DevOps',
    items: ['Git', 'Docker', 'Kubernetes', 'GitHub Actions', 'Azure DevOps', 'CircleCI'],
  },
  {
    name: 'Security',
    items: ['IAM', 'RBAC', 'KMS', 'Secrets Management', 'OWASP', 'Snyk', 'Cloud Monitoring'],
  },
  {
    name: 'Payments',
    items: ['Stripe', 'PayPal', 'Flutterwave', 'Paystack'],
  },
  {
    name: 'Testing',
    items: ['Jest', 'PHPUnit', 'Cypress', 'Postman', 'Swagger (OpenAPI)'],
  },
];
