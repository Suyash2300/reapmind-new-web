"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useHealthcareServiceConfig } from "./healthcare-service-context";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function HsFeatures() {
  const config = useHealthcareServiceConfig();
  const reduced = usePrefersReducedMotion();
  const fullIntro = config.features.intro;
  const [visibleChars, setVisibleChars] = useState(reduced ? fullIntro.length : 0);

  useEffect(() => {
    if (reduced) return;
    let i = 0;
    const timer = setInterval(() => {
      i += 2;
      setVisibleChars(i);
      if (i >= fullIntro.length) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [fullIntro.length, reduced]);

  return (
    <section className="section-app bg-black py-20 sm:py-24">
      <div className="container-app grid items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.h2
            className="text-h2 font-black text-white md:text-display"
            initial={reduced ? false : { opacity: 0, x: -40 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {config.features.title}
          </motion.h2>
          <p className="mt-6 min-h-[8rem] text-para leading-relaxed text-white/75 sm:min-h-[6rem]">
            {fullIntro.slice(0, visibleChars)}
            {!reduced && visibleChars < fullIntro.length && (
              <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-cyan-400" />
            )}
          </p>
        </div>

        <motion.div
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-cyan-500/15 sm:aspect-[16/10]"
          initial={reduced ? false : { opacity: 0, scale: 1.1 }}
          whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative h-full w-full"
            animate={reduced ? undefined : { scale: [1, 1.08, 1] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={config.features.image}
              alt={config.features.title}
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
