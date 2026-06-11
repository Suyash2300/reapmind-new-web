"use client";

import { motion } from "framer-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { shortVideoAppConfig } from "@/lib/short-video-app-config";

export function SvadMidConsultation() {
  const { midConsultation } = shortVideoAppConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="svad-mid-consult-heading">
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      )}
      <div className="container-app relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="mx-auto max-w-xl rounded-[1.75rem] border border-white/10 bg-black/55 p-6 backdrop-blur-md sm:p-8"
        >
          <BlurFadeIn as="h2" id="svad-mid-consult-heading" className="text-center text-h4 font-bold text-white sm:text-h3">
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
