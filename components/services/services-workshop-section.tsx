"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { servicesPrimary } from "@/lib/services-page";

export function ServicesWorkshopSection() {
  const [activeId, setActiveId] = useState(servicesPrimary[0].id);
  const stationRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const nodes = servicesPrimary
      .map((service) => stationRefs.current[service.id])
      .filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const id = visible[0].target.getAttribute("data-service-id");
        if (id) setActiveId(id);
      },
      { rootMargin: "-25% 0px -45% 0px", threshold: [0.25, 0.55] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    stationRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  return (
    <section
      className="border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="services-workshop-heading"
    >
      <div className="container-app">
        <FadeIn>
          <h2
            id="services-workshop-heading"
            className="text-h3 font-bold text-white sm:text-h2"
          >
            Digital workshop
          </h2>
          <p className="mt-3 max-w-2xl text-para text-white/60">
            Five core delivery lanes — pick a station to jump, or scroll the
            floor and explore each capability.
          </p>
        </FadeIn>

        <div className="mt-8 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[240px_minmax(0,1fr)]">
          <nav
            className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:sticky lg:top-24 lg:mb-0 lg:block lg:space-y-2 lg:overflow-visible"
            aria-label="Service stations"
          >
            {servicesPrimary.map((service) => {
              const active = service.id === activeId;
              return (
                <HydrationButton
                  key={service.id}
                  type="button"
                  onClick={() => scrollTo(service.id)}
                  aria-current={active ? "true" : undefined}
                  className={`flex min-h-11 shrink-0 items-center gap-3 rounded-xl border px-3 py-2.5 text-left transition-colors lg:w-full ${
                    active
                      ? "border-primary/50 bg-primary/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/55 hover:border-white/20 hover:text-white/85"
                  }`}
                >
                  <span
                    className={`text-xs font-bold tabular-nums ${
                      active ? "text-primary" : "text-white/40"
                    }`}
                  >
                    {service.index}
                  </span>
                  <span className="text-sm font-semibold">{service.title}</span>
                </HydrationButton>
              );
            })}
          </nav>

          <div className="space-y-10 lg:space-y-14">
            {servicesPrimary.map((service, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <article
                  key={service.id}
                  id={service.id}
                  data-service-id={service.id}
                  ref={(node) => {
                    stationRefs.current[service.id] = node;
                  }}
                  className="scroll-mt-24 rounded-[1.5rem] border border-border-strong bg-surface-elevated p-4 sm:p-5 lg:p-6"
                >
                  <div
                    className={`grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-8 ${
                      imageFirst ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                      <div className="relative aspect-[4/3] sm:aspect-[5/4]">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                          aria-hidden
                        />
                      </div>
                      <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-xs font-bold tabular-nums text-primary backdrop-blur-sm">
                        Station {service.index}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-h4 font-bold text-white sm:text-h3">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-para leading-relaxed text-white/70">
                        {service.body}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/75"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
                      >
                        {service.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
