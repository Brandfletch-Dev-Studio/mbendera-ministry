import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Partner with the Ministry",
  description:
    "Partner with Bishop George Enock Mbendera and Cross Victory Ministries in Blantyre, Malawi to advance the Gospel, raise leaders, and touch lives.",
};

export default function PartnerPage() {
  return (
    <main>
      {/* Crimson Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Cross Victory Ministries</p>
          <h1>Partner with the Ministry</h1>
          <p>
            Thank you for your response. ✨ Stand with us in spreading the
            Gospel, raising worshippers, and advancing God’s Kingdom from
            Blantyre, Malawi to the world.
          </p>
        </div>
      </section>

      {/* Ministry Vision Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 shadow-soft max-w-4xl mx-auto">
              <span className="eyebrow">Faith, Healing &amp; Leadership</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-6">
                Our Ministry Vision &amp; Calling
              </h2>
              <p className="text-soft text-lg leading-relaxed font-body mb-6">
                Under the apostolic leadership of Bishop George Enock Mbendera,
                Cross Victory Ministries carries a vision where faith, healing,
                and leadership are not separate programs but one living stream
                of God’s grace. Faith roots us in God’s Word, healing reveals the
                compassion of Jesus in every area of life, and leadership raises
                men and women who carry the presence and power of the Holy Spirit
                to Malawi and beyond.
              </p>
              <p className="text-soft text-base leading-relaxed">
                As a ministry partner, your prayers, financial support, and
                collaboration directly power church planting, digital
                discipleship, music recording, book publishing, and community
                outreach in Blantyre and worldwide.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Three Pillars of Partnership */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Three Pillars</p>
            <h2 className="h-display text-3xl md:text-4xl text-ink mb-10">
              How Your Partnership Transforms Lives
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-2">
                    Pillar One
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink mb-3">
                    Walking in Faith
                  </h3>
                  <blockquote className="text-xs text-crimson italic mb-4 border-l-2 border-gold pl-3 py-1">
                    “Now faith is the substance of things hoped for, the evidence
                    of things not seen.” — Hebrews 11:1
                  </blockquote>
                  <p className="text-soft text-sm leading-relaxed">
                    At Cross Victory Ministries, faith is not a theory but a way
                    of life. We believe that true biblical faith is rooted in who
                    God is and what He has spoken in His Word. Faith brings God’s
                    higher reality into every situation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-2">
                    Pillar Two
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink mb-3">
                    Compassion &amp; Healing
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-4">
                    Healing reveals the compassion of Jesus in every area of
                    life. Before there is a breakthrough in the natural, there is
                    a conviction in the Spirit that God is who He says He is and
                    will do what He has said.
                  </p>
                  <p className="text-soft text-sm leading-relaxed">
                    Through your partnership, prayer streams and healing
                    services touch individuals and families across Blantyre and
                    beyond.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-2">
                    Pillar Three
                  </span>
                  <h3 className="font-display font-semibold text-xl text-ink mb-3">
                    Leadership &amp; Discipleship
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-4">
                    Leadership raises men and women who carry the presence and
                    power of the Holy Spirit to Malawi and beyond.
                  </p>
                  <p className="text-soft text-sm leading-relaxed">
                    We equip believers through systematic Bible teaching, pastoral
                    mentorship, music ministry training, and published literature.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partnership Call to Action Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="bg-cream border border-line rounded-card p-8 md:p-12 text-center max-w-3xl mx-auto shadow-soft">
              <span className="eyebrow">Become a Partner</span>
              <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink mb-4">
                Stand with Bishop George Mbendera Today
              </h2>
              <p className="text-soft text-base leading-relaxed mb-8">
                Whether through monthly partnership, event sponsorship, or
                purchasing music and books in our ministry store, your support
                makes a lasting kingdom impact.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-solid px-8 py-3.5">
                  Contact for Partnership
                </Link>
                <Link href="/shop" className="btn-ghost px-8 py-3.5">
                  Support via Ministry Store
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
