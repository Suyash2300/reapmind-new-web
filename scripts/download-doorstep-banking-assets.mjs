import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "doorstep-banking-blog");
const url = "https://reapmind.com/how-much-does-it-cost-to-develop-a-doorstep-banking-app/";

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
console.log("Images found:", unique.length);
unique.forEach((u) => console.log(u));

async function download(src, filename) {
  const full = path.join(outDir, filename);
  if (fs.existsSync(full)) {
    console.log("skip", filename);
    return;
  }
  const r = await fetch(src);
  if (!r.ok) {
    console.error("fail", src, r.status);
    return;
  }
  const buf = Buffer.from(await r.arrayBuffer());
  fs.writeFileSync(full, buf);
  console.log("saved", filename, buf.length);
}

for (const src of unique) {
  const name = decodeURIComponent(src.split("/").pop()?.split("?")[0] ?? "image.png");
  await download(src, name);
}
