"use client";

import { motion } from "framer-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { professionalNetworkingConfig } from "@/lib/professional-networking-config";

const GRID_DOTS = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i % 6) * 20 + 5}%`,
  top: `${Math.floor(i / 6) * 25 + 8}%`,
  delay: i * 0.05,
}));

export function PnpMidConsultation() {
  const { midConsultation } = professionalNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="pnp-mid-consult-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion &&
          GRID_DOTS.map((dot, i) => (
            <motion.span
              key={i}
              className="absolute h-1 w-1 rounded-full bg-emerald-400/40"
              style={{ left: dot.left, top: dot.top }}
              animate={{ opacity: [0.2, 0.9, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
            />
          ))}
      </div>

      <div className="container-app relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl rounded-[1.75rem] border border-white/10 bg-black/50 p-6 backdrop-blur-md sm:p-8"
        >
          <BlurFadeIn as="h2" id="pnp-mid-consult-heading" className="text-center text-h4 font-bold text-white sm:text-h3">
            {midConsultation.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="mt-6">
            <ContactInquiryForm submitLabel={midConsultation.submitLabel} showMessage />
          </BlurFadeIn>
        </motion.div>
      </div>
    </section>
  );
}
