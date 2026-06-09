"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

export function AmOffshorePromo() {
  const { offshorePromo } = appModBangaloreConfig;

  return (
    <section className="border-t border-white/10 bg-black py-8 md:py-10">
      <div className="container-app">
        <FadeIn>
          <div className="grid overflow-hidden rounded-[1.5rem] border border-border-strong bg-surface-elevated lg:grid-cols-2">
            <div className="relative min-h-[220px] lg:min-h-[260px]">
              <Image
                src={offshorePromo.image}
                alt={offshorePromo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:from-black/40" />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <h3 className="text-h4 font-bold text-white">{offshorePromo.title}</h3>
              <p className="mt-3 text-para text-white/65">{offshorePromo.body}</p>
              <Link
                href={offshorePromo.href}
                className="mt-5 inline-flex min-h-11 w-fit items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-white hover:bg-primary-hover"
              >
                {offshorePromo.cta}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
