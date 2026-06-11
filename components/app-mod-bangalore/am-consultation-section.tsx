"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

type ConsultationConfig = {
  title: string;
  subtitle: string;
  submitLabel: string;
  trustLine: string;
  contacts: readonly { label: string; value: string; href: string }[];
  clientLogos: readonly { name: string; src: string }[];
};

type AmConsultationSectionProps = {
  consultation?: ConsultationConfig;
};

export function AmConsultationSection({
  consultation: consultationProp,
}: AmConsultationSectionProps = {}) {
  const consultation = consultationProp ?? appModBangaloreConfig.consultation;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{consultation.title}</h2>
            <p className="mt-3 text-para text-white/60">{consultation.subtitle}</p>
            <ul className="mt-6 space-y-3 text-para text-white/75">
              {consultation.contacts.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-white">{item.label}: </span>
                  <a href={item.href} className="text-primary hover:underline">
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              {consultation.trustLine}
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {consultation.clientLogos.map((logo) => (
                <li
                  key={logo.name}
                  className="flex h-24 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 sm:h-28 md:h-32"
                >
                  <div className="relative h-16 w-full max-w-[200px] sm:h-20 md:h-24">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 160px, 200px"
                      className="object-contain brightness-0 invert opacity-95"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
              <h3 className="text-h5 font-bold text-white">Get a Free Consultation</h3>
              <div className="mt-4">
                <ContactInquiryForm
                  submitLabel={consultation.submitLabel}
                  showMessage
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
