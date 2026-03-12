"use client";

import { useRef, useState, useMemo } from "react";
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
  cardWidth?: number;
  cardHeight?: number;
  gap?: number;
  maxRotation?: number;
  borderRadius?: number;
  className?: string;
}

export default function ParallaxMarquee({
  cards,
  speed = 0.8,
  cardWidth = 220,
  cardHeight = 280,
  gap = 80,
  maxRotation = 12,
  borderRadius = 16,
  className = "",
}: ParallaxMarqueeProps) {
  const [offset, setOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
      style={{ height: cardHeight + 200, perspective: 1200 }}
    >
      <div className="absolute inset-0 flex items-center">
        {duped.map((card, i) => {
          const x = i * (cardWidth + gap) - offset;
          const depthScale = 1 + card.depth / 300;
          const parallax = (card.depth / 100) * (offset * 0.3);
          const rotY = ((x / totalWidth) * maxRotation * 2 - maxRotation) * (card.depth / 100);

          return (
            <motion.div
              key={i}
              className="absolute overflow-hidden border border-white/20"
              style={{
                width: cardWidth,
                height: cardHeight,
                left: x - parallax,
                top: `calc(50% + ${card.yOffset}px)`,
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
