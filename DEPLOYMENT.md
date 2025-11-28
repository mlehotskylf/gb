# Deployment Guide

## Railway Deployment (Recommended)

Railway is a modern platform that makes deploying Next.js apps incredibly simple.

### Initial Setup

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your `gb` repository
   - Railway will auto-detect Next.js

3. **Configure Build**
   - Railway automatically detects Next.js configuration
   - Build command: `npm run build`
   - Start command: `npm start`
   - No additional configuration needed!

4. **Environment Variables** (Optional)
   - Go to your project settings
   - Add environment variables if needed:
     - `NEXT_PUBLIC_SITE_URL` (your custom domain)
     - Email service keys if you set up contact form backend

5. **Deploy**
   - Railway automatically deploys on every push to main branch
   - First deployment takes 2-3 minutes
   - You'll get a temporary `.railway.app` URL

6. **Custom Domain**
   - Go to Settings > Domains
   - Add your custom domain (`www.globalbunkers.us`)
   - Update DNS records as instructed
   - Railway provides automatic SSL certificates

### Cost
- **Free tier**: Good for testing (500 hours/month)
- **Hobby plan**: $5/month (recommended for production)
- **Pro plan**: $20/month (if you need more resources)

---

## Alternative: Vercel Deployment

Vercel is made by the creators of Next.js and offers excellent integration.

### Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Done! You get a `.vercel.app` URL

4. **Custom Domain**
   - Go to Project Settings > Domains
   - Add `www.globalbunkers.us`
   - Update DNS records as instructed

### Cost
- **Free tier**: Includes custom domain, SSL, and generous limits
- Perfect for this size website

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

**For Railway:**
```
CNAME  www  your-app.railway.app
```

**For Vercel:**
```
CNAME  www  cname.vercel-dns.com
```

### SSL Certificate
All recommended platforms (Railway, Vercel, Netlify) provide free automatic SSL certificates.

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
- Railway: Click on previous deployment to rollback
- Vercel: Go to Deployments tab, click previous build
- Netlify: Deployments > click "Publish deploy" on previous version

---

## Need Help?

- Railway docs: [docs.railway.app](https://docs.railway.app)
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
