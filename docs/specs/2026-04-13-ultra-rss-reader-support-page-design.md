# Ultra RSS Reader Support Page Design

## Goal

Create the hosted public support page for Ultra RSS Reader at:

- `https://apps.jey3dayo.net/ultra-rss-reader/support`

This page will be the store-facing support URL and the primary public support surface for the app.

## Product Decision

- Primary support channel: `support@jey3dayo.net`
- Public support flow is email-first
- GitHub Issues are not part of the public support flow
- Product pages on `apps.jey3dayo.net` are segmented by path, not subdomain-per-app

## Information Architecture

### Route structure

- `/ultra-rss-reader/support`

Future room:

- `/ultra-rss-reader`
- `/ultra-rss-reader/download`
- `/ultra-rss-reader/privacy`

## Page Requirements

The page should include these sections:

1. Hero / page intro
   - identify the page as Ultra RSS Reader support
   - clearly present `support@jey3dayo.net`
   - explain that email is the main support channel

2. What to send
   - app version
   - OS
   - what happened
   - screenshots if relevant
   - logs if available

3. Troubleshooting guidance
   - short self-serve guidance
   - room to link app-side docs later
   - do not overload the page with deep internal runbook detail

4. Return navigation
   - link back to the product/app landing area when available

## Copy Direction

- calm
- user-facing
- non-developer-centric
- no references to source-repo workflows

Avoid:

- “open an issue”
- “check the repo”
- implementation-facing language

## Visual Direction

- simple and trustworthy
- closer to a product support center than a developer portal
- readable on mobile first

## Technical Constraints

- Keep routing path-based under `apps.jey3dayo.net`
- Design for future multi-product expansion
- Keep implementation lightweight; no complex backend is needed for MVP

## Non-Goals

- account portal
- ticketing system
- embedded contact form
- public changelog viewer
- public bug tracker

## Done When

- `/ultra-rss-reader/support` exists
- the page clearly exposes `support@jey3dayo.net`
- the page works as a Store-facing Support URL
- the page leaves room for future product pages under the same host
