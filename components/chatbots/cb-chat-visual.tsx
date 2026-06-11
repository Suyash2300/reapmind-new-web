"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { CB_ACCENT, CB_CYAN } from "@/lib/chatbots-config";

const smoothEase = [0.22, 1, 0.36, 1] as const;

const MESSAGES = [
  { role: "bot", text: "Hi! How can I help you today?" },
  { role: "user", text: "I need help with my order" },
  { role: "bot", text: "Sure — I found your order #4821. It's out for delivery." },
  { role: "user", text: "Perfect, thanks!" },
] as const;

export function CbChatVisual() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      className="rounded-[1.75rem] border border-white/10 bg-black/55 p-5 backdrop-blur-md sm:p-6"
      aria-label="Chatbot conversation preview"
    >
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-lg"
          style={{ backgroundColor: `${CB_ACCENT}22`, color: CB_ACCENT }}
          aria-hidden
        >
          🤖
        </div>
        <div>
          <p className="text-sm font-bold text-white">ReapMind Assistant</p>
          <p className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Online · 24/7
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {MESSAGES.map((msg, i) => (
          <motion.div
            key={i}
            initial={reducedMotion ? false : { opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.18, duration: 0.45, ease: smoothEase }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed sm:text-sm ${
                msg.role === "user"
                  ? "rounded-br-md text-white"
                  : "rounded-bl-md border border-white/10 bg-white/5 text-white/80"
              }`}
              style={
                msg.role === "user"
                  ? { background: `linear-gradient(135deg, ${CB_ACCENT}, ${CB_CYAN})` }
                  : undefined
              }
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
        <span className="flex-1 text-xs text-white/35">Type a message…</span>
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg text-xs text-white"
          style={{ backgroundColor: CB_ACCENT }}
          aria-hidden
        >
          ↑
        </span>
      </div>
    </div>
  );
}
