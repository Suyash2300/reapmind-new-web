"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ecommerceBusinessConfig } from "@/lib/ecommerce-business-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const FLOATING_CHIPS = [
  { label: "Cart total", value: "$249.00", x: "-18%", y: "8%", delay: 0 },
  { label: "Conversion", value: "+23%", x: "72%", y: "12%", delay: 0.4 },
  { label: "Rating", value: "4.9 ★", x: "68%", y: "68%", delay: 0.8 },
  { label: "Payments", value: "UPI · COD", x: "-12%", y: "62%", delay: 1.2 },
] as const;

function FloatingChip({
  label,
  value,
  x,
  y,
  delay,
  reducedMotion,
}: (typeof FLOATING_CHIPS)[number] & { reducedMotion: boolean }) {
  return (
    <motion.div
      className="absolute z-10 min-w-[7.5rem] rounded-2xl border border-white/15 bg-black/55 px-3 py-2.5 backdrop-blur-md sm:min-w-[8.5rem] sm:px-4 sm:py-3"
      style={{ left: x, top: y }}
      initial={reducedMotion ? false : { opacity: 0, scale: 0.85, y: 20 }}
      animate={
        reducedMotion
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 1, scale: 1, y: [0, -10, 0] }
      }
      transition={
        reducedMotion
          ? { duration: 0.5, delay: 0.3 + delay }
          : { y: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }, opacity: { delay: 0.3 + delay, duration: 0.6 } }
      }
    >
      <p className="text-[10px] font-medium uppercase tracking-wider text-white/45 sm:text-xs">{label}</p>
      <p className="mt-0.5 text-sm font-bold text-white sm:text-base">{value}</p>
    </motion.div>
  );
}

export function EbsHero() {
  const { hero } = ecommerceBusinessConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;
  const visualRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

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
          className="object-cover opacity-[0.22] saturate-125"
          priority
          quality={90}
          onError={() => setImgFailed(true)}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-20%,rgba(26,105,253,0.35),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/70 via-surface-dark/95 to-surface-dark" />
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px]"
          animate={reducedMotion ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-[100px]"
          animate={reducedMotion ? undefined : { x: [0, -35, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-12">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, x: -20, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              {hero.badge}
            </motion.p>

            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Solution" />
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
            className="relative order-2 mx-auto aspect-[4/5] w-full max-w-[340px] sm:max-w-[380px] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mx-0 lg:ml-auto lg:max-w-[420px]"
          >
            <motion.div
              style={reducedMotion ? undefined : { rotateX, rotateY, transformPerspective: 1200 }}
              className="relative h-full w-full"
            >
              <div className="absolute inset-[8%] rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-1 shadow-[0_40px_80px_-30px_rgba(26,105,253,0.45)]">
                <div className="relative h-full overflow-hidden rounded-[2.25rem] bg-black">
                  <Image
                    src={hero.phoneImage}
                    alt="eCommerce app interface preview"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-primary/10" aria-hidden />
                </div>
              </div>

              {!reducedMotion &&
                FLOATING_CHIPS.map((chip) => (
                  <FloatingChip key={chip.label} {...chip} reducedMotion={reducedMotion} />
                ))}

              <motion.div
                className="pointer-events-none absolute inset-0 rounded-full border border-primary/20"
                animate={reducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
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
