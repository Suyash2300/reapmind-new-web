"use client";

import { motion } from "framer-motion";
import { swiftHireConfig } from "@/lib/swift-hire-config";

const bullets = [
  ...swiftHireConfig.about.bulletsLeft,
  ...swiftHireConfig.about.bulletsRight,
];

export function SwiftHireAbout() {
  const { about } = swiftHireConfig;

  return (
    <section className="section-app relative overflow-hidden bg-surface-dark py-32">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2 origin-left bg-gradient-to-r from-[#F05138]/10 to-transparent"
        aria-hidden
      />

      <div className="container-app relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
            <p className="mt-6 text-para leading-relaxed text-white/70">{about.description}</p>
          </motion.div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {bullets.map((text, i) => (
              <motion.li
                key={text}
                initial={{ opacity: 0, rotateY: 75 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                style={{ transformPerspective: 600 }}
                whileHover={{ scale: 1.03, borderColor: "rgba(240,81,56,0.4)" }}
                className="rounded-xl border border-white/10 bg-black/50 p-4"
              >
                <span className="text-sm font-semibold text-white/90">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
