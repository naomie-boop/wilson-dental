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
    items: ["Traitement des caries", "Détartrage", "Endodontie", "Couronnes"],
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "Esthétique Dentaire",
    description:
      "Éclaircissement, facettes, alignement. Retrouvez le sourire dont vous avez toujours rêvé.",
    items: ["Blanchiment", "Facettes céramiques", "Aligneurs", "Smile design"],
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Baby,
    title: "Dentisterie Pédiatrique",
    description:
      "Première visite, prévention, soins adaptés aux enfants dans un environnement rassurant.",
    items: ["Première visite", "Fluoration", "Scellement sillons", "Orthodontie enfant"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: HeartPulse,
    title: "Parodontologie",
    description:
      "Diagnostic et traitement des maladies des gencives. Greffes gingivales et chirurgie parodontale.",
    items: ["Bilan parodontal", "Gingivite", "Chirurgie parodontale", "Greffes gingivales"],
    gradient: "from-red-500 to-red-600",
  },
  {
    icon: ScanFace,
    title: "Implantologie",
    description:
      "Implants dentaires, greffes osseuses, prothèses sur implants. Retrouvez une dentition complète.",
    items: ["Implants dentaires", "Greffes osseuses", "Sinus lift", "Prothèses sur implants"],
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Smile,
    title: "Chirurgie Orale",
    description:
      "Extractions complexes, dents de sagesse, chirurgie pré-implantaire. Expertise et douceur.",
    items: ["Dents de sagesse", "Extractions", "Chirurgie pré-implantaire", "Régénération osseuse"],
    gradient: "from-amber-500 to-orange-600",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="bg-muted py-16 sm:py-24 lg:py-32">
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
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Des soins adaptés à{" "}
            <span className="text-primary">chaque besoin</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Notre équipe maîtrise l&apos;ensemble des disciplines dentaires pour
            une prise en charge complète et de qualité.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 transition-all hover:border-transparent hover:shadow-xl sm:rounded-2xl sm:p-8"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="relative z-10">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl`}
                >
                  <service.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground transition-colors group-hover:text-white sm:mt-6 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/80 sm:mt-2">
                  {service.description}
                </p>
                <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-white/80 sm:text-sm"
                    >
                      <div className="h-1 w-1 flex-shrink-0 rounded-full bg-primary transition-colors group-hover:bg-white/60 sm:h-1.5 sm:w-1.5" />
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
