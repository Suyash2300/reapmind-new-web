const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-rl7hpkl9uepz1zp1pvs8i09n23e2ipu9x9vyobned0.png',
    name: 'swift.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-UI-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'swiftui.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Swift-Combine-rl7hpkl9uepz1zp1pvs8i09n23e2ipu9x9vyobned0.png',
    name: 'swift-combine.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Objective-c-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'objective-c.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/UI-kit-rl7hpkl9uepz1zp1pvs8i09n23e2ipu9x9vyobned0.png',
    name: 'ui-kit.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/x-code-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'xcode.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Test-flight-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'test-flight.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/app-store-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'app-store.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/ARKit.png',
    name: 'arkit.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Core-ml-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'core-ml.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/CloudKit-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'cloudkit.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Core-data-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'core-data.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Swift-Developers-1024x1024.png',
    name: 'swift-developers.png'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

async function main() {
  const dir = path.join(__dirname, '..', 'public', 'images', 'swift');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (const img of images) {
    const dest = path.join(dir, img.name);
    console.log(`Downloading ${img.url} to ${dest}...`);
    try {
      await download(img.url, dest);
      console.log(`Downloaded ${img.name} successfully.`);
    } catch (err) {
      console.error(`Error downloading ${img.name}:`, err.message);
    }
  }
}

main();
