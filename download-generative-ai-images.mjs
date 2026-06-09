import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = "https://reapmind.com/generative-ai-development-company/";
const publicDir = path.join(__dirname, "public", "generative-ai");

fs.mkdirSync(publicDir, { recursive: true });

function fetchText(target) {
  return new Promise((resolve, reject) => {
    https
      .get(target, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function downloadFile(fileUrl, filePath) {
  return new Promise((resolve, reject) => {
    https
      .get(fileUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          downloadFile(res.headers.location, filePath).then(resolve).catch(reject);
          return;
        }
        const stream = fs.createWriteStream(filePath);
        res.pipe(stream);
        stream.on("finish", () => {
          stream.close();
          resolve(filePath);
        });
      })
      .on("error", reject);
  });
}

const html = await fetchText(url);
const regex = /(?:src|data-src|data-lazy-src)="([^"]+wp-content\/uploads[^"]+)"/g;
const matches = [...html.matchAll(regex)].map((m) => m[1]);
const unique = [...new Set(matches)];

console.log(`Found ${unique.length} images`);

for (const raw of unique) {
  let fullUrl = raw;
  if (fullUrl.startsWith("//")) fullUrl = "https:" + fullUrl;
  else if (fullUrl.startsWith("/")) fullUrl = "https://reapmind.com" + fullUrl;

  const parsed = new URL(fullUrl);
  const base = path.basename(parsed.pathname);
  const safeName = base.replace(/[^a-zA-Z0-9._-]/g, "-");
  const filePath = path.join(publicDir, safeName);

  if (!fs.existsSync(filePath)) {
    try {
      await downloadFile(fullUrl, filePath);
      console.log("Downloaded:", safeName);
    } catch (err) {
      console.error("Failed:", safeName, err.message);
    }
  } else {
    console.log("Exists:", safeName);
  }
}

console.log("Done.");
