"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";

type RcCtaBandProps = {
  title: string;
  body: string;
  cta: string;
};

export function RcCtaBand({ title, body, cta }: RcCtaBandProps) {
  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12 lg:py-14">
      <div className="container-app">
        <FadeIn>
          <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-border-strong bg-surface-elevated px-6 py-10 text-center sm:px-10 sm:py-12">
            <h2 className="text-h3 font-bold text-white sm:text-h2">{title}</h2>
            <p className="mt-4 text-para leading-relaxed text-white/65">{body}</p>
            <Link
              href="/contact-us#free-consultation"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              {cta}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
