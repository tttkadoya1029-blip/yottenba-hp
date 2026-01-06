# YOTTEBA Makati - Official Website

Authentic Japanese Izakaya in the heart of Makati. This is the official website for YOTTEBA Izakaya Revolution.

## 🏪 Store Information

**Address:**
Unit G-H, Ground Floor, Marvin Plaza Building
2153 Chino Roces Ave, Brgy Pio del Pilar
Makati City, 1230 Metro Manila

**Hours:** Open daily 11:00 AM – 1:00 AM
**Phone:** +63 917 133 3460
**Instagram:** [@yotteba_makati](https://www.instagram.com/yotteba_makati/)

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Embla Carousel** (menu showcase)

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 📦 Deploy to Vercel (Recommended)

### Option 1: Via GitHub (Recommended)

1. **Initialize Git and push to GitHub:**

```bash
cd yotteba-makati
git init
git add .
git commit -m "Initial commit: YOTTEBA Makati website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yotteba-makati.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
yotteba-makati/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── hero.tsx        # Hero section
│   │   ├── about.tsx       # About section
│   │   ├── how-to-enjoy.tsx
│   │   ├── menu-showcase.tsx
│   │   ├── location.tsx    # Location with Google Maps
│   │   └── social-news.tsx
│   ├── ui/
│   │   ├── carousel.tsx    # Reusable carousel
│   │   └── section.tsx     # Section wrapper
│   ├── site-header.tsx
│   └── site-footer.tsx
├── public/
│   └── images/             # Place your images here
└── package.json
```

## 🖼 Adding Images

1. Place images in `public/images/`
2. Update the carousel items in `components/sections/menu-showcase.tsx`
3. Reference images using `/images/your-image.jpg`

Example:

```tsx
<img src="/images/tebasaki-tare.jpg" alt="Tebasaki Tare" />
```

## 🎨 Customization

### Update Store Information

Edit [components/sections/location.tsx](components/sections/location.tsx:11-28)

### Update Menu Items

Edit [components/sections/menu-showcase.tsx](components/sections/menu-showcase.tsx:6-28)

### Update SEO Metadata

Edit [app/layout.tsx](app/layout.tsx:4-32)

### Color Scheme

The site uses a dark theme with subtle gold accents. To adjust:

Edit `app/globals.css` and Tailwind classes in components.

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)
✅ SEO optimized (title, description, Open Graph)
✅ Google Maps integration
✅ Instagram link
✅ Smooth scroll animations
✅ Touch-friendly carousel
✅ Fast loading (static generation)
✅ Production-ready build

## 🔧 Environment Variables

No environment variables required for basic deployment.

Optional (for analytics):

```bash
# .env.local
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your GA4 Measurement ID
2. Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// Inside <body>
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🐛 Troubleshooting

### Build Errors

If you see TypeScript errors:

```bash
npm run build
```

Check the error message and fix any type issues.

### Port Already in Use

If port 3000 is busy:

```bash
npm run dev -- -p 3001
```

## 📝 Next Steps

1. **Add Real Images**
   - Replace placeholder cards with actual food/drink photos
   - Optimize images (use WebP format)

2. **Expand Menu**
   - Create separate pages for Food & Drinks
   - Add pricing (if desired)

3. **Add Reservation System**
   - Integrate with booking platform
   - Or link to phone/WhatsApp

4. **Instagram Feed**
   - Embed Instagram posts
   - Use Instagram Graph API or third-party widget

5. **Multi-language**
   - Add English/Japanese toggle
   - Use next-intl or similar

## 📄 License

© 2026 YOTTEBA Makati. All rights reserved.

---

Built with ❤️ using Next.js
