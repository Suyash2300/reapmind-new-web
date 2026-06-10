"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { universityManagementConfig } from "@/lib/university-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const CAMPUS_DEPTS = [
  { label: "Admissions", active: true },
  { label: "Academics", active: true },
  { label: "Hostel", active: false },
  { label: "Placement", active: false },
] as const;

export function UmsHero() {
  const { hero } = universityManagementConfig;
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
          className="object-contain object-center opacity-[0.12] p-[15%]"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(99,102,241,0.32),transparent)]" />
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
              className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="University" />
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
                <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400/90">Campus hub</p>
                <span className="text-[10px] font-medium text-white/45">Semester · Active</span>
              </div>

              <div className="relative mx-auto mt-4 aspect-square max-w-[220px]">
                <div className="absolute inset-[8%] rounded-full border border-indigo-400/20 bg-indigo-500/5" aria-hidden />
                {!reducedMotion && (
                  <motion.div
                    className="absolute inset-[8%] rounded-full border border-dashed border-indigo-400/25"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                    aria-hidden
                  />
                )}
                {CAMPUS_DEPTS.map((dept, i) => {
                  const angle = (i / CAMPUS_DEPTS.length) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 38 * Math.cos(rad);
                  const y = 50 + 38 * Math.sin(rad);
                  return (
                    <motion.span
                      key={dept.label}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-1 text-[9px] font-semibold sm:text-[10px] ${
                        dept.active
                          ? "border-indigo-400/40 bg-indigo-500/20 text-indigo-200"
                          : "border-white/15 bg-black/50 text-white/45"
                      }`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                    >
                      {dept.label}
                    </motion.span>
                  );
                })}
                <div className="absolute left-1/2 top-1/2 z-10 w-[52%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/15 bg-black shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={hero.appPreview.src}
                      alt={hero.appPreview.alt}
                      fill
                      sizes="180px"
                      className="object-cover object-right"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Students", value: "4.2k" },
                  { label: "Faculty", value: "280" },
                  { label: "Modules", value: "9 live" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.45 }}
                    className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center"
                  >
                    <p className="text-[9px] font-medium uppercase tracking-wider text-white/40">{chip.label}</p>
                    <p className="mt-0.5 text-xs font-bold text-white">{chip.value}</p>
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
