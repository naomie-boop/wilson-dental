"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-800 py-16 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl sm:h-[600px] sm:w-[600px]" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Contact
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Prenez rendez-vous dès aujourd&apos;hui
            </h2>
            <p className="mt-4 text-base text-blue-100/80 sm:text-lg">
              Contactez-nous pour planifier votre prochain rendez-vous ou pour
              toute question. Notre équipe se fera un plaisir de vous répondre.
            </p>

            <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: "57 rue du Président Wilson\n92300 Levallois-Perret",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "+33 1 47 37 53 16",
                  href: "tel:+33147375316",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "cabinet.wilson.dental@gmail.com",
                  href: "mailto:cabinet.wilson.dental@gmail.com",
                },
                {
                  icon: Clock,
                  label: "Horaires",
                  value: "Lundi – Jeudi : 9h–19h\nVendredi : 9h–18h\nSamedi & Dimanche : Fermé",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12 sm:rounded-xl">
                    <item.icon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-blue-200 sm:text-sm">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="whitespace-pre-line text-sm text-white transition-colors hover:text-blue-200 sm:text-base"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="whitespace-pre-line text-sm text-white sm:text-base">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center gap-3 sm:mb-8">
                <CalendarCheck className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                  Demande de rendez-vous
                </h3>
              </div>
              <form className="space-y-4 sm:space-y-5">
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground sm:mb-1.5">
                      Prénom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className="w-full rounded-lg border border-border px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:rounded-xl sm:px-4 sm:py-3"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground sm:mb-1.5">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-lg border border-border px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:rounded-xl sm:px-4 sm:py-3"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground sm:mb-1.5">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-lg border border-border px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:rounded-xl sm:px-4 sm:py-3"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground sm:mb-1.5">
                    Type de soin
                  </label>
                  <select className="w-full rounded-lg border border-border px-3 py-2.5 text-sm text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:rounded-xl sm:px-4 sm:py-3">
                    <option value="">Sélectionnez un soin</option>
                    <option>Consultation générale</option>
                    <option>Détartrage</option>
                    <option>Esthétique dentaire</option>
                    <option>Implantologie</option>
                    <option>Parodontologie</option>
                    <option>Dentisterie pédiatrique</option>
                    <option>Urgence</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground sm:mb-1.5">
                    Message (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Décrivez brièvement votre besoin..."
                    className="w-full resize-none rounded-lg border border-border px-3 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:rounded-xl sm:px-4 sm:py-3"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg sm:rounded-xl sm:py-4 sm:text-base"
                >
                  Envoyer ma demande
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
