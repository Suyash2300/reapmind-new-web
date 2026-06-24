"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { oamsConfig } from "@/lib/oams-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function OamsClientLogos() {
  const reduced = usePrefersReducedMotion();
  const logos = [...oamsConfig.clientLogos.logos, ...oamsConfig.clientLogos.logos];

  return (
    <section className="section-app overflow-hidden border-y border-white/10 bg-surface-header py-16">
      <div className="container-app">
        <h2 className="mx-auto max-w-4xl text-center text-h3 font-bold text-white">
          {oamsConfig.clientLogos.title}
        </h2>
      </div>

      <div className="mt-10 overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-5 px-4 sm:gap-8"
          animate={reduced ? undefined : { x: ["-50%", "0%"] }}
          transition={reduced ? undefined : { duration: 26, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="relative flex h-20 w-[170px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-4 sm:h-24 sm:w-[210px]"
            >
              <Image src={logo.src} alt={logo.name} fill className="object-contain p-1" sizes="220px" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
