"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

type Result = {
  ok: boolean;
  reference?: string;
  payment?: string;
  error?: string;
};

export default function CheckoutClient() {
  const { items, total, clear } = useCart();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    delivery: "pickup",
    address: "",
    payment: "mobile_money",
  });
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  if (items.length === 0 && !result) {
    return (
      <div className="bg-paper border border-line rounded-card p-10 text-center">
        <p className="font-display text-[20px] mb-2">Nothing to check out.</p>
        <Link href="/shop" className="btn-solid">Visit the Shop</Link>
      </div>
    );
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, items, total }),
      });
      const data = await res.json();
      setResult(data);
      if (data.ok) clear();
    } catch {
      setResult({ ok: false, error: "Could not place order. Please try again." });
    } finally {
      setBusy(false);
    }
  }

  if (result?.ok) {
    return (
      <div className="bg-paper border border-line rounded-card p-10 text-center">
        <p className="text-[44px]">✝</p>
        <h2 className="font-display text-[26px] font-semibold mb-2">
          Thank you for your order.
        </h2>
        <p className="text-soft mb-1">
          Order reference: <strong>{result.reference}</strong>
        </p>
        {result.payment === "mobile_money" ? (
          <p className="text-soft mb-6">
            You will receive a mobile money payment prompt on your phone
            shortly. Once payment is confirmed, digital downloads are unlocked.
          </p>
        ) : (
          <p className="text-soft mb-6">
            Our ministry team in Blantyre will contact you to arrange payment
            and delivery. God bless you for supporting the ministry.
          </p>
        )}
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Link href="/shop" className="btn-ghost">Continue Shopping</Link>
          <Link href="/" className="btn-solid">Back to Home</Link>
        </div>
      </div>
    );
  }

  const field =
    "w-full bg-cream border border-line rounded-lg px-4 py-3 text-[15px] focus:outline-none focus:border-crimson";

  return (
    <form onSubmit={submit} className="space-y-8">
      {result && !result.ok && (
        <p className="bg-crimson/10 border border-crimson/30 text-crimson rounded-lg px-4 py-3 text-[14.5px]">
          {result.error}
        </p>
      )}

      <div className="bg-paper border border-line rounded-card p-6">
        <h2 className="font-display text-[19px] font-semibold mb-5">Your details</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            className={field}
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            className={field}
            placeholder="Phone (e.g. +265...)"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          <input
            required
            type="email"
            className={`${field} sm:col-span-2`}
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
      </div>

      <div className="bg-paper border border-line rounded-card p-6">
        <h2 className="font-display text-[19px] font-semibold mb-5">Delivery</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer ${form.delivery === "pickup" ? "border-crimson bg-cream" : "border-line"}`}>
            <input
              type="radio"
              name="delivery"
              checked={form.delivery === "pickup"}
              onChange={() => setForm({ ...form, delivery: "pickup" })}
            />
            <span>
              <strong className="text-[15px]">Pickup</strong>
              <span className="block text-soft text-[13px]">Blantyre, Malawi</span>
            </span>
          </label>
          <label className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer ${form.delivery === "delivery" ? "border-crimson bg-cream" : "border-line"}`}>
            <input
              type="radio"
              name="delivery"
              checked={form.delivery === "delivery"}
              onChange={() => setForm({ ...form, delivery: "delivery" })}
            />
            <span>
              <strong className="text-[15px]">Delivery</strong>
              <span className="block text-soft text-[13px]">Arrange with our team</span>
            </span>
          </label>
        </div>
        {form.delivery === "delivery" && (
          <textarea
            className={`${field} mt-4`}
            rows={2}
            placeholder="Delivery address / instructions"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
          />
        )}
      </div>

      <div className="bg-paper border border-line rounded-card p-6">
        <h2 className="font-display text-[19px] font-semibold mb-5">Payment</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer ${form.payment === "mobile_money" ? "border-crimson bg-cream" : "border-line"}`}>
            <input
              type="radio"
              name="payment"
              checked={form.payment === "mobile_money"}
              onChange={() => setForm({ ...form, payment: "mobile_money" })}
            />
            <span>
              <strong className="text-[15px]">Mobile Money</strong>
              <span className="block text-soft text-[13px]">Airtel Money / TNM Mpamba</span>
            </span>
          </label>
          <label className={`flex items-center gap-3 border rounded-lg px-4 py-3 cursor-pointer ${form.payment === "arrange" ? "border-crimson bg-cream" : "border-line"}`}>
            <input
              type="radio"
              name="payment"
              checked={form.payment === "arrange"}
              onChange={() => setForm({ ...form, payment: "arrange" })}
            />
            <span>
              <strong className="text-[15px]">Arrange with us</strong>
              <span className="block text-soft text-[13px]">Our team will contact you</span>
            </span>
          </label>
        </div>
      </div>

      <div className="bg-paper border border-line rounded-card p-6 flex flex-wrap justify-between gap-4 items-center">
        <div>
          <p className="font-display text-[20px] font-semibold">
            Total: <span className="text-crimson">{formatPrice(total)}</span>
          </p>
          <p className="text-soft text-[13px]">
            {items.length} item{items.length > 1 ? "s" : ""} · digital items
            unlock after payment
          </p>
        </div>
        <button type="submit" disabled={busy} className="btn-solid disabled:opacity-60">
          {busy ? "Placing order…" : "Place Order"}
        </button>
      </div>
    </form>
  );
}
