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
      className="relative overflow-hidden bg-gradient-to-br from-primary to-blue-800 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
              Contact
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-bold text-white lg:text-5xl">
              Prenez rendez-vous dès aujourd&apos;hui
            </h2>
            <p className="mt-4 text-lg text-blue-100/80">
              Contactez-nous pour planifier votre prochain rendez-vous ou pour
              toute question. Notre équipe se fera un plaisir de vous répondre.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  icon: MapPin,
                  label: "Adresse",
                  value: "57 rue du Président Wilson\n92300 Levallois-Perret",
                },
                {
                  icon: Phone,
                  label: "Téléphone",
                  value: "01 47 37 53 16",
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
                  value: "Lun – Jeu : 9h–19h\nVendredi : 9h–18h",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-blue-200">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="whitespace-pre-line text-white transition-colors hover:text-blue-200"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="whitespace-pre-line text-white">
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
            <div className="rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <CalendarCheck className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">
                  Demande de rendez-vous
                </h3>
              </div>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Prénom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre prénom"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-xl border border-border px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full rounded-xl border border-border px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Type de soin
                  </label>
                  <select className="w-full rounded-xl border border-border px-4 py-3 text-sm text-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
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
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    Message (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Décrivez brièvement votre besoin..."
                    className="w-full resize-none rounded-xl border border-border px-4 py-3 text-sm transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
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
