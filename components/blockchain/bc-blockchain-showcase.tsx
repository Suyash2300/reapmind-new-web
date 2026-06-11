"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { BC_ACCENT, BC_GOLD } from "@/lib/blockchain-config";

const NODES = [
  { x: 12, y: 22, id: "n1" },
  { x: 38, y: 12, id: "n2" },
  { x: 62, y: 28, id: "n3" },
  { x: 88, y: 18, id: "n4" },
  { x: 50, y: 48, id: "n5" },
] as const;

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [2, 4],
  [0, 4],
];

type BcBlockchainShowcaseProps = {
  className?: string;
};

/** Overview panel — chain network + real ReapMind fintech case study (no stock blog art). */
export function BcBlockchainShowcase({ className = "" }: BcBlockchainShowcaseProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);
  const portfolioSrc = imgFailed ? "/portfolio/municipal-bank.png" : "/generative-ai/Municipal-Bank-hero-image.png";

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#060912] shadow-[0_32px_80px_-30px_rgba(98,126,234,0.45)]">
        <div className="relative border-b border-white/10 bg-gradient-to-br from-[#0d1424] to-black p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#627EEA]">Distributed ledger</p>
              <p className="text-sm font-bold text-white">Multi-chain architecture</p>
            </div>
            <div className="flex gap-1.5">
              {[
                { label: "ETH", color: BC_ACCENT },
                { label: "BTC", color: BC_GOLD },
                { label: "BSC", color: "#F0B90B" },
              ].map((c) => (
                <span
                  key={c.label}
                  className="rounded-md px-2 py-0.5 text-[10px] font-bold text-white"
                  style={{ backgroundColor: `${c.color}33`, color: c.color }}
                >
                  {c.label}
                </span>
              ))}
            </div>
          </div>

          <svg viewBox="0 0 100 56" className="mt-4 h-28 w-full sm:h-32" aria-hidden>
            {EDGES.map(([a, b], i) => (
              <motion.line
                key={`${a}-${b}`}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke={BC_ACCENT}
                strokeOpacity={0.35}
                strokeWidth={0.6}
                initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.6 }}
              />
            ))}
            {NODES.map((node, i) => (
              <motion.g
                key={node.id}
                initial={reducedMotion ? false : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
              >
                <circle cx={node.x} cy={node.y} r={4} fill={BC_ACCENT} fillOpacity={0.25} />
                <circle cx={node.x} cy={node.y} r={2.2} fill={BC_ACCENT} />
              </motion.g>
            ))}
          </svg>

          <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10px] sm:text-[11px]">
            {[
              { hash: "0x7f3a…e91c", txs: "128 txs" },
              { hash: "0x2b8d…4f02", txs: "96 txs" },
              { hash: "0x9c1e…8a77", txs: "214 txs" },
            ].map((block, i) => (
              <motion.div
                key={block.hash}
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                className="rounded-lg border border-white/10 bg-black/50 px-2 py-2"
              >
                <p className="truncate text-[#627EEA]">{block.hash}</p>
                <p className="mt-0.5 text-white/40">{block.txs}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6">
          <p className="text-[10px] font-bold uppercase tracking-wider text-white/45">Shipped with ReapMind</p>
          <div className="relative mt-3 aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black">
            <Image
              src={portfolioSrc}
              alt="Municipal Bank — ReapMind FinTech application"
              fill
              quality={92}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover object-top"
              onError={() => setImgFailed(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-sm font-bold text-white">Municipal Banking</p>
              <p className="text-xs text-white/60">Secure digital banking & transactions</p>
            </div>
          </div>
          <Link
            href="/portfolio/muncipal-banking"
            className="mt-4 inline-flex text-xs font-semibold text-[#627EEA] transition-colors hover:text-white"
          >
            View case study →
          </Link>
        </div>
      </div>
    </div>
  );
}
