"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import GlassButton from "./GlassButton";
import GlowCard from "./GlowCard";

const DOCTOLIB = "https://www.doctolib.fr/cabinet-dentaire/levallois-perret/cabinet-dentaire-wilson/booking/motive-categories?telehealth=false&specialityId=1&placeId=practice-543908&pid=practice-543908&speciality_ids%5B%5D=1&source=deep_link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-12 sm:pb-16 lg:pb-20">
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 sm:px-6 sm:pt-28 lg:flex-row lg:gap-12 lg:px-8 lg:pt-32 xl:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-xl sm:mb-5 sm:px-4 sm:py-2 sm:text-sm"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.04)" }}
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Cabinet dentaire à Levallois-Perret
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Bienvenue au cabinet{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wilson Dental
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg lg:mx-0">
            Des dentistes passionnés prêts à vous offrir des soins avancés et
            personnalisés. Ensemble, redonnons un sourire à vos dents.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:gap-4 lg:justify-start">
            <GlassButton href={DOCTOLIB} variant="primary" size="lg">
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </GlassButton>
            <GlassButton href="tel:+33147375316" variant="secondary" size="lg">
              +33 1 47 37 53 16
            </GlassButton>
          </div>
        </div>

        <div className="mt-8 w-full flex-1 sm:mt-12 lg:mt-0">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <GlowCard glowColor="rgba(37, 99, 235, 0.7)" glowSize={300} borderRadius={24} borderWidth={2}>
              <Image
                src="/cabinet-reception.png"
                alt="Accueil du cabinet Wilson Dental à Levallois-Perret"
                width={700}
                height={500}
                priority
                className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[400px]"
              />
            </GlowCard>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 -top-3 rounded-xl border border-white/30 bg-white/50 px-3 py-2 backdrop-blur-2xl sm:-right-4 sm:-top-4 sm:rounded-2xl sm:px-4 sm:py-2.5"
              style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.4)" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] sm:h-3 sm:w-3" />
                <span className="text-xs font-medium text-foreground/80 sm:text-sm">Lun–Ven : 9h–19h</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
