import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "About Bishop George Mbendera",
  description:
    "Explore Bishop George Mbendera’s journey of calling and music from Blantyre to global ministry.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Biography &amp; Calling</p>
          <h1>About Bishop George Mbendera.</h1>
          <p>
            Explore Bishop George Mbendera’s journey of calling and music from
            Blantyre to global ministry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="mx-auto max-w-6xl px-6 space-y-16">
          {/* Top Intro Section with Image */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="eyebrow">Overview</span>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">
                  Faith. Purpose. Music. Culture.
                </h2>
                <div className="prose-page">
                  <p>
                    George Mbendera is a Malawian Christian musician, pastor, and
                    author whose life and work have been shaped by faith,
                    family, culture, and a deep love for music.
                  </p>
                  <p>
                    Born in Blantyre, Malawi , George’s musical journey grew out of
                    a rich cultural and Christian environment. From an early age,
                    he was exposed to both traditional and contemporary musical
                    influences, as well as the worship and musical traditions of
                    the church. These experiences became part of the foundation
                    from which his own musical voice would develop.
                  </p>
                  <p>
                    Today, George brings together Christian faith, musical
                    expression, cultural heritage, and ministry , seeking to
                    create work that speaks not only to the ears but also to the
                    heart and spirit.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="bg-paper border border-line rounded-card p-4 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/bishop-george-mbendera-6a4cf85bae24f.png"
                    alt="Bishop George Mbendera"
                    loading="lazy"
                    className="w-full h-auto rounded-xl object-cover"
                  />
                  <p className="text-xs text-soft text-center mt-3 font-medium">
                    Bishop George Enock Mbendera — Musician, Pastor &amp; Author
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Structured Biography Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-4">
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  My Story
                </h2>
                <div className="prose-page">
                  <p>
                    Music has been part of George’s life through both family and
                    faith.
                  </p>
                  <p>
                    Growing up in Malawi provided an important cultural foundation
                    for his understanding of music. Traditional sounds, family
                    influences, church music, and contemporary musical
                    expressions all contributed to the way he came to understand
                    the power of music.
                  </p>
                  <p>
                    The influence of the Anglican Church also played an important
                    role in his musical formation. Through the church, music
                    became more than an artistic activity—it became connected to
                    worship, Scripture, community, and spiritual life.
                  </p>
                  <p>
                    These different influences continue to shape George’s
                    approach today. His music reflects a meeting point between
                    tradition and contemporary expression, culture and
                    Christian faith, artistry and ministry .
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-paper border border-line rounded-card p-8 space-y-4">
                  <h2 className="font-display font-semibold text-2xl text-ink">
                    Music as Ministry
                  </h2>
                  <div className="prose-page text-sm">
                    <p>For George, music is more than entertainment.</p>
                    <p>
                      It is a means of communication—a way to express faith, tell
                      stories, encourage people, and create space for reflection.
                    </p>
                    <p>
                      His music draws from Christian and classical influences
                      while remaining connected to the cultural environment from
                      which he comes. Through songs and musical projects, he
                      seeks to communicate themes of faith, hope, love, struggle,
                      healing, worship, and the human experience of walking with
                      God .
                    </p>
                    <p>
                      At the centre of this journey is a simple conviction: music
                      can touch places that words alone sometimes cannot reach.
                    </p>
                  </div>
                </div>

                <div className="bg-paper border border-line rounded-card p-8 space-y-4">
                  <h2 className="font-display font-semibold text-2xl text-ink">
                    A Calling to Ministry.
                  </h2>
                  <div className="prose-page text-sm">
                    <p>
                      Alongside his work as a musician, George serves as a pastor
                      and Christian author .
                    </p>
                    <p>
                      His pastoral ministry and his music are not separate parts
                      of his life. They are expressions of the same desire—to
                      communicate the Christian faith, encourage people in their
                      journey with God, and bring biblical truth into the
                      realities of everyday life.
                    </p>
                    <p>
                      Through preaching, teaching, writing, music, and personal
                      ministry, George seeks to create spaces where people can
                      think deeply about faith, find encouragement, and discover
                      hope.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-4">
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  Serving Beyond My Own Music
                </h2>
                <div className="prose-page">
                  <p>
                    George’s contribution to music also extends beyond his own
                    artistic work.
                  </p>
                  <p>
                    He has served as Vice Chairman of the Musicians Union of
                    Malawi , contributing to the wider music community and taking
                    part in efforts connected to the interests and development of
                    musicians in Malawi.
                  </p>
                  <p>
                    This experience has broadened his perspective on music—not
                    simply as a personal creative pursuit, but also as a
                    profession, a cultural expression, and an important part of
                    society.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-4">
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  My Creative Vision
                </h2>
                <div className="prose-page">
                  <p>
                    George’s work sits at the intersection of several worlds:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 my-4 text-soft text-[16.5px]">
                    <li>Faith and culture.</li>
                    <li>Tradition and contemporary music.</li>
                    <li>Ministry and artistry.</li>
                    <li>Personal experience and shared human stories.</li>
                  </ul>
                  <p>
                    Rather than being confined to one musical expression, his
                    creative journey continues to explore how different
                    influences can come together while remaining rooted in
                    Christian faith.
                  </p>
                  <p>
                    The goal is not simply to produce music, but to create
                    something meaningful—music that can accompany people through
                    worship, reflection, difficult seasons, moments of
                    gratitude, and the ordinary experiences of life.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-4">
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  The Journey Continues
                </h2>
                <div className="prose-page">
                  <p>George Mbendera’s story is still being written.</p>
                  <p>
                    As a musician, pastor, author, and servant of the wider
                    community, he continues to explore the relationship between
                    faith, music, culture, and purpose .
                  </p>
                  <p>
                    His hope is that the work he creates will leave people
                    encouraged, challenged, comforted, and inspired to look
                    beyond themselves toward God.
                  </p>
                  <blockquote className="my-6">
                    <p className="not-italic font-display font-semibold text-lg text-ink">
                      This is the journey.
                      <br />
                      This is the music.
                      <br />
                      This is the ministry.
                    </p>
                  </blockquote>
                </div>
              </div>
            </Reveal>

            {/* Comprehensive First-Person Narrative */}
            <Reveal>
              <div className="bg-paper border-2 border-line rounded-card p-8 md:p-12 space-y-6 shadow-soft">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/bishop-george-mbendera-6a5e8138e831a.png"
                    alt="Bishop George Mbendera portrait"
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover border border-gold"
                  />
                  <div>
                    <span className="eyebrow mb-0">Personal Account</span>
                    <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                      MY STORY:
                    </h2>
                  </div>
                </div>

                <div className="prose-page leading-relaxed space-y-4">
                  <p>
                    I was born from a Muslim mother and in a predominantly Muslim
                    and Traditional society. My father was a Catholic and a
                    government agent (CID), in my area. But I grew up in the Church
                    of England before starting a full- time ministry (Cross
                    Victory).
                  </p>
                  <p>
                    I never knew that one time I would become a professional music
                    artist. Even so, the other fact is that my family had a
                    musical background in that my mother used to sing political
                    songs for one of the ministers who parted ways with Dr.
                    Kamudzu Banda- the first president of Malawi. This happened
                    after the 1964 Cabinet Crises. One of the ministers then, Dr.
                    Masauko Chipembere, was from my area and my mother was singing
                    political songs for him. Her brother, my uncle, who learned
                    driving in the second World War, was one of his two drivers.
                    Later, Dr. Masauko Chipembere went into exile to the USA and
                    died there. In the latter years, my mother started singing
                    political songs for Dr. Kamudzu Banda. She was leading songs
                    for women from my district, Mangochi, formerly known as Fort
                    Johnston. If you can come across songs by Kamudzu’s women,
                    officially known as mbumba, from Mangochi district, most of the
                    songs you will hear were composed and led by my mother like
                    “Walira Koto” which means the hard or deep cry( but referring to
                    fallen politicians- the president’s opponents). It was one of
                    the songs that the president liked and few of the songs that
                    he sang along during political rallies and his official
                    visits within Malawi. My mother was a great singer.
                  </p>
                  <p>That’s part of my family’s background in music.</p>

                  <h3 className="text-xl font-display font-semibold text-ink pt-4">
                    My Journey In Music Continues.
                  </h3>
                  <p>
                    On the other hand, my family had also a background of
                    traditional music.
                  </p>
                  <p>
                    My mother was a daughter to a village headman of our village-
                    Makwinja. Makwinja was a son of group- village headman
                    Chindamba, the first traditional head of our area- Malindi.
                    This was the area where Dr David Livingstone described as
                    having arrived at a place where the mountains come very close
                    to the lake- on his last missionary trip coming from
                    Mozambique and passing through the Southern coastal area of
                    Malawi- someone wrote.
                  </p>
                  <p>
                    When he arrived in my area, he met my great grandfather-
                    Chindamba- the father to my grandfather- Makwinja and he was a
                    Muslim.
                  </p>

                  <p>
                    I am talking about my traditional background.
                  </p>
                  <p>
                    Dr David Livingstone conducted a Sermon and my great
                    grandfather, Chindamba, attended with his counselors but he
                    never got converted to Christianity but one of his subjects and
                    I am a pastor- of the fourth generation from him and that event-
                    the traditional part.
                  </p>

                  <blockquote>
                    In a letter to Arthur Tidman of the London Missionary
                    Society, David wrote:
                    <br />
                    <em>
                      “I hope to be able to work as long as I live beyond other
                      men’s line of things, and plant the seed of the gospel where
                      others have not planted.”
                    </em>
                  </blockquote>

                  <p>
                    My great grandfather never got converted after his Sermon but
                    his great grandchild is the pastor-me today. I want the world
                    to know this but I am talking about my journey in music and in
                    reference to my family’s traditional -music background.
                  </p>
                  <p>
                    The boulder he used during that sermon is embedded into the
                    western wall of the St. Martins Anglican Church in my area. In
                    fact, he was my great grandfather, Chindamba, who sold the
                    entire area that the Anglican missionaries occupied in my area
                    and built a college, now St. Michael’s girls secondary school,
                    built a hospital, primarily school and other infrastructures
                    followed in latter years. So he sold the land to the Anglican
                    missionaries between £2-3 in the late 19th century.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-ink pt-4">
                    Traditional Roots &amp; Musical Genres
                  </h3>
                  <p>
                    Because of that traditional background, many traditional
                    activities in my village took and still, take place right in our
                    compound. One of the identities of these activities is
                    traditional music- done in Yao.
                  </p>
                  <p>
                    Makwinja, my grandfather, conducted boys initiation ceremonies
                    and his wife, my grandmother, conducted girls initiation
                    ceremonies and Litiwo- for pregnant women. When she conducted
                    Litiwo, I was set apart to tie beads around the necks of
                    pregnant women during that special ceremony as all men were
                    told to stay away from our home.
                  </p>
                  <p>
                    In both the jando-boys initiation; Nzondo- girls initiation and
                    Litiwo-a ceremony for pregnant women, one of the main
                    components added was great singing- with drums, sticks but
                    also, a cappella and clapping of hands.
                  </p>
                  <p>
                    You can imagine my music background. It’s unique; combining a
                    number of layers into what I am today.
                  </p>
                  <p>
                    I did observe that if guitars and drums plus trumpets were
                    added to the songs sung during the boys -initiation ceremonies,
                    for the Yaos, the exact genre that could come up or be
                    produced, would be Reggae.
                  </p>
                  <p>
                    So from the beginning, within and towards the end of these
                    ceremonies, singing or music is the main component or identity-
                    well composed songs and backed up with traditional
                    instruments and sometimes, the clapping of hands and dancing.
                    During the boys ceremony- Jando- they normally use ngwasala.
                    Young boys line up with dry sticks and striking a long dry
                    bamboo. So the sound of the sticks backed up by the drum-
                    beating and the beautiful singing go along exactly like Reggae
                    rhythm.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-ink pt-4">
                    Early Musical Influences
                  </h3>
                  <p>
                    On the other hand, many men in our district used to travel and
                    work in South Africa. When they came back, some brought back
                    Sound boxes to play vinyl records and many of the songs in the
                    vinyls were from East Africa and Zimbabwe. The popular genre
                    from East Africa was -Kanindo. A type of music named after the
                    popular Kenyan musician and producer- Oluoch Kanindo- who
                    happens to be it’s founder before it was done by local
                    artists. So my community was full of such musical activities
                    -music from East Africa and Zimbabwe. I still remember some
                    Artists, songs, stanzas and choruses of popular songs of those
                    days- in the 70s. We also used to sing along these songs. Some
                    of those still in my memory are:
                  </p>
                  <p>
                    Tabu Ley with his Afrisa International but also, songs by some
                    of the band’s individual members like Sam Mangwana, Mbilia Bel
                    and Lokassa Ya Mbongo.
                  </p>
                  <p>
                    Les Wanyika- formed in 1978 by Rashid Juma, Omari Shabani,
                    Tommy Malanga, Sijali Salum Zuwa, and Phoney Mkwanyule (based in
                    Nairobi, Kenya) had beautiful songs I liked especially, Sina
                    Makosa and Kajituliza Kwake Kasuku.
                  </p>
                  <p>
                    I also liked the Afro – Rhumba classic songs by Orchestra Super
                    Mazembe. It was originally from Zaire( DRC- Congo), under the
                    name Super Vox and later the Orchestra Super Mazembe; not
                    forgetting Franco Luambo Makiadi but also, the Maroon Commandos.
                  </p>
                  <p>
                    I also loved songs by Boney M, The Israel Vibration, Don
                    Carlos, Eric Donaldson, Bunny Wailer, Culture, Alpha Blondy,
                    Jim Reeves, Dolly Parton, Steve Kekana of South Africa and
                    Chitsitsimutso Choir RCZ Kamwala, Lusaka, Zambia.
                  </p>

                  <h3 className="text-xl font-display font-semibold text-ink pt-4">
                    Spiritual Path &amp; Ministry Life
                  </h3>
                  <p>
                    Lastly, being born from a Muslim mother and my father being a
                    Catholic, by our tradition, I was to follow the religion of my
                    father- Christianity. In those days, there was no Catholic
                    Church in my area. The biggest and most prominent denomination
                    was the Anglican Church brought along by the U.M.C.A
                    missionaries. So my mother sent me to the Anglican Church and
                    some elderly Anglican women helped me in my Christian life.
                  </p>
                  <p>
                    It was my joining of the Anglican Church that moulded my
                    Christian music as I sung in the youth group up to being a
                    choir master- when I moved from my home district- Mangochi or
                    Fort Johnston- to Blantyre, Malawi’s commercial city.
                  </p>
                  <p>
                    From here, I begun my professional music journey where I later
                    travelled to Johannesburg, South Africa, to record my second
                    album. When I came back home, I became the vice chairman of
                    Musicians Association of Malawi, for the Southern chapter and
                    putting together that organisation until it’s now called the
                    Musicians Union Of Malawi.
                  </p>
                  <p>
                    Apart from music, I am also a full- time Pastor- Cross Victory
                    Church and a Christian Author. I am also a former retail-
                    branch manager.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Discography Section */}
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <span className="eyebrow">Music Catalogue</span>
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  DISCOGRAPHY:
                </h2>
                <div className="prose-page">
                  <p>
                    I have recorded 4 music albums to my credit. The first one
                    with my first band, The Zion Ambassadors, titled-{" "}
                    <strong>We Wanna Go To Zion</strong>. It has songs like
                    Messiah’s Come, We Wanna Go To Zion, Refugee Repatriation, Let
                    Young men rule, Nepotism, Konzani Moyo and more.
                  </p>
                  <p>
                    The second one was recorded in South Africa titled-{" "}
                    <strong>Khale</strong>. It has popular songs like Lord Bless
                    Africa, Kajuni, Khale, Destruction of Sodom, Man Today and
                    other songs.
                  </p>
                  <p>
                    The fourth is <strong>Jerusalem</strong> with songs like, I
                    Will Praise The Lord, Jerusalem, I Want To be With You, Never
                    Be Afraid, Ndisaiwale Za Chikondi Chanu and some more.
                  </p>
                  <p>
                    The latest one is- <strong>Winner</strong>. It has the
                    following tracks: Mukafika, Winners, Are you Ready, Yana
                    Katema, What The Lord Has Done, Lord Bless Africa, Vol.11 and
                    other songs.
                  </p>
                  <p>
                    I have also recorded two Christian classical songs recently-{" "}
                    <strong>My Destiny</strong> (featuring Michael, my son) and
                    the other was released as its Instrumental.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Lyric Sheet Section */}
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <span className="eyebrow">Song Lyrics</span>
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  LYRICSHEET: LORD BLESS AFRICA, Vol.1
                </h2>
                <div className="prose-page font-mono text-sm leading-relaxed bg-cream p-6 rounded-xl border border-line space-y-4">
                  <p>
                    (1) They Shall Break Spears Into Pruning Hooks And Their
                    Swords Into Plow-shares.
                    <br />
                    Nation Shall Lift Not A Sword Against A Nation; Neither Shall
                    They Learn War Any More.
                    <br />
                    But Princely Rule Shall Reign To The Abundance.
                    <br />– And To Peace- There Shall Be No End.
                  </p>
                  <p className="font-semibold text-crimson">
                    Chorus:
                    <br />
                    Lord Bless Africa.
                    <br />– Africa
                    <br />
                    Lord Bless Africa.
                    <br />
                    Our Home Africa.
                    <br />
                    Our Land Africa.
                  </p>
                  <p>
                    (2). When Our Lord JESUS CHRIST, Saw That The Anger Was Set
                    Ablaze. He Was King Herod. He Then Found A Refugee In
                    Africa- Oooh- In Africa; Black People(s) No Longer A Paradise.
                    Lord I Pray, Set Free -Africa. From This Tribal War Zone.
                  </p>
                  <p>
                    (3). Massive Abuse, Human Rights, Persists In Africa- Oooh-
                    In Africa. Global Refugee Crises Hunger In Africa- Are
                    Inextricably linked. Tyrant People Terrify The Continent- Fond
                    (Of) Extrajudicial execution, torture (and) tribalism. But
                    People Cry For Liberty, Equality, Imprtiality- Still We
                    Struggle For Peace And Harmony- oooh.
                    <br />
                    Lord I Pray, Set Free- Africa- From This Tribal War Zone.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Summary Highlights */}
            <Reveal>
              <div className="bg-paper border border-line rounded-card p-8 md:p-10 space-y-6">
                <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">
                  St. Martins Anglican Church Where George’s Spiritual Journey Began.
                </h2>
                <div className="prose-page">
                  <p>
                    George Mbendera remains a voice in the realm of Christian,
                    African music and ministry. He draws his music from a rich
                    tapestry of cultural and familial heritage steeped in both
                    Christian and African traditional plus contemporary musical
                    influences. Born amidst the complex socio-religious
                    landscape of Mangochi, Malawi, George’s journey in music
                    reflects a deep-seated passion for emotional and spiritual
                    expression. His background is colored by his mother’s
                    engaging in traditional and political music but also, his
                    engagement with Anglican church music. George interlaces his
                    musical journey with his pastoral vocation.
                  </p>
                  <p>
                    His work is a testament to his belief in music’s
                    transformative power, offering a sanctuary of faith and
                    healing through his art. George’s contributions as a former
                    vice chairman at the Musicians Association Of Malawi( South)
                    further underscore his commitment to enriching and evolving
                    the musical ethos of his country. As a full-time pastor and
                    Christian author, George Mbendera continues to inspire and
                    uplift through each note and lyric, reaching hearts beyond
                    borders with his harmonious blend of Christian and Classical
                    genres.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mt-6">
                    <div className="p-4 rounded-xl bg-cream border border-line">
                      <h4 className="font-display font-semibold text-ink text-sm">
                        Retail Branch Manager
                      </h4>
                      <p className="text-soft text-xs mt-1">
                        Former Retail Branch Manager with professional leadership
                        experience.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-cream border border-line">
                      <h4 className="font-display font-semibold text-ink text-sm">
                        Music Artist &amp; Union Leader
                      </h4>
                      <p className="text-soft text-xs mt-1">
                        Former vice chair of Musicians Association Of Malawi
                        (Southern chapter).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-cream border border-line">
                      <h4 className="font-display font-semibold text-ink text-sm">
                        Media &amp; Radio Ministry
                      </h4>
                      <p className="text-soft text-xs mt-1">
                        Former board member of Litala FM (a FEBA affiliated Radio
                        ministry).
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-cream border border-line">
                      <h4 className="font-display font-semibold text-ink text-sm">
                        Community &amp; Author
                      </h4>
                      <p className="text-soft text-xs mt-1">
                        Chairperson of Community Policing in my area; Author of
                        YOUR HOPE IS NOT LOST.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Navigation Footer Link */}
      <section className="section section-alt text-center">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="font-display font-semibold text-3xl text-ink mb-4">
              Enjoy The Journey With Bishop George Mbendera.
            </h2>
            <p className="text-soft text-base max-w-2xl mx-auto mb-8">
              From his early years in Blantyre, Bishop George Mbendera has used
              music, preaching, and pastoral care to draw people closer to
              Christ.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/ministry" className="btn-solid">
                Explore Ministry
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
