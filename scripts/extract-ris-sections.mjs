import fs from "fs";

const html = fs.readFileSync("public/ris-source.html", "utf8");

const strip = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const idx = html.indexOf("How does RIS work");
const chunk = html.slice(idx, idx + 20000);
const howIntro = strip(chunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");

const whyIdx = html.indexOf("Why Choose ReapMind");
const wchunk = html.slice(whyIdx, whyIdx + 25000);
const whyItems = [];
for (const m of wchunk.matchAll(
  /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g,
)) {
  whyItems.push({ title: strip(m[1]), description: strip(m[2]) });
}

const pidx = html.indexOf("Our Recent Works");
const pchunk = html.slice(pidx, pidx + 12000);
const portfolio = [];
for (const m of pchunk.matchAll(
  /href="(https:\/\/reapmind\.com\/portfolio\/[^"]+)"[\s\S]*?<img[^>]+src="([^"]+)"[\s\S]*?alt="([^"]*)"/gi,
)) {
  portfolio.push({ link: m[1], image: m[2], title: strip(m[3]) });
}

const tidx = html.indexOf("What clients say");
const tchunk = html.slice(tidx, tidx + 15000);
const testimonials = [];
for (const m of tchunk.matchAll(
  /elementor-testimonial__text[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial__name[^>]*>([\s\S]*?)<\/div>[\s\S]*?elementor-testimonial__title[^>]*>([\s\S]*?)<\/div>/gi,
)) {
  testimonials.push({
    quote: strip(m[1]),
    name: strip(m[2]),
    role: strip(m[3]),
  });
}

const heroCtas = [
  ...new Set(
    [...html.matchAll(/elementor-button-text[^>]*>([^<]+)/g)]
      .map((m) => strip(m[1]))
      .filter((t) => t.length > 5 && !/menu|close|submit/i.test(t)),
  ),
];

const processIdx = html.indexOf("Agile Approach");
const processChunk = html.slice(processIdx - 2000, processIdx + 8000);
const processTitle = strip(
  processChunk.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || "",
);
const processSubtitle = strip(
  [...processChunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .find((p) => p.length > 80) || "",
);

const out = {
  howIntro,
  whyItems,
  portfolio: portfolio.slice(0, 8),
  testimonials,
  heroCtas,
  processTitle,
  processSubtitle,
  valueBoxes: JSON.parse(fs.readFileSync("public/ris-extract.json", "utf8")).valueBoxes,
};

fs.writeFileSync("public/ris-sections.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
