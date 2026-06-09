import Image from "next/image";
import Link from "next/link";
import type { PortfolioCaseStudy } from "@/lib/portfolio";
import { portfolioCases } from "@/lib/portfolio";
import type { PortfolioCaseStudyContent } from "@/lib/portfolio-case-study-content";

type PortfolioCaseStudyLayoutProps = {
  study: PortfolioCaseStudy;
  content: PortfolioCaseStudyContent;
};

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden>
      <path
        d="M10.5 3.5L5.5 8l5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function isUsableGalleryImage(src: string) {
  return !/Large\.png|New-Reapmind|elementor\/thumbs|Reapmind-New-Logo/i.test(
    src,
  );
}

/** Scraped WordPress footer/nav headings — not real case study content */
const CASE_STUDY_SKIP_TITLE =
  /^(Explore More|Get In Touch|About|Services|Industries|Hire Developers|Resources|Portfolio|Popular Now|Blogs|Contact Us(\s+for project discussion)?|About\s*\+|Services\s*\+|IndustriesServices\s*\+)$/i;

function normalizeSectionTitle(title: string) {
  return title.replace(/\s+/g, " ").trim();
}

function isRenderableCaseStudySection(
  section: PortfolioCaseStudyContent["sections"][number],
) {
  const title = normalizeSectionTitle(section.title);
  if (CASE_STUDY_SKIP_TITLE.test(title)) return false;

  return (
    section.paragraphs.some((p) => p.trim().length > 0) ||
    (section.listItems?.length ?? 0) > 0 ||
    (section.metrics?.length ?? 0) > 0 ||
    (section.features?.length ?? 0) > 0 ||
    (section.images?.filter(isUsableGalleryImage).length ?? 0) > 0
  );
}

export function PortfolioCaseStudyLayout({
  study,
  content,
}: PortfolioCaseStudyLayoutProps) {
  const related = portfolioCases
    .filter((item) => item.slug !== study.slug)
    .slice(0, 3);

  const gallery = content.galleryImages.filter(isUsableGalleryImage);

  return (
    <main className="bg-black text-primary-foreground">
      <section className="relative overflow-hidden pb-8 pt-10 md:pb-12 md:pt-14 lg:pt-16">
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
          <div className="absolute -left-24 top-0 size-[380px] rounded-full bg-primary/20 blur-[110px]" />
          <div className="absolute right-0 top-1/4 size-[320px] rounded-full bg-primary/10 blur-[90px]" />
        </div>

        <div className="container-app relative">
          <Link
            href="/portfolio-reapmind"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeftIcon />
            Back to portfolio
          </Link>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Case study
          </p>
          <h1 className="mt-4 max-w-4xl text-h2 font-bold tracking-tight text-white sm:text-h1">
            {content.heroTitle}
          </h1>
          {content.intro ? (
            <p className="mt-5 max-w-3xl text-para leading-relaxed text-white/65">
              {content.intro}
            </p>
          ) : null}

          <div className="mt-8 grid grid-cols-2 gap-4 sm:max-w-lg">
            {study.highlights.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 sm:px-5"
              >
                <p className="text-h4 font-bold tabular-nums text-white sm:text-h3">
                  {metric.value}
                </p>
                <p className="mt-1 text-xs font-medium text-white/50 sm:text-sm">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-10 md:pb-14">
        <div className="container-app">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border-strong bg-surface-elevated">
            <div className="relative aspect-[16/9] w-full bg-black/40">
              <Image
                src={content.heroImage}
                alt={study.imageAlt}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {content.sections.filter(isRenderableCaseStudySection).map((section, index) => (
        <section
          key={`${section.title}-${index}`}
          className={`py-10 md:py-14 ${index % 2 === 1 ? "border-y border-white/5 bg-white/[0.02]" : ""}`}
        >
          <div className="container-app">
            <h2 className="text-h3 font-bold text-white sm:text-h2">
              {section.title}
            </h2>

            {section.paragraphs.length > 0 ? (
              <div className="mt-5 max-w-3xl space-y-4 text-para leading-relaxed text-white/65">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            ) : null}

            {section.listItems && section.listItems.length > 0 ? (
              <ul className="mt-6 max-w-3xl space-y-3">
                {section.listItems.map((item) => (
                  <li
                    key={item.slice(0, 48)}
                    className="flex gap-3 text-para text-white/70"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.metrics && section.metrics.length > 0 ? (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {section.metrics.map((metric) => (
                  <div
                    key={`${metric.value}-${metric.label}`}
                    className="rounded-2xl border border-primary/30 bg-primary/10 px-5 py-5 text-center"
                  >
                    <p className="text-h3 font-bold tabular-nums text-white">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-sm text-white/60">{metric.label}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {section.features && section.features.length > 0 ? (
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
                {section.features.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-surface-elevated p-5 sm:p-6"
                  >
                    <h3 className="text-subtitle font-bold text-white">
                      {feature.title}
                    </h3>
                    {feature.description ? (
                      <p className="mt-2 text-para text-white/60">
                        {feature.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}

            {section.images && section.images.filter(isUsableGalleryImage).length > 0 ? (
              <div
                className={`mt-8 grid gap-4 ${
                  section.images.filter(isUsableGalleryImage).length > 1
                    ? "sm:grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {section.images.filter(isUsableGalleryImage).map((src) => (
                  <div
                    key={src}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                  >
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ))}

      {gallery.length > 1 ? (
        <section className="border-t border-white/5 py-10 md:py-14">
          <div className="container-app">
            <h2 className="text-h3 font-bold text-white sm:text-h2">
              Product screens
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.slice(0, 6).map((src) => (
                <div
                  key={src}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-white/5 py-12 md:py-16">
        <div className="container-app">
          <h2 className="text-h3 font-bold text-white sm:text-h2">
            More case studies
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-strong bg-surface-elevated transition-[border-color,box-shadow] hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_rgba(26,105,253,0.35)]"
                >
                  <div className="relative aspect-[16/10] bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                      {item.tagline}
                    </p>
                    <h3 className="mt-2 text-subtitle font-bold text-white group-hover:text-primary">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 py-12 md:py-16">
        <div className="container-app flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="max-w-xl">
            <h2 className="text-h4 font-bold text-white sm:text-h3">
              Ready to build your next product?
            </h2>
            <p className="mt-2 text-para text-white/60">
              Talk to our team about mobile apps, web platforms, and enterprise
              solutions tailored to your goals.
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Get free consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
