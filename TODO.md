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

- [ ] Replace placeholder top page copy with final public-facing content
- [ ] Flesh out Ultra RSS Reader support page content
- [ ] Add future routes such as `/ultra-rss-reader/download`
- [ ] Add future routes such as `/ultra-rss-reader/privacy`
