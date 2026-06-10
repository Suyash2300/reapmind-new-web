import fs from "fs";

const html = fs.readFileSync("public/olt-source.html", "utf8");

const strip = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8217;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
const desc = html.match(/name="description"[^>]*content="([^"]+)"/)?.[1];
const canonical = html.match(/rel="canonical"[^>]*href="([^"]+)"/)?.[1];

const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1]));
const h2 = [...new Set([...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1])))];

const valueBoxes = [];
for (const m of html.matchAll(
  /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g,
)) {
  valueBoxes.push({ title: strip(m[1]), description: strip(m[2]) });
}

const tabs = [];
const advIdx = html.indexOf("Advantages");
if (advIdx > 0) {
  const chunk = html.slice(advIdx, advIdx + 80000);
  for (const m of chunk.matchAll(
    /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g,
  )) {
    const t = strip(m[1]);
    const d = strip(m[2]);
    if (!tabs.find((x) => x.title === t)) tabs.push({ title: t, description: d });
  }
}

const processSteps = [
  ...new Set(
    [...html.matchAll(/elementor-price-table__feature-inner[\s\S]*?<span\s*>([^<]+)<\/span>/g)].map((m) =>
      strip(m[1]),
    ),
  ),
];

const heroIdx = html.indexOf(h1[0] || "Lab");
const heroChunk = html.slice(heroIdx > 0 ? heroIdx : 0, (heroIdx > 0 ? heroIdx : 0) + 6000);
const heroParagraphs = [...heroChunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
  .map((m) => strip(m[1]))
  .filter((p) => p.length > 40);

const headings = [...html.matchAll(/<h([234])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
  level: m[1],
  text: strip(m[2]),
}));

const desiredIdx = html.indexOf("Desired");
const desiredChunk = html.slice(desiredIdx > 0 ? desiredIdx : 0, (desiredIdx > 0 ? desiredIdx : 0) + 6000);
const desiredPs = [...desiredChunk.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((m) => strip(m[1]));
const whyItems = [];
for (const p of desiredPs.slice(1)) {
  const m = p.match(/^([^:]+):\s*(.+)$/);
  if (m) whyItems.push({ title: strip(m[1]), description: strip(m[2]) });
}

const imgs = [
  ...new Set(
    [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) => m[0]),
  ),
].filter((u) => !/pexels|elementor\/thumbs|-\d+x\d+\.(jpg|png)/i.test(u) || /\.(png|jpg|webp)(\?|$)/i.test(u));

const out = {
  title,
  desc,
  canonical,
  h1,
  h2,
  heroParagraphs,
  valueBoxes,
  tabs,
  processSteps,
  headings: headings.slice(0, 30),
  whyItems,
  desiredPs,
  imgs: imgs.filter((u) => !/pexels/i.test(u)).slice(0, 50),
};

fs.writeFileSync("public/olt-extract.json", JSON.stringify(out, null, 2));
console.log(JSON.stringify({ title, h1, h2, valueBoxes: valueBoxes.length, tabs: tabs.length, processSteps, whyItems }, null, 2));
