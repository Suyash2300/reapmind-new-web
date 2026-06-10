"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { fleetManagementConfig } from "@/lib/fleet-management-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const FLEET_UNITS = [
  { id: "T-01", x: "18%", y: "30%", status: "moving", delay: 0 },
  { id: "T-02", x: "45%", y: "55%", status: "idle", delay: 0.2 },
  { id: "T-03", x: "72%", y: "38%", status: "moving", delay: 0.4 },
  { id: "V-04", x: "58%", y: "72%", status: "service", delay: 0.6 },
] as const;

export function FmsHero() {
  const { hero } = fleetManagementConfig;
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_0%,rgba(16,185,129,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_90%_70%,rgba(26,105,253,0.12),transparent)]" />
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
              <HeroWordHeading text={hero.heading} accentWord="Management" />
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
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">Fleet command centre</p>
                <span className="text-[10px] font-medium text-white/45">4 units live</span>
              </div>

              <div className="relative mt-4 aspect-[16/11] overflow-hidden rounded-xl border border-white/10 bg-[#071018]">
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(16,185,129,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.15) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden
                />

                {FLEET_UNITS.map((unit) => {
                  const color =
                    unit.status === "moving" ? "#10B981" : unit.status === "idle" ? "#F59E0B" : "#8B5CF6";
                  return (
                    <motion.div
                      key={unit.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: unit.x, top: unit.y }}
                      initial={reducedMotion ? false : { opacity: 0, scale: 0.5 }}
                      animate={
                        reducedMotion
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 1, scale: 1, y: unit.status === "moving" ? [0, -4, 0] : 0 }
                      }
                      transition={{
                        opacity: { delay: 0.4 + unit.delay, duration: 0.5 },
                        y: { duration: 3 + unit.delay, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <span
                        className="flex h-3 w-3 rounded-full"
                        style={{ backgroundColor: color, boxShadow: `0 0 12px ${color}88` }}
                      />
                      <span className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] font-bold text-white/50">
                        {unit.id}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Active", value: "12", color: "text-emerald-400" },
                  { label: "On route", value: "8", color: "text-primary" },
                  { label: "Alerts", value: "2", color: "text-amber-400" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center"
                  >
                    <p className="text-[9px] font-medium uppercase tracking-wider text-white/40">{chip.label}</p>
                    <p className={`mt-0.5 text-sm font-bold ${chip.color}`}>{chip.value}</p>
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
