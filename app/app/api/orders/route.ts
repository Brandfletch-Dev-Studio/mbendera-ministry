import { NextResponse } from "next/server";

/**
 * Order intake for the Mbendera Ministry store.
 *
 * Storage strategy:
 * 1. If SUPABASE_URL + SUPABASE_SERVICE_KEY are configured → orders are
 *    stored in the `mbendera_orders` table (see supabase/orders.sql).
 * 2. Otherwise → order is logged to the container filesystem as JSON
 *    (data/orders/) so no order is ever lost, and Paychangu mobile-money
 *    initiation is skipped (falls back to "arrange with us").
 *
 * Paychangu mobile money: if PAYCHANGU_SECRET_KEY is set and the customer
 * chose mobile_money, a charge is initiated (redirect URL returned when
 * applicable). Otherwise the order is queued for manual confirmation.
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY;
const PAYCHANGU_KEY = process.env.PAYCHANGU_SECRET_KEY;

type Item = {
  slug: string;
  name: string;
  price: number;
  qty: number;
  digital?: boolean;
};

async function storeOrder(order: Record<string, unknown>) {
  if (SUPABASE_URL && SUPABASE_KEY) {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/mbendera_orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(order),
    });
    if (!res.ok) throw new Error(`supabase ${res.status}`);
    return;
  }
  // Fallback: append to local JSON log (survives within the container)
  const fs = await import("fs/promises");
  const dir = "data/orders";
  await fs.mkdir(dir, { recursive: true });
  const file = `${dir}/${order.reference}.json`;
  await fs.writeFile(file, JSON.stringify(order, null, 2));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, delivery, address, payment } = body;
    const items: Item[] = Array.isArray(body.items) ? body.items : [];
    const total = Number(body.total) || 0;

    if (!name || !phone || !email || items.length === 0) {
      return NextResponse.json(
        { ok: false, error: "Missing required details." },
        { status: 400 }
      );
    }

    // recompute total server-side (never trust client)
    const safeTotal = items.reduce((s, i) => s + Number(i.price) * Number(i.qty), 0);
    const reference = `MB-${Date.now().toString(36).toUpperCase()}`;

    const order = {
      reference,
      customer_name: String(name).slice(0, 120),
      phone: String(phone).slice(0, 40),
      email: String(email).slice(0, 160),
      delivery: delivery === "delivery" ? "delivery" : "pickup",
      address: String(address || "").slice(0, 400),
      payment: payment === "arrange" ? "arrange" : "mobile_money",
      items,
      total: safeTotal,
      currency: "USD",
      status: payment === "arrange" || !PAYCHANGU_KEY ? "pending_manual" : "pending_payment",
      created_at: new Date().toISOString(),
    };

    await storeOrder(order);

    let paynote = "arrange";
    if (order.payment === "mobile_money" && PAYCHANGU_KEY) {
      try {
        const res = await fetch("https://api.paychangu.com/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${PAYCHANGU_KEY}`,
          },
          body: JSON.stringify({
            amount: safeTotal,
            currency: "USD",
            email: order.email,
            first_name: order.customer_name.split(" ")[0],
            phone: order.phone,
            tx_ref: reference,
            callback_url: `${new URL(req.url).origin}/api/orders/confirm?ref=${reference}`,
            return_url: `${new URL(req.url).origin}/checkout?ref=${reference}`,
            title: "Mbendera Ministry Store",
            description: `Order ${reference} — Cross Victory Ministries`,
          }),
        });
        const data = await res.json();
        paynote = data?.data?.checkout_url ? "mobile_money" : "arrange";
        // tx_ref links the Paychangu charge to this order reference
      } catch {
        paynote = "arrange";
      }
    }

    return NextResponse.json({ ok: true, reference, payment: paynote });
  } catch (err) {
    console.error("order error", err);
    return NextResponse.json(
      { ok: false, error: "Could not place order. Please try again." },
      { status: 500 }
    );
  }
}
