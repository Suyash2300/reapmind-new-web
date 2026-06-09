import fs from "fs";

const html = fs.readFileSync("public/angular-hire-source.html", "utf8");
const urls = [...html.matchAll(/https:\/\/reapmind\.com\/wp-content\/uploads\/[^"'\s)]+/g)].map((m) => m[0]);
const uniq = [...new Set(urls)];

const terms = ["Angular", "Gulp", "Karma", "Jasmine", "CSS", "JavaScript", "HTML", "Large", "ng-inspector", "inspector", "Scopes", "scopes", "Binding", "Controller", "data-binding"];
for (const term of terms) {
  const matches = uniq.filter((u) => u.toLowerCase().includes(term.toLowerCase()));
  if (matches.length) {
    console.log(`\n# ${term}`);
    matches.forEach((u) => console.log(u));
  }
}
