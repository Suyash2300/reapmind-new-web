"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

const CENTER = { x: 50, y: 50 };

function benefitPosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  const radius = 38;
  return {
    left: `${CENTER.x + radius * Math.cos(angle)}%`,
    top: `${CENTER.y + radius * Math.sin(angle)}%`,
  };
}

export function SnBenefits() {
  const { benefits } = socialNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const items = benefits.items;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="sn-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="sn-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>

        <div className="relative mx-auto mt-12 aspect-square max-w-lg">
          {!reducedMotion && (
            <>
              <motion.div
                className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20"
                animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/15"
                animate={{ scale: [1.06, 1, 1.06], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                aria-hidden
              />
              {items.map((_, i) => {
                const from = benefitPosition(i, items.length);
                const to = benefitPosition((i + 1) % items.length, items.length);
                return (
                  <motion.svg key={i} className="absolute inset-0 h-full w-full" aria-hidden>
                    <motion.line
                      x1={from.left}
                      y1={from.top}
                      x2={to.left}
                      y2={to.top}
                      stroke="rgba(168,85,247,0.25)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                    />
                  </motion.svg>
                );
              })}
            </>
          )}

          <motion.div
            className="absolute left-1/2 top-1/2 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-surface-elevated/90 text-center backdrop-blur-sm"
            initial={reducedMotion ? false : { scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-violet-300">Social</span>
          </motion.div>

          {items.map((item, index) => {
            const pos = benefitPosition(index, items.length);
            return (
              <motion.article
                key={item.id}
                className="absolute z-20 w-[min(36vw,140px)] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 p-3 text-center backdrop-blur-sm sm:w-[140px] sm:p-4"
                style={{ left: pos.left, top: pos.top, background: `linear-gradient(160deg, ${item.accent}20, transparent)` }}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={reducedMotion ? undefined : { scale: 1.08, y: -4 }}
              >
                <motion.div
                  className="mx-auto mb-2 h-2 w-2 rounded-full"
                  style={{ backgroundColor: item.accent }}
                  animate={reducedMotion ? undefined : { boxShadow: [`0 0 0 0 ${item.accent}66`, `0 0 0 8px ${item.accent}00`] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />
                <h3 className="text-xs font-bold leading-snug text-white sm:text-sm">{item.title}</h3>
              </motion.article>
            );
          })}
        </div>

        <BlurFadeIn delay={0.15} className="mt-10 text-center">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-violet-500/40 bg-violet-500/10 px-8 text-sm font-semibold text-white transition-colors hover:bg-violet-500/20"
          >
            Book a Free Consultation
          </Link>
        </BlurFadeIn>
      </div>
    </section>
  );
}
