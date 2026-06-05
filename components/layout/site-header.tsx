"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useNavMenuScrollLock } from "@/components/providers/smooth-scroll-provider";
import { mainNav, site } from "@/lib/site-config";
import { NavMegaMenuPanel, NavMenuTrigger } from "./nav-mega-menu";
import { NavGroupIcon, NavIconBadge } from "./nav-icons";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openNav, setOpenNav] = useState<string | null>(null);
  const openItem = mainNav.find((item) => item.label === openNav);
  const setNavMenuOpen = useNavMenuScrollLock();

  useEffect(() => {
    setNavMenuOpen?.(Boolean(openNav));
    return () => setNavMenuOpen?.(false);
  }, [openNav, setNavMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main nav */}
      <div
        className="relative border-b border-border bg-white/95 backdrop-blur-md"
        onMouseLeave={() => setOpenNav(null)}
      >
        <div className="container-app flex h-[80px] items-center justify-between gap-4">
          <Link href="/" className="relative block h-12 w-[172px] shrink-0 sm:h-14 sm:w-[200px]">
            <Image
              src={site.logo}
              alt={site.name}
              fill
              className="object-contain object-left"
              priority
              sizes="200px"
            />
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-6 xl:gap-8 lg:flex"
            aria-label="Main navigation"
          >
            {mainNav.map((item) => (
              <NavMenuTrigger
                key={item.label}
                item={item}
                isOpen={openNav === item.label}
                onOpen={() => setOpenNav(item.label)}
              />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={site.contactUrl}
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:inline-flex"
            >
              {site.ctaLabel}
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileOpen((o) => !o)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileOpen ? (
                <span className="text-xl leading-none">×</span>
              ) : (
                <span className="flex flex-col gap-1">
                  <span className="block h-0.5 w-5 bg-foreground" />
                  <span className="block h-0.5 w-5 bg-foreground" />
                  <span className="block h-0.5 w-5 bg-foreground" />
                </span>
              )}
            </button>
          </div>
        </div>

        {openItem?.groups?.length ? (
          <NavMegaMenuPanel item={openItem} />
        ) : null}
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="scrollbar-hide max-h-[80vh] touch-pan-y overflow-y-auto overscroll-y-contain border-b border-border bg-white lg:hidden"
          data-lenis-prevent
          data-nav-mega-panel
        >
          <div className="container-app space-y-8 py-6">
            {mainNav.map((item) => (
              <div key={item.label}>
                <p className="mb-4 border-b border-border pb-2 text-sm font-bold tracking-tight text-foreground">
                  {item.label}
                </p>
                {item.groups?.map((group) => (
                  <div key={group.title ?? "links"} className="mb-5 last:mb-0">
                    {group.title ? (
                      <div className="mb-2 flex items-center gap-2">
                        <NavIconBadge className="size-6">
                          <NavGroupIcon title={group.title} className="size-3.5" />
                        </NavIconBadge>
                        <p className="text-xs font-bold uppercase tracking-[0.06em] text-muted">
                          {group.title}
                        </p>
                      </div>
                    ) : null}
                    <ul className="m-0 flex list-none flex-col gap-0 p-0">
                      {group.links.map((link) => (
                        <li key={link.href} className="m-0 p-0">
                          <Link
                            href={link.href}
                            className="flex min-h-10 items-center py-1.5 text-sm font-medium leading-5 text-secondary hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                            {...(link.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <Link
              href={site.contactUrl}
              className="inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {site.ctaLabel}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
