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
    text: "Le Dr David Ohayon est de loin le dentiste que tout le monde mérite d'avoir ! Allez-y les yeux fermés. De bons conseils, passionné et perfectionniste.",
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

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(testimonials.length - 1, c + 1));

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-muted to-white py-16 sm:py-24 lg:py-32"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Témoignages
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Ce que disent{" "}
              <span className="text-primary">nos patients</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-all hover:border-primary hover:text-primary disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={next}
              disabled={current === testimonials.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white transition-all hover:border-primary hover:text-primary disabled:opacity-40 sm:h-12 sm:w-12"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-8 overflow-hidden sm:mt-12">
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: `-${current * (100 / 1)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                style={{ width: `${100 / testimonials.length}%` }}
                className="flex-shrink-0"
              >
                <div className="flex h-full flex-col rounded-xl border border-border bg-white p-5 transition-all hover:shadow-lg sm:rounded-2xl sm:p-8">
                  <Quote className="h-6 w-6 text-primary/20 sm:h-8 sm:w-8" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4 sm:mt-6 sm:pt-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-primary sm:h-10 sm:w-10">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">
                          {t.name}
                        </div>
                        <div className="text-[10px] text-muted-foreground sm:text-xs">
                          {t.date}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star
                          key={j}
                          className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-4 sm:w-4"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5 sm:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center sm:mt-10"
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
