"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import {
  gsap,
  ScrollTrigger,
  registerGsapPlugins,
} from "@/lib/animation/gsap-register";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { homeMeetingIndustries } from "@/lib/home-meeting-industries";

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

const NAV_BASE =
  "relative text-left text-[clamp(1.5rem,2.4vw,2.5rem)] leading-tight will-change-transform";

const IMAGE_CARD_BASE =
  "relative size-full overflow-hidden rounded-[2.5rem] border bg-neutral-900 p-2 transition-[box-shadow,border-color] duration-500 sm:p-2.5";

const IMAGE_MEDIA_CLASS =
  "relative size-full overflow-hidden rounded-[1.25rem] bg-black";

export function HomeMeetingIndustriesSection() {
  const reducedMotion = usePrefersReducedMotion();
  const items = homeMeetingIndustries.items;
  const longestDescription = items.reduce((a, b) =>
    a.description.length > b.description.length ? a : b,
  );

  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const imageStageRef = useRef<HTMLDivElement>(null);
  const navStageRef = useRef<HTMLDivElement>(null);
  const imageLayersRef = useRef<(HTMLDivElement | null)[]>([]);
  const descLayersRef = useRef<(HTMLDivElement | null)[]>([]);
  const navButtonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndexRef = useRef(0);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const crossfadeRef = useRef<(idx: number) => void>(() => {});

  useGSAP(
    () => {
      registerGsapPlugins();
      ScrollTrigger.config({ limitCallbacks: true });

      const section = sectionRef.current;
      const pinEl = pinRef.current;
      const navStage = navStageRef.current;
      if (!section || !pinEl) return;

      const getImageEls = () =>
        imageLayersRef.current.filter(Boolean) as HTMLDivElement[];
      const getDescEls = () =>
        descLayersRef.current.filter(Boolean) as HTMLDivElement[];
      const getNavEls = () =>
        navButtonsRef.current.filter(Boolean) as HTMLButtonElement[];

      const total = items.length;

      const tweenDuration = reducedMotion ? 0 : 0.55;
      const tweenEase = "power3.out";

      if (navStage) {
        gsap.set(navStage, {
          transformPerspective: 900,
          transformStyle: "preserve-3d",
        });
      }

      const resetImageLayerTransform = (el: HTMLDivElement) => {
        gsap.set(el, { clearProps: "transform" });
      };

      const setImageCardActive = (idx: number) => {
        getImageEls().forEach((layer, i) => {
          const active = i === idx;
          const card = layer.querySelector<HTMLElement>("[data-image-card]");
          const sheen = layer.querySelector<HTMLElement>("[data-image-sheen]");
          if (card) card.dataset.active = active ? "true" : "false";
          if (sheen) sheen.dataset.active = active ? "true" : "false";
        });
      };

      const applyIndexInstant = (idx: number) => {
        activeIndexRef.current = idx;
        const imageEls = getImageEls();
        const descEls = getDescEls();
        const navEls = getNavEls();

        imageEls.forEach((el, i) => {
          const active = i === idx;
          gsap.set(el, { opacity: active ? 1 : 0 });
          resetImageLayerTransform(el);
          el.style.pointerEvents = active ? "auto" : "none";
        });
        descEls.forEach((el, i) => {
          const active = i === idx;
          gsap.set(el, {
            opacity: active ? 1 : 0,
            y: active ? 0 : 16,
          });
          el.style.zIndex = active ? "10" : "0";
          el.style.pointerEvents = active ? "auto" : "none";
          el.setAttribute("aria-hidden", active ? "false" : "true");
        });
        navEls.forEach((btn, i) => {
          const active = i === idx;
          btn.dataset.active = active ? "true" : "false";
          gsap.set(btn, {
            opacity: active ? 1 : 0.42,
            x: active ? 14 : 0,
            z: active ? 36 : -28,
            scale: active ? 1.04 : 0.96,
          });
          const dot = btn.querySelector<HTMLElement>("[data-nav-dot]");
          if (dot) gsap.set(dot, { scale: active ? 1 : 0, opacity: active ? 1 : 0 });
          if (active) btn.setAttribute("aria-current", "true");
          else btn.removeAttribute("aria-current");
        });
        setImageCardActive(idx);
        setActiveIndex(idx);
      };

      const animateToIndex = (nextIdx: number) => {
        if (nextIdx === activeIndexRef.current) return;
        activeIndexRef.current = nextIdx;

        const imageEls = getImageEls();
        const descEls = getDescEls();
        const navEls = getNavEls();

        gsap.killTweensOf([...imageEls, ...descEls, ...navEls]);

        if (reducedMotion || tweenDuration === 0) {
          applyIndexInstant(nextIdx);
          return;
        }

        imageEls.forEach((el, i) => {
          const active = i === nextIdx;
          gsap.to(el, {
            opacity: active ? 1 : 0,
            duration: tweenDuration,
            ease: tweenEase,
            overwrite: "auto",
          });
          resetImageLayerTransform(el);
          el.style.pointerEvents = active ? "auto" : "none";
        });

        descEls.forEach((el, i) => {
          const active = i === nextIdx;
          gsap.to(el, {
            opacity: active ? 1 : 0,
            y: active ? 0 : 16,
            duration: tweenDuration * 0.92,
            ease: tweenEase,
            overwrite: "auto",
          });
          el.style.zIndex = active ? "10" : "0";
          el.setAttribute("aria-hidden", active ? "false" : "true");
        });

        navEls.forEach((btn, i) => {
          const active = i === nextIdx;
          btn.dataset.active = active ? "true" : "false";
          gsap.to(btn, {
            opacity: active ? 1 : 0.42,
            x: active ? 14 : 0,
            z: active ? 36 : -28,
            scale: active ? 1.04 : 0.96,
            duration: tweenDuration,
            ease: tweenEase,
            overwrite: "auto",
          });
          const dot = btn.querySelector<HTMLElement>("[data-nav-dot]");
          if (dot) {
            gsap.to(dot, {
              scale: active ? 1 : 0,
              opacity: active ? 1 : 0,
              duration: tweenDuration * 0.85,
              ease: "back.out(2)",
              overwrite: "auto",
            });
          }
          if (active) btn.setAttribute("aria-current", "true");
          else btn.removeAttribute("aria-current");
        });

        setImageCardActive(nextIdx);
        setActiveIndex(nextIdx);
      };

      crossfadeRef.current = (idx: number) => {
        if (idx === activeIndexRef.current) return;
        animateToIndex(idx);
        const st = scrollTriggerRef.current;
        if (!st) return;
        const steps = total - 1;
        const targetProgress = steps === 0 ? 0 : idx / steps;
        const y = st.start + (st.end - st.start) * targetProgress;
        gsap.to(window, {
          scrollTo: y,
          duration: 0.85,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      };

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (reducedMotion) {
          applyIndexInstant(0);
          return;
        }

        applyIndexInstant(0);

        const steps = total - 1;
        const scrollDistance = () => window.innerHeight * steps;

        const st = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance()}`,
          pin: pinEl,
          pinSpacing: true,
          pinType: "transform",
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              total - 1,
              Math.round(self.progress * steps),
            );
            animateToIndex(idx);
          },
          onLeave: () => setActiveIndex(activeIndexRef.current),
          onEnterBack: () => setActiveIndex(activeIndexRef.current),
        });

        scrollTriggerRef.current = st;
        ScrollTrigger.refresh();

        return () => {
          scrollTriggerRef.current = null;
          st.kill();
        };
      });

      mm.add("(max-width: 1023px)", () => {
        if (reducedMotion) return;

        const panels = gsap.utils.toArray<HTMLElement>(
          "[data-industry-panel]",
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
    { scope: sectionRef, dependencies: [items.length, reducedMotion] },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-black text-primary-foreground"
      aria-label={homeMeetingIndustries.title}
    >
      <div ref={pinRef} className="min-h-[100svh] w-full">
        <div className="container-app flex min-h-[100svh] flex-col justify-center py-10 md:py-12 lg:py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
            <h2 className="max-w-2xl text-h3 font-bold tracking-tight text-white sm:text-h2 lg:max-w-3xl">
              {homeMeetingIndustries.title}
            </h2>
            <Link
              href={homeMeetingIndustries.goToCaseStudies.href}
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 self-start rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              {homeMeetingIndustries.goToCaseStudies.label}
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </div>

          <div className="mt-10 hidden min-w-0 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.8fr)_minmax(0,1fr)] lg:items-start lg:gap-8 xl:gap-12">
            <div
              ref={imageStageRef}
              className="relative aspect-[16/10] w-full max-w-[520px] justify-self-start"
            >
              {items.map((item, idx) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    imageLayersRef.current[idx] = el;
                  }}
                  className="absolute inset-0"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    pointerEvents: idx === 0 ? "auto" : "none",
                  }}
                >
                  <Link
                    href={item.portfolioHref}
                    aria-label={`View ${item.caseStudyTitle} case study`}
                    className="group/image relative block size-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    tabIndex={idx === activeIndex ? 0 : -1}
                  >
                    <div
                      data-image-card
                      data-active={idx === 0 ? "true" : "false"}
                      className={`${IMAGE_CARD_BASE} border-transparent transition-transform duration-300 group-hover/image:scale-[1.01] group-focus-visible/image:scale-[1.01] data-[active=true]:border-white/15 data-[active=true]:shadow-[0_36px_90px_-24px_rgba(26,105,253,0.45)]`}
                    >
                      <div className={IMAGE_MEDIA_CLASS}>
                        <Image
                          src={item.imageSrc}
                          alt={item.caseStudyTitle}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 1280px) 45vw, 520px"
                          priority={idx === 0}
                          loading={idx === 0 ? "eager" : "lazy"}
                        />
                      </div>
                      <div
                        data-image-sheen
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/5 opacity-0 transition-opacity duration-500 data-[active=true]:opacity-100"
                        data-active={idx === 0 ? "true" : "false"}
                        aria-hidden
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Nav — 3D depth isolated to this column */}
            <nav
              ref={navStageRef}
              className="flex min-w-0 flex-col justify-start gap-0.5 py-2 [transform-style:preserve-3d] xl:gap-1"
              aria-label="Industries"
            >
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  ref={(el) => {
                    navButtonsRef.current[idx] = el;
                  }}
                  type="button"
                  data-active={idx === 0 ? "true" : "false"}
                  onClick={() => crossfadeRef.current(idx)}
                  className={`${NAV_BASE} pl-5 font-medium text-white/45 data-[active=true]:font-semibold data-[active=true]:text-white`}
                  style={{
                    opacity: idx === 0 ? 1 : 0.42,
                    transformStyle: "preserve-3d",
                  }}
                  aria-current={idx === 0 ? "true" : undefined}
                >
                  <span
                    data-nav-dot
                    className="absolute left-0 top-1/2 size-2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_14px_rgba(26,105,253,0.85)]"
                    style={{
                      opacity: idx === 0 ? 1 : 0,
                      transform: idx === 0 ? "scale(1)" : "scale(0)",
                    }}
                    aria-hidden
                  />
                  {item.industryLabel}
                </button>
              ))}
            </nav>

            {/* Description — flat 2D column so 3D image never covers text */}
            <div className="relative isolate min-w-0 self-start pt-1">
              <div className="relative">
                <div
                  className="invisible pointer-events-none select-none"
                  aria-hidden
                >
                  <p className="max-w-prose text-base leading-relaxed xl:text-lg">
                    {longestDescription.description}
                  </p>
                </div>
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    ref={(el) => {
                      descLayersRef.current[idx] = el;
                    }}
                    className="absolute inset-x-0 top-0"
                    style={{
                      opacity: idx === 0 ? 1 : 0,
                      zIndex: idx === 0 ? 10 : 0,
                    }}
                    aria-hidden={idx !== activeIndex}
                  >
                    <p className="max-w-prose text-base leading-relaxed text-white/70 xl:text-lg">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href={items[activeIndex].portfolioHref}
                className="group relative z-20 mt-8 inline-flex min-h-[44px] w-fit items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/5 hover:shadow-[0_12px_40px_-12px_rgba(26,105,253,0.35)]"
              >
                View {items[activeIndex].caseStudyTitle} case study
                <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-app pb-10 md:pb-12 lg:hidden">
        <div className="space-y-16">
          {items.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <article
                key={item.id}
                data-industry-panel
                className="scroll-mt-24"
              >
                <Link
                  href={item.portfolioHref}
                  className={`group/image relative block aspect-[16/10] w-full overflow-hidden rounded-[1.75rem] border bg-neutral-900 transition-[opacity,transform,box-shadow,border-color] duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    isActive
                      ? "scale-100 border-white/15 opacity-100 shadow-[0_24px_60px_-20px_rgba(26,105,253,0.35)]"
                      : "scale-[0.97] border-transparent opacity-40"
                  }`}
                >
                  <div className="absolute inset-0 overflow-hidden rounded-[1.35rem] bg-black p-2">
                    <div className="relative size-full overflow-hidden rounded-[1rem]">
                      <Image
                        src={item.imageSrc}
                        alt={item.caseStudyTitle}
                        fill
                        className="object-cover object-top"
                        sizes="92vw"
                        loading={idx === 0 ? "eager" : "lazy"}
                      />
                    </div>
                  </div>
                </Link>
                <h3
                  className={`mt-5 text-h4 font-semibold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-white/40"
                  }`}
                >
                  <Link
                    href={item.portfolioHref}
                    className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    {item.industryLabel}
                  </Link>
                </h3>
                <p className="mt-3 text-para leading-relaxed text-white/65">
                  {item.description}
                </p>
                <Link
                  href={item.portfolioHref}
                  className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  View {item.caseStudyTitle} case study
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
