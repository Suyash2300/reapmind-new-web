"use client";

import { motion } from "framer-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

export function IvsMidConsultation() {
  const { midConsultation } = imageVideoSharingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="ivs-mid-consult-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <motion.div
            className="absolute left-1/2 top-0 h-px w-full max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"
            animate={{ scaleX: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="container-app relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-xl rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-md sm:p-8"
        >
          <BlurFadeIn as="h2" id="ivs-mid-consult-heading" className="text-center text-h4 font-bold text-white sm:text-h3">
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
