"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import GlassButton from "./GlassButton";
import TextCarousel from "./TextCarousel";
import GlowCard from "./GlowCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[100px] sm:h-[700px] sm:w-[700px]" />
        <div className="absolute bottom-0 -left-40 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[100px] sm:h-[600px] sm:w-[600px]" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-violet-400/5 blur-[80px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:flex-row lg:gap-12 lg:px-8 lg:pt-36 lg:pb-28 xl:gap-16 xl:pt-40 xl:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-medium text-primary backdrop-blur-xl sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
            style={{ boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.04)" }}
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Cabinet dentaire à Levallois-Perret
          </motion.div>

          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Des soins{" "}
            <TextCarousel
              words={["avancés", "personnalisés", "innovants", "de qualité"]}
              sweepMs={800}
              holdMs={2200}
            />
            <br />
            <span className="text-foreground/80">
              pour votre sourire
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:mx-0 lg:text-xl">
            Des dentistes passionnés prêts à vous offrir des soins avancés et
            personnalisés. Ensemble, redonnons un sourire à vos dents.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:justify-start">
            <GlassButton href="#contact" variant="primary" size="lg">
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </GlassButton>
            <GlassButton href="tel:+33147375316" variant="secondary" size="lg">
              +33 1 47 37 53 16
            </GlassButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 w-full flex-1 sm:mt-16 lg:mt-0"
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/15 blur-2xl" />
            <GlowCard
              glowColor="rgba(37, 99, 235, 0.7)"
              glowSize={300}
              borderRadius={24}
              borderWidth={2}
            >
              <Image
                src="/cabinet-reception.png"
                alt="Accueil du cabinet Wilson Dental à Levallois-Perret"
                width={700}
                height={500}
                priority
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5" />
            </GlowCard>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 -top-3 rounded-xl border border-white/30 bg-white/40 px-3 py-2 backdrop-blur-2xl sm:-right-4 sm:-top-4 sm:rounded-2xl sm:px-5 sm:py-3"
              style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.1), inset 0 1px 1px rgba(255,255,255,0.4)" }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)] sm:h-3 sm:w-3" />
                <span className="text-xs font-medium text-foreground/80 sm:text-sm">
                  Lun–Ven : 9h–19h
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
