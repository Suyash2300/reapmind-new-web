import { NextResponse } from "next/server";
import https from "https";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

const ASSETS_TO_DOWNLOAD = {
  "pd-lakshya.png": "https://reapmind.com/wp-content/uploads/2025/03/banner-1.png",
  "pd-mteducare.png": "https://reapmind.com/wp-content/uploads/2025/03/banner-2.png"
};

export async function GET() {
  const destDir = path.join(process.cwd(), "public", "portfolio");
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const results = [];
  for (const [name, url] of Object.entries(ASSETS_TO_DOWNLOAD)) {
    const destPath = path.join(destDir, name);
    try {
      await new Promise<void>((resolvePromise, rejectPromise) => {
        const fileStream = fs.createWriteStream(destPath);
        https.get(url, { timeout: 10000 }, (res) => {
          if (res.statusCode !== 200) {
            rejectPromise(new Error(`Status: ${res.statusCode}`));
            return;
          }
          res.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            resolvePromise();
          });
        }).on('error', (err) => {
          fileStream.close();
          if (fs.existsSync(destPath)) {
             fs.unlinkSync(destPath);
          }
          rejectPromise(err);
        });
      });
      results.push({ name, status: "Success" });
    } catch (e: any) {
      results.push({ name, status: `Failed: ${e.message}` });
    }
  }

  return NextResponse.json({ success: true, results });
}
