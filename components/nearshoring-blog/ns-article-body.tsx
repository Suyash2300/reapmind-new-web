"use client";

import { useEffect, useState } from "react";
import type { BlogSection } from "@/lib/nearshoring-offshoring-blog-config";

type NsSectionNavProps = {
  items: readonly { id: string; label: string }[];
};

export function NsSectionNav({ items }: NsSectionNavProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Article sections" className="hidden xl:block">
      <ul className="sticky top-28 space-y-1 border-l border-white/[0.08] pl-4">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`block py-1.5 text-sm leading-snug transition-colors ${
                  isActive ? "font-medium text-white" : "text-white/35 hover:text-white/60"
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

function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="text-[1.0625rem] leading-[1.75] text-white/60">
          {p}
        </p>
      ))}
    </div>
  );
}

function StatRow({ stats }: { stats: NonNullable<BlogSection["stats"]> }) {
  return (
    <div className="my-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-black px-5 py-6">
          <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{stat.value}</p>
          <p className="mt-2 text-xs leading-relaxed text-white/40">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function ComparisonMatrix({ subsections }: { subsections: NonNullable<BlogSection["subsections"]> }) {
  return (
    <div className="my-10 space-y-8">
      {subsections.map((sub) => (
        <div key={sub.title}>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">{sub.title}</h3>
          <ul className="mt-4 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {sub.items.map((item) => {
              const [lead, ...rest] = item.split(":");
              const body = rest.join(":").trim();
              return (
                <li key={item.slice(0, 40)} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <span className="text-sm font-medium text-white/85">{lead}</span>
                  <span className="text-sm leading-relaxed text-white/50">{body || item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="my-8 space-y-6">
      {items.map((item, i) => (
        <li key={item.slice(0, 48)} className="flex gap-5">
          <span className="w-6 shrink-0 pt-0.5 text-sm font-medium tabular-nums text-primary/80">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[1.0625rem] leading-[1.7] text-white/55">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="my-8 space-y-3">
      {items.map((item) => (
        <li key={item.slice(0, 48)} className="flex gap-3 text-[1.0625rem] leading-[1.7] text-white/55">
          <span className="mt-2.5 block size-1 shrink-0 rounded-full bg-white/25" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function CompanyList({ highlights }: { highlights: NonNullable<BlogSection["highlights"]> }) {
  return (
    <div className="my-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
      {highlights.map((item) => (
        <article key={item.company} className="py-6 first:pt-0 last:pb-0">
          <h3 className="text-base font-semibold text-white">{item.company}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/50">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

function IndiaFeature({ section }: { section: BlogSection }) {
  const stat = section.stats?.[0];

  return (
    <div className="my-10 flex flex-col gap-8 border-y border-white/[0.06] py-10 sm:flex-row sm:items-center sm:gap-12">
      {stat ? (
        <div className="shrink-0">
          <p className="text-[clamp(3.5rem,10vw,5.5rem)] font-bold leading-none tracking-[-0.04em] text-white">
            {stat.value}
          </p>
          <p className="mt-2 max-w-[10rem] text-xs uppercase tracking-[0.14em] text-white/40">{stat.label}</p>
        </div>
      ) : null}
      <div className="min-w-0 flex-1 space-y-5">
        {section.paragraphs?.map((p) => (
          <p key={p.slice(0, 48)} className="text-[1.0625rem] leading-[1.75] text-white/60">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function SectionBlock({ section, index }: { section: BlogSection; index: number }) {
  const isIndia = section.id === "why-india";
  const isIntro = section.id === "introduction";

  return (
    <section id={section.id} className="scroll-mt-24 py-14 first:pt-0 lg:py-16">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2 className="mt-3 max-w-2xl text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
        {section.title.replace(/:$/, "")}
      </h2>

      {isIntro && section.paragraphs?.[0] ? (
        <blockquote className="mt-8 border-l-2 border-primary/60 pl-6 text-xl font-medium leading-snug text-white/80 sm:text-2xl">
          {section.paragraphs[0]}
        </blockquote>
      ) : null}

      {isIndia ? (
        <IndiaFeature section={section} />
      ) : (
        <>
          {section.paragraphs && !isIntro ? <Prose paragraphs={section.paragraphs} /> : null}
          {isIntro && section.paragraphs && section.paragraphs.length > 1 ? (
            <Prose paragraphs={section.paragraphs.slice(1)} />
          ) : null}

          {section.stats && !isIndia ? <StatRow stats={section.stats} /> : null}
          {section.bullets ? <BulletList items={section.bullets} /> : null}
          {section.subsections ? <ComparisonMatrix subsections={section.subsections} /> : null}
          {section.numberedItems ? <NumberedList items={section.numberedItems} /> : null}
          {section.highlights ? <CompanyList highlights={section.highlights} /> : null}
        </>
      )}

      {isIndia && section.stats && section.stats.length > 1 ? (
        <div className="mt-6 inline-flex items-baseline gap-3 border border-white/[0.08] px-4 py-3">
          <span className="text-2xl font-bold text-white">{section.stats[1].value}</span>
          <span className="text-sm text-white/45">{section.stats[1].label}</span>
        </div>
      ) : null}
    </section>
  );
}

type NsArticleBodyProps = {
  sections: readonly BlogSection[];
  navItems: readonly { id: string; label: string }[];
};

export function NsArticleBody({ sections, navItems }: NsArticleBodyProps) {
  return (
    <div className="container-app py-12 md:py-16 lg:py-20">
      <details className="mb-8 border-b border-white/[0.08] pb-4 xl:hidden">
        <summary className="cursor-pointer list-none text-sm font-medium text-white/70 [&::-webkit-details-marker]:hidden">
          Jump to section
        </summary>
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="text-sm text-white/45 hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </details>

      <div className="grid gap-12 xl:grid-cols-[11rem_minmax(0,1fr)] xl:gap-20">
        <NsSectionNav items={navItems} />

        <article className="min-w-0 max-w-3xl">
          {sections.map((section, index) => (
            <SectionBlock key={section.id} section={section} index={index} />
          ))}
        </article>
      </div>
    </div>
  );
}
