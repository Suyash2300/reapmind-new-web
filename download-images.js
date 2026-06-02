const fs = require('fs');
const https = require('https');
const path = require('path');

const images = [
  {
    url: 'https://reapmind.com/wp-content/uploads/2023/05/Aroof_370x400-370x400-1.jpg',
    name: 'team-aroof.jpg'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2023/05/Bhaskar_370x400-370x400-1.jpg',
    name: 'team-bhaskar.jpg'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2024/11/keith.jpeg',
    name: 'team-keith.jpg'
  },
  {
    url: 'https://reapmind.com/wp-content/uploads/2023/05/Venkat_370x400-370x400-1.jpg',
    name: 'team-venkat.jpg'
  }
];

// Testimonial images (saved to public/images/contact/)
const testimonialImages = [
  {
    url: 'https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg',
    name: 'contact/testimonials-bg.jpg',
    dest: 'contact'
  },
  // Matthew Carter – no dedicated photo on site; using testimonials bg as placeholder
  {
    url: 'https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg',
    name: 'contact/matthew.jpg',
    dest: 'contact'
  },
  // Dr. Murugan Kandasamy – no dedicated photo on site; using testimonials bg as placeholder
  {
    url: 'https://reapmind.com/wp-content/uploads/2023/10/Reapmind-Client-Testimonials.jpg',
    name: 'contact/murugan.jpg',
    dest: 'contact'
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
  const dir = path.join(__dirname, 'public', 'images');
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
