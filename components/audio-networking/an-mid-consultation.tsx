"use client";

import { motion } from "framer-motion";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { audioNetworkingConfig } from "@/lib/audio-networking-config";

const FLOATERS = [
  { size: 80, top: "12%", left: "8%", color: "rgba(168,85,247,0.35)", duration: 9 },
  { size: 56, top: "68%", left: "14%", color: "rgba(26,105,253,0.3)", duration: 11 },
  { size: 44, top: "22%", left: "88%", color: "rgba(6,182,212,0.28)", duration: 8 },
  { size: 72, top: "78%", left: "82%", color: "rgba(245,158,11,0.22)", duration: 10 },
] as const;

export function AnMidConsultation() {
  const { midConsultation } = audioNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16" aria-labelledby="an-mid-consult-heading">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {!reducedMotion &&
          FLOATERS.map((f, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full blur-xl"
              style={{ width: f.size, height: f.size, top: f.top, left: f.left, backgroundColor: f.color }}
              animate={{ y: [0, -18, 0], x: [0, i % 2 === 0 ? 12 : -12, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: f.duration, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(168,85,247,0.08),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="mx-auto max-w-xl rounded-[1.75rem] border border-white/10 bg-black/50 p-6 backdrop-blur-md sm:p-8">
          <BlurFadeIn as="h2" id="an-mid-consult-heading" className="text-center text-h4 font-bold text-white sm:text-h3">
            {midConsultation.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="mt-6">
            <ContactInquiryForm submitLabel={midConsultation.submitLabel} showMessage={false} />
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
