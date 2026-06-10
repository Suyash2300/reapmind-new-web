"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineTuitionConfig } from "@/lib/online-tuition-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function OtaHero() {
  const { hero } = onlineTuitionConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14] saturate-110"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(14,165,233,0.3),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_15%_80%,rgba(245,158,11,0.14),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Education" />
            </div>

            <MountBlurFade as="p" delay={0.45} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.6, ease: smoothEase }}
              className="mt-8"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.55)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.25, duration: 0.85, ease: smoothEase }}
            className="relative order-2 mx-auto w-full max-w-[400px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-4 backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-400/90">Live tuition room</p>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-amber-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" aria-hidden />
                  Session live
                </span>
              </div>

              <div className="relative mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-sky-400/25 bg-sky-500/10 p-3">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-sky-400">Student</p>
                  <p className="mt-1 text-xs font-semibold text-white">Algebra · Demo</p>
                  {!reducedMotion && (
                    <motion.div
                      className="mt-2 h-1 overflow-hidden rounded-full bg-white/10"
                      aria-hidden
                    >
                      <motion.div
                        className="h-full rounded-full bg-sky-400"
                        animate={{ width: ["30%", "72%", "30%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </motion.div>
                  )}
                </div>
                <div className="rounded-xl border border-amber-400/25 bg-amber-500/10 p-3">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-amber-400">Tutor</p>
                  <p className="mt-1 text-xs font-semibold text-white">Dr. Mehta</p>
                  <p className="mt-2 text-[10px] text-white/50">★ 4.9 · 120 sessions</p>
                </div>
              </div>

              <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-[#061018]">
                <Image
                  src={hero.appPreview.src}
                  alt={hero.appPreview.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover object-right"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" aria-hidden />
                <motion.div
                  className="absolute left-3 top-3 text-lg"
                  animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  aria-hidden
                >
                  🪔
                </motion.div>
              </div>

              <div className="mt-3 flex gap-2">
                {["Book", "Chat", "Pay"].map((action, i) => (
                  <motion.span
                    key={action}
                    initial={reducedMotion ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.06, duration: 0.4 }}
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 py-2 text-center text-[10px] font-semibold text-white/70"
                  >
                    {action}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.85, ease: smoothEase }}
            className="order-3 rounded-[1.5rem] border border-border-strong bg-surface-elevated/90 p-5 backdrop-blur-md sm:p-6 lg:order-none lg:col-start-1 lg:row-start-2"
          >
            <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
            <p className="mt-2 text-sm text-white/60">{hero.formSubtitle}</p>
            <div className="mt-5">
              <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
