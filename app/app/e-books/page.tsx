import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "E-books",
  description:
    "YOUR HOPE IS NOT LOST — a book of hope by George Enock Mbendera.",
};

export default function EBooksPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">E-books &amp; Literature</p>
          <h1>YOUR HOPE IS NOT LOST.</h1>
          <p>
            A book of hope, by George Enock Mbendera. Because Jesus is alive
            and your hope is not lost, it is not a matter of how big the storm
            is but of how big the Prince of peace is.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid md:grid-cols-[280px_1fr] gap-10 items-center bg-paper border border-line rounded-card p-8 md:p-12">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-soft mx-auto w-full max-w-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/1000196661.jpg"
                  alt="YOUR HOPE IS NOT LOST — book cover"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
                  E-book (Lulu Library)
                </span>
                <h2 className="font-display text-[clamp(26px,3.6vw,38px)] font-semibold mt-2 mb-4">
                  YOUR HOPE IS NOT LOST.
                </h2>
                <p className="text-soft mb-4">
                  Because Jesus is alive and your hope is not lost. Therefore,
                  it’s not a matter of how big is the storm but it’s a matter
                  of how big is the Prince of peace.
                </p>
                <div className="flex gap-3.5 flex-wrap">
                  <Link href="/shop/your-hope-is-not-lost-ebook" className="btn-solid">
                    BUY NOW
                  </Link>
                  <a
                    href="/assets/your-hope-is-not-lost.pdf"
                    download
                    className="btn-ghost"
                  >
                    Read the Free PDF
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="bg-cream border border-line rounded-card p-8 text-center">
              <p className="text-soft">
                Read: The Cast — more literature from the ministry is on the
                way.{" "}
                <Link href="/pdf-uploads" className="text-crimson font-semibold hover:underline">
                  Browse PDF Downloads →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
