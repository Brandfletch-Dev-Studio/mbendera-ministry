import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "PDF Downloads",
  description:
    "Read ‘Your Hope Is Not Lost’ — the PDF is available for you at the bottom of this page. Sermon notes, study guides, and books from Cross Victory Ministries.",
};

const groups = [
  {
    title: "Sermon Notes, Study Guide & Books.",
    items: [
      ["Faith That Overcomes — Sermon Notes", "#"],
      ["Healing Streams — Small Group Study", "#"],
      ["Empowered by the Holy Spirit — Study Outline", "#"],
      ["Prayer That Moves Nations — Intercession Notes", "#"],
    ],
  },
  {
    title: "Bible Study Materials",
    items: [
      ["The Fear of the Lord — Bible Study Workbook", "#"],
      ["Foundations of Faith — New Believers Study", "#"],
      ["Acts of the Apostles — Leadership Study Notes", "#"],
    ],
  },
  {
    title: "Prayer & Devotional Guides",
    items: [
      ["Morning Devotions — 30-Day Prayer Guide", "#"],
      ["Healing Streams — 14-Day Devotional", "#"],
    ],
  },
];

export default function PdfUploadsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Resources &amp; Downloads</p>
          <h1>Read ‘Your Hope Is Not Lost’</h1>
          <p>
            Read ‘Your Hope Is Not Lost’ — the PDF is available for you at the
            bottom of this page.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {groups.map((g, gi) => (
            <Reveal key={g.title} delay={(gi % 3) as 0 | 1 | 2}>
              <div>
                <h2 className="font-display text-[clamp(24px,3vw,32px)] font-semibold mb-7">
                  {g.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {g.items.map(([name, href]) => (
                    <div
                      key={name}
                      className="bg-paper border border-line rounded-card p-6 card-lift flex flex-col gap-4"
                    >
                      <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">
                        PDF
                      </span>
                      <h3 className="font-display text-[18px] font-semibold leading-snug flex-1">
                        {name}
                      </h3>
                      <a
                        href={href}
                        className="text-crimson font-semibold text-[14.5px] hover:underline"
                      >
                        Download PDF ↓
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal>
            <div>
              <h2 className="font-display text-[clamp(24px,3vw,32px)] font-semibold mb-7">
                Recommended Reading
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  "Download A DIVINE REVELATION OF HELL – Mary K. Baxter (PDF)",
                  "Download A DIVINE REVELATION OF HEAVEN – Mary K. Baxter (PDF)",
                  "Download Pastor Faints in Church – Femi Oluyamoju (PDF)",
                ].map((n) => (
                  <div
                    key={n}
                    className="bg-paper border border-line rounded-card p-6 card-lift flex flex-col gap-4"
                  >
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">
                      PDF
                    </span>
                    <h3 className="font-display text-[17px] font-semibold leading-snug flex-1">
                      {n.replace("Download ", "")}
                    </h3>
                    <a href="#" className="text-crimson font-semibold text-[14.5px] hover:underline">
                      Download PDF ↓
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The book — bottom of the page, as promised */}
      <section className="section section-alt" id="your-hope">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 text-center">
              <p className="eyebrow">Read Your At PDF At The Bottom Of This Page</p>
              <h2 className="font-display text-[clamp(28px,4vw,42px)] font-semibold leading-tight">
                YOUR HOPE IS NOT LOST.
              </h2>
              <p className="text-soft mt-4 max-w-xl mx-auto">
                A book of hope, by George Enock Mbendera. Because Jesus is
                alive and your hope is not lost.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap mt-8">
                <a
                  href="/assets/your-hope-is-not-lost.pdf"
                  download
                  className="btn-solid"
                >
                  Download the PDF
                </a>
                <Link href="/shop/your-hope-is-not-lost-ebook" className="btn-ghost">
                  Get it in the Shop
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(24px,3vw,32px)] font-semibold mb-4">
              Request a Resource
            </h2>
            <p className="text-soft mb-7">
              Contact the Ministry — we are open, humble and caring.
            </p>
            <Link href="/contact" className="btn-solid">Contact the Ministry</Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
