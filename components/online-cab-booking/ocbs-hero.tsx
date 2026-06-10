"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineCabBookingConfig } from "@/lib/online-cab-booking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const RIDE_STEPS = [
  { label: "Book", sub: "Set pickup" },
  { label: "Match", sub: "Find driver" },
  { label: "Ride", sub: "Live track" },
  { label: "Pay", sub: "Rate trip" },
] as const;

export function OcbsHero() {
  const { hero } = onlineCabBookingConfig;
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
          className="object-cover opacity-[0.17] saturate-125"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(139,92,246,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_80%,rgba(26,105,253,0.14),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
        <motion.div
          className="absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-violet-500/15 blur-[100px]"
          animate={reducedMotion ? undefined : { x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Booking" />
            </div>

            <MountBlurFade as="p" delay={0.5} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
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
            <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-4 backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/90">Your ride</p>
                <motion.span
                  className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-400"
                  animate={reducedMotion ? undefined : { opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Driver arriving
                </motion.span>
              </div>

              <div className="relative mt-4 aspect-[16/11] overflow-hidden rounded-xl border border-white/10 bg-[#0c0f1a]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" preserveAspectRatio="none" aria-hidden>
                  <motion.path
                    d="M 40 170 Q 140 60 220 90 T 360 120"
                    fill="none"
                    stroke="rgba(139,92,246,0.4)"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: reducedMotion ? 0 : 1.6, ease: smoothEase, delay: 0.3 }}
                  />
                  {!reducedMotion && (
                    <motion.g
                      animate={{ offsetDistance: ["0%", "100%"] }}
                      style={{ offsetPath: 'path("M 40 170 Q 140 60 220 90 T 360 120")' }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    >
                      <rect x="-10" y="-6" width="20" height="12" rx="3" fill="#8B5CF6" />
                    </motion.g>
                  )}
                </svg>
                <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-sm">
                  <p className="text-[9px] font-medium uppercase tracking-wider text-white/45">Pickup</p>
                  <p className="text-xs font-semibold text-white">MG Road</p>
                </div>
                <div className="absolute bottom-4 right-4 rounded-lg border border-violet-400/25 bg-violet-500/10 px-2.5 py-1.5 backdrop-blur-sm">
                  <p className="text-[9px] font-medium uppercase tracking-wider text-violet-300/70">Drop</p>
                  <p className="text-xs font-semibold text-white">Airport T2</p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {RIDE_STEPS.map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-white/10 bg-white/5 px-1.5 py-2 text-center sm:px-2"
                  >
                    <p className="text-[10px] font-bold text-violet-400 sm:text-xs">{step.label}</p>
                    <p className="mt-0.5 text-[8px] text-white/45 sm:text-[9px]">{step.sub}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">Est. fare</p>
                  <p className="text-lg font-bold text-white">₹ 348</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">ETA</p>
                  <p className="text-lg font-bold text-emerald-400">4 min</p>
                </div>
              </motion.div>
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
