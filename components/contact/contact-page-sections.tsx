"use client";

import { useCallback, useEffect, useState } from "react";
import { ClientLogoShowcase } from "@/components/home/client-logo-showcase";
import { ContactInquiryForm } from "@/components/contact/contact-inquiry-form";
import { FooterCountryFlag } from "@/components/layout/footer-location-marker";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import {
  contactAwards,
  contactConsultationForm,
  contactDirect,
  contactHero,
  contactProcess,
  contactQuoteForm,
  contactStandOut,
  contactTrustStats,
} from "@/lib/contact-page";
import {
  footerLocationTabs,
  footerOfficesAll,
  type FooterLocationTabId,
} from "@/lib/footer-config";

type ContactFormTab = "quote" | "consultation";

const contactFormTabs = [
  {
    id: "quote" as const,
    label: contactQuoteForm.title,
    hash: contactQuoteForm.id,
    title: contactQuoteForm.title,
    subtitle: contactQuoteForm.subtitle,
  },
  {
    id: "consultation" as const,
    label: contactConsultationForm.title,
    hash: contactConsultationForm.id,
    title: contactConsultationForm.title,
    subtitle: contactConsultationForm.subtitle,
  },
] as const;

function contactTabFromHash(hash: string): ContactFormTab {
  if (hash === `#${contactConsultationForm.id}`) return "consultation";
  return "quote";
}

export function ContactTopSection() {
  const [activeFormTab, setActiveFormTab] = useState<ContactFormTab>("quote");

  const switchFormTab = useCallback((tab: ContactFormTab) => {
    setActiveFormTab(tab);
    const hash =
      tab === "consultation"
        ? contactConsultationForm.id
        : contactQuoteForm.id;
    window.history.replaceState(null, "", `#${hash}`);
  }, []);

  useEffect(() => {
    const scrollToForm = () => {
      window.setTimeout(() => {
        document.getElementById("contact-form-panel")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    };

    const syncFromHash = (shouldScroll = false) => {
      const hash = window.location.hash;
      setActiveFormTab(contactTabFromHash(hash));

      if (
        shouldScroll &&
        (hash === `#${contactQuoteForm.id}` ||
          hash === `#${contactConsultationForm.id}`)
      ) {
        scrollToForm();
      }
    };

    syncFromHash(true);
    const onHashChange = () => syncFromHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const activeTabMeta = contactFormTabs.find((tab) => tab.id === activeFormTab)!;

  return (
    <section className="relative overflow-hidden bg-black pb-10 pt-8 text-primary-foreground md:pb-12 md:pt-10 lg:pt-12">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-24 top-0 size-[420px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-16 top-1/3 size-[320px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container-app relative">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8 xl:gap-10">
          <FadeIn className="lg:sticky lg:top-24 lg:max-w-xl lg:pt-2">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {contactHero.eyebrow}
            </p>
            <h1 className="mt-3 text-h2 font-bold tracking-tight text-white sm:text-h1 lg:mt-4">
              {contactHero.title}
            </h1>
            <p className="mt-4 text-para leading-relaxed text-white/65 sm:text-md">
              {contactHero.subtitle}
            </p>
          </FadeIn>

          <div
            id="contact-form-panel"
            className="mt-6 scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-surface-warm shadow-[0_24px_64px_-20px_rgba(0,0,0,0.55)] lg:mt-0 lg:min-w-0"
          >
          <div
            className="flex border-b border-border bg-[#f0efec]"
            role="tablist"
            aria-label="Contact form type"
          >
            {contactFormTabs.map((tab) => {
              const active = activeFormTab === tab.id;
              return (
                <HydrationButton
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`contact-tab-${tab.id}`}
                  aria-selected={active}
                  aria-controls={`contact-panel-${tab.id}`}
                  onClick={() => switchFormTab(tab.id)}
                  className={`min-h-12 flex-1 px-4 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-6 sm:text-base ${
                    active
                      ? "border-b-2 border-primary bg-surface-warm text-foreground"
                      : "border-b-2 border-transparent text-muted hover:text-secondary"
                  }`}
                >
                  {tab.label}
                </HydrationButton>
              );
            })}
          </div>

          <div
            id={
              activeFormTab === "consultation"
                ? contactConsultationForm.id
                : contactQuoteForm.id
            }
            role="tabpanel"
            aria-labelledby={`contact-tab-${activeFormTab}`}
            className="bg-surface-warm p-5 sm:p-6"
          >
            <div>
              <h2 className="sr-only">{activeTabMeta.title}</h2>
              <p className="text-sm leading-relaxed text-secondary sm:text-para">
                {activeTabMeta.subtitle}
              </p>

              {activeFormTab === "consultation" ? (
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {contactConsultationForm.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-secondary"
                    >
                      <span className="text-primary" aria-hidden>
                        ✓
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5">
                {activeFormTab === "quote" ? (
                  <ContactInquiryForm key="quote-form" />
                ) : (
                  <ContactInquiryForm
                    key="consultation-form"
                    submitLabel={contactConsultationForm.submitLabel}
                    showMessage={false}
                  />
                )}
              </div>
            </div>
          </div>
          </div>
        </div>

        <StaggerGrid className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-10 lg:grid-cols-5 lg:gap-4">
          {contactTrustStats.map((stat) => (
            <StaggerItem key={stat.id} className="h-full">
              <article className="h-full rounded-2xl border border-border-strong bg-surface-elevated/80 p-4 sm:p-5">
                <p className="text-h4 font-bold tabular-nums text-accent">
                  {stat.value}
                </p>
                <h3 className="mt-1.5 text-sm font-bold text-white sm:text-subtitle">
                  {stat.label}
                </h3>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <div className="mt-10 border-t border-white/8 pt-10 sm:mt-12">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            {contactHero.clientsLabel}
          </p>
          <div className="mt-8">
            <ClientLogoShowcase logos={contactHero.logos} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactStandOutSection() {
  return (
    <section className="border-t border-white/5 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">
              {contactStandOut.title}
            </h2>
            <p className="mt-4 text-para font-semibold text-white/80 sm:text-md">
              {contactStandOut.subtitle}
            </p>
            <p className="mt-2 text-para text-white/55">{contactStandOut.body}</p>
          </FadeIn>
        </div>

        <StaggerGrid className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-12">
          {contactStandOut.highlights.map((item) => (
            <StaggerItem key={item.id} hoverable>
              <div className="group flex h-full flex-col items-center rounded-2xl border border-border-strong bg-surface-elevated px-3 py-5 text-center transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_0_28px_-8px_rgba(26,105,253,0.35)] sm:px-4 sm:py-6">
                <p className="text-h4 font-bold text-primary sm:text-h3">
                  {item.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/70 sm:text-sm">
                  {item.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

export function ContactProcessSection() {
  return (
    <section className="border-t border-white/5 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-center text-h3 font-bold text-white sm:text-h2">
            {contactProcess.title}
          </h2>
        </FadeIn>

        <div className="relative mt-10 lg:mt-12">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block"
          />
          <StaggerGrid className="grid gap-6 md:grid-cols-3 md:gap-5">
            {contactProcess.steps.map((step, index) => (
              <StaggerItem key={step.id}>
                <article className="relative rounded-2xl border border-border-strong bg-surface-elevated p-6 sm:p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                    {step.phase}
                  </p>
                  <h3 className="mt-2 text-h4 font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-para leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}

const officeFilterMap: Record<
  Exclude<FooterLocationTabId, "all">,
  string
> = {
  mumbai: "Mumbai",
  bangalore: "Bangalore",
  usa: "USA",
  "development-center": "Development Center",
};

export function ContactOfficesSection() {
  const [activeTab, setActiveTab] =
    useState<FooterLocationTabId>("all");

  const visibleOffices =
    activeTab === "all"
      ? footerOfficesAll
      : footerOfficesAll.filter(
          (office) => office.city === officeFilterMap[activeTab],
        );

  return (
    <section className="border-t border-white/5 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-h3 font-bold text-white sm:text-h2">
            Global studios
          </h2>
          <p className="mt-3 max-w-2xl text-para text-white/60">
            Connect with ReapMind across India and the United States.
          </p>
        </FadeIn>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Office locations"
        >
          {footerLocationTabs.map((tab) => (
            <HydrationButton
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeTab === tab.id
                  ? "border-primary bg-primary/15 text-white"
                  : "border-white/12 bg-white/[0.03] text-white/65 hover:border-primary/35"
              }`}
            >
              {tab.label}
            </HydrationButton>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visibleOffices.map((office) => (
            <article
              key={office.city}
              className="rounded-2xl border border-border-strong bg-surface-elevated p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <FooterCountryFlag code={office.countryCode} />
                <div className="min-w-0 flex-1">
                  <h3 className="text-subtitle font-bold text-white">
                    {office.city}
                  </h3>
                  <p className="mt-2 text-para leading-relaxed text-white/60">
                    {office.address}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <a
                  href={contactDirect.phoneHref}
                  className="font-medium text-primary hover:underline"
                >
                  {contactDirect.phone}
                </a>
                <a
                  href={`mailto:${contactDirect.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {contactDirect.email}
                </a>
                <a
                  href={contactDirect.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactAwardsSection() {
  return (
    <section className="border-t border-white/5 bg-surface-dark py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <h2 className="text-center text-h3 font-bold text-white sm:text-h2">
            {contactAwards.title}
          </h2>
        </FadeIn>
        <StaggerGrid className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactAwards.items.map((award) => (
            <StaggerItem key={award} hoverable>
              <div className="flex h-full min-h-[5.5rem] items-center rounded-2xl border border-border-strong bg-surface-elevated px-4 py-5 text-center transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_0_24px_-8px_rgba(26,105,253,0.3)] sm:px-5">
                <p className="w-full text-sm font-semibold leading-snug text-white/85 sm:text-para">
                  {award}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

