"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { risConfig } from "@/lib/ris-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const icons = ["💡", "🤝", "✅"];

export function RisWhyUs() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-surface-header py-20 sm:py-24">
      <div className="container-app grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h2
            className="text-h2 font-black text-white md:text-display"
            initial={reduced ? false : { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            whileInView={reduced ? undefined : { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {risConfig.whyUs.title}
          </motion.h2>
          <p className="mt-5 text-para leading-relaxed text-white/75">{risConfig.whyUs.intro}</p>

          <div className="mt-8 space-y-4">
            {risConfig.whyUs.items.map((item, index) => (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-black/40 p-5"
                initial={reduced ? false : { opacity: 0, x: -24 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="text-xl">{icons[index]}</span>
                <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-violet-500/20"
          initial={reduced ? false : { opacity: 0, scale: 1.08 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={reduced ? undefined : { scale: 1.02 }}
        >
          <Image
            src={risConfig.whyUs.videoPoster}
            alt="ReapMind client testimonials"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <motion.span
              className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-600/90 text-2xl text-white shadow-lg"
              animate={reduced ? undefined : { scale: [1, 1.1, 1] }}
              transition={reduced ? undefined : { duration: 2, repeat: Infinity }}
            >
              ▶
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
