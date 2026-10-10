import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { products, formatPrice } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Digital Music, Merchandise and Christian Literature (Your Hope Is Not Lost) by George Enock Mbendera.",
};

const cats = [
  { key: "all", label: "All" },
  { key: "merch", label: "Merchandise" },
  { key: "music", label: "Digital Music" },
  { key: "ebooks", label: "E-books & Literature" },
] as const;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat } = await searchParams;
  const active = cat && cats.some((c) => c.key === cat) ? cat : "all";
  const list = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Shop</p>
          <h1>Digital Music, Merchandise and Christian Literature</h1>
          <p>
            Join the only way to Heaven which is through our Lord and
            Saviour — JESUS CHRIST. Every purchase supports the ministry of
            Bishop George Enock Mbendera and Cross Victory Ministries.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex gap-2.5 flex-wrap mb-10">
            {cats.map((c) => (
              <Link
                key={c.key}
                href={c.key === "all" ? "/shop" : `/shop?cat=${c.key}`}
                className={`px-5 py-2 rounded-full text-[14.5px] font-semibold transition border ${
                  active === c.key
                    ? "bg-crimson text-white border-crimson"
                    : "bg-paper text-soft border-line hover:border-crimson hover:text-crimson"
                }`}
              >
                {c.label}
              </Link>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) as 0 | 1 | 2}>
                <Link
                  href={`/shop/${p.slug}`}
                  className="bg-paper border border-line rounded-card overflow-hidden card-lift block"
                >
                  <div className="aspect-square bg-cream">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
                      {p.category === "merch" ? "Merchandise" : p.category === "music" ? "Digital Music" : "E-book"}
                    </span>
                    <h3 className="font-display text-[19px] font-semibold mt-1.5 leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-soft text-[14px] mt-1.5 line-clamp-2">{p.description}</p>
                    <p className="font-semibold text-crimson mt-3">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
