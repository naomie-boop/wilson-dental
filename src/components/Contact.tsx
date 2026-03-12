"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, CalendarCheck } from "lucide-react";

const anim = { initial: { y: 15 }, whileInView: { y: 0 }, viewport: { once: true, margin: "-50px" as const }, transition: { duration: 0.5 } };

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-14 sm:py-18 lg:py-22">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div {...anim}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</span>
            <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Prenez rendez-vous dès aujourd&apos;hui
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Contactez-nous pour planifier votre prochain rendez-vous ou pour toute question.
            </p>

            <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {[
                { icon: MapPin, label: "Adresse", value: "57 rue du Président Wilson\n92300 Levallois-Perret" },
                { icon: Phone, label: "Téléphone", value: "+33 1 47 37 53 16", href: "tel:+33147375316" },
                { icon: Mail, label: "Email", value: "cabinet.wilson.dental@gmail.com", href: "mailto:cabinet.wilson.dental@gmail.com" },
                { icon: Clock, label: "Horaires", value: "Lundi – Jeudi : 9h–19h\nVendredi : 9h–18h\nSamedi & Dimanche : Fermé" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/15 backdrop-blur-xl"
                    style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3)" }}>
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-muted-foreground sm:text-sm">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="whitespace-pre-line text-sm text-foreground transition-colors hover:text-primary sm:text-base">{item.value}</a>
                    ) : (
                      <div className="whitespace-pre-line text-sm text-foreground sm:text-base">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...anim} transition={{ duration: 0.5, delay: 0.15 }}>
            <div
              className="rounded-2xl border border-white/25 bg-white/20 p-5 backdrop-blur-2xl sm:rounded-3xl sm:p-8"
              style={{ boxShadow: "0 16px 48px -12px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.4)" }}
            >
              <div className="mb-5 flex items-center gap-3">
                <CalendarCheck className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Demande de rendez-vous</h3>
              </div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="prenom" className="mb-1 block text-sm font-medium text-foreground">Prénom</label>
                    <input id="prenom" name="prenom" type="text" placeholder="Votre prénom"
                      className="w-full rounded-xl border border-white/25 bg-white/30 px-3 py-2.5 text-sm backdrop-blur-md transition-all focus:border-primary/50 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <div>
                    <label htmlFor="nom" className="mb-1 block text-sm font-medium text-foreground">Nom</label>
                    <input id="nom" name="nom" type="text" placeholder="Votre nom"
                      className="w-full rounded-xl border border-white/25 bg-white/30 px-3 py-2.5 text-sm backdrop-blur-md transition-all focus:border-primary/50 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                </div>
                <div>
                  <label htmlFor="telephone" className="mb-1 block text-sm font-medium text-foreground">Téléphone</label>
                  <input id="telephone" name="telephone" type="tel" placeholder="06 12 34 56 78"
                    className="w-full rounded-xl border border-white/25 bg-white/30 px-3 py-2.5 text-sm backdrop-blur-md transition-all focus:border-primary/50 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <div>
                  <label htmlFor="soin" className="mb-1 block text-sm font-medium text-foreground">Type de soin</label>
                  <select id="soin" name="soin" className="w-full rounded-xl border border-white/25 bg-white/30 px-3 py-2.5 text-sm text-muted-foreground backdrop-blur-md transition-all focus:border-primary/50 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary/20">
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
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-foreground">Message (optionnel)</label>
                  <textarea id="message" name="message" rows={3} placeholder="Décrivez brièvement votre besoin..."
                    className="w-full resize-none rounded-xl border border-white/25 bg-white/30 px-3 py-2.5 text-sm backdrop-blur-md transition-all focus:border-primary/50 focus:bg-white/40 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                </div>
                <button type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 bg-primary/60 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-primary/80 sm:text-base"
                  style={{ boxShadow: "0 4px 16px -4px rgba(37,99,235,0.2), inset 0 1px 1px rgba(255,255,255,0.2)" }}>
                  Envoyer ma demande
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <div className="mt-8 sm:mt-12">
          <div
            className="relative overflow-hidden rounded-2xl border border-white/20 sm:rounded-3xl"
            style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.3)" }}
          >
            <iframe
              title="Wilson Dental - 57 rue du Président Wilson, Levallois-Perret"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.2828%2C48.8908%2C2.2928%2C48.8968&layer=mapnik&marker=48.8938%2C2.2878"
              className="h-48 w-full sm:h-56 lg:h-64"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-white/25 bg-white/60 px-3 py-1.5 backdrop-blur-xl sm:bottom-4 sm:left-4 sm:px-4 sm:py-2"
              style={{ boxShadow: "0 4px 16px -4px rgba(0,0,0,0.1)" }}
            >
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold text-foreground sm:text-sm">57 rue du Président Wilson, Levallois-Perret</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
