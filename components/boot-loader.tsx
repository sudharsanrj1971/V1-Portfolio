'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_STEPS = [
  { id: 0, label: 'Initializing core systems...', sub: 'BIOS v2.6.1 OK', progress: 8 },
  { id: 1, label: 'Loading AI neural modules...', sub: 'TensorCore / LangChain mounted', progress: 22 },
  { id: 2, label: 'Connecting cloud infrastructure...', sub: 'AWS · Docker · Kubernetes ONLINE', progress: 40 },
  { id: 3, label: 'Mounting blockchain nodes...', sub: 'EVM · Solidity contracts verified', progress: 58 },
  { id: 4, label: 'Decrypting portfolio data...', sub: 'Projects · Certs · Research LOADED', progress: 76 },
  { id: 5, label: 'Calibrating HUD interface...', sub: 'DEV_OS UI v1.0.0 ready', progress: 92 },
  { id: 6, label: 'System ready.', sub: 'Welcome, Recruiter', progress: 100 },
];

function ScanLines() {
  return (
    <div className="bootloader-scanlines" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => (
        <div key={i} className="scanline" style={{ top: `${(i / 60) * 100}%` }} />
      ))}
    </div>
  );
}

function GlitchText({ text }: { text: string }) {
  return (
    <div className="glitch-wrap" data-text={text} aria-label={text}>
      <span className="glitch-main">{text}</span>
      <span className="glitch-copy a" aria-hidden="true">{text}</span>
      <span className="glitch-copy b" aria-hidden="true">{text}</span>
    </div>
  );
}

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Check sessionStorage so it only plays once per session
    if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('booted')) {
      onComplete();
      return;
    }

    const stepDurations = [320, 380, 340, 360, 380, 320, 600];
    let total = 0;

    stepDurations.forEach((dur, i) => {
      total += dur;
      setTimeout(() => {
        setStep(i);
        if (i === stepDurations.length - 1) {
          setTimeout(() => {
            setDone(true);
            sessionStorage.setItem('booted', '1');
            setTimeout(onComplete, 700);
          }, 500);
        }
      }, total);
    });
  }, [onComplete]);

  const current = BOOT_STEPS[step];

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="bootloader-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(16px)', scale: 1.04 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          aria-live="polite"
          aria-label="Portfolio loading sequence"
        >
          <ScanLines />

          {/* Grid overlay */}
          <div className="boot-grid" aria-hidden="true" />

          {/* Corner brackets */}
          <div className="boot-corner tl" aria-hidden="true" />
          <div className="boot-corner tr" aria-hidden="true" />
          <div className="boot-corner bl" aria-hidden="true" />
          <div className="boot-corner br" aria-hidden="true" />

          {/* Top bar */}
          <div className="boot-topbar">
            <span className="boot-brand">&lt;DEV_OS/&gt;</span>
            <span className="boot-system-id">SYSTEM INIT · PROC: 0x4D2F · SEC: ARMED</span>
          </div>

          {/* Center */}
          <div className="boot-center">
            {/* Radar ring */}
            <div className="boot-radar" aria-hidden="true">
              <div className="boot-radar-ring r1" />
              <div className="boot-radar-ring r2" />
              <div className="boot-radar-ring r3" />
              <div className="boot-radar-sweep" />
              <div className="boot-radar-core">DEV</div>
            </div>

            {/* Glitch title */}
            <div className="boot-title-wrap">
              <GlitchText text="DEV_OS" />
              <p className="boot-subtitle">AI OPERATIVE SYSTEM · PORTFOLIO v1.0</p>
            </div>

            {/* Progress */}
            <div className="boot-progress-wrap">
              <div className="boot-progress-track">
                <motion.div
                  className="boot-progress-fill"
                  animate={{ width: `${current.progress}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
                <div className="boot-progress-glow" />
              </div>
              <div className="boot-progress-label">
                <span>{current.progress}%</span>
                <span className="boot-progress-node">NODE_01</span>
              </div>
            </div>

            {/* Terminal log */}
            <div className="boot-log">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="boot-log-entry"
                >
                  <span className="boot-log-prompt">&gt;&gt;</span>
                  <span className="boot-log-main">{current.label}</span>
                  <span className="boot-log-sub">{current.sub}</span>
                </motion.div>
              </AnimatePresence>

              {/* Previous steps */}
              {BOOT_STEPS.slice(0, step).reverse().slice(0, 3).map((s) => (
                <div key={s.id} className="boot-log-entry past">
                  <span className="boot-log-prompt">&gt;</span>
                  <span>{s.label}</span>
                  <span className="boot-log-ok">[OK]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="boot-bottombar">
            <span>© 2026 SUDHARSAN J — ALL SYSTEMS ARMED</span>
            <span className="boot-blink">INITIALIZING_</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
