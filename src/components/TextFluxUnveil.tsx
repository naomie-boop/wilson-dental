"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { useScroll, useInView } from "framer-motion";

interface TextFluxUnveilProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  startFromWord?: number;
  initialOpacity?: number;
  fadeDuration?: number;
  fullRevealDistance?: number;
}

export default function TextFluxUnveil({
  text,
  className = "",
  tag: Tag = "p",
  startFromWord = 1,
  initialOpacity = 0.4,
  fadeDuration = 0.15,
  fullRevealDistance = 250,
}: TextFluxUnveilProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-10% 0px -10% 0px" });
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setElementTop(rect.top + window.scrollY);
        setWindowHeight(window.innerHeight);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      const trigger = elementTop - windowHeight;
      const progress = Math.max(0, Math.min(1, (latest - trigger) / fullRevealDistance));
      setScrollProgress(progress);
    });
    return unsub;
  }, [scrollY, elementTop, windowHeight, fullRevealDistance]);

  const words = useMemo(() => text.split(" ").filter((w) => w.length > 0), [text]);
  const wordsToAnimate = words.length - (startFromWord - 1);

  if (!mounted) {
    return (
      <div ref={containerRef}>
        <Tag className={className}>{text}</Tag>
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <Tag className={className}>
        {words.map((word, i) => {
          const wordIdx = i + 1;
          if (wordIdx < startFromWord) {
            return (
              <span key={i} style={{ display: "inline-block", marginRight: "0.3em" }}>
                {word}
              </span>
            );
          }
          const relIdx = i - (startFromWord - 1);
          const revealStart = relIdx / wordsToAnimate;
          const revealEnd = (relIdx + 1) / wordsToAnimate;
          let opacity = initialOpacity;
          if (!isInView) {
            opacity = initialOpacity;
          } else if (scrollProgress >= revealEnd) {
            opacity = 1;
          } else if (scrollProgress > revealStart) {
            const p = (scrollProgress - revealStart) / (revealEnd - revealStart);
            opacity = initialOpacity + (1 - initialOpacity) * p;
          }
          return (
            <span
              key={i}
              style={{ display: "inline-block", marginRight: "0.3em", opacity, transition: `opacity ${fadeDuration}s ease-out` }}
            >
              {word}
            </span>
          );
        })}
      </Tag>
    </div>
  );
}
