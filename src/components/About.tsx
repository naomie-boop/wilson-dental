"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Stethoscope, Sparkles, Baby, Syringe } from "lucide-react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
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

            <div className="relative my-6 overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/hero-surgery.png"
                alt="L'équipe Wilson Dental en soin"
                width={600}
                height={340}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wilson Dental est fier de fournir des soins dentaires de haute
              qualité avec les dernières avancées technologiques.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nos dentistes offrent une gamme complète de soins, allant de la
              dentisterie pédiatrique à la chirurgie dentaire avancée.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wilson Dental est un cabinet dentaire libéral situé au 57 rue du
              Président Wilson à Levallois-Perret. Nous offrons des soins
              dentaires selon les dernières données acquises de la science dans
              une atmosphère moderne et relaxante.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              <a
                href="#services"
                className="rounded-full bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                Découvrir nos soins
              </a>
              <a
                href="#team"
                className="rounded-full border border-border px-6 py-3 text-center text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary-light/30"
              >
                Découvrir l&apos;équipe
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              {
                icon: Stethoscope,
                title: "Dentisterie de pointe",
                description: "Équipements et techniques de dernière génération",
              },
              {
                icon: Sparkles,
                title: "Experts en esthétique",
                description: "Blanchiment, facettes, smile design",
              },
              {
                icon: Baby,
                title: "Soins pour enfants",
                description: "Approche douce et adaptée aux plus jeunes",
              },
              {
                icon: Syringe,
                title: "Chirurgie avancée",
                description: "Implants, greffes et chirurgie orale",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:rounded-2xl sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-xl">
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
