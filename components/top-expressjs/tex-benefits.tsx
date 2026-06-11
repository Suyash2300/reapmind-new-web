"use client";

import { motion } from "framer-motion";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { topExpressjsConfig } from "@/lib/top-expressjs-config";

export function TexBenefits() {
  const { benefits } = topExpressjsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-14 md:py-20" aria-labelledby="tex-benefits-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="tex-benefits-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </BlurFadeIn>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 50, rotateZ: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              whileHover={reducedMotion ? undefined : { y: -6, boxShadow: "0 20px 40px -15px rgba(34,211,238,0.3)" }}
              style={{ zIndex: benefits.items.length - i }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 backdrop-blur-md sm:p-6"
            >
              <span className="text-2xl font-black text-[#22d3ee]/40">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-base font-bold text-white sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
