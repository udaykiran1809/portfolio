# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A single-page personal portfolio website (Uday Kiran Kothapalli) built with React 19 + TypeScript and Vite, deployed to GitHub Pages.

## Commands

- `npm run dev` — start Vite dev server (port 3000, bound to `0.0.0.0`)
- `npm run build` — production build (output to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run deploy` — build (`predeploy` runs automatically) and publish `dist/` to GitHub Pages via `gh-pages`

There is no test suite, linter, or CI configured in this repo.

## Architecture

- **No router.** `App.tsx` holds a single `currentView` string in state and renders one "page" component at a time via a switch statement (`renderView`). Navigation is done by calling `onNavigate(view)` (passed down as a prop), not via URL changes — there are no routes/URLs per view.
- **Views:** `home`, `about`, `experience`, `papers` (a `blog` view/section existed previously and has been intentionally removed — see commented-out code/imports in `App.tsx` and `Navbar.tsx`; don't reintroduce it without checking with the user).
- **Navbar/Footer are conditionally hidden on the `home` view** (full-bleed landing page); they only render for other views.
- **All content is centralized in `data/portfolioData.ts`** as a single `portfolioData: PortfolioData` object (name, about, skills, experience, education, projects, papers, blog, social links). Components import this object directly rather than receiving content via props — to update site content, edit this file, not the components.
- **Types** for the content model live in `types.ts` (`Experience`, `Education`, `Project`, `Paper`, `BlogPost`, `PortfolioData`).
- **Components** (`components/*.tsx`) are presentational and largely self-contained, each corresponding to one section/page (`Home`, `About`, `Experience`, `Education`, `Papers`, `Skills`, `Projects`, `Blog`, `Navbar`, `Footer`). `Skills`/`Projects`/`Blog` are currently unused/commented out in `App.tsx`.
- **Styling** uses Tailwind utility classes directly in JSX (no CSS modules/styled-components); icons via `lucide-react`.
- **Path alias:** `@/*` maps to the repo root (configured in both `tsconfig.json` and `vite.config.ts`).
- **Vite `base` is `/portfolio/`** — required for correct asset paths on GitHub Pages; keep this in sync with the `homepage` field in `package.json` if the deploy target changes.
