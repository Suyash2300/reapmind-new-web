"use client";

import { useEffect, useState } from "react";

type NavItem = { id: string; label: string };

export function IsbSectionNav({ items }: { items: readonly NavItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -58% 0px", threshold: [0, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Article sections" className="hidden xl:block">
      <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-emerald-400/80">On this page</p>
      <ul className="sticky top-28 space-y-1 border-l border-emerald-500/20 pl-4">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1.5 text-sm leading-snug transition-colors ${
                  isActive ? "font-semibold text-emerald-300" : "text-white/35 hover:text-white/65"
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
