# 🚀 Deployment Guide - YOTTEBA Makati

Complete guide to deploy your site to Vercel (fastest & easiest).

## ✅ Pre-Deployment Checklist

Before deploying, verify:

- [ ] Build succeeds locally: `npm run build`
- [ ] All store information is correct (address, phone, hours)
- [ ] Google Maps embed is working
- [ ] Instagram link is correct
- [ ] All images are in `public/images/` (if added)

## 📋 Step-by-Step: GitHub → Vercel

### Step 1: Create GitHub Repository

```bash
# Navigate to project directory
cd /Users/takahirokadoya/yotteba-makati

# Initialize Git
git init

# Add all files
git add .

# Create first commit
git commit -m "🚀 Initial commit: YOTTEBA Makati official website

- Next.js 15 + TypeScript + Tailwind
- Complete store information (Chino Roces, Makati)
- Google Maps integration
- Instagram & phone links
- SEO optimized for Makati audience
- Responsive design
- Menu showcase with carousel
"

# Create main branch
git branch -M main
```

### Step 2: Push to GitHub

```bash
# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/yotteba-makati.git

# Push to GitHub
git push -u origin main
```

If you don't have a repository yet:

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `yotteba-makati`
3. Description: "Official website for YOTTEBA Izakaya Revolution - Makati"
4. Set to Public or Private
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"
7. Follow the commands shown (similar to above)

### Step 3: Deploy on Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub account

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select your GitHub account
   - Find `yotteba-makati` repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto)
   - **Output Directory:** `.next` (auto)
   - **Install Command:** `npm install` (auto)

   Leave everything as default - Vercel auto-configures Next.js!

4. **Deploy:**
   - Click "Deploy"
   - Wait ~2 minutes
   - Done! 🎉

### Step 4: Get Your Live URL

Once deployed, you'll get:

- **Production URL:** `https://yotteba-makati.vercel.app`
- Or a custom URL (see below)

## 🌐 Custom Domain (Optional)

To use your own domain (e.g., `yotteba-makati.com`):

1. **Buy Domain:**
   - GoDaddy, Namecheap, Google Domains, etc.

2. **Add to Vercel:**
   - Go to your project on Vercel
   - Settings → Domains
   - Add your domain
   - Follow DNS instructions

3. **Update DNS:**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Or A record to Vercel's IP (shown in instructions)
   - Wait 24-48 hours for propagation

## 🔄 Future Updates

Whenever you make changes:

```bash
# Make your changes in code editor

# Test locally
npm run dev

# Build and verify
npm run build

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to GitHub
git push

# Vercel auto-deploys! ✨
```

Vercel will automatically:
- Detect the push
- Build your site
- Deploy to production
- Takes ~1-2 minutes

## 🔧 Vercel Configuration (Optional)

Create `vercel.json` in root if you need custom config:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["sin1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 📊 Monitoring & Analytics

### Vercel Analytics (Free)

1. Go to your project on Vercel
2. Click "Analytics" tab
3. Enable Vercel Analytics
4. Get real-time visitor stats

### Google Analytics (Optional)

See [README.md](README.md) for setup instructions.

## 🐛 Common Deployment Issues

### Build Fails on Vercel

**Error:** "Module not found"
- Check `package.json` has all dependencies
- Run `npm install` locally and commit `package-lock.json`

**Error:** TypeScript errors
- Fix locally with `npm run build`
- Commit fixes and push

### Environment Variables

If you add `.env.local` variables:

1. Don't commit `.env.local` to Git
2. Add variables in Vercel dashboard:
   - Settings → Environment Variables
   - Add each variable
   - Redeploy

### Google Maps Not Showing

If the map doesn't load:

1. Check iframe `src` URL is correct
2. Verify no ad blockers are interfering
3. Try incognito mode
4. Check browser console for errors

## 🎯 Performance Tips

### Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image'

<Image
  src="/images/tebasaki.jpg"
  alt="Tebasaki"
  width={400}
  height={300}
  quality={85}
/>
```

### Lighthouse Score

Check your site's performance:

1. Open DevTools (F12)
2. Lighthouse tab
3. Run audit
4. Aim for 90+ on all metrics

## 📞 Support

Need help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Issues:** Create an issue in your repo

## ✅ Post-Deployment Checklist

After successful deployment:

- [ ] Test site on mobile device
- [ ] Click all links (Instagram, phone, maps)
- [ ] Test Google Maps embed
- [ ] Check SEO with [metatags.io](https://metatags.io)
- [ ] Share site URL with team
- [ ] Add link to Instagram bio
- [ ] Submit to Google Search Console
- [ ] Share on social media!

---

**Your site is now live! 🎉**

Production URL: `https://yotteba-makati.vercel.app` (or your custom domain)
