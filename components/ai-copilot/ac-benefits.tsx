"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";

export function AcBenefits() {
  const { benefits } = aiCopilotConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{benefits.title}</h2>
            <ul className="mt-8 space-y-6">
              {benefits.items.map((item, i) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group border-l-2 border-primary/30 pl-5 transition-colors hover:border-primary"
                >
                  <h3 className="text-subtitle font-bold text-white group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-para leading-relaxed text-white/65">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {benefits.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
              <h3 className="text-h5 font-bold text-white">Get a Free Consultation</h3>
              <div className="mt-5">
                <ContactInquiryForm submitLabel="Contact Us Today" showMessage />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
