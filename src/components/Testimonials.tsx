"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { motion, useAnimationFrame, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Kenza A.", role: "08/2025 · Google", stars: 5, text: "Un grand merci au Dr Ohayon pour son professionnalisme ! Minutieux, doux, à l'écoute et très pédagogue. Je le recommande vivement !" },
  { name: "Clara D.", role: "07/2025 · Google", stars: 5, text: "Je n'ai jamais été aussi satisfaite d'une visite chez le dentiste ! Le Dr Ohayon est doux, chaleureux, calme et extrêmement gentil." },
  { name: "Fatimanaqrouz N.", role: "02/2026 · Google", stars: 5, text: "Un grand merci à Dr Deloume, professionnel, patient et bienveillant. Sans oublier les secrétaires et les assistantes." },
  { name: "Leila S.", role: "01/2026 · Google", stars: 5, text: "Expérience superbe, le Dr. Ohayon est très à l'écoute et rassurant. Merci." },
  { name: "LAURENT B.", role: "12/2025 · Google", stars: 5, text: "Super praticien le docteur Ohayon est à l'écoute et très professionnel, diagnostique excellent." },
  { name: "Sylvain D.", role: "12/2025 · Google", stars: 5, text: "Très bon accueil. Très professionnel." },
  { name: "Kévin L.", role: "11/2025 · Google", stars: 5, text: "Soins impeccables avec le Dr David Ohayon, je suis ravi du résultat, je recommande !" },
  { name: "Karim K.", role: "07/2025 · Google", stars: 5, text: "Excellent à tout point de vue : accueil, soin, explications, temps d'attente. Fortement recommandé." },
  { name: "Ruth B.", role: "07/2025 · Google", stars: 5, text: "Le Dr David Ohayon est de loin le dentiste que tout le monde mérite d'avoir ! Passionné et perfectionniste." },
  { name: "Karine C.", role: "06/2025 · Google", stars: 5, text: "Mon fils de 15 ans a été très bien soigné par le Dr Deliry. La douceur et la pédagogie ont eu raison de ses inquiétudes !" },
  { name: "Damien B.", role: "06/2025 · Google", stars: 5, text: "Le docteur Moioli est douce, méticuleuse et très professionnelle. Je recommande à 100%." },
  { name: "Claude G.", role: "05/2025 · Google", stars: 5, text: "Très bon accueil, diagnostic parfaitement expliqué et confiance pour la suite." },
  { name: "Raphael P.", role: "04/2025 · Google", stars: 5, text: "Très bon dentiste. M'a retiré les dents de sagesse sans faire mal, bravo l'artiste !" },
  { name: "Joseph K.", role: "04/2025 · Google", stars: 5, text: "Wilson Dental est remarquable : accueil, professionnalisme des soignants." },
  { name: "Sam G.", role: "2024 · Google", stars: 5, text: "Super cabinet dentaire. Je conseille fortement le Dr. Johanna Ben Hamou, très professionnelle." },
];

function ReviewCard({ item, width }: { item: typeof testimonials[0]; width: number }) {
  return (
    <article
      className="flex-shrink-0 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all duration-200 hover:bg-white/18"
      style={{
        width,
        boxShadow: "0 2px 16px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.25)",
      }}
    >
      <div className="flex gap-1">
        {Array.from({ length: item.stars }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{item.text}&rdquo;</p>
      <div className="mt-3 flex items-center gap-2.5 border-t border-white/15 pt-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-primary/15 text-xs font-bold text-primary">
          {item.name[0]}
        </div>
        <div>
          <div className="text-xs font-semibold text-foreground">{item.name}</div>
          <div className="text-[10px] text-muted-foreground">{item.role}</div>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({ items, direction, speed, cardWidth, gap }: {
  items: typeof testimonials;
  direction: "left" | "right";
  speed: number;
  cardWidth: number;
  gap: number;
}) {
  const [offset, setOffset] = useState(0);
  const tripled = useMemo(() => [...items, ...items, ...items], [items]);
  const totalWidth = useMemo(() => items.length * (cardWidth + gap), [items.length, cardWidth, gap]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "200px" });

  useAnimationFrame((_time, delta) => {
    if (!isInView) return;
    const dir = direction === "left" ? 1 : -1;
    setOffset((prev) => {
      const next = prev + dir * speed * (delta / 16);
      if (direction === "left" && next >= totalWidth) return next - totalWidth;
      if (direction === "right" && next <= -totalWidth) return next + totalWidth;
      return next;
    });
  });

  return (
    <div ref={containerRef} className="overflow-hidden py-2">
      <div
        className="flex"
        style={{
          gap,
          transform: `translateX(${direction === "left" ? -offset : offset}px)`,
          willChange: "transform",
        }}
      >
        {tripled.map((item, i) => (
          <ReviewCard key={`${item.name}-${i}`} item={item} width={cardWidth} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 8);
  const row2 = [...testimonials.slice(8), ...testimonials.slice(0, 3)];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const cardWidth = isMobile ? 260 : 320;
  const gap = isMobile ? 12 : 20;

  return (
    <section id="testimonials" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Témoignages</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Avis de <span className="text-primary">nos patients</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">4.8/5 sur Google · ~60 avis</p>
        </div>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#e8eef5] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#e8eef5] to-transparent sm:w-24" />

        <MarqueeRow items={row1} direction="left" speed={0.5} cardWidth={cardWidth} gap={gap} />
        <MarqueeRow items={row2} direction="right" speed={0.4} cardWidth={cardWidth} gap={gap} />
      </div>
    </section>
  );
}
