import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCart from "@/components/AddToCart";
import { products, getProduct, formatPrice } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  return { title: p?.name ?? "Product", description: p?.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="text-soft text-[14px] mb-8">
          <Link href="/shop" className="hover:text-crimson">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-paper border border-line rounded-card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div>
            <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
              {product.category === "merch"
                ? "Merchandise"
                : product.category === "music"
                  ? "Digital Music"
                  : "E-book & Literature"}
            </span>
            <h1 className="font-display text-[clamp(28px,4vw,40px)] font-semibold leading-[1.15] mt-2">
              {product.name}
            </h1>
            <p className="font-display text-[26px] text-crimson font-semibold mt-3">
              {formatPrice(product.price)}
            </p>
            <p className="text-soft mt-4 text-[16px]">{product.description}</p>

            {product.details && (
              <ul className="mt-5 space-y-1.5">
                {product.details.map((d) => (
                  <li key={d} className="text-soft text-[15px] flex gap-2.5">
                    <span className="text-gold">•</span> {d}
                  </li>
                ))}
              </ul>
            )}

            {product.digital && (
              <p className="mt-4 text-[14px] text-soft italic">
                Digital download — available immediately after checkout.
              </p>
            )}

            <div className="flex gap-3.5 flex-wrap mt-7">
              <AddToCart product={product} />
              <Link href="/cart" className="btn-ghost">View Cart</Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-[26px] font-semibold mb-7">You may also like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className="bg-paper border border-line rounded-card overflow-hidden card-lift"
                >
                  <div className="aspect-square bg-cream overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[18px] font-semibold">{p.name}</h3>
                    <p className="text-crimson font-semibold mt-1.5">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
