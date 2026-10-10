import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = { title: "Checkout" };

export default function CheckoutPage() {
  return (
    <main className="py-12">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="font-display text-[clamp(30px,4vw,44px)] font-semibold mb-10">
          Checkout
        </h1>
        <CheckoutClient />
      </div>
    </main>
  );
}
