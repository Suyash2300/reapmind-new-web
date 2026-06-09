import fs from "fs";

const html = fs.readFileSync("public/ios-source.html", "utf8");
const urls = [
  ...new Set(
    [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+\.(?:png|jpg|jpeg|webp)/gi)].map(
      (m) => m[0]
    )
  ),
];
urls.sort().forEach((u) => console.log(u));
console.error("total:", urls.length);
