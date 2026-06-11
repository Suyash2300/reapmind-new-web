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
import type { D2cSection } from "@/lib/d2c-app-cost-blog-config";
import { D2cMagneticButton } from "./d2c-magnetic-button";
import { D2cSectionNav } from "./d2c-section-nav";

function Prose({ paragraphs, stagger = false }: { paragraphs: readonly string[]; stagger?: boolean }) {
  return (
    <div className="space-y-5">
      {paragraphs.map((p, i) => (
        <motion.p
          key={p.slice(0, 48)}
          initial={stagger ? { opacity: 0, y: 18 } : undefined}
          whileInView={stagger ? { opacity: 1, y: 0 } : undefined}
          viewport={stagger ? { once: true, margin: "-5%" } : undefined}
          transition={stagger ? { delay: i * 0.08, duration: 0.45 } : undefined}
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
  section: D2cSection;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 28 }}
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

function CinematicProse({ section }: { section: D2cSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0, 0.4], ["0%", "100%"]);

  return (
    <Shell section={section} className="relative overflow-hidden bg-black">
      <motion.div
        className="absolute left-0 top-0 h-px bg-gradient-to-r from-violet-500 via-fuchsia-400 to-transparent"
        style={{ width: lineWidth }}
        aria-hidden
      />
      <div ref={ref}>
        <Prose paragraphs={section.paragraphs ?? []} stagger />
      </div>
    </Shell>
  );
}

function ParallaxSplit({ section }: { section: D2cSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <Shell section={section} className="bg-[#07050f]">
      <div ref={ref} className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {section.image ? (
          <motion.div style={{ y: imgY }} className="relative order-2 lg:order-1">
            <div className="relative aspect-[1024/599] overflow-hidden rounded-2xl border border-violet-500/20 shadow-[0_24px_80px_rgba(139,92,246,0.12)]">
              <Image src={section.image} alt={section.imageAlt ?? ""} fill className="object-cover" sizes="520px" />
            </div>
            <motion.div
              className="pointer-events-none absolute -right-4 -top-4 size-24 rounded-full border border-fuchsia-500/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              aria-hidden
            />
          </motion.div>
        ) : null}
        <div className="order-1 lg:order-2">
          <Prose paragraphs={section.paragraphs ?? []} stagger />
        </div>
      </div>
    </Shell>
  );
}

function AsymmetricBento({ section }: { section: D2cSection }) {
  const spans = ["sm:col-span-4 sm:row-span-2", "sm:col-span-2", "sm:col-span-2", "sm:col-span-3", "sm:col-span-3"];

  return (
    <Shell section={section} className="bg-black">
      <div className="grid auto-rows-fr gap-3 sm:grid-cols-6">
        {(section.bullets ?? []).map((item, i) => {
          const { title, body } = splitItem(item);
          return (
            <motion.div
              key={item.slice(0, 40)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 to-transparent p-5 backdrop-blur-md ${spans[i] ?? "sm:col-span-3"}`}
            >
              <p className="text-sm font-semibold text-violet-200">{title}</p>
              {body ? <p className="mt-2 text-sm leading-relaxed text-white/68">{body}</p> : null}
            </motion.div>
          );
        })}
      </div>
    </Shell>
  );
}

function FeatureMatrix({ section }: { section: D2cSection }) {
  const [tab, setTab] = useState(0);
  const subs = section.subsections ?? [];

  return (
    <Shell section={section} className="bg-[#080612]">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {subs.map((sub, i) => (
          <button
            key={sub.title}
            type="button"
            onClick={() => setTab(i)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tab === i ? "bg-violet-600 text-white shadow-[0_0_24px_rgba(139,92,246,0.35)]" : "bg-white/[0.05] text-white/50 hover:text-white"
            }`}
          >
            {sub.title.replace(":", "")}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -32 }}
          transition={{ duration: 0.32 }}
          className="mt-6 grid gap-4 sm:grid-cols-2"
        >
          {subs[tab]?.items.map((item) => {
            const { title, body } = splitItem(item);
            return (
              <motion.div
                key={item.slice(0, 40)}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.06] p-5"
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                {body ? <p className="mt-2 text-sm leading-relaxed text-white/75">{body}</p> : null}
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </Shell>
  );
}

function CostPillars({ section }: { section: D2cSection }) {
  const [active, setActive] = useState(0);
  const subs = section.subsections ?? [];

  return (
    <Shell section={section} className="bg-black">
      <Prose paragraphs={section.paragraphs ?? []} />
      <div className="mt-10 flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-[240px_1fr] lg:gap-8 lg:overflow-visible">
        <ol className="flex shrink-0 gap-2 lg:flex-col lg:gap-1">
          {subs.map((sub, i) => (
            <li key={sub.title} className="shrink-0 snap-start lg:shrink">
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`w-[min(72vw,220px)] rounded-xl border px-4 py-3 text-left text-sm transition-all lg:w-full ${
                  active === i
                    ? "border-violet-500/40 bg-violet-500/10 font-semibold text-violet-200"
                    : "border-white/10 text-white/45 hover:border-white/20 hover:text-white/70"
                }`}
              >
                {sub.title.replace(":", "")}
              </button>
            </li>
          ))}
        </ol>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
          >
            <h3 className="text-base font-bold text-fuchsia-300">{subs[active]?.title}</h3>
            <ul className="mt-4 space-y-3">
              {subs[active]?.items.map((item) => (
                <motion.li
                  key={item.slice(0, 40)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-3 text-sm text-white/68"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Shell>
  );
}

function TierPricing({ section }: { section: D2cSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [12, 0]);

  return (
    <Shell section={section} className="bg-[#0a0814]">
      <Prose paragraphs={section.paragraphs ?? []} />
      <motion.div
        ref={ref}
        style={{ perspective: 1200, rotateX }}
        className="mt-10 grid gap-5 lg:grid-cols-3"
      >
        {(section.tiers ?? []).map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 40, rotateY: i === 0 ? -8 : i === 2 ? 8 : 0 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: "spring", stiffness: 90 }}
            whileHover={{ y: -8, z: 20 }}
            className={`rounded-3xl border p-7 ${
              i === 1
                ? "border-violet-500/40 bg-gradient-to-b from-violet-600/20 to-transparent shadow-[0_0_60px_rgba(139,92,246,0.15)] lg:-mt-4 lg:mb-4"
                : "border-white/10 bg-white/[0.03]"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <p className="text-sm font-bold uppercase tracking-wider text-violet-300">{tier.name}</p>
            <p className="mt-3 text-2xl font-bold text-white">{tier.price}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{tier.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Shell>
  );
}

function SpotlightCta({ section }: { section: D2cSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spot = useMotionTemplate`radial-gradient(560px circle at ${mx}px ${my}px, rgba(139,92,246,0.22), transparent 62%)`;

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
        className="relative overflow-hidden rounded-3xl border border-violet-500/25 bg-white/[0.02] p-8 backdrop-blur-xl md:p-10"
      >
        <motion.div className="pointer-events-none absolute inset-0" style={{ background: spot }} />
        <svg className="pointer-events-none absolute right-0 top-0 h-32 w-32 opacity-20" viewBox="0 0 100 100" aria-hidden>
          <motion.path
            d="M10,50 Q50,10 90,50 T170,50"
            fill="none"
            stroke="url(#d2cGrad)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="d2cGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
        <div className="relative">
          <Prose paragraphs={section.paragraphs ?? []} />
          <div className="mt-8 flex flex-wrap gap-4">
            <D2cMagneticButton href="/contact-us#free-consultation">Contact Us</D2cMagneticButton>
            <D2cMagneticButton href="/ecommerce-business-solution" variant="ghost">
              Ecommerce Solutions
            </D2cMagneticButton>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function MorphConclusion({ section }: { section: D2cSection }) {
  return (
    <Shell section={section} className="relative overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-50"
        animate={{
          background: [
            "radial-gradient(circle at 0% 50%, rgba(139,92,246,0.14), transparent 50%)",
            "radial-gradient(circle at 100% 50%, rgba(245,158,11,0.12), transparent 50%)",
            "radial-gradient(circle at 50% 100%, rgba(217,70,239,0.1), transparent 50%)",
            "radial-gradient(circle at 0% 50%, rgba(139,92,246,0.14), transparent 50%)",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <Prose paragraphs={section.paragraphs ?? []} />
      </motion.div>
    </Shell>
  );
}

function FaqSpring({ section }: { section: D2cSection }) {
  const [open, setOpen] = useState(0);

  return (
    <Shell section={section} className="bg-[#0a0814]">
      <div className="space-y-3">
        {(section.faqs ?? []).map((faq, i) => (
          <div key={faq.question} className="overflow-hidden rounded-2xl border border-white/10 bg-black/50">
            <button
              type="button"
              onClick={() => setOpen(open === i ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white"
            >
              {faq.question}
              <motion.span
                animate={{ rotate: open === i ? 45 : 0, scale: open === i ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-violet-400"
              >
                +
              </motion.span>
            </button>
            <AnimatePresence>
              {open === i ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 24 }}
                >
                  <p className="border-t border-white/[0.06] px-5 py-4 text-sm leading-relaxed text-white/65">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Shell>
  );
}

function SectionView({ section }: { section: D2cSection }) {
  switch (section.variant) {
    case "cinematic-prose":
      return <CinematicProse section={section} />;
    case "parallax-split":
      return <ParallaxSplit section={section} />;
    case "asymmetric-bento":
      return <AsymmetricBento section={section} />;
    case "feature-matrix":
      return <FeatureMatrix section={section} />;
    case "cost-pillars":
      return <CostPillars section={section} />;
    case "tier-pricing":
      return <TierPricing section={section} />;
    case "spotlight-cta":
      return <SpotlightCta section={section} />;
    case "morph-conclusion":
      return <MorphConclusion section={section} />;
    case "faq-spring":
      return <FaqSpring section={section} />;
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

export function D2cArticleBody({
  sections,
  navItems,
  relatedArticles,
  pageCta,
}: {
  sections: readonly D2cSection[];
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
  const railRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-black text-white">
      <div className="container-app grid gap-12 py-12 lg:grid-cols-[1fr_200px] lg:py-16">
        <div>{sections.map((s) => <SectionView key={s.id} section={s} />)}</div>
        <D2cSectionNav items={navItems} />
      </div>

      <section className="border-t border-white/[0.06] bg-[#07050f] py-16">
        <div className="container-app grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">Work with ReapMind</p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">{pageCta.title}</h2>
            <p className="mt-3 max-w-xl text-white/50">{pageCta.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <D2cMagneticButton href={pageCta.primaryHref}>{pageCta.primaryLabel}</D2cMagneticButton>
            <D2cMagneticButton href={pageCta.secondaryHref} variant="ghost">
              {pageCta.secondaryLabel}
            </D2cMagneticButton>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] py-14">
        <div className="container-app">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-lg font-semibold">Read more blogs</h2>
            <Link href="/blogs" className="text-sm text-white/45 hover:text-violet-300">
              All insights →
            </Link>
          </div>
          <div
            ref={railRef}
            className="mt-8 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {relatedArticles.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, x: 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="w-[min(88vw,340px)] shrink-0 snap-start"
              >
                <Link
                  href={post.link}
                  className="group block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
                >
                  <div className="relative aspect-[1024/599] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="340px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-white/90 group-hover:text-violet-300">{post.title}</h3>
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
