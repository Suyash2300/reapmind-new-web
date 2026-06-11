"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";

export function PnpBenefits() {
  const { benefits } = professionalNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="pnp-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="pnp-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>

        <div
          ref={scrollRef}
          className="mt-10 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {benefits.items.map((item, index) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              whileHover={reducedMotion ? undefined : { scale: 1.05, y: -6 }}
              className="w-[min(78vw,260px)] shrink-0 snap-center rounded-2xl border border-white/10 p-6 text-center"
              style={{
                background: `linear-gradient(145deg, ${item.accent}18 0%, transparent 60%)`,
                borderColor: `${item.accent}33`,
              }}
            >
              <motion.div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full text-lg font-black"
                style={{ backgroundColor: `${item.accent}25`, color: item.accent }}
                animate={reducedMotion ? undefined : { rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>
              <h3 className="text-base font-bold text-white sm:text-lg">{item.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
