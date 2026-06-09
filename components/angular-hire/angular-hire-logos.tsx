"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AngularHireTrustedLogos } from "@/components/angular-hire/angular-hire-trusted-logos";
import { angularHireConfig } from "@/lib/angular-hire-config";

export function AngularHireLogos() {
  const logos = angularHireConfig.clientLogos.logos;

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {angularHireConfig.clientLogos.title}
          </motion.h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-12">
            {logos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, scale: 0.4, rotateY: 90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="relative h-16 w-[130px] sm:h-20 sm:w-[160px]"
                style={{ perspective: 600 }}
              >
                <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="160px" />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-app overflow-hidden bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-12 w-full origin-center border-b-2 border-primary pb-3 text-center text-h4 font-bold text-white md:text-h3"
          >
            {angularHireConfig.trustedBy.title}
          </motion.h2>
          <AngularHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
