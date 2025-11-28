# Image Download Guide

Due to website security (CORS) and CDN protections, automated downloading doesn't work. Here are the best manual methods:

---

## Method 1: Browser DevTools (Recommended - Most Reliable)

This is the most reliable method to get all images from the website.

### For Each Gallery Page:

1. **Visit the gallery page** in Chrome or Firefox
   - Example: https://www.globalbunkers.us/bank-liquidation

2. **Open DevTools**
   - Press `F12` or Right-click → Inspect
   - Go to the **Network** tab

3. **Filter for images**
   - Type `jpg` or `png` in the filter box
   - Or click the **Img** button to filter images only

4. **Refresh the page**
   - Press `Cmd+R` (Mac) or `Ctrl+R` (Windows)
   - All images will load in the Network tab

5. **Download each image**
   - Click on an image in the Network tab
   - Right-click the image preview
   - Select "Open in new tab"
   - Right-click the image → "Save Image As..."
   - Save to the appropriate folder (see folder structure below)

### Folder Structure:

```
public/images/galleries/
├── bank-liquidation/        ← Bank Liquidation images here
├── panic-safe-rooms/        ← Panic & Safe Rooms images here
├── bunkers/                 ← Bunkers & Bomb Shelters images here
├── bulletproof-glass/       ← Bulletproof Glass images here
└── safes/                   ← Any Type of Safes images here
```

**Naming convention:** `image-1.jpg`, `image-2.jpg`, etc. (any descriptive name works)

---

## Method 2: Right-Click Save (Quick but Tedious)

1. Visit each gallery page
2. Right-click on each image
3. "Save Image As..."
4. Save to the appropriate folder

**Note:** This only saves the displayed size, not the full resolution.

---

## Method 3: Browser Extension (Easiest)

### Install a Bulk Image Downloader:

**Chrome:**
- "Image Downloader" or "Download All Images"
- Install from Chrome Web Store

**Firefox:**
- "DownThemAll!" or "Save Images"
- Install from Firefox Add-ons

### Usage:
1. Visit gallery page
2. Click the extension icon
3. Select all images
4. Choose download folder
5. Bulk download all at once

---

## Method 4: Screenshot and Extract (For Quick Testing)

If you just want to test the site quickly:

1. Take screenshots of gallery pages
2. Place any image files in the gallery folders
3. This lets you see the layout while you work on getting real images

---

## Pages to Download From:

| Gallery Category | URL |
|-----------------|-----|
| **Bank Liquidation** | https://www.globalbunkers.us/bank-liquidation |
| **Panic & Safe Rooms** | https://www.globalbunkers.us/panic-and-safe-rooms |
| **Bunkers & Bomb Shelters** | https://www.globalbunkers.us/bunkers-and-bomb-shelters |
| **Bulletproof Glass** | https://www.globalbunkers.us/bulletproof-glass |
| **Any Type of Safes** | https://www.globalbunkers.us/any-type-of-safes |

Also download:
- Homepage carousel images (3-5 large hero images)
- Cover images for each gallery category

---

## After Downloading Images

### Step 1: Organize Images

Make sure images are in the correct folders:
```
public/images/galleries/bank-liquidation/image-1.jpg
public/images/galleries/bank-liquidation/image-2.jpg
public/images/galleries/panic-safe-rooms/image-1.jpg
... etc
```

### Step 2: Update Gallery Data File

Edit `src/lib/gallery-data.ts` and update the image filenames:

```typescript
images: [
  {
    id: "bank-1",
    url: "/images/galleries/bank-liquidation/image-1.jpg",  // ← Update this
    alt: "Bank vault door",  // ← Update description
  },
  {
    id: "bank-2",
    url: "/images/galleries/bank-liquidation/image-2.jpg",  // ← Update this
    alt: "Bank safe deposit boxes",
  },
  // Add more images...
]
```

### Step 3: Update Hero Images

Edit `src/components/home/HeroCarousel.tsx`:

```typescript
const slides = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",  // ← Update with actual filename
    title: "Custom Bunkers & Bomb Shelters",
    // ...
  },
  // ...
]
```

### Step 4: Restart Dev Server

```bash
# Kill the current server (Ctrl+C)
npm run dev
```

Your images should now appear on the site!

---

## Quick Check List

- [ ] Downloaded images from Bank Liquidation page
- [ ] Downloaded images from Panic & Safe Rooms page
- [ ] Downloaded images from Bunkers page
- [ ] Downloaded images from Bulletproof Glass page
- [ ] Downloaded images from Safes page
- [ ] Downloaded hero/carousel images from homepage
- [ ] Images placed in correct folders
- [ ] Updated `gallery-data.ts` with actual filenames
- [ ] Updated `HeroCarousel.tsx` with hero image filenames
- [ ] Restarted dev server
- [ ] Checked site to verify images load

---

## Pro Tips

1. **Download in high resolution**: When saving, look for the largest version available
2. **Optimize images**: Use [TinyPNG.com](https://tinypng.com) to compress images before using
3. **Descriptive filenames**: Use names like `bunker-interior-1.jpg` instead of `IMG_1234.jpg`
4. **Keep originals**: Save original files somewhere as backup
5. **WebP format**: Consider converting to WebP for better performance (Next.js does this automatically)

---

## Image Recommendations

- **Max file size**: 500KB per image (compressed)
- **Min dimensions**: 1200px wide for hero images, 800px for gallery
- **Format**: JPG for photos, PNG for graphics with transparency
- **Aspect ratio**: Try to keep consistent within each gallery

---

## Troubleshooting

**Images not showing?**
- Check file paths in `gallery-data.ts`
- Verify images are in `public/images/` folder
- Make sure filenames match exactly (case-sensitive)
- Restart dev server

**Images too slow?**
- Compress images with TinyPNG
- Next.js automatically optimizes images, but source files should still be reasonable size

**Missing images?**
- Check Network tab in DevTools
- Look for 404 errors
- Verify filename spelling

---

## Need Help?

The image URLs on the current site use Format's CDN with security headers that prevent direct downloads. The browser methods above bypass this by using your authenticated browser session.

If you have trouble with any specific images, let me know and I can help troubleshoot!
