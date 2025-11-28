# Quick Start: Download Images in 10 Minutes

Follow these simple steps to get your images from the current website.

## Step-by-Step Guide

### 1. Open Browser DevTools (2 minutes)

**For Bank Liquidation Gallery:**

```
1. Go to: https://www.globalbunkers.us/bank-liquidation
2. Press F12 (or right-click → Inspect)
3. Click "Network" tab at the top
4. Click "Img" button (or type "jpg" in filter)
5. Press Cmd+R (Mac) or Ctrl+R (Windows) to refresh
```

You'll see all the images loading in the list!

### 2. Download Each Image (5 minutes per gallery)

**For each image in the list:**

```
1. Click on the image name in the Network tab
2. A preview appears on the right
3. Right-click the preview image
4. Select "Open in new tab"
5. Right-click the image → "Save Image As..."
6. Navigate to: gb/public/images/galleries/bank-liquidation/
7. Name it: bank-1.jpg, bank-2.jpg, etc.
8. Click "Save"
```

**Repeat for all images in that gallery.**

### 3. Repeat for Other Galleries

Do the same process for:
- ✅ Bank Liquidation → save to `public/images/galleries/bank-liquidation/`
- ✅ Panic & Safe Rooms → save to `public/images/galleries/panic-safe-rooms/`
- ✅ Bunkers → save to `public/images/galleries/bunkers/`
- ✅ Bulletproof Glass → save to `public/images/galleries/bulletproof-glass/`
- ✅ Safes → save to `public/images/galleries/safes/`

### 4. Update the Code (2 minutes)

**Edit:** `src/lib/gallery-data.ts`

Find the Bank Liquidation section:
```typescript
{
  id: "bank-liquidation",
  title: "Bank Liquidation",
  slug: "bank-liquidation",
  description: "...",
  coverImage: "/images/gallery-bank.jpg",
  images: [
    {
      id: "bank-1",
      url: "/images/galleries/bank-liquidation/bank-1.jpg",  // ← Change filename
      alt: "Bank vault door",
    },
    {
      id: "bank-2",
      url: "/images/galleries/bank-liquidation/bank-2.jpg",  // ← Change filename
      alt: "Bank safe",
    },
    // ADD MORE AS NEEDED
    {
      id: "bank-3",
      url: "/images/galleries/bank-liquidation/bank-3.jpg",
      alt: "Security vault",
    },
  ],
},
```

**Repeat for each gallery category.**

### 5. Test It! (1 minute)

```bash
# If dev server is not running:
npm run dev

# Visit: http://localhost:3001
# Click "Galleries" → "Bank Liquidation"
# Your images should appear!
```

---

## Even Faster: Use a Browser Extension

### Install "Image Downloader" Extension

**Chrome:**
1. Go to Chrome Web Store
2. Search "Download All Images"
3. Install it

**Usage:**
1. Visit: https://www.globalbunkers.us/bank-liquidation
2. Click the extension icon
3. Check "Select All"
4. Click "Download"
5. Move files to `public/images/galleries/bank-liquidation/`

This bulk downloads all images at once!

---

## Hero/Carousel Images

For the homepage carousel:

1. Visit: https://www.globalbunkers.us
2. Use same DevTools method
3. Download the 3-5 largest images
4. Save to: `public/images/hero/`
5. Name them: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`

Then update `src/components/home/HeroCarousel.tsx`:

```typescript
const slides = [
  {
    id: 1,
    image: "/images/hero/hero-1.jpg",  // ← Update this
    title: "Custom Bunkers & Bomb Shelters",
    // ...
  },
  // ...
]
```

---

## Checklist

- [ ] Bank Liquidation images downloaded (5-10 images)
- [ ] Panic & Safe Rooms images downloaded (5-10 images)
- [ ] Bunkers images downloaded (5-10 images)
- [ ] Bulletproof Glass images downloaded (5-10 images)
- [ ] Safes images downloaded (5-10 images)
- [ ] Hero carousel images downloaded (3-5 images)
- [ ] Updated `gallery-data.ts` with filenames
- [ ] Updated `HeroCarousel.tsx` with hero images
- [ ] Restarted dev server
- [ ] Tested galleries in browser

---

## Visual Example

Here's what DevTools looks like:

```
┌─────────────────────────────────────────────────┐
│ Chrome DevTools                         [ _ □ × ]│
├──────┬──────────────────────────────────────────┤
│Eleme │ Console │ Sources │ Network │ ...       │
├──────┴────┬──────────────────────────────────┬──┤
│  Img  All │ Filter: jpg                      │🔍│
├───────────┴──────────────────────────────────┴──┤
│ Name                        Size      Time      │
├───────────────────────────────────────────────┤
│ ▶ bank-vault-1.jpg         245 KB    345ms   │ ← Click here
│ ▶ safe-deposit-2.jpg       198 KB    289ms   │
│ ▶ security-door-3.jpg      312 KB    421ms   │
│ ...                                            │
├────────────────────────────────────────────────┤
│ Preview:                                       │
│ ┌──────────────────────────┐                  │
│ │                          │                  │
│ │   [Image Preview]        │ ← Right-click here
│ │                          │   "Open in new tab"
│ └──────────────────────────┘                  │
└────────────────────────────────────────────────┘
```

---

## Need Help?

- Full detailed guide: `IMAGE-DOWNLOAD-GUIDE.md`
- Can't find images? Check the Network tab
- Images not showing? Verify file paths in `gallery-data.ts`
- Still stuck? Let me know!

**Estimated time: 30-40 minutes for all galleries**
