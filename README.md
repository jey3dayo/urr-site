# apps-site

`apps-site` is a small Astro site for public app pages under `apps.jey3dayo.net`.
It is optimized for support-first routes such as `/ultra-rss-reader/support`, while keeping room for future download and privacy pages under the same host.

## Why this stack

- Astro keeps the output static-first and lightweight.
- Cloudflare Workers Static Assets is the deployment target, so the site stays simple to host and cheap to evolve.
- `dotenvx` wraps local and deploy commands to keep environment handling close to the workflow used in `keep-on`, without importing the rest of that app's complexity.

## Routes

- `/`
- `/ultra-rss-reader/`
- `/ultra-rss-reader/support`

Future routes are expected to live beside the existing page:

- `/ultra-rss-reader/download`
- `/ultra-rss-reader/privacy`

The intended extension pattern is:

```text
src/pages/
  <app-slug>/
    index.astro
    support.astro
    download.astro
    privacy.astro
```

## Setup

```bash
pnpm install
pnpm env:decrypt
```

The repo keeps `.env` encrypted with `dotenvx`, while `.env.keys` stays local-only.
If you already have the shared `.env.keys`, place it locally and use `pnpm env:decrypt` when you need to edit `.env`.
The repo-specific restore and update notes live in [docs/env-keys.md](docs/env-keys.md).
After editing, run `pnpm env:encrypt` again before you finish.

## Scripts

- `pnpm dev` - run Astro dev server through `dotenvx`
- `pnpm build` - build the static site
- `pnpm preview` - build first, then preview the Astro output locally
- `pnpm cf:dev` - build first, then preview with Wrangler
- `pnpm cf:deploy` - deploy to Cloudflare Workers
- `pnpm cf:deploy:dry-run` - validate the Wrangler deployment bundle without publishing
- `pnpm lint` - run Biome checks
- `pnpm format` - apply Biome fixes
- `pnpm check` - run build plus dry-run deployment validation
- `pnpm env:encrypt` - encrypt `.env` and generate `.env.keys`
- `pnpm env:decrypt` - decrypt `.env` for editing

## Formatting and linting

`apps-site` keeps the lightweight shape of the app itself, but it now has the same operational feel as `keep-on` for routine checks:

- `.editorconfig` for baseline file formatting rules
- `Biome` for code formatting and linting
- `markdownlint-cli2` for Markdown
- `yamllint` for `.github/workflows`
- `mise.toml` tasks for `format`, `lint`, `check:quick`, and `ci`

Useful local commands:

- `mise run format`
- `mise run lint`
- `mise run check:quick`
- `mise run ci`

## Environment handling

Committed:

- `.env` after encryption with `dotenvx`

Local-only:

- `.env.keys`

The matching 1Password document for this repo is `.env.keys | apps-site` in the `Dotfiles Automation` vault.
It is separate from `.env.keys | dotfiles`.

Current variables are intentionally minimal:

- `PUBLIC_SITE_ORIGIN`
- `PUBLIC_SUPPORT_EMAIL`
- `PUBLIC_DEFAULT_APP`
- `CLOUDFLARE_ACCOUNT_ID` (optional)
- `CLOUDFLARE_API_TOKEN` (optional)

For local work, `dotenvx run` reads `.env.keys` automatically.
For CI or remote deploys, provide `DOTENV_PRIVATE_KEY` from `.env.keys` and keep `.env.keys` out of the deployed bundle.

## Cloudflare deployment

`wrangler.jsonc` serves the Astro `dist/` directory through Workers Static Assets.
This is intentionally static-only for now: no Worker entrypoint, no adapter, no database, and no auth layer.

The repository already deploys to `apps.jey3dayo.net` through a Worker custom domain.

## GitHub Actions secrets

The current workflows expect these repository secrets:

- `DOTENV_PRIVATE_KEY`
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

`checks.yml` uses them to run the same encrypted-env build and Wrangler dry-run checks as local `mise run ci`.
`deploy.yml` uses the same set to deploy on pushes to `main`.

## Reference from keep-on

Referenced:

- `pnpm` script naming and deployment ergonomics
- `dotenvx run` / `encrypt` / `decrypt` flow
- Wrangler-first Cloudflare operations
- optional `mise.toml` for a small local task entrypoint

Intentionally not imported:

- Next.js or OpenNext
- Clerk
- D1 / Drizzle
- product-specific auth, database, or observability setup
- UI libraries and other heavy dependencies that do not help support pages
