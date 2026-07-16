"use client";

import Image from "next/image";
import Link from "next/link";
import { BrainCircuit, Cloud, Cpu, ExternalLink, Github, Hexagon, Rocket, Search, Workflow, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { bootLines, projects, socials } from "@/lib/data/site";

const stats = [
  { value: "07", label: "Projects" },
  { value: "03+", label: "Years Exp." },
  { value: "02", label: "Research Papers" },
  { value: "15+", label: "Certifications" }
];

const systemItems = [
  { icon: BrainCircuit, label: "AI Engine", state: "Active" },
  { icon: Cloud, label: "Cloud Infra", state: "Active" },
  { icon: Hexagon, label: "Blockchain", state: "Active" },
  { icon: Workflow, label: "DevOps Pipeline", state: "Active" }
];

// Only first 4 projects on home dashboard
const featuredProjects = projects.slice(0, 4);

const projectTones: Record<string, string> = {
  "Idea Exchange V1": "green",
  "Stylish Canvas": "green",
  "Server Side Sweetness": "green",
  "Input Cuddle": "green",
  "Smart Form Dynamics": "amber",
  "Secure Data Hub": "green",
  "Predicting Students Performance": "green",
};

function StatusBadge({ children = "Status: Online" }: { children?: React.ReactNode }) {
  return (
    <div className="status-badge">
      <span />
      {children}
      <span />
    </div>
  );
}

function SectionTitle({ children, action, href }: { children: string; action?: string; href?: string }) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {action ? (
        <Link href={href || "#"} className="flex items-center gap-1">
          {action} <ArrowRight size={13} />
        </Link>
      ) : null}
    </div>
  );
}

function Radar() {
  return (
    <div className="radar" aria-hidden="true">
      <span className="ring r1" />
      <span className="ring r2" />
      <span className="ring r3" />
      <span className="ring r4" />
      <span className="axis x" />
      <span className="axis y" />
      <span className="sweep" />
      <span className="core"><Cpu size={22} /></span>
    </div>
  );
}

// Project card thumbnail generated via CSS — no external image needed
function ProjectThumb({ title, tone }: { title: string; tone: string }) {
  const colors: Record<string, string> = {
    green: "from-emerald-900/60 via-cyan-950/80 to-slate-950",
    amber: "from-amber-900/60 via-orange-950/80 to-slate-950",
  };
  const initials = title.split(" ").slice(0, 2).map(w => w[0]).join("");
  return (
    <div
      className={`project-thumb-art bg-gradient-to-br ${colors[tone] || colors.green}`}
      aria-hidden="true"
    >
      <div className="thumb-grid" />
      <div className="thumb-badge">{initials}</div>
      <div className="thumb-bars">
        {[45, 68, 54, 82, 61, 75, 58].map((h, i) => (
          <i key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.42, ease: "easeOut" }
  })
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero Grid ── */}
      <section id="dashboard" className="hero-grid mt-4">
        {/* Profile HUD */}
        <aside className="profile-hud panel-corner">
          <StatusBadge>Status: Active</StatusBadge>
          <div className="portrait-frame">
            <div className="circuit-lines" />
            <Image
              src="/media/profile-photo.png"
              alt="Professional portrait of Sudharsan J"
              fill
              priority
              sizes="(max-width: 560px) 90vw, (max-width: 900px) 80vw, 360px"
              className="portrait-image"
              style={{ objectFit: "cover", objectPosition: "center 8%", filter: "drop-shadow(0 0 28px rgba(0,229,255,0.28))" }}
            />
          </div>
          <div className="terminal-card">
            {bootLines.map((line) => (
              <p key={line}>&gt; {line}<span>[OK]</span></p>
            ))}
          </div>
        </aside>

        {/* Intro Panel */}
        <section className="intro-panel">
          <p className="hello">Hello, I&apos;m</p>
          <h1>Sudharsan J</h1>
          <div className="roles">
            <span>AI Product Developer</span><i />
            <span>Cloud Engineer</span><i />
            <span>Blockchain Researcher</span>
          </div>
          <p className="mission">
            Building intelligent, scalable and decentralized solutions that make impact.
          </p>
          <div className="hero-actions">
            <Link href="/projects" className="primary-action">
              <Rocket size={16} />Explore Projects
            </Link>
            <Link href="/contact" className="ghost-action">
              <Search size={16} />Recruiter Mode
            </Link>
          </div>
          <StatusBadge />
        </section>

        {/* Systems Stack */}
        <aside className="systems-stack">
          <div className="system-overview panel-corner small-panel">
            <h2>System Overview</h2>
            <div className="system-body">
              <Radar />
              <div className="system-list">
                {systemItems.map((item) => (
                  <div key={item.label}>
                    <item.icon size={17} />
                    <span>{item.label}<b>{item.state}</b></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="quick-stats small-panel panel-corner">
            <h2>Quick Stats</h2>
            <div>
              {stats.map((stat) => (
                <article key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
          <div className="github-card small-panel panel-corner">
            <h2>Github Activity</h2>
            <p>Total Contributions</p>
            <strong>1,234</strong>
            <span className="growth">+ 12% this month</span>
            <div className="bar-chart">
              {[34, 46, 55, 72, 42, 66, 92, 51, 72, 40, 70, 98, 57, 84, 66].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* ── Featured Projects ── */}
      <section className="projects-band glass-panel" id="projects-preview">
        <SectionTitle action="View All Projects" href="/projects">Featured Projects</SectionTitle>
        <div className="projects-grid">
          {featuredProjects.map((project, i) => {
            const tone = projectTones[project.title] || "green";
            return (
              <motion.article
                key={project.title}
                className={`project-card ${tone}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.18 } }}
              >
                <ProjectThumb title={project.title} tone={tone} />
                <span className="project-status">{project.status}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="chip-row">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <footer>
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={13} />Live Demo
                    </a>
                  ) : <span />}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={17} />
                    </a>
                  ) : null}
                </footer>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── Connect ── */}
      <section id="connect" className="connect-panel glass-panel">
        <SectionTitle>Let&apos;s Connect</SectionTitle>
        <div className="connect-row">
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto") || item.href.startsWith("tel") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`connect-button ${item.label === "LinkedIn" ? "cyan" : item.label === "GitHub" ? "white" : item.label === "LeetCode" ? "amber" : item.label === "CodeChef" ? "blue" : item.label === "Email" ? "purple" : item.label === "Phone" ? "green" : ""}`}
            >
              <item.icon size={20} />{item.label}
            </a>
          ))}
          <a href="/downloads/resume.pdf" className="resume-button" download>
            ⬇ Download Resume
          </a>
        </div>
      </section>
    </>
  );
}
