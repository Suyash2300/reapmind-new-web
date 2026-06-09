import fs from "fs";

const html = fs.readFileSync("public/mvp-source.html", "utf8");

// Extract elementor heading widgets and text editor content from page body
const blocks = [];

// Headings in elementor-heading-title
for (const m of html.matchAll(/class="elementor-heading-title[^"]*"[^>]*>([^<]+(?:<[^/][^>]*>[^<]*)*?)<\/(?:h[1-6]|div|span)>/gi)) {
  const text = m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (text.length > 3) blocks.push({ kind: "H", text });
}

// elementor-widget-text-editor paragraphs
for (const m of html.matchAll(/elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/gi)) {
  const inner = m[1];
  for (const p of inner.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
    const text = p[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (text.length > 20 && !text.includes("elementor")) blocks.push({ kind: "P", text });
  }
  for (const li of inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)) {
    const text = li[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (text.length > 5) blocks.push({ kind: "LI", text });
  }
}

// Dedupe
const seen = new Set();
const out = blocks.filter((b) => {
  const k = b.text.slice(0, 80);
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

// Filter out nav/footer noise
const noise = /^(About|Services|Industries|Contact|Portfolio|Who we are|Meet our Team|Get In Touch|Explore More|Facebook|Instagram|Twitter|Menu|Company|Resources|Technologies|Hire Developers|Full Name|Phone Number|Send|Trusted by|©2023)/i;

const filtered = out.filter((b) => !noise.test(b.text) && b.text.length < 2000);

filtered.forEach((b) => console.log(`=== ${b.kind} ===\n${b.text}\n`));
console.error(`Blocks: ${filtered.length}`);
