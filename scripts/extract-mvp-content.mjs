import fs from "fs";
import { JSDOM } from "jsdom";

const html = fs.readFileSync("public/mvp-source.html", "utf8");
const dom = new JSDOM(html);
const doc = dom.window.document;

// Remove nav, header, footer noise - focus on main content area
const content = doc.querySelector("#content") || doc.body;

const sections = [];
const walk = (el, depth = 0) => {
  if (!el || depth > 12) return;
  const tag = el.tagName?.toLowerCase();
  if (["script", "style", "noscript", "svg"].includes(tag)) return;

  if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
    const text = el.textContent?.replace(/\s+/g, " ").trim();
    if (text && text.length > 2) sections.push({ type: tag.toUpperCase(), text });
  } else if (tag === "p") {
    const text = el.textContent?.replace(/\s+/g, " ").trim();
    if (text && text.length > 30 && !text.includes("wp-content")) {
      sections.push({ type: "P", text: text.slice(0, 500) });
    }
  } else if (tag === "li") {
    const text = el.textContent?.replace(/\s+/g, " ").trim();
    if (text && text.length > 10 && text.length < 300) {
      sections.push({ type: "LI", text });
    }
  }

  for (const child of el.children || []) walk(child, depth + 1);
};

walk(content);

// Dedupe consecutive similar
const out = [];
for (const s of sections) {
  if (out.length && out[out.length - 1].text === s.text) continue;
  out.push(s);
}

out.forEach((s) => console.log(`[${s.type}] ${s.text}\n`));
console.error(`\nTotal blocks: ${out.length}`);
