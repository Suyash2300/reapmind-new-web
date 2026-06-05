"use client";

import Image from "next/image";
import Link from "next/link";
import type { PortfolioCaseStudy } from "@/lib/portfolio";

type PortfolioCaseCardProps = {
  study: PortfolioCaseStudy;
  variant: "center" | "side";
};

export function PortfolioCaseCard({ study, variant }: PortfolioCaseCardProps) {
  const isCenter = variant === "center";

  return (
    <Link
      href={study.href}
      aria-label={`View ${study.title} case study`}
      className="group relative block h-full w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <article
        className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)] transition-[box-shadow,transform] duration-300 [backface-visibility:hidden] group-hover:shadow-[0_36px_90px_-24px_rgba(26,105,253,0.35)] ${
          isCenter
            ? "min-h-[500px] p-6 sm:min-h-[540px] sm:p-7"
            : "min-h-[420px] p-5 sm:min-h-[440px] group-hover:-translate-y-0.5"
        }`}
        style={{ backgroundColor: study.accent }}
      >
        {isCenter ? <CenterCardBody study={study} /> : <SideCardBody study={study} />}
      </article>

      <span
        className={`pointer-events-none absolute left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out ${
          isCenter
            ? "bottom-8 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
            : "bottom-6 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
        }`}
      >
        View case study
      </span>
    </Link>
  );
}

function CardHeader({ study }: { study: PortfolioCaseStudy }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-black/[0.06] text-sm font-bold text-foreground"
        aria-hidden
      >
        {study.title.charAt(0)}
      </div>
      <h3 className="text-subtitle font-bold leading-tight text-foreground">
        {study.title}
      </h3>
    </div>
  );
}

function CroppedMockup({
  study,
  tall,
}: {
  study: PortfolioCaseStudy;
  tall?: boolean;
}) {
  return (
    <div className="relative mt-auto pt-3">
      <div className="overflow-hidden rounded-[2rem] bg-black p-2 sm:p-2.5">
        <div
          className={`relative w-full overflow-hidden rounded-[1.25rem] ${
            tall ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 88vw, 400px"
          />
        </div>
      </div>
    </div>
  );
}

function CenterCardBody({ study }: { study: PortfolioCaseStudy }) {
  return (
    <>
      <CardHeader study={study} />
      <p className="mt-4 line-clamp-4 text-para leading-snug text-secondary/90">
        {study.summary}
      </p>
      {study.bullets ? (
        <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {study.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm leading-snug text-secondary"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
      <CroppedMockup study={study} tall />
    </>
  );
}

function SideCardBody({ study }: { study: PortfolioCaseStudy }) {
  return (
    <>
      <CardHeader study={study} />
      <p className="mt-2 line-clamp-2 text-sm leading-snug text-secondary/85">
        {study.tagline}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {study.highlights.map((h) => (
          <div key={h.label}>
            <p className="text-h3 font-bold leading-none tabular-nums text-foreground">
              {h.value}
            </p>
            <p className="mt-1 text-[11px] font-medium leading-tight text-muted">
              {h.label}
            </p>
          </div>
        ))}
      </div>
      <CroppedMockup study={study} />
    </>
  );
}
