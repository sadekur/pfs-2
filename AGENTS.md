# AGENTS.md — Sadekur Rahman Portfolio

## Commands

| Command | What it runs |
|---|---|
| `npm run dev` | `next dev --turbopack` |
| `npm run build` | `next build --turbopack` |
| `npm run start` | `next start` |
| `npm run lint` | `eslint` |

No typecheck, no test commands exist.

## Architecture

- **Next.js 15.5** (App Router) + **React 19.1** — JSX only (no TypeScript; `jsconfig.json` with `@/*` → root).
- **Tailwind CSS 3.4** config with `@tailwindcss/postcss` (v4 PostCSS plugin — mixed versions).
- **shadcn/ui** New York style, JSX files under `@/components/ui/` — use these for new UI components.
- **framer-motion** entrance animations: pages fade in with `delay: 2.4` — don't expect instant renders.
- **JetBrains Mono** via `next/font/google`, CSS variable `--font-jetbrains-mono`.
- Dark mode via `.dark` class on `<html>`.

## Routes

| Path | File | Status |
|---|---|---|
| `/` | `app/page.jsx` | Home |
| `/resume` | `app/resume/page.jsx` | Tabs: Experience, Education, Skills, About |
| `/services` | `app/services/page.jsx` | Services listing |
| `/work` | `app/work/page.jsx` | **Stub** — WIP, unused imports |
| `/contact` | `app/contact/page.jsx` | **Stub** — returns `services` placeholder |
| `/api/github-stats` | `app/api/github-stats/route.js` | GraphQL proxy, needs env vars |

## Environment

Create `.env.local` with:
```
GITHUB_TOKEN=ghp_...
GITHUB_USERNAME=sadekur
```

The `/api/github-stats` route fetches real GitHub data; falls back to hardcoded defaults on failure.

## Conventions

- **CSS**: utility classes `.h1`, `.h2`, `.h3` in `globals.css`; `.text-outline` / `.text-outline-hover` for stroked text.
- **Color tokens**: accent (`#00ff99` / `#00e187`), primary (`#1c1c22`), popover (`#00ff99`).
- **Imports**: `@/components/...` and `@/lib/utils` (exports `cn()` helper).
- **Layout wrapper**: `<Header />` + `<StairEffect />` + `<PageTransection>{children}</PageTransection>` — page transitions are handled globally.
- **Components**: Radix UI primitives (Dialog, ScrollArea, Select, Tabs, Tooltip), `framer-motion`, `lucide-react` for icons.
