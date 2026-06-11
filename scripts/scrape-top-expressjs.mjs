import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = "https://reapmind.com/top-expressjs-development-company/";
const publicDir = path.join(__dirname, "..", "public", "top-expressjs");

fs.mkdirSync(publicDir, { recursive: true });

function fetchText(target) {
  return new Promise((resolve, reject) => {
    https.get(target, (res) => {
      let data = "";
      res.on("data", (c) => { data += c; });
      res.on("end", () => resolve(data));
    }).on("error", reject);
  });
}

function downloadFile(fileUrl, filePath) {
  return new Promise((resolve, reject) => {
    https.get(fileUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadFile(res.headers.location, filePath).then(resolve).catch(reject);
        return;
      }
      const stream = fs.createWriteStream(filePath);
      res.pipe(stream);
      stream.on("finish", () => { stream.close(); resolve(filePath); });
    }).on("error", reject);
  });
}

const html = await fetchText(url);
const title = html.match(/<title>([^<]+)/)?.[1];
const desc = html.match(/name="description" content="([^"]+)"/)?.[1];
const ogImage = html.match(/property="og:image" content="([^"]+)"/)?.[1];
console.log("TITLE:", title);
console.log("DESC:", desc);
console.log("OG_IMAGE:", ogImage);

const regex = /(?:src|data-src|data-lazy-src)="([^"]+wp-content\/uploads[^"]+)"/g;
const unique = [...new Set([...html.matchAll(regex)].map((m) => m[1]))];
console.log(`Found ${unique.length} images`);

for (const raw of unique) {
  let fullUrl = raw.startsWith("//") ? "https:" + raw : raw.startsWith("/") ? "https://reapmind.com" + raw : raw;
  const safeName = path.basename(new URL(fullUrl).pathname).replace(/[^a-zA-Z0-9._-]/g, "-");
  const filePath = path.join(publicDir, safeName);
  if (!fs.existsSync(filePath)) {
    try {
      await downloadFile(fullUrl, filePath);
      console.log("Downloaded:", safeName);
    } catch (e) {
      console.error("Failed:", safeName, e.message);
    }
  } else {
    console.log("Exists:", safeName);
  }
}

fs.writeFileSync(path.join(publicDir, "manifest.json"), JSON.stringify({ meta: { title, desc, ogImage }, urls: unique }, null, 2));
console.log("Done.");
