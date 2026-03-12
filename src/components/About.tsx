"use client";

import { motion } from "framer-motion";
import { Stethoscope, Sparkles, Baby, Syringe } from "lucide-react";
import Image from "next/image";
import GlassButton from "./GlassButton";

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

export default function About() {
  return (
    <section id="about" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div {...anim}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">À propos de nous</span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Des soins de <span className="text-primary">haute qualité</span>
            </h2>

            <div className="relative my-5 overflow-hidden rounded-2xl border border-white/25 lg:hidden"
              style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <Image src="/hero-surgery.png" alt="L'équipe Wilson Dental en soin" width={600} height={340}
                className="h-48 w-full object-cover sm:h-56" />
            </div>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wilson Dental est fier de fournir des soins dentaires de haute
              qualité avec les dernières avancées technologiques. Nos dentistes
              offrent une gamme complète de soins, allant de la dentisterie
              pédiatrique à la chirurgie dentaire avancée.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cabinet dentaire libéral situé au 57 rue du Président Wilson à
              Levallois-Perret, nous offrons des soins selon les dernières données
              acquises de la science dans une atmosphère moderne et relaxante.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <GlassButton href="#services" variant="primary" size="md">Découvrir nos soins</GlassButton>
              <GlassButton href="#team" variant="secondary" size="md">Découvrir l&apos;équipe</GlassButton>
            </div>
          </motion.div>

          <motion.div {...anim} transition={{ duration: 0.5, delay: 0.15 }} className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { icon: Stethoscope, title: "Dentisterie de pointe", description: "Équipements et techniques de dernière génération" },
              { icon: Sparkles, title: "Experts en esthétique", description: "Blanchiment, facettes, smile design" },
              { icon: Baby, title: "Soins pour enfants", description: "Approche douce et adaptée aux plus jeunes" },
              { icon: Syringe, title: "Chirurgie avancée", description: "Implants, greffes et chirurgie orale" },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-white/25 bg-white/15 p-4 backdrop-blur-xl transition-all duration-300 hover:bg-white/25 hover:-translate-y-0.5 sm:rounded-2xl sm:p-6"
                style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-primary/15 text-primary backdrop-blur-md transition-all group-hover:bg-primary/25 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-3 text-sm font-bold text-foreground sm:mt-4 sm:text-base">{item.title}</div>
                <div className="mt-0.5 text-[10px] leading-snug text-muted-foreground sm:mt-1 sm:text-xs">{item.description}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
