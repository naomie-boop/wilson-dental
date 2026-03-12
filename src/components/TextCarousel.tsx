"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SWEEP_EASE: [number, number, number, number] = [0.2, 0, 0.3, 0.3];
const FADE_MS = 250;
const GAP_MS = 70;

interface TextCarouselProps {
  words: string[];
  sweepMs?: number;
  holdMs?: number;
  className?: string;
}

export default function TextCarousel({
  words,
  sweepMs = 750,
  holdMs = 2000,
  className = "",
}: TextCarouselProps) {
  const [idx, setIdx] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!words?.length) return;

    if (timer.current) clearTimeout(timer.current);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);

    fadeTimer.current = setTimeout(() => {
      setFadeOut(true);
    }, Math.max(0, sweepMs + holdMs - FADE_MS - GAP_MS));

    timer.current = setTimeout(() => {
      setFadeOut(false);
      setIdx((i) => (i + 1) % words.length);
    }, sweepMs + holdMs + GAP_MS);

    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, [idx, words, sweepMs, holdMs]);

  const word = words?.[idx] ?? "";

  const gradient = `linear-gradient(90deg,
    #2563eb 0%, #2563eb 25%,
    #0ea5e9 35%,
    #8b5cf6 45%,
    #ec4899 55%,
    #f59e0b 65%,
    #2563eb 75%, #2563eb 100%
  )`;

  return (
    <span
      aria-live="polite"
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        whiteSpace: "nowrap",
      }}
    >
      <motion.span
        key={`base-${idx}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: fadeOut ? 0 : 1 }}
        transition={
          fadeOut
            ? { duration: FADE_MS / 1000, ease: "easeOut" }
            : { delay: (sweepMs * 0.8) / 1000, duration: 0.12, ease: "easeOut" }
        }
        className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
      >
        {word}
      </motion.span>

      <motion.span
        key={`overlay-${idx}`}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "-0.3em",
          bottom: "-0.3em",
          paddingTop: "0.3em",
          paddingBottom: "0.3em",
          lineHeight: "inherit",
          pointerEvents: "none",
          backgroundOrigin: "padding-box",
          backgroundImage: gradient,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          backgroundRepeat: "no-repeat",
          backgroundSize: "400% 100%",
          willChange: "background-position, opacity",
        }}
        initial={{ backgroundPositionX: "100%", opacity: 1 }}
        animate={{
          backgroundPositionX: "0%",
          opacity: [1, 1, 0],
        }}
        transition={{
          backgroundPositionX: { duration: sweepMs / 1000, ease: SWEEP_EASE },
          opacity: {
            duration: sweepMs / 1000,
            times: [0, 0.985, 1],
            ease: "linear",
          },
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}
