import { writeFileSync } from "node:fs";

const slugs = [
  "deutsche-quality-systems-india-dqs-india-audit-app",
  "lakshya-academy-empowering-education",
  "mt-educare-education-management",
  "organic-world",
  "pawspace",
  "muncipal-banking",
  "beemate-enhancing-school-transportation-safety-and-communication",
  "leep-rideshare-app",
  "carloana-car-finance-made-smarter",
  "worlds-best-tool-for-personal-connections",
  "vkonnect-health",
  "mechuni-mechanical-services-and-parking-app",
  "happy-harvest-farms-delivery",
  "formulaw-consult-lawyer-online",
  "i30-jee-neet-foundation-coaching-programs-app-reapmind",
];

const SECTION_TITLES = new Set([
  "Case overview",
  "Involvement",
  "The Brief",
  "Our Approach",
  "The Results",
  "Features Pointers",
  "Key Features",
  "Key Features of the Platform",
  "More Screen",
]);

const SKIP_HERO_TITLES =
  /contact us|project discussion|tell us about your project|let's spark/i;

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&#038;/g, "&")
    .replace(/&hellip;/g, "…")
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"');
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n\n")
      .replace(/<[^>]+>/g, "")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function getMeta(html, name) {
  const patterns = [
    new RegExp(`name="${name}"[^>]*content="([^"]+)"`, "i"),
    new RegExp(`property="${name}"[^>]*content="([^"]+)"`, "i"),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeHtml(m[1]);
  }
  return null;
}

function extractContentSlice(html) {
  const headerEnd = html.lastIndexOf("</header>");
  const startSearch = headerEnd > 0 ? headerEnd : 100000;
  const body = html.slice(startSearch);

  const h1Matches = [...body.matchAll(
    /<h1 class="elementor-heading-title[^"]*">([\s\S]*?)<\/h1>/gi,
  )];
  let heroMatch = h1Matches.find((m) => {
    const text = stripTags(m[1]);
    return text.length > 2 && !SKIP_HERO_TITLES.test(text);
  });

  if (!heroMatch) {
    const h2Match = body.match(
      /<h2 class="elementor-heading-title[^"]*">([\s\S]*?)<\/h2>/i,
    );
    if (h2Match) heroMatch = h2Match;
  }

  if (!heroMatch) return null;

  const absoluteStart =
    startSearch +
    body.indexOf(heroMatch[0]) -
    4000;
  let absoluteEnd = html.length;

  const recentWorksIdx = html.indexOf(
    ">Our Recent Works</h2>",
    absoluteStart + 8000,
  );
  if (recentWorksIdx > 0) {
    absoluteEnd = recentWorksIdx;
  } else {
    const latestIdx = html.indexOf(">Latest Insights</h2>", absoluteStart + 8000);
    if (latestIdx > 0) absoluteEnd = latestIdx;
  }

  return {
    heroTitle: stripTags(heroMatch[1]),
    slice: html.slice(Math.max(startSearch, absoluteStart), absoluteEnd),
  };
}

function parseWidgetChunk(type, inner) {
  const widgets = [];

  if (type === "heading.default") {
    const h = inner.match(
      /<h[1-6][^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h[1-6]>/i,
    );
    if (h) {
      const text = stripTags(h[1]);
      if (text && !/^Table of Contents$/i.test(text)) {
        widgets.push({ kind: "heading", text });
      }
    }
    return widgets;
  }

  if (type === "text-editor.default") {
    const paragraphs = [...inner.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((p) => stripTags(p[1]))
      .filter((t) => t.length > 15 && !/^Table of Contents$/i.test(t));
    const listItems = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
      .map((li) => stripTags(li[1]))
      .filter(Boolean);
    if (paragraphs.length) widgets.push({ kind: "paragraphs", text: paragraphs });
    if (listItems.length) widgets.push({ kind: "list", text: listItems });
    return widgets;
  }

  if (type === "image.default") {
    const src = inner.match(/src="([^"]+)"/i)?.[1];
    if (src && !/Logo|Teams|caller|data:image/i.test(src)) {
      widgets.push({
        kind: "image",
        src: src.replace(/-\d+x\d+(?=\.\w+$)/, ""),
      });
    }
    return widgets;
  }

  if (type === "the7_icon_box_grid_widget.default") {
    const bullets = [...inner.matchAll(/<h4 class="box-heading">[\s\S]*?>([\s\S]*?)<\/a>/gi)]
      .map((b) => stripTags(b[1]))
      .filter(Boolean);
    if (bullets.length) widgets.push({ kind: "bullets", text: bullets });
    return widgets;
  }

  return widgets;
}

function parseWidgets(slice) {
  const widgets = [];
  const markers = [...slice.matchAll(/data-widget_type="([^"]+)"/g)];

  for (let i = 0; i < markers.length; i += 1) {
    const type = markers[i][1];
    const start = markers[i].index ?? 0;
    const end = markers[i + 1]?.index ?? slice.length;
    const chunk = slice.slice(start, end);
    const container = chunk.match(
      /<div class="elementor-widget-container">([\s\S]*)$/i,
    );
    if (!container) continue;
    widgets.push(...parseWidgetChunk(type, container[1]));
  }

  const counterRe =
    /elementor-counter-title[^>]*>([^<]+)<[\s\S]{0,300}?elementor-counter-number[^>]*data-to-value="([^"]+)"/gi;
  let c;
  while ((c = counterRe.exec(slice)) !== null) {
    widgets.push({
      kind: "metric",
      label: stripTags(c[1]),
      value: stripTags(c[2]),
    });
  }

  return widgets;
}

function dedupeWidgets(widgets) {
  const seen = new Set();
  const out = [];
  for (const w of widgets) {
    const key = `${w.kind}:${JSON.stringify(w.text ?? w.src)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(w);
  }
  return out;
}

function normalizeSectionTitle(title) {
  if (title === "Key Features of the Platform") return "Key Features";
  return title;
}

function isFeatureSection(title) {
  return title === "Features Pointers" || title === "Key Features";
}

function buildStructured(widgets) {
  let intro = "";
  const sections = [];
  const galleryImages = [];
  let current = null;
  let seenH1 = false;
  let introCaptured = false;

  for (const w of widgets) {
    if (w.kind === "image") {
      galleryImages.push(w.src);
      if (current) (current.images ??= []).push(w.src);
      continue;
    }

    if (w.kind === "metric" && current?.title === "The Results") {
      current.metrics ??= [];
      current.metrics.push({ value: w.value, label: w.label });
      continue;
    }

    if (w.kind === "heading") {
      if (!seenH1) {
        seenH1 = true;
        continue;
      }
      if (SECTION_TITLES.has(w.text)) {
        if (w.text === "More Screen") continue;
        current = {
          title: normalizeSectionTitle(w.text),
          paragraphs: [],
          listItems: [],
          images: [],
        };
        sections.push(current);
        continue;
      }
      if (current && isFeatureSection(current.title)) {
        current.features ??= [];
        current.features.push({ title: w.text, bullets: [] });
        continue;
      }
      if (current?.title === "Our Approach" && w.text.length < 120) {
        current.listItems.push(w.text);
        continue;
      }
      if (current?.title === "The Results" && /%|\+|\d/.test(w.text)) {
        current.metrics ??= [];
        current.metrics.push({ value: w.text, label: "" });
        continue;
      }
      continue;
    }

    if (w.kind === "paragraphs") {
      if (seenH1 && !introCaptured && !current) {
        intro = w.text.join("\n\n");
        introCaptured = true;
        continue;
      }
      if (!current) continue;
      if (current.title === "The Results" && current.metrics?.length) {
        const last = current.metrics[current.metrics.length - 1];
        if (!last.label) {
          last.label = w.text[0] ?? "";
          if (w.text.length > 1) current.paragraphs.push(...w.text.slice(1));
        } else {
          current.paragraphs.push(...w.text);
        }
        continue;
      }
      current.paragraphs.push(...w.text);
    }

    if (w.kind === "list" && current) {
      current.listItems.push(...w.text);
    }

    if (w.kind === "bullets" && current && isFeatureSection(current.title)) {
      current.features ??= [];
      if (!current.features.length) {
        current.features.push({ title: "Highlights", bullets: w.text });
      } else {
        current.features[current.features.length - 1].bullets.push(...w.text);
      }
    }
  }

  for (const section of sections) {
    if (section.features) {
      section.features = section.features.map((f) => ({
        title: f.title,
        description: f.bullets?.join(" ") ?? f.description ?? "",
      }));
    }
  }

  return { intro, sections, galleryImages: [...new Set(galleryImages)] };
}

async function fetchOne(slug) {
  const url = `https://reapmind.com/portfolio/${slug}/`;
  const res = await fetch(url);
  const html = await res.text();
  const content = extractContentSlice(html);
  if (!content) throw new Error(`No content slice for ${slug}`);

  const widgets = dedupeWidgets(parseWidgets(content.slice));
  const structured = buildStructured(widgets);

  const item = {
    slug,
    metaTitle: getMeta(html, "og:title"),
    metaDescription: getMeta(html, "og:description"),
    canonical: `https://reapmind.com/portfolio/${slug}/`,
    heroImage: getMeta(html, "og:image"),
    heroTitle: content.heroTitle,
    ...structured,
  };

  if (item.metaDescription) {
    const cleanedIntro = item.metaDescription
      .replace(
        new RegExp(
          item.heroTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
          "gi",
        ),
        "",
      )
      .replace(/^[\w\s–—-]+\s+(?=[A-Z])/u, "")
      .replace(/\s*…\s*$/, "")
      .trim();
    if (!item.intro || item.intro.length < cleanedIntro.length * 0.6) {
      if (cleanedIntro.length > 60) item.intro = cleanedIntro;
    }
  }

  return item;
}

const results = [];
for (const slug of slugs) {
  console.error(`Building ${slug}...`);
  results.push(await fetchOne(slug));
}

writeFileSync(
  "scripts/portfolio-case-studies-built.json",
  JSON.stringify(results, null, 2),
);

const ts = `import type { PortfolioSlug } from "@/lib/portfolio";

export type PortfolioCaseStudyFeature = {
  title: string;
  description: string;
};

export type PortfolioCaseStudyMetric = {
  value: string;
  label: string;
};

export type PortfolioCaseStudySection = {
  title: string;
  paragraphs: readonly string[];
  listItems?: readonly string[];
  images?: readonly string[];
  metrics?: readonly PortfolioCaseStudyMetric[];
  features?: readonly PortfolioCaseStudyFeature[];
};

export type PortfolioCaseStudyContent = {
  slug: PortfolioSlug;
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  heroTitle: string;
  intro: string;
  heroImage: string;
  galleryImages: readonly string[];
  sections: readonly PortfolioCaseStudySection[];
};

export const portfolioCaseStudyContent = ${JSON.stringify(results, null, 2)} as const satisfies readonly PortfolioCaseStudyContent[];

const bySlug = new Map(
  portfolioCaseStudyContent.map((item) => [item.slug, item]),
);

export function getPortfolioCaseStudyContent(
  slug: string,
): PortfolioCaseStudyContent | undefined {
  return bySlug.get(slug as PortfolioSlug);
}
`;

writeFileSync("lib/portfolio-case-study-content.ts", ts);
console.error("Wrote lib/portfolio-case-study-content.ts");
