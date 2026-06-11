"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useRef, useState } from "react";
import type { IsbSection } from "@/lib/instashop-blog-config";
import { IsbMagneticButton } from "./isb-magnetic-button";
import { IsbSectionNav } from "./isb-section-nav";

function Prose({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 48)} className="text-[1.0625rem] leading-[1.78] text-white/62">
          {p}
        </p>
      ))}
    </div>
  );
}

function SectionShell({
  section,
  children,
  className = "",
}: {
  section: IsbSection;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`scroll-mt-28 border-b border-white/[0.05] py-14 lg:py-20 ${className}`}
    >
      <h2 className="text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl">{section.title}</h2>
      <div className="mt-8">{children}</div>
    </motion.section>
  );
}

function SpotlightTable({ section }: { section: IsbSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(16,185,129,0.12), transparent 65%)`;

  if (!section.table) return null;

  return (
    <SectionShell section={section}>
      <div
        ref={ref}
        onMouseMove={(e) => {
          if (!ref.current) return;
          const rect = ref.current.getBoundingClientRect();
          mx.set(e.clientX - rect.left);
          my.set(e.clientY - rect.top);
        }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.04]">
                {section.table.headers.map((h) => (
                  <th key={h} className="px-4 py-4 font-semibold text-emerald-300/90">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row, ri) => (
                <motion.tr
                  key={ri}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.03 }}
                  className="border-b border-white/[0.05] transition-colors hover:bg-emerald-500/[0.04]"
                >
                  {row.cells.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3.5 text-white/65">
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  );
}

function SectionRenderer({ section }: { section: IsbSection }) {
  switch (section.variant) {
    case "cinematic-prose":
      return (
        <SectionShell section={section} className="bg-black">
          <Prose paragraphs={section.paragraphs ?? []} />
        </SectionShell>
      );

    case "story-scroll":
      return (
        <SectionShell section={section} className="bg-[#040806]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Prose paragraphs={section.paragraphs ?? []} />
            {section.image ? (
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="520px" />
              </motion.div>
            ) : null}
          </div>
        </SectionShell>
      );

    case "bento-bullets":
      return (
        <SectionShell section={section} className="bg-black">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(section.bullets ?? []).map((item, i) => (
              <motion.div
                key={item.slice(0, 40)}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-emerald-500/10 to-transparent" : ""
                }`}
              >
                <p className="text-sm leading-relaxed text-white/70">{item}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      );

    case "horizontal-cards":
      return (
        <SectionShell section={section} className="bg-[#050a08]">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {(section.bullets ?? []).map((item, i) => (
              <motion.article
                key={item.slice(0, 40)}
                initial={{ opacity: 0, x: 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="w-[min(85vw,320px)] shrink-0 snap-start rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.08] to-transparent p-6"
              >
                <span className="text-xs font-bold text-emerald-400">0{i + 1}</span>
                <p className="mt-3 text-sm leading-relaxed text-white/72">{item}</p>
              </motion.article>
            ))}
          </div>
        </SectionShell>
      );

    case "morph-prose":
      return (
        <SectionShell section={section} className="relative overflow-hidden bg-black">
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-40"
            animate={{
              background: [
                "radial-gradient(circle at 10% 20%, rgba(16,185,129,0.15), transparent 45%)",
                "radial-gradient(circle at 90% 30%, rgba(26,105,253,0.12), transparent 45%)",
                "radial-gradient(circle at 10% 20%, rgba(16,185,129,0.15), transparent 45%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            aria-hidden
          />
          <div className="relative">
            <Prose paragraphs={section.paragraphs ?? []} />
            <div className="mt-12 space-y-14">
              {(section.subsections ?? []).map((sub, si) => (
                <FeatureSubsection key={sub.title} sub={sub} index={si} />
              ))}
            </div>
          </div>
        </SectionShell>
      );

    case "spotlight-table":
      return <SpotlightTable section={section} />;

    case "timeline":
      return (
        <SectionShell section={section} className="bg-[#040806]">
          <Prose paragraphs={section.paragraphs ?? []} />
          <ol className="relative mt-10 space-y-0 border-l border-emerald-500/30 pl-8">
            {[
              "App complexity & feature depth",
              "Platform strategy (native vs cross-platform)",
              "Design & UX investment",
              "Team location & hourly rates",
              "Technology stack choices",
              "QA & post-launch operations",
            ].map((step, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative py-5"
              >
                <span className="absolute -left-[2.05rem] top-6 size-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <p className="text-sm font-semibold text-white/85">{step}</p>
              </motion.li>
            ))}
          </ol>
        </SectionShell>
      );

    case "flip-matrix":
      return (
        <SectionShell section={section} className="bg-black">
          <div className="grid gap-4 md:grid-cols-2">
            {(section.table?.rows ?? []).map((row, i) => (
              <motion.div
                key={row.cells[0]}
                initial={{ opacity: 0, rotateX: -8 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ rotateY: 4, scale: 1.02 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                style={{ perspective: 1000 }}
              >
                <p className="text-lg font-bold text-emerald-300">{row.cells[0]}</p>
                <p className="mt-3 text-sm text-white/55">{row.cells[1]}</p>
                <p className="mt-4 text-xl font-bold text-white">{row.cells[2]}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      );

    case "platform-scroll":
      return (
        <SectionShell section={section} className="bg-[#050a08]">
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-10 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {(section.table?.rows ?? []).map((row, i) => (
              <motion.div
                key={row.cells[0]}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-[min(88vw,360px)] shrink-0 snap-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-6"
              >
                <h3 className="text-xl font-bold text-white">{row.cells[0]}</h3>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-emerald-400">Pros</p>
                <p className="mt-2 text-sm text-white/60">{row.cells[1]}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-rose-400/80">Cons</p>
                <p className="mt-2 text-sm text-white/55">{row.cells[2]}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-cyan-400/80">Cost</p>
                <p className="mt-2 text-sm text-white/65">{row.cells[3]}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      );

    case "glass-prose":
      return (
        <SectionShell section={section} className="bg-black">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl md:p-10">
            <Prose paragraphs={section.paragraphs ?? []} />
          </div>
        </SectionShell>
      );

    case "region-grid":
      return (
        <SectionShell section={section} className="bg-[#040806]">
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(section.table?.rows ?? []).map((row, i) => (
              <motion.div
                key={row.cells[0]}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-white/10 bg-black/40 p-5"
              >
                <p className="font-bold text-white">{row.cells[0]}</p>
                <p className="mt-2 text-sm text-emerald-300">{row.cells[1]}</p>
                <p className="mt-2 text-lg font-semibold text-white/90">{row.cells[2]}</p>
                <p className="mt-2 text-xs text-white/45">{row.cells[3]}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      );

    case "fade-prose":
      return (
        <SectionShell section={section} className="bg-black">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Prose paragraphs={section.paragraphs ?? []} />
          </motion.div>
        </SectionShell>
      );

    case "stat-counters":
      return (
        <SectionShell section={section} className="bg-[#050a08]">
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {(section.stats ?? []).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border border-white/10 px-4 py-6 text-center"
              >
                <p className="text-2xl font-bold text-emerald-300">{stat.value}</p>
                <p className="mt-2 text-xs text-white/45">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      );

    case "float-layers":
      return (
        <SectionShell section={section} className="relative overflow-hidden bg-black">
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="pointer-events-none absolute right-8 top-8 size-32 rounded-full bg-emerald-500/10 blur-2xl"
            aria-hidden
          />
          <Prose paragraphs={section.paragraphs ?? []} />
        </SectionShell>
      );

    case "svg-accent":
      return (
        <SectionShell section={section} className="bg-[#040806]">
          <svg viewBox="0 0 400 40" className="mb-8 h-10 w-full max-w-md" aria-hidden>
            <motion.path
              d="M0 20 Q100 0 200 20 T400 20"
              fill="none"
              stroke="url(#isb-line)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            <defs>
              <linearGradient id="isb-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#1a69fd" />
              </linearGradient>
            </defs>
          </svg>
          <Prose paragraphs={section.paragraphs ?? []} />
        </SectionShell>
      );

    case "immersive-cta":
      return (
        <SectionShell section={section} className="relative overflow-hidden bg-gradient-to-br from-emerald-950/40 via-black to-primary/10">
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {(section.stats ?? []).map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-emerald-500/25 bg-black/50 p-6 text-center backdrop-blur-md"
              >
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10">
            <IsbMagneticButton href="/contact-us#free-consultation">Get a cost estimate</IsbMagneticButton>
          </div>
        </SectionShell>
      );

    case "spotlight-cta": {
      const spotRef = useRef<HTMLDivElement>(null);
      const mx = useMotionValue(0);
      const my = useMotionValue(0);
      const spot = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgba(16,185,129,0.18), transparent 60%)`;
      return (
        <SectionShell section={section} className="bg-black">
          <div
            ref={spotRef}
            onMouseMove={(e) => {
              if (!spotRef.current) return;
              const rect = spotRef.current.getBoundingClientRect();
              mx.set(e.clientX - rect.left);
              my.set(e.clientY - rect.top);
            }}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/20 p-8 md:p-12"
          >
            <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
            <div className="relative">
              <Prose paragraphs={section.paragraphs ?? []} />
              <div className="mt-8 flex flex-wrap gap-4">
                <IsbMagneticButton href="/contact-us#free-consultation">Contact Us</IsbMagneticButton>
                <IsbMagneticButton href="/grocery-delivery-services" variant="ghost">
                  Grocery App Services
                </IsbMagneticButton>
              </div>
            </div>
          </div>
        </SectionShell>
      );
    }

    case "faq-accordion":
      return <FaqSection section={section} />;

    default:
      return (
        <SectionShell section={section}>
          <Prose paragraphs={section.paragraphs ?? []} />
        </SectionShell>
      );
  }
}

function splitFeatureItem(item: string) {
  const colon = item.indexOf(":");
  if (colon === -1) return { title: item, body: "" };
  return { title: item.slice(0, colon).trim(), body: item.slice(colon + 1).trim() };
}

function FeatureItemCard({
  item,
  index,
  accent,
}: {
  item: string;
  index: number;
  accent: "emerald" | "cyan" | "violet";
}) {
  const { title, body } = splitFeatureItem(item);
  const styles = {
    emerald: "border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-200",
    cyan: "border-cyan-500/30 bg-cyan-500/[0.08] text-cyan-200",
    violet: "border-violet-500/30 bg-violet-500/[0.08] text-violet-200",
  } as const;

  return (
    <motion.div
      key={item.slice(0, 40)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={`rounded-2xl border p-5 ${styles[accent]}`}
    >
      <p className="text-sm font-semibold leading-snug text-white">{title}</p>
      {body ? <p className="mt-2 text-sm leading-relaxed text-white/78">{body}</p> : null}
    </motion.div>
  );
}

function FeatureSubsection({ sub, index }: { sub: { title: string; items: readonly string[] }; index: number }) {
  if (index === 0) {
    return (
      <div>
        <h3 className="text-lg font-bold text-emerald-300">{sub.title}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sub.items.map((item, i) => (
            <FeatureItemCard key={item.slice(0, 40)} item={item} index={i} accent="emerald" />
          ))}
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div>
        <h3 className="text-lg font-bold text-cyan-300">{sub.title}</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sub.items.map((item, i) => (
            <FeatureItemCard key={item.slice(0, 40)} item={item} index={i} accent="cyan" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-lg font-bold text-violet-300">{sub.title}</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {sub.items.map((item, i) => (
          <FeatureItemCard key={item.slice(0, 40)} item={item} index={i} accent="violet" />
        ))}
      </div>
    </div>
  );
}

function FaqSection({ section }: { section: IsbSection }) {
  const [open, setOpen] = useState(0);

  return (
    <SectionShell section={section} className="bg-[#050a08]">
      <div className="space-y-3">
        {(section.faqs ?? []).map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white"
                aria-expanded={isOpen}
              >
                {faq.question}
                <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-emerald-400">
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="border-t border-white/[0.06] px-5 py-4 text-sm leading-relaxed text-white/58">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </SectionShell>
  );
}

type RelatedArticle = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  link: string;
  image: string;
};

type IsbArticleBodyProps = {
  sections: readonly IsbSection[];
  navItems: readonly { id: string; label: string }[];
  relatedArticles: readonly RelatedArticle[];
  pageCta: {
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
};

export function IsbArticleBody({ sections, navItems, relatedArticles, pageCta }: IsbArticleBodyProps) {
  return (
    <div className="bg-black text-primary-foreground">
      <div className="container-app grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16 lg:py-16">
        <div className="min-w-0">
          {sections.map((section) => (
            <SectionRenderer key={section.id} section={section} />
          ))}
        </div>
        <IsbSectionNav items={navItems} />
      </div>

      <section className="border-t border-white/[0.06] bg-[#030806]">
        <div className="container-app grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:items-end lg:py-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">Work with ReapMind</p>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{pageCta.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/50">{pageCta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <IsbMagneticButton href={pageCta.primaryHref}>{pageCta.primaryLabel}</IsbMagneticButton>
            <IsbMagneticButton href={pageCta.secondaryHref} variant="ghost">
              {pageCta.secondaryLabel}
            </IsbMagneticButton>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-black py-14 lg:py-16">
        <div className="container-app">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-lg font-semibold text-white">Read more blogs</h2>
            <Link href="/blogs" className="text-sm text-white/45 transition-colors hover:text-emerald-300">
              All insights →
            </Link>
          </div>
          <div className="mt-8 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {relatedArticles.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-[min(88vw,340px)] shrink-0 snap-start"
              >
                <Link href={post.link} className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
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
                    <h3 className="text-base font-semibold text-white/90 transition-colors group-hover:text-emerald-300">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">{post.excerpt}</p>
                    <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
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
