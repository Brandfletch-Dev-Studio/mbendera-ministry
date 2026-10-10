import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Bible Study | Bishop George Mbendera",
  description:
    "Grow deeper in God's Word with weekly Bible studies, small groups, and scripture reflections across Malawi.",
};

const studyLocations = [
  {
    day: "Mondays",
    venue: "Grace Chapel",
    location: "Blantyre, Malawi",
    action: "Reserve seat",
  },
  {
    day: "Tuesdays",
    venue: "Worship Tent",
    location: "Nkolokoti, Blantyre District",
    action: "Join group",
  },
  {
    day: "Wednesdays",
    venue: "River Hall",
    location: "Chilobwe, Blantyre",
    action: "Book place",
  },
  {
    day: "Thursdays",
    venue: "Youth Hall",
    location: "Lilongwe Centre",
    action: "Plan visit",
  },
  {
    day: "Fridays",
    venue: "City Auditorium",
    location: "Mzuzu City",
    action: "See details",
  },
  {
    day: "Saturdays",
    venue: "Faith Center",
    location: "Blantyre Township",
    action: "Sign up",
  },
  {
    day: "Sundays",
    venue: "Prayer Hall",
    location: "Blantyre Region",
    action: "More details",
  },
  {
    day: "Biweekly",
    venue: "Family Center",
    location: "Limbe Township",
    action: "Register here",
  },
  {
    day: "Retreat",
    venue: "Prayer Garden",
    location: "Zomba Mission",
    action: "Contact team",
  },
];

export default function BibleStudyPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Discipleship &amp; Scripture</p>
          <h1>Grow Deeper In God’s Word.</h1>
          <p>
            Journey through scripture with weekly studies, worship-filled
            reflections, and resources that help you live God’s Word every day.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {/* Overview Intro Banner */}
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 grid lg:grid-cols-12 gap-8 items-center shadow-soft">
              <div className="lg:col-span-8 space-y-4">
                <span className="eyebrow">Weekly Fellowship</span>
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  Bible Studies &amp; Small Groups
                </h2>
                <div className="prose-page">
                  <p>
                    Join a small group, download study guides, and discover how
                    God’s truth shapes worship, service, and everyday decisions.
                  </p>
                  <p>
                    Deep knowledge of the Scriptures is vital for a Christian walk.
                    Bible knowledge should be encouraged among Christians.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/1000136847.jpg"
                  alt="Bible Study Fellowship"
                  loading="lazy"
                  className="w-full h-56 object-cover rounded-xl border border-line"
                />
              </div>
            </div>
          </Reveal>

          {/* Schedule Cards Grid */}
          <Reveal>
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="eyebrow">Study Locations</span>
                  <h2 className="font-display font-semibold text-3xl text-ink">
                    Weekly Study Schedule
                  </h2>
                </div>
                <p className="text-soft text-sm max-w-md">
                  Find a weekly gathering near you in Blantyre, Lilongwe, Mzuzu,
                  Limbe, or Zomba.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5.5">
                {studyLocations.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block">
                        {item.day}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-ink">
                        {item.venue}
                      </h3>
                      <p className="text-soft text-sm font-medium">
                        {item.location}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="btn-solid text-xs py-2.5 px-5 w-full text-center block"
                      >
                        {item.action}
                      </Link>
                    </div>
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
              Need Study Guides or Material?
            </h2>
            <p className="text-soft text-base max-w-2xl mx-auto mb-8">
              Reach out to our ministry team to get recommendations or request
              physical copies of Bishop Mbendera's books and teaching resources.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn-solid">
                Get in Touch
              </Link>
              <Link href="/cross-victory-church" className="btn-ghost">
                Cross Victory Church
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
