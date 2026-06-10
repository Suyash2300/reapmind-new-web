"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { valetParkingAppConfig } from "@/lib/valet-parking-app-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const PARKING_SLOTS = [
  { id: "A1", occupied: true, delay: 0 },
  { id: "A2", occupied: false, delay: 0.15 },
  { id: "A3", occupied: true, delay: 0.3 },
  { id: "B1", occupied: false, delay: 0.45 },
  { id: "B2", occupied: true, delay: 0.6 },
  { id: "B3", occupied: false, delay: 0.75 },
] as const;

const FLOW_STEPS = [
  { label: "Reserve", icon: "📍" },
  { label: "Park", icon: "🅿️" },
  { label: "Track", icon: "⏱️" },
  { label: "Retrieve", icon: "🚗" },
] as const;

function ParkingSlot({
  id,
  occupied,
  delay,
  reducedMotion,
}: (typeof PARKING_SLOTS)[number] & { reducedMotion: boolean }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scaleY: 0.6 }}
      animate={{ opacity: 1, scaleY: 1 }}
      transition={{ delay: 0.4 + delay, duration: 0.5, ease: smoothEase }}
      className={`relative flex h-14 flex-col items-center justify-end rounded-lg border sm:h-16 ${
        occupied
          ? "border-amber-400/40 bg-gradient-to-t from-amber-500/25 to-amber-500/5"
          : "border-emerald-400/30 bg-gradient-to-t from-emerald-500/15 to-transparent"
      }`}
    >
      <span className="absolute top-1.5 text-[9px] font-bold uppercase tracking-wider text-white/40 sm:text-[10px]">
        {id}
      </span>
      {occupied ? (
        <motion.div
          className="mb-2 h-5 w-8 rounded-md bg-white/20 sm:h-6 sm:w-10"
          animate={reducedMotion ? undefined : { y: [0, -2, 0] }}
          transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
      ) : (
        <motion.span
          className="mb-2 text-[10px] font-semibold text-emerald-400/90 sm:text-xs"
          animate={reducedMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          OPEN
        </motion.span>
      )}
    </motion.div>
  );
}

export function VpaHero() {
  const { hero } = valetParkingAppConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const visualRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.18] saturate-110"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(245,158,11,0.28),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_60%,rgba(6,182,212,0.12),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
        <motion.div
          className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-amber-500/15 blur-[100px]"
          animate={reducedMotion ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Parking" />
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

          <div
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative order-2 mx-auto w-full max-w-[400px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto"
          >
            <motion.div
              style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
              className="relative"
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-4 backdrop-blur-md sm:p-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">Live garage view</p>
                  <motion.span
                    className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400"
                    animate={reducedMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    3 slots open
                  </motion.span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-2.5">
                  {PARKING_SLOTS.map((slot) => (
                    <ParkingSlot key={slot.id} {...slot} reducedMotion={reducedMotion} />
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                  {FLOW_STEPS.map((step, i) => (
                    <div key={step.label} className="flex flex-1 flex-col items-center gap-1">
                      <motion.span
                        className="text-base sm:text-lg"
                        animate={reducedMotion ? undefined : { scale: [1, 1.08, 1] }}
                        transition={{ delay: i * 0.4, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        aria-hidden
                      >
                        {step.icon}
                      </motion.span>
                      <span className="text-[9px] font-semibold uppercase tracking-wide text-white/55 sm:text-[10px]">
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -right-2 top-8 z-10 min-w-[9rem] rounded-2xl border border-amber-400/30 bg-black/80 px-3 py-2.5 backdrop-blur-xl sm:-right-4 sm:min-w-[10rem] sm:px-4 sm:py-3"
                initial={reducedMotion ? false : { opacity: 0, x: 20, rotate: 3 }}
                animate={
                  reducedMotion
                    ? { opacity: 1, x: 0, rotate: 3 }
                    : { opacity: 1, x: 0, rotate: [2, 4, 2], y: [0, -8, 0] }
                }
                transition={
                  reducedMotion
                    ? { duration: 0.5, delay: 0.6 }
                    : { y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 5, repeat: Infinity } }
                }
              >
                <p className="text-[9px] font-bold uppercase tracking-widest text-amber-400/80">Ticket</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-white sm:text-base">VAP-2847</p>
                <p className="mt-1 text-[10px] text-white/50">Zone A · Level 2</p>
              </motion.div>

              <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={hero.phoneImage}
                  alt="VAP valet parking app on smartphone"
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-amber-500/10" aria-hidden />
              </div>
            </motion.div>
          </div>

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
