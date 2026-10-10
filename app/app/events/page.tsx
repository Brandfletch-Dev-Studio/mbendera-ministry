import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Event Calendar & Ministry Events — Cross Victory Ministries",
  description:
    "Explore upcoming crusades, worship concerts, and ministry tours with dates, venues, and hosting details across Malawi.",
};

const ministryEvents = [
  {
    date: "18.09.25",
    venue: "Worship Centre",
    location: "Blantyre, Malawi",
    rsvpLabel: "RSVP online",
  },
  {
    date: "23.09.25",
    venue: "Grace Arena",
    location: "Lilongwe, Malawi",
    rsvpLabel: "Register now",
  },
  {
    date: "28.09.25",
    venue: "Harvest Cathedral",
    location: "Mzuzu, Malawi",
    rsvpLabel: "More info",
  },
  {
    date: "20.09.25",
    venue: "City Sanctuary",
    location: "Zomba, Malawi",
    rsvpLabel: "Book seat",
  },
  {
    date: "24.09.25",
    venue: "Prayer Pavilion",
    location: "Mulanje, Malawi",
    rsvpLabel: "Event details",
  },
  {
    date: "30.09.25",
    venue: "Revival Grounds",
    location: "Balaka, Malawi",
    rsvpLabel: "Join us",
  },
  {
    date: "21.09.25",
    venue: "Kingdom Chapel",
    location: "Chiradzulu, Malawi",
    rsvpLabel: "View schedule",
  },
  {
    date: "27.09.25",
    venue: "Covenant Hall",
    location: "Salima, Malawi",
    rsvpLabel: "Save spot",
  },
  {
    date: "01.10.25",
    venue: "Hope Auditorium",
    location: "Mangochi, Malawi",
    rsvpLabel: "Get updates",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-cream text-ink font-body">
      {/* ---------- Page Hero ---------- */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Event Calendar</p>
            <h1>Ministry Events</h1>
            <p>
              Explore upcoming crusades, worship concerts, and ministry tours with dates, venues, and hosting details.
            </p>
            <div className="flex gap-4 flex-wrap mt-8">
              <a
                href="#schedule"
                className="btn-solid bg-gold text-ink hover:bg-white"
              >
                View Upcoming Events
              </a>
              <a
                href="#rsvp"
                className="btn-ghost border-white text-white hover:bg-white hover:text-crimson"
              >
                Event RSVP &amp; Booking
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured Event Image Banner ---------- */}
      <section className="pt-12 pb-6">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card overflow-hidden shadow-soft grid md:grid-cols-[.45fr_.55fr] gap-8 items-center p-6 md:p-8">
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/bishop-george-mbendera-6a4cf85bc8712.png"
                  alt="Bishop George Enock Mbendera Events"
                  className="rounded-card w-full aspect-[4/3] object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="eyebrow">Apostolic Crusades &amp; Tours</span>
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-3">
                  Gathering for Revival Across Malawi
                </h2>
                <p className="text-soft text-base leading-relaxed mb-4">
                  Join Bishop George Enock Mbendera and the Cross Victory Ministries team for nights of worship, healing prayer, and transformative preaching in cities and towns across the nation.
                </p>
                <a href="#rsvp" className="btn-solid text-xs py-2.5 px-5">
                  Request Event Details
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Events Grid / Schedule ---------- */}
      <section id="schedule" className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="eyebrow">Upcoming Schedule</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                Ministry Event Calendar
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministryEvents.map((evt, idx) => (
              <Reveal key={idx} delay={(idx % 3) as 0 | 1 | 2}>
                <div className="bg-paper border border-line rounded-card p-7 card-lift flex flex-col justify-between h-full shadow-soft">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-crimson/10 text-crimson font-display font-semibold text-sm">
                        {evt.date}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                        Live Event
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                      {evt.venue}
                    </h3>
                    <p className="text-soft text-sm font-medium mb-6">
                      {evt.location}
                    </p>
                  </div>
                  <a
                    href="#rsvp"
                    className="btn-ghost text-xs text-center py-2.5 px-4 w-full block"
                  >
                    {evt.rsvpLabel}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Details / Plan Visit Section ---------- */}
      <section className="section section-alt">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 shadow-soft text-center">
              <p className="eyebrow">Planning Your Visit</p>
              <h2 className="font-display text-3xl font-semibold text-ink mb-3">
                Details
              </h2>
              <p className="text-soft text-base max-w-2xl mx-auto mb-6 leading-relaxed">
                Find guidance on arrival times, seating, dress, parking, and local travel so you can focus fully on worship and the Word.
              </p>
              <a href="#rsvp" className="btn-solid">
                Plan visit
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Event RSVP Form Section ---------- */}
      <section id="rsvp" className="section">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="bg-paper border border-line rounded-card p-8 md:p-12 shadow-soft">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <p className="eyebrow">Connect With Us</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink mb-3">
                  Event RSVP
                </h2>
                <p className="text-soft text-base leading-relaxed">
                  Share your attendance plans or invite Bishop Mbendera’s team to minister with music and the Word at your gathering.
                </p>
              </div>

              <form className="space-y-4 max-w-lg mx-auto" action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain">
                <div>
                  <label className="block text-xs font-semibold text-ink mb-1">
                    Name
                  </label>
                  <input
                    type="text"
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
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-cream border border-line rounded-lg px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold"
                  />
                </div>
                <button type="submit" className="btn-solid w-full text-center">
                  Send
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
