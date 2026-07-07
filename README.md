# Dak Ops — Postal Field Operations Platform

A mobile-first PWA for managing Indian Postal Department field operations — post offices, delivery beats, addresses, article tracking, and field operator visits — built as a pnpm monorepo.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (generates typed React Query hooks + Zod schemas from the OpenAPI spec)
- Frontend: React 19, Vite, Tailwind CSS v4, TanStack Query, shadcn/ui
- Maps: Leaflet + OpenStreetMap (no API key required)
- Build: esbuild (CJS bundle) for the API server

## Project structure

- `artifacts/api-server` — Express API. Routes: auth, offices, users, beats, articles, visits, addresses, location, dashboard, reports.
- `artifacts/postal-ops` — main React PWA (field operator + admin UI, barcode scanning, live map view).
- `artifacts/mockup-sandbox` — component/UI sandbox used during development.
- `lib/db` — Drizzle schema and DB client. Tables: `users`, `offices`, `beats` (+ addresses), `articles`, `operations` (visits + operator locations).
- `lib/api-spec` — OpenAPI spec; source of truth for the API contract.
- `lib/api-zod` / `lib/api-client-react` — generated Zod schemas and React Query hooks (via Orval — do not hand-edit, regenerate instead).

## Getting started

Requires Node.js 24 and pnpm.

```bash
pnpm install
pnpm --filter @workspace/db run push          # push DB schema (needs DATABASE_URL)
PORT=5000 pnpm --filter @workspace/api-server run dev
```

Other useful commands:

- `pnpm run typecheck` — typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks/schemas after changing the OpenAPI spec

### Environment variables

| Variable | Purpose |
| --- | --- |
| `DATABASE_URL` | Postgres connection string |
| `PORT` | API server port (required — the server won't start without it) |
| `JWT_SECRET` | Signs access tokens |
| `SUPER_ADMIN_USERNAME` / `SUPER_ADMIN_PASSWORD` | Seed credentials for the first admin login |
| `LOG_LEVEL` | Optional, defaults aside |
| `NODE_ENV` | `development` / `production` |

## Architecture notes

- **Auth**: hand-rolled JWT, not a third-party provider (Clerk, Replit Auth, etc.) — the app's role model (`super_admin`, `office_admin`, `field_operator`) didn't map cleanly onto those. Access tokens expire in 15 minutes; refresh tokens are random 64-byte hex strings, stored in the DB only as SHA-256 hashes. Admin-only routes are gated with `requireAuth` + `requireRole(...)` middleware.
- **Maps**: Leaflet/OpenStreetMap instead of Google Maps, to avoid an API key/billing dependency.
- Originally scaffolded on Replit. A few Replit-only dev plugins remain in the Vite config (`@replit/vite-plugin-*`) — harmless outside that environment, safe to remove if unused.

## Status

Early-stage, actively developed.
