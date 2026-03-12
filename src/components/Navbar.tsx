"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Soins", href: "#services" },
  { label: "Équipe", href: "#team" },
  { label: "Témoignages", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/40 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] border-b border-white/30"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <a href="#hero" className="flex items-center gap-2 sm:gap-3">
            <Image src="/logo-icon.png" alt="Wilson Dental" width={36} height={36} className="h-8 w-8 sm:h-9 sm:w-9" />
            <Image src="/logo-horizontal.png" alt="Wilson Dental" width={140} height={40} className="hidden h-8 w-auto sm:block" />
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/70 transition-all duration-300 hover:bg-white/30 hover:text-foreground hover:backdrop-blur-md xl:px-4"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+33147375316"
              className="flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">+33 1 47 37 53 16</span>
            </a>
            <a
              href="#contact"
              className="rounded-2xl border border-white/30 bg-primary/60 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-500 hover:bg-primary/80 hover:shadow-[0_8px_24px_-6px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
              style={{
                boxShadow: "0 4px 16px -4px rgba(37,99,235,0.2), inset 0 1px 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              Prendre RDV
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="rounded-xl p-2 text-foreground backdrop-blur-md lg:hidden" aria-label="Menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/20 bg-white/50 backdrop-blur-2xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/70 transition-all hover:bg-white/40 hover:text-foreground">
                  {link.label}
                </a>
              ))}
              <a href="tel:+33147375316" onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-foreground/70">
                <Phone className="h-4 w-4" /> +33 1 47 37 53 16
              </a>
              <div className="pt-2">
                <a href="#contact" onClick={() => setIsOpen(false)}
                  className="block w-full rounded-2xl bg-primary/60 py-3 text-center text-base font-semibold text-white backdrop-blur-xl border border-white/20"
                  style={{ boxShadow: "inset 0 1px 1px 0 rgba(255,255,255,0.2)" }}>
                  Prendre Rendez-vous
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
