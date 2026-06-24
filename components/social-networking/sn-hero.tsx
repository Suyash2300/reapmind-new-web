"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { ServiceHeroFormCard } from "@/components/service-landing/service-hero-form-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { socialNetworkingConfig } from "@/lib/social-networking-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

/** Precomputed positions — avoids SSR/client float + unit mismatches on motion.span */
const ORBIT_NODES = [
  { left: "92%", top: "50%", width: "10px", height: "10px", marginLeft: "-5px", marginTop: "-5px", delay: 0 },
  { left: "62.98%", top: "89.94%", width: "8px", height: "8px", marginLeft: "-4px", marginTop: "-4px", delay: 0.4 },
  { left: "16.02%", top: "74.69%", width: "9px", height: "9px", marginLeft: "-4.5px", marginTop: "-4.5px", delay: 0.8 },
  { left: "16.02%", top: "25.31%", width: "7px", height: "7px", marginLeft: "-3.5px", marginTop: "-3.5px", delay: 1.2 },
  { left: "62.98%", top: "10.06%", width: "11px", height: "11px", marginLeft: "-5.5px", marginTop: "-5.5px", delay: 1.6 },
] as const;

export function SnHero() {
  const { hero } = socialNetworkingConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const orbitRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 130, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 130, damping: 20 });

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
          <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover opacity-[0.23]" priority onError={() => setImgFailed(true)} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/95 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_8%_0%,rgba(168,85,247,0.22),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_92%_18%,rgba(6,182,212,0.16),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-400"
            >
              {hero.badge}
            </motion.p>
            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="World" />
            </div>
            <MountBlurFade as="p" delay={0.3} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <MountBlurFade as="p" delay={0.45} className="mt-4 max-w-2xl text-md leading-relaxed text-white/65 sm:text-lg">
              {hero.descriptionSecondary}
            </MountBlurFade>

            <div className="relative mt-8 h-24 w-24" aria-hidden>
              <motion.div
                className="absolute inset-0 rounded-full border border-violet-500/25"
                style={{ rotate: orbitRotate }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border border-cyan-500/20"
                animate={reducedMotion ? undefined : { rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              {ORBIT_NODES.map((node, index) => (
                <motion.span
                  key={index}
                  className="absolute rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(168,85,247,0.5)]"
                  style={{
                    left: node.left,
                    top: node.top,
                    width: node.width,
                    height: node.height,
                    marginLeft: node.marginLeft,
                    marginTop: node.marginTop,
                  }}
                  initial={false}
                  animate={reducedMotion ? undefined : { scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
                />
              ))}
            </div>

            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.55, ease: smoothEase }}
              className="mt-7"
            >
              <Link
                href="/contact-us#free-consultation"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(168,85,247,0.45)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
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
