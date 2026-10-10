# Mbendera Ministry — georgeenockmbendera.site

The official website of Bishop George Enock Mbendera and Cross Victory
Ministries, Blantyre, Malawi.

Full multi-page Next.js site (App Router, TypeScript, Tailwind) with an
integrated ministry store: digital music, e-books, merchandise, and
literature.

## Stack
- Next.js 15 (App Router, standalone output)
- Tailwind CSS (Fraunces + Inter, ivory/crimson/gold palette)
- Orders API: `/api/orders` — stores in Supabase (`mbendera_orders`) when
  `SUPABASE_URL` + `SUPABASE_SERVICE_KEY` are set; Paychangu mobile money
  initiation when `PAYCHANGU_SECRET_KEY` is set. See `supabase/orders.sql`.

## Develop
```
npm install
npm run dev
```

## Deploy
Dockerfile (multi-stage, standalone). Deployed via Coolify on the Contabo VPS.
