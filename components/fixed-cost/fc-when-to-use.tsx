import { fixedCostConfig } from "@/lib/fixed-cost-config";

export function FcWhenToUse() {
  const { whenToUse } = fixedCostConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="fc-when-heading"
    >
      <div className="container-app">
        <h2 id="fc-when-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {whenToUse.title}
        </h2>

        <p className="mt-6 max-w-3xl border-l-2 border-primary/50 pl-6 text-para leading-relaxed text-white/70">
          {whenToUse.story}
        </p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whenToUse.criteria.map((item, i) => (
            <li
              key={item.id}
              className="border-t border-white/10 pt-5"
            >
              <span className="text-xs font-bold tabular-nums text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
