"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FullstackHireTrustedLogos } from "@/components/fullstack-hire/fullstack-hire-trusted-logos";
import { fullstackHireConfig } from "@/lib/fullstack-hire-config";

export function FullstackHireLogos() {
  const { clientLogos, trustedBy } = fullstackHireConfig;

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {clientLogos.title}
          </motion.h2>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.logos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.07,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                whileHover={{ scale: 1.06, y: -6 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-3xl text-center text-h4 font-bold text-white md:text-h3"
          >
            {trustedBy.title}
          </motion.h2>
          <FullstackHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
