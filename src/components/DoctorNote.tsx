"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Handwriting from "./Handwriting";

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

export default function DoctorNote() {
  return (
    <section className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div {...anim}>
          <div
            className="relative overflow-hidden rounded-2xl border border-white/25 bg-white/15 p-6 backdrop-blur-xl sm:rounded-3xl sm:p-10 lg:p-14"
            style={{ boxShadow: "0 8px 40px -10px rgba(0,0,0,0.08), inset 0 1px 2px rgba(255,255,255,0.3)" }}
          >
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:gap-10">
              <div className="flex-shrink-0">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white/30 sm:h-36 sm:w-36"
                  style={{ boxShadow: "0 4px 20px -4px rgba(0,0,0,0.1)" }}>
                  <Image src="/dr-ohayon.png" alt="Dr. David Ohayon" fill className="object-cover object-top" />
                </div>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary sm:text-sm">
                  Le mot du docteur
                </p>

                <div className="mt-4">
                  <Handwriting
                    text="Devenir dentiste était mon rêve depuis l'âge de 8 ans. Ce qui me motive chaque jour, c'est de voir des familles entières nous faire confiance. Ici, on ne refuse jamais un patient, on accueille les urgences, et on prend le temps d'expliquer. Nos équipements numériques — imprimante 3D, écrans au plafond — ne sont pas là pour impressionner, mais pour rendre chaque soin plus précis et plus confortable. Votre sourire, c'est notre fierté."
                    fontSize={22}
                    color="#1a1a2e"
                    lineHeight={1.6}
                    seed={7}
                    align="left"
                  />
                </div>

                <div className="mt-6 flex items-center gap-3 sm:mt-8">
                  <div className="h-px flex-1 bg-foreground/10" />
                  <Handwriting
                    text="Dr. David Ohayon"
                    fontSize={28}
                    color="#2563eb"
                    fontWeight={700}
                    seed={15}
                    align="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
