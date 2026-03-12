"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CardData {
  image: string;
  title: string;
  description: string;
}

interface RingGalleryProps {
  cards: CardData[];
  heading?: string;
  subheading?: string;
  speed?: number;
  radius?: number;
}

export default function RingGallery({
  cards,
  heading = "",
  subheading = "",
  speed = 0.8,
  radius = 0.38,
}: RingGalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      if (galleryRef.current) setSize(galleryRef.current.offsetWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    if (galleryRef.current) ro.observe(galleryRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let raf: number;
    let last = performance.now();
    const animate = (now: number) => {
      const delta = now - last;
      last = now;
      setRotation((r) => r + speed * 0.001 * (delta / 16));
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  const r = size * radius;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div
      ref={galleryRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1 / 1" }}
    >
      {/* Center text */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
        {heading && (
          <h2
            className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl"
            style={{ textShadow: "0 4px 16px rgba(0,0,0,0.06)" }}
          >
            {heading}
          </h2>
        )}
        {subheading && (
          <p
            className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground sm:text-sm"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
          >
            {subheading}
          </p>
        )}
      </div>

      {/* Orbiting cards */}
      {size > 0 &&
        cards.map((card, i) => {
          const angle = (i / cards.length) * 2 * Math.PI - Math.PI / 2 + rotation;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          const deg = (angle + Math.PI / 2) * (180 / Math.PI);
          const isFlipped = hovered === i;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: x,
                top: y,
                transform: `translate(-50%, -50%) rotate(${deg}deg)`,
                zIndex: isFlipped ? 20 : 2,
                perspective: 1000,
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative h-32 w-24 sm:h-36 sm:w-28 lg:h-40 lg:w-32"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s cubic-bezier(.4,0,.2,1)",
                  transform: isFlipped ? "rotateY(180deg) scale(1.1)" : "rotateY(0deg) scale(1)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20 shadow-lg"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Image src={card.image} alt={card.title} fill className="object-cover" sizes="128px" />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-white/20 bg-white/15 p-3 text-center backdrop-blur-xl"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)",
                  }}
                >
                  <h3 className="text-xs font-bold text-foreground sm:text-sm">{card.title}</h3>
                  <p className="mt-1 text-[9px] leading-tight text-muted-foreground sm:text-[10px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
