import { NextResponse } from "next/server";
import https from "https";
import http from "http";
import fs from "fs";
import path from "path";

const PORTFOLIO_URLS = [
  "https://reapmind.com/wp-content/uploads/2025/03/banner-1.png",
  "https://reapmind.com/wp-content/uploads/2025/03/banner-2.png",
  "https://reapmind.com/wp-content/uploads/2025/04/1.jpg",
  "https://reapmind.com/wp-content/uploads/2025/04/2.jpg",
  "https://reapmind.com/wp-content/uploads/2025/04/3.jpg",
  "https://reapmind.com/wp-content/uploads/2024/10/Municipal-Bank-hero-image.png",
  "https://reapmind.com/wp-content/uploads/2025/10/Featured-Image-2.png",
  "https://reapmind.com/wp-content/uploads/2025/08/Featured-Image-1-scaled.png",
  "https://reapmind.com/wp-content/uploads/2025/08/Featured-Image-2.png",
  "https://reapmind.com/wp-content/uploads/2025/05/Featured-Image-scaled.png"
];

function downloadImage(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const protocol = url.startsWith("https") ? https : http;
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlink(dest, () => {});
        downloadImage(response.headers.location!, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

export async function GET() {
  try {
    const results: string[] = [];
    const dir = path.join(process.cwd(), "public", "portfolio-scraped");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    for (const url of PORTFOLIO_URLS) {
      const name = url.split('/').pop() || 'image.png';
      const dest = path.join(dir, name);
      if (!fs.existsSync(dest)) {
        await downloadImage(url, dest);
        results.push(`Downloaded ${name}`);
      } else {
        results.push(`Exists ${name}`);
      }
    }

    return NextResponse.json({ success: true, results });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
