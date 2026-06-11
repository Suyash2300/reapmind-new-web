"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BlurFadeIn, WordReveal } from "@/components/digital-product-marketplace/dpm-text-motion";
import { IonicLogoMark, isIonicIcon } from "@/components/ionic-development/ionic-logo-mark";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { ionicDevelopmentConfig } from "@/lib/ionic-development-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

function StackTagIcon({ icon, name }: { icon: string; name?: string }) {
  if (isIonicIcon(icon, name)) {
    return <IonicLogoMark size={16} />;
  }

  if (icon.startsWith("/")) {
    return (
      <span className="relative inline-flex h-4 w-4 shrink-0">
        <Image src={icon} alt="" fill sizes="16px" className="object-contain" unoptimized />
      </span>
    );
  }

  return (
    <span className="text-xs leading-none" aria-hidden>
      {icon}
    </span>
  );
}

export function IdxTechStack() {
  const { techStack } = ionicDevelopmentConfig;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16 lg:py-20" aria-labelledby="idx-tech-heading">
      <div className="container-app">
        <BlurFadeIn as="h2" id="idx-tech-heading" className="max-w-4xl text-h3 font-bold text-white sm:text-h2">
          {techStack.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">
          <WordReveal text={techStack.intro} delay={0.08} />
        </BlurFadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {techStack.categories.map((cat, i) => (
            <motion.article
              key={cat.id}
              initial={reducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.06, duration: 0.5, ease: smoothEase }}
              className="rounded-2xl border border-white/10 bg-surface-elevated/80 p-5"
            >
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider" style={{ color: cat.accent }}>
                <span className="text-base leading-none" aria-hidden>
                  {cat.icon}
                </span>
                {cat.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {cat.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/40 px-2 py-1 text-[11px] font-medium text-white/70"
                  >
                    <StackTagIcon icon={tag.icon} name={tag.name} />
                    {tag.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
