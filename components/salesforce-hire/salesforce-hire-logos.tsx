"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SalesforceHireTrustedLogos } from "@/components/salesforce-hire/salesforce-hire-trusted-logos";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

const LOGO_BOX = "relative mx-auto h-16 w-full max-w-[180px] sm:h-20 md:h-24";

export function SalesforceHireLogos() {
  const celebratingLogos = salesforceHireConfig.clientLogos.logos;

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
            {salesforceHireConfig.clientLogos.title}
          </motion.h2>

          <ul className="flex flex-wrap items-end justify-center gap-x-8 gap-y-10 md:gap-x-12">
            {celebratingLogos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="w-[30%] min-w-[90px] max-w-[160px] sm:w-[140px]"
              >
                <motion.div
                  animate={{ y: [0, i % 2 === 0 ? -12 : 12, 0] }}
                  transition={{
                    delay: 0.5 + i * 0.15,
                    duration: 2.8 + (i % 4) * 0.25,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={LOGO_BOX}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="180px"
                  />
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-app overflow-hidden bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-h4 font-bold md:text-h3"
          >
            <motion.span
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-gradient-to-r from-[#00A1E0] to-primary bg-clip-text text-transparent"
            >
              {salesforceHireConfig.trustedBy.title}
            </motion.span>
          </motion.h2>
          <SalesforceHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
