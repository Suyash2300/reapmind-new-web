"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";

export function AcConsultationSection() {
  const { consultation } = aiCopilotConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-start lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{consultation.title}</h2>
            <p className="mt-3 text-para text-white/60">{consultation.subtitle}</p>
            <ul className="mt-6 space-y-3 text-para text-white/75">
              {consultation.contacts.map((item: { label: string; value: string; href?: string }) => (
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
            <ul className="mt-5 flex flex-wrap items-center gap-5">
              {consultation.clientLogos.map((logo) => (
                <li key={logo.name} className="relative h-10 w-28 shrink-0 transition-transform duration-300 ease-out hover:scale-110">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    unoptimized
                    className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-5 sm:p-6">
              <ContactInquiryForm submitLabel={consultation.submitLabel} showMessage={false} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
