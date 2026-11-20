# True Love Tattoo Club – website

React + Vite single-page website for True Love Tattoo Club, 404 S 5th St, Leavenworth, KS 66048.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build      # outputs to dist/
npm run preview
```

## Deploy (Vercel or Cloudflare Pages)
- Framework preset: **Vite** · Build command: `npm run build` · Output directory: `dist`
- No environment variables. Single page with #anchors, so no rewrite rules needed.

## After deploying
1. Add the real HTTPS URL to `index.html` as `<link rel="canonical" href="...">` and as `"url"` in the JSON-LD block.
2. Create `public/sitemap.xml` with that URL and add a `Sitemap:` line to `public/robots.txt`.
3. Optional: verify in Google Search Console. The owner adds the website in the Google Business Profile; Google decides approval.

## Editing content
All business facts live in `src/data/businessInfo.js`. Keep the hours/address in the JSON-LD block of `index.html` in sync.

## Needs owner verification
- **Hours conflict:** Google listing shows Tue–Sat 12–6 pm; the window decal photo says 10 am–6 pm. The site currently uses 12–6 pm. Change `openTime`, `hours` and the JSON-LD if wrong.
- Authorisation to publish as the official site; permission to use the photos
- Whether to add an email, booking link, pricing, walk-in policy or ID/age rules (none supplied, none shown)
- Service wording (Traditional, Black & Grey, Colour, Patchwork & Sleeves, Custom & Linework) is based on the supplied photos
