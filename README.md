# Kulhad & Co. — Chai Website

React 18 + Vite + React Router + Tailwind CSS + Framer Motion + Lucide icons. Cart state uses React Context and is saved in localStorage.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serve the production build
```

## Routes
`/`, `/our-story`, `/chai-menu`, `/experience`, `/gallery`, `/contact`, `/cart`, `/order` (unknown paths show a 404 page).

## Deploy to Vercel
1. Push this folder to GitHub.
2. Import the repo at vercel.com/new. The Vite preset is detected from `vercel.json`.
3. `vercel.json` rewrites every path to `/index.html`, so direct links and refreshes work.

## Configure
- Business name, address, email, phone and map location: `src/data.js` (`BUSINESS`).
- Menu, gallery, reviews and delivery fee: `src/data.js`.
- Checkout is a demo. No payment is taken and no order is placed. Connect a real gateway before going live.
- Product and gallery pictures are emoji on coloured tiles. Replace them with photos in `public/` and update `src/data.js`.
# kulhad-and-co-website
Kulhad &amp; Co. – Premium Chai Brand Website
