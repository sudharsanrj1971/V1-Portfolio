import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; variant?: "primary" | "ghost" | "success" };
export function ButtonLink({ className, variant = "primary", ...props }: ButtonProps) {
  return <Link {...props} className={cn("inline-flex min-h-11 items-center justify-center rounded-xl px-5 text-sm font-bold transition focus:outline-none focus:ring-2 focus:ring-cyan-300/60", variant === "primary" && "bg-cyan-300 text-slate-950 shadow-glow hover:-translate-y-0.5 hover:bg-cyan-200 light:bg-blue-600 light:text-white", variant === "ghost" && "border border-white/12 bg-white/[.04] text-slate-100 hover:border-cyan-300/40 hover:bg-white/[.08] light:border-slate-200 light:bg-white light:text-slate-800", variant === "success" && "border border-green-400/30 bg-green-400/10 text-green-200 light:text-green-700", className)} />;
}
