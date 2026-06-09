import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  ["hero.png", "https://reapmind.com/wp-content/uploads/2024/11/Swift-Developers-1024x1024.png"],
  ["tech-illustration.png", "https://reapmind.com/wp-content/uploads/2023/04/Large.png"],
  ["tech-swift.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-rl7hpkla36h9dlbslnygx81b9k8e92hf3mszwlqud8.png"],
  ["tech-swiftui.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-UI-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-combine.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-Combine-rl7hpklap3v6yaqin31tppjhlb43y03oqscnytpyv0.png"],
  ["tech-objective-c.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Objective-c-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-uikit.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/UI-kit-rl7hpkla36h9dlbslnygx81b9k8e92hf3mszwlqud8.png"],
  ["tech-xcode.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/x-code-rl7hpkl8vbpibhz7e1i91o6you5t4dn4c0t86r3l6s.png"],
  ["tech-testflight.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Test-flight-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-app-store.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/app-store-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-arkit.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/ARKit-rl7hpjng9i2qeelzs07gff6cv83994r1qzvpnuywu4.png"],
  ["tech-core-ml.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Core-ml-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-cloudkit.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/CloudKit-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-core-data.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Core-data-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["bosch.png", "https://reapmind.com/wp-content/uploads/2023/10/bosch.png"],
  ["oracle.png", "https://reapmind.com/wp-content/uploads/2023/10/oracle.png"],
  ["disney-client.png", "https://reapmind.com/wp-content/uploads/2023/10/disney-client.png"],
  ["siemens-client.png", "https://reapmind.com/wp-content/uploads/2023/10/Siemens-client.png"],
  ["client-logos-21.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-21.png"],
  ["client-logos-6.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-6.png"],
  ["client-logos-23.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-23.png"],
  ["client-logos-14.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-14.png"],
  ["client-logos-22.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-22.png"],
  ["client-logos-1.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-1.png"],
  ["client-logos.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos.png"],
  ["client-logos-2.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-2.png"],
  ["client-logos-3.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-3.png"],
  ["client-logos-12.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-12.png"],
  ["client-logos-4.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-4.png"],
  ["client-logos-5.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-5.png"],
  ["client-logos-7.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-7.png"],
  ["client-logos-8.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-8.png"],
  ["client-logos-9.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-9.png"],
  ["client-logos-11.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-11.png"],
  ["client-logos-13.png", "https://reapmind.com/wp-content/uploads/2023/04/client-logos-13.png"],
  ["portfolio-leep.png", "https://reapmind.com/wp-content/uploads/2024/10/Leep.png"],
  ["portfolio-happy-harvest.webp", "https://reapmind.com/wp-content/uploads/2023/05/Happy-HArvest-2-1.webp"],
  ["portfolio-carloana.webp", "https://reapmind.com/wp-content/uploads/2023/05/Carloana.webp"],
  ["testimonial-mirza.jpg", "https://reapmind.com/wp-content/uploads/2023/08/2.jpg"],
  ["testimonial-jeremy.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/jeremy-del-zotto-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["testimonial-gunjan.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Gunjan-jain-rl7hpjnjx2fx53mc5j2h28jfwh1az7zyvojnph3l4c.png"],
  ["testimonial-roland.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Roland_owens-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["testimonial-shibulal.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/S.D-Sgibulal-rl7hpkle3wgx8ewtu04vd6dwaxokjz43x2g869spfc.png"],
  ["testimonial-matthew.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
  ["testimonial-murugan.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
];

const dir = path.join("public", "swift-hire");
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

for (const [name, url] of ASSETS) {
  const dest = path.join(dir, name);
  if (fs.existsSync(dest)) {
    console.log(`skip ${name}`);
    continue;
  }
  process.stdout.write(`download ${name}... `);
  await download(url, dest);
  console.log("ok");
}
