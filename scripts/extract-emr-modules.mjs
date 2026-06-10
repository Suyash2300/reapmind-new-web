import fs from "fs";

const html = fs.readFileSync("public/emr-source.html", "utf8");

function strip(s) {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/\s+/g, " ")
    .trim();
}

const modules = [
  "Patient Scheduling",
  "Patient Flow for Electronic Medical Record",
  "Task Management",
  "Patient History Charts",
  "Sort Patients with Similar Condition",
  "Detailed Reports for Medical Record",
];

const results = [];
for (const title of modules) {
  const idx = html.indexOf(title);
  if (idx < 0) continue;
  const chunk = html.slice(idx, idx + 8000);
  const texts = [
    ...chunk.matchAll(/<div class="elementor-widget-container">\s*([^<]{20,800})\s*<\/div>/gi),
    ...chunk.matchAll(/elementor-icon-list-text[^>]*>([^<]+)</gi),
    ...chunk.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi),
  ]
    .map((m) => strip(m[1]))
    .filter((t) => t.length > 25 && t !== title && !/android|google play/i.test(t));

  results.push({ title, description: texts[0] || "" });
}

// service highlight tabs with full tab panel content
const shIdx = html.indexOf("Service Highlights");
const shChunk = html.slice(shIdx, shIdx + 50000);
const tabs = [];
for (const m of shChunk.matchAll(
  /<h5 class="the7-e-tab-title-text">\s*([^<]+?)\s*<\/h5>[\s\S]*?<div class="the7-e-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/gi,
)) {
  const title = strip(m[1]);
  const body = strip(m[2]);
  if (title && body.length > 40 && !tabs.find((t) => t.title === title)) {
    tabs.push({ title, description: body.slice(0, 1200) });
  }
}

// testimonials from swiper/testimonial widgets
const tIdx = html.indexOf("What clients say about us");
const tChunk = html.slice(tIdx, tIdx + 80000);
const testimonials = [];
for (const m of tChunk.matchAll(
  /elementor-testimonial__name[^>]*>([^<]+)<[\s\S]*?elementor-testimonial__text[^>]*>([\s\S]*?)<\/div>/gi,
)) {
  testimonials.push({ name: strip(m[1]), quote: strip(m[2]) });
}

console.log("MODULES:", results);
console.log("TABS:", tabs);
console.log("TESTIMONIALS:", testimonials.length);

fs.writeFileSync(
  "public/emr-modules.json",
  JSON.stringify({ modules: results, tabs, testimonials }, null, 2),
);
