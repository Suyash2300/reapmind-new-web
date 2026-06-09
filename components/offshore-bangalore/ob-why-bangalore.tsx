"use client";

import { FadeIn } from "@/components/motion/fade-in";
import { offshoreBangaloreConfig } from "@/lib/offshore-bangalore-config";

export function ObWhyBangalore() {
  const { whyBangalore } = offshoreBangaloreConfig;

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-h3 font-bold text-white sm:text-h2">{whyBangalore.title}</h2>
            {whyBangalore.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-5 text-para leading-relaxed text-white/65 sm:text-md"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
