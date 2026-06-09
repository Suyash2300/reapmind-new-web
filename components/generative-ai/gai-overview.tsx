"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GaiNeuralVisual } from "@/components/generative-ai/gai-neural-visual";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { generativeAiConfig } from "@/lib/generative-ai-config";

export function GaiOverview() {
  const { overview } = generativeAiConfig;
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [24, -24]);
  const visualScale = useTransform(scrollYProgress, [0, 0.5, 1], reducedMotion ? [1, 1, 1] : [0.96, 1, 0.98]);

  return (
    <section
      ref={sectionRef}
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
    >
      <div className="container-app">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <StaggerGrid className="space-y-4">
              <StaggerItem>
                <h2 className="text-h3 font-bold text-white sm:text-h2">{overview.title}</h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-para font-medium text-primary/90">{overview.intro}</p>
              </StaggerItem>
              {overview.paragraphs.map((paragraph) => (
                <StaggerItem key={paragraph.slice(0, 40)}>
                  <p className="text-para leading-relaxed text-white/65">{paragraph}</p>
                </StaggerItem>
              ))}
              <StaggerItem>
                <Link
                  href="/contact-us#free-consultation"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white shadow-[0_12px_40px_-12px_rgba(26,105,253,0.45)] transition-transform hover:scale-[1.02] hover:bg-primary-hover"
                >
                  {overview.cta}
                </Link>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <FadeIn delay={0.1}>
            <motion.div
              style={{ y: visualY, scale: visualScale }}
              className="relative overflow-hidden rounded-[1.5rem] border border-border-strong bg-[#030712] shadow-[0_24px_80px_-24px_rgba(26,105,253,0.35)]"
            >
              <GaiNeuralVisual className="absolute inset-0" />
              <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                <Image
                  src={overview.image}
                  alt="Generative AI neural network visualization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                  priority={false}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
                  aria-hidden
                />
              </div>

              {!reducedMotion ? (
                <motion.div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      Live models
                    </p>
                    <p className="text-sm font-semibold text-white">GPT · Claude · Custom LLMs</p>
                  </div>
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                  </span>
                </motion.div>
              ) : null}
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
