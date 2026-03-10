import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

const getFiles = (dir, extArray) => {
  let filesToReturn = [];
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      filesToReturn = filesToReturn.concat(getFiles(fullPath, extArray));
    } else {
      const ext = path.extname(fullPath).toLowerCase();
      if (extArray.includes(ext)) {
        filesToReturn.push(fullPath);
      }
    }
  }
  return filesToReturn;
};

const optimizeImages = async () => {
  const exts = ['.png', '.jpg', '.jpeg'];
  const images = getFiles(PUBLIC_DIR, exts);

  console.log(`Found ${images.length} images to optimize.`);

  for (const img of images) {
    const parsed = path.parse(img);
    const webpPath = path.join(parsed.dir, `${parsed.name}.webp`);

    try {
      await sharp(img)
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`✅ Converted: ${parsed.base} -> ${parsed.name}.webp`);
      
      // Delete original
      fs.unlinkSync(img);
      console.log(`🗑️ Deleted original: ${parsed.base}`);
    } catch (err) {
      console.error(`❌ Error converting ${img}:`, err);
    }
  }

  console.log('✅ All done!');
};

optimizeImages();
