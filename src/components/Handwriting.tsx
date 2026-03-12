"use client";

import { useEffect, useRef } from "react";

const FONTS = ["Caveat", "Indie Flower", "Nothing You Could Do", "Reenie Beanie", "Shadows Into Light"];
const BLACKLIST: Record<string, string[]> = { l: ["Nothing You Could Do"] };

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface HandwritingProps {
  text: string;
  className?: string;
  fontSize?: number;
  color?: string;
  letterSpacing?: number;
  lineHeight?: number;
  fontWeight?: number;
  seed?: number;
  align?: "left" | "center" | "right";
}

export default function Handwriting({
  text,
  className = "",
  fontSize = 32,
  color = "#1a1a2e",
  letterSpacing = 0.5,
  lineHeight = 1.4,
  fontWeight = 400,
  seed = 42,
  align = "center",
}: HandwritingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.innerHTML = "";
    let currentSeed = seed;
    const lastUsed: Record<string, string> = {};

    for (const char of text) {
      const span = document.createElement("span");
      if (char === " ") {
        span.textContent = " ";
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre";
        el.appendChild(span);
        currentSeed++;
        continue;
      }
      if (char === "\n") {
        el.appendChild(document.createElement("br"));
        currentSeed++;
        continue;
      }
      const lower = char.toLowerCase();
      let available = BLACKLIST[lower]
        ? FONTS.filter((f) => !BLACKLIST[lower].includes(f))
        : [...FONTS];
      if (lastUsed[lower]) {
        available = available.filter((f) => f !== lastUsed[lower]);
      }
      const idx = Math.floor(seededRandom(currentSeed) * available.length);
      const font = available[idx] || FONTS[0];
      lastUsed[lower] = font;
      span.style.fontFamily = `"${font}", cursive`;
      span.textContent = char;
      el.appendChild(span);
      currentSeed++;
    }
  }, [text, seed]);

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Indie+Flower&family=Nothing+You+Could+Do&family=Reenie+Beanie&family=Shadows+Into+Light&display=swap');`}</style>
      <div
        ref={ref}
        className={className}
        style={{
          fontSize,
          color,
          letterSpacing,
          lineHeight,
          fontWeight,
          textAlign: align,
          wordWrap: "break-word",
        }}
      />
    </>
  );
}
