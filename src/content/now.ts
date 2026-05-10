export interface NowSection {
  readonly title: string;
  readonly items: ReadonlyArray<string>;
}

export const nowUpdatedAt = '2026-05-10';

export const nowSections: ReadonlyArray<NowSection> = [
  {
    title: 'Building',
    items: [
      'TechVenia (SciVenia & Mubazar) — feature work, performance hardening, real-time collaboration.',
      'CapacityDey Tech Club — graduating client-ready engineers in Abuja.',
      'This portfolio — turning my engineering practice into a public artefact.',
    ],
  },
  {
    title: 'Learning',
    items: [
      'Cloud security patterns at scale — moving beyond IAM hygiene into SIEM, threat modelling, and OWASP-aligned CI checks.',
      'AI-assisted development workflows — making prototypes shippable in hours, not days.',
      'Writing — turning project notes into essays that other engineers can use.',
    ],
  },
  {
    title: 'Reading and watching',
    items: [
      'Designing Data-Intensive Applications · Kleppmann — re-reading the consistency chapters.',
      'The Pragmatic Engineer · Gergely Orosz — staying current on industry shape.',
    ],
  },
  {
    title: 'Wanting',
    items: [
      'A staff-engineer-shaped role at a company shipping software that actually matters.',
      'More mentees — junior engineers in Africa who want to ship real software.',
    ],
  },
];
