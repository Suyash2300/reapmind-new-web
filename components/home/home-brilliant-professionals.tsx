"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useRef, useState, type MouseEvent } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { HydrationButton } from "@/components/ui/hydration-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { homeAboutUs } from "@/lib/home-about-us";

const { team } = homeAboutUs;

type Leader = (typeof team.members)[number];

const deskPositions = [
  { top: "4%", left: "2%", rotate: -9, path: "M50,50 C35,38 18,22 12,14" },
  { top: "6%", right: "1%", rotate: 7, path: "M50,50 C62,36 78,20 88,12" },
  { bottom: "6%", left: "4%", rotate: 6, path: "M50,50 C38,62 22,78 14,88" },
  { bottom: "4%", right: "2%", rotate: -7, path: "M50,50 C64,64 80,80 88,88" },
] as const;

function MaskingTape({ className }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute h-4 w-12 rounded-[1px] bg-[#e9d8a6]/75 shadow-[0_1px_2px_rgba(0,0,0,0.25)] ${className ?? ""}`}
      aria-hidden
    />
  );
}

function PolaroidCard({
  member,
  index,
  active,
  onSelect,
  parallaxX,
  parallaxY,
  position,
}: {
  member: Leader;
  index: number;
  active: boolean;
  onSelect: () => void;
  parallaxX: number;
  parallaxY: number;
  position: (typeof deskPositions)[number];
}) {
  const side = "left" in position ? "left" : "right";
  const offset = position[side as "left" | "right"];

  return (
    <motion.div
      className="absolute z-10 w-[168px] xl:w-[188px]"
      style={{
        top: "top" in position ? position.top : undefined,
        bottom: "bottom" in position ? position.bottom : undefined,
        left: side === "left" ? offset : undefined,
        right: side === "right" ? offset : undefined,
      }}
      animate={{
        x: parallaxX,
        y: parallaxY,
        rotate: active ? 0 : position.rotate,
        scale: active ? 1.08 : 0.92,
        zIndex: active ? 40 : 10,
      }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <HydrationButton
        type="button"
        onClick={onSelect}
        aria-pressed={active}
        aria-label={`${member.name}, ${member.role}`}
        className={`group relative block w-full bg-[#f4f2ee] p-2.5 pb-10 text-left shadow-[0_20px_50px_-14px_rgba(0,0,0,0.7)] transition-[box-shadow,ring-color] duration-300 ${
          active
            ? "shadow-[0_28px_64px_-12px_rgba(26,105,253,0.55)] ring-2 ring-primary"
            : "opacity-80 hover:opacity-100 hover:ring-1 hover:ring-white/30"
        }`}
      >
        <MaskingTape className="-left-2 top-3 -rotate-[28deg]" />
        <MaskingTape className="-right-1 bottom-8 rotate-[18deg] opacity-80" />

        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-300">
          <Image
            src={member.image}
            alt=""
            fill
            sizes="188px"
            className={`object-cover object-top transition-[filter] duration-500 ${
              active ? "grayscale-0" : "grayscale-[0.25] group-hover:grayscale-0"
            }`}
          />
        </div>

        <p className="absolute bottom-2.5 left-3 right-3 truncate text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-600">
          {member.name}
        </p>
        <span
          className={`absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full text-[9px] font-bold ${
            active
              ? "bg-primary text-white"
              : "border border-white/20 bg-black/80 text-white"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </HydrationButton>
    </motion.div>
  );
}

function DeskConnectors({ activeIndex }: { activeIndex: number }) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {deskPositions.map((pos, index) => (
        <path
          key={pos.path}
          d={pos.path}
          fill="none"
          stroke={
            index === activeIndex
              ? "rgba(26,105,253,0.5)"
              : "rgba(255,255,255,0.07)"
          }
          strokeWidth={index === activeIndex ? 0.35 : 0.2}
          strokeDasharray={index === activeIndex ? "0" : "1.2 1.2"}
          vectorEffect="non-scaling-stroke"
          className="transition-[stroke] duration-500"
        />
      ))}
      <circle cx="50" cy="50" r="1.2" fill="rgba(26,105,253,0.55)" />
    </svg>
  );
}

function LeadershipDesk({
  activeIndex,
  onSelect,
  reducedMotion,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  reducedMotion: boolean;
}) {
  const deskRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const active = team.members[activeIndex];

  const onMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!deskRef.current) return;
      const rect = deskRef.current.getBoundingClientRect();
      setMouse({
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      });
    },
    [],
  );

  return (
    <div
      ref={deskRef}
      onMouseMove={onMouseMove}
      className="relative mt-8 hidden overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050506] lg:block lg:min-h-[620px]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden
      />

      {!reducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] transition-[background] duration-200"
          style={{
            background: `radial-gradient(480px circle at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,214,150,0.1), transparent 60%), radial-gradient(800px circle at 50% 110%, rgba(26,105,253,0.1), transparent 50%)`,
          }}
          aria-hidden
        />
      )}

      <DeskConnectors activeIndex={activeIndex} />

      {team.members.map((member, index) => {
        const parallaxX = reducedMotion
          ? 0
          : (mouse.x - 0.5) * (index + 1) * 10;
        const parallaxY = reducedMotion
          ? 0
          : (mouse.y - 0.5) * (index + 1) * 8;

        return (
          <PolaroidCard
            key={member.name}
            member={member}
            index={index}
            active={activeIndex === index}
            onSelect={() => onSelect(index)}
            parallaxX={parallaxX}
            parallaxY={parallaxY}
            position={deskPositions[index]}
          />
        );
      })}

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="pointer-events-auto w-full max-w-[420px] rounded-2xl border border-white/12 bg-[#0a0a0c]/92 p-6 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl xl:max-w-[440px] xl:p-7">
          <div className="grid gap-5 sm:grid-cols-[140px_1fr] sm:items-center sm:gap-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[140px] overflow-hidden rounded-lg border border-white/10 bg-neutral-800 sm:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.image}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="140px"
                    className="object-cover object-top"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="min-w-0 text-center sm:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-primary">
                    Leadership dossier
                  </p>
                  <p className="mt-2 text-h4 font-bold text-white">{active.name}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">
                    {active.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {active.focus}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
                {team.members.map((member, index) => (
                  <HydrationButton
                    key={`chip-${member.name}`}
                    type="button"
                    onClick={() => onSelect(index)}
                    aria-pressed={activeIndex === index}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      activeIndex === index
                        ? "border-primary bg-primary/15 text-white"
                        : "border-white/12 text-white/50 hover:border-white/25 hover:text-white/80"
                    }`}
                  >
                    {member.name.split(" ")[0]}
                  </HydrationButton>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p
        className="pointer-events-none absolute bottom-4 left-1/2 z-30 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/30"
        aria-hidden
      >
        Pick a polaroid · or use name chips
      </p>
    </div>
  );
}

function MobilePolaroidStrip({
  members,
  activeIndex,
  onSelect,
}: {
  members: readonly Leader[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  const active = members[activeIndex];

  return (
    <div className="lg:hidden">
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {members.map((member, index) => {
          const selected = index === activeIndex;
          return (
            <HydrationButton
              key={member.name}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={selected}
              className="w-[min(68vw,220px)] shrink-0 snap-center"
            >
              <div
                className={`bg-[#f4f2ee] p-2.5 pb-10 shadow-[0_16px_36px_-12px_rgba(0,0,0,0.65)] transition-[box-shadow,opacity] ${
                  selected
                    ? "opacity-100 ring-2 ring-primary shadow-[0_20px_44px_-10px_rgba(26,105,253,0.4)]"
                    : "opacity-75"
                }`}
                style={{
                  transform: `rotate(${index % 2 === 0 ? -4 : 3}deg) scale(${selected ? 1.02 : 1})`,
                }}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="220px"
                    className="object-cover object-top"
                  />
                </div>
                <p className="mt-2 truncate text-center text-[10px] font-semibold uppercase tracking-wide text-neutral-700">
                  {member.name}
                </p>
              </div>
            </HydrationButton>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/55 p-5 backdrop-blur-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
              Leadership dossier
            </p>
            <p className="mt-2 text-h4 font-bold text-white">{active.name}</p>
            <p className="mt-1 text-sm font-semibold text-primary">{active.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">{active.focus}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function HomeBrilliantProfessionals() {
  const reducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <FadeIn delay={0.12} className="mt-12 md:mt-14">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            {team.eyebrow}
          </p>
          <h3 className="mt-3 text-balance">
            <span className="block text-h3 font-bold tracking-tight text-white sm:text-h2">
              {team.title}
            </span>
            <span className="mt-1 block text-h4 font-medium text-white/45 sm:text-h3">
              {team.highlight}
            </span>
          </h3>
          <p className="mt-3 max-w-2xl text-para leading-relaxed text-white/60">
            {team.subtitle}
          </p>
        </div>
        <Link
          href={team.cta.href}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {team.cta.label}
        </Link>
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {team.badges.map((badge) => (
          <li
            key={badge.title}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/75"
          >
            {badge.title}
          </li>
        ))}
      </ul>

      <LeadershipDesk
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
        reducedMotion={reducedMotion}
      />

      <MobilePolaroidStrip
        members={team.members}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </FadeIn>
  );
}
