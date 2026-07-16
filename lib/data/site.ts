import { BrainCircuit, Cloud, Code2, Database, Dock, FileCode2, Github, GraduationCap, Layers3, Linkedin, Mail, Network, Phone, ShieldCheck, Trophy, Workflow } from "lucide-react";

export const owner = {
  name: "Sudharsan J",
  title: "AI Product Developer",
  roles: ["Full Stack Developer", "Cloud Engineer", "Blockchain Engineer", "AI Engineer", "Researcher"],
  mission: "Building intelligent AI-powered products that solve real-world problems through scalable software, cloud infrastructure, and decentralized technologies.",
  email: "sudharsanrj1971@gmail.com",
  phone: "6381036138"
};

export const navItems = ["Home", "About", "Projects", "Experience", "Research", "Certifications", "Skills", "Achievements", "Contact", "Resume"];
export const bootLines = ["Loading AI Modules...", "Initializing Neural Engine...", "Connecting Cloud...", "Loading Portfolio...", "System Ready"];

export const projects = [
  { title: "Idea Exchange V1", status: "Live", summary: "A platform for students to share, vote, and collaborate on ideas in real time.", architecture: "Client-Server", features: ["Authentication", "Real-time collaboration", "Voting system"], stack: ["Next.js", "Prisma", "Tailwind", "PostgreSQL"], githubUrl: "https://github.com/sudharsanrj1971/student-idea-exchange-platform-prod", liveUrl: "https://student-idea-exchange-platform-prod.pages.dev/login" },
  { title: "Stylish Canvas", status: "Live", summary: "A responsive browser-based canvas drawing application with export capabilities.", architecture: "SPA", features: ["Drawing tools", "Export capabilities"], stack: ["React", "HTML5 Canvas", "CSS"], liveUrl: "https://stylish-canvas.netlify.app/", githubUrl: "" },
  { title: "Server Side Sweetness", status: "Live", summary: "Demonstrates advanced server-side rendering patterns with dynamic routing.", architecture: "SSR", features: ["Dynamic routing", "API integration"], stack: ["Next.js", "Node.js", "React"], liveUrl: "https://server-side-sweetness.netlify.app/", githubUrl: "" },
  { title: "Input Cuddle", status: "Live", summary: "Interactive form UI components with live validation and smooth UX patterns.", architecture: "Component Library", features: ["Custom Hooks", "Validation", "Animations"], stack: ["React", "CSS", "TypeScript"], liveUrl: "https://input-cuddle.netlify.app/", githubUrl: "" },
  { title: "Smart Form Dynamics", status: "Live", summary: "Dynamic form generation from JSON schemas with conditional rendering.", architecture: "SPA", features: ["Schema parsing", "Dynamic rendering", "Validation"], stack: ["React", "TypeScript", "Zod"], liveUrl: "https://smart-form-dynamics.netlify.app/", githubUrl: "" },
  { title: "Secure Data Hub", status: "Live", summary: "A secure dashboard for managing sensitive data with role-based access.", architecture: "Client-Server", features: ["Data Encryption", "Role-based access", "Audit trails"], stack: ["React", "Express", "MongoDB"], liveUrl: "https://secure-data-hub.netlify.app/", githubUrl: "" },
  { title: "Predicting Students Performance", status: "Live", summary: "ML-powered platform predicting student academic outcomes with visualizations.", architecture: "ML Pipeline", features: ["Data visualization", "Predictive modeling", "Flask API"], stack: ["Python", "Scikit-Learn", "Flask", "Pandas"], liveUrl: "https://prediting-students-performance-using-ml.onrender.com", githubUrl: "" },
];

export const experiences = [
  { company: "Independent Product Lab", role: "AI Product Developer", duration: "2024 - Present", achievements: ["Built AI-first product prototypes across resume intelligence, automation, and analytics.", "Designed reusable cloud-ready architecture for production portfolio systems."], technologies: ["Next.js", "Node.js", "Python", "PostgreSQL", "AWS"] },
  { company: "Research and Engineering Practice", role: "Cloud and Blockchain Engineer", duration: "2023 - 2024", achievements: ["Developed decentralized workflow experiments and secure API foundations.", "Documented research methods, architecture tradeoffs, and performance findings."], technologies: ["Solidity", "Docker", "Prisma", "Express", "Linux"] }
];

export const research = [
  { title: "AI-Assisted Resume Intelligence", status: "Draft", abstract: "A retrieval-augmented approach to evaluating job fit while preserving explainability for recruiters and candidates.", methodology: "Embedding search, weighted scoring, rubric validation, and human-in-the-loop review.", architecture: "Client upload -> parser -> embeddings -> scorer -> recruiter report." },
  { title: "Trust-Minimized Voting Workflows", status: "In Review", abstract: "A practical model for auditable digital voting using wallet identity, event indexing, and public verification.", methodology: "Threat modeling, smart contract testing, and event-ledger reconciliation.", architecture: "Wallet -> ballot contract -> event indexer -> public audit explorer." }
];

export const certifications = [
  { credential: "Full Stack Development Intern", issuer: "Cognifyz Technologies", issueDate: "2026-01-20", id: "CTI/A1/C273888", verifyUrl: "#" },
  { credential: "Cloud Computing (Elite)", issuer: "NPTEL (IIT Kharagpur)", issueDate: "2026-04-01", id: "NPTEL26CS55S957600826", verifyUrl: "#" },
  { credential: "Communication Skills", issuer: "TCS iON", issueDate: "2026-03-14", id: "91306-29657011-1016", verifyUrl: "#" },
  { credential: "Paper Presentation / Case Study", issuer: "Hackerz, Chennai Institute of Technology", issueDate: "2026-02-09", id: "HACKERZ-2026", verifyUrl: "#" }
];

export const skillGroups = [
  { name: "AI", icon: BrainCircuit, items: ["LangChain", "RAG", "NLP", "TensorFlow", "PyTorch", "Prompt Systems"] },
  { name: "Frontend", icon: Dock, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: Database, items: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST APIs"] },
  { name: "Cloud", icon: Cloud, items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Observability"] },
  { name: "Blockchain", icon: Network, items: ["Solidity", "Web3", "EVM", "IPFS", "Smart Contracts"] },
  { name: "DevOps", icon: Workflow, items: ["Linux", "GitHub Actions", "Logging", "Rate Limits", "Security"] }
];

export const achievements = [
  { title: "15+ Certifications", icon: Trophy, description: "Validated learning across AI, cloud, full-stack, and blockchain engineering." },
  { title: "Research-Driven Builds", icon: GraduationCap, description: "Every flagship project includes architecture, methodology, and measurable outcomes." },
  { title: "Production Mindset", icon: ShieldCheck, description: "Security, accessibility, SEO, and performance are designed into the system." }
];

export const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/sudharsan-rj1336" },
  { label: "GitHub", icon: Github, href: "https://github.com/sudharsanrj1971" },
  { label: "LeetCode", icon: Code2, href: "https://leetcode.com/u/sudharsan1971/" },
  { label: "CodeChef", icon: Layers3, href: "https://www.codechef.com/users/sudharsan1971" },
  { label: "Email", icon: Mail, href: "mailto:sudharsanrj1971@gmail.com" },
  { label: "Phone", icon: Phone, href: "tel:6381036138" }
];

export const adminModules = ["Dashboard", "Projects", "Experience", "Research Papers", "Certifications", "Skills", "Achievements", "Messages", "Analytics", "Resume", "Media", "Social Links", "SEO", "Settings", "Users", "Logs", "Logout"];
