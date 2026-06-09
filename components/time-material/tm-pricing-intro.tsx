import Link from "next/link";
import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmPricingIntro() {
  const { pricingIntro } = timeMaterialConfig;

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="tm-pricing-heading"
    >
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:items-start lg:gap-14">
          <div>
            <h2 id="tm-pricing-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
              {pricingIntro.title}
            </h2>
            <div className="mt-6 space-y-5">
              {pricingIntro.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-para leading-relaxed text-white/65">
                  {p}
                </p>
              ))}
            </div>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {pricingIntro.cta}
            </Link>
          </div>

          <div className="border border-white/10 bg-surface-elevated p-6 sm:p-7" aria-hidden>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Pay as you go
            </p>
            <div className="mt-6 space-y-4">
              {["Scope evolves", "Hours tracked", "You approve spend"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex size-7 shrink-0 items-center justify-center text-xs font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/60">{label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/45">
              Iterative sprints, transparent reports, and flexible billing aligned to actual delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
