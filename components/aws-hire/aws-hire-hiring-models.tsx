"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { awsHireConfig } from "@/lib/aws-hire-config";

export function AwsHireHiringModels() {
  const { hiringModels } = awsHireConfig;

  return (
    <section className="section-app bg-black py-32">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-display font-black text-white">{hiringModels.title}</h2>
          <p className="mt-6 text-para text-white/65">{hiringModels.subtitle}</p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
          {hiringModels.models.map((model, i) => (
            <motion.article
              key={model.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8"
            >
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "200%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.9, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#FF9900]/20 to-transparent"
                aria-hidden
              />
              <h3 className="text-h4 font-bold text-[#FF9900]">{model.title}</h3>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Per Day</dt>
                  <dd className="mt-1 text-lg font-bold text-white">{model.hoursPerDay}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-white/45">Hours Commitment</dt>
                  <dd className="mt-1 text-lg font-bold text-white">{model.commitment}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/contact-us"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#FF9900] px-10 font-bold text-black"
          >
            {hiringModels.finalizeCta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
