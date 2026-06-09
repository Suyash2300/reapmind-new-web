import fs from "fs";

const html = fs.readFileSync("public/mvp-source.html", "utf8");
const regex = /https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s>]+\.(?:png|jpg|jpeg|webp|gif)/gi;
const urls = [...new Set(html.match(regex) || [])];
// Prefer full-size (no -300x, -768x suffix)
const full = urls.filter(
  (u) => !/-\d+x\d+\.(png|jpg|jpeg|webp|gif)$/i.test(u) && !u.includes("/elementor/thumbs/")
);
full.forEach((u) => console.log(u));
console.error(`\nFull-size: ${full.length} / Total: ${urls.length}`);
