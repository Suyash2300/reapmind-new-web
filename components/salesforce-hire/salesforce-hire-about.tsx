"use client";

import { motion } from "framer-motion";
import { salesforceHireConfig } from "@/lib/salesforce-hire-config";

const leftBullets = salesforceHireConfig.about.bulletsLeft;
const rightBullets = salesforceHireConfig.about.bulletsRight;

function CheckIcon({ delay }: { delay: number }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#00A1E0]/15" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        <motion.path
          d="M8 12l3 3 5-6"
          fill="none"
          stroke="#00A1E0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.4 }}
        />
      </svg>
    </span>
  );
}

export function SalesforceHireAbout() {
  const { about } = salesforceHireConfig;

  return (
    <section className="section-app overflow-hidden bg-surface-dark py-32">
      <div className="container-app">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          whileInView={{ clipPath: "inset(0 0 0% 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-h2 font-black text-white md:text-display">{about.title}</h2>
          <p className="mt-8 text-para leading-relaxed text-white/70">{about.description}</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {[leftBullets, rightBullets].map((column, col) => (
            <motion.ul
              key={col}
              initial={{ opacity: 0, x: col === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {column.map((text, i) => (
                <motion.li
                  key={text}
                  initial={{ opacity: 0, rotateX: -30 }}
                  whileInView={{ opacity: 1, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/50 px-5 py-4"
                  style={{ transformPerspective: 600 }}
                >
                  <CheckIcon delay={0.2 + col * 0.15 + i * 0.1} />
                  <span className="text-sm font-medium text-white/85">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </section>
  );
}
