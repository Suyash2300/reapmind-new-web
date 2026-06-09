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

function decodeHtml(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&#038;/g, "&");
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function getMeta(html, name) {
  const patterns = [
    new RegExp(`name="${name}"[^>]*content="([^"]+)"`, "i"),
    new RegExp(`property="${name}"[^>]*content="([^"]+)"`, "i"),
    new RegExp(`content="([^"]+)"[^>]*name="${name}"`, "i"),
    new RegExp(`content="([^"]+)"[^>]*property="${name}"`, "i"),
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m) return decodeHtml(m[1]);
  }
  return null;
}

function extractImages(html) {
  const images = [];
  const re =
    /https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s>]+\.(?:png|jpe?g|webp)/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    if (!images.includes(m[0])) images.push(m[0]);
  }
  return images;
}

const SKIP_HEADINGS =
  /^(Ready to talk about|Contact us now|We're the Top|Contact Us|Explore More|Get In Touch|About|Services|Industries|Hire Developers|Resources|Portfolio|Popular Now|Blogs|Let's Spark|Table of Contents|Consult with ERP Expert|Our Recent Works|Latest Insights|Contact Us for project discussion|More Screen|Menu|Scan the code)$/i;

function extractPortfolioSection(html) {
  const start = html.search(/Happy Harvest|Deutsche Quality|Lakshya Academy|MTeducare|organic world|PawSpace|Muncipal|BeeMate|LeepRide|Carloana|Connection|Vkonnect|MechUni|Formulaw|i30/i);
  const slice = start > 0 ? html.slice(start, start + 120000) : html;
  const end = slice.search(/Our Recent Works|Latest Insights|Contact Us for project discussion/i);
  return end > 0 ? slice.slice(0, end) : slice;
}

function extractBlocks(html) {
  const section = extractPortfolioSection(html);
  const blocks = [];

  const widgetRe =
    /elementor-widget-(?:heading|text-editor)[^>]*>[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi;
  let m;
  while ((m = widgetRe.exec(section)) !== null) {
    const inner = m[1];
    const heading = inner.match(
      /<h[1-6][^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([\s\S]*?)<\/h[1-6]>/i,
    );
    if (heading) {
      const text = stripTags(heading[1]);
      if (text && !SKIP_HEADINGS.test(text)) {
        blocks.push({ type: "heading", text });
      }
      continue;
    }

    const paragraphs = [...inner.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map((p) => stripTags(p[1]))
      .filter((t) => t.length > 20);
    for (const text of paragraphs) {
      blocks.push({ type: "paragraph", text });
    }

    const listItems = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
      .map((li) => stripTags(li[1]))
      .filter((t) => t.length > 10);
    for (const text of listItems) {
      blocks.push({ type: "listItem", text });
    }
  }

  return blocks;
}

function extractMetrics(html) {
  const section = extractPortfolioSection(html);
  const metrics = [];
  const re =
    /<h[1-6][^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([^<]*\d+[^<]*)<\/h[1-6]>[\s\S]{0,400}?<p[^>]*>([^<]+)<\/p>/gi;
  let m;
  while ((m = re.exec(section)) !== null) {
    const value = stripTags(m[1]);
    const label = stripTags(m[2]);
    if (value && label && /%|\+|K|k|\d/.test(value)) {
      metrics.push({ value, label });
    }
  }
  return metrics.slice(0, 6);
}

function extractFeatures(html) {
  const section = extractPortfolioSection(html);
  const idx = section.search(/Features Pointers|Key Features/i);
  if (idx < 0) return [];
  const featSection = section.slice(idx, idx + 40000);
  const features = [];
  const cards = [
    ...featSection.matchAll(
      /<h[1-6][^>]*class="[^"]*elementor-heading-title[^"]*"[^>]*>([^<]+)<\/h[1-6]>[\s\S]{0,500}?<p[^>]*>([^<]+)<\/p>/gi,
    ),
  ];
  for (const card of cards) {
    const title = stripTags(card[1]);
    const description = stripTags(card[2]);
    if (
      title &&
      description &&
      !/Features Pointers|Key Features/i.test(title) &&
      title.length < 80
    ) {
      features.push({ title, description });
    }
  }
  return features.slice(0, 12);
}

function getOgImage(html) {
  return getMeta(html, "og:image");
}

async function fetchOne(slug) {
  const url = `https://reapmind.com/portfolio/${slug}/`;
  const res = await fetch(url);
  const html = await res.text();
  return {
    slug,
    url,
    status: res.status,
    metaTitle: getMeta(html, "og:title") ?? getMeta(html, "twitter:title"),
    metaDescription:
      getMeta(html, "og:description") ?? getMeta(html, "description"),
    canonical:
      html.match(/rel="canonical"[^>]*href="([^"]+)"/i)?.[1] ??
      html.match(/href="([^"]+)"[^>]*rel="canonical"/i)?.[1],
    ogImage: getOgImage(html),
    blocks: extractBlocks(html),
    metrics: extractMetrics(html),
    features: extractFeatures(html),
    galleryImages: extractImages(html).filter(
      (url) =>
        !/Logo|Teams|caller|elementor\/thumbs|200x200|300x|768x|1024x|1536x|2048x|scaled/i.test(
          url,
        ) && /\.(png|jpe?g|webp)$/i.test(url),
    ),
  };
}

const results = [];
for (const slug of slugs) {
  console.error(`Fetching ${slug}...`);
  results.push(await fetchOne(slug));
}

writeFileSync(
  "scripts/portfolio-case-studies-scraped.json",
  JSON.stringify(results, null, 2),
);
console.error("Wrote scripts/portfolio-case-studies-scraped.json");
