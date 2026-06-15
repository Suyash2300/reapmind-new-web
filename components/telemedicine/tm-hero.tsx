"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const CARE_PILLS = [
  { label: "Video consult", sub: "HD & secure" },
  { label: "EHR sync", sub: "Epic · Cerner" },
  { label: "HIPAA", sub: "Compliant" },
  { label: "24/7 care", sub: "Anywhere" },
] as const;

export function TmHero() {
  const { hero } = telemedicineConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springCfg = { stiffness: 140, damping: 22 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), springCfg);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), springCfg);

  function onCardMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onCardLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.24]"
            priority
            onError={() => setImgFailed(true)}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/94 to-surface-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_8%_0%,rgba(52,211,153,0.22),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_92%_18%,rgba(26,105,253,0.18),transparent)]" />
        {!reducedMotion && (
          <>
            <motion.div
              className="absolute left-[8%] top-[18%] h-24 w-24 rounded-full border border-emerald-400/20 bg-emerald-400/5 blur-sm"
              animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-[12%] top-[32%] h-16 w-16 rounded-2xl border border-primary/25 bg-primary/10"
              animate={{ y: [0, 12, 0], rotate: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
          </>
        )}
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-400"
            >
              {hero.badge}
            </motion.p>
            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Telemedicine" />
            </div>
            <MountBlurFade as="p" delay={0.35} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.48} className="mt-4 max-w-2xl text-md leading-relaxed text-white/65 sm:text-lg">
              {hero.descriptionSecondary}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.58} className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-para">
              {hero.descriptionTertiary}
            </MountBlurFade>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.55, ease: smoothEase }}
              className="mt-7"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.5)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8, ease: smoothEase }}
            className="space-y-4"
            style={{ perspective: 1200 }}
          >
            <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-5 backdrop-blur-md sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90">Care delivery stack</p>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {CARE_PILLS.map((pill, i) => (
                  <motion.div
                    key={pill.label}
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.1, duration: 0.5, ease: smoothEase }}
                    className="rounded-xl border border-white/10 bg-surface-elevated/80 px-3 py-3 text-center"
                  >
                    <span className="text-[10px] font-bold tabular-nums text-emerald-400/80">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-1 text-sm font-bold text-white">{pill.label}</p>
                    <p className="mt-0.5 text-[10px] text-white/45 sm:text-xs">{pill.sub}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              ref={cardRef}
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="rounded-[1.5rem] border border-border-strong bg-surface-elevated/95 p-5 backdrop-blur-sm sm:p-6"
            >
              <h2 className="text-h5 font-bold text-white">{hero.formSubtitle}</h2>
              <p className="mt-2 text-sm text-white/60">Free consultation within 24 hours.</p>
              <div className="mt-5" style={{ transform: "translateZ(24px)" }}>
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
