"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BlurFadeIn } from "@/components/digital-product-marketplace/dpm-text-motion";
import { HydrationButton } from "@/components/ui/hydration-button";
import { blockchainConfig } from "@/lib/blockchain-config";

const CHAIN_COLORS: Record<string, string> = {
  BTC: "#f7931a",
  ETH: "#627eea",
  BSC: "#f0b90b",
  ADA: "#0033ad",
  XRP: "#23292f",
  DOT: "#e6007a",
  SOL: "#14f195",
  LINK: "#375bd2",
  ATOM: "#6f7390",
};

export function BcNetworks() {
  const { networks } = blockchainConfig;
  const [activeTicker, setActiveTicker] = useState<string>(networks.chains[0].ticker);
  const active =
    networks.chains.find((chain) => chain.ticker === activeTicker) ?? networks.chains[0];

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="bc-networks-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <BlurFadeIn as="h2" id="bc-networks-heading" className="text-h3 font-bold text-white sm:text-h2">
          {networks.title}
        </BlurFadeIn>
        <BlurFadeIn as="p" delay={0.06} className="mt-4 max-w-4xl text-para leading-relaxed text-white/60">
          {networks.subtitle}
        </BlurFadeIn>

        <BlurFadeIn delay={0.08} className="mt-8">
          <div className="flex flex-wrap gap-2 sm:gap-3" role="tablist">
            {networks.chains.map((chain) => {
              const isActive = chain.ticker === activeTicker;
              const color = CHAIN_COLORS[chain.ticker] ?? "#1a69fd";
              return (
                <HydrationButton
                  key={chain.ticker}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTicker(chain.ticker)}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-white/25 bg-white/[0.08] text-white"
                      : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                  }`}
                  style={
                    isActive
                      ? { boxShadow: `0 0 24px -6px ${color}88` }
                      : undefined
                  }
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                    aria-hidden
                  />
                  {chain.name}
                  <span className="text-xs font-bold text-white/40">{chain.ticker}</span>
                </HydrationButton>
              );
            })}
          </div>
        </BlurFadeIn>

        <div className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.ticker}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-black text-white"
                  style={{ backgroundColor: CHAIN_COLORS[active.ticker] ?? "#1a69fd" }}
                >
                  {active.ticker}
                </span>
                <div>
                  <h3 className="text-h4 font-bold text-white">{active.name}</h3>
                  <p className="text-sm text-white/45">Supported network</p>
                </div>
              </div>
              <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
