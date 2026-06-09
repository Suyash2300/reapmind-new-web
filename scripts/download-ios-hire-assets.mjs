import fs from "fs";
import path from "path";
import https from "https";

const ASSETS = [
  ["hero.jpg", "https://reapmind.com/wp-content/uploads/2024/11/IOS-Developer-1024x1024.png"],
  ["tech-illustration.png", "https://reapmind.com/wp-content/uploads/2023/04/Large.png"],
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
  ["tech-swift.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-2-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-objective-c.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Objective-c-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-swiftui.png", "https://reapmind.com/wp-content/uploads/2024/11/Swift-UI-1.png"],
  ["tech-uikit.png", "https://reapmind.com/wp-content/uploads/2024/11/UI-kit-1.png"],
  ["tech-core-data.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Core-data-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-combine.png", "https://reapmind.com/wp-content/uploads/2024/11/Swift-Combine-1.png"],
  ["tech-arkit.png", "https://reapmind.com/wp-content/uploads/2024/11/ARKit-1.png"],
  ["tech-core-ml.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Core-ml-1-rl7hpjneoho3wkjpobd4rr9i0ollni55h726avtzjw.png"],
  ["tech-cloudkit.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/CloudKit-1-rl7hpjnex9fe866gk3jd6z1685fxdusanjz7j5xfk4.png"],
  ["tech-firebase.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/firebase-2-rl7hpkl8vbpe86icitrrc90ym2gyv78vtbpns5sldo.png"],
  ["tech-aws.png", "https://reapmind.com/wp-content/uploads/elementor/thumbs/AWS-7-rl7hpjnfaf2bpkmkvrsptsoojcpezdr0f3crdl2lkg.png"],
  ["tech-azure.png", "https://reapmind.com/wp-content/uploads/2024/11/Azure-6.png"],
  ["testimonial-mirza.jpg", "https://reapmind.com/wp-content/uploads/2023/08/0.jpg"],
  ["testimonial-jeremy.jpg", "https://reapmind.com/wp-content/uploads/2023/08/1.jpg"],
  ["testimonial-gunjan.jpg", "https://reapmind.com/wp-content/uploads/2023/08/2.jpg"],
  ["testimonial-roland.jpg", "https://reapmind.com/wp-content/uploads/2023/08/5.jpg"],
  ["testimonial-shibulal.jpg", "https://reapmind.com/wp-content/uploads/2023/08/S.-D.-Shibulal.jpg"],
  ["testimonial-matthew.jpg", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Matthew-Carter-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
  ["testimonial-murugan.jpg", "https://reapmind.com/wp-content/uploads/elementor/thumbs/Murugan-Candasamy-rl7hpjnjx2fmwsy6zhq8somfpjt7ca0dkxsqozu3lk.png"],
];

const dir = path.join("public", "ios-hire");
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
