"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactHireTrustedLogos } from "@/components/react-hire/react-hire-trusted-logos";
import { reactHireConfig } from "@/lib/react-hire-config";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function MarqueeRow({
  logos,
  reverse,
}: {
  logos: typeof reactHireConfig.clientLogos.logos;
  reverse?: boolean;
}) {
  const track = [...logos, ...logos];
  return (
    <div className="flex overflow-hidden py-4">
      <motion.ul
        className="flex w-max items-center gap-14 pr-14"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: reverse ? 38 : 32, ease: "linear" }}
      >
        {track.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="relative h-14 w-[120px] shrink-0 sm:h-16 sm:w-[150px]">
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export function ReactHireLogos() {
  const logos = reactHireConfig.clientLogos.logos;
  const reducedMotion = usePrefersReducedMotion();
  const rowA = logos.slice(0, 5);
  const rowB = logos.slice(5);

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-16">
        <div className="container-app mb-10">
          <motion.h2
            initial={{ opacity: 0, skewY: 4 }}
            whileInView={{ opacity: 1, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {reactHireConfig.clientLogos.title}
          </motion.h2>
        </div>

        {reducedMotion ? (
          <div className="container-app flex flex-wrap justify-center gap-10">
            {logos.map((logo) => (
              <div key={logo.name} className="relative h-16 w-[140px]">
                <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="140px" />
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <MarqueeRow logos={rowA} />
            <MarqueeRow logos={rowB.length ? rowB : rowA} reverse />
          </div>
        )}
      </section>

      <section className="section-app bg-black py-20">
        <div className="container-app">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.35em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.12em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center text-xs font-bold uppercase text-[#61DAFB] sm:text-sm"
          >
            {reactHireConfig.trustedBy.title}
          </motion.p>
          <ReactHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
