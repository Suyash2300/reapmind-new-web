"use client";

import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { telemedicineConfig } from "@/lib/telemedicine-config";

export function TmConsultationStack() {
  const { midConsultation } = telemedicineConfig;

  return (
    <section className="border-t border-white/10 bg-black py-12 md:py-16" aria-labelledby="tm-consult-stack-heading">
      <div className="container-app">
        <div className="mx-auto max-w-xl">
          <BlurFadeIn as="h2" id="tm-consult-stack-heading" className="text-center text-h3 font-bold text-white sm:text-h2">
            {midConsultation.title}
          </BlurFadeIn>
          <BlurFadeIn delay={0.08} className="mt-6 rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
            <ContactInquiryForm submitLabel={midConsultation.submitLabel} showMessage />
          </BlurFadeIn>
        </div>
      </div>
    </section>
  );
}
