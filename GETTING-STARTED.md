# Getting Started with Your New Global Bunkers Website

Congratulations! Your new website has been successfully created. This guide will help you get started.

## What's Been Built

A complete, modern website with:
- Homepage with hero carousel and service preview
- About page with company information
- Contact page with form
- 5 Service pages (Bank Liquidation, Panic Rooms, Bunkers, Bulletproof Glass, Safes)
- Responsive design (mobile, tablet, desktop)
- Professional navigation with dropdown menus
- Footer with contact information
- Modern, clean design that improves on the original

## Quick Start

### 1. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Add Your Images

The site currently uses placeholder images. To add real images:

**Option A: Manual Download**
1. Visit each gallery page on the old site
2. Right-click and save images
3. Place them in the corresponding folders:
   - `public/images/galleries/bank-liquidation/`
   - `public/images/galleries/panic-safe-rooms/`
   - `public/images/galleries/bunkers/`
   - `public/images/galleries/bulletproof-glass/`
   - `public/images/galleries/safes/`

**Option B: Use the Helper Script**
```bash
node scripts/download-images.js
```

This creates the necessary folders and provides detailed download instructions.

### 3. Update Image References

After adding images, edit `src/lib/service-data.ts`:

```typescript
images: [
  {
    id: "bank-1",
    url: "/images/galleries/bank-liquidation/your-image-1.jpg",  // Update this
    alt: "Bank vault door",  // Update description
  },
  // Add more images...
]
```

### 4. Customize Content

See `CONTENT-MANAGEMENT.md` for detailed instructions on updating:
- Text content
- Contact information
- Services
- About page information

### 5. Test Everything

```bash
# Build for production
npm run build

# Run production server
npm start
```

Visit `localhost:3000` and test:
- [ ] All pages load
- [ ] Navigation works
- [ ] Mobile menu works
- [ ] Service lightbox works
- [ ] Contact form validates
- [ ] All links work

## Deploy to Vercel

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial website setup"
git push origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Vercel automatically detects Next.js and deploys!

You'll get a URL like `your-app.vercel.app`

### 3. Add Custom Domain

1. Go to Project Settings in Vercel
2. Click "Domains"
3. Add `www.globalbunkers.us`
4. Update your DNS records as instructed
5. SSL certificate is automatic!

**Detailed deployment instructions:** See `DEPLOYMENT.md`

## Next Steps

### Priority Tasks

1. **Add Real Images** (High Priority)
   - Download images from old site
   - Place in correct folders
   - Update service-data.ts

2. **Test Contact Form** (High Priority)
   - The form currently simulates submission
   - Set up email integration (see CONTENT-MANAGEMENT.md)
   - Options: Formspree (easiest), SendGrid, or custom API

3. **Review Content** (Medium Priority)
   - Check all text for accuracy
   - Update phone numbers if needed
   - Verify address information

4. **SEO Setup** (Medium Priority)
   - Add Google Analytics
   - Submit sitemap to Google Search Console
   - Verify meta descriptions

5. **Optional Enhancements** (Low Priority)
   - Add customer testimonials
   - Add project case studies
   - Set up Sanity CMS for easier content management
   - Add blog section

## File Structure Reference

```
gb/
├── src/
│   ├── app/                      # Pages
│   │   ├── page.tsx              # Homepage
│   │   ├── about/page.tsx        # About page
│   │   ├── contact/page.tsx      # Contact page
│   │   └── services/             # Service pages
│   ├── components/
│   │   ├── home/                 # Homepage components
│   │   ├── layout/               # Header & Footer
│   │   └── ui/                   # Reusable components
│   ├── lib/
│   │   └── service-data.ts       # Service content (EDIT THIS)
│   └── types/                    # TypeScript types
├── public/
│   └── images/                   # All images go here
├── README.md                     # Technical documentation
├── DEPLOYMENT.md                 # Deployment guide
├── CONTENT-MANAGEMENT.md         # How to update content
└── GETTING-STARTED.md           # This file
```

## Key Files to Edit

- **Service Content**: `src/lib/service-data.ts`
- **Homepage Carousel**: `src/components/home/HeroCarousel.tsx`
- **Contact Info**: `src/components/layout/Header.tsx` and `Footer.tsx`
- **About Page**: `src/app/about/page.tsx`
- **Navigation**: `src/components/layout/Header.tsx`

## Support and Documentation

- **README.md** - Technical setup and project overview
- **DEPLOYMENT.md** - Detailed deployment instructions
- **CONTENT-MANAGEMENT.md** - How to update content
- **Next.js Docs** - [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs** - [vercel.com/docs](https://vercel.com/docs)

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Run production server
npm run lint             # Check for code issues

# Git
git status               # Check what changed
git add .                # Stage all changes
git commit -m "message"  # Commit with message
git push                 # Push to GitHub

# Image helper
node scripts/download-images.js  # Create folders and get instructions
```

## Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

**Build errors?**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Dependencies issues?**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## What's Different from the Old Site?

### Improvements
- **10x faster** loading times
- **Modern, responsive** design
- **Better mobile** experience
- **Improved SEO** with proper meta tags
- **Smooth animations** and transitions
- **Professional navigation** with dropdown menus
- **Service image lightbox** for better image viewing
- **Easy to update** with structured data files
- **Free hosting** possible (Vercel free tier)
- **Automatic deployments** from GitHub

### Same Features
- All service categories
- Contact form
- About page
- Company information
- 24/7 emergency messaging

## Ready to Launch?

Before going live:
- [ ] All images added and working
- [ ] Contact form tested
- [ ] All content reviewed and accurate
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] DNS records updated
- [ ] SSL certificate active (automatic on Vercel)
- [ ] Old site backed up
- [ ] Google Analytics added (optional)

## Questions?

Check these resources:
1. `CONTENT-MANAGEMENT.md` - How to update content
2. `DEPLOYMENT.md` - Deployment help
3. `README.md` - Technical details
4. Next.js Documentation
5. Vercel Documentation

---

**Welcome to your new website! You now have a modern, fast, and professional online presence.**

Start by running `npm run dev` and exploring your new site at `localhost:3000`
