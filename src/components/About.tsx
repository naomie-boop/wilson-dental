"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Stethoscope } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Années d'expertise",
    description: "Au service de votre sourire",
  },
  {
    icon: Users,
    value: "5 000+",
    label: "Patients fidèles",
    description: "Qui nous font confiance",
  },
  {
    icon: Clock,
    value: "Lun–Ven",
    label: "9h – 19h",
    description: "Horaires étendus",
  },
  {
    icon: Stethoscope,
    value: "100%",
    label: "Équipement digital",
    description: "Technologie de pointe",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-white py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              À propos
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-bold text-foreground lg:text-5xl">
              Un cabinet pensé pour{" "}
              <span className="text-primary">votre confort</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Situé au cœur de Levallois-Perret, Wilson Dental vous accueille
              dans un espace moderne et apaisant. Notre équipe de
              chirurgiens-dentistes passionnés combine expertise clinique et
              technologies de dernière génération pour vous offrir des soins
              personnalisés et de haute qualité.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              De la simple consultation à la chirurgie implantaire, chaque
              patient bénéficie d&apos;un plan de traitement sur mesure et
              d&apos;un accompagnement bienveillant à chaque étape.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#services"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25"
              >
                Découvrir nos soins
              </a>
              <a
                href="#team"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-primary-light/30"
              >
                Rencontrer l&apos;équipe
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group rounded-2xl border border-border bg-white p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
