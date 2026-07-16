# Project Nexus: DEV_OS Portfolio

A premium AI SaaS-style portfolio for Sudharsan J. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma/PostgreSQL architecture, and a hidden /system/control admin CMS surface.

## Run

1. Install dependencies: npm install
2. Create .env from .env.example
3. Start development: npm run dev

## Notes

- Public portfolio routes are implemented for Home, About, Projects, Experience, Research, Certifications, Skills, Achievements, Contact, and Resume.
- The hidden admin preview lives at /system/control and is structured for JWT, bcrypt, refresh-token cookies, RBAC, CRUD, media, analytics, SEO, and settings modules.
- Replace public/media/v1-reference.png with a clean professional image when available. The current about image uses the uploaded reference image crop and does not generate or stylize a face.
