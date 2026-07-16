'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98, filter: 'blur(8px)' },
  enter: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -20, scale: 0.98, filter: 'blur(8px)' },
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Do not animate admin routes to keep them functional/fast without layout shifts
  if (pathname.startsWith('/admin')) {
    return <>{children}</>;
  }

  return (
    <motion.main
      key={pathname}
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ type: 'spring', stiffness: 100, damping: 20, mass: 1 }}
      className="page-transition-wrapper w-full"
    >
      {children}
    </motion.main>
  );
}
