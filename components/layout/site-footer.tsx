"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FooterCitySkyline } from "@/components/layout/footer-city-skyline";
import { HydrationButton } from "@/components/ui/hydration-button";
import {
  FooterCountryFlag,
  FooterLocationMarker,
} from "@/components/layout/footer-location-marker";
import {
  footerBlogs,
  footerBottomLinks,
  footerBrand,
  footerLinkColumns,
  footerLocationPanels,
  footerLocationTabs,
  footerPopularNow,
  footerPortfolio,
  footerSocialLinks,
  footerStats,
  type FooterLocationTabId,
} from "@/lib/footer-config";
import { site } from "@/lib/site-config";

function FooterHeading({
  children,
  href,
  size = "lg",
  align = "left",
}: {
  children: React.ReactNode;
  href?: string;
  size?: "lg" | "md";
  align?: "left" | "right";
}) {
  const title = href ? (
    <Link href={href} className="transition-colors hover:text-primary">
      {children}
    </Link>
  ) : (
    children
  );

  const headingClass =
    size === "lg"
      ? "text-h4 font-bold text-white"
      : "text-subtitle font-bold text-white";

  return (
    <div className={align === "right" ? "text-right" : ""}>
      <h2 className={headingClass}>{title}</h2>
      <div
        className={`mt-3 h-px w-full max-w-[72px] bg-white/35 ${
          align === "right" ? "ml-auto" : ""
        }`}
      />
    </div>
  );
}

function FooterGetInTouch({ align = "left" }: { align?: "left" | "right" }) {
  const linkRow =
    "inline-flex items-center gap-3 text-para text-white/80 transition-colors hover:text-white";

  return (
    <div className={align === "right" ? "text-right" : ""}>
      <FooterHeading align={align}>Get In Touch</FooterHeading>
      <ul
        className={`mt-4 space-y-3 ${
          align === "right" ? "flex flex-col items-end" : ""
        }`}
      >
        <li>
          <a href={site.phoneHref} className={linkRow}>
            <span className="text-white/50" aria-hidden>
              ☎
            </span>
            {site.phone}
          </a>
        </li>
        <li>
          <a href={`mailto:${site.email}`} className={linkRow}>
            <span className="text-white/50" aria-hidden>
              ✉
            </span>
            {site.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

function FooterLinkList({ links }: { links: readonly { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="text-para text-white/65 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function FooterSocialIcon({
  icon,
}: {
  icon: (typeof footerSocialLinks)[number]["icon"];
}) {
  const paths: Record<(typeof footerSocialLinks)[number]["icon"], React.ReactNode> = {
    facebook: (
      <path d="M9 8h3V6.2C12 4.98 12.1 4 14.2 4H16v3h-1.4c-1.1 0-1.2.5-1.2 1.2V8H16l-.5 3h-2.5v9H9V11H7V8h2z" />
    ),
    twitter: (
      <path d="M19.6 7.5c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.4.9A3.8 3.8 0 0 0 12 9.4c0 .3 0 .6.1.9A10.8 10.8 0 0 1 5 6.8a3.8 3.8 0 0 0 1.2 5.1 3.7 3.7 0 0 1-1.7-.5v.1c0 1.8 1.3 3.4 3 3.7-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.8 2.6 3.4 2.6A7.6 7.6 0 0 1 4 17.1 10.7 10.7 0 0 0 9.9 19c6.9 0 10.7-5.7 10.7-10.7v-.5c.7-.6 1.4-1.2 1.9-2z" />
    ),
    linkedin: (
      <path d="M6.5 8H3.6v11h2.9V8zM5 6.5c.9 0 1.7-.8 1.7-1.7S5.9 3 5 3 3.3 3.8 3.3 4.7 4.1 6.5 5 6.5zM20 18.2v-5.6c0-3-1.6-4.4-3.7-4.4-1.7 0-2.5.9-2.9 1.6h-.1V8h-2.8c0 .7 0 11 0 11h2.8v-5.5c0-.5 0-1 .2-1.3.4-.9 1.2-1.8 2.7-1.8 1.9 0 2.7 1.5 2.7 3.6v5h2.8z" />
    ),
    dribbble: (
      <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm6.9 5.2a7.5 7.5 0 0 0-4.5-1.5c.4.7.8 1.6 1 2.5 1.5-.4 2.8-1 3.5-1zm-6.9-2.2c1.6 0 3 .5 4.1 1.4-.9-.2-2.1-.4-3.3-.3-.5 1.2-.9 2.5-1.2 3.8A11 11 0 0 0 6 8.5 7.4 7.4 0 0 1 12 6zm-4.7 2.5c.4 1.5.9 3 1.6 4.4-2 .6-3.7 1.4-4.9 2.2A7.5 7.5 0 0 1 7.3 8.5zm-.8 8.4a9.8 9.8 0 0 1 1.2-2.3c1.3-.9 3.1-1.8 5.4-2.5.3 1 .7 1.9 1.1 2.7-2.2.8-4 2-5.1 3.5a7.4 7.4 0 0 1-2.6-1.4zm8.5 2.1c-.5-1-.9-2-1.2-3 2.2-.3 4.2-.2 5.8.2-.6 1.5-1.7 2.7-3.2 3.5a7.5 7.5 0 0 0-1.4-0.7z" />
    ),
    instagram: (
      <path d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17.2 6.8a1.1 1.1 0 1 0-1.1-1.1 1.1 1.1 0 0 0 1.1 1.1zM12 4.4c2.4 0 2.7 0 3.6.1.9 0 1.4.2 1.7.3a3 3 0 0 1 1.1.7 3 3 0 0 1 .7 1.1c.1.3.3.8.3 1.7.1.9.1 1.2.1 3.6s0 2.7-.1 3.6c0 .9-.2 1.4-.3 1.7a3 3 0 0 1-.7 1.1 3 3 0 0 1-1.1.7c-.3.1-.8.3-1.7.3-.9.1-1.2.1-3.6.1s-2.7 0-3.6-.1c-.9 0-1.4-.2-1.7-.3a3 3 0 0 1-1.1-.7 3 3 0 0 1-.7-1.1c-.1-.3-.3-.8-.3-1.7-.1-.9-.1-1.2-.1-3.6s0-2.7.1-3.6c0-.9.2-1.4.3-1.7a3 3 0 0 1 .7-1.1 3 3 0 0 1 1.1-.7c.3-.1.8-.3 1.7-.3.9-.1 1.2-.1 3.6-.1zM12 3c-2.4 0-2.7 0-3.6.1C7.5 3.1 6.8 3.3 6.2 3.6a4.5 4.5 0 0 0-1.6 1.1A4.5 4.5 0 0 0 3.5 6.2C3.2 6.8 3 7.5 3.1 8.4 3 9.3 3 9.6 3 12s0 2.7.1 3.6c0 .7.2 1.4.4 2a4.5 4.5 0 0 0 1.1 1.6 4.5 4.5 0 0 0 1.6 1.1c.6.2 1.3.4 2 .4.9.1 1.2.1 3.6.1s2.7 0 3.6-.1c.7 0 1.4-.2 2-.4a4.5 4.5 0 0 0 1.6-1.1 4.5 4.5 0 0 0 1.1-1.6c.2-.6.4-1.3.4-2 .1-.9.1-1.2.1-3.6s0-2.7-.1-3.6c0-.7-.2-1.4-.4-2a4.5 4.5 0 0 0-1.1-1.6A4.5 4.5 0 0 0 17.8 3.6c-.6-.2-1.3-.4-2-.4C14.7 3 14.4 3 12 3z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
      {paths[icon]}
    </svg>
  );
}

function FooterBrandBlock() {
  return (
    <div className="flex flex-col gap-6">
      <Link href="/" className="relative block h-12 w-[148px] sm:h-14 sm:w-[168px]">
        <Image
          src={footerBrand.logo}
          alt={site.name}
          fill
          className="object-contain object-left"
          sizes="168px"
        />
      </Link>
      <ul className="flex flex-wrap items-center gap-2.5">
        {footerSocialLinks.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-white/50 hover:bg-white/10 hover:text-white"
            >
              <FooterSocialIcon icon={social.icon} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterGptwBadge({ className }: { className?: string }) {
  return (
    <a
      href={footerBrand.gptwHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex shrink-0 ${className ?? ""}`}
      aria-label="Great Place To Work Certified"
    >
      <Image
        src={footerBrand.gptwBadge}
        alt="Great Place To Work"
        width={100}
        height={200}
        className="h-auto w-[88px] object-contain sm:w-[100px]"
      />
    </a>
  );
}

function FooterLocationSection() {
  const [activeTab, setActiveTab] = useState<FooterLocationTabId>("all");
  const panel = footerLocationPanels[activeTab];

  return (
    <div className="mt-12 border-t border-white/10 pt-10 lg:mt-14 lg:pt-12">
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-white/10 pb-4">
        {footerLocationTabs.map((tab) => (
          <HydrationButton
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 pb-2 text-sm font-semibold transition-colors ${
              activeTab === tab.id
                ? "border-white text-white"
                : "border-transparent text-white/55 hover:text-white"
            }`}
          >
            {tab.label}
          </HydrationButton>
        ))}
      </div>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-stretch">
        <div className="grid gap-8 sm:grid-cols-2">
          {panel.map((item) => (
            <div key={item.title} className="flex gap-4">
              <FooterLocationMarker item={item} />
              <div>
                <h3 className="text-subtitle font-bold text-white">{item.title}</h3>
                {item.lines.map((line) =>
                  item.href ? (
                    <a
                      key={line}
                      href={item.href}
                      className="mt-1 block text-para leading-relaxed text-white/65 transition-colors hover:text-white"
                    >
                      {line}
                    </a>
                  ) : (
                    <p
                      key={line}
                      className="mt-1 text-para leading-relaxed text-white/65"
                    >
                      {line}
                    </p>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-end gap-8 lg:justify-between">
        {activeTab === "all" ? (
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end lg:flex-col lg:items-end">
            <div className="text-left lg:text-right">
              <p className="text-para text-white/75">We Built</p>
              <p className="mt-1 text-h2 font-bold leading-none text-white">
                {footerStats.built.value}
              </p>
              <p className="text-para text-white/70">{footerStats.built.label}</p>
              <p className="mt-5 text-h2 font-bold leading-none text-white">
                {footerStats.countries.value}
              </p>
              <p className="text-para text-white/70">
                {footerStats.countries.label}
              </p>
            </div>
            <div className="relative size-36 sm:size-40 lg:size-44">
              <Image
                src={footerStats.earthImage}
                alt=""
                fill
                className="object-contain opacity-90"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
          </div>
        ) : null}

        <div className="lg:mt-auto">
          <div className="mb-3 flex justify-end gap-2">
            {activeTab === "all" ? (
              <>
                <FooterCountryFlag code="IN" />
                <FooterCountryFlag code="US" />
              </>
            ) : (
              <FooterCountryFlag code={activeTab === "usa" ? "US" : "IN"} />
            )}
          </div>
          <FooterGetInTouch align="right" />
        </div>
        </div>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container-app py-12 md:py-16 lg:py-20">
        {/* Mobile / tablet — stacked like live site */}
        <div className="space-y-10 lg:hidden">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <FooterBrandBlock />
            <FooterGptwBadge />
          </div>

          <FooterCitySkyline className="h-auto w-full max-w-[220px] opacity-90" />

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <FooterHeading href={footerPortfolio.href} size="md">
                {footerPortfolio.title}
              </FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={footerPortfolio.links} />
              </div>
            </div>
            <div>
              <FooterHeading size="md">{footerPopularNow.title}</FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={footerPopularNow.links} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <FooterHeading href={footerBlogs.href} size="md">
                {footerBlogs.title}
              </FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={footerBlogs.links} />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop — 4-column rows matching reapmind.com */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-8 xl:gap-10">
            <FooterBrandBlock />
            <div className="col-span-2" aria-hidden />
            <div className="flex justify-end pt-2">
              <FooterGptwBadge />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-8 xl:gap-10">
            <FooterCitySkyline className="h-auto w-full max-w-[200px] opacity-90" />
            <div>
              <FooterHeading href={footerPortfolio.href} size="md">
                {footerPortfolio.title}
              </FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={footerPortfolio.links} />
              </div>
            </div>
            <div>
              <FooterHeading size="md">{footerPopularNow.title}</FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={footerPopularNow.links} />
              </div>
            </div>
            <div>
              <FooterHeading href={footerBlogs.href} size="md">
                {footerBlogs.title}
              </FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={footerBlogs.links} />
              </div>
            </div>
          </div>
        </div>

        <FooterLocationSection />

        <div className="mt-12 grid gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5 lg:gap-8">
          {footerLinkColumns.map((col) => (
            <div key={col.title}>
              <FooterHeading size="md">{col.title}</FooterHeading>
              <div className="mt-4">
                <FooterLinkList links={col.links} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center lg:mt-14 md:flex-row md:text-left">
          <p className="text-para text-white/50">{site.copyright}</p>
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 md:justify-end"
            aria-label="Footer"
          >
            {footerBottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-para text-white/65 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
