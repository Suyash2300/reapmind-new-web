import fs from "fs";

const html = fs.readFileSync("public/angular-hire-source.html", "utf8");
const names = ["JavaScript", "Karma", "ng-inspector", "AngularJS", "Gulp", "Jasmine", "Scopes", "HTML", "CSS"];

for (const name of names) {
  let idx = 0;
  while ((idx = html.indexOf(name, idx)) !== -1) {
    const chunk = html.slice(Math.max(0, idx - 300), idx + 300);
    const img = chunk.match(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/);
    if (img) console.log(name, "->", img[0]);
    idx += name.length;
  }
}
