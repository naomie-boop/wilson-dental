"use client";

import { useRef, useState, useCallback, type ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  glowSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  glowOpacity?: number;
  glowFade?: number;
  idleBorderOpacity?: number;
  hoverOnly?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "rgba(37, 99, 235, 0.8)",
  glowSize = 250,
  borderRadius = 20,
  borderWidth = 2,
  glowOpacity = 1,
  glowFade = 79,
  idleBorderOpacity = 0.12,
  hoverOnly = true,
}: GlowCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const showGlow = hoverOnly ? isHovered : true;

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius }}
    >
      {/* Glow border overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          borderRadius,
          padding: borderWidth,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          background: showGlow
            ? `radial-gradient(${glowSize}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor} 0%, transparent ${glowFade}%)`
            : "none",
          opacity: showGlow ? glowOpacity : 0,
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Static border (visible when not hovered) */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          borderRadius,
          border: `${borderWidth}px solid rgba(255, 255, 255, ${idleBorderOpacity})`,
          transition: "opacity 0.4s ease",
          opacity: showGlow ? 0.3 : 1,
        }}
      />

      {/* Glow ambient light behind card */}
      {showGlow && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            borderRadius,
            background: `radial-gradient(${glowSize * 1.5}px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor.replace(/[\d.]+\)$/, "0.08)")}, transparent 70%)`,
            transition: "opacity 0.4s ease",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 overflow-hidden" style={{ borderRadius }}>
        {children}
      </div>
    </div>
  );
}
