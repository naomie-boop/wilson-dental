"use client";

import { motion } from "framer-motion";

interface FluidGradientProps {
  color1?: string;
  color2?: string;
  color3?: string;
  blur?: number;
  speed?: number;
}

export default function FluidGradient({
  color1 = "rgba(37, 99, 235, 0.15)",
  color2 = "rgba(14, 165, 233, 0.12)",
  color3 = "rgba(139, 92, 246, 0.10)",
  blur = 120,
  speed = 1.5,
}: FluidGradientProps) {
  const duration = 20 / speed;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute"
        style={{
          width: "150%",
          height: "150%",
          left: "-25%",
          top: "-25%",
          background: `radial-gradient(circle at 80% 50%, ${color1} 0%, transparent 50%)`,
          filter: `blur(${blur}px)`,
        }}
        animate={{ x: ["0%", "20%", "0%"], y: ["0%", "25%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          width: "150%",
          height: "150%",
          left: "-25%",
          top: "-25%",
          background: `radial-gradient(circle at 20% 80%, ${color2} 0%, transparent 50%)`,
          filter: `blur(${blur}px)`,
        }}
        animate={{ x: ["0%", "-20%", "0%"], y: ["0%", "20%", "0%"] }}
        transition={{ duration: duration * 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute"
        style={{
          width: "150%",
          height: "150%",
          left: "-25%",
          top: "-25%",
          background: `radial-gradient(circle at 50% 20%, ${color3} 0%, transparent 50%)`,
          filter: `blur(${blur}px)`,
        }}
        animate={{ x: ["0%", "15%", "0%"], y: ["0%", "-20%", "0%"] }}
        transition={{ duration: duration * 0.9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
