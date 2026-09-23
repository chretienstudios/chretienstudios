import Nav from "@/components/Nav";
import { Wordmark } from "@/components/Nav";
import Poster from "@/components/Poster";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { HERO_POSTERS, PROCESS, SERVICES, SHOWCASE, SITE, TICKER } from "@/lib/content";

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
        {/* HERO */}
        <section className="hero">
          <div className="hero-lights" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-stage" aria-hidden="true">
            {HERO_POSTERS.map((p) => (
              <Poster key={p.className} {...p} />
            ))}
          </div>

          <div className="hero-copy">
            <h1>
              <span className="h1-white">Brands built for</span>
              <span className="h1-pink">Matchday</span>
            </h1>
            <p className="hero-sub">
              Brand identity and matchday graphics for sports clubs and agencies that want to look as
              good as they play.
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

        {/* TICKER */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
              <span key={i}>
                {t}
                <i />
              </span>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section id="services" className="section">
          <Reveal>
            <h2 className="section-title">
              Elevating <span className="u-wrap">your club<Scribble /></span>
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
                  <p className="service-inc">Includes:</p>
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

        {/* SHOWCASE */}
        <section id="work" className="section section-dark">
          <Reveal>
            <div className="section-head">
              <h2 className="section-title">
                Built for <span className="u-wrap">the crowd<Scribble /></span>
              </h2>
              <p className="section-note">
                Sample matchday concepts. Every club gets a bespoke system, not a template.
              </p>
            </div>
          </Reveal>

          <div className="showcase">
            {SHOWCASE.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 100} className={p.tall ? "tall" : ""}>
                <Poster {...p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section">
          <Reveal>
            <h2 className="section-title">
              How we <span className="u-wrap">work<Scribble /></span>
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
          <div className="contact-glow" aria-hidden="true" />
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
                  Tell us about your club or roster and we&apos;ll come back with ideas, not a sales
                  pitch.
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
