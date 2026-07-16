'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Rocket, Moon, Sun } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Certifications", path: "/certifications" },
  { name: "Research", path: "/research" },
  { name: "Skills", path: "/skills" },
  { name: "Achievements", path: "/achievements" },
  { name: "Contact", path: "/contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Hide shell chrome in admin panel
  if (pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  return (
    <div className="devos-shell min-h-screen flex flex-col relative" suppressHydrationWarning>
      <div className="cursor-glow" />

      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        <header className="top-nav z-50 relative">
          <Link href="/" className="brand">
            <strong>&lt;DEV_OS/&gt;</strong>
            <span>AI Operative System</span>
          </Link>

          <nav aria-label="Primary navigation">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={isActive ? 'active' : ''}
                >
                  {index === 0 && isActive ? <Rocket size={13} /> : null}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button 
            className="icon-button" 
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {mounted && theme === 'light' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <div className="avatar-dot relative w-[42px] h-[42px] rounded-full overflow-hidden">
            <Image
              src="/media/v1-reference.png"
              alt="Sudharsan J"
              fill
              sizes="42px"
              className="object-cover"
              style={{ objectPosition: '10% 12%' }}
            />
          </div>
        </header>

        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </div>

        <footer className="site-footer z-50 relative">
          <span>(c) 2026 Sudharsan J. All rights reserved.</span>
          <b>&lt; Build . Innovate . Automate . Elevate /&gt;</b>
        </footer>
      </div>
    </div>
  );
}
