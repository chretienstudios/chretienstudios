import Nav from "@/components/Nav";
import { Wordmark } from "@/components/Nav";
import Poster from "@/components/Poster";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  ABOUT,
  CLIENTS,
  PACKAGES,
  SERVICES,
  SITE,
  SOUND_FAMILIAR,
  TESTIMONIALS,
} from "@/lib/content";
import type { Package } from "@/lib/content";

function Scribble() {
  return (
    <svg className="scribble" viewBox="0 0 460 18" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 11 C 60 3, 140 14, 230 8 S 400 4, 457 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main id="top">
        {/* HERO: artwork lives in /public/hero.jpg (+ optional /public/hero-mobile.jpg) */}
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-copy">
            <h1>
              <span className="h1-white">Brands built for</span>
              <span className="h1-pink">Matchday</span>
            </h1>
            <p className="hero-sub">
              Bespoke brand identity and matchday graphics for sports clubs and agencies. Personal,
              fast and flexible.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-pink">
                Start a project
              </a>
              <a href="#work" className="btn btn-ghost">
                See the work
              </a>
            </div>
          </div>
        </section>

        {/* CLIENTS */}
        <Reveal>
          <div className="clients">
            <span className="clients-label">Trusted by</span>
            <div className="marquee">
              <div className="marquee-track">
                {[0, 1].map((copy) => (
                  <ul key={copy} className="marquee-list" aria-hidden={copy === 1}>
                    {CLIENTS.map((c) => (
                      <li key={c} className="clients-name">
                        {c}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* SERVICES */}
        <section id="services" className="section">
          <Reveal>
            <h2 className="section-title">
              What we <span className="u-wrap">do<Scribble /></span>
            </h2>
          </Reveal>

          <div className="services">
            {SERVICES.map((s, i) => (
              <Reveal key={s.top} delay={i * 110}>
                <article className="service">
                  <Poster {...s.poster} className="service-poster" />
                  <h3 className="service-title">
                    <span>{s.top}</span>
                    <em>{s.accent}</em>
                  </h3>
                  <p className="service-lead">{s.lead}</p>
                  <p className="service-body">{s.body}</p>
                  <p className="service-inc">What&apos;s covered</p>
                  <ul>
                    {s.includes.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PACKAGES */}
        <section id="packages" className="section packages">
          <Reveal>
            <div className="section-head">
              <h2 className="section-title">
                Creative <span className="u-wrap">packages<Scribble /></span>
              </h2>
              <p className="section-note pkg-intro">{PACKAGES.intro}</p>
            </div>
          </Reveal>

          <div className="pkg-grid">
            {PACKAGES.clubs.map((p, i) => (
              <Reveal key={p.name} delay={i * 110}>
                <PackageCard p={p} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <figure className="pkg-quote">
              <blockquote>&ldquo;{PACKAGES.quote.text}&rdquo;</blockquote>
              <figcaption>
                <strong>{PACKAGES.quote.name}</strong>
                <span>{PACKAGES.quote.role}</span>
              </figcaption>
            </figure>
          </Reveal>

          <p className="pkg-foot">Not sure which fits? Tell me about your club and I&apos;ll point you to the right one, with a clear quote.</p>
        </section>

        {/* SOUND FAMILIAR */}
        <section className="section sound">
          <Reveal>
            <h2 className="section-title">
              Sound <span className="u-wrap">familiar?<Scribble /></span>
            </h2>
          </Reveal>
          <ul className="sound-list">
            {SOUND_FAMILIAR.map((s, i) => (
              <li key={s}>
                <Reveal delay={i * 100}>
                  <p>{s}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal>
            <div className="sound-cta">
              <p>Then let&apos;s talk.</p>
              <a href="#contact" className="btn btn-pink">
                Start a project
              </a>
            </div>
          </Reveal>
        </section>

        {/* SHOWCASE */}
        <section id="work" className="section section-dark">
          <Reveal>
            <div className="section-head">
              <h2 className="section-title">
                Built for <span className="u-wrap">the crowd<Scribble /></span>
              </h2>
              <p className="section-note">
                Recent work for Cashmere Technical FC. Every club gets a system made for them, not an
                off-the-shelf template.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <figure className="work-banner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/work/cashmere-banner.jpg"
                alt="Cashmere Technical FC creative partnership: matchday graphics, programmes, social posts and sponsorship brochure"
                width={3200}
                height={667}
                loading="lazy"
              />
            </figure>
          </Reveal>
        </section>

        {/* STUDIO (about): add a photo by setting SITE.photo in lib/content.ts */}
        <section id="studio" className="section about">
          <div className="about-grid">
            <Reveal>
              <div className="about-copy">
                <p className="about-eyebrow">Studio</p>
                <h2 className="about-title">
                  <span>Trained in design.</span>
                  <span className="about-pink">Built for sport.</span>
                </h2>
                <p className="about-lead">
                  I&apos;m Max, the designer behind chrétienstudios. My training covers both sides of the
                  job: how a brand should look, and how a sports organisation actually runs.
                </p>
                <ul className="about-creds">
                  {ABOUT.credentials.map((c) => (
                    <li key={c.title}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="cred-logo" src={c.logo} alt="" width={56} height={56} loading="lazy" />
                      <div className="cred-text">
                        <strong>{c.title}</strong>
                        <span>{c.school}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="about-note">
                  When you work with chrétienstudios, you work with me, from first idea to final file.
                </p>
                <a href="#contact" className="btn btn-pink">
                  Start a project
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="about-photo">
                {SITE.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={SITE.photo} alt="Max Chretien, designer and founder of chrétienstudios" />
                ) : null}
              </div>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section section-dark">
          <Reveal>
            <h2 className="section-title">
              In their <span className="u-wrap">words<Scribble /></span>
            </h2>
          </Reveal>
          <div className="quotes">
            {TESTIMONIALS.map((q, i) => (
              <Reveal key={q.name} delay={i * 120}>
                <figure className="quote">
                  <blockquote>{q.quote}</blockquote>
                  <figcaption>
                    <strong>{q.name}</strong>
                    <span>{q.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <Reveal>
            <h2 className="contact-title">
              <span>Let&apos;s own</span>
              <span className="h1-pink">the season</span>
            </h2>
          </Reveal>
          <div className="contact-grid">
            <Reveal>
              <div className="contact-side">
                <p>
                  Tell us about your club or roster and we&apos;ll come back with ideas and a clear quote,
                  not a sales pitch. Partnerships are tailored to your club and season.
                </p>
                <a className="contact-link" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
                <a className="contact-link" href={SITE.instagram} target="_blank" rel="noopener noreferrer">
                  @chretienstudios
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ContactForm />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Wordmark />
        <span>© {new Date().getFullYear()} chrétienstudios. All rights reserved.</span>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </footer>
    </>
  );
}

function PackageCard({ p }: { p: Package }) {
  return (
    <article className={`pkg${p.featured ? " pkg-featured" : ""}`}>
      {p.badge && <span className="pkg-badge">{p.badge}</span>}
      <p className="pkg-kicker">Creative</p>
      <h3 className="pkg-name">{p.name}</h3>
      <p className="pkg-term">{p.term}</p>
      <p className="pkg-blurb">{p.blurb}</p>
      <ul className="pkg-list">
        {p.includes.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
      <a href="#contact" className={`btn ${p.featured ? "btn-pink" : "btn-ink"}`}>
        Enquire
      </a>
    </article>
  );
}
