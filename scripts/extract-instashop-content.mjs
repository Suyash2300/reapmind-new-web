import fs from "fs";
import { JSDOM } from "jsdom";

const html = fs.readFileSync("public/instashop-source.html", "utf8");
const doc = new JSDOM(html).window.document;

const title = doc.querySelector("title")?.textContent?.trim();
const meta = doc.querySelector('meta[name="description"]')?.getAttribute("content");
const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute("content");
const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href");

console.log("SEO:", { title, meta, ogImage, canonical });

const imgs = [...doc.querySelectorAll("img")]
  .map((i) => ({ src: i.src, alt: i.alt || "" }))
  .filter((i) => i.src && !i.src.includes("data:") && !i.src.includes("gravatar"))
  .filter((i) => i.src.includes("wp-content") || i.src.includes("uploads"));

const uniqueImgs = [...new Map(imgs.map((i) => [i.src, i])).values()];
console.log("\nIMAGES:", JSON.stringify(uniqueImgs, null, 2));

const article =
  doc.querySelector(".elementor-widget-theme-post-content") ||
  doc.querySelector("article") ||
  doc.querySelector(".entry-content") ||
  doc.querySelector("#content");

const blocks = [];
const walk = (el, depth = 0) => {
  if (!el || depth > 15) return;
  const tag = el.tagName?.toLowerCase();
  if (["script", "style", "noscript", "svg"].includes(tag)) return;

  if (["h1", "h2", "h3", "h4"].includes(tag)) {
    const text = el.textContent?.replace(/\s+/g, " ").trim();
    if (text && text.length > 2) blocks.push({ type: tag.toUpperCase(), text });
  } else if (tag === "p") {
    const text = el.textContent?.replace(/\s+/g, " ").trim();
    if (text && text.length > 20) blocks.push({ type: "P", text });
  } else if (tag === "li") {
    const text = el.textContent?.replace(/\s+/g, " ").trim();
    if (text && text.length > 5 && text.length < 500) blocks.push({ type: "LI", text });
  } else if (tag === "table") {
    const rows = [...el.querySelectorAll("tr")].map((tr) =>
      [...tr.querySelectorAll("th,td")].map((c) => c.textContent?.replace(/\s+/g, " ").trim())
    );
    if (rows.length) blocks.push({ type: "TABLE", rows });
  }

  for (const child of el.children || []) walk(child, depth + 1);
};

walk(article);
console.log("\nBLOCKS:", blocks.length);
blocks.slice(0, 80).forEach((b) => {
  if (b.type === "TABLE") console.log(`[TABLE] ${b.rows.length} rows`);
  else console.log(`[${b.type}] ${b.text?.slice(0, 200)}`);
});
