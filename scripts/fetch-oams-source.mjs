import fs from "fs";
import https from "https";

const url = "https://reapmind.com/online-appointment-management-system/";

function fetchHtml(target) {
  return new Promise((resolve, reject) => {
    https
      .get(target, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchHtml(res.headers.location).then(resolve).catch(reject);
        }
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

const html = await fetchHtml(url);
fs.writeFileSync("public/oams-source.html", html);
console.log("saved", html.length);
