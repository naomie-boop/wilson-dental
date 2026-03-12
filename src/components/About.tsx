"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Sparkles, Baby, Syringe } from "lucide-react";
import Image from "next/image";
import GlassButton from "./GlassButton";
import TextFluxUnveil from "./TextFluxUnveil";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 1, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              À propos de nous
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Des soins de{" "}
              <span className="text-primary">haute qualité</span>
            </h2>

            <div className="relative my-6 overflow-hidden rounded-2xl border border-white/25 lg:hidden"
              style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <Image src="/hero-surgery.png" alt="L'équipe Wilson Dental en soin" width={600} height={340}
                className="h-48 w-full object-cover sm:h-64" />
            </div>

            <TextFluxUnveil
              text="Wilson Dental est fier de fournir des soins dentaires de haute qualité avec les dernières avancées technologiques. Nos dentistes offrent une gamme complète de soins, allant de la dentisterie pédiatrique à la chirurgie dentaire avancée. Wilson Dental est un cabinet dentaire libéral situé au 57 rue du Président Wilson à Levallois-Perret. Nous offrons des soins dentaires selon les dernières données acquises de la science dans une atmosphère moderne et relaxante."
              tag="p"
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
              startFromWord={1}
              initialOpacity={0.12}
              fullRevealDistance={300}
            />

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <GlassButton href="#services" variant="primary" size="md">
                Découvrir nos soins
              </GlassButton>
              <GlassButton href="#team" variant="secondary" size="md">
                Découvrir l&apos;équipe
              </GlassButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              { icon: Stethoscope, title: "Dentisterie de pointe", description: "Équipements et techniques de dernière génération" },
              { icon: Sparkles, title: "Experts en esthétique", description: "Blanchiment, facettes, smile design" },
              { icon: Baby, title: "Soins pour enfants", description: "Approche douce et adaptée aux plus jeunes" },
              { icon: Syringe, title: "Chirurgie avancée", description: "Implants, greffes et chirurgie orale" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 1, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group rounded-xl border border-white/25 bg-white/15 p-4 backdrop-blur-xl transition-all duration-500 hover:bg-white/25 hover:-translate-y-1 sm:rounded-2xl sm:p-6"
                style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-primary/15 text-primary backdrop-blur-md transition-all group-hover:bg-primary/25 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-3 text-sm font-bold text-foreground sm:mt-4 sm:text-base">
                  {item.title}
                </div>
                <div className="mt-0.5 text-[10px] leading-snug text-muted-foreground sm:mt-1 sm:text-xs">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
