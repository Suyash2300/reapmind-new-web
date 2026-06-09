import Link from "next/link";
import { timeMaterialConfig } from "@/lib/time-material-config";

export function TmMajorServices() {
  const { majorServices } = timeMaterialConfig;

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="tm-services-heading"
    >
      <div className="container-app">
        <h2 id="tm-services-heading" className="max-w-3xl text-h3 font-bold text-white sm:text-h2">
          {majorServices.title}
        </h2>
        <p className="mt-4 max-w-3xl text-para leading-relaxed text-white/65">{majorServices.intro}</p>

        <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {majorServices.items.map((item) => (
            <li key={item.id} className="grid gap-3 py-7 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-10">
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/60 sm:text-para">{item.description}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/contact-us#free-consultation"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
        >
          {majorServices.cta}
        </Link>
      </div>
    </section>
  );
}
