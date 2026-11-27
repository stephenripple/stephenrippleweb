// All site content lives here so it can be edited without touching layout code.
// Source: LinkedIn profile (Nov 2026) + previous stephenripple.com copy.

export const person = {
  name: 'Stephen Ripple',
  title: 'Solutions Architect',
  company: 'JM Family Enterprises',
  location: 'South Florida',
  tagline:
    'I design systems that turn business problems into dependable software — and I still write the code.',
  summary: [
    'I’m a solutions architect with 20+ years in software, from writing C# back ends to leading development organizations. Today I work at JM Family Enterprises, shaping how business needs become cloud architecture: choosing the approach, guiding the teams that build it, and making sure what ships actually solves the problem.',
    'Before that I spent 13 years at Kaplan University, growing from Software Engineer I to Senior Development Manager — building an enterprise service bus, mobile APIs, LMS and library integrations, and eventually running a 20+ person team behind more than 100 marketing websites.',
    'Technology has been my thing since I was eight, when a few lines of BASIC changed the colors on a screen and made the possibilities feel endless. Off the clock I tinker with home automation, Raspberry Pi builds, console mods and game development, and I travel whenever I can — so far Spain, Germany, Switzerland, the Netherlands, Japan, Peru and Bolivia.',
  ],
  focus: [
    'Solution & cloud architecture (AWS, Azure)',
    'Full-stack .NET / C#',
    'Identity, SSO & integrations',
    'CI/CD & platform modernization',
    'Lean & continuous improvement',
    'Building and leading dev teams',
  ],
};

// Contact values are stored reversed and base64-encoded, then assembled in the
// browser, so they never appear as plain text in the HTML that scrapers read.
const enc = (s: string) => Buffer.from([...s].reverse().join('')).toString('base64');
export const contact = {
  email: enc('stephenripple@gmail.com'),
  phone: enc('+15612064718'),
  phoneDisplay: enc('(561) 206-4718'),
};

export const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stephen-ripple-9681614/' },
  { label: 'GitHub', href: 'https://github.com/stephenripple' },
];

export type Role = {
  title: string;
  dates: string;
  summary?: string;
  highlights?: { name: string; text: string }[];
};
export type Job = { company: string; note?: string; location?: string; dates: string; roles: Role[] };

export const experience: Job[] = [
  {
    company: 'JM Family Enterprises',
    location: 'Deerfield Beach, FL',
    dates: '2019 — Present',
    roles: [
      {
        title: 'Solutions Architect',
        dates: 'Current',
        summary:
          'Design solution frameworks for specific business problems, provide technical leadership and guidance through delivery, and keep business and IT strategy aligned.',
      },
      {
        title: 'Delivery Architect',
        dates: '2022',
      },
      {
        title: 'Technical Lead',
        dates: '2019 — 2022',
        highlights: [
          {
            name: 'Dealership portal re-platforming',
            text: 'Moved business-critical platforms and applications to AWS, including SharePoint Online integration, refactoring code bases as needed and introducing a CI/CD pipeline.',
          },
          {
            name: 'Virtual stakeholders conference',
            text: 'When the pandemic moved the conference online for the first time, implemented Azure AD SSO (including for not-yet-integrated acquisitions) and validated network and streaming capacity for HD video to 14 locations and 4,500+ viewers.',
          },
          {
            name: 'Audit management',
            text: 'Built an Azure-based SSO integration with a vendor SaaS product, with identity and access configuration meeting current access regulations.',
          },
        ],
      },
    ],
  },
  {
    company: 'Signature Consultants',
    note: 'Contract with JM Family',
    location: 'Deerfield Beach, FL',
    dates: '2019',
    roles: [
      {
        title: 'Technical Lead',
        dates: 'Jul — Dec 2019',
        highlights: [
          {
            name: 'RPA disaster recovery',
            text: 'Led implementation of disaster recovery for the company’s Robotic Process Automation platform, working with networking and infrastructure to make it more robust and extensible.',
          },
          {
            name: 'Physical security integration',
            text: 'Single-handedly built integrations between internal systems of record, a new cloud SaaS platform and biometric devices — replacing error-prone manual steps while protecting personal data with InfoSec.',
          },
        ],
      },
    ],
  },
  {
    company: 'Kaplan University',
    dates: '2006 — 2019',
    roles: [
      {
        title: 'Senior Development Manager',
        dates: '2015 — 2019',
        summary:
          'Managed development across multiple teams and platforms, used lean methods to drive continuous improvement department-wide, reported to executive leadership, and coached and hired developers.',
        highlights: [
          {
            name: 'Marketing',
            text: 'Led a 20+ person development team supporting product lines from 100+ websites to television commercials.',
          },
          {
            name: 'Registrar',
            text: 'Architected an internal system helping the registrar and admissions work with prospective students who have prior coursework, kept in sync with the student system of record.',
          },
          {
            name: 'Library integration',
            text: 'Moved academic library resources from on-premises to SaaS with full feature parity, using federated identity.',
          },
          {
            name: 'Career services',
            text: 'Integrated career-portfolio products and job-listing providers to help students move into the workforce.',
          },
        ],
      },
      {
        title: 'Software Engineer III',
        dates: '2011 — 2015',
        summary:
          'Architected large-scale, business-critical applications and set development standards for code quality and productivity.',
        highlights: [
          {
            name: 'Innovation team lead',
            text: 'Recruited and led a team to incubate new product ideas using emerging technology.',
          },
          {
            name: 'Mobile platform',
            text: 'Built the REST API behind the iPad, iPhone, Android and responsive web apps.',
          },
          {
            name: 'Activity river stream',
            text: 'Designed an event system that fanned out student notifications — grades, seminars and more — over push and SMS.',
          },
          {
            name: 'Lifelong learning platform',
            text: 'Incubated a system matching learning material to career goals using deep learning and graph databases.',
          },
        ],
      },
      {
        title: 'Software Engineer II',
        dates: '2009 — 2011',
        highlights: [
          {
            name: 'Enterprise service bus',
            text: 'Architected a department-wide ESB and service-oriented architecture with RESTful versioning standards.',
          },
          {
            name: 'Grade change integration',
            text: 'Built compliant grade-change flows across systems with a configurable, finely-authorized admin module.',
          },
        ],
      },
      {
        title: 'Software Engineer I',
        dates: '2006 — 2009',
        summary:
          'Ported legacy applications to C# .NET and integrated a new LMS on an aggressive timeline — enrollment sync, grade calculation, reporting and bulk course creation.',
      },
    ],
  },
  {
    company: 'Software Architects',
    dates: '2005 — 2006',
    roles: [
      {
        title: 'Software Engineer (Consultant)',
        dates: '2005 — 2006',
        summary: 'Helped clients with everything from reporting to financial operations and customer-facing applications.',
      },
    ],
  },
];

export const recognition = [
  { year: '2020', text: '3rd of 126 in an internal Pluralsight Azure challenge — a proof of concept using Azure Cognitive Services to gauge team morale.' },
  { year: '2019', text: '3rd place in a hackathon for a proof of concept of a fully self-service car-buying experience with automated delivery.' },
];

export const education = [
  { school: 'Kaplan University', degree: 'M.S., Information Technology', years: '2009 — 2011', note: '3.92 GPA' },
  { school: 'Florida State University', degree: 'B.S., Information Science', years: '1998 — 2002' },
];

export const credentials = [
  { name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', year: '2018' },
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', year: '2017' },
  { name: 'Lean Green Belt', issuer: 'Kaplan University', year: '2017' },
  { name: 'Leadership Development for Engineers', issuer: 'Coursera', year: '2018' },
  { name: 'RPA: IT Infrastructure Administrator', issuer: 'Automation Anywhere', year: '2019' },
];

// DRAFT: placeholders built from interests Stephen has mentioned — replace with real projects.
export const lab = [
  {
    name: 'This website',
    text: 'Rebuilt with Astro and deployed from GitHub Actions to S3 and CloudFront using short-lived OIDC credentials — no stored AWS keys.',
    tags: ['Astro', 'AWS', 'CI/CD'],
  },
  {
    name: 'Smart home',
    text: 'Home automation and IoT projects around the house.',
    tags: ['IoT', 'Automation'],
  },
  {
    name: 'Raspberry Pi builds',
    text: 'Small hardware and open-source projects on the Pi.',
    tags: ['Hardware', 'Linux'],
  },
  {
    name: 'Game development',
    text: 'Unity experiments and console modding.',
    tags: ['Unity', 'C#'],
  },
];

export const testimonial = {
  quote:
    'Stephen has countless times proved to be extremely valuable for the business in very challenging situations. He never hesitates to help team members when they get blocked on an important task. Great team player, great person.',
  author: 'Nahuel Prieto',
  source: 'LinkedIn recommendation',
};
