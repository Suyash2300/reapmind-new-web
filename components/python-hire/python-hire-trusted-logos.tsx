"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { pythonHireConfig } from "@/lib/python-hire-config";

export function PythonHireTrustedLogos() {
  const { trustedBy } = pythonHireConfig;

  return (
    <section className="section-app bg-black py-16">
      <div className="container-app">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-sm font-bold uppercase tracking-widest text-[#3776AB]"
        >
          {trustedBy.title}
        </motion.p>
        <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
          {trustedBy.logos.map((logo, i) => (
            <motion.li
              key={`${logo.src}-${i}`}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              style={{ transformPerspective: 600 }}
              whileHover={{ rotateY: 12, scale: 1.05 }}
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
