"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { startupConfig } from "@/lib/startup-config";

export function SuForgeIntro() {
  const { forgeIntro } = startupConfig;

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h3 font-bold text-white sm:text-h2">{forgeIntro.title}</h2>
            {forgeIntro.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-5 text-para leading-relaxed text-white/65 sm:text-md"
              >
                {paragraph}
              </p>
            ))}
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-8 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              {forgeIntro.cta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
