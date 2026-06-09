"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SwiftHireTrustedLogos } from "@/components/swift-hire/swift-hire-trusted-logos";
import { swiftHireConfig } from "@/lib/swift-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function MarqueeRow({ logos, reverse }: { logos: typeof swiftHireConfig.clientLogos.logos; reverse?: boolean }) {
  const reduced = usePrefersReducedMotion();
  const track = [...logos, ...logos];

  if (reduced) {
    return (
      <ul className="flex flex-wrap justify-center gap-8">
        {logos.map((logo) => (
          <li key={logo.name} className="relative h-16 w-[130px]">
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="130px" />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <motion.ul
      className="flex w-max gap-12"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: reverse ? 38 : 32, ease: "linear" }}
    >
      {track.map((logo, i) => (
        <li key={`${logo.name}-${i}`} className="relative h-16 w-[130px] shrink-0 sm:h-20 sm:w-[150px]">
          <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
        </li>
      ))}
    </motion.ul>
  );
}

export function SwiftHireLogos() {
  const { clientLogos, trustedBy } = swiftHireConfig;
  const rowA = clientLogos.logos.slice(0, 5);
  const rowB = clientLogos.logos.slice(5);

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {clientLogos.title}
          </motion.h2>
          <div className="space-y-8 overflow-hidden">
            <MarqueeRow logos={rowA} />
            <MarqueeRow logos={rowB} reverse />
          </div>
        </div>
      </section>

      <section className="section-app bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center text-h4 font-bold text-white md:text-h3"
          >
            {trustedBy.title}
          </motion.h2>
          <SwiftHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
