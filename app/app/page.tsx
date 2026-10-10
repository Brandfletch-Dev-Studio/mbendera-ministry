import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
          <Reveal>
            <p className="eyebrow">Cross Victory Ministries · Blantyre, Malawi</p>
            <h1 className="font-display font-semibold text-[clamp(38px,5.4vw,62px)] leading-[1.06] tracking-[-0.01em]">
              Music and Word
              <br />
              <span className="text-crimson italic">Transforming Lives</span> in
              Christ
            </h1>
            <p className="text-soft text-[17px] max-w-[52ch] mt-5">
              Enter His Courts With Praise. Led by Bishop George Enock
              Mbendera, Cross Victory Ministries proclaims a Christ-centered
              gospel through preaching, worship music, and discipleship that
              reaches nations from the heart of Malawi.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-8">
              <Link href="/sermons" className="btn-solid">Watch Latest Sermon</Link>
              <Link href="/about" className="btn-ghost">Learn More</Link>
            </div>
          </Reveal>
          <Reveal delay={1} className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bishop-hero.png"
              alt="Bishop George Enock Mbendera"
              className="rounded-card shadow-soft w-full aspect-[4/3.4] object-cover"
            />
            <div className="absolute -left-4 bottom-6 bg-paper border border-line rounded-xl px-4.5 py-2.5 shadow-soft font-display italic text-[15px]">
              “Enter His Courts With Praise”
            </div>
          </Reveal>
        </div>
        <div className="h-24 bg-gradient-to-b from-transparent to-cream" />
      </section>

      {/* ---------- About ---------- */}
      <section className="section" id="about">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.05fr_.95fr] gap-16 items-center">
          <Reveal>
            <p className="eyebrow">About George Enock Mbendera (Music &amp; Ministry).</p>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12]">
              A shepherd’s heart, a servant’s calling
            </h2>
            <p className="text-soft mt-4">
              From Blantyre, Malawi, Bishop George Enock Mbendera has devoted
              his life to preaching the gospel and raising worshippers.
              Through sermons, songs, books, and digital discipleship, his
              ministry reaches nations and equips believers and leaders in
              every season.
            </p>
            <p className="text-soft mt-4">
              Discover a Christ-centered ministry where preaching, worship
              music, and media resources serve your growth.
            </p>
            <Link href="/about" className="btn-solid mt-8">Read Full Biography</Link>
          </Reveal>
          <Reveal delay={1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bishop-george-mbendera-6a4cf85bc8712.png"
              alt="Bishop George Enock Mbendera — ministry portrait"
              className="rounded-card shadow-soft w-full aspect-[3/4] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Latest Sermons ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl mb-12">
            <p className="eyebrow">Latest Sermons</p>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12]">
              The Word, week by week
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5.5">
            {[
              ["Series I", "YOUR HOPE IS NOT LOST.", "A three-part teaching on trusting God when the road is uncertain and standing firm on His promises."],
              ["Series II", "HANDLE YOUR DAY CAREFULLY.", "Discover the restoring power of Christ over body, mind, and spirit, and how to receive it by grace."],
              ["Series III", "THE SECRET OF YOUR JOY.", "Learn to live led by the Spirit daily, growing in the gifts, fruit, and intimacy God intends for you."],
            ].map(([tag, title, text], i) => (
              <Reveal key={title} delay={i as 0 | 1 | 2}>
                <article className="bg-cream border border-line rounded-card p-7.5 flex flex-col gap-3 card-lift h-full">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">{tag}</span>
                  <h3 className="font-display text-[22px] font-semibold leading-[1.2]">{title}</h3>
                  <p className="text-soft text-[15px] flex-1">{text}</p>
                  <Link href="/sermons" className="text-crimson font-semibold text-[15px]">Listen Now →</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Podcasts ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl mb-12">
            <p className="eyebrow">Podcasts</p>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12]">
              Listen to Our Latest Episodes
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5.5">
            {[
              ["Episode 1", "YOUR HOPE IS NOT LOST", "A message of restored faith — no matter how far you’ve fallen, God’s hope reaches further. Discover the anchor that holds when everything else lets go."],
              ["Episode 2", "HANDLE YOUR DAY CAREFULLY", "Each day is a gift from God. Learn how to steward your time, thoughts, and words with intention and wisdom rooted in Scripture."],
              ["Episode 3", "THE SECRET OF YOUR JOY", "Joy is not circumstantial — it is a fruit of the Spirit. Uncover the biblical secret to lasting joy that the world cannot take away."],
            ].map(([tag, title, text], i) => (
              <Reveal key={title} delay={i as 0 | 1 | 2}>
                <article className="bg-paper border border-line rounded-card p-7.5 flex flex-col gap-3 card-lift h-full">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">{tag}</span>
                  <h3 className="font-display text-[22px] font-semibold leading-[1.2]">{title}</h3>
                  <p className="text-soft text-[15px] flex-1">{text}</p>
                  <Link href="/podcasts" className="text-crimson font-semibold text-[15px]">Listen Now →</Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Books / resources ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl mb-12">
            <p className="eyebrow">Books &amp; Resources</p>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12]">
              Words of hope and revelation
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5.5">
            <Reveal>
              <Link href="/gods-creation-the-universe" className="flex gap-6 items-start bg-cream border border-line rounded-card p-7.5 card-lift h-full">
                <div className="w-[74px] h-[100px] rounded-lg bg-gradient-to-b from-crimson to-crimdeep text-white grid place-items-center font-display text-2xl font-semibold shadow-soft shrink-0">I</div>
                <div>
                  <h3 className="font-display text-[21px] mb-2">GOD’s Creation- The Universe</h3>
                  <p className="text-soft mb-3.5">Proving Scriptures that GOD created the universe.</p>
                  <span className="text-crimson font-semibold">Explore the book →</span>
                </div>
              </Link>
            </Reveal>
            <Reveal delay={1}>
              <Link href="/shop/your-hope-is-not-lost-ebook" className="flex gap-6 items-start bg-cream border border-line rounded-card p-7.5 card-lift h-full">
                <div className="w-[74px] h-[100px] rounded-lg bg-gradient-to-b from-crimson to-crimdeep text-white grid place-items-center font-display text-2xl font-semibold shadow-soft shrink-0">II</div>
                <div>
                  <h3 className="font-display text-[21px] mb-2">YOUR HOPE IS NOT LOST</h3>
                  <p className="text-soft mb-3.5">A book of hope. By George Enock Mbendera.</p>
                  <span className="text-crimson font-semibold">Get the e-book →</span>
                </div>
              </Link>
            </Reveal>
          </div>
          <Reveal className="mt-8 grid md:grid-cols-3 gap-5.5">
            {[
              ["PDF Downloads", "Read inspiring books like: Divine Revelation Of Hell, Divine Revelation Of Heaven…for clarity and reality of the pain of Hell and the beauty of Heaven. But also, the reality of the spiritual world.", "/pdf-uploads"],
              ["Blog", "What Is Happening In The World Today: Prophetic visions about what is coming tomorrow and other posts.", "/blog"],
              ["Shop", "Digital Music, Merchandise and Christian Literature (Your Hope Is Not Lost) by George Enock Mbendera.", "/shop"],
            ].map(([t, d, href]) => (
              <Link key={t} href={href} className="bg-cream border border-line rounded-card p-7 card-lift">
                <h3 className="font-display text-[20px] mb-2">{t}</h3>
                <p className="text-soft text-[15px]">{d}</p>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- Cross Victory Church ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.05fr_.95fr] gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Cross Victory Church</p>
            <h2 className="font-display font-semibold text-[clamp(28px,3.6vw,40px)] leading-[1.12] mb-5">
              “When I left the Church of England…”
            </h2>
            <p className="text-soft">
              When I left the Church of England (which I loved and raised from a
              Muslim community), it was not for pride or selfish reasons. When
              I left a full-time musical journey and cancelled my travel back to
              South Africa to work on two music deals; when I abandoned an
              employment opportunity in order to save the Lord full-time, it
              doesn’t mean that I had enough money and provisions. Ladies and
              gentlemen, I felt to start a full-time ministry to serve the Lord
              while following the teachings of the holy Apostles. I started this
              small church in the living room of my home.
            </p>
            <Link href="/cross-victory-church" className="btn-solid mt-8">Visit Cross Victory Church</Link>
          </Reveal>
          <Reveal delay={1}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/bishop-george-mbendera-6a4cf85bae24f.png"
              alt="Bishop George Enock Mbendera"
              className="rounded-card shadow-soft w-full aspect-[3/4] object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Music ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow">Music Ministry</p>
            <h2 className="font-display font-semibold text-[clamp(28px,3.6vw,42px)] leading-[1.12]">
              A VARIETY OF MUSIC FROM GEORGE MBENDERA — ON BANDCAMP, SPOTIFY…
            </h2>
            <p className="text-soft mt-5">
              Mbendera’s music blends Christian (Gospel); Malawian traditional
              (Yao) sound with contemporary and classical released for the
              nations. As a minister, let every Christian song draw you nearer
              to the throne of grace.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap mt-8">
              <Link href="/music" className="btn-solid">Explore the Music</Link>
              <Link href="/shop" className="btn-ghost">Download On Bandcamp Music</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Events ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl mb-12">
            <p className="eyebrow">Upcoming Events</p>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12]">Gather with us</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5.5">
            {[
              ["FriDAY Evening– Saturday Evening", "Blantyre", "Revival Weekend", "Join us in Blantyre for worship, teachings."],
              ["Saturday", "Sanctuary", "Worship Workshop", "Experience practical Bible teaching, prophetic worship, and prayer focused on revival and restoration."],
            ].map(([when, where, title, text], i) => (
              <Reveal key={title} delay={i as 0 | 1}>
                <article className="flex gap-6 items-center bg-paper border border-line rounded-card p-7 card-lift">
                  <div className="flex flex-col items-center min-w-[86px]">
                    <span className="font-display font-bold text-2xl text-crimson">{when}</span>
                    <span className="text-[12px] tracking-[0.14em] uppercase text-gold font-semibold">{where}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[21px] mb-1.5">{title}</h3>
                    <p className="text-soft text-[15px]">{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Devotional ---------- */}
      <section className="bg-crimdeep text-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="eyebrow !text-[#d9b968]">Devotional of the Day</p>
            <blockquote className="font-display italic font-medium text-[clamp(24px,3.4vw,36px)] leading-[1.3]">
              “But thanks be to God, who gives us the victory through our Lord
              Jesus Christ.”
              <cite className="block not-italic mt-5 font-body text-[13.5px] tracking-[0.16em] uppercase text-[#e9c98a]">
                1 Corinthians 15:57
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.05fr_.95fr] gap-16 items-center">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="font-display font-semibold text-[clamp(30px,4vw,44px)] leading-[1.12]">
              Connect with the ministry
            </h2>
            <p className="text-soft mt-4">
              We are open, humble and caring. Whether you have walked with the
              Lord for decades or you are stepping through our doors for the
              very first time, there is a place for you at Cross Victory.
            </p>
            <div className="flex gap-3.5 flex-wrap mt-8">
              <Link href="/contact" className="btn-solid">Send a Message</Link>
              <Link href="/partner" className="btn-ghost">Partner With Us</Link>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-card bg-gradient-to-b from-crimson to-crimdeep text-white min-h-[320px] flex flex-col items-center justify-center gap-2 shadow-soft py-12">
              <span className="text-[44px] text-[#e9c98a]">✝</span>
              <p className="font-display text-[22px] font-semibold">Cross Victory Ministries</p>
              <small className="text-[#e9c98a] tracking-[0.14em] uppercase text-[12px]">Blantyre · Malawi</small>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
