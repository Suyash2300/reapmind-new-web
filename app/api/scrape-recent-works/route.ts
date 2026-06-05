import { NextResponse } from "next/server";
import https from "https";
import fs from "fs";
import path from "path";

export async function GET() {
  return new Promise((resolve) => {
    https.get('https://reapmind.com/top-product-design-and-development-company-in-india/', { timeout: 10000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const index = data.indexOf("What clients say about us");
        if (index === -1) {
          resolve(NextResponse.json({ error: "Not found" }));
          return;
        }
        // Extract 15000 characters around the header
        const context = data.substring(index, index + 15000);
        fs.writeFileSync(path.join(process.cwd(), "public", "testimonials-html.txt"), context);
        resolve(NextResponse.json({ success: true }));
      });
    });
  });
}
