"use client";

import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { nftMarketplaceConfig } from "@/lib/nft-marketplace-config";

export function NftTrustedCta() {
  const { trustedPartner } = nftMarketplaceConfig;

  return (
    <section className="border-t border-white/10 bg-black py-8 md:py-10">
      <div className="container-app text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl text-h4 font-bold text-white sm:text-h3">
            {trustedPartner.title}
          </h2>
          <p className="mt-3 text-para text-white/55">{trustedPartner.subtitle}</p>
          <Link
            href="/contact-us#free-consultation"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {trustedPartner.cta}
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
