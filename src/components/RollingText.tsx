"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RollingTextProps {
  text: string;
  className?: string;
  duplicateCount?: number;
  rollDuration?: number;
  staggerDelay?: number;
  blurIntensity?: number;
  pattern?: "sequential" | "alternating";
}

export default function RollingText({
  text,
  className = "",
  duplicateCount = 8,
  rollDuration = 1.8,
  staggerDelay = 0.08,
  blurIntensity = 6,
  pattern = "alternating",
}: RollingTextProps) {
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => setAnimating(true), 100);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  const chars = text.split("");
  const charHeight = 1; // in em

  return (
    <span ref={containerRef} className={`inline-flex items-center gap-[0.02em] ${className}`}>
      {chars.map((char, i) => {
        if (char === " ") {
          return <span key={i} style={{ width: "0.3em" }} />;
        }

        const dupes = Array(duplicateCount).fill(char);
        const totalScroll = charHeight * (duplicateCount - 1);
        const isOdd = i % 2 === 0;
        const fromBottom = pattern === "alternating" && !isOdd;
        const initialY = fromBottom ? -totalScroll : 0;
        const finalY = fromBottom ? 0 : -totalScroll;

        return (
          <span
            key={`${char}-${i}`}
            className="inline-block overflow-hidden"
            style={{ height: `${charHeight}em`, lineHeight: `${charHeight}em` }}
          >
            <motion.span
              className="flex flex-col items-center"
              initial={{ y: `${initialY}em` }}
              animate={animating ? { y: `${finalY}em` } : { y: `${initialY}em` }}
              transition={{
                duration: rollDuration,
                delay: i * staggerDelay,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "tween",
              }}
            >
              {dupes.map((c, j) => (
                <motion.span
                  key={j}
                  className="block text-center"
                  style={{ height: `${charHeight}em`, lineHeight: `${charHeight}em` }}
                  initial={{ filter: "blur(0px)" }}
                  animate={
                    animating
                      ? { filter: ["blur(0px)", `blur(${blurIntensity}px)`, `blur(${blurIntensity}px)`, "blur(0px)"] }
                      : { filter: "blur(0px)" }
                  }
                  transition={{
                    duration: rollDuration,
                    delay: i * staggerDelay,
                    times: [0, 0.2, 0.8, 1],
                    ease: "easeOut",
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
