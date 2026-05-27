import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { IconBox } from "@/components/ui/icon-box";
import { SOCIAL_ICON_MAP } from "@/components/ui/social-icons";
import {
  FOOTER_COLUMNS,
  FOOTER_EXPLORE_TEXT,
  FOOTER_OFFICES,
  LOGO_URL,
  SOCIAL_LINKS,
} from "@/data/site-content";

function FooterLinkColumn({
  title,
  href,
  links,
}: {
  title: string;
  href?: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      {href ? (
        <Link
          href={href}
          className="mb-4 block text-sm font-semibold text-heading transition hover:text-accent"
        >
          {title}
        </Link>
      ) : (
        <h3 className="mb-4 text-sm font-semibold text-heading">{title}</h3>
      )}
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-muted-foreground transition hover:translate-x-0.5 hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-footer">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src={LOGO_URL}
                alt="ReapMind"
                width={180}
                height={56}
                className="h-11 w-auto"
              />
            </Link>
            <h4 className="mt-8 text-sm font-semibold text-heading">Explore More</h4>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {FOOTER_EXPLORE_TEXT}
            </p>
            <div className="mt-6 flex gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.icon];
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted-foreground transition hover:border-brand/40 hover:text-accent hover:shadow-md"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-heading">Get In Touch</h4>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-accent" />
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="tel:+919637828283"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  <IconBox icon={Phone} size="sm" />
                  +91-9637828283
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@reapmind.com"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
                >
                  <IconBox icon={Mail} size="sm" />
                  info@reapmind.com
                </a>
              </li>
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-4">
            {FOOTER_OFFICES.map((office) => (
              <div
                key={office.city}
                className="section-card rounded-2xl p-5 transition hover:border-brand/35"
              >
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  <h5 className="text-sm font-semibold text-heading">{office.city}</h5>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{office.address}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t border-border pt-16 md:grid-cols-3 lg:grid-cols-5">
          <FooterLinkColumn
            title={FOOTER_COLUMNS.about.title}
            links={FOOTER_COLUMNS.about.links}
          />
          <FooterLinkColumn
            title={FOOTER_COLUMNS.services.title}
            links={FOOTER_COLUMNS.services.links}
          />
          <FooterLinkColumn
            title={FOOTER_COLUMNS.industries.title}
            links={FOOTER_COLUMNS.industries.links}
          />
          <FooterLinkColumn
            title={FOOTER_COLUMNS.hire.title}
            href={FOOTER_COLUMNS.hire.href}
            links={FOOTER_COLUMNS.hire.links}
          />
          <FooterLinkColumn
            title={FOOTER_COLUMNS.resources.title}
            links={FOOTER_COLUMNS.resources.links}
          />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-surface/60 px-6 py-5 backdrop-blur-sm md:flex-row">
          <p className="text-sm text-muted-foreground">
            ©2023. Reapmind Innovations Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/company"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              About Us
            </Link>
            <Link
              href="/portfolio-reapmind"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              Portfolio
            </Link>
            <Link
              href="/contact-us"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
