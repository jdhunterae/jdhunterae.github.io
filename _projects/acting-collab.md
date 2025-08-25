---
layout: project
title: "Acting Collab — Movies & TV Overlap via TMDb"
excerpt: "A single-page app that finds true collaborations between two actors across movies and (optionally) TV, verifying TV overlaps at the episode level and keeping API keys private with a Netlify proxy."
technologies: ["JavaScript", "HTML/CSS", "GitHub Pages", "Netlify Functions", "TMDb API", "AbortController", "LocalStorage"]
image: /assets/images/projects/acting-collabs.png
---

## Project Overview

Acting Collab lets you enter two actor names and see what they **actually** worked on together. Movies are matched directly; TV entries are verified down to a **shared episode** to avoid false positives from long-running shows (e.g., talk shows or award shows). The site is static on GitHub Pages, with a minimal Netlify Function proxy that keeps the TMDb API key private.

The goal was to build a polished, fast, and accessible “one-function” app that demonstrates secure API usage from a static site, thoughtful data handling, and a clean UI.

## Key Features

- **Movies / TV Filters**: Toggle Movies and/or TV; Search disables if neither is selected.
- **Episode-Level TV Verification**: Confirms both actors appear in *the same episode* before counting a TV show as a collaboration.
- **Live Status + Cancel**: Milestone messages (“resolving names…”, “gathering credits…”, “scrubbing TV…”) and a Stop button using `AbortController` to halt long scans.
- **Fast & Considerate Requests**: Request de-duplication, in-memory + `localStorage` TTL caching, and limited parallelism with early exit.
- **Clean, Responsive UI**: Modern layout with system-matched theme (`prefers-color-scheme`), accessible focus states, and compact result cards.

## UI Design & UX Considerations

- **Simple, Single-Page Flow**: Two inputs, two filters, one action. Progress messages reduce uncertainty during TV scans.
- **Accessible Announcements**: An `aria-live="polite"` region announces each step for screen readers.
- **Helpful Guardrails**: Search is disabled when both filters are off; empty-input and not-found states are clearly messaged.
- **Consistent Visual Language**: Card list with titles, year badges, and concise subtext (roles, ages at release, and episode info for TV).

## Technical Details

Frontend is framework-free and organized into small ES modules:

- **Modules**
  - `config.js`: Base URL and feature flags (Movies/TV, scan limits).
  - `fetcher.js`: Shared fetch with de-duplication, 429 backoff, `localStorage` TTL cache, and `AbortController`.
  - `tmdb.js`: Person search, combined credits, person details (for birthdays) + date/role helpers.
  - `tv_overlap.js`: Season/episode scanning with limited parallelism and early exit once a shared episode is found.
  - `ui.js`: Status updates and styled result rendering (no posters yet).
  - `app.js`: Orchestrates the search flow and applies Movies/TV filters.

- **Netlify Proxy**
  - `/.netlify/functions/tmdb` appends the TMDb key server-side and forwards requests to `v3`.
  - CORS can be restricted to the Pages origin in production.

- **Performance**
  - Shared in-flight promises prevent duplicate work.
  - Concurrency caps for seasons/episodes balance speed and rate limits.
  - Early exit once a verified TV overlap is found.

## My Contributions

A solo build covering:

- UI/UX design and styling for a focused, responsive, accessible interface.
- Client-side data flow, from name resolution → credits gathering → verified intersection.
- TV overlap algorithm (season prefilter + episode scan) with concurrency + aborts.
- Netlify Function proxy for secure key handling and simple CORS policy.
- Code organization into ES modules with small, testable units.

## Roadmap & Stretch Goals

- [ ] Poster thumbnails and richer credit cards (roles, links to TMDb).
- [ ] Shareable result URLs and “recent searches” chips.
- [ ] Sorting/grouping (oldest/newest, by decade) and quick filters (acting-only).
- [ ] Type-ahead suggestions using `<datalist>` + debounce.
- [ ] PWA manifest for installability and offline shell.
- [ ] CI: ESLint/Prettier with a GitHub Actions badge.

## Impact & Use Cases

- **Film Discovery**: Quick way to explore actor pair histories (e.g., frequent collaborators).
- **Demo of Static-Site Patterns**: Shows how to safely call third-party APIs from a static front end using a tiny serverless proxy.
- **Portfolio Piece**: Highlights API hygiene, client-side performance strategies, and accessible UI polish in a compact project.

> This product uses the TMDb API but is not endorsed or certified by TMDb.
