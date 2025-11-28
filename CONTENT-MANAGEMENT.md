# Content Management Guide

This guide shows you how to update website content without being a developer.

## Updating Text Content

### Homepage Carousel

Edit `src/components/home/HeroCarousel.tsx`

Find the `slides` array and update:
```typescript
const slides = [
  {
    id: 1,
    image: "/images/hero-bunkers.jpg",
    title: "Your Title Here",           // Change this
    subtitle: "Your subtitle here",      // Change this
    cta: {
      text: "Button Text",               // Change button text
      link: "/galleries/bunkers"         // Change button link
    },
  },
  // Add more slides...
];
```

### Gallery Categories

Edit `src/lib/gallery-data.ts`

Update category information:
```typescript
{
  id: "bank-liquidation",
  title: "Bank Liquidation",              // Display name
  slug: "bank-liquidation",               // URL slug (don't change)
  description: "Your description here",   // Category description
  coverImage: "/images/gallery-bank.jpg", // Cover image
  images: [
    {
      id: "bank-1",
      url: "/images/galleries/bank-liquidation/image1.jpg",  // Image path
      alt: "Description of image",                            // Alt text for SEO
      caption: "Optional caption"                             // Optional
    },
    // Add more images...
  ],
}
```

### Contact Information

Edit `src/components/layout/Footer.tsx` and `src/components/layout/Header.tsx`

Update phone, email, and address.

### About Page Content

Edit `src/app/about/page.tsx`

Find the text sections and update directly in the JSX.

---

## Adding Images

### Step 1: Prepare Images
1. Optimize images before uploading (use TinyPNG or similar)
2. Use descriptive filenames: `bunker-interior-1.jpg` not `IMG_1234.jpg`
3. Recommended formats: JPG for photos, PNG for graphics with transparency

### Step 2: Upload Images
1. Place images in the appropriate folder:
   - Homepage carousel: `public/images/hero/`
   - Gallery covers: `public/images/`
   - Gallery images: `public/images/galleries/[category-name]/`

### Step 3: Reference Images in Code
Update the path in the appropriate data file:
```typescript
image: "/images/galleries/bunkers/new-image.jpg"
```

---

## Adding a New Gallery Category

1. **Add images** to `public/images/galleries/new-category/`

2. **Edit** `src/lib/gallery-data.ts`

3. **Add new category object**:
```typescript
{
  id: "new-category",
  title: "New Category Name",
  slug: "new-category",
  description: "Category description",
  coverImage: "/images/gallery-new.jpg",
  images: [
    {
      id: "new-1",
      url: "/images/galleries/new-category/image1.jpg",
      alt: "Description"
    }
  ]
}
```

4. **Update navigation** in `src/components/layout/Header.tsx`:
```typescript
submenu: [
  // ... existing items
  { name: "New Category", href: "/galleries/new-category" },
]
```

---

## Updating Contact Form

### Change Form Fields

Edit `src/components/ui/ContactForm.tsx`

Find the `<select>` for subjects and add/remove options:
```typescript
<option value="new-subject">New Subject</option>
```

### Email Integration

To receive form submissions by email, you have several options:

#### Option 1: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update form action in `ContactForm.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' }
});
```

#### Option 2: SendGrid API
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get API key
3. Add to environment variables
4. Create API route in `src/app/api/contact/route.ts`

---

## SEO and Meta Tags

### Page Titles and Descriptions

Edit the metadata in each page file:

```typescript
// In src/app/about/page.tsx
export const metadata: Metadata = {
  title: "Your Page Title | Global Bunkers US",
  description: "Your page description for search engines",
  keywords: ["keyword1", "keyword2"],
};
```

### Homepage Meta Tags

Edit `src/app/layout.tsx` for site-wide meta tags.

---

## Adding a Blog or News Section

To add a blog:

1. Create `src/app/blog/page.tsx` for blog listing
2. Create `src/app/blog/[slug]/page.tsx` for individual posts
3. Create `src/lib/blog-data.ts` for blog post content
4. Add "Blog" to navigation in Header.tsx

Alternatively, integrate a headless CMS like:
- **Sanity** (recommended, free tier)
- **Contentful** (free tier)
- **Strapi** (self-hosted)

---

## Quick Content Updates Checklist

**Before making changes:**
- [ ] Make a backup (commit current version to Git)
- [ ] Test changes locally with `npm run dev`

**Common updates:**
- [ ] Phone number: Update in Header.tsx and Footer.tsx
- [ ] Email: Update in Footer.tsx and contact page
- [ ] Address: Update in Footer.tsx and contact page
- [ ] Gallery images: Add to appropriate folder, update gallery-data.ts
- [ ] Homepage carousel: Update HeroCarousel.tsx
- [ ] Services/pricing: Update About page

**After making changes:**
- [ ] Test in browser
- [ ] Check mobile view
- [ ] Commit to Git: `git commit -m "Update content"`
- [ ] Push to GitHub: `git push`
- [ ] Deployment happens automatically!

---

## Need Help?

### Common Questions

**Q: How do I preview changes before going live?**
A: Run `npm run dev` locally and view at localhost:3000

**Q: I broke something, how do I undo?**
A: Use Git: `git reset --hard HEAD` to undo uncommitted changes

**Q: Can I use a content management system?**
A: Yes! I recommend Sanity.io for easy content management. See SANITY-SETUP.md

**Q: How do I optimize images?**
A: Use [TinyPNG.com](https://tinypng.com) or [Squoosh.app](https://squoosh.app)

---

## Advanced: Setting up Sanity CMS

For truly non-technical content management, consider Sanity:

1. Run: `npm install @sanity/client next-sanity`
2. Sign up at [sanity.io](https://sanity.io)
3. Create a new project
4. Define content schemas
5. Use Sanity Studio for easy content editing

Detailed guide coming soon!
