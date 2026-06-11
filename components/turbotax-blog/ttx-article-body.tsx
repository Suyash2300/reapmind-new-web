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
import type { TtxSection } from "@/lib/turbotax-blog-config";
import { TtxMagneticButton } from "./ttx-magnetic-button";
import { TtxSectionNav } from "./ttx-section-nav";

function Prose({ paragraphs, stagger = false }: { paragraphs: readonly string[]; stagger?: boolean }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <motion.p
          key={p.slice(0, 48)}
          initial={stagger ? { opacity: 0, x: -14 } : undefined}
          whileInView={stagger ? { opacity: 1, x: 0 } : undefined}
          viewport={stagger ? { once: true } : undefined}
          transition={stagger ? { delay: i * 0.05 } : undefined}
          className={`text-[1.0625rem] leading-[1.78] text-white/65 ${p === "Wrapping up!" ? "text-lg font-semibold text-lime-300" : ""}`}
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
  section: TtxSection;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 26 }}
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

function LedgerProse({ section }: { section: TtxSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const dash = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Shell section={section} className="relative bg-[#08060f]">
      <motion.div
        className="pointer-events-none absolute left-3 top-0 w-px bg-gradient-to-b from-indigo-500 via-lime-400 to-transparent"
        style={{ scaleY: dash, transformOrigin: "top" }}
        aria-hidden
      />
      <div ref={ref} className="pl-6">
        <Prose paragraphs={section.paragraphs ?? []} stagger />
      </div>
    </Shell>
  );
}

function ParallaxBand({ section }: { section: TtxSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <Shell section={section} className="bg-black">
      <div ref={ref} className={section.image ? "grid gap-10 lg:grid-cols-2 lg:items-center" : ""}>
        <Prose paragraphs={section.paragraphs ?? []} stagger />
        {section.image ? (
          <motion.div style={{ y: imgY }} className="relative aspect-[1024/512] overflow-hidden rounded-2xl border border-indigo-500/20 lg:aspect-auto lg:min-h-[280px]">
            <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="520px" />
          </motion.div>
        ) : null}
      </div>
    </Shell>
  );
}

function StorySteps({ section }: { section: TtxSection }) {
  return (
    <Shell section={section} className="bg-[#0a0812]">
      <Prose paragraphs={section.paragraphs ?? []} />
      <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {(section.steps ?? []).map((step, i) => (
          <motion.div
            key={step.slice(0, 40)}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="w-[min(85vw,280px)] shrink-0 snap-center rounded-2xl border border-indigo-500/25 bg-gradient-to-b from-indigo-600/15 to-transparent p-6 backdrop-blur-md"
          >
            <span className="text-xs font-bold text-lime-400">0{i + 1}</span>
            <p className="mt-3 text-sm leading-relaxed text-white/72">{step}</p>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

function MatrixGlass({ section }: { section: TtxSection }) {
  const [tab, setTab] = useState(0);
  const tables = section.tables ?? [];
  const activeImage = section.tabImages?.[tab] ?? section.image;
  const isIconImage = activeImage?.includes("/icons/");

  return (
    <Shell section={section} className="bg-black">
      <Prose paragraphs={section.paragraphs ?? []} />
      {activeImage ? (
        <div
          className={`relative my-10 overflow-hidden rounded-2xl border border-white/10 ${
            isIconImage
              ? "mx-auto aspect-square max-w-sm bg-gradient-to-b from-indigo-950/50 to-black p-10"
              : "aspect-[1024/686]"
          }`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.28 }}
              className="relative size-full"
            >
              <Image
                src={activeImage}
                alt={section.imageAlt ?? ""}
                fill
                className={isIconImage ? "object-contain" : "object-cover"}
                sizes={isIconImage ? "320px" : "900px"}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {tables.map((t, i) => (
          <button
            key={t.title}
            type="button"
            onClick={() => setTab(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              tab === i ? "bg-indigo-600 text-white" : "bg-white/[0.05] text-white/50 hover:text-white"
            }`}
          >
            {t.title.replace(":", "")}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-indigo-500/10">
                  {tables[tab]?.table.headers.map((h) => (
                    <th key={h} className="px-5 py-4 font-semibold text-indigo-200">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tables[tab]?.table.rows.map((row, ri) => (
                  <motion.tr
                    key={ri}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: ri * 0.04 }}
                    className="border-b border-white/[0.05] hover:bg-indigo-500/[0.04]"
                  >
                    {row.cells.map((cell, ci) => (
                      <td key={ci} className={`px-5 py-3.5 ${ci === 0 ? "font-medium text-white/85" : "text-white/60"}`}>
                        {cell}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </Shell>
  );
}

function ModelDual({ section }: { section: TtxSection }) {
  return (
    <Shell section={section} className="bg-[#0a0812]">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Prose paragraphs={section.paragraphs ?? []} stagger />
        {section.image ? (
          <motion.div
            initial={{ opacity: 0, rotate: -3 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[1024/512] overflow-hidden rounded-2xl border border-lime-400/20 shadow-[0_20px_60px_rgba(163,230,53,0.08)]"
          >
            <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="480px" />
          </motion.div>
        ) : null}
      </div>
    </Shell>
  );
}

function BenefitBento({ section }: { section: TtxSection }) {
  const spans = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2", "md:col-span-2"];

  return (
    <Shell section={section} className="bg-black">
      <Prose paragraphs={section.paragraphs ?? []} />
      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {(section.bullets ?? []).map((item, i) => (
          <motion.div
            key={item.slice(0, 40)}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className={`rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/10 to-transparent p-5 backdrop-blur-sm ${spans[i] ?? ""}`}
          >
            <p className="text-sm leading-relaxed text-white/70">{item}</p>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

function FactorDeck({ section }: { section: TtxSection }) {
  const [flipped, setFlipped] = useState<number | null>(0);
  const subs = section.subsections ?? [];

  return (
    <Shell section={section} className="bg-[#08060f]">
      <Prose paragraphs={section.paragraphs ?? []} />
      {section.image ? (
        <div className="relative my-8 aspect-[1024/398] overflow-hidden rounded-xl border border-white/10">
          <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="900px" />
        </div>
      ) : null}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subs.map((sub, i) => (
          <motion.button
            key={sub.title}
            type="button"
            onClick={() => setFlipped(flipped === i ? null : i)}
            initial={{ opacity: 0, rotateX: 20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={{ y: -4 }}
            className={`min-h-[140px] rounded-2xl border p-5 text-left transition-colors ${
              flipped === i ? "border-lime-400/40 bg-lime-400/[0.06]" : "border-white/10 bg-white/[0.03]"
            }`}
            style={{ perspective: 800 }}
          >
            <p className="text-sm font-bold text-indigo-300">{sub.title}</p>
            <AnimatePresence>
              {flipped === i ? (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-sm leading-relaxed text-white/65"
                >
                  {sub.paragraphs[0]}
                </motion.p>
              ) : (
                <p className="mt-2 text-xs text-white/40">Tap to reveal details →</p>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
    </Shell>
  );
}

function TierStack({ section }: { section: TtxSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const y0 = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 1], [12, 4]);
  const y2 = useTransform(scrollYProgress, [0, 1], [24, 8]);
  const offsets = [y0, y1, y2];

  return (
    <Shell section={section} className="bg-black">
      <Prose paragraphs={section.paragraphs ?? []} />
      {section.image ? (
        <div className="relative my-8 aspect-[1024/346] overflow-hidden rounded-xl border border-indigo-500/15">
          <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="900px" />
        </div>
      ) : null}
      <div ref={ref} className="relative mt-10 space-y-4 lg:space-y-0">
        {(section.tiers ?? []).map((tier, i) => (
          <motion.div
            key={tier.name}
            style={{ y: offsets[i] ?? y0, zIndex: 3 - i }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl border p-7 lg:-mt-6 lg:first:mt-0 ${
              i === 1
                ? "border-indigo-500/40 bg-gradient-to-r from-indigo-600/20 to-indigo-500/5 shadow-[0_0_50px_rgba(99,102,241,0.15)]"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="text-lg font-bold text-white">{tier.name}</p>
              <p className="text-xl font-bold text-lime-300">{tier.price}</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{tier.description}</p>
          </motion.div>
        ))}
      </div>
    </Shell>
  );
}

function TipCarousel({ section }: { section: TtxSection }) {
  return (
    <Shell section={section} className="bg-[#0a0812]">
      <Prose paragraphs={section.paragraphs ?? []} />
      {section.image ? (
        <div className="relative my-8 aspect-[1024/380] overflow-hidden rounded-xl border border-white/10">
          <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="900px" />
        </div>
      ) : null}
      <ol className="mt-8 space-y-4">
        {(section.bullets ?? []).map((tip, i) => (
          <motion.li
            key={tip.slice(0, 40)}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
              {i + 1}
            </span>
            <p className="text-sm leading-relaxed text-white/68">{tip}</p>
          </motion.li>
        ))}
      </ol>
    </Shell>
  );
}

function PartnerSpotlight({ section }: { section: TtxSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spot = useMotionTemplate`radial-gradient(540px circle at ${mx}px ${my}px, rgba(99,102,241,0.2), transparent 62%)`;

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
        className="relative overflow-hidden rounded-3xl border border-indigo-500/25 p-8 md:p-10"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
        <svg className="absolute right-8 top-8 h-20 w-20 opacity-25" viewBox="0 0 80 80" aria-hidden>
          <motion.path
            d="M10,40 Q40,10 70,40 T130,40"
            fill="none"
            stroke="#a3e635"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
          />
        </svg>
        <div className="relative">
          <Prose paragraphs={section.paragraphs ?? []} />
          <ul className="mt-6 space-y-3">
            {(section.bullets ?? []).map((b, i) => (
              <motion.li
                key={b.slice(0, 40)}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 text-sm text-white/68"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-400" aria-hidden />
                {b}
              </motion.li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <TtxMagneticButton href="/contact-us#free-consultation">Contact Us</TtxMagneticButton>
            <TtxMagneticButton href="/services" variant="ghost">
              Our Services
            </TtxMagneticButton>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function SealConclusion({ section }: { section: TtxSection }) {
  return (
    <Shell section={section} className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(99,102,241,0.12), transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(163,230,53,0.1), transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(99,102,241,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 13, repeat: Infinity }}
        aria-hidden
      />
      <div className="relative">
        <Prose paragraphs={section.paragraphs ?? []} />
      </div>
    </Shell>
  );
}

function FaqGrid({ section }: { section: TtxSection }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Shell section={section} className="bg-[#08060f]">
      <div className="grid gap-3 md:grid-cols-2">
        {(section.faqs ?? []).map((faq, i) => (
          <div
            key={faq.question}
            className={`overflow-hidden rounded-2xl border bg-black/40 ${open === i ? "border-indigo-500/30 md:col-span-2" : "border-white/10"}`}
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
            >
              {faq.question}
              <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-indigo-400">
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i ? (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="border-t border-white/[0.06] px-5 py-4 text-sm leading-relaxed text-white/65"
                >
                  {faq.answer}
                </motion.p>
              ) : null}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function SectionView({ section }: { section: TtxSection }) {
  switch (section.variant) {
    case "ledger-prose":
      return <LedgerProse section={section} />;
    case "parallax-band":
      return <ParallaxBand section={section} />;
    case "story-steps":
      return <StorySteps section={section} />;
    case "matrix-glass":
      return <MatrixGlass section={section} />;
    case "model-dual":
      return <ModelDual section={section} />;
    case "benefit-bento":
      return <BenefitBento section={section} />;
    case "factor-deck":
      return <FactorDeck section={section} />;
    case "tier-stack":
      return <TierStack section={section} />;
    case "tip-carousel":
      return <TipCarousel section={section} />;
    case "partner-spotlight":
      return <PartnerSpotlight section={section} />;
    case "seal-conclusion":
      return <SealConclusion section={section} />;
    case "faq-grid":
      return <FaqGrid section={section} />;
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

export function TtxArticleBody({
  sections,
  navItems,
  relatedArticles,
  pageCta,
}: {
  sections: readonly TtxSection[];
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
        <TtxSectionNav items={navItems} />
      </div>

      <section className="border-t border-white/[0.06] bg-[#08060f] py-16">
        <div className="container-app grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">Work with ReapMind</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{pageCta.title}</h2>
            <p className="mt-3 max-w-xl text-white/50">{pageCta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <TtxMagneticButton href={pageCta.primaryHref}>{pageCta.primaryLabel}</TtxMagneticButton>
            <TtxMagneticButton href={pageCta.secondaryHref} variant="ghost">
              {pageCta.secondaryLabel}
            </TtxMagneticButton>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-14">
        <div className="container-app">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold">Read more blogs</h2>
            <Link href="/blogs" className="text-sm text-white/45 hover:text-indigo-300">
              All insights →
            </Link>
          </div>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {relatedArticles.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
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
                    <h3 className="font-semibold text-white/90 group-hover:text-indigo-300">{post.title}</h3>
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
