"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader() {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exit"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2800);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  const visible = phase === "enter" || phase === "exit";

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Top panel */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 origin-top"
            style={{ backgroundColor: "#0a1628" }}
            initial={{ y: 0 }}
            animate={phase === "exit" ? { y: "-100%" } : { y: 0 }}
            transition={
              phase === "exit"
                ? { duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: 0.1 }
                : undefined
            }
          >
            {/* Blue accent bar at bottom of top panel */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ backgroundColor: "#2563eb" }}
              initial={{ scaleX: 0 }}
              animate={
                phase === "enter"
                  ? { scaleX: 1 }
                  : { scaleX: 0, opacity: 0 }
              }
              transition={
                phase === "enter"
                  ? { duration: 1.2, ease: [0.44, 0, 0.56, 1], delay: 0.3 }
                  : { duration: 0.3 }
              }
            />
          </motion.div>

          {/* Bottom panel */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 origin-bottom"
            style={{ backgroundColor: "#0a1628" }}
            initial={{ y: 0 }}
            animate={phase === "exit" ? { y: "100%" } : { y: 0 }}
            transition={
              phase === "exit"
                ? { duration: 0.7, ease: [0.44, 0, 0.56, 1], delay: 0.1 }
                : undefined
            }
          >
            {/* Blue accent bar at top of bottom panel */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: "#2563eb" }}
              initial={{ scaleX: 0 }}
              animate={
                phase === "enter"
                  ? { scaleX: 1 }
                  : { scaleX: 0, opacity: 0 }
              }
              transition={
                phase === "enter"
                  ? { duration: 1.2, ease: [0.44, 0, 0.56, 1], delay: 0.3 }
                  : { duration: 0.3 }
              }
            />
          </motion.div>

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={
                phase === "enter"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -12 }
              }
              transition={
                phase === "enter"
                  ? { duration: 0.6, ease: [0.44, 0, 0.56, 1], delay: 0.4 }
                  : { duration: 0.4, ease: [0.44, 0, 0.56, 1] }
              }
            >
              <Image
                src="/logo-icon.png"
                alt="Wilson Dental"
                width={64}
                height={64}
                className="h-14 w-14 sm:h-16 sm:w-16"
                priority
              />
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="mt-5 text-xl font-bold tracking-[0.2em] text-white uppercase sm:text-2xl"
              initial={{ opacity: 0, y: 6 }}
              animate={
                phase === "enter"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -8 }
              }
              transition={
                phase === "enter"
                  ? { duration: 0.6, ease: [0.44, 0, 0.56, 1], delay: 0.6 }
                  : { duration: 0.35, ease: [0.44, 0, 0.56, 1] }
              }
            >
              Wilson Dental
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-2 text-xs font-medium tracking-[0.15em] text-white/50 uppercase sm:text-sm"
              initial={{ opacity: 0, y: -4 }}
              animate={
                phase === "enter"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 8 }
              }
              transition={
                phase === "enter"
                  ? { duration: 0.6, ease: [0.44, 0, 0.56, 1], delay: 0.8 }
                  : { duration: 0.3, ease: [0.44, 0, 0.56, 1] }
              }
            >
              Cabinet Dentaire &middot; Levallois-Perret
            </motion.p>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
