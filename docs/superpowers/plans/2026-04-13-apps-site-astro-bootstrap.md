# Apps Site Astro Bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a minimal Astro + Cloudflare Workers foundation for `apps-site`, with dotenvx-based environment handling and a path-based structure ready for app support pages.

**Architecture:** Use Astro in static output mode so the site stays lightweight and cache-friendly, then serve `dist/` through Wrangler static assets on Cloudflare Workers. Keep the repo centered on route files under `src/pages/<app>/...`, with one shared layout and minimal styling so future support/download/privacy pages can be added without introducing framework-heavy runtime concerns.

**Tech Stack:** Astro, TypeScript, Wrangler, dotenvx, pnpm, mise

---

## Task 1: Establish project metadata and local tooling

**Files:**

- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\package.json`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\tsconfig.json`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\.gitignore`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\mise.toml`

- [x] Step 1: Add minimal package metadata, Astro/Cloudflare/dotenvx dependencies, and `pnpm` scripts for `dev`, `build`, `preview`, `deploy`, and env helpers.
- [x] Step 2: Add TypeScript config extending Astro strict defaults.
- [x] Step 3: Add `.gitignore` entries for `node_modules`, `dist`, `.astro`, `.env.keys`, and local worktree directories.
- [x] Step 4: Add a small `mise.toml` with pinned `node` and `pnpm`, plus lightweight `check` and `deploy` tasks.
- [x] Step 5: Run `pnpm install` to generate the lockfile and confirm dependency resolution succeeds.

## Task 2: Add Astro static-site scaffold for app pages

**Files:**

- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\astro.config.mjs`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\env.d.ts`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\styles\global.css`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\layouts\BaseLayout.astro`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\components\AppPageLinks.astro`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\pages\index.astro`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\pages\ultra-rss-reader\index.astro`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\src\pages\ultra-rss-reader\support.astro`

- [x] Step 1: Configure Astro for static output and path-based pages.
- [x] Step 2: Add one shared layout and global stylesheet that feel calm and product-facing without adding UI libraries.
- [x] Step 3: Add a root index page that explains the host purpose and links to the first app area.
- [x] Step 4: Add `ultra-rss-reader` landing and support pages so `/ultra-rss-reader/support` exists immediately.
- [x] Step 5: Run `pnpm build` and verify Astro emits static output successfully.

## Task 3: Wire Cloudflare and dotenvx operations

**Files:**

- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\wrangler.jsonc`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\.env`
- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\.env.keys`

- [x] Step 1: Configure Wrangler to serve `dist/` as static assets from a Worker named for `apps-site`.
- [x] Step 2: Add scripts that run Astro and Wrangler through `dotenvx run` so local and deploy flows feel like `keep-on`.
- [x] Step 3: Add a tracked encrypted `.env` with documented dotenvx-managed variables.
- [x] Step 4: Add local `.env.keys` handling and keep it out of version control.
- [x] Step 5: Run `pnpm exec wrangler deploy --dry-run` or equivalent preview build command to verify config shape without deploying.

## Task 4: Document how to operate and extend the repo

**Files:**

- Create: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\README.md`

- [x] Step 1: Document the project goal, route strategy, and why Astro static output is used.
- [x] Step 2: Document local setup, dotenvx encryption/decryption flow, and main scripts.
- [x] Step 3: Document Cloudflare deployment expectations and what values should live in `.env` versus Wrangler/dashboard secrets later.
- [x] Step 4: Summarize which patterns came from `keep-on` and which heavier pieces were intentionally left out.
- [x] Step 5: Re-run the core verification commands after the docs are in place.

## Task 5: Final verification

**Files:**

- Modify: `C:\Users\j138c\src\github.com\jey3dayo\apps-site\docs\superpowers\plans\2026-04-13-apps-site-astro-bootstrap.md`

- [x] Step 1: Run `pnpm build` and confirm exit code 0.
- [x] Step 2: Run `pnpm exec wrangler deploy --dry-run` and confirm the Worker config is accepted.
- [x] Step 3: Run `git status --short` and review the final file set for accidental extras.
- [x] Step 4: Mark completed tasks in this plan.
