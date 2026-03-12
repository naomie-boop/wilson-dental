"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Soins", href: "#services" },
  { label: "Équipe", href: "#team" },
  { label: "Cabinet", href: "#cabinet" },
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
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`w-full max-w-5xl transition-all duration-500 ${
          scrolled ? "max-w-4xl" : "max-w-5xl"
        }`}
        style={{
          borderRadius: 16,
          background: "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(24px) saturate(1.8)",
          WebkitBackdropFilter: "blur(24px) saturate(1.8)",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow:
            "0px 0.6px 0.6px -1.25px rgba(0, 0, 0, 0.18), 0px 2.3px 2.3px -2.5px rgba(0, 0, 0, 0.16), 0px 10px 10px -3.75px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-5">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/logo-horizontal.png"
              alt="Wilson Dental"
              width={130}
              height={38}
              className="h-7 w-auto sm:h-8"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-3 py-2 text-[13px] font-medium text-foreground/65 transition-all duration-200 hover:bg-black/[0.04] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop right side */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href="tel:+33147375316"
              className="flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-medium text-foreground/50 transition-all hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xl:inline">+33 1 47 37 53 16</span>
            </a>
            <a
              href="https://www.doctolib.fr/cabinet-dentaire/levallois-perret/cabinet-dentaire-wilson/booking/motive-categories?telehealth=false&specialityId=1&placeId=practice-543908&pid=practice-543908&speciality_ids%5B%5D=1&source=deep_link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-4 py-2 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-px"
              style={{
                background: "rgba(37, 99, 235, 0.85)",
                boxShadow:
                  "0px 0.6px 0.6px -1.25px rgba(37, 99, 235, 0.3), 0px 2.3px 2.3px -2.5px rgba(37, 99, 235, 0.25), 0px 8px 8px -3.75px rgba(37, 99, 235, 0.12), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              Prendre RDV
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl p-2 text-foreground/70 transition-colors hover:bg-black/[0.04] lg:hidden"
            aria-label="Menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-black/[0.06] lg:hidden"
            >
              <div className="space-y-0.5 px-3 py-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-[15px] font-medium text-foreground/70 transition-all hover:bg-black/[0.04] hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="tel:+33147375316"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-[15px] font-medium text-foreground/70"
                >
                  <Phone className="h-4 w-4" /> +33 1 47 37 53 16
                </a>
                <div className="pt-1">
                  <a
                    href="https://www.doctolib.fr/cabinet-dentaire/levallois-perret/cabinet-dentaire-wilson/booking/motive-categories?telehealth=false&specialityId=1&placeId=practice-543908&pid=practice-543908&speciality_ids%5B%5D=1&source=deep_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-xl py-3 text-center text-[15px] font-semibold text-white"
                    style={{
                      background: "rgba(37, 99, 235, 0.85)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.15), 0px 2px 4px rgba(37,99,235,0.2)",
                    }}
                  >
                    Prendre Rendez-vous
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
