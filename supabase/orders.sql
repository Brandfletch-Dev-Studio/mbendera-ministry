-- Mbendera Ministry store — orders table
-- Run in Supabase SQL editor (service key goes in app env: SUPABASE_URL, SUPABASE_SERVICE_KEY)
create table if not exists mbendera_orders (
  id uuid primary key default gen_random_uuid(),
  reference text unique not null,
  customer_name text not null,
  phone text not null,
  email text not null,
  delivery text not null default 'pickup',
  address text,
  payment text not null default 'mobile_money',
  items jsonb not null,
  total numeric(12,2) not null,
  currency text not null default 'USD',
  status text not null default 'pending_payment',
  created_at timestamptz not null default now()
);
