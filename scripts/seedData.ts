import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  // --- Seed Projects ---
  const projects = [
    {
      title: 'Idea Exchange V1',
      slug: 'idea-exchange-v1',
      description: 'A platform for students to exchange ideas and collaborate.',
      architecture: 'Client-Server',
      features: ['Authentication', 'Real-time collaboration'],
      techStack: ['Next.js', 'Prisma', 'Tailwind CSS'],
      liveUrl: 'https://idea-exchange-v1.onrender.com/',
      status: 'PUBLISHED',
    },
    {
      title: 'Stylish Canvas',
      slug: 'stylish-canvas',
      description: 'A responsive canvas drawing application.',
      architecture: 'SPA',
      features: ['Drawing tools', 'Export capabilities'],
      techStack: ['React', 'HTML5 Canvas'],
      liveUrl: 'https://stylish-canvas.netlify.app/',
      status: 'PUBLISHED',
    },
    {
      title: 'Server Side Sweetness',
      slug: 'server-side-sweetness',
      description: 'A demonstration of server-side rendering patterns.',
      architecture: 'SSR',
      features: ['Dynamic routing', 'API integration'],
      techStack: ['Next.js', 'Node.js'],
      liveUrl: 'https://server-side-sweetness.netlify.app/',
      status: 'PUBLISHED',
    },
    {
      title: 'Input Cuddle',
      slug: 'input-cuddle',
      description: 'Interactive UI components and form validations.',
      architecture: 'Component Library',
      features: ['Custom Hooks', 'Validation'],
      techStack: ['React', 'CSS'],
      liveUrl: 'https://input-cuddle.netlify.app/',
      status: 'PUBLISHED',
    },
    {
      title: 'Smart Form Dynamics',
      slug: 'smart-form-dynamics',
      description: 'Dynamic form generation based on schemas.',
      architecture: 'SPA',
      features: ['Schema parsing', 'Dynamic rendering'],
      techStack: ['React', 'TypeScript'],
      liveUrl: 'https://smart-form-dynamics.netlify.app/',
      status: 'PUBLISHED',
    },
    {
      title: 'Secure Data Hub',
      slug: 'secure-data-hub',
      description: 'A secure dashboard for managing sensitive data.',
      architecture: 'Client-Server',
      features: ['Data Encryption', 'Role-based access'],
      techStack: ['React', 'Express', 'MongoDB'],
      liveUrl: 'https://secure-data-hub.netlify.app/',
      status: 'PUBLISHED',
    },
    {
      title: 'Predicting Students Performance Using ML',
      slug: 'predicting-students-performance',
      description: 'Machine learning model predicting student outcomes.',
      architecture: 'ML Pipeline',
      features: ['Data visualization', 'Predictive modeling'],
      techStack: ['Python', 'Scikit-Learn', 'Flask'],
      liveUrl: 'https://prediting-students-performance-using-ml.onrender.com',
      status: 'PUBLISHED',
    },
  ];

  for (const p of projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: p,
    });
  }

  // --- Seed Certificates ---
  const certificates = [
    {
      credential: 'Full Stack Development Intern',
      issuer: 'Cognifyz Technologies',
      issueDate: new Date('2026-01-20'),
      credentialId: 'CTI/A1/C273888',
      status: 'PUBLISHED',
    },
    {
      credential: 'Cloud Computing (Elite)',
      issuer: 'NPTEL Online Certification (IIT Kharagpur)',
      issueDate: new Date('2026-04-01'),
      credentialId: 'NPTEL26CS55S957600826',
      status: 'PUBLISHED',
    },
    {
      credential: 'Communication Skills',
      issuer: 'TCS iON',
      issueDate: new Date('2026-03-14'),
      credentialId: '91306-29657011-1016',
      status: 'PUBLISHED',
    },
    {
      credential: 'Paper Presentation / Case Study (Hackerz Symposium)',
      issuer: 'Chennai Institute of Technology',
      issueDate: new Date('2026-02-09'),
      credentialId: 'HACKERZ-2026',
      status: 'PUBLISHED',
    }
  ];

  for (const c of certificates) {
    await prisma.certificate.create({
      data: c
    });
  }

  // --- Seed Experience ---
  const experiences = [
    {
      company: 'Independent Product Lab',
      role: 'AI Product Developer',
      duration: '2024 - Present',
      achievements: [
        'Built AI-first product prototypes across resume intelligence, automation, and analytics.',
        'Designed reusable cloud-ready architecture for production portfolio systems.',
      ],
      responsibilities: ['Product architecture', 'Full-stack implementation', 'AI feature design'],
      technologies: ['Next.js', 'Node.js', 'Python', 'PostgreSQL', 'AWS'],
      status: 'PUBLISHED',
    },
    {
      company: 'Research and Engineering Practice',
      role: 'Cloud and Blockchain Engineer',
      duration: '2023 - 2024',
      achievements: [
        'Developed decentralized workflow experiments and secure API foundations.',
        'Documented research methods, architecture tradeoffs, and performance findings.',
      ],
      responsibilities: ['Smart contract prototyping', 'API security research', 'Technical documentation'],
      technologies: ['Solidity', 'Docker', 'Prisma', 'Express', 'Linux'],
      status: 'PUBLISHED',
    },
  ];

  for (const e of experiences) {
    await prisma.experience.create({ data: e });
  }

  // --- Seed Research ---
  const research = [
    {
      title: 'AI-Assisted Resume Intelligence',
      abstract: 'A retrieval-augmented approach to evaluating job fit while preserving explainability for recruiters and candidates.',
      methodology: 'Embedding search, weighted scoring, rubric validation, and human-in-the-loop review.',
      architectureDiagram: 'Client upload -> parser -> embeddings -> scorer -> recruiter report.',
      publicationStatus: 'Draft',
      status: 'DRAFT',
    },
    {
      title: 'Trust-Minimized Voting Workflows',
      abstract: 'A practical model for auditable digital voting using wallet identity, event indexing, and public verification.',
      methodology: 'Threat modeling, smart contract testing, and event-ledger reconciliation.',
      architectureDiagram: 'Wallet -> ballot contract -> event indexer -> public audit explorer.',
      publicationStatus: 'In Review',
      status: 'DRAFT',
    },
  ];

  for (const r of research) {
    await prisma.research.create({ data: r });
  }

  // --- Seed Skills ---
  const skillGroups: Record<string, string[]> = {
    AI: ['LangChain', 'RAG', 'NLP', 'TensorFlow', 'PyTorch', 'Prompt Systems'],
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    Backend: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST APIs'],
    Cloud: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Observability'],
    Blockchain: ['Solidity', 'Web3', 'EVM', 'IPFS', 'Smart Contracts'],
    DevOps: ['Linux', 'GitHub Actions', 'Logging', 'Rate Limits', 'Security'],
  };

  for (const [group, items] of Object.entries(skillGroups)) {
    for (const name of items) {
      await prisma.skill.create({ data: { group, name, status: 'PUBLISHED' } });
    }
  }

  // --- Seed Achievements ---
  const achievements = [
    {
      title: '15+ Certifications',
      description: 'Validated learning across AI, cloud, full-stack, and blockchain engineering.',
      status: 'PUBLISHED',
    },
    {
      title: 'Research-Driven Builds',
      description: 'Every flagship project includes architecture, methodology, and measurable outcomes.',
      status: 'PUBLISHED',
    },
    {
      title: 'Production Mindset',
      description: 'Security, accessibility, SEO, and performance are designed into the system.',
      status: 'PUBLISHED',
    },
  ];

  for (const a of achievements) {
    await prisma.achievement.create({ data: a });
  }

  // --- Seed Social Links ---
  const socialLinks = [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sudharsan-rj1336', icon: 'Linkedin', active: true },
    { label: 'GitHub', url: 'https://github.com/sudharsanrj1971', icon: 'Github', active: true },
    { label: 'LeetCode', url: 'https://leetcode.com/u/sudharsan1971/', icon: 'Code2', active: true },
    { label: 'CodeChef', url: 'https://www.codechef.com/users/sudharsan1971', icon: 'Layers3', active: true },
    { label: 'Email', url: 'mailto:sudharsanrj1971@gmail.com', icon: 'Mail', active: true },
    { label: 'Phone', url: 'tel:6381036138', icon: 'Phone', active: true },
  ];

  for (const s of socialLinks) {
    await prisma.socialLink.create({ data: s });
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
