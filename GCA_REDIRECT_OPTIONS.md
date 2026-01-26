# GCA Fast Track Domain Redirect Options

You want to keep gcafast.com redirecting to your consolidated site at rheumify.org/gca-fast-track. Here are your options:

---

## Option 1: GoDaddy Domain Forwarding (Easiest, Keep Current Setup)

**Cost:** ~$15-20/year (your current GoDaddy renewal)
**Difficulty:** Easy
**Time:** 5 minutes

### Steps:
1. Log into [GoDaddy](https://www.godaddy.com)
2. Go to **My Products** → **Domains**
3. Click on **gcafast.com**
4. Find **Forwarding** or **Domain Forwarding** section
5. Set up forwarding:
   - **Forward to:** `https://rheumify.org/gca-fast-track`
   - **Redirect type:** `301 (Permanent)`
   - **Forward settings:** Forward only (or with masking if you want the URL bar to show gcafast.com)
6. Save changes

**Pros:** Simple, no technical knowledge needed, keeps working as long as you pay GoDaddy
**Cons:** Still paying GoDaddy annually

---

## Option 2: Transfer Domain to Cloudflare (Cheaper Long-term)

**Cost:** ~$9-10/year (Cloudflare at-cost pricing)
**Difficulty:** Medium
**Time:** 30-60 minutes + up to 5 days for transfer

### Steps:
1. **Unlock domain at GoDaddy:**
   - Go to GoDaddy Domain Settings
   - Turn off "Domain Lock"
   - Get your Authorization/EPP code

2. **Transfer to Cloudflare:**
   - Sign up at [cloudflare.com](https://cloudflare.com) (free account)
   - Go to **Registrar** → **Transfer Domains**
   - Enter `gcafast.com`
   - Enter your authorization code
   - Pay the transfer fee (~$9-10)
   - Wait for transfer (usually 5 days)

3. **Set up redirect in Cloudflare:**
   - Go to **Rules** → **Redirect Rules**
   - Create a rule:
     - **When:** Hostname equals `gcafast.com`
     - **Then:** Dynamic redirect to `https://rheumify.org/gca-fast-track`
     - **Status code:** 301

**Pros:** Cheapest ongoing cost, better DNS management, free SSL
**Cons:** Transfer takes time, slightly more complex setup

---

## Option 3: Transfer Domain to Vercel (Consolidated Management)

**Cost:** ~$20/year
**Difficulty:** Medium
**Time:** 30 minutes + transfer time

### Steps:
1. Unlock domain at GoDaddy and get authorization code
2. In Vercel dashboard, go to **Settings** → **Domains**
3. Click **Transfer In** and enter `gcafast.com`
4. Follow the transfer process
5. Once transferred, set up redirect:
   - Add `gcafast.com` to your Rheumify project
   - Create a `vercel.json` file with redirect rules (see below)

### vercel.json redirect configuration:
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "destination": "https://rheumify.org/gca-fast-track",
      "permanent": true
    }
  ]
}
```

**Pros:** Everything managed in one place (Vercel)
**Cons:** Slightly more expensive than Cloudflare

---

## Option 4: Free Redirect with Netlify (If Keeping Netlify)

**Cost:** Free
**Difficulty:** Easy-Medium
**Time:** 15 minutes

Since you already use Netlify (rheumify.netlify.app), you could:

1. Point gcafast.com DNS to Netlify
2. Create a simple redirect site on Netlify

### Steps:
1. Create a new Netlify site (or use existing)
2. Create a `_redirects` file:
   ```
   /* https://rheumify.org/gca-fast-track 301!
   ```
3. In GoDaddy, update DNS to point to Netlify:
   - A record: `75.2.60.5`
   - CNAME for www: `[your-netlify-site].netlify.app`
4. In Netlify, add `gcafast.com` as a custom domain

**Pros:** Free, you already have Netlify
**Cons:** More complex setup, still paying GoDaddy for domain registration

---

## Recommendation

**If you want simplest solution:** Option 1 (GoDaddy forwarding) - 5 minutes, works immediately

**If you want cheapest long-term:** Option 2 (Cloudflare transfer) - Save ~$10/year, better DNS

**If you want everything in one place:** Option 3 (Vercel transfer) - Manage domain with your hosting

---

## Important Notes

1. **Don't let the domain expire** before setting up redirects - you'll lose the GCA Fast Track name
2. **301 redirects are SEO-friendly** - search engines will update their indexes
3. **Test thoroughly** after setting up - try gcafast.com, www.gcafast.com, and gcafast.com/any-page
4. **Update any printed materials** or business cards to use the new URL over time

---

## Quick Comparison

| Option | Cost/Year | Setup Time | Complexity |
|--------|-----------|------------|------------|
| GoDaddy Forwarding | ~$18 | 5 min | Easy |
| Cloudflare Transfer | ~$10 | 1 week | Medium |
| Vercel Transfer | ~$20 | 1 week | Medium |
| Netlify Redirect | ~$18 (GoDaddy) | 15 min | Medium |

Let me know which option you'd like to pursue and I can provide more detailed step-by-step instructions!
