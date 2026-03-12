"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ParallaxMarquee from "./ParallaxMarquee";

const marqueeCards = [
  { src: "/cabinet-reception.png", alt: "Accueil Wilson Dental", depth: 0, yOffset: -40 },
  { src: "/cabinet-salle2.png", alt: "Salle de soins", depth: 80, yOffset: 50 },
  { src: "/hero-surgery.png", alt: "En soin", depth: -30, yOffset: -20 },
  { src: "/cabinet-salle1.png", alt: "Consultation", depth: 60, yOffset: 70 },
  { src: "/dr-ohayon.png", alt: "Dr. Ohayon", depth: -50, yOffset: -60 },
  { src: "/cabinet-reception.png", alt: "Accueil", depth: 100, yOffset: 30 },
  { src: "/cabinet-salle2.png", alt: "Salle de soins 2", depth: 20, yOffset: -30 },
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
      </div>

      {/* Parallax marquee - full width */}
      <div className="mt-8 sm:mt-10">
        <ParallaxMarquee
          cards={marqueeCards}
          speed={0.7}
          cardWidth={240}
          cardHeight={300}
          gap={60}
          maxRotation={10}
          borderRadius={20}
        />
      </div>

      {/* Assistants */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...anim} transition={{ duration: 0.5, delay: 0.2 }} className="mt-10 text-center sm:mt-12">
          <h3 className="text-lg font-bold text-foreground sm:text-xl">Nos secrétaires &amp; assistantes dentaires</h3>
          <p className="mt-1 text-sm text-muted-foreground">Dévouées pour votre accueil et votre confort au quotidien</p>
        </motion.div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {assistants.map((person, i) => (
            <motion.div key={person.name} initial={{ y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}>
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
