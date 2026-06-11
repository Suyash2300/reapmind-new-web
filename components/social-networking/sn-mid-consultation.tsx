"use client";

import { motion } from "framer-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

export function SnMidConsultation() {
  const { midConsultation } = socialNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="sn-mid-consult-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion && (
          <motion.div
            className="absolute -inset-[1px] opacity-60"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(168,85,247,0.5), rgba(6,182,212,0.4), transparent)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        )}
      </div>

      <div className="container-app relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-xl rounded-[1.75rem] border border-white/10 bg-black/80 p-6 backdrop-blur-md sm:p-8"
        >
          <BlurFadeIn as="h2" id="sn-mid-consult-heading" className="text-center text-h4 font-bold text-white sm:text-h3">
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
