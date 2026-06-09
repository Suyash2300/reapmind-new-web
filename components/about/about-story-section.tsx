"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  aboutOurCompanyStory,
} from "@/lib/about-our-company";

export function AboutStorySection() {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapterRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = chapterRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (!visible.length) return;
        const index = nodes.indexOf(visible[0].target as HTMLElement);
        if (index >= 0) setActiveChapter(index);
      },
      { rootMargin: "-20% 0px -45% 0px", threshold: [0.2, 0.5, 0.8] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="border-t border-white/10 bg-surface-dark py-10 text-primary-foreground md:py-12 lg:py-14"
      aria-labelledby="about-story-heading"
    >
      <div className="container-app">
        <div className="lg:grid lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          <FadeIn className="lg:sticky lg:top-24 lg:self-start">
            <p
              id="about-story-heading"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-primary"
            >
              Origin story
            </p>
            <blockquote className="mt-4 border-l-2 border-primary pl-4 text-h4 font-bold leading-snug text-white sm:text-h3">
              &ldquo;{aboutOurCompanyStory.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-white/50">
              Scroll the chapters — each chapter marks a pillar of how we work
              with clients.
            </p>

            <ol className="mt-8 hidden space-y-2 lg:block">
              {aboutOurCompanyStory.chapters.map((chapter, index) => {
                const active = index === activeChapter;
                return (
                  <li key={chapter.id}>
                    <span
                      className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                        active
                          ? "border-primary/40 bg-primary/10 text-white"
                          : "border-transparent text-white/45"
                      }`}
                    >
                      <span
                        className={`tabular-nums ${active ? "text-primary" : ""}`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {chapter.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </FadeIn>

          <div className="mt-8 space-y-6 lg:mt-0 lg:space-y-8">
            {aboutOurCompanyStory.chapters.map((chapter, index) => (
              <article
                key={chapter.id}
                ref={(node) => {
                  chapterRefs.current[index] = node;
                }}
                className={`rounded-2xl border p-5 transition-[border-color,background-color,box-shadow] sm:p-6 ${
                  activeChapter === index
                    ? "border-primary/45 bg-surface-elevated shadow-[0_16px_48px_-16px_rgba(26,105,253,0.35)]"
                    : "border-border-strong bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-full bg-primary/15 text-sm font-bold tabular-nums text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-subtitle font-bold text-white sm:text-h4">
                    {chapter.label}
                  </h2>
                </div>
                <p className="mt-4 text-para leading-relaxed text-white/70">
                  {chapter.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
