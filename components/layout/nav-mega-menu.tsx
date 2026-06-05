"use client";

import Link from "next/link";
import type { NavGroup, NavItem } from "@/lib/site-config";
import { NavGroupIcon, NavIconBadge, NavLinkIcon } from "./nav-icons";

function isExternal(href: string) {
  return href.startsWith("http");
}

function gridClassForGroups(count: number) {
  if (count <= 1) return "grid-cols-1 sm:max-w-md";
  if (count === 2) return "grid-cols-2";
  if (count === 3) return "grid-cols-2 lg:grid-cols-3";
  if (count === 4) return "grid-cols-2 lg:grid-cols-4";
  return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
}

const triggerBase =
  "inline-flex min-h-10 items-center gap-1.5 rounded-md px-2.5 py-2 text-[16px] font-semibold leading-none tracking-tight transition-colors";

/** Nav label trigger — opens the shared panel in SiteHeader */
export function NavMenuTrigger({
  item,
  isOpen,
  onOpen,
}: {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
}) {
  const hasPanel = Boolean(item.groups?.length);
  const triggerClass = [
    triggerBase,
    isOpen ? "text-primary" : "text-foreground hover:text-primary",
  ].join(" ");

  const chevron = hasPanel ? (
    <ChevronIcon
      className={`size-3.5 shrink-0 opacity-50 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    />
  ) : null;

  if (!hasPanel) {
    return item.href ? (
      <Link href={item.href} className={triggerClass}>
        <span className="whitespace-nowrap">{item.label}</span>
      </Link>
    ) : (
      <span className={triggerClass}>
        <span className="whitespace-nowrap">{item.label}</span>
      </span>
    );
  }

  const inner = (
    <>
      <span className="whitespace-nowrap">{item.label}</span>
      {chevron}
    </>
  );

  return (
    <div className="relative" onMouseEnter={onOpen}>
      {item.href ? (
        <Link href={item.href} className={triggerClass} aria-expanded={isOpen}>
          {inner}
        </Link>
      ) : (
        <button
          type="button"
          className={triggerClass}
          aria-expanded={isOpen}
          aria-haspopup="true"
          onMouseEnter={onOpen}
        >
          {inner}
        </button>
      )}
    </div>
  );
}

function NavMegaGroupColumn({ group }: { group: NavGroup }) {
  const hasTitle = Boolean(group.title?.trim());

  return (
    <div className="flex min-w-0 flex-col">
      <div
        className={
          hasTitle
            ? "mb-4 flex min-h-10 items-end border-b border-border pb-3"
            : "sr-only"
        }
      >
        {hasTitle ? (
          <div className="flex items-center gap-2">
            <NavIconBadge>
              <NavGroupIcon title={group.title} />
            </NavIconBadge>
            <p className="text-xs font-bold uppercase leading-tight tracking-[0.06em] text-muted">
              {group.title}
            </p>
          </div>
        ) : (
          <span>{group.title ?? "Links"}</span>
        )}
      </div>

      <ul className="m-0 flex list-none flex-col p-0">
        {group.links.map((link) => (
          <li key={link.href} className="m-0 p-0">
            <Link
              href={link.href}
              className="flex min-h-9 items-center py-1.5 text-sm font-medium leading-5 tracking-normal text-secondary transition-colors hover:text-primary"
              {...(isExternal(link.href)
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="block min-w-0">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Full-width dropdown aligned to site container */
export function NavMegaMenuPanel({ item }: { item: NavItem }) {
  const groups = item.groups ?? [];
  if (!groups.length) return null;

  const isSimpleList = groups.length === 1 && !groups[0].title;

  return (
    <div
      className="absolute inset-x-0 top-full z-40 border-t border-border bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12)]"
      role="region"
      aria-label={`${item.label} menu`}
    >
      <div
        data-nav-mega-panel
        data-lenis-prevent
        className="container-app scrollbar-hide max-h-[min(70vh,480px)] touch-pan-y overflow-y-auto overscroll-y-contain py-7 lg:py-8"
      >
        {isSimpleList ? (
          <ul className="m-0 grid list-none gap-x-10 gap-y-0 p-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {groups[0].links.map((link) => (
              <li key={link.href} className="m-0 p-0">
                <Link
                  href={link.href}
                  className="group/link flex min-h-10 items-center gap-2.5 py-2 text-sm font-medium leading-5 text-secondary transition-colors hover:text-primary"
                  {...(isExternal(link.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="flex size-5 shrink-0 items-center justify-center text-primary/35 transition-colors group-hover/link:text-primary">
                    <NavLinkIcon label={link.label} className="size-3" />
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div
            className={`grid items-start gap-x-10 gap-y-10 lg:gap-x-12 ${gridClassForGroups(groups.length)}`}
          >
            {groups.map((group) => (
              <NavMegaGroupColumn
                key={group.title ?? group.links[0]?.href}
                group={group}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
