"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { CountUp } from "@/components/motion/count-up";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const ACCENTS = ["#34D399", "#1A69FD", "#A78BFA", "#FBBF24", "#F472B6"] as const;
const STATS = [
  { end: 40, suffix: "%", label: "Broader reach" },
  { end: 2, suffix: "x", label: "Efficiency gain" },
  { end: 98, suffix: "%", label: "Patient satisfaction" },
] as const;

export function TmBenefits() {
  const { benefits } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="tm-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tm-benefits-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>

        <div className="mt-8 flex flex-wrap gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3"
            >
              <p className="text-2xl font-black text-white">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.article
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                whileHover={reducedMotion ? undefined : { rotateX: 4, y: -4 }}
                style={{ transformPerspective: 800 }}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <motion.div
                  className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-transparent via-current to-transparent"
                  style={{ color: accent }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                />
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/62 sm:text-para">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <BlurFadeIn delay={0.12} className="mt-10 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {benefits.cta}
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
