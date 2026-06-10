import fs from "fs";

const html = fs.readFileSync("public/omd-source.html", "utf8");

// Extract main content area - between hero and footer-ish
const blocks = [];

for (const m of html.matchAll(/class="elementor-heading-title[^"]*"[^>]*>([^<]+(?:<[^/][^>]*>[^<]*)*?)<\/(?:h[1-6]|div|span)>/gi)) {
  const text = m[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  if (text.length > 3) blocks.push({ kind: "H", text });
}

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

const seen = new Set();
const out = blocks.filter((b) => {
  const k = b.text.slice(0, 100);
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});

const noise = /^(About|Services|Industries|Contact|Portfolio|Who we are|Meet our Team|Get In Touch|Explore More|Facebook|Instagram|Twitter|Menu|Company|Resources|Technologies|Hire Developers|Full Name|Phone Number|Send|Trusted by|©2023|Mumbai|Bangalore|USA|Development Center)/i;

const filtered = out.filter((b) => !noise.test(b.text) && b.text.length < 2500);

filtered.forEach((b) => console.log(`=== ${b.kind} ===\n${b.text}\n`));
console.error(`Blocks: ${filtered.length}`);

fs.writeFileSync("public/omd-text-blocks.json", JSON.stringify(filtered, null, 2));
