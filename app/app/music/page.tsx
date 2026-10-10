import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Music Ministry — Bishop George Mbendera",
  description:
    "Songs from a traditional background released for the nations. Discover the music, discography, and worship ministry of Bishop George Enock Mbendera.",
};

export default function MusicPage() {
  return (
    <main className="bg-cream text-ink font-body">
      {/* ---------- Page Hero ---------- */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Music Ministry</p>
            <h1>George Mbendera Music &amp; Ministry</h1>
            <p className="text-white/90 text-lg leading-relaxed mt-4 max-w-3xl">
              Songs from a typical traditional background (from a predominantly traditional and Muslim community with the church of England community) and released for the nations.
            </p>
            <div className="mt-6 text-[#f3e3cd] text-base space-y-3 max-w-3xl">
              <p>
                Bishop George Mbendera’s music (with the Cross Victory Ministries) is intended to carry a sound of revival, healing, and prophetic praise to the nations.
              </p>
              <p>
                When you visit digital music sites, you will hear the old music of the traditional George and the typical Christian songs of bishop George Mbendera. You have these two catalogue of music content.
              </p>
              <p>
                Joun us in this journey of music ministry and Christian literature from the servant of the Lord. May GOD bless you exceedingly.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap mt-8">
              <a
                href="https://georgembendera.bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid bg-gold text-ink hover:bg-white"
              >
                Stream on Bandcamp
              </a>
              <a
                href="#discography"
                className="btn-ghost border-white text-white hover:bg-white hover:text-crimson"
              >
                View Discography
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Latest Releases ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Latest Releases</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Featured Songs &amp; Devotionals
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Release 1: My Destiny */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-8 card-lift flex flex-col justify-between h-full shadow-soft">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-2">
                    Single / Devotional
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                    My Destiny
                  </h3>
                  <p className="text-soft text-base leading-relaxed mb-6">
                    Scripture-based devotional music crafted to anchor your daily walk in the presence of God.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://georgembendera.bandcamp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid text-xs py-2.5 px-5"
                  >
                    Stream Now
                  </a>
                  <a
                    href="https://georgembendera.bandcamp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs py-2.5 px-5"
                  >
                    Stream on Bandcamp
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Release 2: Lord Bless Africa- Instrumental */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-8 card-lift flex flex-col justify-between h-full shadow-soft">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-2">
                    Instrumental Anthem
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink mb-3">
                    Lord Bless Africa- Instrumental
                  </h3>
                  <p className="text-soft text-base leading-relaxed mb-6">
                    A Continental Anthem and Prayer for the Lord to Bless Africa.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://georgembendera.bandcamp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid text-xs py-2.5 px-5"
                  >
                    Stream Now
                  </a>
                  <a
                    href="https://georgembendera.bandcamp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-xs py-2.5 px-5"
                  >
                    Stream on Bandcamp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Streaming Platforms ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="eyebrow">Streaming Platforms</p>
              <h2 className="font-display text-3xl font-semibold text-ink mb-3">
                Listen Everywhere
              </h2>
              <p className="text-soft text-base leading-relaxed">
                Stream on Spotify, listen on Apple Music, stream on Amazon Music, and download on Bandcamp so you can carry the sound of Cross Victory Ministries wherever you go.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a
                href="https://georgembendera.bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper border border-line rounded-full px-6 py-3 font-semibold text-ink text-sm shadow-soft hover:border-gold hover:text-gold transition"
              >
                Spotify
              </a>
              <a
                href="https://georgembendera.bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper border border-line rounded-full px-6 py-3 font-semibold text-ink text-sm shadow-soft hover:border-gold hover:text-gold transition"
              >
                Apple Music
              </a>
              <a
                href="https://georgembendera.bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper border border-line rounded-full px-6 py-3 font-semibold text-ink text-sm shadow-soft hover:border-gold hover:text-gold transition"
              >
                Amazon Music
              </a>
              <a
                href="https://georgembendera.bandcamp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-paper border border-line rounded-full px-6 py-3 font-semibold text-ink text-sm shadow-soft hover:border-gold hover:text-gold transition"
              >
                Bandcamp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- George Mbendera Music. ---------- */}
      <section className="section">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 shadow-soft">
              <p className="eyebrow">Ministry &amp; Worship</p>
              <h2 className="font-display text-3xl font-semibold text-ink mb-4">
                George Mbendera Music.
              </h2>
              <p className="text-soft text-base md:text-lg leading-relaxed mb-6">
                At Cross Victory Ministries, music is not performance — it is proclamation. It is part of ministry. Every song( chorus, hymn, worship) is crafted to stir faith, and usher listeners into the presence of the Lord. From intimate devotional pieces to full congregational anthems; Bishop Mbendera’s music ministry is intended to impact thousands across Malawi and nations. The principle goal is to honour and glorify GOD through Jesus Christ, our Lord and Saviour.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Discography & Lyric Sheet ---------- */}
      <section id="discography" className="section section-alt prose-page">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 shadow-soft mb-12">
              <p className="eyebrow">DISCOGRAPHY &amp; LYRIC SHEET:</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
                DISCOGRAPHY:
              </h2>
              <p className="text-soft text-base leading-relaxed mb-8">
                I have recorded 4 music albums to my credit. The first one with my first band, The Zion Ambassadors, titled- We Wanna Go To Zion. It has songs like Messiah’s Come, We Wanna Go To Zion, Refugee Repatriation, Let Young men rule, Nepotism,Konzani Moyo and more. The second one was recorded in South Africa titled- Khale. It has popular songs like Lord Bless Africa, Kajuni, Khale, Destruction of Sodom, Man Today and other songs. The fourth is Jerusalem with songs like, I Will Praise The Lord, Jerusalem, I Want To be With You, Never Be Afraid, Ndisaiwale Za Chikondi Chanu and some more. The latest one is- Winner. It has the following tracks: Mukafika, Winners, Are you Ready, Yana Katema, What The Lord Has Done, Lord Bless Africa, Vol.11 and other songs. I have also recorded two Christian classical songs recently- My Destiny(featuring Michael), my son and the other was released as its Instrumental.
              </p>

              <hr className="border-line my-8" />

              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                LYRICSHEET:
              </h2>
              <h3 className="font-display text-xl font-semibold text-crimson mb-4">
                LORD BLESS AFRICA,Vol.1
              </h3>

              <div className="space-y-6 text-soft text-base font-body leading-relaxed bg-cream border border-line rounded-xl p-6 my-6">
                <div>
                  <p className="font-semibold text-ink mb-1">(1)</p>
                  <p>They Shall Break Spears Into Pruning Hooks And Their Swords Into Plow-shares.</p>
                  <p>Nation Shall Lift Not A Sword Against A Nation; Neither Shall They Learn War Any More.</p>
                  <p>But Princely Rule Shall Reign To The Abundance.</p>
                  <p>– And To Peace- There Shall Be No End.</p>
                </div>

                <div className="border-l-2 border-gold pl-4 py-1 italic font-semibold text-ink">
                  <p className="text-gold uppercase tracking-wider text-xs not-italic mb-1">Chorus:</p>
                  <p>Lord Bless Africa.</p>
                  <p>– Africa</p>
                  <p>Lord Bless Africa.</p>
                  <p>Our Home Africa.</p>
                  <p>Our Land Africa.</p>
                </div>

                <div>
                  <p className="font-semibold text-ink mb-1">(2)</p>
                  <p>When Our Lord JESUS CHRIST, Saw That The Anger Was Set Ablaze. He Was King Herod. He Then Found A Refugee In Africa- Oooh- In Africa; Black People(s) No Longer A Paradise. Lord I Pray, Set Free -Africa. From This Tribal War Zone.</p>
                </div>

                <div>
                  <p className="font-semibold text-ink mb-1">(3)</p>
                  <p>Massive Abuse, Human Rights, Persists In Africa- Oooh- In Africa. Global Refugee Crises Hunger In Africa- Are Inextricably linked. Tyrant People Terrify The Continent- Fond (Of) Extrajudicial execution, torture (and) tribalism. But People Cry For Liberty, Equality, Imprtiality- Still We Struggle For Peace And Harmony- oooh.</p>
                  <p className="mt-2 font-medium italic">Lord I Pray, Set Free- Africa- From This Tribal War Zone.</p>
                  <p className="mt-3 font-display font-semibold text-ink text-right">— George Mbendera</p>
                </div>
              </div>

              <p className="text-xs text-soft/80 italic text-center mt-6">
                Follow on Spotify, Apple, Amazon and other digital music stores; download( on CDs, Vinyls &amp; Cassettes) on Bandcamp Music.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- How We Serve Through Music ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">How We Serve Through Music</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Praise &amp; Worship Ministry
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Worship Concerts
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Spirit-led live music events that draw communities together in praise, intercession, and celebration.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Music Training
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Practical workshops equipping worship teams, songwriters, and musicians to serve with excellence and anointing.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Recording Ministry
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Professional recordings of original worship music made available for streaming, download, and ministry use worldwide.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials / What Leaders Are Saying ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">MUSIC &amp; MINISTRY.</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                What Leaders Are Saying
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-8 shadow-soft">
                <p className="text-soft italic text-base leading-relaxed mb-6">
                  “The worship from Bishop Mbendera’s team transformed our church conference. People were healed and set free through song.”
                </p>
                <p className="font-display font-semibold text-ink text-sm">
                  Pastor James Banda
                </p>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                  Lilongwe
                </p>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-8 shadow-soft">
                <p className="text-soft italic text-base leading-relaxed mb-6">
                  “Their music training workshop reshaped our worship team completely. We now serve with both skill and deep spiritual authority.”
                </p>
                <p className="font-display font-semibold text-ink text-sm">
                  Sister Grace Phiri
                </p>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                  Mzuzu
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Music Videos & Newsletter ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 h-full flex flex-col justify-between shadow-soft">
                <div>
                  <p className="eyebrow">Music Videos</p>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
                    Watch Live Worship &amp; Music Videos
                  </h2>
                  <p className="text-soft text-base leading-relaxed mb-6">
                    Experience the atmosphere of Cross Victory Ministries wherever you are. Watch live worship moments, official music videos, and testimonies that capture what God is doing in and through our Music Ministry.
                  </p>
                </div>
                <a
                  href="https://georgembendera.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid text-center block"
                >
                  YouTube Music
                </a>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-8 h-full flex flex-col justify-between shadow-soft">
                <div>
                  <p className="eyebrow">Stay Connected</p>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-4">
                    Stay Connected to the Music
                  </h2>
                  <p className="text-soft text-base leading-relaxed mb-6">
                    Receive new releases, worship resources, and ministry updates straight to your inbox.
                  </p>
                  <form className="space-y-3" action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain">
                    <input
                      type="email"
                      placeholder="Type your email…"
                      required
                      className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                    />
                    <button type="submit" className="btn-solid w-full text-center">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
