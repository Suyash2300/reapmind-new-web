import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmBenefits() {
  const { benefits } = timeMaterialConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="tm-benefits-heading"
    >
      <div className="container-app">
        <h2 id="tm-benefits-heading" className="text-h3 font-bold text-white sm:text-h2">
          {benefits.title}
        </h2>
        <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">{benefits.intro}</p>

        <ul className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((item, i) => (
            <li key={item.id} className="bg-black p-6 sm:p-7">
              <span className="text-xs font-bold tabular-nums text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-base font-bold text-white sm:text-lg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
