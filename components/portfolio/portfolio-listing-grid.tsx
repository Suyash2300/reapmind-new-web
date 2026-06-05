"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  filterPortfolioCards,
  portfolioFilters,
  portfolioListingCards,
  type PortfolioFilterId,
} from "@/lib/portfolio-listing";
import { PortfolioListingCardTile } from "./portfolio-listing-card";

function isFeaturedIndex(index: number) {
  return index === 0 || index === 6;
}

export function PortfolioListingGrid() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterId>("all");

  const filtered = useMemo(
    () => filterPortfolioCards(portfolioListingCards, activeFilter),
    [activeFilter],
  );

  return (
    <>
      <div className="sticky top-[4.25rem] z-20 -mx-[var(--container-padding)] border-b border-white/5 bg-black/85 px-[var(--container-padding)] py-4 backdrop-blur-md lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide sm:flex-wrap sm:overflow-visible">
          {portfolioFilters.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex min-h-[44px] shrink-0 items-center rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_28px_-8px_rgba(26,105,253,0.65)]"
                    : "border-white/15 bg-white/5 text-white/65 hover:border-white/30 hover:bg-white/10 hover:text-white"
                }`}
                aria-pressed={isActive}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-para text-white/50">
          No projects in this category yet. Try another filter.
        </p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-10 lg:grid-cols-2 lg:gap-8">
          {filtered.map((item, idx) => {
            const featured = isFeaturedIndex(idx);
            return (
              <li
                key={item.slug}
                className={featured ? "lg:col-span-2" : undefined}
              >
                <FadeIn delay={Math.min(idx * 0.04, 0.2)}>
                  <PortfolioListingCardTile
                    item={item}
                    variant={featured ? "featured" : "default"}
                  />
                </FadeIn>
              </li>
            );
          })}
        </ul>
      )}

      <p className="mt-10 text-center text-sm text-white/35">
        {filtered.length} project{filtered.length === 1 ? "" : "s"}
        {activeFilter !== "all"
          ? ` in ${portfolioFilters.find((f) => f.id === activeFilter)?.label}`
          : " in our portfolio"}
      </p>
    </>
  );
}
