import fs from "fs";

const html = fs.readFileSync("public/olt-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const headings = [...html.matchAll(/<h([234])[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({
  level: m[1],
  text: strip(m[2]),
}));

// Features section
const featIdx = html.indexOf("Features of Online Lab Tests");
const featChunk = html.slice(featIdx, featIdx + 30000);
const featIntro = strip(featChunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");
const featureBoxes = [];
for (const m of featChunk.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  featureBoxes.push({ title: strip(m[1]), description: strip(m[2]) });
}

// h4 boxes in features
if (!featureBoxes.length) {
  for (const m of featChunk.matchAll(
    /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g,
  )) {
    featureBoxes.push({ title: strip(m[1]), description: strip(m[2]) });
  }
}

// Benefits / advantages tabs
const benIdx = html.search(/Benefits|Advantages of/i);
const benChunk = html.slice(benIdx > 0 ? benIdx : 0, (benIdx > 0 ? benIdx : 0) + 80000);
const benefitTabs = [];
for (const m of benChunk.matchAll(
  /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g,
)) {
  const t = strip(m[1]);
  const d = strip(m[2]);
  if (!benefitTabs.find((x) => x.title === t)) benefitTabs.push({ title: t, description: d });
}

// Why choose envisioned
const envIdx = html.indexOf("Envisioned");
const envTitle = envIdx > 0 ? strip(html.slice(envIdx, envIdx + 200).match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] || "") : "";

// Process
const procIdx = html.indexOf("end-end development");
const procChunk = html.slice(procIdx - 500, procIdx + 4000);
const processTitle = strip(procChunk.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] || "");

// Why desired
const desiredIdx = html.indexOf("Desired");
const desiredChunk = html.slice(desiredIdx, desiredIdx + 6000);
const desiredTitle = strip(desiredChunk.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || "");
const desiredPs = [...desiredChunk.matchAll(/<p>([\s\S]*?)<\/p>/gi)].map((m) => strip(m[1]));
const whyItems = [];
for (const p of desiredPs.slice(1)) {
  const m = p.match(/^([^:]+):\s*(.+)$/);
  if (m) whyItems.push({ title: strip(m[1]), description: strip(m[2]) });
}

// Hero CTAs
const h1pos = html.indexOf("Get Online Lab Tests");
const heroChunk = html.slice(h1pos, h1pos + 8000);
const hasReachOut = heroChunk.includes("Reach out");
const hasIdea = heroChunk.includes("Have a Idea");

// Feature image
const featImgs = [...featChunk.matchAll(/src="(https:\/\/reapmind\.com\/wp-content\/uploads\/[^"]+)"/g)].map((m) => m[1]);

// Portfolio titles from h3 after Recent Works
const portIdx = html.indexOf("Our Recent Works");
const portChunk = html.slice(portIdx, portIdx + 10000);
const portfolioH3 = [...portChunk.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map((m) => strip(m[1]));

// All h3
const allH3 = headings.filter((h) => h.level === "3").map((h) => h.text);

console.log(JSON.stringify({
  headings: headings.slice(0, 28),
  featIntro,
  featureBoxes,
  benefitTabs,
  envTitle,
  processTitle,
  desiredTitle,
  whyItems,
  desiredPs: desiredPs.slice(0, 5),
  hasReachOut,
  hasIdea,
  featImgs: featImgs.slice(0, 5),
  portfolioH3,
  allH3,
}, null, 2));
