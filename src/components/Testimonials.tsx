"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kenza A.",
    date: "Août 2025",
    rating: 5,
    text: "Un grand merci au Dr Ohayon pour son professionnalisme ! C'est un dentiste vraiment minutieux, doux, à l'écoute et très pédagogue. Il prend le temps de tout expliquer et de rassurer. Je le recommande vivement !",
  },
  {
    name: "Clara D.",
    date: "Juillet 2025",
    rating: 5,
    text: "Je n'ai jamais été aussi satisfaite d'une visite chez le dentiste ! Depuis 2018, j'ai changé de dentiste pas moins de 7 fois. Je peux enfin dire que je ne changerai plus : le Dr Ohayon est doux, chaleureux, calme et extrêmement gentil.",
  },
  {
    name: "Karim K.",
    date: "Juillet 2025",
    rating: 5,
    text: "Excellent à tout point de vue : accueil, soin, explications, temps d'attente, etc. Fortement recommandé !",
  },
  {
    name: "Ruth B.",
    date: "Juillet 2025",
    rating: 5,
    text: "Le Dr David Ohayon est de loin le dentiste que tout le monde mérite d'avoir ! Allez-y les yeux fermés. De bons conseils, passionné et perfectionniste. Il a eu la patience nécessaire pour arriver à la perfection.",
  },
  {
    name: "Raphael P.",
    date: "Avril 2025",
    rating: 5,
    text: "Très bon dentiste. M'a retiré les dents de sagesse sans faire mal, bravo l'artiste !",
  },
  {
    name: "Claude G.",
    date: "Mai 2025",
    rating: 5,
    text: "Très bon accueil, diagnostic parfaitement expliqué et confiance pour la suite.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-muted to-white py-24 lg:py-32"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Témoignages
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-bold text-foreground lg:text-5xl">
              Ce que disent{" "}
              <span className="text-primary">nos patients</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-all hover:border-primary hover:text-primary disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              disabled={current === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-white transition-all hover:border-primary hover:text-primary disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-12 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${current * (100 / visibleCount + 2)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="w-full min-w-[calc(33.333%-1rem)] flex-shrink-0 max-lg:min-w-[calc(50%-0.75rem)] max-sm:min-w-full"
              >
                <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-lg">
                  <Quote className="h-8 w-8 text-primary/20" />
                  <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light font-bold text-primary">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">
                          {t.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {t.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="https://g.page/r/wilson-dental/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
          >
            Voir tous les avis sur Google
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
