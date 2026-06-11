import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "turbotax-blog");
const url = "https://reapmind.com/how-much-does-it-cost-to-build-a-tax-preparation-app-like-turbotax/";

fs.mkdirSync(outDir, { recursive: true });

const res = await fetch(url);
const html = await res.text();

const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
const meta = html.match(/name="description"\s+content="([^"]+)"/i)?.[1];
const ogImage = html.match(/property="og:image"\s+content="([^"]+)"/i)?.[1];
const canonical = html.match(/rel="canonical"\s+href="([^"]+)"/i)?.[1];

console.log("SEO:", { title, meta, ogImage, canonical });

const imgMatches = [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s>]+\.(?:png|jpe?g|webp)/gi)];
const unique = [...new Set(imgMatches.map((m) => m[0]))];
console.log("Images:", unique.length);

const needed = unique.filter((u) => {
  const n = u.toLowerCase();
  if (n.includes("logo") || n.includes("gravatar") || n.includes("elementor/thumbs")) return false;
  if (n.includes("-300x") || n.includes("-768x") || n.includes("-1536x") || n.includes("-2048x")) return false;
  return n.includes("1024x") || n.includes("Featured") || n.includes("blog-image") || n.includes("imgpsh");
});

async function download(src, filename) {
  const full = path.join(outDir, filename);
  if (fs.existsSync(full)) return console.log("skip", filename);
  const r = await fetch(src);
  if (!r.ok) return console.error("fail", src);
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(full, buf);
  console.log("saved", filename, buf.length);
}

for (const src of needed) {
  const name = decodeURIComponent(src.split("/").pop()?.split("?")[0] ?? "image.png");
  await download(src, name);
}
