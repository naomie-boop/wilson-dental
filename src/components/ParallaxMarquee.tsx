"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { motion, useAnimationFrame } from "framer-motion";

interface MarqueeCard {
  src: string;
  alt: string;
  depth: number;
  yOffset: number;
}

interface ParallaxMarqueeProps {
  cards: MarqueeCard[];
  speed?: number;
  maxRotation?: number;
  borderRadius?: number;
  className?: string;
}

export default function ParallaxMarquee({
  cards,
  speed = 0.8,
  maxRotation = 12,
  borderRadius = 16,
  className = "",
}: ParallaxMarqueeProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardWidth = isMobile ? 150 : 240;
  const cardHeight = isMobile ? 190 : 300;
  const gap = isMobile ? 30 : 60;
  const depthFactor = isMobile ? 0.3 : 1;
  const yFactor = isMobile ? 0.3 : 1;

  const totalWidth = useMemo(() => cards.length * (cardWidth + gap), [cards.length, cardWidth, gap]);
  const duped = useMemo(() => [...cards, ...cards, ...cards], [cards]);

  useAnimationFrame((_time, delta) => {
    setOffset((prev) => {
      const next = prev + speed * (delta / 16);
      return next >= totalWidth ? next - totalWidth : next;
    });
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{ height: isMobile ? cardHeight + 80 : cardHeight + 160, perspective: 1200 }}
    >
      <div className="absolute inset-0 flex items-center">
        {duped.map((card, i) => {
          const x = i * (cardWidth + gap) - offset;
          const depth = card.depth * depthFactor;
          const yOff = card.yOffset * yFactor;
          const depthScale = 1 + depth / 300;
          const parallax = (depth / 100) * (offset * 0.3);
          const rotY = isMobile ? 0 : ((x / totalWidth) * maxRotation * 2 - maxRotation) * (depth / 100);

          return (
            <motion.div
              key={i}
              className="absolute overflow-hidden border border-white/20"
              style={{
                width: cardWidth,
                height: cardHeight,
                left: x - parallax,
                top: `calc(50% + ${yOff}px)`,
                transform: `translateY(-50%) scale(${depthScale}) rotateY(${rotY}deg)`,
                transformStyle: "preserve-3d",
                borderRadius,
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.12), inset 0 1px 1px rgba(255,255,255,0.2)",
                willChange: "transform",
              }}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
