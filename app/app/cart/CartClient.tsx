"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import { formatPrice } from "@/lib/products";

export default function CartClient() {
  const { items, total, setQty, remove } = useCart();

  if (items.length === 0) {
    return (
      <div className="bg-paper border border-line rounded-card p-10 text-center">
        <p className="font-display text-[20px] mb-2">Your cart is empty.</p>
        <p className="text-soft mb-6">
          Browse digital music, merchandise and Christian literature from the
          ministry store.
        </p>
        <Link href="/shop" className="btn-solid">Visit the Shop</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-4">
        {items.map((i) => (
          <div
            key={i.slug}
            className="bg-paper border border-line rounded-card p-4 flex gap-4 items-center"
          >
            {i.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={i.image}
                alt={i.name}
                className="w-20 h-20 rounded-lg object-cover bg-cream"
              />
            )}
            <div className="flex-1 min-w-0">
              <Link
                href={`/shop/${i.slug}`}
                className="font-display font-semibold text-[17px] hover:text-crimson"
              >
                {i.name}
              </Link>
              <p className="text-soft text-[14px]">{formatPrice(i.price)} each</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQty(i.slug, i.qty - 1)}
                className="w-8 h-8 rounded-full border border-line bg-cream font-semibold hover:border-crimson"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold">{i.qty}</span>
              <button
                onClick={() => setQty(i.slug, i.qty + 1)}
                className="w-8 h-8 rounded-full border border-line bg-cream font-semibold hover:border-crimson"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <div className="w-20 text-right font-semibold text-crimson">
              {formatPrice(i.price * i.qty)}
            </div>
            <button
              onClick={() => remove(i.slug)}
              className="text-soft hover:text-crimson text-[13px] underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-paper border border-line rounded-card p-6 flex flex-wrap justify-between gap-4 items-center">
        <p className="font-display text-[20px] font-semibold">
          Total: <span className="text-crimson">{formatPrice(total)}</span>
        </p>
        <Link href="/checkout" className="btn-solid">Proceed to Checkout</Link>
      </div>
    </div>
  );
}
