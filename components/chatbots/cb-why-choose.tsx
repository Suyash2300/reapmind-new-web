"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { chatbotsConfig } from "@/lib/chatbots-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function CbWhyChoose() {
  const { whyChoose } = chatbotsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-surface-dark py-12 md:py-16 lg:py-20" aria-labelledby="cb-why-choose-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="cb-why-choose-heading" className="mx-auto max-w-4xl text-center text-h3 font-bold text-white sm:text-h2">
          {whyChoose.title}
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {whyChoose.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: smoothEase }}
              whileHover={reducedMotion ? undefined : { y: -4 }}
              className="h-full rounded-2xl border border-white/10 bg-surface-elevated/80 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg"
                  style={{ backgroundColor: `${item.accent}18`, border: `1px solid ${item.accent}33` }}
                  aria-hidden
                >
                  {item.icon}
                </span>
                <div>
                  <span className="text-xs font-bold tabular-nums" style={{ color: item.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-subtitle font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
