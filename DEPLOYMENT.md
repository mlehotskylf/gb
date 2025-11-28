# Deployment Guide

## Vercel Deployment (Recommended)

Vercel is made by the creators of Next.js and offers the best integration and performance for Next.js applications.

### Initial Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Configure Build** (Optional - Auto-detected)
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`
   - Development command: `npm run dev`

4. **Environment Variables** (Optional)
   - Go to Project Settings > Environment Variables
   - Add environment variables if needed:
     - `NEXT_PUBLIC_SITE_URL` (your custom domain)
     - Email service keys if you set up contact form backend

5. **Deploy**
   - Click "Deploy"
   - First deployment takes 1-2 minutes
   - You get a `.vercel.app` URL immediately
   - Automatic deployments on every push to main branch

6. **Custom Domain**
   - Go to Project Settings > Domains
   - Add your custom domain (`www.globalbunkers.us`)
   - Vercel provides automatic SSL certificates
   - Update DNS records as instructed

### Cost
- **Free tier**: Includes custom domain, SSL, and generous limits
- **Pro plan**: $20/month (only if you need more team features or bandwidth)
- Perfect for this size website on the free tier

### Benefits
- Built by Next.js creators - best performance and compatibility
- Automatic HTTPS/SSL
- Global CDN with edge caching
- Automatic image optimization
- Zero configuration needed
- Preview deployments for every PR
- 99.99% uptime SLA

---

## Alternative: Netlify

### Setup

1. Sign up at [netlify.com](https://netlify.com)
2. Click "Add new site" > "Import from Git"
3. Choose your repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All placeholder images are replaced with real ones
- [ ] Contact form has backend integration (or use a service like Formspree)
- [ ] Environment variables are set
- [ ] Test build locally: `npm run build && npm start`
- [ ] Update contact information if needed
- [ ] Test on mobile devices
- [ ] Run accessibility check
- [ ] Set up analytics (Google Analytics, etc.)

---

## Post-Deployment

### DNS Configuration

Point your domain to your hosting provider:

**For Vercel:**
```
CNAME  www  cname.vercel-dns.com
```

**For Netlify:**
```
CNAME  www  your-site.netlify.app
```

### SSL Certificate
All recommended platforms (Vercel, Netlify) provide free automatic SSL certificates.

### Monitoring
- Set up uptime monitoring (UptimeRobot, Pingdom)
- Configure error tracking (Sentry)
- Monitor performance (Web Vitals)

---

## Continuous Deployment

Once set up, deployment is automatic:

1. Make changes locally
2. Commit to Git: `git commit -m "Update content"`
3. Push to GitHub: `git push`
4. Platform automatically builds and deploys
5. Live in 1-2 minutes!

---

## Troubleshooting

### Build Fails
- Check build logs in platform dashboard
- Ensure `npm run build` works locally
- Verify all dependencies are in `package.json`

### Images Not Loading
- Ensure images are in `public/images/`
- Check image paths in code
- Verify Next.js image optimization is working

### Slow Performance
- Enable caching headers
- Optimize images (WebP format)
- Use platform CDN (automatic on all platforms)

---

## Backup and Rollback

All platforms keep deployment history:
- Vercel: Go to Deployments tab, click "..." on previous build, select "Promote to Production"
- Netlify: Deployments > click "Publish deploy" on previous version

---

## Need Help?

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Vercel support: [vercel.com/support](https://vercel.com/support)
