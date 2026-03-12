"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Baby, HeartPulse, ScanFace, AlertCircle, ChevronDown } from "lucide-react";

const services = [
  { icon: ScanFace, title: "Chirurgie & Implantologie", badge: "Spécialité phare", badgeColor: "bg-emerald-500/15 text-emerald-600",
    iconBg: "bg-emerald-500/15 text-emerald-600",
    description: "Notre spécialité phare. Implants, greffes osseuses et gingivales, chirurgie planifiée et guidée grâce à l'impression 3D.",
    items: ["Implants Dentaires", "Greffes Osseuses & Gingivales", "Chirurgie Guidée 3D", "Extractions & Dents de Sagesse", "Prothèses sur Implants", "Sinus Lift"] },
  { icon: HeartPulse, title: "Parodontologie", badge: "Expertise reconnue", badgeColor: "bg-red-500/15 text-red-600",
    iconBg: "bg-red-500/15 text-red-600",
    description: "Expertise reconnue dans le traitement des maladies des gencives. De nombreux patients nous font confiance.",
    items: ["Bilan Parodontal", "Surfaçage Radiculaire", "Traitement de la Gingivite", "Traitement de la Parodontite", "Chirurgie Parodontale", "Greffes Gingivales"] },
  { icon: Baby, title: "Pédodontie", badge: "Spécialité famille", badgeColor: "bg-pink-500/15 text-pink-600",
    iconBg: "bg-pink-500/15 text-pink-600",
    description: "Le Dr Bonnet dédie son exercice exclusivement aux soins des enfants. Un cadre ludique et rassurant.",
    items: ["Première Visite de l'Enfant", "Prévention & Fluoration", "Scellement des Sillons", "Soins des Dents de Lait", "Orthodontie Enfant & Ado"] },
  { icon: Wrench, title: "Soins & Esthétique", badge: null, badgeColor: "",
    iconBg: "bg-blue-500/15 text-blue-600",
    description: "Flux 100% numérique : caméra optique, scanner 3D, imprimante 3D. Infiltration de taches blanches, facettes, éclaircissement.",
    items: ["Infiltration Taches Blanches (Icon)", "Couronnes & Inlays-Onlays", "Éclaircissement Dentaire", "Prothèses Amovibles & Fixes", "Détartrage Professionnel", "Endodontie"] },
];

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="relative py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Les Soins</span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Pour toute la famille, <span className="text-primary">à chaque âge</span>
          </h2>
        </div>

        <div className="mx-auto mt-5 max-w-md">
          <div className="flex items-center justify-center gap-2 rounded-full border border-red-200/30 bg-red-50/40 px-4 py-2 backdrop-blur-xl"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)" }}>
            <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-500" />
            <span className="text-xs font-semibold text-red-600 sm:text-sm">Urgences acceptées — on ne refuse jamais</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <div
                key={service.title}
                className="overflow-hidden rounded-2xl border border-white/25 bg-white/12 backdrop-blur-xl transition-all duration-300"
                style={{ boxShadow: isOpen ? "0 8px 32px -8px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,0.3)" : "0 2px 12px -4px rgba(0,0,0,0.04), inset 0 1px 1px rgba(255,255,255,0.3)" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-white/8 sm:gap-4 sm:px-6 sm:py-5"
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/20 ${service.iconBg} backdrop-blur-md sm:h-11 sm:w-11`}>
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-foreground sm:text-lg">{service.title}</h3>
                      {service.badge && (
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-xs ${service.badgeColor}`}>{service.badge}</span>
                      )}
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-muted-foreground"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/15 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                        <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                          {service.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-xs text-foreground/70 sm:text-sm">
                              <div className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${service.iconBg.split(" ")[0].replace("/15", "")}`} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
