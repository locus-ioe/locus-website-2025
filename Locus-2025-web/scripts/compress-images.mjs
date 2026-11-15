/**
 * Image Compression Script for LOCUS 2025 Website
 * 
 * Compresses and resizes all images in public/assets/ and src/assets/
 * - Profile/team photos: resized to max 600px
 * - Content photos: resized to max 1600px
 * - Quality: 80 for JPEG, 80 for PNG
 * 
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ROOT = path.resolve('.');
const PUBLIC_ASSETS = path.join(ROOT, 'public', 'assets');
const SRC_ASSETS = path.join(ROOT, 'src', 'assets');

// Directories containing profile/team photos (resize to 600px)
const PROFILE_DIRS = [
  'teams', 'committee26', 'hack-a-week',
  'creative-teams', 'zerone/zeroneteam'
];

// Directories to skip
const SKIP_DIRS = ['video'];

let totalOriginal = 0;
let totalCompressed = 0;
let filesProcessed = 0;
let errors = [];

function isProfileDir(filePath) {
  const rel = path.relative(PUBLIC_ASSETS, filePath).replace(/\\/g, '/');
  return PROFILE_DIRS.some(d => rel.startsWith(d));
}

function shouldSkip(filePath) {
  const rel = path.relative(PUBLIC_ASSETS, filePath).replace(/\\/g, '/');
  return SKIP_DIRS.some(d => rel.startsWith(d));
}

async function compressImage(filePath, maxWidth) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) return;

  try {
    const originalSize = fs.statSync(filePath).size;
    
    // Skip files smaller than 50KB — already reasonable
    if (originalSize < 50 * 1024) return;

    const buffer = fs.readFileSync(filePath);
    let pipeline = sharp(buffer).rotate(); // auto-rotate based on EXIF

    // Resize to maxWidth, preserving aspect ratio
    const metadata = await sharp(buffer).metadata();
    if (metadata.width && metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    let outputBuffer;
    if (ext === '.png') {
      outputBuffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
    } else if (ext === '.webp') {
      outputBuffer = await pipeline.webp({ quality: 80 }).toBuffer();
    } else {
      // jpg/jpeg
      outputBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    }

    // Only write if we actually saved space
    if (outputBuffer.length < originalSize) {
      fs.writeFileSync(filePath, outputBuffer);
      const saved = originalSize - outputBuffer.length;
      const pct = ((saved / originalSize) * 100).toFixed(0);
      console.log(`  ✓ ${path.basename(filePath)}: ${(originalSize / 1024).toFixed(0)}KB → ${(outputBuffer.length / 1024).toFixed(0)}KB (−${pct}%)`);
      totalOriginal += originalSize;
      totalCompressed += outputBuffer.length;
      filesProcessed++;
    } else {
      console.log(`  ○ ${path.basename(filePath)}: already optimized (${(originalSize / 1024).toFixed(0)}KB)`);
    }
  } catch (err) {
    errors.push({ file: filePath, error: err.message });
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`);
  }
}

async function walkAndCompress(dir, maxWidth, baseDir) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (shouldSkip(fullPath)) {
        console.log(`  ⊘ Skipping ${path.relative(baseDir, fullPath)}/`);
        continue;
      }
      const width = isProfileDir(fullPath) ? 600 : maxWidth;
      await walkAndCompress(fullPath, width, baseDir);
    } else {
      await compressImage(fullPath, maxWidth);
    }
  }
}

async function main() {
  console.log('\n🔧 LOCUS Image Compression\n');

  // Process public/assets
  console.log('📂 Processing public/assets/ ...');
  // Profile dirs get 600px, everything else gets 1600px
  for (const entry of fs.readdirSync(PUBLIC_ASSETS, { withFileTypes: true })) {
    const fullPath = path.join(PUBLIC_ASSETS, entry.name);
    if (entry.isDirectory()) {
      if (shouldSkip(fullPath)) {
        console.log(`  ⊘ Skipping ${entry.name}/`);
        continue;
      }
      const maxW = isProfileDir(fullPath) ? 600 : 1600;
      console.log(`\n  📁 ${entry.name}/ (max ${maxW}px)`);
      await walkAndCompress(fullPath, maxW, PUBLIC_ASSETS);
    } else {
      await compressImage(fullPath, 1600);
    }
  }

  // Process src/assets
  console.log('\n📂 Processing src/assets/ ...');
  await walkAndCompress(SRC_ASSETS, 1600, SRC_ASSETS);

  console.log('\n' + '─'.repeat(50));
  console.log(`📊 Summary:`);
  console.log(`   Files compressed: ${filesProcessed}`);
  console.log(`   Original total:   ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Compressed total: ${(totalCompressed / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Saved:            ${((totalOriginal - totalCompressed) / 1024 / 1024).toFixed(1)} MB (−${totalOriginal ? ((1 - totalCompressed / totalOriginal) * 100).toFixed(0) : 0}%)`);
  if (errors.length) {
    console.log(`   Errors: ${errors.length}`);
    errors.forEach(e => console.log(`     - ${e.file}: ${e.error}`));
  }
  console.log('');
}

main().catch(console.error);

