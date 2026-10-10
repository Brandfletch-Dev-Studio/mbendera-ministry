"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartProvider";

const primary = [
  { href: "/about", label: "About" },
  { href: "/ministry", label: "Ministry" },
  { href: "/sermons", label: "Sermons" },
  { href: "/music", label: "Music" },
  { href: "/shop", label: "Shop" },
  { href: "/cross-victory-church", label: "Church" },
  { href: "/blog", label: "Blog" },
];

const more = [
  { href: "/gods-creation-the-universe", label: "GOD’s Creation & The Universe" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/videos", label: "Videos" },
  { href: "/devotionals", label: "Devotionals" },
  { href: "/e-books", label: "E-books" },
  { href: "/pdf-uploads", label: "PDF Downloads" },
  { href: "/bible-study", label: "Bible Study" },
  { href: "/faith-healing", label: "Faith & Healing" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-3.5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="w-11 h-11 rounded-xl bg-crimson text-white font-display font-bold text-[22px] grid place-items-center">
            M
          </span>
          <span className="font-display text-[19px] font-semibold leading-[1.15]">
            Mbendera
            <em className="block not-italic font-normal text-[13px] text-soft">
              Music &amp; Ministry
            </em>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-[14.5px] font-medium text-soft">
          {primary.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-crimson transition">
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button className="hover:text-crimson transition flex items-center gap-1">
              More
              <span className="text-[10px]">▼</span>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full pt-2 w-64">
                <div className="bg-paper border border-line rounded-xl shadow-soft p-2 grid">
                  {more.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-3 py-2 rounded-lg hover:bg-cream text-soft hover:text-crimson transition"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/cart"
            className="relative hover:text-crimson transition"
            aria-label="Cart"
          >
            Cart
            {count > 0 && (
              <span className="absolute -top-1.5 -right-4 bg-gold text-white text-[10px] font-bold rounded-full w-4 h-4 grid place-items-center">
                {count}
              </span>
            )}
          </Link>
          <Link
            href="/contact"
            className="bg-crimson text-white px-4 py-2 rounded-full hover:bg-crimdeep transition"
          >
            Contact
          </Link>
        </nav>

        <button
          className="xl:hidden p-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-line bg-cream px-6 py-4 flex flex-col gap-3 text-[15px] font-medium">
          {primary.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="border-t border-line pt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-soft text-[13.5px]">
            {more.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/cart" onClick={() => setOpen(false)} className="text-crimson font-semibold">
            Cart ({count})
          </Link>
        </nav>
      )}
    </header>
  );
}
