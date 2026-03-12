"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-primary-light/30 to-white"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-32 pb-20 sm:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:pt-40 lg:pb-32">
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
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary-light/50 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Cabinet dentaire nouvelle génération
          </motion.div>

          <h1 className="font-[family-name:var(--font-playfair)] text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Votre sourire,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              notre passion
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
            Des soins dentaires d&apos;excellence dans un environnement moderne
            et apaisant. Technologie de pointe, approche humaine et
            bienveillante.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/25"
            >
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+33147375316"
              className="flex items-center gap-2 rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-all hover:border-primary/30 hover:bg-primary-light/30"
            >
              01 47 37 53 16
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { icon: Shield, text: "Soins garantis" },
              { icon: Heart, text: "Approche douce" },
              { icon: Sparkles, text: "Équipement dernier cri" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 flex-1 lg:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-1">
              <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 sm:p-12">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "15+", label: "Années d'expérience" },
                    { value: "5000+", label: "Patients satisfaits" },
                    { value: "98%", label: "Taux de satisfaction" },
                    { value: "4.9★", label: "Note Google" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-primary sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -bottom-4 rounded-2xl border border-border bg-white px-5 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <span className="text-sm font-medium">
                  Créneaux disponibles aujourd&apos;hui
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
