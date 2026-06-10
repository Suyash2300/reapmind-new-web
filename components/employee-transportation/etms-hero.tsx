"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { employeeTransportationConfig } from "@/lib/employee-transportation-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const ROUTE_STOPS = [
  { id: "office", label: "Office", x: "8%", y: "72%" },
  { id: "stop-a", label: "Stop A", x: "32%", y: "48%" },
  { id: "stop-b", label: "Stop B", x: "58%", y: "38%" },
  { id: "hub", label: "Hub", x: "82%", y: "58%" },
] as const;

export function EtmsHero() {
  const { hero } = employeeTransportationConfig;
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
          className="object-cover opacity-[0.16] saturate-110"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(26,105,253,0.3),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_85%_70%,rgba(6,182,212,0.15),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Transportation" />
            </div>

            <MountBlurFade as="p" delay={0.45} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.58} className="mt-4 max-w-2xl text-md leading-relaxed text-white/65 sm:text-lg">
              {hero.descriptionSecondary}
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
            className="relative order-2 mx-auto w-full max-w-[420px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-4 backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400/90">Live route monitor</p>
                <motion.span
                  className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400"
                  animate={reducedMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Shuttle en route
                </motion.span>
              </div>

              <div className="relative mt-4 aspect-[16/11] overflow-hidden rounded-xl border border-white/10 bg-[#0a1628]">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 220" preserveAspectRatio="none" aria-hidden>
                  <motion.path
                    d="M 32 160 Q 120 80 200 100 T 368 130"
                    fill="none"
                    stroke="rgba(26,105,253,0.35)"
                    strokeWidth="3"
                    strokeDasharray="8 6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: reducedMotion ? 0 : 1.8, ease: smoothEase, delay: 0.3 }}
                  />
                  {!reducedMotion && (
                    <motion.circle
                      r="8"
                      fill="#1A69FD"
                      filter="drop-shadow(0 0 8px rgba(26,105,253,0.8))"
                      animate={{
                        offsetDistance: ["0%", "100%"],
                      }}
                      style={{
                        offsetPath: 'path("M 32 160 Q 120 80 200 100 T 368 130")',
                      }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </svg>

                {ROUTE_STOPS.map((stop, i) => (
                  <motion.div
                    key={stop.id}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: stop.x, top: stop.y }}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.5, ease: smoothEase }}
                  >
                    <span className="flex h-3 w-3 rounded-full border-2 border-cyan-400 bg-cyan-400/30" />
                    <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold text-white/55 sm:text-[10px]">
                      {stop.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "ETA", value: "8 min" },
                  { label: "Onboard", value: "12/18" },
                  { label: "Stops", value: "4 left" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center"
                  >
                    <p className="text-[9px] font-medium uppercase tracking-wider text-white/40">{chip.label}</p>
                    <p className="mt-0.5 text-sm font-bold text-white">{chip.value}</p>
                  </motion.div>
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
