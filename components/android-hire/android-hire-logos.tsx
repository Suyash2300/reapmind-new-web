"use client";

import { motion } from "framer-motion";
import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { AndroidHireTrustedLogos } from "@/components/android-hire/android-hire-trusted-logos";
import { androidHireConfig } from "@/lib/android-hire-config";

export function AndroidHireLogos() {
  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {androidHireConfig.clientLogos.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ClientLogoShowcase logos={androidHireConfig.clientLogos.logos} />
          </motion.div>
        </div>
      </section>

      <section className="section-app overflow-hidden bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center text-h4 font-bold text-white md:text-h3"
          >
            {androidHireConfig.trustedBy.title}
          </motion.h2>
          <AndroidHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
