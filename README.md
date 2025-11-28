# Global Bunkers US - Website

Modern, high-performance website for Global Bunkers US, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Performance Optimized**: Built-in image optimization, lazy loading
- **SEO Friendly**: Server-side rendering, meta tags, semantic HTML
- **Interactive Service Showcases**: Lightbox viewing, smooth transitions
- **Contact Form**: Integrated contact form with validation
- **Easy Content Management**: Structured data files for easy updates

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
gb/
├── src/
│   ├── app/                  # Next.js app router pages
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   ├── services/        # Service pages
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── home/            # Homepage components
│   │   ├── layout/          # Layout components (Header, Footer)
│   │   └── ui/              # Reusable UI components
│   ├── lib/                 # Utility functions and data
│   └── types/               # TypeScript type definitions
├── public/
│   └── images/              # Static images
└── scripts/                 # Utility scripts
```

## Content Management

### Updating Service Content

Edit `src/lib/service-data.ts` to update service categories and images.

### Adding Images

1. Place images in `public/images/galleries/[category-name]/`
2. Update the image references in `src/lib/service-data.ts`
3. The site will automatically optimize and serve them

### Migrating Images from Old Site

Run the image download helper script:

```bash
node scripts/download-images.js
```

This will create the necessary directories and provide instructions for downloading images from the existing website.

## Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Next.js and deploy
5. Set up custom domain in Vercel dashboard

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Design Improvements Over Original Site

1. **Performance**: Much faster loading times with Next.js optimization
2. **Mobile Experience**: Better mobile navigation and responsive design
3. **Modern Aesthetics**: Clean, professional design with smooth animations
4. **Accessibility**: WCAG compliant, keyboard navigation, screen reader support
5. **SEO**: Improved meta tags, semantic HTML, better content structure
6. **User Experience**: Intuitive navigation, lightbox image viewing, clear CTAs

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Images are currently using placeholders - replace with actual images
- Contact form needs backend integration for email sending
- Consider adding Google Analytics or similar tracking
- Consider adding a CMS (Sanity, Contentful) for easier content updates

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Fonts**: Google Fonts (Raleway)

## License

Copyright © 2024 Global Bunkers US. All rights reserved.

## Support

For technical support, contact: contact@globalbunkers.us
Phone: (415) 990-8051
