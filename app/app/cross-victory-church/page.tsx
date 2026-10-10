import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Cross Victory Church — Blantyre, Malawi",
  description:
    "Where Faith Meets Victory. Join Bishop George Mbendera and Cross Victory Church for worship, teaching, and prayer in Blantyre, Malawi.",
};

const churchPrograms = [
  {
    title: "Saturday Class",
    desc: "Bible foundations for all ages, every Saturday morning before service.",
  },
  {
    title: "Youth Ministry",
    desc: "A vibrant space for teens and young adults to find purpose and community.",
  },
  {
    title: "Women’s Fellowship",
    desc: "Sisters gathering for prayer, encouragement, and shared strength in faith.",
  },
  {
    title: "Men’s Fellowship",
    desc: "Men sharpening one another to lead their homes and church with integrity.",
  },
  {
    title: "Choir & Worship",
    desc: "Lifting Malawi’s voice in song and leading the congregation into His presence.",
  },
  {
    title: "Community Outreach",
    desc: "Serving the vulnerable across Blantyre with food, care, and the gospel.",
  },
  {
    title: "Bible Study",
    desc: "Going deeper into the Scriptures. Deep knowledge of the Scriptures is vital for a Christian walk. Bible knowledge should be encouraged among Christians.",
  },
];

export default function CrossVictoryChurchPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Blantyre, Malawi</p>
          <h1>Cross Victory Church</h1>
          <p>Where Faith Meets Victory</p>
          <div className="mt-6">
            <Link href="#visit" className="btn-solid text-sm">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {/* Welcome Section */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="eyebrow">Welcome</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  A Word of Welcome: You Are A Family Here.
                </h2>
                <div className="prose-page">
                  <p>
                    Whether you have walked with the Lord for decades or you are
                    stepping through our doors for the very first time, there is a
                    place for you at Cross Victory Church. We are an ordinary
                    people serving an extraordinary God — and we have seen Him
                    move.
                  </p>
                  <p className="font-semibold text-ink">
                    Bring your questions, your burdens to the Lord Jesus.
                  </p>
                  <p>
                    Here in Blantyre, we gather to worship, to grow in the Word
                    and to carry victory into every street and home. We would be
                    honoured to walk this journey together with you.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-paper border border-line rounded-card p-4 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/bishop-george-mbendera-6a5e8138e831a.png"
                    alt="Bishop George Mbendera Cross Victory Church"
                    loading="lazy"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                  <p className="text-xs text-soft text-center mt-3 font-medium">
                    Bishop George Enock Mbendera — Cross Victory Church
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Background Story */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-12 space-y-6 shadow-soft">
              <span className="eyebrow">Church History &amp; Calling</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                The Background
              </h2>
              <div className="prose-page leading-relaxed">
                <p>
                  When I left the Church of England( which I loved and raised
                  from a Muslim community), it was not for pride or selfish
                  reasons. When I left a full- time musical journey and cancelled
                  my travel back to South Africa to work on two music deals; when
                  I abandoned an employment opportunity in order to save the
                  Lord full- time, it doesn’t mean that I had enough money and
                  provisions. Brethren, I felt to start a full- time ministry to
                  serve the Lord while following the teachings of the holy
                  Apostles. I started this small church in the living room of my
                  home. By then, no one stood with me except the Spirit of the
                  Lord.
                </p>
                <p>
                  At the point of this writing, I have known the Holy Spirit well,
                  getting acquainted well and enjoyed His communion and have
                  understood His great love that I have never experienced from
                  anyone else. I have witnessed His marvelous acts and great
                  miracles the world has never witnessed. The Holy Spirit is real
                  and genuine; ministry is impossible and with no impact without
                  Him.
                </p>
                <p>
                  The Church should return back to that point where we left the
                  Holy Spirit and replaced Him with money and physical resources.
                  Money and physical resources are necessary but should follow
                  the presence of the Holy Spirit otherwise, ministry will have no
                  impact. We can write millions of books but if those books have
                  no impact from the Holy Spirit, they cannot change anyone. Since
                  my journey from a traditional and predominantly Muslim
                  community with my music background, I have discovered someone
                  the world has not really known and understood; He is the Holy
                  Spirit which is the Stronghold and General Overseer of my
                  ministry and calling. JESUS Christ is the founder. At the
                  bottom; I am their servant.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Doctrine, Baptism, Music */}
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-4">
                <span className="eyebrow">Apostolic Foundation</span>
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  DOCTRINE .
                </h2>
                <div className="prose-page">
                  <p>
                    We follow the Doctrine and the teachings of the holy
                    Apostles and the prophecies of the holy prophet.
                  </p>
                  <p>
                    We don’t just plant Churches any where except where a great
                    need requires that. We work with the Living Church everywhere.
                    We believe that this is not the time of pride but of humility
                    that JESUS alone may take all the glory. We also believe that
                    it’s not the time of judging one another but helping carrying
                    the burdens of one another and being a brother’s keeper. But
                    on the other hand, it’s time not to tolerate false
                    doctrines, teachings and prophecies. The days are evil and
                    JESUS IS about to come for his holy Church so things have to be
                    put in their right order.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-paper border border-line rounded-card p-8 space-y-4">
                  <span className="eyebrow">Sacrament &amp; Practice</span>
                  <h2 className="font-display font-semibold text-2xl text-ink">
                    BAPTISM.
                  </h2>
                  <div className="prose-page text-sm">
                    <p>
                      We believe in baptism by emersion and in the Name of JESUS
                      CHRIST. This was the practice of the holy Apostles for
                      their teachings and their practice will not contradict. So,
                      we baptise as the holy Apostles conducted baptism.
                    </p>
                    <p>
                      In short, we strictly follow the teachings or the doctrine of
                      the holy Apostles. But we gather and worship on Saturdays and
                      with an extra mid- week service. We have other evangelism
                      programs as well- in order to reach masses out there. We
                      believe in the baptism of the Holy Spirit and spiritual
                      gifts. We treat the gift of tongues exactly how the
                      Apostles handled it: You should speak in tongues in the
                      Church if there is someone to interpret. Otherwise, you can
                      speak alone- before the Lord.
                    </p>
                  </div>
                </div>

                <div className="bg-paper border border-line rounded-card p-8 space-y-4">
                  <span className="eyebrow">Worship Expression</span>
                  <h2 className="font-display font-semibold text-2xl text-ink">
                    MUSIC:
                  </h2>
                  <div className="prose-page text-sm">
                    <p>
                      Because of my musical background, music is an important
                      part in worship. We value hymns, choruses and choir sounds
                      as part of our worship.
                    </p>
                    <p>
                      Since I have a background of music, we like worship music,
                      hymns and spiritual songs.
                    </p>
                    <p className="font-semibold text-ink pt-2">
                      Feel free to connect with us. We are open, humble and
                      caring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Scripture Quote */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 text-center max-w-3xl mx-auto shadow-soft">
              <blockquote className="font-display font-semibold text-xl md:text-2xl text-ink italic mb-3">
                “And this gospel of the kingdom will be preached in all the world
                as a witness to all the nations, and then the end will come.”
              </blockquote>
              <span className="text-gold font-semibold uppercase text-xs tracking-widest">
                — Matthew 24:14 NKJV
              </span>
            </div>
          </Reveal>

          {/* Service Times */}
          <Reveal>
            <div id="visit" className="max-w-4xl mx-auto space-y-8">
              <div className="text-center">
                <span className="eyebrow">Worship Schedule</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  Service Times
                </h2>
                <p className="text-soft text-sm mt-2">
                  Join us this week — everyone is welcome.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-paper border-2 border-gold rounded-card p-8 text-center space-y-3 shadow-soft">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                    SATURDAY
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-ink">
                    9:00 AM – 12 NOON
                  </h3>
                  <p className="font-semibold text-crimson text-lg">
                    First Worship Service
                  </p>
                  <p className="text-soft text-xs">
                    Main congregational service with worship, preaching, and ministry.
                  </p>
                </div>

                <div className="bg-paper border border-line rounded-card p-8 text-center space-y-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-gold">
                    WEDNESDAY
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-ink">
                    3:00 PM
                  </h3>
                  <p className="font-semibold text-crimson text-lg">
                    Midweek Prayer
                  </p>
                  <p className="text-soft text-xs">
                    Midweek prayer gathering for intercession and spiritual renewal.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Church Programs Grid */}
          <Reveal>
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="eyebrow">Ministries &amp; Fellowships</span>
                <h2 className="font-display font-semibold text-3xl text-ink">
                  Church Programs
                </h2>
                <p className="text-soft text-sm mt-2">
                  There is a place for every age and every calling to grow and to
                  serve.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5.5">
                {churchPrograms.map((program, idx) => (
                  <div
                    key={idx}
                    className="bg-paper border border-line rounded-card p-7 card-lift space-y-3"
                  >
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block">
                      Program {idx + 1}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {program.title}
                    </h3>
                    <p className="text-soft text-sm leading-relaxed">
                      {program.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="section section-alt text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              We Look Forward to Welcoming You
            </h2>
            <p className="text-soft text-base max-w-2xl mx-auto mb-8">
              Located in Blantyre, Malawi. Reach out if you need directions,
              prayer, or wish to connect with our pastoral team.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-solid">
                Contact Our Team
              </Link>
              <Link href="/faith-healing" className="btn-ghost">
                Prayer &amp; Healing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
