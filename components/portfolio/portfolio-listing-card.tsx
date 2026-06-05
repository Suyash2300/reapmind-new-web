import Image from "next/image";
import Link from "next/link";
import type { PortfolioListingCard } from "@/lib/portfolio-listing";
import { portfolioFilters, type PortfolioCategory } from "@/lib/portfolio-listing";

const categoryLabels = Object.fromEntries(
  portfolioFilters
    .filter((f) => f.id !== "all")
    .map((f) => [f.id, f.label]),
) as Record<PortfolioCategory, string>;

type PortfolioListingCardProps = {
  item: PortfolioListingCard;
  variant?: "default" | "featured";
};

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="size-4"
      aria-hidden
    >
      <path
        d="M4.5 11.5L11.5 4.5M11.5 4.5H6M11.5 4.5V10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PortfolioListingCardTile({
  item,
  variant = "default",
}: PortfolioListingCardProps) {
  const featured = variant === "featured";

  return (
    <Link
      href={item.href}
      className={`group relative flex h-full overflow-hidden rounded-[1.75rem] border border-border-strong bg-surface-elevated transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_24px_60px_-20px_rgba(26,105,253,0.4)] ${
        featured ? "flex-col lg:flex-row lg:items-stretch" : "flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-black/40 ${
          featured
            ? "aspect-[16/10] lg:aspect-auto lg:min-h-[320px] lg:w-[58%] lg:shrink-0"
            : "aspect-[16/10]"
        }`}
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes={
            featured
              ? "(max-width: 1024px) 92vw, 55vw"
              : "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
          }
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_20%,rgba(26,105,253,0.25),transparent_55%)]" />

        <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowIcon />
        </span>
      </div>

      <div
        className={`flex flex-1 flex-col p-5 sm:p-6 ${
          featured ? "lg:justify-center lg:py-8 lg:pr-8" : ""
        }`}
      >
        {item.categories.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {item.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70"
              >
                {categoryLabels[cat]}
              </span>
            ))}
          </div>
        ) : (
          <span className="text-xs font-medium uppercase tracking-wider text-white/35">
            {item.tagline}
          </span>
        )}

        <h2
          className={`mt-3 font-bold leading-snug text-white transition-colors group-hover:text-primary ${
            featured ? "text-h4 sm:text-subtitle" : "text-subtitle"
          }`}
        >
          {item.listingTitle}
        </h2>

        <p
          className={`mt-2 text-white/60 ${featured ? "line-clamp-3 text-para" : "line-clamp-2 flex-1 text-para"}`}
        >
          {item.summary}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4 sm:mt-5">
          {item.highlights.map((metric) => (
            <div key={metric.label}>
              <p className="text-lg font-bold tabular-nums text-white sm:text-h4">
                {metric.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-white/45">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <span className="mt-5 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
          View case study
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
