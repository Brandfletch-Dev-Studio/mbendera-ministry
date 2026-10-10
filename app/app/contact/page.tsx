import Reveal from "@/components/Reveal";
import BookingForm from "./BookingForm";

export const metadata = {
  title: "Contact",
  description:
    "Reach out for bookings, prayer support, ministry invitations, and partnership with Bishop George Mbendera.",
};

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC9C1Ek1nT3h5PjC6CMAkEEQ",
    handle: "Bishop George Mbendera YouTube",
  },
  {
    name: "Linktree",
    url: "https://linktr.ee/georgembendera",
    handle: "georgembendera",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/georgembendera",
    handle: "George Mbendera Official",
  },
  {
    name: "Bandcamp",
    url: "https://georgembendera.bandcamp.com",
    handle: "georgembendera.bandcamp.com",
  },
  {
    name: "SoundCloud",
    url: "https://m.soundcloud.com/georgembendera",
    handle: "georgembendera",
  },
  {
    name: "Reverbnation",
    url: "https://www.reverbnation.com/georgembendera",
    handle: "georgembendera",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/geor.gem505",
    handle: "@geor.gem505",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Bishop</h1>
          <p>
            Reach out for bookings, prayer support, ministry invitations, and
            partnership with Bishop George Mbendera.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12">
          {/* Left Column: Contacts, Links & Office Info */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <span className="eyebrow">LINKS:</span>
                <h2 className="font-display font-semibold text-3xl text-ink mb-4">
                  Contacts &amp; Links.
                </h2>
                <p className="text-soft text-sm leading-relaxed mb-6">
                  Connect with Bishop George Enock Mbendera across music, sermon,
                  and ministry channels online.
                </p>

                <div className="bg-paper border border-line rounded-card p-6 shadow-sm space-y-3">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-cream transition group"
                    >
                      <span className="font-display font-semibold text-ink text-sm group-hover:text-crimson transition">
                        {link.name}
                      </span>
                      <span className="text-xs text-soft font-mono group-hover:text-gold transition">
                        {link.handle} ↗
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Visit Us & Hours */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-paper border border-line rounded-card p-6">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-1">
                    Visit us
                  </span>
                  <h3 className="font-display font-semibold text-lg text-ink">
                    Blantyre, Malawi
                  </h3>
                  <p className="text-soft text-xs mt-1">
                    Cross Victory Ministries Headquarters
                  </p>
                </div>

                <div className="bg-paper border border-line rounded-card p-6">
                  <span className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-gold block mb-1">
                    Hours
                  </span>
                  <h3 className="font-display font-semibold text-lg text-ink">
                    Blantyre office, Mon–Fri
                  </h3>
                  <p className="text-soft text-xs mt-1">9:00 AM – 5:00 PM CAT</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Booking Enquiries Form */}
          <Reveal delay={1}>
            <div className="bg-paper border border-line rounded-card p-8 md:p-10 shadow-soft">
              <span className="eyebrow">Booking Enquiries</span>
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink mb-3">
                Send a Message
              </h2>
              <p className="text-soft text-sm leading-relaxed mb-6">
                Share your booking details, partnership ideas, or questions, and
                our ministry team in Blantyre will respond promptly.
              </p>

              <BookingForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section section-alt">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <Reveal>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="eyebrow">Newsletter</p>
              <h2 className="font-display font-semibold text-3xl text-ink">
                Stay Connected with Cross Victory
              </h2>
              <p className="text-soft text-sm">
                Receive ministry updates, event alerts, and new worship music.
              </p>

              <form
                action="mailto:hello@georgeenockmbendera.site" method="post" encType="text/plain"
                className="flex flex-col sm:flex-row gap-3 pt-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Type your email…"
                  className="px-4 py-3 rounded-xl border border-line bg-cream text-ink text-sm flex-1 focus:outline-none focus:border-gold"
                  required
                />
                <button type="submit" className="btn-solid text-sm py-3 px-6 shrink-0">
                  Subscribe
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
