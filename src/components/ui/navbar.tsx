"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Menu, Phone, Rocket, X } from "lucide-react";
import { SOCIAL_ICON_MAP } from "@/components/ui/social-icons";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  LOGO_URL,
  NAV_ABOUT,
  NAV_ABOUT_CTA,
  NAV_INDUSTRIES,
  NAV_RESOURCES,
  NAV_SERVICES,
  NAV_TECHNOLOGIES,
  NAV_TOP_BAR,
  SOCIAL_LINKS,
  type NavSection,
} from "@/data/site-content";

type NavItem = {
  label: string;
  href?: string;
  sections?: NavSection[];
  links?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [    
  { label: "About", href: "/about-our-company", links: NAV_ABOUT },
  { label: "Services", href: "/services", sections: NAV_SERVICES },
  { label: "Industries", sections: NAV_INDUSTRIES },
  { label: "Technologies", sections: NAV_TECHNOLOGIES },
  { label: "Resources", sections: NAV_RESOURCES },
];

function MegaMenuPanel({ sections }: { sections: NavSection[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {sections.map((section) => (
        <div key={section.title}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            {section.title}
          </p>
          <ul className="space-y-2.5">
            {section.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-base text-muted-foreground transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function AboutMenuPanel({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-border shadow-lg lg:col-span-1">
        <Image
          src={NAV_ABOUT_CTA.image}
          alt={NAV_ABOUT_CTA.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 320px"
        />
        <div className="absolute inset-0 bg-brand-navy-deep/90" />
        <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-end p-6">
          <h5 className="text-lg font-semibold leading-snug text-white">
            Ready to talk about
            <br />
            <span className="text-brand-light">business?</span>
          </h5>
          <div className="mt-3 h-px w-12 bg-white/40" />
          <p className="mt-4 text-sm text-white/85">
            Contact us now and get your first consultation! 100% free!
          </p>
          <Link
            href="/contact-us"
            className="mt-5 inline-flex w-fit rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-sky-soft"
          >
            Get free consultation now
          </Link>
        </div>
      </div>
      <ul className="space-y-2 sm:col-span-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-base text-muted-foreground transition hover:bg-elevated hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar: address, phone, hiring CTA, social */}
      <div
        className="text-xs font-medium text-white"
        style={{ background: "var(--topbar)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:gap-6 lg:px-8">
          <a
            href={NAV_TOP_BAR.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 items-start gap-2 text-white transition hover:text-white/90 lg:flex-1 lg:items-center"
          >
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 lg:mt-0" aria-hidden />
            <span className="leading-snug text-white">{NAV_TOP_BAR.address}</span>
          </a>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 lg:shrink-0">
            <a
              href={NAV_TOP_BAR.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-white transition hover:text-white/90"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {NAV_TOP_BAR.phone}
            </a>
            <Link
              href={NAV_TOP_BAR.careersHref}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-md bg-white/15 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-white/25"
            >
              {NAV_TOP_BAR.careersLabel}
            </Link>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
                  >
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "border-b transition-all duration-300",
          scrolled
            ? "border-border bg-nav/95 shadow-lg shadow-brand/8 backdrop-blur-2xl"
            : "border-transparent bg-nav/70 backdrop-blur-xl"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8" aria-label="Main">
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src={LOGO_URL}
              alt="ReapMind"
              width={160}
              height={50}
              className="h-auto w-auto max-h-18"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div
            className="hidden items-center gap-1 lg:flex"
            onMouseLeave={() => setActiveMenu(null)}
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "nav-link flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-base font-medium",
                      activeMenu === item.label
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    data-active={activeMenu === item.label ? "true" : undefined}
                  >
                    {item.label}
                    {(item.sections || item.links) && (
                      <ChevronDown className="h-4 w-4 opacity-60" />
                    )}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={cn(
                      "nav-link flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-base font-medium",
                      activeMenu === item.label
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    data-active={activeMenu === item.label ? "true" : undefined}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-60" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Link href="/contact-us" className="btn-primary px-5 py-2.5 text-sm">
              Contact Us
              <Rocket className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
          <button
            type="button"
            className="rounded-lg p-2 text-muted-foreground hover:bg-surface hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          </div>
        </nav>

        {/* Desktop mega menu dropdown */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="hidden border-t border-border/80 lg:block"
              onMouseEnter={() => setActiveMenu(activeMenu)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
                <div className="glass-panel rounded-2xl p-8 lg:p-10">
                {(() => {
                  const item = NAV_ITEMS.find((n) => n.label === activeMenu);
                  if (!item) return null;
                  if (item.links) return <AboutMenuPanel links={item.links} />;
                  if (item.sections) return <MegaMenuPanel sections={item.sections} />;
                  return null;
                })()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border glass-panel lg:hidden"
          >
            <div className="max-h-[80vh] overflow-y-auto px-6 py-6">
              <div className="mb-6 space-y-3 rounded-xl border border-border bg-surface p-4">
                <a
                  href={NAV_TOP_BAR.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {NAV_TOP_BAR.address}
                </a>
                <a
                  href={NAV_TOP_BAR.phoneHref}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  {NAV_TOP_BAR.phone}
                </a>
                <div className="flex flex-wrap gap-2 pt-1">
                  {SOCIAL_LINKS.map((social) => {
                    const Icon = SOCIAL_ICON_MAP[social.icon];
                    return (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-brand/40 hover:text-brand"
                      >
                        <Icon className="h-4 w-4" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="border-b border-border py-4 last:border-0">
                  {item.href ? (
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-semibold text-foreground"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <p className="text-base font-semibold text-foreground">{item.label}</p>
                  )}
                  <ul className="mt-3 space-y-2 pl-2">
                    {(item.links ?? item.sections?.flatMap((s) => s.links) ?? []).map(
                      (link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-base text-muted-foreground hover:text-brand"
                          >
                            {link.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="text-sm text-muted-foreground">Theme</span>
                <ThemeToggle />
              </div>
              <Link
                href="/contact-us"
                onClick={() => setMobileOpen(false)}
                className="btn-primary mt-4 w-full justify-center py-3"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
