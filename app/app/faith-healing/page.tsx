import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Faith, Healing & Leadership | Bishop George Mbendera",
  description:
    "Three pillars that shape Cross Victory Ministries in Blantyre, Malawi: Walking in Faith, Healing Is For Today, and Raising Kingdom Leaders.",
};

export default function FaithHealingPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Three Pillars of Ministry</p>
          <h1>Faith, Healing &amp; Leadership.</h1>
          <p>
            Three pillars that shape everything we do at Cross Victory
            Ministries in Blantyre, Malawi.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {/* Apostolic Overview Banner */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 space-y-6 shadow-soft">
              <span className="eyebrow">Ministry Vision</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                One Living Stream of God’s Grace
              </h2>
              <div className="prose-page leading-relaxed">
                <p>
                  Under the apostolic leadership of Bishop George Enock Mbendera,
                  Cross Victory Ministries carries a vision where faith, healing, and
                  leadership are not separate programs but one living stream of
                  God’s grace. Faith roots us in God’s Word, healing reveals the
                  compassion of Jesus in every area of life, and leadership raises
                  men and women who carry the presence and power of the Holy
                  Spirit to Malawi and beyond. On this page, you will discover
                  how these three pillars work together to transform lives,
                  families, churches, and communities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Pillar 1: Walking in Faith */}
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <span className="eyebrow">Pillar One</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  Walking in Faith.
                </h2>

                <div className="bg-cream p-6 rounded-xl border border-line">
                  <p className="text-xs uppercase font-semibold text-gold tracking-wider mb-1">
                    Scripture Anchor
                  </p>
                  <p className="font-display font-semibold text-lg text-ink italic">
                    Hebrews 11:1 — “Now faith is the substance of things hoped
                    for, the evidence of things not seen.”
                  </p>
                </div>

                <div className="prose-page space-y-4">
                  <p>
                    At Cross Victory Ministries, faith is not a theory but a way
                    of life. We believe that true biblical faith is rooted in who
                    God is and what He has spoken in His Word. Faith does not deny
                    reality, but it brings God’s higher reality into every
                    situation. In our worship services, teaching gatherings, and
                    daily walk, we call believers to trust fully in the finished
                    work of Christ and the faithfulness of our heavenly Father.
                  </p>
                  <p>
                    Faith is the foundation of every miracle we witness at Cross
                    Victory. Before there is a breakthrough in the natural,
                    there is a conviction in the Spirit that God is who He says He
                    is and will do what He has said. Bishop George Enock Mbendera
                    teaches that faith is not wishful thinking but confident
                    trust in God’s character, promises, and power. When we stand
                    on the Word, the impossible becomes possible because God
                    Himself is at work.
                  </p>
                  <p>
                    This kind of faith overcomes fear, doubt, and the voices that
                    say it cannot be done. In a world filled with uncertainty, God
                    is raising believers who refuse to be moved by circumstances
                    and instead are anchored in His unshakable kingdom. At Cross
                    Victory, we confront fear with the truth of Scripture and the
                    testimony of Jesus, building a culture where believers
                    expect God to move in power every time we come together.
                  </p>
                  <p>
                    Faith is expressed not only in our words, but in our
                    obedience and actions. When God speaks, we respond. Whether it
                    is forgiving a person who has hurt us, stepping out to serve,
                    giving sacrificially, or praying for the sick, faith moves
                    our feet. Bishop Mbendera emphasizes that obedience is the
                    visible proof of an invisible trust. As we act on God’s Word,
                    we make room for His power to manifest in and through our
                    lives.
                  </p>
                  <p>
                    Believers at Cross Victory are equipped to grow in faith
                    through sound teaching, living testimonies, and strong
                    community. Week after week, the Word is preached with clarity
                    and authority, testimonies are shared of what God has done, and
                    people are encouraged to walk together in small groups, prayer
                    meetings, and discipleship relationships. In this
                    environment of faith, hearts are strengthened, minds are
                    renewed, and lives are transformed.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-cream border border-line rounded-xl p-5 space-y-2">
                    <h4 className="font-display font-semibold text-ink text-sm">
                      Faith in God’s Word
                    </h4>
                    <p className="text-soft text-xs">
                      We teach believers to build their lives on Scripture, not on
                      feelings or opinions.
                    </p>
                  </div>
                  <div className="bg-cream border border-line rounded-xl p-5 space-y-2">
                    <h4 className="font-display font-semibold text-ink text-sm">
                      Faith Through Prayer
                    </h4>
                    <p className="text-soft text-xs">
                      Prayer is where faith breathes. We bring every need before
                      God with confidence.
                    </p>
                  </div>
                  <div className="bg-cream border border-line rounded-xl p-5 space-y-2">
                    <h4 className="font-display font-semibold text-ink text-sm">
                      Faith in Community
                    </h4>
                    <p className="text-soft text-xs">
                      Faith grows stronger in fellowship. We stand together as a
                      family of faith.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pillar 2: Healing Is For Today */}
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <span className="eyebrow">Pillar Two</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  Healing Is For Today.
                </h2>

                <div className="bg-cream p-6 rounded-xl border border-line space-y-2">
                  <p className="text-xs uppercase font-semibold text-gold tracking-wider">
                    Scripture Anchors
                  </p>
                  <p className="font-display font-semibold text-base text-ink italic">
                    Isaiah 53:5 — “By His stripes we are healed.”
                  </p>
                  <p className="font-display font-semibold text-base text-ink italic">
                    James 5:14–15 — “The prayer of faith will save the sick, and
                    the Lord will raise him up.”
                  </p>
                </div>

                <div className="prose-page space-y-4">
                  <p>
                    We believe that Jesus Christ is the same yesterday, today, and
                    forever, and that His healing power is still at work in the
                    Church. At Cross Victory Ministries, healing is not a side
                    ministry but part of the gospel itself. When Jesus saves, He
                    also heals and restores. We proclaim a full salvation that
                    touches spirit, soul, and body, bringing people into
                    wholeness through the cross.
                  </p>
                  <p>
                    Physical healing is a regular testimony among us. In
                    services, conferences, and healing meetings, we pray for the
                    sick in the name of Jesus and lay hands on those who desire
                    prayer. We have seen headaches vanish, chronic pain leave,
                    mobility restored, and medical reports changed. These signs do
                    not point to a man, but to Jesus, our Healer, and they stir
                    hunger for more of His presence.
                  </p>
                  <p>
                    Yet God’s healing touch goes far beyond the body. He heals
                    broken hearts, restores hope, and mends relationships. Many who
                    come to Cross Victory are carrying wounds of rejection, trauma,
                    and disappointment. Through anointed worship, compassionate
                    counseling, and the ministry of the Holy Spirit, people
                    encounter the love of the Father and find freedom from fear,
                    shame, and bitterness.
                  </p>
                  <p>
                    Families and marriages are also being healed. As God’s Word
                    is taught, husbands, wives, and children learn to forgive, to
                    serve one another, and to build homes where Christ is honored.
                    Many testify of restored communication, renewed affection, and
                    new beginnings after seasons of conflict or separation. The
                    same cross that reconciles us to God also reconciles us to one
                    another.
                  </p>
                  <p>
                    The ministry of healing at Cross Victory is always grounded in
                    prayer and faith. We do not claim to heal anyone; we simply
                    obey God’s Word, anoint with oil in the name of the Lord, and
                    believe that He is faithful to perform what He has promised.
                    Testimonies are carefully shared to give glory to God,
                    strengthen the faith of others, and invite more people to
                    receive their own miracle.
                  </p>
                </div>

                <div className="bg-cream p-6 rounded-xl border border-line space-y-3 my-6">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    How Healing Prayer Works at CVM
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    In our services, dedicated moments are set aside for healing
                    ministry. Prayer lines are opened, and trained ministry
                    teams, together with Bishop Mbendera and pastoral leaders, lay
                    hands on those in need, ministering with compassion and
                    boldness.
                  </p>
                  <p className="text-soft text-sm leading-relaxed">
                    In obedience to Scripture, we also use anointing oil as a
                    prophetic sign of the Holy Spirit’s presence. As we anoint and
                    pray in the name of Jesus, we believe that yokes are broken and
                    burdens are lifted by the power of God.
                  </p>
                  <p className="text-soft text-sm leading-relaxed">
                    Healing is never a private event; it is celebrated within a
                    believing community. As we worship together, agree in faith, and
                    stand with those who are suffering, hope rises and the
                    atmosphere is charged with expectation for God to move.
                  </p>
                </div>

                {/* Submit Prayer Request Form */}
                <div className="bg-cream border border-line rounded-card p-6 md:p-8 space-y-4">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Submit a Prayer Request
                  </h3>
                  <p className="text-soft text-sm">
                    If you are believing God for healing in your body, your mind, or
                    your family, we would be honored to stand with you in prayer.
                    Share your request, and our team will lift you before the Lord.
                  </p>

                  <form
                    action="mailto:hello@georgeenockmbendera.site"
                    method="post"
                    encType="text/plain"
                    className="space-y-4"
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                        className="px-4 py-3 rounded-xl border border-line bg-paper text-ink text-sm focus:outline-none focus:border-gold"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        required
                        className="px-4 py-3 rounded-xl border border-line bg-paper text-ink text-sm focus:outline-none focus:border-gold"
                      />
                    </div>
                    <textarea
                      name="prayer_request"
                      rows={4}
                      placeholder="Write your prayer request or healing need..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-line bg-paper text-ink text-sm focus:outline-none focus:border-gold"
                    ></textarea>
                    <button type="submit" className="btn-solid text-sm py-3 px-6">
                      Send Prayer Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pillar 3: Raising Kingdom Leaders */}
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <span className="eyebrow">Pillar Three</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  Raising Kingdom Leaders.
                </h2>

                <div className="bg-cream p-6 rounded-xl border border-line">
                  <p className="text-xs uppercase font-semibold text-gold tracking-wider mb-1">
                    Scripture Anchor
                  </p>
                  <p className="font-display font-semibold text-lg text-ink italic">
                    2 Timothy 2:2 — “And the things that you have heard from me
                    among many witnesses, commit these to faithful men who will be
                    able to teach others also.”
                  </p>
                </div>

                <div className="prose-page space-y-4">
                  <p>
                    Cross Victory Ministries carries a strong mandate to raise
                    leaders who carry both the character and the power of Christ.
                    Under the apostolic covering of Bishop George Enock Mbendera,
                    men and women are being equipped to serve the Body of Christ and
                    to impact society in Malawi and the nations. Leadership here is
                    not about titles; it is about serving God’s people with
                    humility, courage, and spiritual authority.
                  </p>
                  <p>
                    The apostolic model at Cross Victory is relational and
                    reproducible. Bishop Mbendera pours into pastors, elders, and
                    emerging leaders through teaching, mentoring, and personal
                    example. As he travels, plants churches, and strengthens
                    existing works, he imparts a vision for healthy, Spirit-filled
                    congregations that are rooted in the Word and active in
                    mission.
                  </p>
                  <p>
                    Through the Cross Victory leadership school and equipping
                    ministry, believers are trained in doctrine, ministry skills,
                    and practical leadership. Courses cover topics such as preaching
                    and teaching, pastoral care, discipleship, evangelism, and
                    church administration. Students are encouraged to grow in their
                    spiritual gifts while also developing the discipline,
                    integrity, and resilience needed for long-term ministry.
                  </p>
                  <p>
                    Character-first leadership is a non-negotiable value at Cross
                    Victory. We believe that the fruit of the Spirit must
                    accompany the gifts of the Spirit. Leaders are called to live
                    lives of holiness, financial integrity, marital faithfulness,
                    and servant-hearted love. In every area, the Holy Spirit is
                    invited to shape Christlike character so that ministry is
                    built on a solid foundation.
                  </p>
                  <p>
                    From Blantyre, the Lord is raising a new generation of leaders
                    who will carry the message of the cross to towns, villages,
                    cities, and nations. Some will plant churches, others will
                    strengthen existing congregations, and others will serve in the
                    marketplace as witnesses of Christ. All are sent to make
                    disciples and to advance the kingdom of God wherever He leads.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="bg-cream border border-line rounded-xl p-5 space-y-2">
                    <h4 className="font-display font-semibold text-ink text-sm">
                      Character &amp; Integrity
                    </h4>
                    <p className="text-soft text-xs">
                      Leaders are formed from the inside out with purity, honesty,
                      and humility.
                    </p>
                  </div>
                  <div className="bg-cream border border-line rounded-xl p-5 space-y-2">
                    <h4 className="font-display font-semibold text-ink text-sm">
                      Apostolic Training
                    </h4>
                    <p className="text-soft text-xs">
                      Structured teaching equips leaders to preach, shepherd, and
                      plant churches.
                    </p>
                  </div>
                  <div className="bg-cream border border-line rounded-xl p-5 space-y-2">
                    <h4 className="font-display font-semibold text-ink text-sm">
                      Sent to the Nations
                    </h4>
                    <p className="text-soft text-xs">
                      Commissioned to carry the message of the cross to towns and
                      nations.
                    </p>
                  </div>
                </div>
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
              Ready to Grow?
            </h2>
            <p className="text-soft text-base max-w-2xl mx-auto mb-8">
              Whether you are longing to go deeper in your faith, believing God for
              healing, or sensing a call to leadership, there is a place for you
              at Cross Victory Ministries.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-solid">
                Get in Touch
              </Link>
              <Link href="/sermons" className="btn-ghost">
                Listen to Our Sermons
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
