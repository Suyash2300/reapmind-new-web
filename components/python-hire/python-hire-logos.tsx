"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PythonHireTrustedLogos } from "@/components/python-hire/python-hire-trusted-logos";
import { pythonHireConfig } from "@/lib/python-hire-config";

function MarqueeRow({ logos, reverse }: { logos: typeof pythonHireConfig.clientLogos.logos; reverse?: boolean }) {
  const track = [...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <motion.ul
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="flex w-max gap-10"
      >
        {track.map((logo, i) => (
          <li key={`${logo.name}-${i}`} className="relative h-16 w-[130px] shrink-0 sm:h-20 sm:w-[150px]">
            <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export function PythonHireLogos() {
  const { clientLogos } = pythonHireConfig;
  const half = Math.ceil(clientLogos.logos.length / 2);
  const row1 = clientLogos.logos.slice(0, half);
  const row2 = clientLogos.logos.slice(half);

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {clientLogos.title}
          </motion.h2>
          <div className="space-y-8">
            <MarqueeRow logos={row1} />
            <MarqueeRow logos={row2.length ? row2 : row1} reverse />
          </div>
        </div>
      </section>
      <PythonHireTrustedLogos />
    </>
  );
}
