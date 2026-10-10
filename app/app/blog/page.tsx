import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "What Is Happening In The World Today: Prophetic visions about what is coming tomorrow and other posts.",
};

const posts = [
  {
    tag: "October 6, 2026",
    title: "HANDLE YOUR DAY CAREFULLY.",
    excerpt:
      "UNDERSTANDING THE GREAT VALUE OF EACH DAY. The account of Bartimaeus, the son of Timaeus, illustrates a profound principle: one of the primary ways the Lord provides blessings, answers and provision is through your everyday life. The Bible teaches that there is a season for every purpose under heaven…",
  },
  {
    tag: "October 3, 2026",
    title: "HANDLE YOUR DAY CAREFULLY.",
    excerpt:
      "UNDERSTANDING THE GREAT VALUE OF EACH DAY. The Bible teaches that there is a season for every purpose under heaven. Every day the Lord gives you is a gift — handle it carefully…",
  },
  {
    tag: "September 29, 2026",
    title: "UNDERSTANDING RELATIONSHIPS.",
    excerpt:
      "WE NEED HEALTHY CONNECTIONS, FRIENDSHIPS AND RELATIONSHIPS. The Significance of Closeness in Relationships. In life, relationships, friendships and connections are necessary. Although certain individuals may take advantage or abuse our closeness to them, maintaining good connections with others yields numerous benefits and remains essential…",
  },
  {
    tag: "August 23, 2026",
    title: "HOW TO STAY CLOSE AND AWAY FROM PEOPLE.",
    excerpt:
      "WISDOM FOR TODAY. When you are too close to people, sometimes, they take you for granted and for a fool. If you stay away from them, sometimes, they call you selfish. But the truth of the Bible remains the same: Rejoice with those who rejoice, and weep with those who weep. Romans 12:15 NKJV…",
  },
  {
    tag: "August 22, 2026",
    title: "THE SECRET OF YOUR JOY.",
    excerpt:
      "IT IS WELL. To a Christian, joy should not be determined by the issues or the environment around you. Your joy should be from within you; from the Spirit of God Who is in you and with you. Worries, complaining, crying, murmuring do not solve any problem neither do the same please God but Faith…",
  },
  {
    tag: "August 17, 2026",
    title: "THE SHEPHERD.",
    excerpt:
      "The Dog Beneath the Lifeguard Tower. The storm had passed, but the Louisiana Gulf Coast still looked forgotten. Early that morning, a volunteer named Daniel was driving slowly along a deserted stretch of beach, checking for animals left behind by the storm…",
  },
];

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Resources</p>
          <h1>Blog</h1>
          <p>
            What Is Happening In The World Today: Prophetic visions about what
            is coming tomorrow and other posts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <Reveal key={p.tag + p.title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="bg-paper border border-line rounded-card p-7 flex flex-col gap-3 card-lift h-full">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">
                    {p.tag}
                  </span>
                  <h2 className="font-display text-[21px] font-semibold leading-[1.2]">
                    {p.title}
                  </h2>
                  <p className="text-soft text-[15px] flex-1">{p.excerpt}</p>
                  <Link href="/ministry" className="text-crimson font-semibold text-[15px]">
                    Read More →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-soft text-[15px]">
              <span className="w-9 h-9 rounded-full bg-crimson text-white grid place-items-center font-semibold">1</span>
              {["2", "3", "…", "6"].map((n) => (
                <span key={n} className="w-9 h-9 rounded-full bg-paper border border-line grid place-items-center">
                  {n}
                </span>
              ))}
              <span className="ml-2">Next Page</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
