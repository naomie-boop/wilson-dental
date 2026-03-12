"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Wrench, Baby, HeartPulse, ScanFace } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Soins Conservateurs",
    description: "Préservez un sourire sain et évitez les problèmes dentaires.",
    items: ["Orthèse d'Avancée Mandibulaire", "Traitement des Caries", "Détartrage Professionnel", "Endodontie", "Couronnes Dentaires", "Inlays & Onlays", "Éclaircissement Dentaire"],
    color: "from-blue-400 to-blue-600",
    iconBg: "bg-blue-500/15 text-blue-600",
  },
  {
    icon: Baby,
    title: "Dentisterie Pédiatrique",
    description: "Soins adaptés aux enfants et ados dans un cadre rassurant.",
    items: ["Première Visite de l'Enfant", "Prévention & Fluoration", "Scellement des Sillons", "Soins des Dents de Lait", "Orthodontie Enfant & Ado"],
    color: "from-pink-400 to-rose-600",
    iconBg: "bg-pink-500/15 text-pink-600",
  },
  {
    icon: HeartPulse,
    title: "Parodontologie",
    description: "Diagnostic et traitement des maladies des gencives.",
    items: ["Bilan Parodontal", "Surfaçage Radiculaire", "Traitement de la Gingivite", "Traitement de la Parodontite", "Chirurgie Parodontale", "Greffes Gingivales"],
    color: "from-red-400 to-red-600",
    iconBg: "bg-red-500/15 text-red-600",
  },
  {
    icon: ScanFace,
    title: "Chirurgie & Implantologie",
    description: "Retrouvez une dentition complète grâce à notre expertise.",
    items: ["Implants Dentaires", "Greffes Osseuses", "Extractions & Dents de Sagesse", "Chirurgie Pré-implantaire", "Prothèses sur Implants", "Sinus Lift"],
    color: "from-emerald-400 to-emerald-600",
    iconBg: "bg-emerald-500/15 text-emerald-600",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Les Soins</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Des soins adaptés à <span className="text-primary">vos besoins</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group rounded-xl border border-white/25 bg-white/12 p-5 backdrop-blur-xl transition-all duration-500 hover:bg-white/20 hover:-translate-y-1 sm:rounded-2xl sm:p-8"
              style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 ${service.iconBg} backdrop-blur-md sm:h-14 sm:w-14 sm:rounded-2xl`}>
                <service.icon className="h-5 w-5 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground sm:mt-6 sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:mt-2">
                {service.description}
              </p>
              <ul className="mt-3 space-y-1.5 sm:mt-4 sm:space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <div className={`h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-r ${service.color} sm:h-1.5 sm:w-1.5`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
