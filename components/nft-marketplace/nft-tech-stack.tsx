"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { nftMarketplaceConfig } from "@/lib/nft-marketplace-config";

const TECH_COLORS: Record<string, string> = {
  blockchain: "#627eea",
  contracts: "#14b8a6",
  ipfs: "#65c2cb",
  web3: "#f7931a",
  truffle: "#e6007a",
};

export function NftTechStack() {
  const { techStack } = nftMarketplaceConfig;
  const [activeId, setActiveId] = useState(techStack.items[0].id);
  const active = techStack.items.find((item) => item.id === activeId) ?? techStack.items[0];
  const color = TECH_COLORS[active.id] ?? "#1a69fd";

  return (
    <section
      className="relative overflow-hidden border-t border-white/10 bg-surface-dark py-10 md:py-12 lg:py-14"
      aria-labelledby="nft-tech-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black,transparent)]"
        aria-hidden
      />

      <div className="container-app relative">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {techStack.title}
          </p>
          <h2 id="nft-tech-heading" className="mt-3 max-w-4xl text-h3 font-bold text-white sm:text-h2">
            {techStack.subtitle}
          </h2>
          <p className="mt-4 max-w-4xl text-para leading-relaxed text-white/65">{techStack.intro}</p>
        </FadeIn>

        <FadeIn delay={0.06} className="mt-8">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {techStack.items.map((item) => {
              const selected = item.id === activeId;
              const itemColor = TECH_COLORS[item.id] ?? "#1a69fd";
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  aria-pressed={selected}
                  className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    selected
                      ? "border-white/25 bg-white/[0.08] text-white"
                      : "border-white/10 text-white/50 hover:border-white/20 hover:text-white/80"
                  }`}
                  style={selected ? { boxShadow: `0 0 24px -6px ${itemColor}88` } : undefined}
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: itemColor }}
                    aria-hidden
                  />
                  {item.title}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-[1.5rem] border border-border-strong bg-surface-elevated p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black text-white"
                  style={{ backgroundColor: color }}
                  aria-hidden
                >
                  {active.title.charAt(0)}
                </span>
                <div>
                  <h3 className="text-h4 font-bold text-white">{active.title}</h3>
                  <p className="text-sm text-white/45">NFT marketplace stack</p>
                </div>
              </div>
              <p className="mt-4 text-para leading-relaxed text-white/65">{active.description}</p>
            </motion.div>
          </AnimatePresence>
        </FadeIn>
      </div>
    </section>
  );
}
