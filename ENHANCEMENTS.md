# ENHANCEMENTS — Punu N Gowda Portfolio

Optimization + enhancement pass completed on the Portfolio repo (React 18 + CRA 5 + Tailwind 3 + framer-motion). No framework migration; owner facts updated from `Punu_N_Gowda_Resume_FullStack_AI.pdf` provided by Punu.

## What changed

### Content (updated to match resume)
- **Resume tab → Experience**: replaced the old "Cloud Intern — Edunet Foundation"/"Internship" proof with real experience:
  - **Software Engineer — TCS** (Jun 2025 – Jul 2026), OneCIAM healthcare identity platform.
  - **Data Quality Analyst — Anakin Technologies** (May 2025 – Jun 2025).
- **Education**: MCA at Acharya Institute of Technology with **GPA 9.4/10**; "B.Sc PMCs" corrected to **BSc in Computer Science**.
- **About**: role = Full Stack Developer at TCS; bio rewritten around OneCIAM, the algorithmic trading system, and AI-assisted development; stats corrected (1 yr experience, 20+ technologies; removed the auto age calc and stale "years at TCS" formula).
- **Skills**: replaced placeholder bars (all at 100% with "Intermediate") with the resume's real matrix — core languages (Java/JS/Python/SQL bars) plus categorized toolchain chips (Frontend, Backend, Databases, DevOps & Tools, Integration, AI/ML exposure).
- **Projects**: added professional full-stack projects from the resume — **Quantitative Algorithmic Trading System**, **AI Tools Code Analyser (live)**, **OneCIAM** — each with tech-stack tags and descriptions (new card style). Kept existing data-analytics projects; fixed mislabeled screenshots (Madhav Store now shows its own dashboard; Credit Card project now shows both its Customer + Transaction reports).
- **Contact**: added phone (+91 63616 66694) from resume.
- Existing resume PDF (`Punu_N_Gowda_DA_resume.pdf`) is still linked from the Home card — the new FullStack/AI resume copy was **not** added (file copy of the Downloads PDF was declined). Recommend replacing it.

### Optimization
- **Dead code removed**: empty `src/assets/index.js` barrel, orphaned `AboutMe.js`, `MyServices.js`, `ServicesCard.js`, placeholder `useEffect` + unused imports in `Home.js`, ~30 lines of commented-out legacy blocks in `Skills.js`/`Projects.js`.
- **Bug fixes**: Home nav used `&` (bitwise AND) instead of `&&` for state updates → replaced with a single `activeSection` state + handler; hero image `loading="priority"` (Next.js-only, invalid) → `eager`; project link in `SkillsCard` no longer renders an empty `<a href="">` for unlinked certificates.
- **Git hygiene**: `/build` no longer tracked (`git rm --cached`) — 26 stale artifacts removed from the index, including leftover `Noor_Mohammad_resume.pdf`, `bannerImg`, `blogImg*` and old `workImg*` media from the template this site was cloned from. The live `build/` folder stays on disk.
- **`.gitignore`**: enabled `/build`, added `.env*`, `*.log`, `Thumbs.db`, `.idea`, `.vscode`.
- **Meta/SEO** (`public/index.html`): fixed title typo ("Portoflio" → "Portfolio"), real description/author, Open Graph + Twitter cards, font preconnect, correct apple-touch-icon.
- **Manifest**: real app name/description + brand colors (was "Create React App Sample").
- **Fonts**: trimmed unused Google Fonts weights (100/200/300/900) from the `@import`, added `display=swap`. (No layout/type classes referenced those weights.)
- **Tests**: added smoke test (`src/App.test.js`, mocks axios + maps `@vercel/speed-insights/react`); `CI=true npm test` → **1/1 passing**. Previously there were zero tests.

## Before / after

| Metric | Before | After |
|---|---|---|
| Production build | ✅ compiled | ✅ compiled |
| JS bundle (gzip) | 104.71 kB | 106.43 kB |
| CSS bundle (gzip) | 4.87 kB | 4.85 kB |
| Tests | 0 | 1 (passing) |
| Tracked `build/` artifacts | 26 | 0 (untracked, files kept) |

The +1.7 kB JS is the added resume content (3 professional projects, full skill matrix, rewritten bio) — the requested enhancement. The optimization workstream (dead code, font weights, template media) is what kept that delta small.

## Notes / follow-ups for the owner
- **CV download**: still points at `Punu_N_Gowda_DA_resume.pdf`. Swap it for `Punu_N_Gowda_Resume_FullStack_AI.pdf` when ready (copy denied during this pass).
- **Project URLs**: trading system + OneCIAM have no public link and render "no link" cards; add URLs if you want click-throughs.
- `npm audit` reports 71 findings (15 low / 19 mod / 32 high / 5 critical) on the legacy CRA 5 dependency tree. Fixing requires either `npm audit fix --force` (breaking upgrade, likely migrations) or ejecting/migrating — left untouched per the "no migration" constraint.
- Unused assets left in `src/assets/`: `punu.JPG` (7.3 MB) and old certificate/work PNGs — kept per no-delete rule; safe to clean manually.
- All commits are local; nothing pushed. Review and push yourself.

## Verification
- `npm run build` — clean.
- `CI=true npm test -- --watchAll=false` — 1/1 passing.