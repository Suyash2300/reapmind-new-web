import Image from "next/image";
import Link from "next/link";

type BlogArticleHeroProps = {
  category: string;
  author: string;
  date: string;
  heading: string;
  excerpt?: string;
  heroBackgroundImage: string;
  highlights?: readonly { value: string; label: string }[];
};

export function BlogArticleHero({
  category,
  author,
  date,
  heading,
  excerpt,
  heroBackgroundImage,
  highlights,
}: BlogArticleHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={heroBackgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.82)_45%,rgba(0,0,0,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(26,105,253,0.22),transparent_70%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden
      />

      <div className="container-app relative min-h-[min(78vh,640px)] sm:min-h-[min(72vh,680px)]">
        <Link
          href="/blogs"
          className="absolute left-0 top-6 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-black/35 px-4 text-sm font-semibold text-white/80 backdrop-blur-md transition-colors hover:border-white/30 hover:text-white sm:top-8"
        >
          <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
            <path
              d="M12.5 15 7.5 10l5-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to blogs
        </Link>

        <div className="flex min-h-[min(78vh,640px)] flex-col justify-end pb-10 pt-24 sm:min-h-[min(72vh,680px)] sm:pb-12 sm:pt-28 md:pb-14 lg:pb-16">
          <div className="mx-auto w-full max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
              {category}
            </span>

            <h1 className="mt-5 text-balance text-h2 font-bold tracking-tight text-white sm:mt-6 sm:text-h1 lg:text-[2.75rem] lg:leading-[1.12]">
              {heading}
            </h1>

            {excerpt ? (
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-para leading-relaxed text-white/70 sm:mt-5">
                {excerpt}
              </p>
            ) : null}

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
              <span className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-black/40 px-4 text-sm text-white/75 backdrop-blur-sm">
                <span className="font-semibold text-white">{author}</span>
                <span className="mx-2 text-white/30" aria-hidden>
                  /
                </span>
                <time dateTime="2023-11-24">{date}</time>
              </span>
              <span className="inline-flex min-h-10 items-center rounded-full border border-white/12 bg-black/40 px-4 text-sm text-white/60 backdrop-blur-sm">
                12 min read
              </span>
            </div>

            {highlights && highlights.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/12 bg-black/45 px-3 py-4 backdrop-blur-md sm:px-4"
                  >
                    <p className="text-h5 font-bold text-primary sm:text-h4">{item.value}</p>
                    <p className="mt-1 text-[0.65rem] leading-snug text-white/55 sm:text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
