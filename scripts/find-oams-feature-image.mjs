import fs from "fs";

const html = fs.readFileSync("public/oams-source.html", "utf8");
const idx = html.indexOf("Features of Online Appointment Management System");
const chunk = html.slice(idx, idx + 15000);

const imgs = [...chunk.matchAll(/src="(https:\/\/reapmind\.com\/wp-content\/uploads\/[^"]+)"/gi)].map(
  (m) => m[1],
);

console.log("Images near features section:");
[...new Set(imgs)].forEach((u) => console.log(u));
