import type { Metadata } from "next";
import type React from "react";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Sudharsan J | AI Operating System Portfolio",
  description: "Premium AI SaaS-style portfolio for Sudharsan J, AI Product Developer, Cloud Engineer, Blockchain Engineer, and Researcher.",
  metadataBase: new URL("https://dev-os.local"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sudharsan J | DEV_OS",
    description: "AI-powered product portfolio with projects, research, certifications, and hidden admin CMS.",
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "Sudharsan J | DEV_OS" }
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sudharsan J",
    jobTitle: "AI Product Developer",
    knowsAbout: ["Artificial Intelligence", "Cloud Engineering", "Blockchain", "Full Stack Development"]
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
