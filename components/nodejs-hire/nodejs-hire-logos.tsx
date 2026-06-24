"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { NodejsHireTrustedLogos } from "@/components/nodejs-hire/nodejs-hire-trusted-logos";
import { nodejsHireConfig } from "@/lib/nodejs-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function MarqueeRow({ logos, reverse }: { logos: readonly { name: string; src: string }[]; reverse?: boolean }) {
  const reduced = usePrefersReducedMotion();
  const doubled = [...logos, ...logos];

  if (reduced) {
    return (
      <ul className="flex flex-wrap justify-center gap-8">
        {logos.map((logo) => (
          <li key={logo.name} className="relative h-16 w-[130px] sm:h-20 sm:w-[150px]">
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="overflow-hidden">
      <motion.ul
        className="flex w-max gap-12"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      >
        {doubled.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="relative h-16 w-[130px] shrink-0 sm:h-20 sm:w-[150px]">
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export function NodejsHireLogos() {
  const { clientLogos, trustedBy } = nodejsHireConfig;
  const rowA = clientLogos.logos.slice(0, 5);
  const rowB = clientLogos.logos.slice(5);

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {clientLogos.title}
          </motion.h2>
          <div className="space-y-8">
            <MarqueeRow logos={rowA} />
            <MarqueeRow logos={rowB.length ? rowB : rowA} reverse />
          </div>
        </div>
      </section>

      <section className="section-app bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.3em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.05em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center text-h4 font-bold text-white md:text-h3"
          >
            {trustedBy.title}
          </motion.h2>
          <NodejsHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
