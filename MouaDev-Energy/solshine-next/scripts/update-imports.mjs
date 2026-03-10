import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'components');
const APP_DIR = path.join(process.cwd(), 'app');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css') || file.endsWith('.js') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
};

const replaceInFiles = () => {
  const files = [...walk(SRC_DIR), ...walk(APP_DIR)];
  let updatedCount = 0;
  files.forEach((file) => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    // Positive lookahead or similar tricky regex. Instead just match all .png/.jpg/.jpeg
    // inside quotes, then check if it starts with http
    const regex = /(["'`])([^"'`]+?\.(png|jpg|jpeg))(["'`])/gi;
    
    content = content.replace(regex, (match, p1, p2, p3, p4) => {
        if (p2.startsWith('http://') || p2.startsWith('https://')) {
            return match; // don't touch external urls
        }
        // It's a local file. Replace extension with .webp
        const parsed = path.parse(p2);
        // path.parse('foo/bar.png') => { root: '', dir: 'foo', base: 'bar.png', ext: '.png', name: 'bar' }
        const newPath = (parsed.dir ? parsed.dir + '/' : '') + parsed.name + '.webp';
        return `${p1}${newPath}${p4}`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    }
  });
  console.log(`✅ Updated image paths in ${updatedCount} files.`);
};

replaceInFiles();
