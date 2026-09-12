# Punu N Gowda — Portfolio

Personal portfolio of **Punu N Gowda** — Full Stack Developer at Tata Consultancy Services (TCS) and Data Analyst, based in Bengaluru, India.

Built with **React 18 + Create React App 5 + Tailwind CSS 3 + Framer Motion**.

## Sections

- **Home** — Intro card with photo, social links and CV download
- **About** — Bio, background and quick stats
- **Resume** — Professional experience (TCS, Anakin Technologies), education and technical skills
- **Projects** — Professional full-stack work (trading system, AI code analyser, OneCIAM) and data-analytics dashboards
- **Contact** — Email / phone details and a message form

## Getting started

```bash
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build into /build
npm test         # run tests
```

## Deploy

The app is a static CRA build — `npm run build` then serve the `build/` folder (e.g. on Vercel, Netlify or GitHub Pages).

## Tech notes

- Tailwind config extends screens, fonts (Poppins / Montserrat), brand colors and decorative spin animations.
- Fonts loaded from Google Fonts (preconnected in `public/index.html`).
- Contact form posts to a Google Apps Script endpoint.