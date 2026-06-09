"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { startupConfig } from "@/lib/startup-config";

export function SuConsultationSection() {
  const { consultation } = startupConfig;

  return (
    <section className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{consultation.title}</h2>
            <p className="mt-3 text-para text-white/60">{consultation.subtitle}</p>
            <ul className="mt-6 space-y-3 text-para text-white/75">
              {consultation.contacts.map((item) => (
                <li key={item.label}>
                  <span className="font-semibold text-white">{item.label}: </span>
                  {item.href ? (
                    <a href={item.href} className="text-primary hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/50">
              {consultation.trustLine}
            </p>
            <ul className="mt-5 flex flex-wrap gap-6">
              {consultation.clientLogos.map((logo) => (
                <li key={logo.name}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={48}
                    className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
              <ContactInquiryForm submitLabel={consultation.submitLabel} showMessage />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
