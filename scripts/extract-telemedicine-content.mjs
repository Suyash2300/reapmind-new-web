import https from "https";
import fs from "fs";

function fetchText(target) {
  return new Promise((resolve, reject) => {
    https.get(target, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

const html = await fetchText("https://reapmind.com/top-telemedicine-app-development-company/");
// strip scripts/styles
const text = html
  .replace(/<script[\s\S]*?<\/script>/gi, "")
  .replace(/<style[\s\S]*?<\/style>/gi, "")
  .replace(/<[^>]+>/g, "\n")
  .replace(/&nbsp;/g, " ")
  .replace(/&#8217;/g, "'")
  .replace(/&hellip;/g, "...")
  .replace(/\n{3,}/g, "\n\n");

const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
const keywords = ["ReapMind Process", "Patient Panel", "Doctor Panel", "Admin Panel", "Tech stack", "Agile", "Planning"];
for (const kw of keywords) {
  const idx = lines.findIndex((l) => l.includes(kw));
  if (idx >= 0) {
    console.log("\n===", kw, "===");
    console.log(lines.slice(idx, idx + 15).join("\n"));
  }
}

// find hero bg images in elementor data
const bgMatches = [...html.matchAll(/background-image:\s*url\(([^)]+)\)/g)].map((m) => m[1].replace(/['"]/g, ""));
console.log("\nBG IMAGES:", [...new Set(bgMatches)].slice(0, 20));

const heroIdx = html.indexOf("Top Telemedicine Development Company");
const heroChunk = html.slice(Math.max(0, heroIdx - 5000), heroIdx + 8000);
const heroImgs = [...heroChunk.matchAll(/(?:src|data-src)="([^"]+)"/g)].map((m) => m[1]);
console.log("\nHERO IMAGES:", [...new Set(heroImgs)]);

const procIdx = html.indexOf("ReapMind Process");
const procChunk = html.slice(procIdx, procIdx + 12000);
const procImgs = [...procChunk.matchAll(/(?:src|data-src)="([^"]+)"/g)].map((m) => m[1]);
console.log("\nPROCESS IMAGES:", [...new Set(procImgs)]);
