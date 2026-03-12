"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const assistants = [
  { image: "/assistante-1.png", name: "Ofélia" },
  { image: "/assistante-2.png", name: "Graziella" },
  { image: "/assistante-3.png", name: "Martine" },
  { image: "/assistante-4.png", name: "Pauline" },
];

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

export default function Assistants() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...anim} className="text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Nos secrétaires &amp; <span className="text-primary">assistantes dentaires</span>
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Dévouées pour votre accueil et votre confort au quotidien
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {assistants.map((person, i) => (
            <motion.div key={person.name} initial={{ y: 10 }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
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
