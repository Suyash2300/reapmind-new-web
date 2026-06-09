"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { GaiNeuralVisual } from "@/components/generative-ai/gai-neural-visual";
import { aiCopilotConfig } from "@/lib/ai-copilot-config";

export function AcHowItWorks() {
  const { howItWorks } = aiCopilotConfig;

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
          <FadeIn>
            <h2 className="text-h3 font-bold text-white sm:text-h2">{howItWorks.title}</h2>
            {howItWorks.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-4 text-para leading-relaxed text-white/65">
                {paragraph}
              </p>
            ))}
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-8 text-sm font-semibold text-white transition-colors hover:border-primary/50 hover:bg-white/[0.04]"
            >
              {howItWorks.cta}
            </Link>
          </FadeIn>

          <FadeIn delay={0.08}>
            <GaiNeuralVisual className="aspect-[4/3] rounded-[1.5rem] border border-border-strong sm:aspect-[5/4]" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
