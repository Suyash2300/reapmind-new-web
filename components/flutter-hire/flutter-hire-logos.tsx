"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FlutterHireTrustedLogos } from "@/components/flutter-hire/flutter-hire-trusted-logos";
import { flutterHireConfig } from "@/lib/flutter-hire-config";

const LOGO_BOX = "relative mx-auto h-16 w-full max-w-[180px] sm:h-20 md:h-24";

export function FlutterHireLogos() {
  const logos = flutterHireConfig.clientLogos.logos;

  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.02em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {flutterHireConfig.clientLogos.title}
          </motion.h2>

          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-12 md:gap-x-14">
            {logos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className="w-[28%] min-w-[88px] max-w-[150px] sm:w-[130px]"
              >
                <div className={LOGO_BOX}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    unoptimized
                    className="object-contain"
                    sizes="180px"
                  />
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-app overflow-hidden bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-h4 font-bold text-white md:text-h3"
          >
            <motion.span
              className="inline-block"
              initial={{ filter: "blur(8px)" }}
              whileInView={{ filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {flutterHireConfig.trustedBy.title}
            </motion.span>
          </motion.h2>
          <FlutterHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
