"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { learningManagementConfig } from "@/lib/learning-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const COURSE_MODULES = [
  { label: "Module 1", title: "Intro", done: true },
  { label: "Module 2", title: "Core", done: true },
  { label: "Module 3", title: "Practice", done: false },
  { label: "Module 4", title: "Assess", done: false },
] as const;

export function LmsHero() {
  const { hero } = learningManagementConfig;
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(139,92,246,0.32),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_85%_75%,rgba(26,105,253,0.14),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
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
              <HeroWordHeading text={hero.heading} accentWord="E-Learning" />
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
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400/90">Learning studio</p>
                <span className="text-[10px] font-medium text-white/45">Course · 68% complete</span>
              </div>

              <div className="mt-4 space-y-4">
                <div className="relative mx-auto h-24 w-24 sm:mx-0">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 96 96" aria-hidden>
                    <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 40}
                      initial={reducedMotion ? { strokeDashoffset: 2 * Math.PI * 40 * 0.32 } : { strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * 0.32 }}
                      transition={{ duration: 1.4, ease: smoothEase, delay: 0.3 }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black text-white">68%</span>
                    <span className="text-[9px] text-white/45">Progress</span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] min-h-[160px] overflow-hidden rounded-xl border border-white/10 bg-[#0a0812]">
                  <Image
                    src={hero.appPreview.src}
                    alt={hero.appPreview.alt}
                    fill
                    sizes="(max-width: 768px) 90vw, 360px"
                    className="object-cover object-right"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" aria-hidden />
                  <div className="absolute bottom-3 left-3 rounded-lg border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-sm">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-violet-400">Education LMS</p>
                    <p className="text-[11px] font-semibold text-white">Coaching & courses</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {COURSE_MODULES.map((mod, i) => (
                  <motion.div
                    key={mod.label}
                    initial={reducedMotion ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.07, duration: 0.45 }}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${
                      mod.done ? "border-violet-400/25 bg-violet-500/10" : "border-white/10 bg-white/5"
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                        mod.done ? "bg-violet-500 text-white" : "border border-white/20 text-white/40"
                      }`}
                      aria-hidden
                    >
                      {mod.done ? "✓" : i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-medium uppercase tracking-wider text-white/40">{mod.label}</p>
                      <p className="truncate text-xs font-semibold text-white">{mod.title}</p>
                    </div>
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
