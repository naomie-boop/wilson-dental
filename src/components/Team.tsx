"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import GlowCard from "./GlowCard";

const leadDoctor = {
  name: "Dr. David Ohayon",
  role: "Chirurgien-Dentiste",
  image: "/dr-ohayon.png",
  specialities: "Dentisterie adhésive · Chirurgie · Implantologie · Greffes osseuses",
  description: "Devenir dentiste était son objectif depuis l'âge de 8 ans. Minutieux, doux, à l'écoute et très pédagogue, il prend le temps de tout expliquer et de rassurer.",
  parcours: [
    "2023 : DU de Parodontologie Avancée, Université Nice Côte d'Azur",
    "2023 : Reconstitutions osseuses guidées, IFIP",
    "2019-2021 : CHU Implantologie, Hôpital Saint-Antoine, Paris",
    "2020 : Inlays, Onlays, Overlays, DentalClub",
    "2018 : Master en Sciences Dentaires, Université Libre de Bruxelles",
  ],
};

const doctors = [
  { name: "Dr. Simon Benyamin", image: "/dr-2.png", diploma: "Diplômé de l'Université Libre de Bruxelles", specialities: ["Dentisterie adhésive conservatrice", "Esthétique du sourire", "Réhabilitations complexes"] },
  { name: "Dr. Emmanuelle Soussan", image: "/dr-femme-1.png", diploma: "Diplômée de l'Université Paris 7 · DU d'Implantologie", specialities: ["Dentisterie adhésive conservatrice", "Parodontologie", "Chirurgie"] },
  { name: "Dr. Laura Bonnet", image: "/dr-femme-2.png", diploma: "Diplômée de l'Université de Madrid · Master Dentisterie Pédiatrique", specialities: ["Dentisterie pédiatrique"] },
  { name: "Dr. Lucien Deloume", image: "/dr-homme-2.png", diploma: "Diplômé de la Faculté de Bordeaux · DU d'Implantologie, Gênes", specialities: ["Soins conservateurs", "Prothèses dentaires", "Implantologie", "Parodontologie"] },
];

const assistants = [
  { image: "/assistante-1.png", name: "Ofélia" },
  { image: "/assistante-2.png", name: "Graziella" },
  { image: "/assistante-3.png", name: "Martine" },
  { image: "/assistante-4.png", name: "Pauline" },
];

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
          <p className="mx-auto mt-3 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Nos praticiens hautement qualifiés proposent une gamme complète de services, avec une approche personnalisée et innovante.
          </p>
        </motion.div>

        {/* Lead doctor */}
        <motion.div {...anim} transition={{ duration: 0.5, delay: 0.1 }} className="mt-10">
          <GlowCard glowColor="rgba(37, 99, 235, 0.6)" glowSize={350} borderRadius={24} borderWidth={2}>
            <div className="group bg-white/10 backdrop-blur-xl sm:flex">
              <div className="relative h-64 overflow-hidden sm:h-auto sm:w-2/5">
                <Image src={leadDoctor.image} alt={leadDoctor.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex-1 p-5 sm:p-8">
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">{leadDoctor.name}</h3>
                <p className="font-semibold text-primary">{leadDoctor.role}</p>
                <p className="mt-1 text-sm font-medium text-accent">{leadDoctor.specialities}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{leadDoctor.description}</p>
                <div className="mt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-foreground/60">Parcours</p>
                  <div className="space-y-1.5">
                    {leadDoctor.parcours.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground sm:text-sm">
                        <GraduationCap className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </motion.div>

        {/* Other doctors */}
        <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {doctors.map((doc, i) => (
            <motion.div key={doc.name} initial={{ y: 12 }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <GlowCard glowColor="rgba(37, 99, 235, 0.5)" glowSize={200} borderRadius={20} borderWidth={2}>
                <div className="group bg-white/10 backdrop-blur-xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={doc.image} alt={doc.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-sm font-bold text-white sm:text-base">{doc.name}</h3>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-[10px] leading-snug text-muted-foreground sm:text-xs">{doc.diploma}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {doc.specialities.map((s) => (
                        <span key={s} className="rounded-full border border-white/15 bg-primary/8 px-2 py-0.5 text-[9px] font-medium text-primary sm:text-[10px]">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Assistants */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-bold text-foreground">Nos secrétaires &amp; assistantes dentaires</h3>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3 sm:gap-4">
          {assistants.map((person) => (
            <div key={person.name}
              className="group overflow-hidden rounded-xl border border-white/15 bg-white/8 backdrop-blur-lg transition-all duration-300 hover:bg-white/15"
              style={{ boxShadow: "0 2px 16px -4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.2)" }}>
              <div className="relative aspect-square overflow-hidden">
                <Image src={person.image} alt={person.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-2 text-center sm:p-3">
                <p className="text-xs font-semibold text-foreground sm:text-sm">{person.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
