"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Smile,
  Sparkles,
  Baby,
  HeartPulse,
  Wrench,
  ScanFace,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Soins Conservateurs",
    description:
      "Caries, détartrage, endodontie, couronnes, inlays & onlays. Préservation maximale de vos dents naturelles.",
    items: [
      "Traitement des caries",
      "Détartrage professionnel",
      "Endodontie",
      "Couronnes & Inlays",
    ],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Esthétique Dentaire",
    description:
      "Éclaircissement, facettes, alignement. Retrouvez le sourire dont vous avez toujours rêvé.",
    items: [
      "Blanchiment dentaire",
      "Facettes céramiques",
      "Aligneurs transparents",
      "Smile design",
    ],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Baby,
    title: "Dentisterie Pédiatrique",
    description:
      "Première visite, prévention, soins adaptés aux enfants dans un environnement rassurant.",
    items: [
      "Première visite enfant",
      "Fluoration & prévention",
      "Scellement de sillons",
      "Orthodontie enfant",
    ],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: HeartPulse,
    title: "Parodontologie",
    description:
      "Diagnostic et traitement des maladies des gencives. Greffes gingivales et chirurgie parodontale.",
    items: [
      "Bilan parodontal",
      "Traitement gingivite",
      "Chirurgie parodontale",
      "Greffes gingivales",
    ],
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: ScanFace,
    title: "Implantologie",
    description:
      "Implants dentaires, greffes osseuses, prothèses sur implants. Retrouvez une dentition complète.",
    items: [
      "Implants dentaires",
      "Greffes osseuses",
      "Sinus lift",
      "Prothèses sur implants",
    ],
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Smile,
    title: "Chirurgie Orale",
    description:
      "Extractions complexes, dents de sagesse, chirurgie pré-implantaire. Expertise et douceur.",
    items: [
      "Dents de sagesse",
      "Extractions complexes",
      "Chirurgie pré-implantaire",
      "Régénération osseuse",
    ],
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-muted py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nos Soins
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-bold text-foreground lg:text-5xl">
            Des soins adaptés à{" "}
            <span className="text-primary">chaque besoin</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Notre équipe maîtrise l&apos;ensemble des disciplines dentaires pour
            vous offrir une prise en charge complète et de qualité.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 transition-all hover:border-transparent hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground transition-colors group-hover:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors group-hover:text-white/80"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary transition-colors group-hover:bg-white/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
