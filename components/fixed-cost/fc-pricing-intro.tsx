import Link from "next/link";
import { fixedCostConfig } from "@/lib/fixed-cost-config";

export function FcPricingIntro() {
  const { pricingIntro } = fixedCostConfig;

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="fc-pricing-heading"
    >
      <div className="container-app">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:items-start lg:gap-14">
          <div>
            <h2 id="fc-pricing-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
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
              Fixed vs variable
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Fixed-price model</span>
                  <span className="font-semibold text-primary">Predictable</span>
                </div>
                <div className="mt-2 h-2 w-full bg-white/10">
                  <div className="h-full w-full bg-primary" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/70">Hourly / T&M</span>
                  <span className="text-white/40">Variable</span>
                </div>
                <div className="mt-2 h-2 w-full bg-white/10">
                  <div className="h-full w-[68%] bg-white/25" />
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-2 border-t border-white/10 pt-6 text-sm text-white/50">
              <li>Scope locked upfront</li>
              <li>No surprise invoices</li>
              <li>Clear milestone delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
