"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { ServiceHeroFormCard } from "@/components/service-landing/service-hero-form-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { datingAppConfig } from "@/lib/dating-app-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

export function DadHero() {
  const { hero } = datingAppConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 130, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 130, damping: 20 });

  function onCardMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface-dark pb-12 pt-10 md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover opacity-[0.22]" priority onError={() => setImgFailed(true)} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/72 via-surface-dark/94 to-surface-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_10%_0%,rgba(244,63,94,0.22),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_88%_22%,rgba(251,113,133,0.14),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-400"
            >
              {hero.badge}
            </motion.p>
            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Company" />
            </div>
            <MountBlurFade as="p" delay={0.35} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>

            <div className="relative mt-8 flex h-20 w-20 items-center justify-center" aria-hidden>
              {!reducedMotion && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-full border border-rose-500/30"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-2 rounded-full border border-pink-400/25"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
                  />
                </>
              )}
              <motion.svg
                viewBox="0 0 24 24"
                className="relative h-9 w-9 text-rose-500"
                fill="currentColor"
                initial={false}
                animate={reducedMotion ? undefined : { scale: [1, 1.12, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </motion.svg>
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.55, ease: smoothEase }}
              className="mt-7"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(244,63,94,0.45)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
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
          />
        </div>
      </div>
    </section>
  );
}
