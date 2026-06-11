"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import type { DsbSection } from "@/lib/doorstep-banking-blog-config";
import { DsbMagneticButton } from "./dsb-magnetic-button";
import { DsbSectionNav } from "./dsb-section-nav";

function Prose({ paragraphs, stagger = false }: { paragraphs: readonly string[]; stagger?: boolean }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <motion.p
          key={p.slice(0, 48)}
          initial={stagger ? { opacity: 0, y: 16 } : undefined}
          whileInView={stagger ? { opacity: 1, y: 0 } : undefined}
          viewport={stagger ? { once: true } : undefined}
          transition={stagger ? { delay: i * 0.07 } : undefined}
          className="text-[1.0625rem] leading-[1.78] text-white/65"
        >
          {p}
        </motion.p>
      ))}
    </div>
  );
}

function Shell({
  section,
  children,
  className = "",
}: {
  section: DsbSection;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5 }}
      className={`scroll-mt-28 border-b border-white/[0.05] py-14 lg:py-18 ${className}`}
    >
      <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">{section.title}</h2>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}

function splitItem(item: string) {
  const i = item.indexOf(":");
  if (i === -1) return { title: item, body: "" };
  return { title: item.slice(0, i).trim(), body: item.slice(i + 1).trim() };
}

function AuroraProse({ section }: { section: DsbSection }) {
  return (
    <Shell section={section} className="relative overflow-hidden bg-[#03080c]">
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-0 h-64 w-1/2 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ x: [0, 60, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity }}
        aria-hidden
      />
      <div className="relative">
        <Prose paragraphs={section.paragraphs ?? []} stagger />
      </div>
    </Shell>
  );
}

function InsightRail({ section }: { section: DsbSection }) {
  const insights = section.nestedSubsections?.subsections ?? [];

  return (
    <Shell section={section} className="bg-black">
      <Prose paragraphs={section.paragraphs ?? []} />
      {section.image ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative my-10 aspect-[1024/380] overflow-hidden rounded-2xl border border-cyan-500/20"
        >
          <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="900px" />
        </motion.div>
      ) : null}
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {insights.map((insight, i) => (
          <motion.article
            key={insight.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="w-[min(88vw,300px)] shrink-0 snap-start rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-500/[0.08] to-transparent p-6 backdrop-blur-md"
          >
            <p className="text-sm font-bold text-cyan-300">{insight.title.replace(":", "")}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/68">{insight.items[0]}</p>
          </motion.article>
        ))}
      </div>
    </Shell>
  );
}

function PlayerOrbit({ section }: { section: DsbSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);

  return (
    <Shell section={section} className="bg-[#040a10]">
      <div ref={ref} className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-8 space-y-4">
            {(section.subsections ?? []).map((sub, i) => (
              <motion.div
                key={sub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-semibold text-sky-300">{sub.title.replace(":", "")}</p>
                <p className="mt-2 text-sm text-white/65">{sub.items[0]}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {section.image ? (
          <motion.div style={{ rotate }} className="relative mx-auto aspect-[1024/591] w-full max-w-lg">
            <div className="absolute -inset-4 rounded-full bg-cyan-500/10 blur-2xl" aria-hidden />
            <div className="relative h-full overflow-hidden rounded-2xl border border-cyan-500/25">
              <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="480px" />
            </div>
          </motion.div>
        ) : null}
      </div>
    </Shell>
  );
}

function PrismFeatures({ section }: { section: DsbSection }) {
  const [tab, setTab] = useState(0);
  const subs = section.subsections ?? [];

  return (
    <Shell section={section} className="bg-black">
      <Prose paragraphs={section.paragraphs ?? []} />
      {section.image ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative my-10 aspect-[1024/558] overflow-hidden rounded-2xl border border-white/10"
        >
          <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="900px" />
        </motion.div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {subs.map((sub, i) => (
          <button
            key={sub.title}
            type="button"
            onClick={() => setTab(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              tab === i ? "bg-sky-600 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]" : "bg-white/[0.05] text-white/50"
            }`}
          >
            {sub.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, rotateY: -6 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: 6 }}
          transition={{ duration: 0.3 }}
          className="mt-6 grid gap-4 sm:grid-cols-2"
          style={{ perspective: 800 }}
        >
          {subs[tab]?.items.map((item) => {
            const { title, body } = splitItem(item);
            return (
              <div key={item.slice(0, 40)} className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.06] p-5">
                <p className="text-sm font-semibold text-white">{title}</p>
                {body ? <p className="mt-2 text-sm leading-relaxed text-white/75">{body}</p> : null}
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Shell>
  );
}

function FactorTimeline({ section }: { section: DsbSection }) {
  const [active, setActive] = useState(0);
  const subs = section.subsections ?? [];

  return (
    <Shell section={section} className="bg-[#040a10]">
      <Prose paragraphs={section.paragraphs ?? []} />
      {section.image ? (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative my-10 mx-auto max-w-md aspect-square overflow-hidden rounded-2xl border border-cyan-500/15"
        >
          <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="400px" />
        </motion.div>
      ) : null}
      <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
        <ol className="relative space-y-0 border-l border-cyan-500/30 pl-5">
          {subs.map((sub, i) => (
            <li key={sub.title} className="relative">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`block w-full py-4 pr-2 text-left text-sm transition-colors ${
                  active === i ? "font-semibold text-cyan-300" : "text-white/40 hover:text-white/65"
                }`}
              >
                {sub.title.replace(":", "")}
              </button>
              <motion.span
                className="absolute -left-[1.35rem] top-5 size-2.5 rounded-full bg-cyan-400"
                animate={{
                  scale: active === i ? 1.4 : 1,
                  boxShadow: active === i ? "0 0 14px rgba(34,211,238,0.9)" : "0 0 0 transparent",
                }}
              />
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
          >
            <h3 className="text-base font-bold text-sky-300">{subs[active]?.title}</h3>
            <ul className="mt-4 space-y-3">
              {subs[active]?.items.map((item) => {
                const { title, body } = splitItem(item);
                return (
                  <li key={item.slice(0, 40)} className="text-sm text-white/68">
                    {body ? (
                      <>
                        <span className="font-medium text-white/85">{title}:</span> {body}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Shell>
  );
}

function SpectrumCost({ section }: { section: DsbSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Shell section={section} className="bg-black">
      <div ref={ref}>
        <Prose paragraphs={section.paragraphs ?? []} stagger />
        {section.image ? (
          <div className="relative my-10 aspect-[1024/380] overflow-hidden rounded-2xl border border-amber-500/20">
            <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="900px" />
          </div>
        ) : null}
        <div className="relative mt-10 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div className="h-full bg-gradient-to-r from-cyan-400 via-sky-500 to-amber-400" style={{ width: barWidth }} />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {(section.priceBands ?? []).map((band, i) => (
            <motion.div
              key={band.range}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-cyan-500/[0.06] to-transparent p-6 text-center"
            >
              <p className="text-2xl font-bold text-white">{band.range}</p>
              <p className="mt-2 text-sm text-white/55">{band.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function GlassPartner({ section }: { section: DsbSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spot = useMotionTemplate`radial-gradient(500px circle at ${mx}px ${my}px, rgba(6,182,212,0.18), transparent 65%)`;

  return (
    <Shell section={section}>
      <div
        ref={ref}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const r = ref.current.getBoundingClientRect();
          mx.set(e.clientX - r.left);
          my.set(e.clientY - r.top);
        }}
        className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-10"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
        <svg className="absolute left-6 top-6 h-16 w-16 opacity-30" viewBox="0 0 64 64" aria-hidden>
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="2"
            strokeDasharray="4 6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>
        <div className="relative">
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-8 flex flex-wrap gap-4">
            <DsbMagneticButton href="/contact-us#free-consultation">Contact Us</DsbMagneticButton>
            <DsbMagneticButton href="/mobile-banking-app-development-company-in-india" variant="ghost">
              Mobile Banking Services
            </DsbMagneticButton>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function WaveConclusion({ section }: { section: DsbSection }) {
  return (
    <Shell section={section} className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.12), transparent 50%)",
            "radial-gradient(circle at 80% 40%, rgba(245,158,11,0.1), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(6,182,212,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 11, repeat: Infinity }}
        aria-hidden
      />
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <Prose paragraphs={section.paragraphs ?? []} />
      </motion.div>
    </Shell>
  );
}

function FaqCascade({ section }: { section: DsbSection }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Shell section={section} className="bg-[#040a10]">
      <div className="space-y-3">
        {(section.faqs ?? []).map((faq, i) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black/40"
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
            >
              {faq.question}
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-cyan-400">
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/[0.06] px-5 py-4"
                >
                  <p className="text-sm leading-relaxed text-white/65">{faq.answer}</p>
                  {faq.bullets?.length ? (
                    <ul className="mt-4 space-y-3">
                      {faq.bullets.map((b) => {
                        const { title, body } = splitItem(b);
                        return (
                          <li key={b.slice(0, 40)} className="flex gap-3 text-sm text-white/68">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" aria-hidden />
                            <span>
                              <span className="font-medium text-white/85">{title}:</span> {body}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

function SectionView({ section }: { section: DsbSection }) {
  switch (section.variant) {
    case "aurora-prose":
      return <AuroraProse section={section} />;
    case "insight-rail":
      return <InsightRail section={section} />;
    case "player-orbit":
      return <PlayerOrbit section={section} />;
    case "prism-features":
      return <PrismFeatures section={section} />;
    case "factor-timeline":
      return <FactorTimeline section={section} />;
    case "spectrum-cost":
      return <SpectrumCost section={section} />;
    case "glass-partner":
      return <GlassPartner section={section} />;
    case "wave-conclusion":
      return <WaveConclusion section={section} />;
    case "faq-cascade":
      return <FaqCascade section={section} />;
    default:
      return (
        <Shell section={section}>
          <Prose paragraphs={section.paragraphs ?? []} />
        </Shell>
      );
  }
}

type Related = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  link: string;
  image: string;
};

export function DsbArticleBody({
  sections,
  navItems,
  relatedArticles,
  pageCta,
}: {
  sections: readonly DsbSection[];
  navItems: readonly { id: string; label: string }[];
  relatedArticles: readonly Related[];
  pageCta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}) {
  return (
    <div className="bg-black text-white">
      <div className="container-app grid gap-12 py-12 lg:grid-cols-[1fr_200px] lg:py-16">
        <div>{sections.map((s) => <SectionView key={s.id} section={s} />)}</div>
        <DsbSectionNav items={navItems} />
      </div>

      <section className="border-t border-white/[0.06] bg-[#03080c] py-16">
        <div className="container-app grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Work with ReapMind</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{pageCta.title}</h2>
            <p className="mt-3 max-w-xl text-white/50">{pageCta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <DsbMagneticButton href={pageCta.primaryHref}>{pageCta.primaryLabel}</DsbMagneticButton>
            <DsbMagneticButton href={pageCta.secondaryHref} variant="ghost">
              {pageCta.secondaryLabel}
            </DsbMagneticButton>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-14">
        <div className="container-app">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold">Read more blogs</h2>
            <Link href="/blogs" className="text-sm text-white/45 hover:text-cyan-300">
              All insights →
            </Link>
          </div>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {relatedArticles.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="w-[min(88vw,340px)] shrink-0 snap-start"
              >
                <Link
                  href={post.link}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                >
                  <div className="relative aspect-[1024/599] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="340px"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white/90 group-hover:text-cyan-300">{post.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-white/70">{post.excerpt}</p>
                    <p className="mt-4 text-xs uppercase tracking-wider text-white/45">
                      {post.author} · {post.date}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
