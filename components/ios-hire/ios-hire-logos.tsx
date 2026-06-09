"use client";

import { motion } from "framer-motion";
import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { IosHireTrustedLogos } from "@/components/ios-hire/ios-hire-trusted-logos";
import { iosHireConfig } from "@/lib/ios-hire-config";

export function IosHireLogos() {
  return (
    <>
      <section className="section-app border-y border-white/5 bg-surface-header py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-12 max-w-4xl text-center text-h3 font-bold text-white md:text-h2"
          >
            {iosHireConfig.clientLogos.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            <ClientLogoShowcase logos={iosHireConfig.clientLogos.logos} />
          </motion.div>
        </div>
      </section>

      <section className="section-app overflow-hidden bg-black py-20">
        <div className="container-app">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.15em" }}
            whileInView={{ opacity: 1, letterSpacing: "0em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center text-h4 font-bold text-white md:text-h3"
          >
            {iosHireConfig.trustedBy.title}
          </motion.h2>
          <IosHireTrustedLogos />
        </div>
      </section>
    </>
  );
}
