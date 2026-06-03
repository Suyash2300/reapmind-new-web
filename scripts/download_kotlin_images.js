const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/kotlin-1-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'kotlin.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Jetpack-Compose-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'jetpack-compose.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Coroutines-rl7hpjnfnkooqdqevddlxii6gpipb0qjl58h71osj8.png',
    name: 'coroutines.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/android-studio-1-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'android-studio.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/java-1-1-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'java.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/sdk-2-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'android-sdk.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/firebase-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'firebase.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Room-Persistence-Library-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'room.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Retrofit-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'retrofit.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/Hilt-rl7hpjnefpwtkywysj6wcjhtt7r9x5i0au552lqjjo.png',
    name: 'hilt.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/elementor/thumbs/TensorFlow-Lite-rl7hpkl8mjy3wkvln1lix19aelmn4ulqmysmjvp5dg.png',
    name: 'tensorflow-lite.png'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/Kotlin-Developers-1024x1024.png',
    name: 'kotlin-developers.png'
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
  const dir = path.join(__dirname, '..', 'public', 'images', 'kotlin');
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
