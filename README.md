# Project Nexus: DEV_OS Portfolio

A premium AI SaaS-style portfolio for Sudharsan J. Built with Next.js 15, React 19, TypeScript, Tailwind CSS, Prisma/PostgreSQL architecture, and a hidden /system/control admin CMS surface.

## Owner

- **Name:** Sudharsan J
- **Title:** AI Product Developer
- **Roles:** Full Stack Developer, Cloud Engineer, Blockchain Engineer, AI Engineer, Researcher
- **Mission:** Building intelligent AI-powered products that solve real-world problems through scalable software, cloud infrastructure, and decentralized technologies.
- **Email:** sudharsanrj1971@gmail.com
- **Links:** [GitHub](https://github.com/sudharsanrj1971) · [LinkedIn](https://www.linkedin.com/in/sudharsan-rj1336) · [LeetCode](https://leetcode.com/u/sudharsan1971/) · [CodeChef](https://www.codechef.com/users/sudharsan1971)

## Run

1. Install dependencies: npm install
2. Create .env from .env.example
3. Start development: npm run dev
4. Seed the database (optional): npm run prisma:generate && npx tsx scripts/seedData.ts

## Notes

- Public portfolio routes are implemented for Home, About, Projects, Experience, Research, Certifications, Skills, Achievements, Contact, and Resume.
- The hidden admin preview lives at /system/control and is structured for JWT, bcrypt, refresh-token cookies, RBAC, CRUD, media, analytics, SEO, and settings modules.
- `scripts/seedData.ts` seeds Projects, Certificates, Experience, Research, Skills, Achievements, and Social Links into Postgres via Prisma.
- Replace public/media/v1-reference.png with a clean professional image when available. The current about image uses the uploaded reference image crop and does not generate or stylize a face.
