# Punu N Gowda — Portfolio

Personal portfolio of **Punu N Gowda** — Full Stack Developer at Tata Consultancy Services (TCS), based in Bengaluru, India.

Built with **React 18 + Create React App 5 + Tailwind CSS 3**.

## Sections

- **Hero** — Name, rotating roles, summary, photo, social links and CV download
- **About** — Bio, quick facts and stats
- **Experience & Education** — TCS, Anakin Technologies, MCA 9.4/10 and BSc
- **Skills** — Languages, toolchain groups, certifications
- **Projects** — Full-stack systems (trading system, AI code analyser, OneCIAM) and data-analytics dashboards
- **Contact** — Email / phone / location and a message form

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build into /build
npm test         # run tests
```

## Deploy

The app is a static CRA build — `npm run build` then serve the `build/` folder (deployed on Vercel).

## Tech notes

- Tailwind config extends screens, fonts (Inter / Space Grotesk) and brand colors.
- Fonts loaded from Google Fonts (preconnected in `public/index.html`).
- Contact form posts to a Google Apps Script endpoint.
- Vercel Speed Insights via `@vercel/speed-insights`.