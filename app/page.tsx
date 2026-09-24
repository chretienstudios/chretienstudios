import Nav from "@/components/Nav";
import { Wordmark } from "@/components/Nav";
import Poster from "@/components/Poster";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import {
  ABOUT,
  CLIENTS,
  PROCESS,
  SERVICES,
  SHOWCASE,
  SITE,
  SOUND_FAMILIAR,
  STAT,
  TESTIMONIALS,
  WHY,
} from "@/lib/content";

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

          <div className="showcase">
            {SHOWCASE.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100} className={p.cls ?? ""}>
                <Poster {...p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section id="why" className="section">
          <Reveal>
            <h2 className="section-title">
              Why <span className="u-wrap">clubs choose us<Scribble /></span>
            </h2>
          </Reveal>
          <div className="why">
            {WHY.map((w, i) => (
              <Reveal key={w.n} delay={i * 90}>
                <div className="why-item">
                  <span className="why-n">{w.n}</span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="stat">
              <span className="stat-num">{STAT.number}</span>
              <p>
                {STAT.label}
                <small>{STAT.who}</small>
              </p>
            </div>
          </Reveal>
        </section>

        {/* ABOUT: add a photo by setting SITE.photo in lib/content.ts */}
        <section id="about" className="section about">
          <div className="about-grid">
            <Reveal>
              <div className="about-copy">
                <p className="about-eyebrow">About</p>
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
                      <strong>{c.title}</strong>
                      <span>{c.school}</span>
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

        {/* PROCESS */}
        <section id="process" className="section">
          <Reveal>
            <h2 className="section-title">
              How it <span className="u-wrap">works<Scribble /></span>
            </h2>
          </Reveal>
          <ol className="process">
            {PROCESS.map((p, i) => (
              <li key={p.n}>
                <Reveal delay={i * 90}>
                  <span className="process-n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
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
