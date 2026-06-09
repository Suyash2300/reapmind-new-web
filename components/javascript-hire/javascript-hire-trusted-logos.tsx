"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { javascriptHireConfig } from "@/lib/javascript-hire-config";

export function JavascriptHireTrustedLogos() {
  const { trustedBy } = javascriptHireConfig;

  return (
    <section className="section-app bg-black py-16">
      <div className="container-app">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-[#F7DF1E]"
        >
          {trustedBy.title}
        </motion.p>
        <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
          {trustedBy.logos.map((logo, i) => (
            <motion.li
              key={`${logo.src}-${i}`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto h-14 w-[110px] sm:h-16 sm:w-[130px]"
            >
              <Image src={logo.src} alt={logo.name} fill unoptimized className="object-contain" sizes="130px" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
