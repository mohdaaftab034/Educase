# Educase (Frontend)

This repository contains the Educase frontend application (Vite + React + Tailwind).

## Overview
- Frontend lives in the `frontend` folder.
- Built with Vite, React, Tailwind CSS.

## Requirements
- Node.js 18+ (or an active LTS)
- npm

## Local development
1. Install dependencies

```bash
cd frontend
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

The production build will output to the `dist` folder.

## Environment variables
- The frontend reads environment variables prefixed with `VITE_`.
- Example: `VITE_API_URL` — set this in your environment or in Vercel Dashboard.

## Vercel deployment notes
This repository uses a monorepo-like layout where the frontend is under `frontend`. To deploy successfully on Vercel:

- Place a `vercel.json` in the repository root that points Vercel to the frontend directory as the project root. Example (already added):

```json
{
  "projects": {
    "frontend": {
      "rootDirectory": "frontend",
      "buildCommand": "npm run build",
      "outputDirectory": "dist"
    }
  }
}
```

- Also keep a `vercel.json` inside `frontend/` with the buildCommand and outputDirectory:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

- Ensure the project's build script (`npm run build`) works locally before deploying.

- Example Vercel build log problems and fixes:
  - "Previous build caches not available." — normal for first deploy; not an error.
  - If deployment fails during build, inspect the Vercel logs for the failing step and reproduce the same `npm run build` locally to gather errors.

## Tailwind / CSS
- Tailwind is imported in `src/index.css` using `@import "tailwindcss"`.
- If you change Tailwind config or add classes, restart the dev server so the JIT compiler picks them up.

## Troubleshooting
- If classes like `px-3` appear not to apply, check for conflicting CSS rules in `src/styles/*` overriding Tailwind rules.
- For fixed-position elements, prefer using left/right utilities (left-0 right-0) instead of relying on width: 100% from custom CSS.

## Files to check
- Root config: [vercel.json](vercel.json)
- Frontend config: [frontend/vercel.json](frontend/vercel.json)
- Frontend entry: [frontend/src/main.jsx](frontend/src/main.jsx)
- Styles: [frontend/src/index.css](frontend/src/index.css) and [frontend/src/styles/auth.css](frontend/src/styles/auth.css)

## Next steps
- Add any production-specific environment variables to the Vercel project settings.
- Optionally add a simple health-check endpoint in the backend and set VITE_API_URL accordingly.

---

If you want, I can also add a short `README` inside the `frontend` folder with only frontend-specific instructions.