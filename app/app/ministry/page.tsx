import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Music & Ministry | Bishop George Mbendera",
  description:
    "Explore devotional insights, teachings, and spiritual reflections from Bishop George Mbendera.",
};

const ministryPosts = [
  {
    title: "HANDLE YOUR DAY CAREFULLY.",
    tag: "Daily Wisdom",
    excerpt:
      "UNDERSTANDING THE GREAT VALUE OF EACH DAY. The account of Bartimaeus, the son of Timaeus, illustrates…",
  },
  {
    title: "UNDERSTANDING RELATIONSHIPS.",
    tag: "Relationships",
    excerpt:
      "WE NEED HEALTHY CONNECTIONS, FRIENDSHIPS AND RELATIONSHIPS. The Significance of Closeness in Relationships. In life, relationships,…",
  },
  {
    title: "HOW TO STAY CLOSE AND AWAY FROM PEOPLE.",
    tag: "Wisdom",
    excerpt:
      "WISDOM FOR TODAY. When you are too close to people, sometimes, they take you for granted…",
  },
  {
    title: "THE SECRET OF YOUR JOY.",
    tag: "Spiritual Life",
    excerpt:
      "IT IS WELL. To a Christian, joy should not be determined by the issues or the…",
  },
  {
    title: "THE SHEPHERD.",
    tag: "Pastoral Reflection",
    excerpt:
      "The Dog Beneath the Lifeguard Tower The storm had passed, but the Louisiana Gulf Coast still…",
  },
  {
    title: "THE SHEPHERD.",
    tag: "Pastoral Reflection",
    excerpt:
      "💔 She was barely strong enough to stand, but every time her calf moved away, the…",
  },
  {
    title: "THE SHEPHERD.",
    tag: "Pastoral Reflection",
    excerpt:
      "🐒 She looked too weak to stand… but she still refused to leave the two tiny…",
  },
  {
    title: "THE SHEPHERD.",
    tag: "Pastoral Reflection",
    excerpt:
      "She was barely strong enough to stand, but every time her baby stumbled, the exhausted mare…",
  },
  {
    title: "THE SHEPHERD.",
    tag: "Pastoral Reflection",
    excerpt:
      "🐾 She wasn’t barking at the cars for help—she was begging someone to notice what she…",
  },
];

export default function MinistryPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Teachings &amp; Reflections</p>
          <h1>MUSIC &amp; MINISTRY.</h1>
          <p>
            Explore devotional insights, biblical teachings, and spiritual
            reflections written by Bishop George Enock Mbendera to encourage your
            walk with Christ.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          {/* Featured Image & Intro Banner */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 grid lg:grid-cols-12 gap-8 items-center shadow-soft">
              <div className="lg:col-span-7 space-y-4">
                <span className="eyebrow">Pastoral Heart</span>
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  Communicating Biblical Truth for Everyday Life
                </h2>
                <div className="prose-page">
                  <p>
                    His pastoral ministry and his music are not separate parts of
                    his life. They are expressions of the same desire—to
                    communicate the Christian faith, encourage people in their
                    journey with God, and bring biblical truth into the realities of
                    everyday life.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/1000245646.jpg"
                  alt="Bishop George Mbendera Ministry"
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-xl border border-line"
                />
              </div>
            </div>
          </Reveal>

          {/* Posts Cards Grid */}
          <Reveal>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="eyebrow">Articles &amp; Excerpts</span>
                  <h2 className="font-display font-semibold text-3xl text-ink">
                    Ministry Articles &amp; Devotionals
                  </h2>
                </div>
                <p className="text-soft text-sm max-w-md">
                  Read excerpts from Bishop Mbendera's ongoing writing on faith,
                  relationships, and daily Christian walk.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5.5">
                {ministryPosts.map((post, idx) => (
                  <div
                    key={idx}
                    className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block self-start">
                        {post.tag}
                      </span>
                      <h3 className="font-display font-semibold text-lg text-ink leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-soft text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <Link
                      href="/blog"
                      className="inline-flex items-center text-sm font-semibold text-crimson hover:text-crimdeep pt-2 transition group"
                    >
                      <span>Read More</span>
                      <span className="ml-1 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
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
              Gather With Us in Worship
            </h2>
            <p className="text-soft text-base max-w-2xl mx-auto mb-8">
              Join Cross Victory Church in Blantyre, Malawi for weekly services,
              prayer meetings, and fellowship.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/cross-victory-church" className="btn-solid">
                Visit Cross Victory Church
              </Link>
              <Link href="/contact" className="btn-ghost">
                Send a Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
