"use client";

import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl sm:rounded-3xl
        border border-white/20
        bg-white/10
        backdrop-blur-xl
        shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1),inset_0_1px_1px_0_rgba(255,255,255,0.3),inset_0_-1px_2px_0_rgba(0,0,0,0.05)]
        ${hover ? "transition-all duration-500 hover:bg-white/15 hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15),inset_0_1px_2px_0_rgba(255,255,255,0.4),inset_0_-1px_2px_0_rgba(0,0,0,0.05)] hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-white/5" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
