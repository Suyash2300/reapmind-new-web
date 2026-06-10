import fs from "fs";

const html = fs.readFileSync("public/ris-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const advIdx = html.indexOf("Advantages of Implementing RIS");
const advChunk = html.slice(advIdx, advIdx + 25000);

const tabs = [];
for (const m of advChunk.matchAll(
  /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<p>([^<]+)<\/p>/g,
)) {
  const t = strip(m[1]);
  const d = strip(m[2]);
  if (!tabs.find((x) => x.title === t)) tabs.push({ title: t, description: d });
}

// alt: icon boxes after advantages
const iconBoxes = [];
for (const m of advChunk.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  iconBoxes.push({ title: strip(m[1]), description: strip(m[2]) });
}

// Why choose desired - second section
const why2Idx = html.indexOf("Why Choose ReapMind as your Desired");
const why2Chunk = html.slice(why2Idx, why2Idx + 20000);
const why2Items = [];
for (const m of why2Chunk.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  why2Items.push({ title: strip(m[1]), description: strip(m[2]) });
}

// Envisioned section
const envIdx = html.indexOf("Envisioned Radiology");
const envChunk = html.slice(envIdx, envIdx + 15000);
const envItems = [];
for (const m of envChunk.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  envItems.push({ title: strip(m[1]), description: strip(m[2]) });
}

// hero CTA from link near h1
const h1pos = html.indexOf("Radiology information system");
const heroChunk = html.slice(h1pos, h1pos + 8000);
const heroLinks = [...heroChunk.matchAll(/href="([^"]*)"[^>]*>[\s\S]{0,200}?elementor-button-text[^>]*>([^<]+)/gi)].map((m) => ({
  href: m[1],
  label: strip(m[2]),
}));

// CTA blocks between sections
const callbackIdx = [...html.matchAll(/Get a Callback|Book a Free Consultation|Get a Free Consultation/gi)].map((m) => m[0]);

console.log(JSON.stringify({ tabs, iconBoxes, why2Items, envItems, heroLinks, callbackIdx: [...new Set(callbackIdx)] }, null, 2));
