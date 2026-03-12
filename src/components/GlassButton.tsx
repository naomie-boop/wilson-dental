"use client";

import { useState, type ReactNode, type AnchorHTMLAttributes } from "react";

interface GlassButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  size?: "sm" | "md" | "lg";
}

export default function GlassButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: GlassButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const variants = {
    primary: {
      bg: "rgba(37, 99, 235, 0.55)",
      bgHover: "rgba(37, 99, 235, 0.7)",
      highlight: "rgba(147, 197, 253, 0.4)",
      border: "rgba(147, 197, 253, 0.3)",
      shadow: "rgba(37, 99, 235, 0.25)",
      text: "rgba(255, 255, 255, 0.95)",
    },
    secondary: {
      bg: "rgba(255, 255, 255, 0.12)",
      bgHover: "rgba(255, 255, 255, 0.2)",
      highlight: "rgba(255, 255, 255, 0.25)",
      border: "rgba(255, 255, 255, 0.18)",
      shadow: "rgba(0, 0, 0, 0.08)",
      text: "rgba(30, 30, 60, 0.9)",
    },
    light: {
      bg: "rgba(255, 255, 255, 0.15)",
      bgHover: "rgba(255, 255, 255, 0.25)",
      highlight: "rgba(255, 255, 255, 0.35)",
      border: "rgba(255, 255, 255, 0.25)",
      shadow: "rgba(0, 0, 0, 0.1)",
      text: "rgba(255, 255, 255, 0.95)",
    },
  };

  const sizes = {
    sm: { px: 16, py: 10, text: 13, radius: 14 },
    md: { px: 24, py: 14, text: 15, radius: 20 },
    lg: { px: 32, py: 18, text: 16, radius: 24 },
  };

  const v = variants[variant];
  const s = sizes[size];

  const style: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingLeft: s.px,
    paddingRight: s.px,
    paddingTop: s.py,
    paddingBottom: s.py,
    borderRadius: s.radius,
    fontSize: s.text,
    fontWeight: 600,
    color: v.text,
    cursor: "pointer",
    userSelect: "none",
    position: "relative",
    overflow: "hidden",
    border: `1px solid ${v.border}`,
    backdropFilter: `blur(${isHovered ? 16 : 12}px) saturate(1.8)`,
    WebkitBackdropFilter: `blur(${isHovered ? 16 : 12}px) saturate(1.8)`,
    background: `
      linear-gradient(135deg, ${v.highlight} 0%, transparent 40%),
      linear-gradient(225deg, ${v.highlight.replace(/[\d.]+\)$/, "0.15)")} 0%, transparent 30%),
      ${isHovered ? v.bgHover : v.bg}
    `,
    boxShadow: `
      0 ${isHovered ? 12 : 6}px ${isHovered ? 24 : 16}px -4px ${v.shadow},
      inset 0 1px 1px 0 ${v.highlight},
      inset 0 -2px 4px 0 rgba(0,0,0,0.06)
    `,
    transform: `scale(${isPressed ? 0.96 : isHovered ? 1.02 : 1}) translateY(${isHovered ? -1 : 0}px)`,
    transition: `
      transform 0.6s cubic-bezier(0.23, 1, 0.32, 1),
      background 0.5s ease,
      box-shadow 0.5s ease,
      backdrop-filter 0.5s ease
    `,
    textDecoration: "none",
  };

  return (
    <a
      {...props}
      style={style}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      {children}
    </a>
  );
}
