"use client";

import { motion } from "framer-motion";
import ParallaxMarquee from "./ParallaxMarquee";

const marqueeCards = [
  { src: "/cabinet-reception.png", alt: "Accueil Wilson Dental", depth: 0, yOffset: -25 },
  { src: "/cabinet-salle2.png", alt: "Salle de soins", depth: 60, yOffset: 35 },
  { src: "/cabinet-attente.png", alt: "Salle d'attente", depth: -20, yOffset: -15 },
  { src: "/cabinet-salle1.png", alt: "Consultation", depth: 40, yOffset: 45 },
  { src: "/cabinet-carte.png", alt: "Carte de visite Wilson Dental", depth: -35, yOffset: -40 },
  { src: "/hero-surgery.png", alt: "Équipe en soin", depth: 70, yOffset: 20 },
  { src: "/cabinet-salle3.png", alt: "Fauteuil de soins", depth: 15, yOffset: -20 },
  { src: "/cabinet-soin-detail.png", alt: "Soin dentaire de précision", depth: -25, yOffset: 40 },
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
      </div>

      <div className="mt-8 sm:mt-10">
        <ParallaxMarquee
          cards={marqueeCards}
          speed={0.7}
          maxRotation={10}
          borderRadius={16}
        />
      </div>
    </section>
  );
}
