# Rheumify - Master Rheumatology

A comprehensive rheumatology learning platform built with Next.js.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

## Deploying to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Rheumify website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rheumify-site.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your `rheumify-site` repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Connect Custom Domain (rheumify.org)**
   - In Vercel dashboard, go to your project → Settings → Domains
   - Add `rheumify.org`
   - Vercel will provide DNS records to add to your domain registrar
   - Add the A record and CNAME as instructed

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

## Project Structure

```
rheumify-site/
├── app/
│   ├── layout.js          # Root layout with nav and footer
│   ├── page.js            # Homepage
│   ├── globals.css        # Global styles
│   ├── rheumatologists/   # For Rheumatologists page
│   ├── fellows/           # For Fellows page
│   ├── residents/         # For IM Residents page (Coming Soon)
│   ├── students/          # For Medical Students page (Coming Soon)
│   ├── patients/          # Patient Resources page
│   ├── gca-fast-track/    # GCA Fast Track Clinic page
│   └── tools/
│       └── scriptswap/    # ScriptSwap citation tool
├── public/                # Static assets
├── next.config.js         # Next.js configuration
└── package.json
```

## Adding Content

### To add a new page:
1. Create a new folder in `app/` with the URL path name
2. Add a `page.js` file inside
3. Export metadata for SEO
4. Export default function with your content

### To modify styles:
Edit `app/globals.css` - uses CSS custom properties for the Rheumify brand colors:
- `--navy-dark: #0A1628`
- `--navy-medium: #111D32`
- `--blue-accent: #6B8BB8`

## Redirecting gcafast.com

See the separate `GCA_REDIRECT_OPTIONS.md` file for detailed instructions on setting up redirects from gcafast.com to rheumify.org/gca-fast-track.

## External Links

- **Rheumify Question Bank**: https://rheumify.glideapp.io
- **RheumCast Podcast**: https://soundcloud.com/rheumify
- **ScriptCycle Template**: https://www.notion.com/templates/scriptcycle

## License

© 2026 Rheumify. All rights reserved.
