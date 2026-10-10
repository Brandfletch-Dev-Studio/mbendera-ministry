import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Sermons & Teaching — Cross Victory Ministries",
  description:
    "The Word That Changes Everything. Listen to and watch sermons, series, and teachings from Bishop George Enock Mbendera in Blantyre, Malawi.",
};

export default function SermonsPage() {
  return (
    <main className="bg-cream text-ink font-body">
      {/* ---------- Page Hero ---------- */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Cross Victory Ministries · Sermons &amp; Teaching</p>
            <h1>The Word That Changes Everything</h1>
            <p>
              Listen to and watch Spirit-led sermons, multi-part teaching series, and biblical messages from Bishop George Enock Mbendera. Let faith rise as you hear the truth of God’s Word.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <a href="#featured" className="btn-solid bg-gold text-ink hover:bg-white">
                Watch Latest Sermon
              </a>
              <a href="#series" className="btn-ghost border-white text-white hover:bg-white hover:text-crimson">
                Browse All Series
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured Message ---------- */}
      <section id="featured" className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
              <div>
                <span className="eyebrow">Featured Message</span>
                <h2 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4 text-ink">
                  Faith That Moves Mountains
                </h2>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  Series I · Recorded 2024 · Blantyre, Malawi
                </p>
                <p className="text-soft text-lg leading-relaxed mb-6">
                  A deep teaching on trusting God in the impossible. Discover how stepping into supernatural faith enables you to stand unshakeable on God’s Word regardless of circumstances.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <a href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ" target="_blank" rel="noopener noreferrer" className="btn-solid">
                    Watch Now
                  </a>
                  <a href="#download" className="btn-ghost">
                    Download Notes
                  </a>
                </div>
              </div>

              <div className="relative rounded-card overflow-hidden bg-paper border border-line p-8 shadow-soft text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/bishop-george-mbendera-6a5e8138e831a.png"
                  alt="Bishop George Enock Mbendera Preaching"
                  className="rounded-card w-full aspect-[16/10] object-cover mb-4"
                  loading="lazy"
                />
                <div className="bg-cream/80 border border-line rounded-lg p-4 text-center">
                  <p className="font-display italic text-ink font-medium text-sm">
                    “Embed your YouTube or video link here”
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Sermon Series / Journey Through the Word ---------- */}
      <section id="series" className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Sermon Series</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Journey Through the Word
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {/* Series I */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series I
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Faith That Moves Mountains
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    3 messages · A deep teaching on trusting God in the impossible.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Series II */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series II
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Healing for the Whole Person
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    4 messages · Christ’s restoring power over body, mind, and spirit.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Series III */}
            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series III
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Walking in the Holy Spirit
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    5 messages · Living daily under the Spirit’s guidance and power.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Series IV */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series IV
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    The Power of Prayer
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    3 messages · Building an unshakeable prayer life rooted in Scripture.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Series V */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series V
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Grace &amp; Redemption
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    4 messages · Understanding the depth of God’s love and mercy.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Series VI */}
            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series VI
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Kingdom Living
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    4 messages · How to live as citizens of Heaven in everyday life.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Series VII */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Series VII
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    Faith &amp; Healing
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Messages on the power of Christ to heal body, soul, and spirit — and the faith that receives it.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Homepage Featured Series 1 */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Featured Teaching
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    YOUR HOPE IS NOT LOST.
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Three-part teaching on trusting God when the road is uncertain.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Homepage Featured Series 2 */}
            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Featured Teaching
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    HANDLE YOUR DAY CAREFULLY.
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Restoring power of Christ over body, mind, and spirit.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>

            {/* Homepage Featured Series 3 */}
            <Reveal delay={0}>
              <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col h-full justify-between">
                <div>
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start block mb-2">
                    Featured Teaching
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink mb-3">
                    THE SECRET OF YOUR JOY.
                  </h3>
                  <p className="text-soft text-sm leading-relaxed mb-6">
                    Living led by the Spirit daily, growing in gifts, fruit, intimacy.
                  </p>
                </div>
                <a href="#featured" className="text-crimson font-semibold text-sm hover:underline">
                  Explore Series →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Recent Messages ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Recent Messages</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Catch Up on the Latest
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {[
              {
                title: "The God Who Goes Before You",
                details: "Matthew 11:28 · Recorded July 2025",
              },
              {
                title: "Standing Firm in the Storm",
                details: "James 1:2–4 · Recorded June 2025",
              },
              {
                title: "You Are Not Alone",
                details: "Psalm 23 · Recorded June 2025",
              },
              {
                title: "Unshakeable Joy",
                details: "Philippians 4:4 · Recorded May 2025",
              },
              {
                title: "Positioned for a Miracle",
                details: "John 6:11 · Recorded May 2025",
              },
              {
                title: "The Shepherd Knows Your Name",
                details: "John 10:3 · Recorded April 2025",
              },
            ].map((msg, i) => (
              <Reveal key={i} delay={(i % 3) as 0 | 1 | 2}>
                <div className="bg-paper border border-line rounded-card p-6 card-lift flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink mb-2">
                      {msg.title}
                    </h3>
                    <p className="text-soft text-xs mb-4">{msg.details}</p>
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

      {/* ---------- Comprehensive Core Ministry Teachings ---------- */}
      <section className="section section-alt prose-page">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow">Faith. Healing. Leadership.</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Core Pillars of Our Preaching &amp; Ministry
              </h2>
            </div>
          </Reveal>

          {/* Section 1: Walking in Faith */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 mb-12 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-ink mb-2">
                Walking in Faith
              </h2>
              <p className="text-gold font-semibold text-sm mb-4">
                Scripture Anchor: Hebrews 11:1 — “Now faith is the substance of things hoped for, the evidence of things not seen.”
              </p>
              <p className="text-soft leading-relaxed mb-6">
                Believers are equipped to walk in this kind of faith through clear teaching, living testimonies, small groups, prayer meetings, and intentional discipleship. Step by step, people learn to trust God in everyday life and to stand strong in every season.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-ink my-6">
                “Now faith is the substance of things hoped for, the evidence of things not seen.” — Hebrews 11:1
              </blockquote>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-cream border border-line rounded-lg p-5">
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    Faith in God’s Word
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    We teach believers to build their lives on Scripture, not on feelings or opinions. Through systematic teaching, Bible classes, and personal study, members learn to hear God’s voice in His Word and to stand firm on His promises.
                  </p>
                </div>
                <div className="bg-cream border border-line rounded-lg p-5">
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    Faith Through Prayer
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    Prayer is where faith breathes. In corporate prayer meetings, all-night vigils, and personal devotion, we learn to bring every need before God with confidence. We expect God to answer, to guide, and to release His power as we pray.
                  </p>
                </div>
                <div className="bg-cream border border-line rounded-lg p-5">
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    Faith in Community
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    Faith grows stronger in fellowship. Through small groups, mentorship, and ministry teams, believers are encouraged, corrected, and supported. No one walks alone; we stand together as a family of faith.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Section 2: Healing Is For Today */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 mb-12 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-ink mb-2">
                Healing Is For Today
              </h2>
              <p className="text-gold font-semibold text-sm mb-4">
                Scripture Anchors: Isaiah 53:5 — “By His stripes we are healed.” | James 5:14–15 — “The prayer of faith will save the sick, and the Lord will raise him up.”
              </p>
              <p className="text-soft leading-relaxed mb-4">
                God’s healing touch reaches far beyond the physical body. We have seen broken hearts restored, hope rekindled, relationships mended, and people set free from fear, shame, and bitterness as the Holy Spirit moves in power.
              </p>
              <p className="text-soft leading-relaxed mb-4">
                Marriages and families are also being healed. Husbands, wives, and children learn to forgive, communicate with grace, and rebuild trust. The love of Christ restores what the enemy has tried to destroy.
              </p>
              <p className="text-soft leading-relaxed mb-6">
                All of this is grounded in prayer and faith. In obedience to God’s Word, we anoint with oil, lay hands on the sick, and boldly pray in the name of Jesus. Every testimony is shared to give glory to God and to stir faith for what He will do next.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-ink my-6">
                “By His stripes we are healed… And the prayer of faith will save the sick, and the Lord will raise him up.” — Isaiah 53:5; James 5:14–15
              </blockquote>

              <div className="mt-8 border-t border-line pt-8">
                <h3 className="font-display text-xl font-semibold text-ink mb-4">
                  How Healing Prayer Works at CVM
                </h3>
                <div className="space-y-4 text-soft text-sm leading-relaxed">
                  <p>
                    In our services, dedicated moments are set aside for healing ministry. Prayer lines are opened, and ministry teams, together with Bishop Mbendera, lay hands on people with compassion and boldness.
                  </p>
                  <p>
                    Anointing oil is used in obedience to Scripture as a prophetic sign of the Holy Spirit’s presence. As we pray, yokes are broken, burdens are lifted, and many experience the tangible touch of God.
                  </p>
                  <p>
                    Healing is celebrated within a believing community. Every testimony strengthens others, hope rises, and the atmosphere is charged with expectation for what God will do next.
                  </p>
                </div>
              </div>

              {/* Submit a Prayer Request */}
              <div className="mt-8 bg-cream border border-line rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Submit a Prayer Request
                </h3>
                <p className="text-soft text-sm leading-relaxed mb-3">
                  If you are believing God for healing in your body, mind, or relationships, we would be honored to stand with you in prayer. Our team will lift your request before the Lord and trust Him to move.
                </p>
                <p className="text-soft text-sm leading-relaxed mb-6">
                  Share your need with us, and we will agree with you in faith for breakthrough, restoration, and the peace of God to fill your heart.
                </p>
                <form className="space-y-4" action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Name (required)"
                      required
                      className="w-full bg-paper border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                    />
                    <input
                      type="email"
                      placeholder="Email (required)"
                      required
                      className="w-full bg-paper border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                    />
                  </div>
                  <textarea
                    placeholder="Share your prayer request..."
                    rows={3}
                    required
                    className="w-full bg-paper border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                  <button type="submit" className="btn-solid text-sm py-2.5 px-6">
                    Send a Prayer Request
                  </button>
                </form>
              </div>
            </div>
          </Reveal>

          {/* Section 3: Raising Kingdom Leaders */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-ink mb-2">
                Raising Kingdom Leaders
              </h2>
              <p className="text-gold font-semibold text-sm mb-4">
                Scripture Anchor: 2 Timothy 2:2 — “And the things that you have heard from me among many witnesses, commit these to faithful men who will be able to teach others also.”
              </p>
              <p className="text-soft leading-relaxed mb-4">
                God has given Cross Victory Ministries a clear mandate to raise leaders who carry both the character and power of Christ. Leadership is defined not by titles, but by serving with humility, courage, and spiritual authority.
              </p>
              <p className="text-soft leading-relaxed mb-4">
                Our apostolic model is relational and reproducible. Bishop Mbendera pours into pastors, elders, and emerging leaders through teaching, mentoring, and personal example, helping them grow in wisdom, grace, and effectiveness.
              </p>
              <p className="text-soft leading-relaxed mb-4">
                Through leadership schools and focused training, men and women are equipped in sound doctrine, ministry skills, and practical leadership. They learn preaching, pastoral care, discipleship, evangelism, and church administration with a heart to serve.
              </p>
              <p className="text-soft leading-relaxed mb-4">
                Character comes first. We emphasize holiness, financial integrity, marital faithfulness, and servant-hearted love. Leaders are called to live what they preach so that their lives bear lasting fruit.
              </p>
              <p className="text-soft leading-relaxed mb-6">
                Our vision is global. We believe God is raising leaders from Blantyre who will carry the message of the cross to towns, villages, cities, and nations, bringing the life of Jesus into every sphere of society.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-ink my-6">
                “Commit these to faithful men who will be able to teach others also.” — 2 Timothy 2:2
              </blockquote>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-cream border border-line rounded-lg p-5">
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    Character &amp; Integrity
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    Leaders are formed from the inside out. We emphasize purity, honesty, accountability, and a life of repentance and humility before God. Leadership without character is dangerous; leadership with integrity brings lasting fruit.
                  </p>
                </div>
                <div className="bg-cream border border-line rounded-lg p-5">
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    Apostolic Training
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    Through structured teaching and hands-on ministry, leaders are equipped to preach, teach, shepherd, and plant churches. The apostolic grace on Bishop Mbendera inspires leaders to think beyond their comfort zones and to embrace God’s bigger vision.
                  </p>
                </div>
                <div className="bg-cream border border-line rounded-lg p-5">
                  <h3 className="font-display font-semibold text-base text-ink mb-2">
                    Sent to the Nations
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    Our vision is bigger than one city. Leaders raised at Cross Victory are commissioned to go wherever God sends them, carrying the message of the cross, the ministry of healing, and the lifestyle of faith into every sphere of society and to the ends of the earth.
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center bg-cream border border-line rounded-xl p-6">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">
                  Ready to Grow?
                </h3>
                <p className="text-soft text-sm max-w-2xl mx-auto mb-4">
                  Whether you are longing to go deeper in your faith, believing God for healing, or sensing a call to leadership, there is a place for you at Cross Victory Ministries. Join us in Blantyre or connect with us online as we follow Jesus together, experience His power, and answer His call to impact Malawi and the nations.
                </p>
                <Link href="/contact" className="btn-solid text-sm">
                  Get in Touch
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Subscriptions & Testimony Form ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* YouTube & Streaming Subscribe */}
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 h-full flex flex-col justify-between shadow-soft">
                <div>
                  <p className="eyebrow">Listen to Our Sermons</p>
                  <h2 className="font-display text-3xl font-semibold text-ink mb-4">
                    Never Miss a Message
                  </h2>
                  <p className="text-soft leading-relaxed mb-6">
                    Subscribe to Cross Victory Ministries on YouTube and follow along on your favorite streaming platforms so you can watch, listen, and share Bishop Mbendera’s sermons wherever you are.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-solid w-full text-center block"
                  >
                    Subscribe on YouTube
                  </a>
                  <a
                    href="#"
                    className="btn-ghost w-full text-center block"
                  >
                    Listen on Spotify
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Share Your Testimony */}
            <Reveal delay={1}>
              <div className="bg-paper border border-line rounded-card p-8 shadow-soft">
                <p className="eyebrow">Share Your Story</p>
                <h2 className="font-display text-3xl font-semibold text-ink mb-3">
                  Has God Moved in Your Life?
                </h2>
                <p className="text-soft text-sm leading-relaxed mb-6">
                  After hearing a sermon from Bishop Mbendera, has God brought healing, breakthrough, or transformation? We would love to hear your story and celebrate what the Lord has done.
                </p>

                <form className="space-y-4" action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain">
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
                      Testimony (required)
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                    />
                  </div>
                  <p className="text-[11px] text-soft italic">
                    By submitting your information, you’re giving us permission to email you. You may unsubscribe at any time.
                  </p>
                  <button type="submit" className="btn-solid w-full text-center">
                    Share Your Testimony
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
