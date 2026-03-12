"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. David Ohayon",
    image: "/dr-ohayon.png",
    diploma: "Master en Sciences Dentaires, ULB",
    specialities: ["Chirurgie", "Implantologie", "Greffes osseuses", "Parodontologie"],
    description: "Sa spécialité phare : la chirurgie et l'implantologie. Minutieux, doux, à l'écoute et très pédagogue.",
    parcours: ["DU Parodontologie, Nice", "CHU Implantologie, Saint-Antoine", "Reconstitutions osseuses, IFIP"],
  },
  {
    name: "Dr. Simon Benyamin",
    image: "/dr-2.png",
    diploma: "Diplômé de l'Université Libre de Bruxelles",
    specialities: ["Omnipratique", "Esthétique du sourire", "Prothèses", "Parodontologie"],
    description: "Omnipraticien complet — soins courants, prothèses, parodontologie. Sa spécialité principale : l'esthétique.",
    parcours: [],
  },
  {
    name: "Dr. Emmanuelle Soussan",
    image: "/dr-femme-1.png",
    diploma: "Diplômée de l'Université de Paris · DU Implantologie, Hôpital Rothschild",
    specialities: ["Dentisterie adhésive conservatrice", "Parodontologie", "Chirurgie"],
    description: "Expérimentée et polyvalente, elle apporte son expertise en parodontologie et chirurgie.",
    parcours: ["Permis d'exercer – Ordre des dentistes du Québec"],
  },
  {
    name: "Dr. Laura Bonnet",
    image: "/dr-femme-2.png",
    diploma: "Diplômée de l'Université de Madrid · Master Dentisterie Pédiatrique",
    specialities: ["Pédodontie (exclusif)"],
    description: "Exercice exclusivement dédié aux soins des enfants. Douce, patiente et rassurante.",
    parcours: [],
  },
  {
    name: "Dr. Lucien Deloume",
    image: "/dr-homme-2.png",
    diploma: "Diplômé de la Faculté de Bordeaux · DU Implantologie, Université de Gênes",
    specialities: ["Soins conservateurs", "Prothèses", "Implantologie", "Parodontologie"],
    description: "Polyvalent et rigoureux, il couvre un large spectre de soins dentaires.",
    parcours: [],
  },
];

function FlipCard({ doc, index }: { doc: typeof doctors[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped((f) => !f)}
    >
      <div
        className="relative h-[380px] sm:h-[420px]"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s cubic-bezier(.4,0,.2,1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front: photo */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-white/20"
          style={{ backfaceVisibility: "hidden", boxShadow: "0 4px 24px -6px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.3)" }}
        >
          <Image src={doc.image} alt={doc.name} fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-base font-bold text-white sm:text-lg">{doc.name}</h3>
            <p className="text-xs text-white/70">Survolez pour voir le détail</p>
          </div>
        </div>

        {/* Back: details */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl border border-white/25 bg-white/15 p-5 backdrop-blur-2xl sm:p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            boxShadow: "0 4px 24px -6px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.3)",
          }}
        >
          <h3 className="text-lg font-bold text-foreground">{doc.name}</h3>
          <p className="text-xs font-medium text-primary">{doc.diploma}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{doc.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {doc.specialities.map((s) => (
              <span key={s} className="rounded-full border border-white/15 bg-primary/10 px-2.5 py-0.5 text-[10px] font-medium text-primary sm:text-xs">{s}</span>
            ))}
          </div>

          {doc.parcours.length > 0 && (
            <div className="mt-4 space-y-1.5">
              {doc.parcours.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <GraduationCap className="mt-0.5 h-3 w-3 flex-shrink-0 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}

          <p className="mt-auto pt-4 text-[10px] text-muted-foreground/60"></p>
        </div>
      </div>
    </motion.div>
  );
}

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

export default function Team() {
  return (
    <section id="team" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...anim} className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">L&apos;Équipe</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Nos <span className="text-primary">praticiens</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Survolez un praticien pour découvrir son parcours et ses spécialités.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-5">
          {doctors.map((doc, i) => (
            <FlipCard key={doc.name} doc={doc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
