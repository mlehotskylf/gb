/**
 * Image Download Script for Global Bunkers Website
 *
 * This script helps download images from the existing website.
 *
 * IMPORTANT: Due to CORS and security restrictions, you may need to:
 * 1. Use browser DevTools to download images manually
 * 2. Use a browser extension like "Download All Images"
 * 3. Or use this script as a guide for wget/curl commands
 *
 * Usage:
 *   node scripts/download-images.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

// Gallery URLs to scrape
const galleries = [
  {
    name: 'bank-liquidation',
    url: 'https://www.globalbunkers.us/bank-liquidation'
  },
  {
    name: 'panic-safe-rooms',
    url: 'https://www.globalbunkers.us/panic-and-safe-rooms'
  },
  {
    name: 'bunkers',
    url: 'https://www.globalbunkers.us/bunkers-and-bomb-shelters'
  },
  {
    name: 'bulletproof-glass',
    url: 'https://www.globalbunkers.us/bulletproof-glass'
  },
  {
    name: 'safes',
    url: 'https://www.globalbunkers.us/any-type-of-safes'
  }
];

console.log('Image Download Helper Script');
console.log('============================\n');
console.log('Due to website security, automatic downloading may not work.');
console.log('Here are manual download instructions:\n');

console.log('METHOD 1: Using Browser DevTools');
console.log('1. Open each gallery page in your browser');
console.log('2. Right-click and select "Inspect" or press F12');
console.log('3. Go to the Network tab');
console.log('4. Filter by "Img"');
console.log('5. Refresh the page');
console.log('6. Right-click each image and "Open in new tab"');
console.log('7. Save images to the appropriate folder\n');

console.log('METHOD 2: Using wget (Mac/Linux)');
console.log('Run these commands in your terminal:\n');

galleries.forEach(gallery => {
  const dir = `public/images/galleries/${gallery.name}`;
  console.log(`# For ${gallery.name}`);
  console.log(`mkdir -p ${dir}`);
  console.log(`# Then manually save images from ${gallery.url} to ${dir}/\n`);
});

console.log('\nMETHOD 3: Browser Extension');
console.log('Install "Download All Images" or similar extension');
console.log('Visit each gallery page and use the extension to download all images\n');

console.log('Target directories:');
galleries.forEach(gallery => {
  const dir = path.join(__dirname, '..', 'public', 'images', 'galleries', gallery.name);

  // Create directories
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Exists: ${dir}`);
  }
});

console.log('\nAfter downloading images:');
console.log('1. Place images in the directories above');
console.log('2. Update src/lib/gallery-data.ts with actual image filenames');
console.log('3. Restart the development server\n');
