"use client";

import Image from "next/image";
import { achievements, certifications, experiences, owner, projects, research, skillGroups, socials } from "@/lib/data/site";
import { ButtonLink } from "@/components/ui/button";
import { ArrowUpRight, BookOpen, CheckCircle2, Download, ExternalLink, FileText, Github, Lock, Printer, ScanSearch, Shield, Star, Trophy } from "lucide-react";
import { motion } from "framer-motion";

// ─── Shared ────────────────────────────────────────────────────────────────────

export function SectionHeader({ kicker, title, copy }: { kicker: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 font-mono text-xs uppercase tracking-[.22em] text-cyan-200">{kicker}</p>
      <h2 className="font-display text-4xl font-bold text-white md:text-5xl">{title}</h2>
      {copy && <p className="mt-4 text-slate-400">{copy}</p>}
    </div>
  );
}

// ─── About ─────────────────────────────────────────────────────────────────────

const rows = [
  { label: "Education", value: "Computer Science & Engineering-led product practice" },
  { label: "Career Objective", value: "Build useful AI systems with scalable cloud and secure data foundations" },
  { label: "Research Interest", value: "RAG, AI evaluation, decentralized trust, cloud automation" },
  { label: "Current Focus", value: "Portfolio CMS, AI SaaS architecture, production-grade developer experience" },
  { label: "Languages", value: "English, Tamil" },
];

export function AboutSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader kicker="About" title="A product engineer building intelligent operating surfaces." />

        <div className="grid gap-8 lg:grid-cols-[.86fr_1.14fr]">
          {/* Portrait Column */}
          <div className="flex flex-col gap-5">
            <div className="glass neon-border overflow-hidden rounded-2xl p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-950">
                <Image
                  src="/media/profile-photo.png"
                  alt="Professional image of Sudharsan J"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 8%" }}
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-xl font-bold text-white">{owner.name}</p>
                  <p className="mt-1 font-mono text-xs text-cyan-300">{owner.title}</p>
                </div>
              </div>
            </div>

            {/* Social quick links */}
            <div className="grid grid-cols-3 gap-2">
              {socials.slice(0, 3).map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[.04] p-3 text-xs text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <s.icon size={18} className="text-cyan-200" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Info Column */}
          <div className="flex flex-col gap-6">
            <div className="glass rounded-2xl p-6 md:p-8">
              <p className="text-lg leading-8 text-slate-300">
                {owner.name} is an AI Product Developer focused on building full-stack products where AI, cloud
                infrastructure, and decentralized systems work together cleanly. The portfolio is shaped like a product
                because the work is product-minded: researched, architected, shipped, measured, and improved.
              </p>

              <div className="mt-8 grid gap-3">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-300" />
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-widest text-cyan-300/70">{row.label}</span>
                      <p className="mt-0.5 text-sm text-slate-300">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement mini-cards */}
            <div className="grid gap-4 sm:grid-cols-3">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-cyan-300/15 bg-cyan-300/[.04] p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[.07]"
                >
                  <item.icon className="mb-3 text-cyan-200" size={22} />
                  <div className="font-bold text-white">{item.title}</div>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const projectGradients: Record<string, string> = {
  "Idea Exchange V1": "from-cyan-900/70 via-blue-950/80 to-slate-950",
  "Stylish Canvas": "from-violet-900/60 via-purple-950/80 to-slate-950",
  "Server Side Sweetness": "from-emerald-900/60 via-teal-950/80 to-slate-950",
  "Input Cuddle": "from-pink-900/60 via-rose-950/80 to-slate-950",
  "Smart Form Dynamics": "from-amber-900/60 via-orange-950/80 to-slate-950",
  "Secure Data Hub": "from-red-900/60 via-slate-950/80 to-slate-950",
  "Predicting Students Performance": "from-indigo-900/60 via-blue-950/80 to-slate-950",
};

const projectIcons: Record<string, string> = {
  "Idea Exchange V1": "IE",
  "Stylish Canvas": "SC",
  "Server Side Sweetness": "SS",
  "Input Cuddle": "IC",
  "Smart Form Dynamics": "SF",
  "Secure Data Hub": "SH",
  "Predicting Students Performance": "PS",
};

function ProjectThumbnail({ title }: { title: string }) {
  const grad = projectGradients[title] || "from-cyan-900/60 via-slate-950 to-slate-950";
  const initials = projectIcons[title] || title.slice(0, 2).toUpperCase();
  return (
    <div className={`relative mb-4 aspect-video overflow-hidden rounded-xl bg-gradient-to-br ${grad}`}>
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Center badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
          <span className="font-display text-2xl font-black text-white">{initials}</span>
        </div>
      </div>
      {/* Bottom bars */}
      <div className="absolute bottom-3 left-3 right-3 flex items-end gap-1.5 h-8">
        {[35, 55, 42, 70, 58, 80, 65, 48].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-white/30"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ProjectsSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Projects"
          title="Flagship systems, presented like product case studies."
          copy="Every project card includes architecture, features, stack, and live links."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              className="glass group flex flex-col rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(0,229,255,0.18)]"
            >
              <ProjectThumbnail title={project.title} />

              {/* Header */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                <span className="shrink-0 rounded-full border border-green-400/20 bg-green-400/10 px-2 py-1 text-[11px] text-green-300">
                  {project.status}
                </span>
              </div>

              <p className="text-sm leading-6 text-slate-400">{project.summary}</p>

              <p className="mt-4 text-xs text-slate-500">
                <span className="text-cyan-200">Architecture:</span> {project.architecture}
              </p>

              {/* Stack chips */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[.04] px-2 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-5 flex grow items-end gap-2 pt-2">
                {project.githubUrl ? (
                  <ButtonLink href={project.githubUrl} variant="ghost" className="flex-1 text-xs">
                    <Github size={14} className="mr-1.5" /> GitHub
                  </ButtonLink>
                ) : (
                  <ButtonLink href="#" variant="ghost" className="flex-1 text-xs opacity-40 cursor-not-allowed">
                    <Github size={14} className="mr-1.5" /> GitHub
                  </ButtonLink>
                )}
                {project.liveUrl ? (
                  <ButtonLink href={project.liveUrl} variant="ghost" className="flex-1 text-xs">
                    <ExternalLink size={14} className="mr-1.5" /> Live Demo
                  </ButtonLink>
                ) : (
                  <ButtonLink href="#" variant="ghost" className="flex-1 text-xs opacity-40 cursor-not-allowed">
                    <ExternalLink size={14} className="mr-1.5" /> Demo
                  </ButtonLink>
                )}
                <ButtonLink href="#" variant="ghost" className="flex-1 text-xs">
                  <BookOpen size={14} className="mr-1.5" /> Docs
                </ButtonLink>
                <ButtonLink href="#" variant="ghost" className="flex-1 text-xs">
                  <ScanSearch size={14} className="mr-1.5" /> Case
                </ButtonLink>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

export function ExperienceSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeader kicker="Experience" title="Timeline of applied engineering practice." />
        <div className="space-y-5">
          {experiences.map((item, i) => (
            <motion.article
              key={item.company}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{item.role}</h3>
                  <p className="mt-1 text-cyan-200">{item.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-400">
                  {item.duration}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.achievements.map((line) => (
                  <li key={line} className="flex gap-2">
                    <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-cyan-300" />
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-lg bg-white/[.05] px-3 py-2 text-xs text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Research ─────────────────────────────────────────────────────────────────

export function ResearchSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Research" title="Publication cards with method and architecture." />
        <div className="grid gap-5 md:grid-cols-2">
          {research.map((paper, i) => (
            <motion.article
              key={paper.title}
              className="glass rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.4 }}
            >
              <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-200">{paper.status}</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white">{paper.title}</h3>
              <p className="mt-4 text-slate-400">{paper.abstract}</p>
              <p className="mt-4 text-sm text-slate-300">
                <strong className="text-cyan-200">Methodology:</strong> {paper.methodology}
              </p>
              <div className="mt-5 rounded-xl border border-cyan-300/15 bg-cyan-300/[.04] p-4 font-mono text-xs text-cyan-100">
                {paper.architecture}
              </div>
              <ButtonLink href="#" className="mt-5" variant="ghost">
                <Download size={15} className="mr-2" /> PDF Download
              </ButtonLink>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Certifications ───────────────────────────────────────────────────────────

const certAccents: Record<string, { from: string; to: string; icon: React.ElementType }> = {
  "Full Stack Development Intern":   { from: "#00e5ff", to: "#0076a4", icon: Star },
  "Cloud Computing (Elite)":         { from: "#7c4dff", to: "#3d148c", icon: Trophy },
  "Communication Skills":            { from: "#20f08a", to: "#0b6638", icon: CheckCircle2 },
  "Paper Presentation / Case Study": { from: "#ffac22", to: "#9b5500", icon: Shield },
};

export function CertificationsSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          kicker="Certifications"
          title="Credential grid with verification-ready metadata."
          copy="Each card shows the exact credential ID and issuer. Click Verify to validate the certificate."
        />
        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((cert) => {
            const accent = certAccents[cert.credential] ?? { from: "#00e5ff", to: "#0076a4", icon: Star };
            const AccentIcon = accent.icon;
            return (
              <motion.article
                key={cert.id}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_32px_rgba(0,229,255,0.15)] backdrop-blur-md"
              >
                {/* Top gradient stripe */}
                <div
                  className="absolute left-0 right-0 top-0 h-1.5 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${accent.from}, ${accent.to})` }}
                />

                {/* Badge icon */}
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: `linear-gradient(135deg, ${accent.from}22, ${accent.to}33)`, border: `1px solid ${accent.from}44` }}
                >
                  <AccentIcon size={22} style={{ color: accent.from }} />
                </div>

                <h3 className="font-display text-lg font-bold leading-tight text-white">{cert.credential}</h3>
                <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
                <p className="mt-1 text-xs text-slate-500">Issued {cert.issueDate}</p>

                {/* Credential ID */}
                <div className="mt-4 rounded-lg border border-white/5 bg-white/[.03] p-2">
                  <p className="font-mono text-[10px] leading-4 text-cyan-200 break-all">{cert.id}</p>
                </div>

                <a
                  href={cert.verifyUrl !== "#" ? cert.verifyUrl : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[.04] px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  <ArrowUpRight size={13} /> Verify Credential
                </a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export function SkillsSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          kicker="Skills"
          title="Technology cards grouped by product capability."
          copy="No progress bars. The stack is presented as practical capability groups."
        />
        <motion.div
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.name}
              variants={fadeUp}
              className="glass rounded-2xl p-5 transition hover:-translate-y-1"
            >
              <group.icon className="mb-4 text-cyan-200" size={26} />
              <h3 className="font-display text-2xl font-bold text-white">{group.name}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export function ContactSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Contact" title="A professional contact surface for recruiters and collaborators." />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
          <form
            className="glass rounded-2xl p-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: fd.get("name"),
                  email: fd.get("email"),
                  subject: fd.get("subject"),
                  body: fd.get("message"),
                }),
              });
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input name="name" aria-label="Name" placeholder="Name" required className="rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none focus:border-cyan-300/50 text-white placeholder:text-slate-500" />
              <input name="email" type="email" aria-label="Email" placeholder="Email" required className="rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none focus:border-cyan-300/50 text-white placeholder:text-slate-500" />
            </div>
            <input name="subject" aria-label="Subject" placeholder="Subject" className="mt-4 w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none focus:border-cyan-300/50 text-white placeholder:text-slate-500" />
            <textarea name="message" aria-label="Message" placeholder="Message" rows={6} className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 outline-none focus:border-cyan-300/50 text-white placeholder:text-slate-500" />
            <button type="submit" className="mt-4 rounded-xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 hover:shadow-[0_0_24px_rgba(0,229,255,0.5)]">
              Send Message
            </button>
          </form>

          <div className="glass rounded-2xl p-6">
            <h3 className="font-display text-2xl font-bold text-white">Social Links</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") || social.href.startsWith("tel") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.04] p-4 transition hover:border-cyan-300/40 hover:bg-white/[.07]"
                >
                  <social.icon size={18} className="text-cyan-200" />
                  <span className="text-slate-200">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Resume ───────────────────────────────────────────────────────────────────

export function ResumeSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Resume" title="Embedded resume command center." />
        <div className="glass rounded-2xl p-4">
          <div className="mb-4 flex flex-wrap gap-3">
            <ButtonLink href="/downloads/resume.pdf" download>
              <Download size={15} className="mr-2" /> Download
            </ButtonLink>
            <ButtonLink href="#" variant="ghost">
              <Printer size={15} className="mr-2" /> Print
            </ButtonLink>
            <ButtonLink href="#" variant="ghost">
              <ExternalLink size={15} className="mr-2" /> Fullscreen
            </ButtonLink>
          </div>
          <div className="grid min-h-[34rem] place-items-center rounded-xl border border-dashed border-cyan-300/20 bg-white/[.03] text-center">
            <div>
              <FileText className="mx-auto mb-4 text-cyan-200" size={42} />
              <p className="font-display text-2xl font-bold text-white">Resume viewer ready</p>
              <p className="mt-2 text-slate-400">Upload the production resume through the hidden CMS media module.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────

export function AchievementsSection() {
  return (
    <section className="section-pad px-4 lg:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader kicker="Achievements" title="Signals of consistency, research, and delivery." />
        <motion.div
          className="grid gap-4 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-[0_0_28px_rgba(0,229,255,0.14)]"
            >
              <item.icon className="mb-4 text-cyan-200" size={26} />
              <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-400">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Admin Lock ───────────────────────────────────────────────────────────────

export function AdminPreviewLock() {
  return (
    <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[.18em] text-blue-300">
      <Lock size={15} /> Hidden Admin Panel / Auth Required
    </div>
  );
}
