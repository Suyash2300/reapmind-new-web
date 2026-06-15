"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const ACCENTS = ["#34D399", "#1A69FD", "#A78BFA", "#06B6D4", "#F59E0B"] as const;
const smoothEase = [0.22, 1, 0.36, 1] as const;

export function TmDoctorPanel() {
  const { doctorPanel } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tm-doctor-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-doctor-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {doctorPanel.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">
          {doctorPanel.intro}
        </BlurFadeIn>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {doctorPanel.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, x: 48, scale: 0.94 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -8, scale: 1.02 }}
              className="w-[min(88vw,340px)] shrink-0 snap-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/5 p-6 sm:p-7"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: `${ACCENTS[i % ACCENTS.length]}33`, color: ACCENTS[i % ACCENTS.length] }}
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/62 sm:text-para">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
