# 💪 FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of
twelve lifts pulled live from a real API, drill into any workout for full
instructions and specs, then lock lifts into **Today's Plan** or **Save**
them for later — all tracked in a persistent "My Plan" dashboard.

> Train with intent. Log every set.

## Built with

- **Next.js 14** (App Router) — routing, server components, data fetching
- **React 18** — client components for interactive UI (tabs, sorting, plan state)
- **Tailwind CSS** — utility-first styling, dark theme with a lime `#ccff00` accent
- **React-Toastify** — toast notifications for add/remove/done actions
- **React Context + localStorage** — Today's Plan and Saved state, shared across the app and persisted across reloads
- **FitLog REST API** (`api.abcz.workers.dev/api/fitlog`) — live workout data

## Features

1. **Live API-driven library** — all 12 workouts are fetched from the real
   FitLog API (not hardcoded), rendered in a responsive 3-column grid that
   collapses to 2 columns on tablet and 1 on mobile.
2. **Sort by Duration, Calories, or Rating** — a "Sort By" dropdown
   re-orders the library grid instantly, client-side, no page reload.
3. **Detail pages with full workout specs** — each workout has its own
   route (`/workout/[id]`) with a key-specs panel, numbered instructions,
   and "Add to Today's Plan" / "Save for Later" actions, each with a toast
   confirmation.
4. **Persistent Today's Plan & Saved lists** — adding or removing a
   workout updates a shared context that's written to `localStorage`, so
   the navbar's live **Plan**/**Saved** badge counters and the **My Plan**
   page stay in sync and survive a page reload. Today's Plan is capped at
   5 lifts, matching the "finish them, then load more" rule.
5. **My Plan dashboard** — live Exercises/Minutes/Calories metrics,
   tabbed Today's Plan / Saved views, a loading state while workouts are
   fetched, an empty state with a CTA back to the library, and
   Mark-as-Done / Remove actions per item.
6. **Resilient routing** — a custom 404 page for any unknown route or
   invalid workout id, and correctly server-rendered routes so reloading
   any page (including `/workout/7` or `/my-plan`) never errors after
   deployment.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Next.js prints in your terminal (usually
`http://localhost:3000`).

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.jsx              root layout: fonts, PlanProvider, Navbar/Footer, toasts
  page.jsx                home page — server-fetches workouts, renders Hero + Library
  loading.jsx             loading state shown while the home page fetches
  not-found.jsx           custom 404 page
  workout/[id]/page.jsx   workout detail page (server-fetched, notFound() on bad id)
  workout/[id]/loading.jsx
  my-plan/page.jsx        My Plan dashboard (client component)
components/               Navbar, Hero, Library, WorkoutCard, PlanItemCard, etc.
context/PlanContext.jsx   shared Today's Plan / Saved state + localStorage persistence
lib/api.js                fetch helpers for the FitLog API
```

## Deployment

This is a standard Next.js app — deploy it on Vercel, Netlify, or
Cloudflare Pages with zero extra config. All routes are server-rendered
per request, so reloading any page (including dynamic workout pages)
works correctly after deployment.

## Submission links

- Live Link:
- GitHub Repository Link:
