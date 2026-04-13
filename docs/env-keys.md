# apps-site `.env.keys` and 1Password

This repository keeps `.env` encrypted with `dotenvx` and keeps `.env.keys` local-only.

The canonical 1Password document for this repo is:

- vault: `Dotfiles Automation`
- title: `.env.keys | apps-site`

This is separate from the dotfiles document `.env.keys | dotfiles`.
Do not overwrite or rename the dotfiles item when working on `apps-site`.

## Restore flow

If you need to restore `.env.keys` on a new machine or shell:

1. Fetch the document named `.env.keys | apps-site` from the `Dotfiles Automation` vault.
2. Save it as the local repo file `.env.keys`.
3. Run `pnpm env:decrypt` before editing `.env`.

## Update flow

If `.env.keys` is regenerated for this repo:

1. Update the existing 1Password document `.env.keys | apps-site`.
2. Do not create a second active document with the same title.
3. Verify the stored document can be retrieved again after the update.

## Security notes

- Never paste `.env.keys` contents into chat, docs, commit messages, or shell history.
- Never summarize or copy `DOTENV_PRIVATE_KEY` into repository documentation.
- Keep `.env.keys` out of version control and out of deployment bundles.
