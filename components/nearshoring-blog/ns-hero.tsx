import Link from "next/link";

type NsHeroProps = {
  category: string;
  author: string;
  date: string;
  heading: string;
  excerpt: string;
};

function DeliveryModelVisual() {
  const nodes = [
    { label: "Onshore", sub: "Highest cost", x: 8 },
    { label: "Nearshore", sub: "Balanced proximity", x: 50 },
    { label: "Offshore", sub: "Maximum efficiency", x: 92 },
  ] as const;

  return (
    <div className="relative w-full min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]" aria-hidden>
      <div className="absolute inset-x-[4%] inset-y-[18%] rounded-[2rem] border border-white/[0.06] bg-[radial-gradient(circle_at_50%_0%,rgba(26,105,253,0.1),transparent_60%)]" />

      <svg viewBox="0 0 400 120" className="absolute inset-x-0 top-[28%] h-[45%] w-full" preserveAspectRatio="none" fill="none">
        <path
          d="M32 72 Q200 24 368 72"
          stroke="url(#ns-arc)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <defs>
          <linearGradient id="ns-arc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="50%" stopColor="rgba(26,105,253,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute top-[52%] -translate-x-1/2"
          style={{ left: `${node.x}%` }}
        >
          <span className="mx-auto block size-2.5 rounded-full bg-primary shadow-[0_0_16px_rgba(26,105,253,0.85)]" />
          <p className="mt-2.5 text-center text-xs font-semibold text-white sm:text-sm">{node.label}</p>
          <p className="mt-0.5 text-center text-[0.65rem] leading-snug text-white/40 sm:text-xs">{node.sub}</p>
        </div>
      ))}

      <p className="absolute bottom-2 left-0 right-0 text-center text-[0.65rem] uppercase tracking-[0.22em] text-white/28 sm:text-xs">
        Global delivery spectrum
      </p>
    </div>
  );
}

export function NsHero({ category, author, date, heading, excerpt }: NsHeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/[0.06] bg-black">
      <div
        className="pointer-events-none absolute -right-24 top-0 size-[360px] rounded-full bg-primary/[0.06] blur-[90px]"
        aria-hidden
      />

      <div className="container-app relative py-10 md:py-12 lg:py-14">
        <Link
          href="/blogs"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-white/45 transition-colors hover:text-white"
        >
          <span aria-hidden>←</span>
          Insights
        </Link>

        <div className="mt-8 grid items-center gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,42%)] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.18em] text-white/40">
              <span className="text-primary">{category}</span>
              <span aria-hidden>·</span>
              <time dateTime="2023-11-24">{date}</time>
              <span aria-hidden>·</span>
              <span>12 min read</span>
            </div>

            <h1 className="mt-5 text-balance text-[clamp(1.75rem,3.8vw,2.875rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
              {heading}
            </h1>

            <p className="mt-5 text-pretty text-base leading-relaxed text-white/50 sm:text-lg">{excerpt}</p>

            <p className="mt-6 text-sm text-white/40">
              By <span className="font-medium text-white/70">{author}</span>
            </p>
          </div>

          <div className="w-full lg:pl-2">
            <DeliveryModelVisual />
          </div>
        </div>
      </div>
    </header>
  );
}
