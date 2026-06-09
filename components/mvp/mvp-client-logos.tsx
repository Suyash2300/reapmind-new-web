"use client";

import { motion } from "framer-motion";
import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { mvpConfig } from "@/lib/mvp-config";
import { MvpReveal } from "@/components/mvp/mvp-motion";

export function MvpClientLogos() {
  return (
    <section className="section-app border-y border-white/5 bg-surface-header py-20">
      <div className="container-app">
        <MvpReveal variant="fadeUp" className="mx-auto mb-12 max-w-3xl text-center">
          <motion.h2
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            whileInView={{ letterSpacing: "0em", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-h3 font-bold leading-snug text-white md:text-h2"
          >
            {mvpConfig.clientLogos.title}
          </motion.h2>
        </MvpReveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <ClientLogoShowcase logos={mvpConfig.clientLogos.logos} />
        </motion.div>
      </div>
    </section>
  );
}
