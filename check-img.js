const fs = require('fs');

function checkTransparency(file) {
  const buf = fs.readFileSync(file);
  // Color type is at offset 25
  const colorType = buf[25];
  console.log(`${file} color type: ${colorType} (4=Grayscale+Alpha, 6=TrueColor+Alpha, 3=Indexed)`);
}

checkTransparency('bosch.png');
checkTransparency('disney.png');
