import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Podcasts — Bishop George Mbendera",
  description:
    "Take the Word with you wherever you go. Listen to sermons, teachings, and Spirit-led conversations from Bishop George Enock Mbendera and Cross Victory Ministries.",
};

export default function PodcastsPage() {
  return (
    <main className="bg-cream text-ink font-body">
      {/* ---------- Page Hero ---------- */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Podcasts</p>
            <h1>Bishop George Mbendera Podcasts.</h1>
            <p>
              Take the Word with you wherever you go. Listen to sermons, teachings, and Spirit-led conversations from Bishop George Enock Mbendera and the Cross Victory Ministries family.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-8">
              <a
                href="#"
                className="btn-solid bg-gold text-ink hover:bg-white"
              >
                Listen on Spotify
              </a>
              <a
                href="#"
                className="btn-ghost border-white text-white hover:bg-white hover:text-crimson"
              >
                Listen on Apple Podcasts
              </a>
              <a
                href="#"
                className="btn-ghost border-white text-white hover:bg-white hover:text-crimson"
              >
                Listen on Google Podcasts
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- NOW PLAYING Section ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 shadow-soft grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-crimson/10 text-crimson font-semibold text-xs tracking-wider uppercase mb-4">
                  NOW PLAYING
                </span>
                <p className="text-soft text-xs font-semibold uppercase tracking-wider mb-2">
                  Episode 42 — June 30, 2024
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
                  Walking in the Fullness of the Holy Spirit
                </h2>
                <p className="text-soft text-base leading-relaxed mb-6">
                  Discover how to live a Spirit-filled life every day, yielding fully to the leading and power of the Holy Spirit in your walk with Christ. From Cross Victory Ministries, Blantyre, Malawi.
                </p>
                <a
                  href="#"
                  className="btn-solid inline-flex items-center gap-2"
                >
                  ▶ Listen on Spotify
                </a>
              </div>

              <div className="relative rounded-card overflow-hidden border border-line bg-cream p-6 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/bishop-george-mbendera-6a4cf85bae24f.png"
                  alt="Bishop George Mbendera Podcast Cover"
                  className="rounded-card w-full aspect-square object-cover mb-4 shadow-soft"
                  loading="lazy"
                />
                <p className="font-display text-sm font-semibold text-ink">
                  Cross Victory Ministries Podcast
                </p>
                <p className="text-soft text-xs">Blantyre, Malawi</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Latest Episodes Section ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="eyebrow">All Episodes</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
                Latest Episodes
              </h2>
              <p className="font-display text-lg italic text-crimson mb-4">
                Be strengthened by the Word wherever you are.
              </p>
              <p className="text-soft text-base leading-relaxed">
                Catch up on the most recent messages from Cross Victory Ministries in Blantyre, Malawi. Whether you are at home, at work, or on the move, let your faith be stirred and your walk with Christ be strengthened.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Episode 42 */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
                      Episode 42 — June 30, 2024
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    YOUR HOPE IS NOT LOST.
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Because Jesus is alive and your hope is not lost. Therefore, it’s not a matter of how big is the storm but it’s a matter of how big is the Prince of peace- Jesus. (A message taken from the foreword of my new book- YOUR HOPE IS NOT LOST.)
                  </p>
                </div>
                <a href="#" className="btn-ghost text-xs text-center py-2 px-4 self-start">
                  Listen Now
                </a>
              </div>
            </Reveal>

            {/* Episode 41 */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
                      Episode 41 — June 23, 2024
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Faith That Overcomes Every Storm
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    YOUR HOPE IS NOT LOST. Stand unwavering in faith as we explore biblical truths for overcoming life’s fiercest trials.
                  </p>
                </div>
                <a href="#" className="btn-ghost text-xs text-center py-2 px-4 self-start">
                  Listen Now
                </a>
              </div>
            </Reveal>

            {/* Episode 40 */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
                      Episode 40 — June 16, 2024
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    The Fear of the Lord and True Wisdom
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Explore how a holy reverence for God shapes our decisions, protects our lives, and opens the door to divine wisdom.
                  </p>
                </div>
                <a href="#" className="btn-ghost text-xs text-center py-2 px-4 self-start">
                  Listen Now
                </a>
              </div>
            </Reveal>

            {/* Episode 39 */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold">
                      Episode 39 — June 9, 2024
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Healing Streams — The River That Never Runs Dry
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Hear testimonies and teaching on God’s healing power flowing like a river to restore bodies, minds, and families.
                  </p>
                </div>
                <a href="#" className="btn-ghost text-xs text-center py-2 px-4 self-start">
                  Listen Now
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Browse by Series Section ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Browse by Series</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
                Find a teaching series for every season
              </h2>
              <p className="text-soft text-base leading-relaxed">
                Explore collections of messages from Bishop George Enock Mbendera and the Cross Victory Ministries team, focused on key themes that will build your faith.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/15 text-gold font-semibold text-[11px] uppercase tracking-wider mb-3">
                    12 episodes
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Faith That Overcomes
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Teachings on living a victorious life through unwavering trust in God’s Word, no matter the circumstances.
                  </p>
                </div>
                <a href="#" className="text-crimson font-semibold text-sm hover:underline">
                  View Series →
                </a>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/15 text-gold font-semibold text-[11px] uppercase tracking-wider mb-3">
                    9 episodes
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Healing Streams
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Messages and testimonies on the healing power of Jesus Christ flowing to individuals, families, and communities.
                  </p>
                </div>
                <a href="#" className="text-crimson font-semibold text-sm hover:underline">
                  View Series →
                </a>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold/15 text-gold font-semibold text-[11px] uppercase tracking-wider mb-3">
                    11 episodes
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Empowered by the Holy Spirit
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Teachings on the gifts, fruit, and power of the Holy Spirit for bold Christian living and effective ministry.
                  </p>
                </div>
                <a href="#" className="text-crimson font-semibold text-sm hover:underline">
                  View Series →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Subscribe Section ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 text-center shadow-soft">
              <p className="eyebrow">Subscribe</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-4">
                Subscribe &amp; Never Miss an Episode
              </h2>
              <p className="text-soft text-base max-w-2xl mx-auto mb-8">
                Receive new podcast episodes, ministry updates, and encouragement from Cross Victory Ministries directly in your inbox.
              </p>

              <form className="max-w-md mx-auto space-y-4" action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain">
                <div className="flex gap-2 flex-col sm:flex-row">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="flex-1 bg-cream border border-line rounded-full px-5 py-3 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                  <button type="submit" className="btn-solid whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-soft">
                  By subscribing you agree to receive emails from Cross Victory Ministries. You can unsubscribe at any time.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
