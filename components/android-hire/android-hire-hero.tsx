"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AndroidHeroVisual } from "@/components/android-hire/android-hire-hero-visual";
import { HIRE_HERO_VISUAL_OUTER } from "@/lib/hire-hero-visual-size";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const { hero } = androidHireConfig;

  return (
    <section ref={ref} className="relative min-h-[94vh] overflow-hidden bg-black pt-32 pb-20">
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0">
        <Image src={hero.image} alt="" fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/80 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_45%)]" />
      </motion.div>

      <div className="container-app relative z-10">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/50">
          <ol className="flex flex-wrap items-center gap-2">
            {androidHireConfig.breadcrumb.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden className="text-white/30">›</span>}
                {i < androidHireConfig.breadcrumb.length - 1 ? (
                  <Link href={crumb.href} className="transition-colors hover:text-primary">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white/80">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">

            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-display font-black leading-[1.05] text-white"
            >
              {hero.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-8 max-w-2xl text-para leading-relaxed text-white/75"
            >
              {hero.description}
            </motion.p>

            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.6 } } }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {hero.benefitBullets.map((b) => (
                <motion.li
                  key={b}
                  variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70"
                >
                  {b}
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-primary px-8 font-bold text-black"
              >
                {hero.primaryCta}
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/25 px-8 font-bold text-white hover:bg-white hover:text-black"
              >
                {hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotateY: 25, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1200 }}
            className={`${HIRE_HERO_VISUAL_OUTER} lg:col-span-5`}
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-[#3DDC84]/25 blur-2xl" aria-hidden />
            <AndroidHeroVisual />
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {hero.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.5)" }}
              className="rounded-2xl border border-white/10 bg-black/50 p-6 backdrop-blur-md"
            >
              <p className="text-2xl font-black text-primary sm:text-3xl">{s.value}</p>
              <p className="mt-2 text-xs font-medium text-white/60 sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
