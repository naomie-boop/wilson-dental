"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Kenza A.", date: "08/08/2025", rating: 5, text: "Un grand merci au Dr Ohayon pour son professionnalisme ! C'est un dentiste vraiment minutieux, doux, à l'écoute et très pédagogue. Il prend le temps de tout expliquer et de rassurer. Je le recommande vivement !" },
  { name: "Clara D.", date: "28/07/2025", rating: 5, text: "Je n'ai jamais été aussi satisfaite d'une visite chez le dentiste ! Depuis 2018, j'ai changé de dentiste pas moins de 7 fois. Le Dr Ohayon est doux, chaleureux, calme et extrêmement gentil." },
  { name: "Fatimanaqrouz N.", date: "02/2026", rating: 5, text: "Un grand merci à Dr Deloume, professionnel, patient et bienveillant. Sans oublier les secrétaires et les assistantes." },
  { name: "Leila S.", date: "01/2026", rating: 5, text: "Expérience superbe, le Dr. Ohayon est très à l'écoute et rassurant. Merci." },
  { name: "LAURENT B.", date: "12/2025", rating: 5, text: "Super praticien le docteur Ohayon est à l'écoute et très professionnel, diagnostique excellent. Je ne peux que recommander." },
  { name: "Sylvain D.", date: "12/2025", rating: 5, text: "Très bon accueil. Très professionnel." },
  { name: "Kévin L.", date: "11/2025", rating: 5, text: "Soins impeccables avec le Dr David Ohayon, je suis ravi du résultat, je recommande !" },
  { name: "Karim K.", date: "29/07/2025", rating: 5, text: "Excellent à tout point de vue : accueil, soin, explications, temps d'attente, etc. Fortement recommandé." },
  { name: "Ruth B.", date: "23/07/2025", rating: 5, text: "Le Dr David Ohayon est de loin le dentiste que tout le monde mérite d'avoir ! Allez-y les yeux fermés. Passionné et perfectionniste." },
  { name: "Karine C.", date: "06/2025", rating: 5, text: "Mon fils de 15 ans a été très bien soigné par le Dr Sophie Deliry. La douceur et la pédagogie du Dr Deliry ont eu raison de ses inquiétudes !" },
  { name: "Damien B.", date: "06/2025", rating: 5, text: "J'ai eu la chance de passer entre les mains du docteur Moioli. Elle est douce, méticuleuse et très professionnelle. Je recommande à 100%." },
  { name: "Claude G.", date: "22/05/2025", rating: 5, text: "Très bon accueil, diagnostic parfaitement expliqué et confiance pour la suite." },
  { name: "Raphael P.", date: "07/04/2025", rating: 5, text: "Très bon dentiste. M'a retiré les dents de sagesse sans faire mal, bravo l'artiste !" },
  { name: "Joseph K.", date: "04/2025", rating: 5, text: "Récemment installé à Levallois-Perret, Wilson Dental est remarquable pour plusieurs raisons : accueil, professionnalisme des soignants." },
  { name: "Sam G.", date: "2024", rating: 5, text: "Super cabinet dentaire. Je vous conseille fortement le Dr. Johanna Ben Hamou, qui m'a soigné de manière très professionnelle." },
  { name: "Ema", date: "02/2026", rating: 1, text: "Deux rendez-vous annulés la veille alors que je les avais pris des semaines en avance." },
];

function ReviewCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="flex h-full flex-col rounded-xl border border-white/25 bg-white/12 p-5 backdrop-blur-xl sm:rounded-2xl sm:p-6"
      style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
    >
      <Quote className="h-5 w-5 text-primary/30" />
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-primary/15 text-xs font-bold text-primary">{t.name[0]}</div>
          <div>
            <div className="text-xs font-semibold text-foreground sm:text-sm">{t.name}</div>
            <div className="text-[9px] text-muted-foreground sm:text-[10px]">{t.date} · Google</div>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: t.rating }).map((_, j) => (
            <Star key={j} className={`h-3 w-3 ${t.rating >= 4 ? "fill-amber-400 text-amber-400" : "fill-gray-300 text-gray-300"}`} />
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
            <span className="mr-2 text-xs text-muted-foreground">
              {testimonials.length} avis Google
            </span>
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

        {/* Desktop: 3 cards */}
        <div className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <ReviewCard key={t.name + t.date} t={t} />
          ))}
        </div>

        {/* Mobile: single card with dots */}
        <div className="mt-6 sm:hidden">
          <ReviewCard t={testimonials[page]} />
          <div className="mt-4 flex items-center justify-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i)}
                className={`h-2 rounded-full transition-all ${i === page ? "w-5 bg-primary" : "w-2 bg-white/30"}`} />
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className="text-xs text-muted-foreground">
            Page {page + 1} / {totalPages}
          </span>
        </div>
      </div>
    </section>
  );
}
