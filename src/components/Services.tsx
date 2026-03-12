"use client";

import { motion } from "framer-motion";
import { Wrench, Baby, HeartPulse, ScanFace } from "lucide-react";

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

const services = [
  { icon: Wrench, title: "Soins Conservateurs", description: "Préservez un sourire sain et évitez les problèmes dentaires.",
    items: ["Traitement des Caries", "Détartrage Professionnel", "Endodontie", "Couronnes Dentaires", "Inlays & Onlays", "Éclaircissement Dentaire", "Orthèse d'Avancée Mandibulaire"],
    iconBg: "bg-blue-500/15 text-blue-600", dot: "bg-blue-500" },
  { icon: Baby, title: "Dentisterie Pédiatrique", description: "Soins adaptés aux enfants et ados dans un cadre rassurant.",
    items: ["Première Visite de l'Enfant", "Prévention & Fluoration", "Scellement des Sillons", "Soins des Dents de Lait", "Orthodontie Enfant & Ado"],
    iconBg: "bg-pink-500/15 text-pink-600", dot: "bg-pink-500" },
  { icon: HeartPulse, title: "Parodontologie", description: "Diagnostic et traitement des maladies des gencives.",
    items: ["Bilan Parodontal", "Surfaçage Radiculaire", "Traitement de la Gingivite", "Traitement de la Parodontite", "Chirurgie Parodontale", "Greffes Gingivales"],
    iconBg: "bg-red-500/15 text-red-600", dot: "bg-red-500" },
  { icon: ScanFace, title: "Chirurgie & Implantologie", description: "Retrouvez une dentition complète grâce à notre expertise.",
    items: ["Implants Dentaires", "Greffes Osseuses", "Extractions & Dents de Sagesse", "Chirurgie Pré-implantaire", "Prothèses sur Implants", "Sinus Lift"],
    iconBg: "bg-emerald-500/15 text-emerald-600", dot: "bg-emerald-500" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div {...anim} className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Les Soins</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Des soins adaptés à <span className="text-primary">vos besoins</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ y: 15 }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-white/25 bg-white/12 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5 sm:rounded-2xl sm:p-7"
              style={{ boxShadow: "0 4px 24px -6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.3)" }}>
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 ${service.iconBg} backdrop-blur-md sm:h-13 sm:w-13 sm:rounded-2xl`}>
                <service.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground sm:text-xl">{service.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-3 space-y-1.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                    <div className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${service.dot}`} />
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
