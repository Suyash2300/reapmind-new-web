import type { BlogSection } from "@/lib/nearshoring-offshoring-blog-config";

type BlogTableOfContentsProps = {
  items: readonly { id: string; label: string }[];
};

export function BlogTableOfContents({ items }: BlogTableOfContentsProps) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-white/10 bg-surface-elevated/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md lg:sticky lg:top-24"
    >
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">On this page</p>
      <ol className="mt-4 space-y-1">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex gap-3 rounded-xl px-2 py-2 text-sm leading-snug text-white/55 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              <span className="mt-0.5 shrink-0 text-[0.65rem] font-bold tabular-nums text-primary/70 group-hover:text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function StatGrid({ stats }: { stats: NonNullable<BlogSection["stats"]> }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] px-4 py-4 text-center sm:px-5 sm:py-5"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
            aria-hidden
          />
          <p className="text-h4 font-bold text-primary sm:text-h3">{stat.value}</p>
          <p className="mt-1.5 text-xs leading-snug text-white/55 sm:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

function SubsectionGrid({ subsections }: { subsections: NonNullable<BlogSection["subsections"]> }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {subsections.map((sub) => {
        const isPros = sub.title.toLowerCase().includes("pros");
        const isCons = sub.title.toLowerCase().includes("cons");
        const accent = isPros
          ? "border-emerald-400/25 bg-emerald-400/[0.04]"
          : isCons
            ? "border-rose-400/25 bg-rose-400/[0.04]"
            : "border-white/10 bg-white/[0.02]";
        const dot = isPros ? "bg-emerald-400" : isCons ? "bg-rose-400" : "bg-primary";

        return (
          <div key={sub.title} className={`rounded-2xl border p-5 ${accent}`}>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white sm:text-base">
              <span className={`size-2 rounded-full ${dot}`} aria-hidden />
              {sub.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {sub.items.map((item) => (
                <li key={item.slice(0, 40)} className="flex gap-3 text-sm leading-relaxed text-white/70">
                  <span className={`mt-2 size-1.5 shrink-0 rounded-full ${dot}`} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function HighlightGrid({ highlights }: { highlights: NonNullable<BlogSection["highlights"]> }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {highlights.map((item) => (
        <article
          key={item.company}
          className="rounded-2xl border border-white/10 bg-black/25 p-5 transition-colors hover:border-primary/25"
        >
          <div className="flex items-start gap-3">
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xs font-bold text-primary"
              aria-hidden
            >
              {item.company.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <h3 className="text-sm font-bold text-white sm:text-base">{item.company}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.text}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

type BlogArticleContentProps = {
  sections: readonly BlogSection[];
};

export function BlogArticleContent({ sections }: BlogArticleContentProps) {
  return (
    <article className="min-w-0">
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 ${index > 0 ? "mt-12 border-t border-white/8 pt-12 sm:mt-14 sm:pt-14" : ""}`}
        >
          <div className="flex items-start gap-4">
            <span className="hidden shrink-0 text-sm font-bold tabular-nums text-primary/60 sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0 flex-1">
              <h2 className="text-h4 font-bold text-white sm:text-h3">{section.title}</h2>

              {section.paragraphs?.map((paragraph, pIndex) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className={`leading-relaxed text-white/65 ${pIndex === 0 ? "mt-4 text-para" : "mt-4 text-para"}`}
                >
                  {paragraph}
                </p>
              ))}

              {section.stats ? <StatGrid stats={section.stats} /> : null}

              {section.bullets ? (
                <ul className="mt-6 space-y-3 rounded-2xl border border-white/8 bg-black/20 p-4 sm:p-5">
                  {section.bullets.map((item) => (
                    <li key={item.slice(0, 48)} className="flex gap-3 text-para text-white/70">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.subsections ? <SubsectionGrid subsections={section.subsections} /> : null}

              {section.numberedItems ? (
                <ol className="mt-6 space-y-3">
                  {section.numberedItems.map((item, i) => (
                    <li
                      key={item.slice(0, 48)}
                      className="flex gap-4 rounded-xl border border-white/8 bg-black/20 p-4 text-para text-white/70"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ol>
              ) : null}

              {section.highlights ? <HighlightGrid highlights={section.highlights} /> : null}
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
