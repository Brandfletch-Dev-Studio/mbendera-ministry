import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Devotionals",
  description:
    "Feed Your Spirit Every Day. Start each morning anchored in the Word through short, powerful devotionals from Bishop George Enock Mbendera in Blantyre, Malawi.",
};

const recent = [
  ["Psalms · Recent", "When God Seems Silent", "Discover how God is still working, even when the heavens feel quiet and your prayers appear unanswered.", "Scripture: Psalm 13:1–6"],
  ["Psalms · Recent", "The Power of Thankfulness", "Learn how gratitude turns your gaze from the problem to the God who is greater than every challenge.", "Scripture: Psalm 100:1–5"],
  ["Isaiah · Recent", "Positioned for a Breakthrough", "See how God prepares you in hidden seasons so you can step boldly into the doors He opens.", "Scripture: Isaiah 43:18–19"],
  ["Philippians · Recent", "Carry His Peace", "Discover how to guard your heart and mind so that the peace of Christ governs your daily decisions.", "Scripture: Philippians 4:6–7"],
  ["Galatians · Recent", "Walking in the Spirit Daily", "Understand what it means to keep in step with the Holy Spirit in every thought, word, and action.", "Scripture: Galatians 5:16–25"],
  ["Joel · Recent", "He Restores What Was Lost", "Be encouraged by God’s promise to restore wasted years and redeem every broken place in your story.", "Scripture: Joel 2:25–27"],
];

const series = [
  ["30 Days of Faith", "30 Episodes", "Build a lifestyle of unshakable trust in God as you meditate daily on His promises and respond with bold obedience."],
  ["Prayers That Move Mountains", "14 Episodes", "Strengthen your prayer life with Scripture-based devotions that teach you to pray with authority, persistence, and faith."],
  ["Holy Spirit — Your Daily Helper", "21 Episodes", "Grow in intimacy with the Holy Spirit and learn to recognize His voice, guidance, and power in everyday life."],
];

const themes = ["Faith & Trust", "Prayer & Intercession", "Praise & Worship", "Healing & Restoration", "Purpose & Calling", "Holy Spirit & Power", "Marriage & Family", "Kingdom Living"];

export default function DevotionalsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Cross Victory Ministries · Daily Devotionals</p>
          <h1>Feed Your Spirit Every Day</h1>
          <p>
            Start each morning anchored in the Word through short, powerful
            devotionals from Bishop George Enock Mbendera in Blantyre,
            Malawi—crafted to help you hear God, grow in faith.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 text-center">
              <p className="eyebrow">Devotional of the Day</p>
              <blockquote className="font-display italic font-medium text-[clamp(20px,2.8vw,28px)] leading-[1.35]">
                “He will be like a tree planted by the water that sends out its
                roots by the stream. It does not fear when heat comes; its
                leaves are always green.”
                <cite className="block not-italic mt-4 font-body text-[13px] tracking-[0.16em] uppercase text-gold font-semibold">
                  Jeremiah 17:8 (NIV)
                </cite>
              </blockquote>
              <h2 className="font-display text-[26px] font-semibold mt-8 mb-2">Rooted and Unshaken</h2>
              <p className="text-[13px] tracking-[0.14em] uppercase text-gold font-semibold mb-6">
                Today · With Bishop George Enock Mbendera
              </p>
              <div className="prose-page text-left">
                <p>In a world that is constantly shifting, God desires that your inner life be firmly planted in Him. The storms of circumstance, the heat of pressure, and the winds of uncertainty cannot uproot the life that draws its strength from the Lord.</p>
                <p>A tree does not grow strong overnight; it is strengthened day by day as it draws from the hidden flow beneath the surface. In the same way, you are strengthened as you remain connected to God through His Word and prayer.</p>
                <p>Today, the Lord is inviting you to trust Him at a deeper level. Refuse to live by fear, headlines, or emotions. Instead, confess His promises, meditate on His goodness, and remain rooted.</p>
                <p><strong>Key Scripture: Jeremiah 17:7–8</strong></p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="bg-paper border border-line rounded-card p-8 md:p-12">
              <div className="prose-page">
                <h3>{`HANDLE YOUR DAY CAREFULLY.`}</h3>
                <h3>{`The Story Of Bartimaeus, The Son Of Timaeus.`}</h3>
                <p>{`One of the channels of your blessings, your answers and getting your provision from the Lord is just your day.`}</p>
                <p>{`The Bible teaches that there is a time for every purpose under Heaven.`}</p>
                <p>{`In the story of Bartimaeus, the son of Timaeus, like in other stories where men and women encountered the glory of GOD in the Bible, it was about a particular, special or a specific day.`}</p>
                <p>{`A single day handled well or mishandled can determine your glory or everlasting shame. It’s just about a single day. You can miss or receive a long- awaited miracle or glory just like what happened to Bartimaeus in Jericho. It can be determined by how you have handle a single day.`}</p>
                <p>{`When his day had come, physically, things were normal. It was about getting someone to guide him to the right place and spot; sitting and begging under a harsh or beautiful weather conditions. It looked like an ordinary day in the physical. Indeed, nothing showed that it was one of the greatest days for Bartimaeus.`}</p>
                <p>{`But in the spiritual realm, things were not as normal as they looked in the physical.`}</p>
                <p>{`His day to receive his sight had come and no one told him about that. He received no prophecy.`}</p>
                <p>{`It could be a day of heavy rains, it could be a day of extreme temperature whether too cold or hot. On the other hand, a day he could feel discouraged to walk through Jericho or a day of disagreements at home. It could be a day with bad or hot mood. What about those who stopped him from calling on the Lord for his healing?`}</p>
                <p>{`So, I great day can be preceded by barriers against your long awaited wife or husband; employment and a great miracle. The way you handle your day matters. Pray that the Lord will restore to you what you missed on your great day because of your temper, anger, mood or any weakness. Some even praise themselves saying, ” I am in a bad mood today.” They do not know that they are missing something greater from GOD behind the physical scenery.`}</p>
                <p>{`The Enemy is playing around with the days of many people in order to make them miss GOD. But you can choose to live an exceptional and excellent life before the Lord on daily basis. Let this be your choice as opposed to that of, “I am in a bad mood today.”`}</p>
                <p>{`Be determined that you will not walk according to what you see but according to faith in the word of GOD.`}</p>
                <p>{`Let’s Go Back To Jericho.`}</p>
                <p>{`And when he heard that it was Jesus of Nazareth, he began to cry out and say, “Jesus, Son of David, have mercy on me!” [48] Then many warned him to be quiet; but he cried out all the more, “Son of David, have mercy on me!” [49] So Jesus stood still and commanded him to be called. Then they called the blind man, saying to him, “Be of good cheer. Rise, He is calling you.” [50] And throwing aside his garment, he rose and came to Jesus.`}</p>
                <blockquote>{`Mark 10:47-50 NKJV.`}</blockquote>
                <p>{`You should learn to handle your days well; something great may be coming ahead. You should get prepared in every way. Do not miss your great miracles from the Lord because of mishandling your days.`}</p>
                <p>{`A day handled well is like gold given to you by the Lord in this life. A single day can also determine or affect that life to come. Those who are in Paradise or Hell today had a day they determined their present destiny; how they handled that particular day. There is time for every purpose under Heaven.`}</p>
                <p>{`To everything there is a season, A time for every purpose under heaven: [2] A time to be born, And a time to die; A time to plant, And a time to pluck what is planted;`}</p>
                <blockquote>{`Ecclesiastes 3:1-2 NKJV`}</blockquote>
                <p>{`So, you can see the battle and efforts Bartimaeus applied to make practical what was in the spiritual realm. Bartimaeus had that responsibility to overcome the barriers; he was not spared and you too will not be spared. You have to make your choice to handle your days well and overcome any barrier standing on your way to your great miracle. You should overcome every barrier to your prayer and answer.`}</p>
                <p>{`It was not that easy for this blind man, Bartimaeus, the son of Timaeus.`}</p>
                <p>{`We have to be careful how we handle the days we pass through. Some days are not ordinary. They are carefully and specially intended for Heaven to remember us. Some have already missed their great miracles because of the mood, place and actions they determined on their great days.`}</p>
                <p>{`You should avoid being carnally minded when handling each day. Be a spiritually minded person and knowing that there are special days intended for Heaven to remember you. Do not let evil thoughts, anger, resentment, grudges, bad mood or bad temper make you miss your great day and miracle.`}</p>
                <p>{`This was the day of the son of Timaeus.`}</p>
                <p>{`It did not find him seeing or with sight but still blind; not at home but by the roadside, not giving money to people but begging from them, not in Jerusalem but in Jericho.`}</p>
                <p>{`Again, be careful how you handle your days. It can come when you are broke, when you have received the worst insults, when you have received your worst allegations and rejection. You do not know the day that your history will be changed in this world. Be conscious about the way you handle your days.`}</p>
                <p>{`Bartimaeus used his day wisely and received his great miracle.`}</p>
                <p>{`Lastly, there is a day you will leave this world. Above all, there is that great Day Jesus is coming back. Imagine mishandling this great Day?`}</p>
                <h3>{`George Enock Mbendera.`}</h3>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-14">
            <div className="bg-paper border border-line rounded-card p-8 md:p-12">
              <div className="prose-page">
                <h3>{`YOUR HOPE IS NOT LOST.`}</h3>
                <h3>{`FOREWORD.`}</h3>
                <p>{`We are living in a season or at a time of many uncertainties. Sometimes, we are not even sure about the afternoon on the same day. Anything can happen at any time. In some cases, employment is replaced suddenly by unemployment, health replaced by disease and sickness, peace by violence, disorder and war; life replaced by death.`}</p>
                <p>{`But amidst these chaos, over this world, there is still hope- as we look to Jesus over the work he personally did for you and me. In other words, the salvation and blessings he brought to us. This is exactly the way of the time of Moses when that rebellious generation was bitten by fiery serpents. Although that was as a result of the rebellion of Israel but within that pain and fear, GOD told Moses to make a fiery serpent. By the mercy of GOD, those who could look at it would still live and not die. So Moses made that bronze serpent.`}</p>
                <p>{`[7] Therefore the people came to Moses, and said, “We have sinned, for we have spoken against the LORD and against you; pray to the LORD that He take away the serpents from us.” So Moses prayed for the people. [8] Then the LORD said to Moses, “Make a fiery serpent, and set it on a pole; and it shall be that everyone who is bitten, when he looks at it, shall live.” [9] So Moses made a bronze serpent, and put it on a pole; and so it was, if a serpent had bitten anyone, when he looked at the bronze serpent, he lived.`}</p>
                <blockquote>{`Numbers 21:7-9 NKJV`}</blockquote>
                <p>{`JESUS referred to this event in the book of John, by saying:`}</p>
                <blockquote>{`“And as Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up, [15] “that whoever believes in Him should not perish but have eternal life.`}</blockquote>
                <blockquote>{`John 3:14-15 NKJV`}</blockquote>
                <p>{`It is a reality that we are passing through uncertainties and the pain of the bite of the Enemy. But on the other hand, we still have hope and live even into eternal life through Jesus Christ. We should still look to him for help and not over our pain, rejection, sicknesses, fears and the challenges of this life. He still has the solution to what is happening in the world today and what we may face tomorrow.`}</p>
                <p>{`This message is intended to bring hope to those passing through the storms of this life and the fears of tomorrow. As Bartimaeus found his healing, restoration and destiny in the Lord, you too can find the same. You do not have to be stressed or take your own life- there is still hope through the Lord Jesus.`}</p>
                <p>{`Therefore, this message has taken much consideration over one man in the Bible, who turned to Jesus and had seen his eyes opened- Bartimaeus – the son of Timaeus. His day began as normal but within the chaos and the daily activities of that day, something great was in store. He looked to Jesus and had his pain gone. Will you look to Jesus today? His hands are still open and waiting for you. He wants you to turn from the noise of this world; that pain of a fiery- serpent bite and the fears of the storms passing on Earth. You should look to him who is the Author and Finisher of our faith. The Healer, the Resurrection and the Life; the Prince of peace, the Way, the Truth…and the Savior of the world.`}</p>
                <p>{`So, the issue is not about how big is the storm but how big is the Prince of Peace- Jesus. There is hope even in the middle of a storm. A person who is with Jesus, in the middle of a storm, has more hope than that one over calm waters but without Jesus. That storm will turn into peace but those calm waters into a horrible storm then into both physical and spiritual death. That is a disaster.`}</p>
                <p>{`This book is intended to encourage you that Jesus is still alive and your hope is not lost. Just as Bartimaeus’ hope was not lost after suffering for years, you too can find that hope through the same Jesus of Nazareth.`}</p>
                <p>{`In this encounter between Bartimaeus and the Lord Jesus, I would like you to note and learn the following:`}</p>
                <p>{`(1). It was a normal or an ordinary day in the physical.`}</p>
                <p>{`(2). Bartimaeus heard and was convinced that the Man was Jesus.`}</p>
                <p>{`(3). Bartimaeus threw aside his garment.`}</p>
                <p>{`(4). The spot was necessary for that encounter and great miracle.`}</p>
                <p>{`(5). The day started with blindness but ended with clear sight.`}</p>
                <p>{`(6). He could have lost that great miracle if he listened to those stopping him.`}</p>
                <p>{`(7). The faith of Bartimaeus.`}</p>
                <p>{`(8). After that great miracle, he followed the Lord on the road.`}</p>
                <p>{`Finally, there is still hope that you can live again.`}</p>
                <p>{`Through the journey of this book, you will also get connected to other series including:`}</p>
                <p>{`Your Hope Is Not Lost (a full edition), The Great Story of Boldness and Courage, Fear Not, Who Is To Blame…and more.`}</p>
                <p>{`Find an opportunity to read the whole book.`}</p>
                <p>{`Thank you.`}</p>
                <h3>{`George Enock Mbendera.`}</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl mb-12">
            <p className="eyebrow">Recent Devotionals</p>
            <h2 className="font-display font-semibold text-[clamp(28px,4vw,40px)] leading-[1.12]">
              Grow Day by Day in the Presence of God
            </h2>
            <p className="text-soft mt-3">
              Browse recent messages from Bishop Mbendera designed to help you
              hear God clearly, respond in faith, and walk in the victory of
              the cross in every season.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {recent.map(([tag, title, text, scripture], i) => (
              <Reveal key={title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="bg-paper border border-line rounded-card p-7 flex flex-col gap-3 card-lift h-full">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">{tag}</span>
                  <h3 className="font-display text-[21px] font-semibold leading-[1.2]">{title}</h3>
                  <p className="text-soft text-[15px] flex-1">{text}</p>
                  <p className="text-[13.5px] font-semibold text-crimson">{scripture}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-xl mb-12">
            <p className="eyebrow">Devotional Series</p>
            <h2 className="font-display font-semibold text-[clamp(28px,4vw,40px)] leading-[1.12]">
              Journey Deeper with Curated Series
            </h2>
            <p className="text-soft mt-3">
              Follow a focused path of teaching over several days to build
              strong foundations in key areas of your walk with Christ.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5.5">
            {series.map(([title, episodes, text], i) => (
              <Reveal key={title} delay={(i % 3) as 0 | 1 | 2}>
                <article className="bg-paper border border-line rounded-card p-7 flex flex-col gap-3 card-lift h-full">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold self-start">{episodes}</span>
                  <h3 className="font-display text-[22px] font-semibold leading-[1.2]">{title}</h3>
                  <p className="text-soft text-[15px] flex-1">{text}</p>
                  <span className="text-crimson font-semibold text-[15px]">Explore Series →</span>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="eyebrow">Browse by Theme</p>
            <h2 className="font-display font-semibold text-[clamp(24px,3.4vw,34px)] leading-[1.12] mb-8">
              Find a Devotional for This Season
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {themes.map((t) => (
                <span key={t} className="px-5 py-2 rounded-full bg-paper border border-line text-[14.5px] font-semibold text-soft">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt pb-28">
        <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 h-full">
              <p className="eyebrow">Subscribe</p>
              <h2 className="font-display text-[24px] font-semibold leading-tight mb-3">
                Get the Daily Devotional in Your Inbox
              </h2>
              <p className="text-soft text-[15px] mb-6">
                Sign up to receive daily devotionals from Cross Victory
                Ministries and Bishop George Enock Mbendera. Start each day
                with Scripture, reflection, and a faith-building word.
              </p>
              <form action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain" className="flex gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Type your email…"
                  className="flex-1 bg-cream border border-line rounded-full px-5 py-3 text-[15px] focus:outline-none focus:border-crimson"
                />
                <button type="submit" className="btn-solid">Subscribe</button>
              </form>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="bg-paper border border-line rounded-card p-8 h-full">
              <p className="eyebrow">Prayer Request</p>
              <h2 className="font-display text-[24px] font-semibold leading-tight mb-3">
                Share Your Prayer Request with Bishop Mbendera &amp; the Prayer Team
              </h2>
              <p className="text-soft text-[15px] mb-6">
                We believe in the power of agreement in prayer. Share your
                request and our team will stand with you, trusting God for
                breakthrough, healing, and restoration.
              </p>
              <Link href="/contact" className="btn-ghost">Send a Prayer Request</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
