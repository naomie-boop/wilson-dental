"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-white via-primary-light/30 to-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl sm:h-[600px] sm:w-[600px]" />
        <div className="absolute -bottom-40 -left-40 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl sm:h-[500px] sm:w-[500px]" />
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
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/50 px-3 py-1.5 text-xs font-medium text-primary sm:mb-6 sm:px-4 sm:py-2 sm:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Cabinet dentaire à Levallois-Perret
          </motion.div>

          <h1 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Bienvenue au cabinet{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Wilson Dental
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:mx-0 lg:text-xl">
            Des dentistes passionnés prêts à vous offrir des soins avancés et
            personnalisés. Ensemble, redonnons un sourire à vos dents.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:justify-start">
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+33147375316"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary-light/30 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              +33 1 47 37 53 16
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 w-full flex-1 sm:mt-16 lg:mt-0"
        >
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl sm:rounded-3xl" />
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
              <Image
                src="/cabinet-reception.png"
                alt="Accueil du cabinet Wilson Dental à Levallois-Perret"
                width={700}
                height={500}
                priority
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 -top-3 rounded-xl border border-border bg-white px-3 py-2 shadow-xl sm:-right-4 sm:-top-4 sm:rounded-2xl sm:px-5 sm:py-3"
            >
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />
                <span className="text-xs font-medium sm:text-sm">
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
