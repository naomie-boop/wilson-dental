"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Kenza A.", date: "08/08/2025", rating: 5, text: "Un grand merci au Dr Ohayon pour son professionnalisme ! C'est un dentiste vraiment minutieux, doux, à l'écoute et très pédagogue. Il prend le temps de tout expliquer et de rassurer, tout en étant très délicat dans ses gestes. Je suis ravie d'être tombée sur lui, j'ai enfin trouvé mon nouveau dentiste de confiance. Je le recommande vivement !" },
  { name: "Clara D.", date: "28/07/2025", rating: 5, text: "Extra ! Je n'ai jamais été aussi satisfaite d'une visite chez le dentiste ! Depuis 2018, j'ai changé de dentiste pas moins de 7 fois, étant une grande trouillarde. Je peux enfin dire que je ne changerai plus : le Dr Ohayon est doux, chaleureux, calme et extrêmement gentil. Chaque acte est expliqué avec clarté, calme et bienveillance. On sent immédiatement la passion qu'il a pour son métier. Un très grand merci, et à bientôt !" },
  { name: "Karim K.", date: "29/07/2025", rating: 5, text: "Excellent à tout point de vue : accueil, soin, explications, temps d'attente, etc. Fortement recommandé." },
  { name: "Ruth B.", date: "23/07/2025", rating: 5, text: "Je mets un avis car il le mérite. Le Dr David Ohayon est de loin le dentiste que tout le monde mérite d'avoir ! Allez-y les yeux fermés. De bons conseils, passionné et perfectionniste. Il a eu la patience nécessaire pour arriver à la perfection." },
  { name: "Claude G.", date: "22/05/2025", rating: 5, text: "Très bon accueil, diagnostic parfaitement expliqué et confiance pour la suite." },
  { name: "Raphael P.", date: "07/04/2025", rating: 5, text: "Très bon dentiste. M'a retiré les dents de sagesse sans faire mal, bravo l'artiste !" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Témoignages</span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Avis de <span className="text-primary">nos patients</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs text-muted-foreground">Google Reviews</span>
            <button onClick={() => setCurrent((c) => Math.max(0, c - 1))} disabled={current === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-xl transition-all duration-300 hover:bg-white/30 disabled:opacity-40 sm:h-12 sm:w-12"
              style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button onClick={() => setCurrent((c) => Math.min(testimonials.length - 1, c + 1))} disabled={current === testimonials.length - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-xl transition-all duration-300 hover:bg-white/30 disabled:opacity-40 sm:h-12 sm:w-12"
              style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
        </motion.div>

        <div className="mt-8 overflow-hidden sm:mt-12">
          <motion.div className="flex gap-4 sm:gap-6"
            animate={{ x: `-${current * (100 / 1)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${testimonials.length * 100}%` }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                style={{ width: `${100 / testimonials.length}%` }} className="flex-shrink-0">
                <div
                  className="flex h-full flex-col rounded-xl border border-white/25 bg-white/12 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 sm:rounded-2xl sm:p-8"
                  style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
                >
                  <Quote className="h-6 w-6 text-primary/30 sm:h-8 sm:w-8" />
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4 sm:mt-6 sm:pt-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-primary/15 text-sm font-bold text-primary backdrop-blur-md sm:h-10 sm:w-10">{t.name[0]}</div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{t.name}</div>
                        <div className="text-[10px] text-muted-foreground sm:text-xs">{t.date} · Google</div>
                      </div>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-4 sm:w-4" />
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
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-2 bg-white/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
