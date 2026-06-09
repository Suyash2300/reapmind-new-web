import fs from "fs";

const html = fs.readFileSync("public/pwa-source.html", "utf8");
const regex = /https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s>]+\.(?:png|jpg|jpeg|webp|gif)/gi;
const urls = [...new Set(html.match(regex) || [])];
console.log(urls.join("\n"));
console.error(`\nTotal: ${urls.length}`);
