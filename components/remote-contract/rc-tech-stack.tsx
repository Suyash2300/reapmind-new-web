"use client";

import Link from "next/link";
import { TechBrandIcon } from "@/components/tech/tech-brand-icon";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { remoteContractConfig, type RemoteContractTechItem } from "@/lib/remote-contract-config";

const TILTS = [-2.5, 1.5, -1, 2, -1.5, 1, -2, 2.5] as const;

function FloatingTechChip({
  tech,
  index,
  reducedMotion,
}: {
  tech: RemoteContractTechItem;
  index: number;
  reducedMotion: boolean;
}) {
  const tilt = TILTS[index % TILTS.length];
  const duration = 4.5 + (index % 4) * 0.75;
  const delay = (index % 7) * 0.35;

  return (
    <li
      className={reducedMotion ? undefined : "animate-tech-float"}
      style={
        reducedMotion
          ? undefined
          : {
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
            }
      }
    >
      <div
        className="flex min-h-11 items-center gap-2.5 rounded-2xl border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_100%)] px-3.5 py-2.5 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.75),inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md sm:min-h-12 sm:gap-3 sm:px-4 sm:py-3"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        <TechBrandIcon
          name={tech.name}
          slug={tech.icon}
          color={tech.color}
          src={tech.iconSrc}
          size={26}
          className="sm:h-7 sm:w-7"
        />
        <span className="whitespace-nowrap text-xs font-semibold text-white sm:text-sm">{tech.name}</span>
      </div>
    </li>
  );
}

export function RcTechStack() {
  const { techStack } = remoteContractConfig;
  const reducedMotion = usePrefersReducedMotion();
  let chipIndex = 0;

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-black py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="rc-tech-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(26,105,253,0.12),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_85%_75%_at_50%_45%,black,transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 id="rc-tech-heading" className="text-h3 font-bold text-white sm:text-h2">
            {techStack.title}
          </h2>
          <p className="mt-4 text-para leading-relaxed text-white/65">{techStack.intro}</p>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-12">
          <div
            className="pointer-events-none absolute -inset-x-6 top-1/2 h-48 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />

          <div className="relative space-y-12 rounded-[1.75rem] border border-white/10 bg-surface-elevated/40 p-5 sm:space-y-14 sm:p-8 md:p-10">
            {techStack.categories.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center justify-center gap-3 sm:justify-start">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: cat.accent }}
                    aria-hidden
                  />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                    {cat.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6 sm:justify-start sm:gap-4">
                  {cat.items.map((tech) => {
                    const currentIndex = chipIndex;
                    chipIndex += 1;
                    return (
                      <FloatingTechChip
                        key={tech.name}
                        tech={tech}
                        index={currentIndex}
                        reducedMotion={reducedMotion}
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/contact-us#free-consultation"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {techStack.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
