const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/RM-Image.png',
    dest: './public/images/company-workspace.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Teams-rl7hpeyg0j7fmvixa3ucfr60r7b50ck8pjrhmofnz4.jpeg',
    dest: './public/images/company-team.jpg'
  }
];

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  for (const img of images) {
    console.log(`Downloading ${img.url}...`);
    try {
      await download(img.url, img.dest);
      console.log(`Saved to ${img.dest}`);
    } catch (err) {
      console.error(`Error downloading ${img.url}:`, err.message);
    }
  }
}

main();
