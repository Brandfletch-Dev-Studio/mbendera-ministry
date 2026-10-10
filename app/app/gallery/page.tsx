import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Gallery",
  description:
    "Photo gallery of Bishop George Enock Mbendera, Cross Victory Ministries, worship services, and community ministry in Blantyre, Malawi.",
};

const galleryImages = [
  {
    src: "/assets/bishop-hero.png",
    alt: "Bishop George Enock Mbendera",
    caption: "Bishop George Enock Mbendera",
  },
  {
    src: "/assets/bishop-george-mbendera-6a4cf85bae24f.png",
    alt: "Bishop George Mbendera Ministry",
    caption: "Ministry Leadership in Blantyre",
  },
  {
    src: "/assets/bishop-george-mbendera-6a4cf85bc8712.png",
    alt: "Bishop George Mbendera Worship",
    caption: "Worship & Praise",
  },
  {
    src: "/assets/bishop-george-mbendera-6a5e8138e831a.png",
    alt: "Bishop George Mbendera Preaching",
    caption: "Proclaiming the Word",
  },
  {
    src: "/assets/1000136847.jpg",
    alt: "Cross Victory Gathering",
    caption: "Church Fellowship",
  },
  {
    src: "/assets/1000146286-2.jpg",
    alt: "Ministry Moments",
    caption: "Ministry Outreach",
  },
  {
    src: "/assets/1000174117.jpg",
    alt: "Worship Service",
    caption: "Worship Gathering",
  },
  {
    src: "/assets/1000174117-1.jpg",
    alt: "Community Prayer",
    caption: "Prayer & Fellowship",
  },
  {
    src: "/assets/1000196661.jpg",
    alt: "Cross Victory Worship",
    caption: "Songs of Victory",
  },
  {
    src: "/assets/1000207601-1.jpg",
    alt: "Ministry Community",
    caption: "Church Community",
  },
  {
    src: "/assets/1000216997.jpg",
    alt: "Prayer Service",
    caption: "United in Prayer",
  },
  {
    src: "/assets/1000222077.jpg",
    alt: "Fellowship Moment",
    caption: "Fellowship & Joy",
  },
  {
    src: "/assets/1000222085.jpg",
    alt: "Blantyre Ministry",
    caption: "Blantyre Gathering",
  },
  {
    src: "/assets/1000222850-2.jpg",
    alt: "Teaching Session",
    caption: "Biblical Teaching",
  },
  {
    src: "/assets/1000236198-1.jpg",
    alt: "Ministry Service",
    caption: "Sunday Service",
  },
  {
    src: "/assets/1000239521-683x1024.jpg",
    alt: "Pastoral Ministry",
    caption: "Pastoral Care",
  },
  {
    src: "/assets/1000245646.jpg",
    alt: "Worship & Praise",
    caption: "Courts of Praise",
  },
  {
    src: "/assets/1000249784-581x1024.jpg",
    alt: "Leadership & Preaching",
    caption: "Apostolic Preaching",
  },
  {
    src: "/assets/1000332370-819x1024.jpg",
    alt: "Bishop George Mbendera Portrait",
    caption: "Bishop George Mbendera",
  },
  {
    src: "/assets/1000334686.jpg",
    alt: "Cross Victory Celebration",
    caption: "Celebration in Christ",
  },
];

export default function GalleryPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Cross Victory Ministries</p>
          <h1>Gallery</h1>
          <p>
            Moments of worship, ministry, preaching, and fellowship with Bishop
            George Enock Mbendera in Blantyre, Malawi and beyond.
          </p>
        </div>
      </section>

      {/* Masonry Image Grid Section */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="eyebrow">Ministry Life in Photos</p>
            <h2 className="h-display text-3xl md:text-4xl text-ink mb-10">
              Worship, Word &amp; Community
            </h2>
          </Reveal>

          <div className="columns-2 md:columns-3 gap-4">
            {galleryImages.map((img, idx) => (
              <Reveal key={idx} delay={(idx % 3) as 0 | 1 | 2}>
                <div className="mb-4 break-inside-avoid relative group overflow-hidden rounded-card shadow-soft bg-paper border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto rounded-card object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4 rounded-card">
                    <span className="text-white text-xs font-semibold font-display">
                      {img.caption}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
