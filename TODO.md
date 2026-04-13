# TODO

## Current State

- [x] Astro static scaffold is in place
- [x] `/ultra-rss-reader/support` route exists
- [x] `dotenvx` scripts and `.env.keys` flow are set up
- [x] `pnpm run build` passes
- [x] `pnpm run cf:deploy:dry-run` passes
- [x] Real Cloudflare deploy is finished on `apps-site.j138cm.workers.dev`

## Next Tasks

- [x] Decide Cloudflare auth mode for deploy
  - Chosen: shared `dotenvx` key + encrypted Cloudflare token/account values
- [x] Fix `.env` so Wrangler does not receive empty or malformed Cloudflare auth values
- [x] Run `pnpm exec wrangler whoami` and confirm authentication works
- [x] Run `pnpm run cf:deploy`
- [x] Confirm the Worker is created successfully in Cloudflare
- [x] Attach `apps.jey3dayo.net` or the intended route to the Worker
- [x] Open the deployed URL and verify the top page responds

## Deferred Content Work

- [x] Replace placeholder top page copy with final public-facing content
- [x] Flesh out Ultra RSS Reader support page content
- [x] Add future routes such as `/ultra-rss-reader/download`
- [x] Add future routes such as `/ultra-rss-reader/privacy`

## Current Follow-ups

- [x] Add shared navigation between Ultra RSS Reader public pages
- [x] Add minimal Japanese-first bilingual copy for landing/support/download/privacy
- [x] Add crawl/share metadata support in the shared layout
- [x] Add `robots.txt` and `sitemap.xml`
- [x] Add a public-facing `404.html` with links back to the current app pages
- [x] Centralize Ultra RSS Reader public route data and page map copy
- [ ] Polish root page copy once a second app namespace is added
- [ ] Decide whether the home page should stay Japanese-first or become neutral bilingual
- [ ] Add a reusable page-level metadata helper if more apps are added

## Needs External Decision

- [ ] Decide the official public download channel policy for Ultra RSS Reader
  - Tracking issue: `#4`
- [ ] Decide whether `/ultra-rss-reader/privacy` should remain a source-backed summary or become a formal privacy policy
  - Tracking issue: `#2`
- [ ] Decide the medium-term localization strategy before adding more public apps
  - Tracking issue: `#3`
