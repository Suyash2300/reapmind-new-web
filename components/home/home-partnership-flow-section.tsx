"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  ScrollTrigger,
  registerGsapPlugins,
} from "@/lib/animation/gsap-register";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { useLenisRef } from "@/components/providers/smooth-scroll-provider";
import { homePartnershipFlow } from "@/lib/home-partnership-flow";

const NAV_BASE =
  "group/nav relative min-h-11 text-left text-[clamp(1.35rem,2.1vw,2.25rem)] leading-tight touch-manipulation select-none [-webkit-tap-highlight-color:transparent]";

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
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

function PartnershipPipelineVisual({
  steps,
  activeIndex,
}: {
  steps: typeof homePartnershipFlow.steps;
  activeIndex: number;
}) {
  return (
    <div className="relative flex h-full min-h-[280px] flex-col justify-center rounded-[2rem] border border-border-strong bg-surface-elevated p-6 sm:min-h-[320px] sm:p-8">
      <svg
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-y-8 left-[2.15rem] w-3 sm:left-[2.35rem]"
        aria-hidden
      >
        <line
          x1="2"
          y1="4"
          x2="2"
          y2="96"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="2"
          y1="4"
          x2="2"
          y2="96"
          stroke="rgba(26,105,253,0.85)"
          strokeWidth="0.35"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="100"
          strokeDashoffset={100 - (activeIndex / Math.max(1, steps.length - 1)) * 100}
        />
      </svg>

      <ol className="relative space-y-5 sm:space-y-6">
        {steps.map((step, idx) => {
          const active = idx === activeIndex;
          const done = idx < activeIndex;
          return (
            <li key={step.id} className="flex items-center gap-4">
              <span
                className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border text-sm font-bold tabular-nums sm:size-12 ${
                  active
                    ? "border-primary bg-primary text-white shadow-[0_0_24px_rgba(26,105,253,0.45)]"
                    : done
                      ? "border-primary/50 bg-primary/15 text-primary"
                      : "border-white/15 bg-black/40 text-white/45"
                }`}
              >
                {step.stepLabel}
              </span>
              <div className="min-w-0">
                <p
                  className={`text-sm font-semibold sm:text-base ${
                    active ? "text-white" : "text-white/45"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function HomePartnershipFlowSection() {
  const reducedMotion = usePrefersReducedMotion();
  const lenisRef = useLenisRef();
  const { eyebrow, title, intro, steps, engagement, cta } = homePartnershipFlow;
  const longestDescription = steps.reduce((a, b) =>
    a.description.length > b.description.length ? a : b,
  );

  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const descLayersRef = useRef<(HTMLDivElement | null)[]>([]);
  const navButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const scrollTweenRef = useRef<gsap.core.Tween | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const crossfadeRef = useRef<(idx: number) => void>(() => {});

  useGSAP(
    () => {
      registerGsapPlugins();
      ScrollTrigger.config({ limitCallbacks: true });

      const section = sectionRef.current;
      const pinEl = pinRef.current;
      if (!section || !pinEl) return;

      const getDescEls = () =>
        descLayersRef.current.filter(Boolean) as HTMLDivElement[];
      const getNavEls = () =>
        navButtonsRef.current.filter(Boolean) as HTMLButtonElement[];

      const total = steps.length;
      const stepSegments = Math.max(1, total - 1);

      const applyStepDom = (idx: number) => {
        getNavEls().forEach((btn, i) => {
          const active = i === idx;
          btn.dataset.active = active ? "true" : "false";
          if (active) btn.setAttribute("aria-current", "true");
          else btn.removeAttribute("aria-current");
        });
        getDescEls().forEach((el, i) => {
          el.setAttribute("aria-hidden", i === idx ? "false" : "true");
        });
      };

      const syncDiscreteIndex = (idx: number) => {
        if (idx === activeIndexRef.current) return;
        activeIndexRef.current = idx;
        applyStepDom(idx);
        setActiveIndex(idx);
      };

      const applyIndexInstant = (idx: number) => {
        activeIndexRef.current = idx;
        const descEls = getDescEls();
        gsap.killTweensOf(descEls);
        descEls.forEach((el, i) => {
          gsap.set(el, { opacity: i === idx ? 1 : 0 });
        });
        applyStepDom(idx);
        setActiveIndex(idx);
      };

      const scrollToStep = (idx: number) => {
        if (idx === activeIndexRef.current) return;
        const st = scrollTriggerRef.current;
        if (!st) {
          applyIndexInstant(idx);
          return;
        }

        scrollTweenRef.current?.kill();
        const targetProgress = idx / stepSegments;
        const y = st.start + (st.end - st.start) * targetProgress;

        const lenis = lenisRef?.current ?? null;
        if (lenis) {
          lenis.scrollTo(y, {
            duration: 0.65,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
          });
          return;
        }

        scrollTweenRef.current = gsap.to(window, {
          scrollTo: y,
          duration: 0.65,
          ease: "power2.inOut",
          overwrite: "auto",
          onComplete: () => {
            scrollTweenRef.current = null;
          },
        });
      };

      crossfadeRef.current = scrollToStep;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (reducedMotion) {
          applyIndexInstant(0);
          return;
        }

        applyIndexInstant(0);

        const descEls = getDescEls();
        descEls.forEach((el, i) => {
          gsap.set(el, { opacity: i === 0 ? 1 : 0 });
        });

        const scrollDistance = () => window.innerHeight * stepSegments;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance()}`,
            pin: pinEl,
            pinSpacing: true,
            pinType: "transform",
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const idx = Math.min(
                total - 1,
                Math.round(self.progress * stepSegments),
              );
              syncDiscreteIndex(idx);
            },
          },
        });

        for (let i = 1; i < total; i++) {
          tl.to(descEls[i - 1], { opacity: 0, duration: 1 }, ">")
            .to(descEls[i], { opacity: 1, duration: 1 }, "<");
        }

        scrollTriggerRef.current = tl.scrollTrigger ?? null;
        ScrollTrigger.refresh();

        return () => {
          scrollTriggerRef.current = null;
          scrollTweenRef.current?.kill();
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(max-width: 1023px)", () => {
        if (reducedMotion) return;

        const panels = gsap.utils.toArray<HTMLElement>(
          "[data-flow-panel]",
          section,
        );

        const triggers = panels.map((panel, idx) =>
          ScrollTrigger.create({
            trigger: panel,
            start: "top 62%",
            end: "bottom 38%",
            onEnter: () => {
              activeIndexRef.current = idx;
              setActiveIndex(idx);
            },
            onEnterBack: () => {
              activeIndexRef.current = idx;
              setActiveIndex(idx);
            },
          }),
        );

        ScrollTrigger.refresh();
        return () => triggers.forEach((t) => t.kill());
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [steps.length, reducedMotion, lenisRef] },
  );

  return (
    <>
    <section
      ref={sectionRef}
      className="bg-surface-dark text-primary-foreground"
      aria-label={title}
    >
      <div ref={pinRef} className="min-h-[100svh] w-full">
        <div className="container-app flex min-h-[100svh] flex-col justify-center py-10 md:py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-h3 font-bold tracking-tight text-white sm:text-h2">
              {title}
            </h2>
            <p className="mt-4 max-w-prose text-para leading-relaxed text-white/70">
              {intro}
            </p>
          </div>

          <div className="mt-10 hidden min-w-0 lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,0.75fr)_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-12">
            <div className="relative w-full max-w-[480px] justify-self-start">
              <PartnershipPipelineVisual steps={steps} activeIndex={activeIndex} />
            </div>

            <nav
              className="flex min-w-0 flex-col justify-start gap-0.5 py-2 xl:gap-1"
              aria-label="Partnership flow steps"
            >
              {steps.map((step, idx) => (
                <button
                  key={step.id}
                  ref={(el) => {
                    navButtonsRef.current[idx] = el;
                  }}
                  type="button"
                  data-active={idx === 0 ? "true" : "false"}
                  onClick={() => crossfadeRef.current(idx)}
                  className={`${NAV_BASE} pl-5 font-medium text-white/40 opacity-40 translate-x-0 data-[active=true]:translate-x-2.5 data-[active=true]:font-semibold data-[active=true]:text-white data-[active=true]:opacity-100`}
                  aria-current={idx === 0 ? "true" : undefined}
                >
                  <span
                    data-nav-dot
                    className="absolute left-0 top-1/2 size-2 -translate-y-1/2 scale-0 rounded-full bg-primary opacity-0 shadow-[0_0_14px_rgba(26,105,253,0.85)] group-data-[active=true]/nav:scale-100 group-data-[active=true]/nav:opacity-100"
                    aria-hidden
                  />
                  {step.title}
                </button>
              ))}
            </nav>

            <div className="relative isolate min-w-0 self-start pt-1">
              <div className="relative">
                <div className="invisible pointer-events-none select-none" aria-hidden>
                  <p className="max-w-prose text-base leading-relaxed xl:text-lg">
                    {longestDescription.description}
                  </p>
                </div>
                {steps.map((step, idx) => (
                  <div
                    key={step.id}
                    ref={(el) => {
                      descLayersRef.current[idx] = el;
                    }}
                    className="pointer-events-none absolute inset-x-0 top-0"
                    style={{ opacity: idx === 0 ? 1 : 0 }}
                    aria-hidden={idx !== activeIndex}
                  >
                    <p className="max-w-prose text-base leading-relaxed text-white/70 xl:text-lg">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={cta.href}
                className="group relative z-20 mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                {cta.label}
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-app pb-10 md:pb-12 lg:hidden">
        <nav
          className="mb-8 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Jump to step"
        >
          {steps.map((step, idx) => (
            <button
              key={step.id}
              type="button"
              onClick={() => {
                document
                  .querySelector(`[data-flow-panel="${step.id}"]`)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`inline-flex min-h-11 shrink-0 items-center rounded-full border px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                idx === activeIndex
                  ? "border-primary bg-primary/15 text-white"
                  : "border-white/12 bg-white/[0.03] text-white/65 hover:border-primary/35"
              }`}
              aria-current={idx === activeIndex ? "true" : undefined}
            >
              {step.title}
            </button>
          ))}
        </nav>

        <PartnershipPipelineVisual steps={steps} activeIndex={activeIndex} />

        <div className="mt-10 space-y-12">
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={step.id}
                data-flow-panel={step.id}
                className="scroll-mt-24"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Step {step.stepLabel}
                </p>
                <h3
                  className={`mt-2 text-h4 font-bold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/45"
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-3 text-para leading-relaxed text-white/65">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <Link
          href={cta.href}
          className="group mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {cta.label}
          <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>

    <div className="border-t border-white/8 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <h3 className="text-h3 font-bold text-white sm:text-h2">
          {engagement.title}
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
          {engagement.models.map((model) => (
            <article
              key={model.id}
              className="group flex h-full flex-col rounded-2xl border border-border-strong bg-surface-elevated p-5 transition-[border-color,box-shadow,background-color] duration-300 hover:border-primary/40 hover:bg-white/[0.04] hover:shadow-[0_12px_40px_-12px_rgba(26,105,253,0.35)] sm:p-6"
            >
              <h4 className="text-subtitle font-bold text-white">
                {model.title}
              </h4>
              <p className="mt-2 flex-1 text-para leading-relaxed text-white/60 transition-colors group-hover:text-white/75">
                {model.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
