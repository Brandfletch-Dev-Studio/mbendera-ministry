import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "GOD's Creation & The Universe | Bishop George Mbendera",
  description:
    "Explore the wonder of God's creation, solar system, galaxies, and biblical scriptures on creation and final judgement.",
};

const solarSystemPlanets = [
  {
    name: "Mercury: The Swift Planet",
    desc: "Closest to the Sun, a reminder of God’s precision in placing each world exactly where it belongs.",
  },
  {
    name: "Venus: The Brilliant Morning Star",
    desc: "Shrouded in golden clouds, reflecting the mystery and beauty of God’s creative power.",
  },
  {
    name: "Mars: The Red Planet",
    desc: "Its rust-red deserts and towering volcanoes speak of a Creator who delights in variety and scale.",
  },
  {
    name: "Jupiter: The Great Gas Giant",
    desc: "So massive it could hold 1,300 Earths, a testament to the boundless imagination of God.",
  },
  {
    name: "Saturn: The Ringed Wonder",
    desc: "Its glorious rings declare the artistry of a God who creates not just for function, but for beauty.",
  },
  {
    name: "Uranus: The Tilted Ice Giant",
    desc: "Rolling through space on its side, a world unlike any other in God’s vast solar family.",
  },
  {
    name: "Neptune: The Deep Blue World",
    desc: "At the far edge of our solar system, still held perfectly in place by the hand of God.",
  },
];

const creationFacts = [
  {
    title: "Countless Stars",
    desc: "There may be more stars in the observable universe than grains of sand on all Earth’s beaches combined. Each one is known to God and sustained by His power.",
  },
  {
    title: "Ancient Light",
    desc: "Some of the starlight we see began its journey millions or even billions of years ago. Every photon is a traveler across time and space, reminding us of God’s patience and eternal nature.",
  },
  {
    title: "Immense Age",
    desc: "Many scientists estimate the universe to be around 13.8 billion years old. However we understand the details, Christians affirm that God stands outside of time and lovingly oversees the whole story.",
  },
  {
    title: "Vast Distances",
    desc: "The observable universe is about 93 billion light-years across. Such scales stretch our imagination, yet Scripture assures us that not even a sparrow falls outside the Father’s care.",
  },
  {
    title: "Earth’s Uniqueness",
    desc: "So far, Earth is the only known world to host complex life and human beings. Whether God has created life elsewhere or not, we know He has given special attention to our planet and to the salvation story unfolding here.",
  },
];

export default function GodsCreationPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Biblical Cosmology &amp; The Creator</p>
          <h1>GOD’s Creation &amp; The Universe</h1>
          <p>
            “In the beginning God created the heavens and the earth.” (Genesis
            1:1) From the first verse of Scripture, the Bible invites us to
            look up in awe and recognize the universe as the handiwork of a
            loving, all-powerful Creator.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {/* Key Scripture Hero Quote */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 text-center max-w-4xl mx-auto shadow-soft">
              <span className="eyebrow">Scripture Anchor</span>
              <blockquote className="font-display font-semibold text-2xl md:text-3xl text-ink leading-relaxed my-4">
                “The heavens declare the glory of God; the skies proclaim the
                work of his hands.”
              </blockquote>
              <p className="text-gold font-semibold text-base uppercase tracking-widest">
                — Psalm 19:1
              </p>
            </div>
          </Reveal>

          {/* Section: Start the Journey & Core Statements */}
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <h2 className="font-display font-semibold text-3xl text-ink">
                  Start the Journey.
                </h2>
                <div className="prose-page">
                  <p>
                    The night sky hints at the depth and grandeur of God’s
                    universe. Earth from space is a unique home crafted by God
                    within His vast universe.
                  </p>

                  <div className="bg-cream p-6 rounded-xl border border-line space-y-4 my-6">
                    <h3 className="text-lg font-display font-semibold text-ink">
                      Psalm 24:1-2 NKJV
                    </h3>
                    <p className="italic text-soft">
                      [1] A Psalm of David. The earth is the LORD’s, and all its
                      fullness, The world and those who dwell therein. [2] For He
                      has founded it upon the seas, And established it upon the
                      waters.
                    </p>

                    <h3 className="text-lg font-display font-semibold text-ink pt-2">
                      Job 38:4-6 NKJV
                    </h3>
                    <p className="italic text-soft">
                      [4] “Where were you when I laid the foundations of the
                      earth? Tell Me, if you have understanding. [5] Who
                      determined its measurements? Surely you know! Or who
                      stretched the line upon it? [6] To what were its
                      foundations fastened? Or who laid its cornerstone...
                    </p>
                  </div>

                  <p className="font-semibold text-ink">
                    From GOD’s above statement to Job, it shows that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-soft">
                    <li>The measurements of the Earth were determined.</li>
                    <li>A line was stretched upon it.</li>
                    <li>
                      There is a place where the foundations of the Earth were
                      fastened.
                    </li>
                    <li>The Earth has a cornerstone which was laid.</li>
                  </ul>

                  <div className="bg-cream p-6 rounded-xl border border-line my-6">
                    <h3 className="text-lg font-display font-semibold text-ink mb-2">
                      GOD CREATED THE EARTH AND THE HEAVENS.
                    </h3>
                    <p className="italic text-soft mb-2">
                      <strong>Isaiah 48:13 NKJV —</strong> [13] Indeed My hand
                      has laid the foundation of the earth, And My right hand
                      has stretched out the heavens; When I call to them, They
                      stand up together.
                    </p>
                    <p className="text-xs text-gold uppercase tracking-wider font-semibold">
                      A CLEAR AND GREAT STATEMENT FROM GOD TO JOB AND THROUGH
                      PROPHET ISAIAH THAT HE REALLY CREATED THE EARTH AND THE
                      HEAVENS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Image Showcase */}
          <Reveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-paper border border-line rounded-card p-6 grid md:grid-cols-2 gap-6 items-center">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/1000216997.jpg"
                    alt="God's Creation - Creation and Universe"
                    loading="lazy"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
                <div className="space-y-3">
                  <span className="eyebrow">Visual Testimony</span>
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Earth as Seen from Space
                  </h3>
                  <p className="text-soft text-sm leading-relaxed">
                    Earth as a glowing crescent — a unique home crafted by God
                    within His vast universe, hanging perfectly upon nothing according
                    to His divine decree.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Planets Grid */}
          <Reveal>
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="eyebrow">The Solar System</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  Planets of Our Solar System — God’s Handiwork
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solarSystemPlanets.map((planet, idx) => (
                  <div
                    key={idx}
                    className="bg-paper border border-line rounded-card p-7 card-lift space-y-3"
                  >
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block">
                      Planet {idx + 1}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {planet.name}
                    </h3>
                    <p className="text-soft text-sm leading-relaxed">
                      {planet.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Universe: God's Grand Canvas */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
              <span className="eyebrow">Cosmic Scale</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                The Universe: God’s Grand Canvas
              </h2>
              <div className="prose-page">
                <p>
                  The universe stretches farther than our minds can fully grasp.
                  Astronomers estimate there are hundreds of billions of
                  galaxies, each with hundreds of billions of stars. Nebulae glow
                  like heavenly paintings, planets orbit in graceful paths, and
                  cosmic structures span unimaginable distances. For followers of
                  Christ, this vastness is not random; it is a grand canvas that
                  points to the wisdom, power, and beauty of God.
                </p>
                <p>
                  As we learn more about dark matter, dark energy, black holes, and
                  distant quasars, we can respond not with fear but with wonder.
                  The more we discover, the more reasons we have to worship the One
                  who spoke all things into existence and sustains them by His
                  powerful word.
                </p>

                <blockquote className="my-6">
                  <p className="not-italic">
                    “Lift up your eyes on high and see: who created these? He who
                    brings out their host by number, calling them all by name.”
                  </p>
                  <cite className="block text-gold font-semibold text-sm mt-2 not-italic">
                    — Isaiah 40:26
                  </cite>
                </blockquote>
              </div>
            </div>
          </Reveal>

          {/* Galaxies & Star Numbers */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
              <span className="eyebrow">Islands of Stars</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                Galaxies: Islands of Stars in God’s Sea of Space
              </h2>
              <div className="prose-page">
                <p>
                  Our home galaxy, the Milky Way, is a vast spiral system that
                  may contain 100–400 billion stars. Its graceful arms swirl
                  around a luminous center, creating a majestic “island of
                  stars” in the cosmic ocean. Yet the Milky Way is only one among
                  countless galaxies: elegant spirals, glowing ellipticals, and
                  irregular galaxies shaped by gravity and time.
                </p>

                <div className="bg-cream p-6 rounded-xl border border-line space-y-3 my-6">
                  <h3 className="font-display font-semibold text-lg text-ink">
                    Scripture Anchors on the Stars:
                  </h3>
                  <p className="text-soft text-sm">
                    <strong>Psalm 147:4–5 NKJV —</strong> [4] He counts the
                    number of the stars; He calls them all by name. [5] Great is
                    our Lord, and mighty in power; His understanding is
                    infinite.
                  </p>
                  <p className="text-soft text-sm">
                    <strong>Luke 12:7 NKJV —</strong> [7] “But the very hairs
                    of your head are all numbered. Do not fear therefore; you are
                    of more value than many sparrows.”
                  </p>
                  <p className="text-soft text-sm pt-2 border-t border-line">
                    It is estimated that the observable universe contains roughly{" "}
                    <strong>10²² to 10²⁴ stars</strong>—about one septillion (a
                    1 followed by 24 zeros). Yet God knows every single star by
                    name and also numbers every hair on your head.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Distance Facts Section */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
              <span className="eyebrow">Astronomical Scale</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                Distance Facts: The Sun and Other Stars
              </h2>
              <div className="prose-page">
                <div className="grid sm:grid-cols-2 gap-4 my-4">
                  <div className="p-5 rounded-xl bg-cream border border-line space-y-1">
                    <span className="text-xs uppercase font-semibold text-gold">
                      The Sun
                    </span>
                    <h4 className="font-display font-semibold text-ink text-base">
                      149.6 Million Kilometers
                    </h4>
                    <p className="text-soft text-xs">
                      Average distance from Earth (93 million miles). Light takes
                      8 minutes and 20 seconds to reach us.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-cream border border-line space-y-1">
                    <span className="text-xs uppercase font-semibold text-gold">
                      Proxima Centauri
                    </span>
                    <h4 className="font-display font-semibold text-ink text-base">
                      4.24 Light-Years
                    </h4>
                    <p className="text-soft text-xs">
                      Roughly 25 trillion miles / 40 trillion km away. Travelling
                      there with current technology would take tens of thousands
                      of years.
                    </p>
                  </div>
                </div>

                <div className="bg-cream p-6 rounded-xl border border-line my-4">
                  <p className="text-soft text-sm italic">
                    “Am I a God near at hand,” says the LORD, “And not a God
                    afar off? Can anyone hide himself in secret places, So I
                    shall not see him?” says the LORD; “Do I not fill heaven and
                    earth?” says the LORD.
                    <span className="block font-semibold text-ink mt-1 not-italic">
                      — Jeremiah 23:23–24 NKJV
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Facts Grid */}
          <Reveal>
            <div className="space-y-8">
              <div className="text-center max-w-3xl mx-auto">
                <span className="eyebrow">Cosmic Wonders</span>
                <h2 className="font-display font-semibold text-3xl text-ink">
                  Interesting Facts About the Universe
                </h2>
                <p className="text-soft text-sm mt-2">
                  Faith-framed facts that deepen our sense of awe before the Creator.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creationFacts.map((fact, idx) => (
                  <div
                    key={idx}
                    className="bg-paper border border-line rounded-card p-7 card-lift space-y-3"
                  >
                    <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block">
                      Fact {idx + 1}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {fact.title}
                    </h3>
                    <p className="text-soft text-sm leading-relaxed">
                      {fact.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Job 38 Passage */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
              <span className="eyebrow">The Divine Whirlwind</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                THE CONVERSATION BETWEEN GOD AND JOB ABOUT HIS CREATION
              </h2>
              <div className="prose-page font-serif text-sm leading-relaxed bg-cream p-6 rounded-xl border border-line space-y-3 max-h-96 overflow-y-auto">
                <p>
                  <strong>Job 38:1-41 NKJV —</strong> [1] Then the LORD answered
                  Job out of the whirlwind, and said: [2] “Who is this who darkens
                  counsel By words without knowledge? [3] Now prepare yourself like
                  a man; I will question you, and you shall answer Me.
                </p>
                <p>
                  [4] “Where were you when I laid the foundations of the earth? Tell
                  Me, if you have understanding. [5] Who determined its
                  measurements? Surely you know! Or who stretched the line upon it?
                  [6] To what were its foundations fastened? Or who laid its
                  cornerstone, [7] When the morning stars sang together, And all the
                  sons of God shouted for joy?
                </p>
                <p>
                  [8] “Or who shut in the sea with doors, When it burst forth and
                  issued from the womb; [9] When I made the clouds its garment, And
                  thick darkness its swaddling band; [10] When I fixed My limit
                  for it, And set bars and doors; [11] When I said, ‘This far you
                  may come, but no farther, And here your proud waves must
                  stop!’
                </p>
                <p>
                  [12] “Have you commanded the morning since your days began, And
                  caused the dawn to know its place, [13] That it might take hold of
                  the ends of the earth, And the wicked be shaken out of it?
                </p>
                <p className="text-xs text-soft pt-2 border-t border-line">
                  The speech of GOD Himself and His description of them shows that
                  He indeed made all things including man.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Scriptures on Creation & Judgement */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
              <span className="eyebrow">Sovereignty &amp; Truth</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                GOD CREATED ALL THINGS AND ALL AWAIT HIS JUDGEMENT.
              </h2>
              <div className="prose-page space-y-4">
                <p>
                  The Bible explicitly states from its very first verse to its
                  final chapters that God is the ultimate Creator of the universe
                  and everything in it.
                </p>

                <div className="space-y-3 bg-cream p-6 rounded-xl border border-line text-sm">
                  <p>
                    <strong>Genesis 1:1 —</strong> “In the beginning, God created
                    the heavens and the earth.”
                  </p>
                  <p>
                    <strong>Psalm 33:6 —</strong> “By the word of the Lord the
                    heavens were made, and by the breath of his mouth all their
                    host.”
                  </p>
                  <p>
                    <strong>John 1:1–3 NKJV —</strong> [1] In the beginning was
                    the Word, and the Word was with God, and the Word was God. [2]
                    He was in the beginning with God. [3] All things were made
                    through Him, and without Him nothing was made that was made.
                  </p>
                  <p>
                    <strong>Colossians 1:16 —</strong> “For by him all things were
                    created, in heaven and on earth, visible and invisible… all
                    things were created through him and for him.”
                  </p>
                  <p>
                    <strong>Hebrews 11:3 —</strong> “By faith we understand that
                    the universe was created by the word of God, so that what is
                    seen was not made out of things that are visible.”
                  </p>
                  <p>
                    <strong>Revelation 4:11 —</strong> “Worthy are you, our Lord
                    and God… for you created all things, and by your will they
                    existed and were created.”
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Jesus Is Coming Back & Final Judgement */}
          <Reveal>
            <div className="max-w-4xl mx-auto bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
              <span className="eyebrow font-bold text-crimson">
                Prophetic Warning &amp; Hope
              </span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                JESUS IS COMING BACK &amp; FINAL JUDGEMENT
              </h2>
              <div className="prose-page space-y-4">
                <div className="bg-cream p-6 rounded-xl border border-line space-y-3 text-sm">
                  <p>
                    <strong>Revelation 1:7 NKJV —</strong> [7] Behold, He is
                    coming with clouds, and every eye will see Him, even they who
                    pierced Him. And all the tribes of the earth will mourn
                    because of Him. Even so, Amen.
                  </p>
                  <p>
                    <strong>Revelation 20:11-12 NKJV —</strong> [11] Then I saw a
                    great white throne and Him who sat on it, from whose face the
                    earth and the heaven fled away. And there was found no place
                    for them. [12] And I saw the dead, small and great, standing
                    before God, and books were opened. And another book was opened,
                    which is the Book of Life. And the dead were judged according
                    to their works, by the things which were written in the books.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-crimdeep text-white text-center space-y-2 my-6">
                  <p className="font-display font-semibold text-xl">
                    May GOD bless you and may you not miss Heaven!!!
                  </p>
                  <p className="font-display text-gold font-bold text-lg">
                    Amen!!!
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigation Footer Link */}
      <section className="section section-alt text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Explore More Teachings &amp; Studies
            </h2>
            <p className="text-soft text-base max-w-2xl mx-auto mb-8">
              Deepen your understanding of God's Word with our weekly Bible
              studies and ministry resources in Blantyre, Malawi.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/bible-study" className="btn-solid">
                Join Bible Study
              </Link>
              <Link href="/faith-healing" className="btn-ghost">
                Faith &amp; Healing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
