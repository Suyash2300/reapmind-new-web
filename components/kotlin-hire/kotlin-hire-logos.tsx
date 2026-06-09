"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { KotlinHireTrustedLogos } from "@/components/kotlin-hire/kotlin-hire-trusted-logos";
import { kotlinHireConfig } from "@/lib/kotlin-hire-config";

export function KotlinHireLogos() {
  const { clientLogos, trustedBy } = kotlinHireConfig;

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
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.logos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="relative mx-auto h-16 w-[130px] sm:h-20 sm:w-[150px]"
              >
                <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-app bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140 }}
            className="mx-auto mb-12 max-w-3xl text-center text-h4 font-bold text-white md:text-h3"
          >
            {trustedBy.title}
          </motion.h2>
          <KotlinHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
