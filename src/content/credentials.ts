export interface EducationEntry {
  readonly degree: string;
  readonly institution: string;
  readonly location: string;
  readonly period: string;
  readonly detail: string;
}

export interface CertificationEntry {
  readonly title: string;
  readonly issuer: string;
  readonly period: string;
  readonly topics: ReadonlyArray<string>;
  readonly verifyUrl?: string;
}

export const education: ReadonlyArray<EducationEntry> = [
  {
    degree: 'B.Sc. Mathematics',
    institution: 'University of Nigeria',
    location: 'Nsukka, Nigeria',
    period: '11/2014 – 07/2018',
    detail: 'Second Class Upper (Honours)',
  },
  {
    degree: 'M.Sc. in Computer Science',
    institution: 'Innopolis University',
    location: 'Innopolis, Russia',
    period: '08/2022 – 08/2024',
    detail: 'CGPA 4.55 / 5 · Software Engineering track',
  },
];

export const certifications: ReadonlyArray<CertificationEntry> = [
  {
    title: 'IT Security: Defense against the digital dark arts',
    issuer: 'Coursera',
    period: '07/2021 – 10/2021',
    topics: ['Network security', 'Authentication', 'Encryption', 'Threat mitigation'],
    verifyUrl: 'https://coursera.org/verify/3MQYPF9MG6CW',
  },
  {
    title: 'Intro to Programming Nanodegree',
    issuer: 'Udacity',
    period: '01/2022 – 04/2022',
    topics: ['Python', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Cloud Developer Nanodegree',
    issuer: 'Udacity',
    period: '02/2022 – 08/2022',
    topics: ['AWS', 'Serverless', 'CI/CD', 'Microservices'],
  },
];
