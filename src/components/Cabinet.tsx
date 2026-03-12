"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextFluxUnveil from "./TextFluxUnveil";
import RingGallery from "./RingGallery";

const cards = [
  { image: "/cabinet-reception.png", title: "Accueil", description: "Un espace moderne et chaleureux pour vous recevoir" },
  { image: "/cabinet-salle2.png", title: "Salle de soins", description: "Équipements dernière génération" },
  { image: "/cabinet-salle1.png", title: "Consultation", description: "Cadre lumineux et apaisant" },
  { image: "/hero-surgery.png", title: "En soin", description: "Expertise et précision au quotidien" },
  { image: "/dr-ohayon.png", title: "Dr. Ohayon", description: "Passionné et perfectionniste" },
  { image: "/dr-2.png", title: "L'équipe", description: "Rigueur et bienveillance" },
];

export default function Cabinet() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 sm:py-24 lg:py-32">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl sm:mt-12 sm:max-w-2xl lg:max-w-3xl"
        >
          <RingGallery
            cards={cards}
            heading="Un espace moderne et apaisant"
            subheading="Wilson Dental · Levallois-Perret"
            speed={0.7}
            radius={0.38}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-center"
        >
          <TextFluxUnveil
            text="Découvrez nos locaux entièrement rénovés avec des équipements de dernière génération pour votre confort et votre sécurité."
            tag="p"
            className="text-base text-muted-foreground sm:text-lg"
            startFromWord={1}
            initialOpacity={0.12}
            fullRevealDistance={200}
          />
        </motion.div>
      </div>
    </section>
  );
}
