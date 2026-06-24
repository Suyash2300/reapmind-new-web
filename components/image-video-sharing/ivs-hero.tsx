"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { ServiceHeroFormCard } from "@/components/service-landing/service-hero-form-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { imageVideoSharingConfig } from "@/lib/image-video-sharing-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const FILM_FRAMES = [0.6, 0.85, 1, 0.75, 0.9, 0.65] as const;

export function IvsHero() {
  const { hero } = imageVideoSharingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 130, damping: 24 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 130, damping: 24 });

  function onCardMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface-dark pb-12 pt-10 md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
          <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover opacity-[0.24]" priority onError={() => setImgFailed(true)} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_15%_0%,rgba(244,63,94,0.18),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_88%_18%,rgba(26,105,253,0.14),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-400"
            >
              {hero.badge}
            </motion.p>
            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Sharing" />
            </div>
            <MountBlurFade as="p" delay={0.3} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.45} className="mt-4 max-w-2xl text-md leading-relaxed text-white/65 sm:text-lg">
              {hero.descriptionSecondary}
            </MountBlurFade>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-7 flex items-center gap-1"
              aria-hidden
            >
              {FILM_FRAMES.map((w, i) => (
                <motion.span
                  key={i}
                  className="rounded-sm border border-rose-500/40 bg-rose-500/10"
                  style={{ width: `${w * 18}px`, height: `${w * 24}px` }}
                  animate={reducedMotion ? undefined : { rotate: [0, i % 2 === 0 ? 3 : -3, 0], y: [0, -4, 0] }}
                  transition={{ duration: 2 + i * 0.15, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                />
              ))}
            </motion.div>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.55, ease: smoothEase }}
              className="mt-7"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(244,63,94,0.35)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
              >
                {hero.cta}
              </Link>
            </motion.div>
          </div>

          <ServiceHeroFormCard
            formImage={hero.formImage}
            formImageAlt={hero.formImageAlt}
            formSubtitle={hero.formSubtitle}
            spotlight={hero.formSpotlight}
            reducedMotion={reducedMotion}
            cardRef={cardRef}
            rotateX={rotateX}
            rotateY={rotateY}
            onCardMove={onCardMove}
            onCardLeave={() => { mx.set(0); my.set(0); }}
            entranceDelay={0.18}
          />
        </div>
      </div>
    </section>
  );
}
