import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Video Library — Cross Victory Ministries",
  description:
    "Watch & Be Encouraged. Experience sermons, worship, testimonies, and crusade highlights from Cross Victory Ministries — from Blantyre to the nations.",
};

export default function VideosPage() {
  return (
    <main className="bg-cream text-ink font-body">
      {/* ---------- Page Hero ---------- */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Cross Victory Ministries · Video Library</p>
            <h1>Watch &amp; Be Encouraged.</h1>
            <p>
              Experience sermons, worship, testimonies, and crusade highlights from Cross Victory Ministries — from Blantyre to the nations.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <a
                href="#featured"
                className="btn-solid bg-gold text-ink hover:bg-white"
              >
                Watch Latest Video
              </a>
              <a
                href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost border-white text-white hover:bg-white hover:text-crimson"
              >
                Subscribe on YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured Video ---------- */}
      <section id="featured" className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
              <div>
                <span className="eyebrow">Featured Video</span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-2 mb-3">
                  Revival Fire — Sunday Service Highlights
                </h2>
                <p className="text-gold font-semibold text-xs uppercase tracking-wider mb-6">
                  Recorded at Cross Victory Ministries, Blantyre · Recent Sunday Service
                </p>
                <p className="text-soft text-base leading-relaxed mb-4">
                  Step into a powerful Sunday at Cross Victory Ministries in Blantyre, where hungry hearts gathered to worship, pray, and encounter the presence of God. In this highlight video, you’ll witness passionate praise, faith-filled preaching, and moments of genuine surrender at the altar.
                </p>
                <p className="text-soft text-base leading-relaxed mb-8">
                  From the opening worship to the final prayer of blessing, this service captures the heartbeat of Cross Victory Ministries: lifting up Jesus, equipping believers in Malawi and beyond, and releasing revival fire to the nations.
                </p>
                <a
                  href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid"
                >
                  Watch Now
                </a>
              </div>

              <div className="bg-paper border border-line rounded-card p-8 shadow-soft text-center">
                <div className="bg-cream border border-line rounded-card aspect-video flex flex-col items-center justify-center p-6 mb-4">
                  <div className="w-16 h-16 rounded-full bg-crimson text-white flex items-center justify-center text-2xl font-bold shadow-soft mb-3">
                    ▶
                  </div>
                  <p className="font-display font-semibold text-ink text-base">
                    Video Embed Placeholder
                  </p>
                  <p className="text-soft text-xs max-w-xs mt-1">
                    Replace this area with your embedded video player from YouTube or another platform.
                  </p>
                </div>
                <p className="font-display text-sm font-semibold text-ink">
                  Revival Fire — Sunday Service Highlights
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Video Categories ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Video Categories</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
                Explore the Video Library
              </h2>
              <p className="text-soft text-base">
                Find the message or moment you’re looking for by browsing the categories below.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col items-start h-full">
                <span className="text-3xl mb-4">🎤</span>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  Sermons &amp; Teachings
                </h3>
                <p className="text-soft text-xs leading-relaxed">
                  Weekly messages from Bishop George Enock Mbendera to build, strengthen, and encourage your faith.
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col items-start h-full">
                <span className="text-3xl mb-4">🙌</span>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  Worship &amp; Praise
                </h3>
                <p className="text-soft text-xs leading-relaxed">
                  Live worship moments, praise sessions, and music videos that lift up the name of Jesus.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col items-start h-full">
                <span className="text-3xl mb-4">📖</span>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  Bible Studies
                </h3>
                <p className="text-soft text-xs leading-relaxed">
                  In-depth teaching sessions that help you understand and apply the Word of God.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col items-start h-full">
                <span className="text-3xl mb-4">🌍</span>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">
                  Crusades &amp; Outreach
                </h3>
                <p className="text-soft text-xs leading-relaxed">
                  Highlights from evangelism events and outreach across Blantyre, Malawi, and beyond.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Recent Videos ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Recent Videos</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
                Latest from Cross Victory Ministries
              </h2>
              <p className="text-soft text-base">
                Catch up on the most recent sermons, worship nights, and testimonies from Bishop Mbendera and the Cross Victory Ministries family.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                tag: "Sermon",
                title: "Faith That Moves Mountains",
                desc: "Hoow faith in God’s Word overcomes every obstacle.",
                rec: "Recorded in 2024 · Cross Victory Ministries, Blantyre",
              },
              {
                tag: "Sermon",
                title: "The Holy Spirit as Your Guide",
                desc: "Discover how to walk daily with the Holy Spirit and be led into God’s purpose for your life.",
                rec: "Recorded in 2024 · Blantyre, Malawi",
              },
              {
                tag: "Worship",
                title: "Worship Night — Blantyre",
                desc: "An extended evening of worship, praise, and spontaneous songs recorded live in Blantyre.",
                rec: "Recorded in 2024 · Worship Night Service",
              },
              {
                tag: "Deliverance",
                title: "Breaking Generational Chains",
                desc: "Moments of deliverance, prayer, and prophetic ministry as God breaks cycles and strongholds.",
                rec: "Recorded in 2024 · Sunday Service",
              },
              {
                tag: "Testimonies",
                title: "Revival Testimony Night",
                desc: "Real stories of healing, salvation, and breakthrough from members of the Cross Victory family.",
                rec: "Recorded in 2024 · Testimony Service",
              },
              {
                tag: "Teaching",
                title: "Prayer & Fasting Teaching",
                desc: "Learn the biblical foundations and practical steps for a lifestyle of prayer and fasting.",
                rec: "Recorded in 2024 · Teaching Session",
              },
            ].map((vid, idx) => (
              <Reveal key={idx} delay={(idx % 3) as 0 | 1 | 2}>
                <div className="bg-paper border border-line rounded-card p-6 card-lift flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-2">
                      {vid.tag}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">
                      {vid.title}
                    </h3>
                    <p className="text-soft text-xs leading-relaxed mb-4">
                      {vid.desc}
                    </p>
                    <p className="text-[11px] text-soft/80 italic mb-6">
                      {vid.rec}
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs text-center py-2 px-4 inline-block"
                  >
                    Watch
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Live Stream & YouTube Channel ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Live Stream */}
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 h-full flex flex-col justify-between shadow-soft">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-crimson/10 text-crimson font-semibold text-xs uppercase tracking-wider mb-4">
                    Live Stream
                  </span>
                  <h2 className="font-display text-3xl font-semibold text-ink mb-4">
                    Join Our Live Streams.
                  </h2>
                  <p className="text-soft text-base leading-relaxed mb-6">
                    Be part of our Sunday service from wherever you are in Malawi or around the world. Worship with us, hear the Word, and receive ministry live.
                  </p>
                  <div className="bg-cream border border-line rounded-xl p-4 mb-6 space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-ink uppercase block">Time</span>
                      <p className="text-sm text-soft">Sundays at 9:00 AM CAT</p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-ink uppercase block">Platforms</span>
                      <p className="text-sm text-soft">YouTube · Facebook Live</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid text-center block"
                >
                  Join the Live Stream
                </a>
              </div>
            </Reveal>

            {/* YouTube Channel */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-8 h-full flex flex-col justify-between shadow-soft">
                <div>
                  <p className="eyebrow">YouTube Channel</p>
                  <h2 className="font-display text-3xl font-semibold text-ink mb-4">
                    Subscribe to Cross VICTORY Ministries on YouTube
                  </h2>
                  <p className="text-soft text-base leading-relaxed mb-8">
                    Get new sermons, worship sessions, and testimonies as soon as they are released. Turn on notifications so you never miss a message.
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid bg-crimson text-white hover:bg-crimdeep text-center block"
                >
                  Subscribe on YouTube
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Submit Video Testimony ---------- */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 shadow-soft">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="eyebrow">Share Your Story</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
                  Submit a Video Testimony
                </h2>
                <p className="text-soft text-sm leading-relaxed">
                  Has God healed, saved, or transformed your life through the ministry of Cross Victory? We would love to hear your story. Share your testimony, and our team may follow up to record it as a video to encourage others.
                </p>
              </div>

              <form className="space-y-4 max-w-xl mx-auto" action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Name (required)
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Email (required)
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Location (City/Region in Malawi) (required)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Blantyre, Lilongwe, Mzuzu"
                    className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Testimony (required)
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                </div>
                <button type="submit" className="btn-solid w-full text-center">
                  Submit Testimony
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
