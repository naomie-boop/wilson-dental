"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlowCard from "./GlowCard";

const photos = [
  { src: "/cabinet-reception.png", alt: "Accueil du cabinet Wilson Dental", label: "Accueil" },
  { src: "/cabinet-salle2.png", alt: "Salle de soins équipée", label: "Salle de soins" },
  { src: "/cabinet-salle1.png", alt: "Salle de consultation", label: "Consultation" },
];

const assistants = [
  { image: "/assistante-1.png", name: "Ofélia" },
  { image: "/assistante-2.png", name: "Graziella" },
  { image: "/assistante-3.png", name: "Martine" },
  { image: "/assistante-4.png", name: "Pauline" },
];

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

export default function Cabinet() {
  return (
    <section id="cabinet" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...anim} className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Le Cabinet</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Un espace moderne <span className="text-primary">et apaisant</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Découvrez nos locaux entièrement rénovés avec des équipements de
            dernière génération pour votre confort et votre sécurité.
          </p>
        </motion.div>

        {/* Mobile: stacked */}
        <div className="mt-8 space-y-4 sm:hidden">
          {photos.map((photo, i) => (
            <motion.div key={photo.src} initial={{ y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <GlowCard glowColor="rgba(37, 99, 235, 0.5)" glowSize={200} borderRadius={16} borderWidth={2}>
                <div className="group relative">
                  <Image src={photo.src} alt={photo.alt} width={700} height={400} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="rounded-full border border-white/25 bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">{photo.label}</span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="mt-10 hidden grid-cols-4 grid-rows-2 gap-4 sm:grid lg:gap-5">
          {photos.map((photo, i) => (
            <motion.div key={photo.src} initial={{ y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
              className={i === 0 ? "col-span-2 row-span-2" : "col-span-1"}>
              <GlowCard glowColor="rgba(37, 99, 235, 0.5)" glowSize={250} borderRadius={20} borderWidth={2} className="h-full">
                <div className="group relative h-full">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-xl">{photo.label}</span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Assistants */}
        <motion.div {...anim} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 text-center sm:mt-12">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">Nos secrétaires &amp; assistantes dentaires</h3>
          <p className="mt-1 text-sm text-muted-foreground">Dévouées pour votre accueil et votre confort au quotidien</p>
        </motion.div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {assistants.map((person, i) => (
            <motion.div key={person.name} initial={{ y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}>
              <div
                className="group overflow-hidden rounded-xl border border-white/15 bg-white/8 backdrop-blur-lg transition-all duration-300 hover:bg-white/15"
                style={{ boxShadow: "0 2px 16px -4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.2)" }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image src={person.image} alt={person.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-2 text-center sm:p-3">
                  <p className="text-xs font-semibold text-foreground sm:text-sm">{person.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
