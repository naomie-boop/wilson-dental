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
    offset: ["start start", "end end"],
  });
  const progress = useTransform(scrollYProgress, (v) => clamp(v * speed));

  const words = text.split(" ").filter((w) => w.length > 0);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${heightVh}vh` }}
    >
      <div className="sticky top-1/2 -translate-y-1/2 px-4 sm:px-6 lg:px-8">
        <div className={`relative mx-auto max-w-4xl text-center ${className}`}>
          {/* Ghost layer */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ opacity: ghostOpacity, color: "inherit" }}
          >
            {text}
          </div>
          {/* Animated layer */}
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
    </section>
  );
}
