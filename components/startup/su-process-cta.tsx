"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { startupConfig } from "@/lib/startup-config";

export function SuProcessCta() {
  const { process } = startupConfig;

  return (
    <section className="border-t border-white/10 bg-surface-dark py-8 md:py-10">
      <div className="container-app text-center">
        <FadeIn>
          <p className="text-para text-white/55">{process.footer}</p>
          <Link
            href="/contact-us#free-consultation"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {process.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
