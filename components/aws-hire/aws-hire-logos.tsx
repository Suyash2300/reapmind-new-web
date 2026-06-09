"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AwsHireTrustedLogos } from "@/components/aws-hire/aws-hire-trusted-logos";
import { awsHireConfig } from "@/lib/aws-hire-config";

export function AwsHireLogos() {
  const logos = awsHireConfig.clientLogos.logos;

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
            {awsHireConfig.clientLogos.title}
          </motion.h2>
          <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {logos.map((logo, i) => (
              <motion.li
                key={logo.name}
                initial={{ opacity: 0, rotateX: 75 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                whileHover={{ y: -6, scale: 1.05 }}
                style={{ transformPerspective: 800 }}
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
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mx-auto mb-12 max-w-3xl text-center text-h4 font-bold text-white md:text-h3"
          >
            {awsHireConfig.trustedBy.title}
          </motion.h2>
          <AwsHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
