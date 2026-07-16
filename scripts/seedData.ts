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
