"use client";

import { useEffect, useState } from "react";

export function DsbSectionNav({ items }: { items: readonly { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const top = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top?.target.id) setActive(top.target.id);
      },
      { rootMargin: "-18% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Article sections" className="hidden xl:block">
      <p className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan-400">Guide</p>
      <ul className="sticky top-28 space-y-1 border-l border-cyan-500/25 pl-4">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-1.5 text-sm ${active === item.id ? "font-semibold text-cyan-300" : "text-white/35 hover:text-white/60"}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
