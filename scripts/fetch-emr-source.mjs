import fs from "fs";
import https from "https";

const url = "https://reapmind.com/electronic-medical-record/";

function fetchHtml(target) {
  return new Promise((resolve, reject) => {
    https
      .get(target, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchHtml(res.headers.location).then(resolve).catch(reject);
        }
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

const html = await fetchHtml(url);
fs.writeFileSync("public/emr-source.html", html);
console.log("Wrote public/emr-source.html", html.length, "bytes");
