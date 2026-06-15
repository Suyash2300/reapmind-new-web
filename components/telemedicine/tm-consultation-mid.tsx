"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmConsultationMid() {
  const { midConsultation } = telemedicineConfig;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-12 md:py-16">
      <div className="container-app">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative hidden min-h-[320px] overflow-hidden rounded-[1.75rem] border border-white/10 lg:block">
            <motion.div className="absolute inset-0" style={{ y: imageY }}>
              <Image
                src="/telemedicine/doctor.png"
                alt="Telemedicine consultation"
                fill
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-contain object-center p-8"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface-dark via-transparent to-transparent" />
          </div>

          <BlurFadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{midConsultation.title}</h2>
            <div className="mt-6 rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
              <ContactInquiryForm submitLabel={midConsultation.submitLabel} showMessage />
            </div>
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
