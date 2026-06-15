"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsFeatures() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h2
            className="text-h2 font-black text-white md:text-display"
            initial={reduced ? false : { opacity: 0 }}
            whileInView={reduced ? undefined : { opacity: 1 }}
            viewport={{ once: true }}
          >
            {oamsConfig.features.title}
            <motion.span
              className="mt-3 block h-1 rounded-full bg-emerald-500"
              initial={reduced ? false : { width: 0 }}
              whileInView={reduced ? undefined : { width: "6rem" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.h2>
          <motion.p
            className="mt-6 text-para leading-relaxed text-white/75"
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            {oamsConfig.features.intro}
          </motion.p>
        </div>

        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-emerald-950/20 sm:aspect-[16/10]"
          initial={reduced ? false : { opacity: 0, scale: 0.92, rotate: -2 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src={oamsConfig.features.image}
            alt={oamsConfig.features.title}
            fill
            quality={90}
            className="object-contain object-center p-2 sm:object-cover sm:p-0"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </motion.div>
      </div>
    </section>
  );
}
