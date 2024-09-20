const fs = require('fs');
const glob = require('glob');

const directory = './distro';
const replacement = 'css';

glob.sync(`${directory}/**/*.js`).forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const replacedContent = content.replace(/scss/g, replacement);
  fs.writeFileSync(file, replacedContent);
});
