"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, Stethoscope } from "lucide-react";
import Image from "next/image";

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
    <section id="about" className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              À propos
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Un cabinet pensé pour{" "}
              <span className="text-primary">votre confort</span>
            </h2>

            <div className="relative my-6 overflow-hidden rounded-2xl lg:hidden">
              <Image
                src="/hero-surgery.png"
                alt="L'équipe Wilson Dental en action"
                width={600}
                height={340}
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Situé au cœur de Levallois-Perret, Wilson Dental vous accueille
              dans un espace moderne et apaisant. Notre équipe de
              chirurgiens-dentistes passionnés combine expertise clinique et
              technologies de dernière génération pour vous offrir des soins
              personnalisés et de haute qualité.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              De la simple consultation à la chirurgie implantaire, chaque
              patient bénéficie d&apos;un plan de traitement sur mesure et
              d&apos;un accompagnement bienveillant à chaque étape.
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
                Rencontrer l&apos;équipe
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group rounded-xl border border-border bg-white p-4 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:rounded-2xl sm:p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-xl">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="mt-3 text-xl font-bold text-foreground sm:mt-4 sm:text-2xl">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-foreground sm:text-sm">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[10px] text-muted-foreground sm:mt-1 sm:text-xs">
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
