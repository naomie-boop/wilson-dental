"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  heightVh?: number;
  ghostOpacity?: number;
  speed?: number;
}

function clamp(n: number) {
  return Math.max(0, Math.min(1, n));
}

function WordSpan({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useTransform<number, number>>;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end] as number[], [0, 1]);

  return (
    <motion.span style={{ opacity, display: "inline" }}>
      {word}
    </motion.span>
  );
}

export default function ScrollRevealText({
  text,
  className = "",
  heightVh = 250,
  ghostOpacity = 0.15,
  speed = 1.2,
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const progress = useTransform(scrollYProgress, (v) => clamp(v * speed));

  const words = text.split(" ").filter((w) => w.length > 0);

  return (
    <section
      ref={containerRef}
      className="relative z-10"
      style={{ height: `${heightVh}vh` }}
    >
      <div className="sticky top-1/2 -translate-y-1/2 px-4 py-20 sm:px-6 lg:px-8">
        <div
          className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-2xl sm:p-12 lg:p-16"
          style={{ boxShadow: "0 8px 40px -10px rgba(0,0,0,0.06), inset 0 1px 2px rgba(255,255,255,0.3)" }}
        >
          <div className={`relative ${className}`}>
            <div
              className="pointer-events-none absolute inset-0"
              style={{ opacity: ghostOpacity, color: "inherit" }}
            >
              {text}
            </div>
            <div className="relative">
              {words.map((word, i) => (
                <span key={i}>
                  <WordSpan word={word} index={i} total={words.length} progress={progress} />
                  {i < words.length - 1 && " "}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
