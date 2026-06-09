"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { HeroWordHeading, MountBlurFade } from "@/components/digital-product-marketplace/dpm-text-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { onlineMarketplaceConfig } from "@/lib/online-marketplace-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const HUB_NODES = [
  { id: "sellers", label: "Sellers", sub: "List & price", x: "8%", y: "18%" },
  { id: "buyers", label: "Buyers", sub: "Browse & buy", x: "72%", y: "12%" },
  { id: "platform", label: "Platform", sub: "Orders & fees", x: "38%", y: "52%" },
  { id: "payments", label: "Payments", sub: "Secure checkout", x: "68%", y: "68%" },
] as const;

export function OmHero() {
  const { hero } = onlineMarketplaceConfig;
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const imageSrc = imgFailed ? hero.fallbackImage : hero.image;

  return (
    <section className="relative overflow-hidden bg-surface-dark pb-12 pt-10 text-primary-foreground md:pb-14 md:pt-12 lg:pt-14">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image src={imageSrc} alt="" fill sizes="100vw" className="object-cover opacity-[0.2]" priority onError={() => setImgFailed(true)} />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-dark/75 via-surface-dark/95 to-surface-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgba(26,105,253,0.24),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_30%,rgba(139,92,246,0.16),transparent)]" />
      </div>

      <div className="container-app relative">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:gap-12">
          <div>
            <motion.p
              initial={reducedMotion ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.55, ease: smoothEase }}
              className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              {hero.badge}
            </motion.p>
            <div className="mt-3">
              <HeroWordHeading text={hero.heading} accentWord="Marketplace" />
            </div>
            <MountBlurFade as="p" delay={0.45} className="mt-5 max-w-2xl text-md leading-relaxed text-white/78 sm:text-lg">
              {hero.description}
            </MountBlurFade>
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.55, ease: smoothEase }}
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
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/50 backdrop-blur-sm">
              <svg className="absolute inset-0 h-full w-full" aria-hidden>
                <motion.line x1="18%" y1="26%" x2="46%" y2="56%" stroke="rgba(26,105,253,0.5)" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 1.2, ease: smoothEase }} />
                <motion.line x1="76%" y1="22%" x2="50%" y2="56%" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.65, duration: 1.2, ease: smoothEase }} />
                <motion.line x1="50%" y1="60%" x2="74%" y2="72%" stroke="rgba(16,185,129,0.5)" strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ delay: 0.8, duration: 1.2, ease: smoothEase }} />
              </svg>
              {HUB_NODES.map((node, i) => (
                <motion.div
                  key={node.id}
                  className="absolute min-w-[6.5rem] rounded-xl border border-white/15 bg-black/65 px-3 py-2 backdrop-blur-md sm:min-w-[7.5rem]"
                  style={{ left: node.x, top: node.y }}
                  initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, y: reducedMotion ? 0 : [0, -6, 0] }}
                  transition={{
                    opacity: { delay: 0.35 + i * 0.1, duration: 0.5 },
                    scale: { delay: 0.35 + i * 0.1, duration: 0.5 },
                    y: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <p className="text-xs font-bold text-white">{node.label}</p>
                  <p className="text-[10px] text-white/45 sm:text-xs">{node.sub}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated/95 p-5 backdrop-blur-sm sm:p-6">
              <h2 className="text-h5 font-bold text-white">Have a Idea? Contact Us</h2>
              <p className="mt-2 text-sm text-white/60">{hero.formSubtitle}</p>
              <div className="mt-5">
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage={false} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
