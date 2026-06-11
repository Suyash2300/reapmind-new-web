"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CbChatVisual } from "@/components/chatbots/cb-chat-visual";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CB_ACCENT, chatbotsConfig } from "@/lib/chatbots-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function CbEraIntro() {
  const { eraIntro } = chatbotsConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="cb-era-heading">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-14">
          <div>
            <BlurFadeIn as="h2" id="cb-era-heading" className="max-w-2xl text-h3 font-bold text-white sm:text-h2">
              {eraIntro.title}
            </BlurFadeIn>
            {eraIntro.paragraphs.map((paragraph, i) => (
              <BlurFadeIn key={paragraph.slice(0, 40)} as="p" delay={0.06 + i * 0.04} className="mt-5 max-w-2xl text-para leading-relaxed text-white/65">
                <WordReveal text={paragraph} delay={0.08 + i * 0.04} />
              </BlurFadeIn>
            ))}
            <BlurFadeIn delay={0.14} className="mt-8">
              <motion.div whileHover={reducedMotion ? undefined : { scale: 1.03 }} transition={{ duration: 0.3, ease: smoothEase }}>
                <Link
                  href="/contact-us#free-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-full px-8 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: CB_ACCENT }}
                >
                  {eraIntro.cta}
                </Link>
              </motion.div>
            </BlurFadeIn>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: smoothEase }}
            className="shadow-[0_32px_80px_-40px_rgba(26,105,253,0.35)]"
          >
            <CbChatVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
