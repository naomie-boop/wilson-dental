"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Award } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Dr. David Ohayon",
    role: "Chirurgien-Dentiste",
    speciality: "Implantologie & Esthétique",
    image: "/dr-ohayon.png",
    description:
      "Passionné et perfectionniste, le Dr Ohayon met son expertise au service de votre sourire avec douceur et bienveillance.",
    traits: [
      { icon: GraduationCap, label: "Université Paris Descartes" },
      { icon: Heart, label: "Approche douce & pédagogue" },
      { icon: Award, label: "15 ans d'expérience" },
    ],
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="bg-white py-16 sm:py-24 lg:py-32">
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
          <h2 className="mt-3 font-[family-name:var(--font-playfair)] text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Des praticiens{" "}
            <span className="text-primary">passionnés</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Notre équipe allie compétence technique et qualité humaine pour vous
            offrir la meilleure expérience de soins possible.
          </p>
        </motion.div>

        <div className="mt-10 flex justify-center sm:mt-16">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="w-full max-w-sm sm:max-w-2xl"
            >
              <div className="group overflow-hidden rounded-2xl border border-border bg-white transition-all hover:shadow-xl sm:flex sm:rounded-3xl">
                <div className="relative h-72 overflow-hidden sm:h-auto sm:w-1/2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:flex sm:w-1/2 sm:flex-col sm:justify-center sm:p-8 lg:p-10">
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                    {member.name}
                  </h3>
                  <p className="font-semibold text-primary">{member.role}</p>
                  <p className="text-sm font-medium text-accent">
                    {member.speciality}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                    {member.description}
                  </p>
                  <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
                    {member.traits.map((trait) => (
                      <div
                        key={trait.label}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <trait.icon className="h-4 w-4 flex-shrink-0 text-primary" />
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
