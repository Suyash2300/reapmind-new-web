"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BC_ACCENT, BC_GOLD } from "@/lib/blockchain-config";

const BLOCKS = [
  { index: 1042, hash: "0x7f3a…e91c", txs: 128 },
  { index: 1043, hash: "0x2b8d…4f02", txs: 96 },
  { index: 1044, hash: "0x9c1e…8a77", txs: 214 },
] as const;

type BcChainVisualProps = {
  className?: string;
};

export function BcChainVisual({ className = "" }: BcChainVisualProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="rounded-[1.75rem] border border-white/10 bg-black/60 p-5 backdrop-blur-md sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#627EEA]">Live ledger</p>
            <p className="text-sm font-bold text-white">Ethereum · Mainnet</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Synced
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {BLOCKS.map((block, i) => (
            <motion.div
              key={block.index}
              initial={reducedMotion ? false : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="relative rounded-xl border border-white/10 bg-[#0a0e18] p-3 font-mono text-[10px] sm:text-[11px]"
            >
              {i > 0 && (
                <div
                  className="absolute -top-2 left-6 h-2 w-px"
                  style={{ background: `linear-gradient(to bottom, ${BC_GOLD}, ${BC_ACCENT})` }}
                />
              )}
              <div className="flex items-center justify-between gap-2">
                <span className="font-bold text-white">#{block.index}</span>
                <span className="text-white/40">{block.txs} txs</span>
              </div>
              <p className="mt-1 truncate text-[#627EEA]">{block.hash}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {[
            { label: "Networks", value: "9+" },
            { label: "Security", value: "256-bit" },
            { label: "Uptime", value: "99.9%" },
          ].map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.06, duration: 0.35 }}
              className="rounded-lg border px-2 py-2"
              style={{ borderColor: `${BC_ACCENT}33`, backgroundColor: `${BC_ACCENT}10` }}
            >
              <p className="text-[9px] text-white/40">{chip.label}</p>
              <p className="text-[10px] font-semibold text-white">{chip.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
