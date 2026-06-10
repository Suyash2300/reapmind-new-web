import fs from "fs";

const html = fs.readFileSync("public/ris-source.html", "utf8");
const strip = (s) =>
  s.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#8211;/g, "–").replace(/&#8217;/g, "'").replace(/\s+/g, " ").trim();

const idx = html.indexOf("Why Choose ReapMind as your Desired");
const chunk = html.slice(idx, idx + 25000);

const intro = strip(
  [...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .find((p) => p.length > 60 && /ReapMind|technology|Radiology/i.test(p)) || "",
);

const items = [];
for (const m of chunk.matchAll(
  /<h3 class="elementskit-info-box-title">\s*([\s\S]*?)<\/h3>[\s\S]*?elementskit-box-style-content">\s*([\s\S]*?)\s*<\/div>/gi,
)) {
  items.push({ title: strip(m[1]), description: strip(m[2]) });
}

// alt pattern h4
if (!items.length) {
  for (const m of chunk.matchAll(
    /<h4 class="box-heading">\s*([^<]+?)\s*<\/h4>\s*<div class="box-description">\s*([\s\S]*?)\s*<\/div>/g,
  )) {
    items.push({ title: strip(m[1]), description: strip(m[2]) });
  }
}

const closing = strip(
  [...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .find((p) => /innovative technology|digital landscape/i.test(p)) || "",
);

// envisioned section intro
const envIdx = html.indexOf("Envisioned Radiology");
const envChunk = html.slice(envIdx, envIdx + 5000);
const envisionedIntro = strip(envChunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] || "");

// hero buttons - search whole page for Reach out
const reachOut = html.includes("Reach out to get started") ? "Reach out to get started on your requirements" : "";
const haveIdea = html.includes("Have a Idea") ? "Have a Idea? Contact Us" : "";

console.log(JSON.stringify({ intro, items, closing, envisionedIntro, reachOut, haveIdea }, null, 2));
