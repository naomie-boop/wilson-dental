"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Kenza A.", date: "08/08/2025", rating: 5, text: "Un grand merci au Dr Ohayon pour son professionnalisme ! C'est un dentiste vraiment minutieux, doux, à l'écoute et très pédagogue. Il prend le temps de tout expliquer et de rassurer, tout en étant très délicat dans ses gestes. Je le recommande vivement !" },
  { name: "Clara D.", date: "28/07/2025", rating: 5, text: "Je n'ai jamais été aussi satisfaite d'une visite chez le dentiste ! Depuis 2018, j'ai changé de dentiste pas moins de 7 fois. Je peux enfin dire que je ne changerai plus : le Dr Ohayon est doux, chaleureux, calme et extrêmement gentil." },
  { name: "Karim K.", date: "29/07/2025", rating: 5, text: "Excellent à tout point de vue : accueil, soin, explications, temps d'attente, etc. Fortement recommandé." },
  { name: "Ruth B.", date: "23/07/2025", rating: 5, text: "Le Dr David Ohayon est de loin le dentiste que tout le monde mérite d'avoir ! Allez-y les yeux fermés. De bons conseils, passionné et perfectionniste." },
  { name: "Claude G.", date: "22/05/2025", rating: 5, text: "Très bon accueil, diagnostic parfaitement expliqué et confiance pour la suite." },
  { name: "Raphael P.", date: "07/04/2025", rating: 5, text: "Très bon dentiste. M'a retiré les dents de sagesse sans faire mal, bravo l'artiste !" },
];

function Card({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex h-full flex-col rounded-xl border border-white/25 bg-white/12 p-5 backdrop-blur-xl sm:rounded-2xl sm:p-6"
      style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
    >
      <Quote className="h-6 w-6 text-primary/30" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-primary/15 text-sm font-bold text-primary">{t.name[0]}</div>
          <div>
            <div className="text-sm font-semibold text-foreground">{t.name}</div>
            <div className="text-[10px] text-muted-foreground">{t.date} · Google</div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-3.5 sm:w-3.5" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ y: 15 }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Témoignages</span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Avis de <span className="text-primary">nos patients</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 text-xs text-muted-foreground">Google Reviews</span>
            <button onClick={() => setPage((p) => Math.max(0, p - 1))} disabled={page === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-xl transition-all hover:bg-white/30 disabled:opacity-40"
              style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))} disabled={page === totalPages - 1}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur-xl transition-all hover:bg-white/30 disabled:opacity-40"
              style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>

        {/* Desktop: 3 cards grid */}
        <div className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <Card key={t.name} t={t} />
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="mt-6 sm:hidden">
          <Card t={testimonials[page]} />
          <div className="mt-4 flex justify-center gap-1.5">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${i === page ? "w-6 bg-primary" : "w-2 bg-white/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
