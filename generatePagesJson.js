const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'png3x');
const files = fs.readdirSync(folder)
  .filter(f => f.toLowerCase().endsWith('.png'))
  .sort();

fs.writeFileSync(
  path.join(folder, 'pages.json'),
  JSON.stringify(files, null, 2)
);

console.log('pages.json generated with', files.length, 'files');
