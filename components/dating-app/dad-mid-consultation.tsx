"use client";

import { motion } from "framer-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";

const FLOAT_HEARTS = [
  { left: "12%", top: "20%", delay: 0 },
  { left: "78%", top: "15%", delay: 0.6 },
  { left: "88%", top: "70%", delay: 1.2 },
  { left: "6%", top: "75%", delay: 1.8 },
] as const;

export function DadMidConsultation() {
  const { midConsultation } = datingAppConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="dad-mid-consult-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion &&
          FLOAT_HEARTS.map((h, i) => (
            <motion.span
              key={i}
              className="absolute text-rose-500/25"
              style={{ left: h.left, top: h.top, fontSize: "1.25rem" }}
              animate={{ y: [0, -12, 0], opacity: [0.2, 0.6, 0.2], rotate: [0, 8, 0] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: h.delay }}
            >
              ♥
            </motion.span>
          ))}
      </div>

      <div className="container-app relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-xl overflow-hidden rounded-[1.75rem] border border-rose-500/20 bg-black/60 p-6 backdrop-blur-md sm:p-8"
        >
          {!reducedMotion && (
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{ background: "linear-gradient(120deg, transparent, rgba(244,63,94,0.15), transparent)" }}
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
          )}
          <BlurFadeIn as="h2" id="dad-mid-consult-heading" className="relative text-center text-h4 font-bold text-white sm:text-h3">
            {midConsultation.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="relative mt-6">
            <ContactInquiryForm submitLabel={midConsultation.submitLabel} showMessage />
          </BlurFadeIn>
        </motion.div>
      </div>
    </section>
  );
}
