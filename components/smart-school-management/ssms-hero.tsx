"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { smartSchoolManagementConfig } from "@/lib/smart-school-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const DASHBOARD_STATS = [
  { label: "Attendance", value: "94%" },
  { label: "Classes", value: "12 live" },
  { label: "Fees", value: "On track" },
] as const;

export function SsmsHero() {
  const { hero } = smartSchoolManagementConfig;
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(16,185,129,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_75%,rgba(26,105,253,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="School" />
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
            className="relative order-2 mx-auto w-full max-w-[420px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto"
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/55 p-4 backdrop-blur-md sm:p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">School command centre</p>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">Term 2</span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {DASHBOARD_STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.45 + i * 0.08, duration: 0.45 }}
                    className="rounded-xl border border-white/10 bg-white/5 px-2 py-2.5 text-center"
                  >
                    <p className="text-[9px] font-medium uppercase tracking-wider text-white/40">{stat.label}</p>
                    <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="relative mt-4 aspect-[16/10] min-h-[160px] overflow-hidden rounded-xl border border-white/10 bg-[#061018]">
                <Image
                  src={hero.appPreview.src}
                  alt={hero.appPreview.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, 360px"
                  className="object-cover object-right"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" aria-hidden />
                <div className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-sm">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-400">School ERP</p>
                  <p className="text-[11px] font-semibold text-white">Admin · Academics · Fees</p>
                </div>
              </div>

              <div className="mt-4 space-y-1.5">
                {["Mon — Mathematics", "Tue — Science lab", "Wed — Parent meet"].map((slot, i) => (
                  <motion.div
                    key={slot}
                    initial={reducedMotion ? false : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 + i * 0.07, duration: 0.4 }}
                    className="flex items-center gap-2 rounded-lg border border-white/8 bg-black/40 px-3 py-2"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                    <span className="text-[11px] font-medium text-white/70">{slot}</span>
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
