"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { vehicleTrackingConfig } from "@/lib/vehicle-tracking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const SATELLITES = [
  { angle: 20, radius: 42, delay: 0 },
  { angle: 140, radius: 38, delay: 0.5 },
  { angle: 260, radius: 44, delay: 1 },
] as const;

export function VtsHero() {
  const { hero } = vehicleTrackingConfig;
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_-15%,rgba(6,182,212,0.32),transparent)]" />
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
              className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Tracking" />
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
              <div className="relative mx-auto aspect-square max-w-[280px] sm:max-w-[300px]">
                <div className="absolute inset-[12%] rounded-full border border-cyan-400/20 bg-cyan-500/5" aria-hidden />
                <motion.div
                  className="absolute inset-[12%] rounded-full border border-dashed border-cyan-400/30"
                  animate={reducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                  aria-hidden
                />
                {!reducedMotion &&
                  SATELLITES.map((sat, i) => {
                    const rad = (sat.angle * Math.PI) / 180;
                    const x = 50 + sat.radius * Math.cos(rad);
                    const y = 50 + sat.radius * Math.sin(rad);
                    return (
                      <motion.span
                        key={i}
                        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                        style={{ left: `${x}%`, top: `${y}%` }}
                        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: sat.delay }}
                        aria-hidden
                      />
                    );
                  })}
                <div className="absolute left-1/2 top-1/2 z-10 w-[58%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-white/15 bg-black shadow-[0_24px_60px_-20px_rgba(6,182,212,0.45)]">
                  <div className="relative aspect-[9/16]">
                    <Image
                      src={hero.appPreview.src}
                      alt={hero.appPreview.alt}
                      fill
                      sizes="(max-width: 768px) 55vw, 200px"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-cyan-500/10" aria-hidden />
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute -right-1 top-6 z-20 min-w-[8.5rem] rounded-2xl border border-cyan-400/30 bg-black/80 px-3 py-2.5 backdrop-blur-xl sm:-right-3"
                animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[9px] font-bold uppercase tracking-widest text-cyan-400/80">GPS lock</p>
                <p className="mt-0.5 font-mono text-sm font-bold text-white">12.9716° N</p>
                <p className="font-mono text-xs text-white/50">77.5946° E</p>
              </motion.div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {[
                  { label: "Speed", value: "48 km/h" },
                  { label: "Status", value: "Moving" },
                  { label: "Units", value: "24 live" },
                ].map((chip, i) => (
                  <motion.div
                    key={chip.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                    className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center"
                  >
                    <p className="text-[9px] font-medium uppercase tracking-wider text-white/40">{chip.label}</p>
                    <p className="mt-0.5 text-xs font-bold text-white sm:text-sm">{chip.value}</p>
                  </motion.div>
                ))}
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
