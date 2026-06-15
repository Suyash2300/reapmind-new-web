"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const HOVER_EFFECTS = [
  { rotate: 1.5 },
  { scale: 1.02 },
  { y: -6 },
  { rotate: -1 },
  { scale: 1.03 },
  { y: -4 },
  { rotate: 2 },
  { scale: 1.02 },
] as const;

export function TmAdminPanel() {
  const { adminPanel } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="tm-admin-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-admin-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {adminPanel.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
          {adminPanel.intro}
        </BlurFadeIn>

        <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {adminPanel.items.map((item, i) => {
            const fx = HOVER_EFFECTS[i % HOVER_EFFECTS.length];
            return (
              <motion.article
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
                whileHover={reducedMotion ? undefined : { ...fx, borderColor: "rgba(26,105,253,0.35)" }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-5 transition-colors ${i === 0 ? "lg:col-span-2" : ""} ${i === 4 ? "lg:row-span-2" : ""}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(26,105,253,0.08),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
                <h3 className="relative text-base font-bold text-white sm:text-lg">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/58 sm:text-para">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
