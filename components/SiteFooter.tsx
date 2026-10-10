import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-[#cfc4b4] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-wrap justify-between gap-10 border-b border-white/10">
        <div className="max-w-sm">
          <span className="font-display text-[22px] text-white">
            Mbendera{" "}
            <em className="not-italic text-[#b3a695]">Music &amp; Ministry</em>
          </span>
          <p className="font-display italic mt-4 text-[15.5px] text-[#b3a695]">
            “Join the only way to Heaven which is through our Lord and
            Saviour — JESUS CHRIST.”
          </p>
        </div>
        <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-2 text-[14.5px]">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/sermons" className="hover:text-white">Sermons</Link>
          <Link href="/podcasts" className="hover:text-white">Podcasts</Link>
          <Link href="/music" className="hover:text-white">Music</Link>
          <Link href="/videos" className="hover:text-white">Videos</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/shop" className="hover:text-white">Shop</Link>
          <Link href="/e-books" className="hover:text-white">E-books</Link>
          <Link href="/pdf-uploads" className="hover:text-white">PDF Downloads</Link>
          <Link href="/bible-study" className="hover:text-white">Bible Study</Link>
          <Link href="/devotionals" className="hover:text-white">Devotionals</Link>
          <Link href="/gallery" className="hover:text-white">Gallery</Link>
          <Link href="/events" className="hover:text-white">Events</Link>
          <Link href="/cross-victory-church" className="hover:text-white">Cross Victory Church</Link>
          <Link href="/faith-healing" className="hover:text-white">Faith &amp; Healing</Link>
          <Link href="/gods-creation-the-universe" className="hover:text-white">GOD’s Creation</Link>
          <Link href="/partner" className="hover:text-white">Partner</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-6 flex flex-wrap justify-between gap-4 text-[13px] text-[#8d8271]">
        <span>© 2026 Cross Victory Ministries. All rights reserved.</span>
        <span>Blantyre, Malawi</span>
      </div>
    </footer>
  );
}
