"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { JavascriptHireTrustedLogos } from "@/components/javascript-hire/javascript-hire-trusted-logos";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHireLogos() {
  const { clientLogos } = javascriptHireConfig;

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {clientLogos.title}
          </motion.h2>
          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.logos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: "spring", stiffness: 260, damping: 18 }}
                whileHover={{ scale: 1.08, y: -6 }}
                className="relative mx-auto h-16 w-[130px] sm:h-20 sm:w-[150px]"
              >
                <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="150px" />
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
      <JavascriptHireTrustedLogos />
    </>
  );
}
