"use client";

import Image from "next/image";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerGrid, StaggerItem } from "@/components/motion/stagger-grid";
import { homeDigitalExcellence } from "@/lib/home-sections";

export function HomeDigitalExcellenceSection() {
  return (
    <section className="bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-8">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">
              {homeDigitalExcellence.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-para leading-relaxed text-white/70">
              {homeDigitalExcellence.body}
            </p>
          </FadeIn>
        </div>

        <StaggerGrid className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {homeDigitalExcellence.cards.map((card) => (
            <StaggerItem key={card.id} className="h-full" hoverable>
              <article className="group flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-4 transition-[box-shadow,border-color,background-color] duration-200 ease-out hover:border-primary hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(26,105,253,0.35)] sm:p-5">
                <Image
                  src={card.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="size-16 object-contain"
                  aria-hidden
                />
                <h3 className="mt-4 text-subtitle font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 flex-1 text-para leading-snug text-white/60 transition-colors group-hover:text-white/75">
                  {card.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
