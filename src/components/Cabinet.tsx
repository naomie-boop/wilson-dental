"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/cabinet-reception.png",
    alt: "Accueil du cabinet Wilson Dental",
    label: "Accueil",
    span: "col-span-2 row-span-2",
    height: "h-64 sm:h-full",
  },
  {
    src: "/cabinet-salle2.png",
    alt: "Salle de soins équipée – fauteuil et écrans",
    label: "Salle de soins",
    span: "col-span-1",
    height: "h-48 sm:h-56",
  },
  {
    src: "/cabinet-salle1.png",
    alt: "Salle de consultation dentaire",
    label: "Consultation",
    span: "col-span-1",
    height: "h-48 sm:h-56",
  },
];

export default function Cabinet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-muted py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Le Cabinet
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Un espace moderne{" "}
            <span className="text-primary">et apaisant</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Découvrez nos locaux entièrement rénovés avec des équipements de
            dernière génération pour votre confort et votre sécurité.
          </p>
        </motion.div>

        {/* Mobile: stacked layout */}
        <div className="mt-10 space-y-4 sm:hidden">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={700}
                height={400}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: grid layout */}
        <div className="mt-12 hidden grid-cols-4 grid-rows-2 gap-4 sm:grid lg:mt-16 lg:gap-6">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-foreground backdrop-blur-sm">
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
