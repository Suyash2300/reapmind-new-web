"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { generativeAiConfig } from "@/lib/generative-ai-config";

const HUBS = [
  { city: "Bangalore", x: "62%", y: "52%" },
  { city: "Mumbai", x: "58%", y: "48%" },
  { city: "Atlanta", x: "22%", y: "42%" },
] as const;

export function GaiOffshorePromo() {
  const { offshorePromo } = generativeAiConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12">
      <div className="container-app">
        <FadeIn>
          <motion.div
            whileHover={reducedMotion ? undefined : { y: -4 }}
            transition={{ duration: 0.35 }}
            className="grid items-stretch overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated lg:grid-cols-2"
          >
            <div className="relative min-h-[240px] overflow-hidden bg-[#030712] lg:min-h-[320px]">
              <Image
                src={offshorePromo.image}
                alt={offshorePromo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/80 lg:bg-gradient-to-r lg:from-black/50 lg:via-transparent lg:to-black/60"
                aria-hidden
              />

              {!reducedMotion ? (
                <>
                  {HUBS.map((hub, i) => (
                    <motion.div
                      key={hub.city}
                      className="absolute"
                      style={{ left: hub.x, top: hub.y }}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15, type: "spring", stiffness: 200 }}
                    >
                      <span className="relative flex h-4 w-4 -translate-x-1/2 -translate-y-1/2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-primary" />
                      </span>
                      <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/15 bg-black/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm">
                        {hub.city}
                      </span>
                    </motion.div>
                  ))}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    aria-hidden
                  >
                    <div className="absolute left-[22%] top-[42%] h-px w-[40%] origin-left rotate-[8deg] bg-gradient-to-r from-primary/80 to-transparent" />
                    <div className="absolute left-[58%] top-[48%] h-px w-[8%] origin-left -rotate-[25deg] bg-gradient-to-r from-primary/60 to-transparent" />
                  </motion.div>
                </>
              ) : null}
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <motion.p
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold uppercase tracking-[0.18em] text-primary"
              >
                Global delivery
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 }}
                className="mt-3 text-h4 font-bold text-white sm:text-h3"
              >
                {offshorePromo.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="mt-4 text-para leading-relaxed text-white/65"
              >
                {offshorePromo.body}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
              >
                <Link
                  href={offshorePromo.href}
                  className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                >
                  {offshorePromo.cta}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
