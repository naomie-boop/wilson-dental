"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Award } from "lucide-react";

const team = [
  {
    name: "Dr. David Ohayon",
    role: "Chirurgien-Dentiste",
    speciality: "Implantologie & Esthétique",
    description:
      "Passionné et perfectionniste, le Dr Ohayon met son expertise au service de votre sourire avec douceur et bienveillance.",
    traits: [
      { icon: GraduationCap, label: "Université Paris Descartes" },
      { icon: Heart, label: "Approche douce" },
      { icon: Award, label: "15 ans d'expérience" },
    ],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="bg-white py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            L&apos;Équipe
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-4xl font-bold text-foreground lg:text-5xl">
            Des praticiens{" "}
            <span className="text-primary">passionnés</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Notre équipe allie compétence technique et qualité humaine pour vous
            offrir la meilleure expérience de soins possible.
          </p>
        </motion.div>

        <div className="mt-16 flex justify-center">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="w-full max-w-lg"
            >
              <div className="group overflow-hidden rounded-3xl border border-border bg-white transition-all hover:shadow-xl">
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-primary to-accent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-40 w-40 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-6xl font-bold text-white/90">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-sm text-accent font-medium">
                    {member.speciality}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {member.traits.map((trait) => (
                      <div
                        key={trait.label}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <trait.icon className="h-4 w-4 text-primary" />
                        {trait.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
