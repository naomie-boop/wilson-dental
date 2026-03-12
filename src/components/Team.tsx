"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Award, Microscope } from "lucide-react";
import Image from "next/image";
import GlowCard from "./GlowCard";

const doctors = [
  {
    name: "Dr. David Ohayon",
    role: "Chirurgien-Dentiste",
    image: "/dr-ohayon.png",
    description: "Minutieux, doux, à l'écoute et très pédagogue. Passionné et perfectionniste, il met son expertise au service de votre sourire.",
    traits: [
      { icon: GraduationCap, label: "Chirurgien-Dentiste diplômé" },
      { icon: Heart, label: "Doux, chaleureux et pédagogue" },
      { icon: Award, label: "Passionné et perfectionniste" },
    ],
  },
  {
    name: "Chirurgien-Dentiste",
    role: "Associé",
    image: "/dr-2.png",
    description: "Rigoureux et attentif, il complète l'équipe pour une prise en charge globale et de qualité.",
    traits: [
      { icon: GraduationCap, label: "Chirurgien-Dentiste diplômé" },
      { icon: Microscope, label: "Précision & rigueur" },
      { icon: Heart, label: "Écoute attentive" },
    ],
  },
];

const otherDoctors = [
  { image: "/dr-femme-1.png", role: "Chirurgien-Dentiste" },
  { image: "/dr-femme-2.png", role: "Chirurgien-Dentiste" },
  { image: "/dr-homme-2.png", role: "Chirurgien-Dentiste" },
];

const assistants = [
  { image: "/assistante-1.png", role: "Assistante Dentaire" },
  { image: "/assistante-2.png", role: "Assistante Dentaire" },
  { image: "/assistante-3.png", role: "Secrétaire Médicale" },
  { image: "/assistante-4.png", role: "Assistante Dentaire" },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-16 sm:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            L&apos;Équipe
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Nos <span className="text-primary">praticiens</span>
          </h2>
        </motion.div>

        {/* Main doctors - big cards */}
        <div className="mt-10 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
          {doctors.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 1, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <GlowCard glowColor="rgba(37, 99, 235, 0.6)" glowSize={280} borderRadius={24} borderWidth={2}>
                <div className="group h-full bg-white/10 backdrop-blur-xl">
                  <div className="relative h-72 overflow-hidden sm:h-80">
                    <Image src={member.image} alt={member.name} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />
                  </div>
                  <div className="p-5 sm:p-8">
                    <h3 className="text-xl font-bold text-foreground sm:text-2xl">{member.name}</h3>
                    <p className="font-semibold text-primary">{member.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">{member.description}</p>
                    <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
                      {member.traits.map((trait) => (
                        <div key={trait.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/20 bg-primary/10 backdrop-blur-md">
                            <trait.icon className="h-3.5 w-3.5 text-primary" />
                          </div>
                          {trait.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Other doctors - medium cards */}
        <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-6">
          {otherDoctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
            >
              <GlowCard glowColor="rgba(37, 99, 235, 0.5)" glowSize={200} borderRadius={20} borderWidth={2}>
                <div className="group bg-white/10 backdrop-blur-xl">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={doc.image} alt={doc.role} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                  <div className="p-3 text-center sm:p-5">
                    <p className="text-sm font-bold text-foreground sm:text-base">{doc.role}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Assistants - smaller */}
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center sm:mt-16"
        >
          <h3 className="text-lg font-bold text-foreground sm:text-xl">
            Notre équipe au quotidien
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Des assistantes dévouées pour votre accueil et votre confort
          </p>
        </motion.div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {assistants.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.08 }}
            >
              <div
                className="group overflow-hidden rounded-xl border border-white/15 bg-white/8 backdrop-blur-lg transition-all duration-500 hover:bg-white/15"
                style={{ boxShadow: "0 2px 16px -4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.2)" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={person.image} alt={person.role} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
                <div className="p-2 text-center sm:p-3">
                  <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">{person.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
