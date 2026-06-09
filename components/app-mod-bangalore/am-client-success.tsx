"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/motion/fade-in";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { appModBangaloreConfig } from "@/lib/app-mod-bangalore-config";

type ClientSuccessConfig = {
  title: string;
  subtitle: string;
  logos: readonly { name: string; src: string }[];
};

type AmClientSuccessProps = {
  clientSuccess?: ClientSuccessConfig;
};

export function AmClientSuccess({
  clientSuccess: clientSuccessProp,
}: AmClientSuccessProps = {}) {
  const clientSuccess = clientSuccessProp ?? appModBangaloreConfig.clientSuccess;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="border-t border-white/10 bg-black py-10 md:py-12">
      <div className="container-app text-center">
        <FadeIn>
          <h2 className="text-h3 font-bold text-white sm:text-h2">{clientSuccess.title}</h2>
          <p className="mt-2 text-para text-white/60">{clientSuccess.subtitle}</p>
        </FadeIn>

        <div className="relative mt-10 overflow-hidden py-4">
          {!reducedMotion ? (
            <>
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-black to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-black to-transparent" />
              <motion.div
                className="flex w-max items-center gap-16 px-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              >
                {[...clientSuccess.logos, ...clientSuccess.logos, ...clientSuccess.logos].map(
                  (logo, i) => (
                    <div
                      key={`${logo.name}-${i}`}
                      className="flex h-16 w-36 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 sm:h-20 sm:w-44"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={140}
                        height={56}
                        className="h-auto max-h-10 w-auto max-w-[120px] object-contain brightness-0 invert opacity-90"
                      />
                    </div>
                  ),
                )}
              </motion.div>
            </>
          ) : (
            <ul className="flex flex-wrap items-center justify-center gap-8">
              {clientSuccess.logos.map((logo) => (
                <li key={logo.name}>
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={56}
                    className="h-12 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
