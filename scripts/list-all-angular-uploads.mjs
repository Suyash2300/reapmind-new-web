import fs from "fs";

const html = fs.readFileSync("public/angular-hire-source.html", "utf8");
const urls = [...new Set([...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) => m[0]))];
urls.sort().forEach((u) => console.log(u));
