const fs = require('fs');
const glob = require('glob');

const directory = './distro';
const replacement = '';

glob.sync(`${directory}/**/*.css`).forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const replacedContent = content.replace(/\/\.\.\/static/g, replacement);
    fs.writeFileSync(file, replacedContent);
});
