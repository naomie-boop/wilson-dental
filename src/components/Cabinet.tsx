"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const photos = [
  { src: "/cabinet-reception.png", alt: "Accueil du cabinet Wilson Dental", label: "Accueil", span: "col-span-2 row-span-2", height: "h-64 sm:h-full" },
  { src: "/cabinet-salle2.png", alt: "Salle de soins équipée", label: "Salle de soins", span: "col-span-1", height: "h-48 sm:h-56" },
  { src: "/cabinet-salle1.png", alt: "Salle de consultation", label: "Consultation", span: "col-span-1", height: "h-48 sm:h-56" },
];

export default function Cabinet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Le Cabinet</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Un espace moderne <span className="text-primary">et apaisant</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Découvrez nos locaux entièrement rénovés avec des équipements de dernière génération.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4 sm:hidden">
          {photos.map((photo, i) => (
            <motion.div key={photo.src} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/25"
              style={{ boxShadow: "0 8px_32px -8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <Image src={photo.src} alt={photo.alt} width={700} height={400} className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/5" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full border border-white/25 bg-white/30 px-3 py-1 text-xs font-semibold text-white backdrop-blur-xl">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 hidden grid-cols-4 grid-rows-2 gap-4 sm:grid lg:mt-16 lg:gap-6">
          {photos.map((photo, i) => (
            <motion.div key={photo.src} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/25 ${photo.span}`}
              style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <Image src={photo.src} alt={photo.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full border border-white/30 bg-white/20 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-xl">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
