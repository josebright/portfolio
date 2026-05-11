export const profile = {
  name: 'Uchenna Bright Ugwumadu',
  shortName: 'Bright',
  role: 'Cloud Software Engineer | Full-Stack Developer',
  location: 'Abuja, Nigeria · Remote',
  email: 'uchennaugwumadu8@gmail.com',
  phone: '+234 816 428 3565',
  summary:
    'Full-stack software engineer with 5+ years of experience in cloud, AI integration, and scalable systems design. Track record across startups, NGOs, and international teams delivering production-ready applications in fintech, healthtech, AR SaaS, e-commerce, and scientific collaboration. Passionate about AI-powered applications, real-time systems, and software that scales globally.',
  panels: [
    {
      title: 'Who Is Bright?',
      body: 'Bright is a software engineer, tech mentor, and digital growth strategist passionate about helping people and businesses use technology purposefully. He blends technical excellence with a people-first approach, simplifying tech for impact.',
    },
    {
      title: 'What Can I Do?',
      body: 'I support three groups: I mentor young IT enthusiasts to launch strong careers via real-world projects; I provide startups and small businesses with affordable, smart websites and automation to boost their online sales; and I implement automation tools for organizations to streamline processes.',
    },
    {
      title: 'What Sets Me Apart?',
      body: 'A rare mix of technical depth and business sense. I write code that drives real outcomes. Proven ability to mentor, strategize, and deliver. From community-building to scalable software. Every project aligns with measurable impact and growth.',
    },
    {
      title: 'How Do I Lead?',
      body: 'By leading with clarity, empathy, and innovation. Teaching others to understand not just how to build tech, but why. I build teams that think like problem solvers, not just coders.',
    },
    {
      title: 'What Is My Aim?',
      body: 'To build a bridge between technology, business, and people. Empowering a new generation of African innovators and helping startups grow smarter, faster, and globally.',
    },
    {
      title: 'What Do I Stand For?',
      body: 'Empowerment through knowledge. Accessibility in technology. Integrity in execution. I stand for helping others rise by making technology human, useful, and sustainable.',
    },
  ],
  social: [
    { label: 'GitHub', href: 'https://github.com/josebright', handle: '@josebright' },
    { label: 'GitLab', href: 'https://gitlab.com/josebright', handle: '@josebright' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/josebright', handle: 'josebright' },
    { label: 'Credly', href: 'https://credly.com/users/uchenna-ugwumadu/badges', handle: 'badges' },
  ],
} as const;

export type Profile = typeof profile;
