"use client";

import { useState } from "react";
import { useCart } from "./CartProvider";
import type { Product } from "@/lib/products";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      className="btn-solid mt-2"
      onClick={() => {
        add({
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.images[0],
          digital: product.digital,
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
      }}
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
}
