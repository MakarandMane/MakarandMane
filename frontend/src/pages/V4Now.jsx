import { Link } from "react-router-dom";
import V4Layout from "@/components/V4Layout";
import { NOW, USING, READING } from "@/data/siteData";

export default function V4Now() {
  return (
    <V4Layout title="Now — Makarand Mane">
      <section className="v4-section" data-testid="now-page">
        <p className="v4-page-kicker">Now</p>
        <h2 className="v4-h1">What I&rsquo;m doing this month.</h2>
        <p className="v4-now-meta">
          <b>As of {NOW.asOf}</b> · Last updated {NOW.lastUpdated}
        </p>
        <p className="v4-lead">
          This is a <a className="v4-link" href="https://nownownow.com/about" target="_blank" rel="noreferrer">/now page</a> — an honest snapshot of what
          I&rsquo;m focused on right now. Not a long-running bio. It changes every month or so.
        </p>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section" data-testid="now-working-on">
        <p className="v4-section-label">Working on</p>
        <h3 className="v4-h2">The three things on my plate</h3>
        {NOW.workingOn.map((w, i) => (
          <div className="v4-now-block" key={i}>
            <h4 className="v4-now-title">{w.title}</h4>
            <p>{w.body}</p>
          </div>
        ))}
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Currently learning / re-reading</p>
        <p>{NOW.learning}</p>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Away from work</p>
        <p>{NOW.awayFromWork}</p>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Tools I&rsquo;m using these days</p>
        <ul className="v4-inline" data-testid="now-using">
          {USING.map((u) => <li key={u}>{u}</li>)}
        </ul>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Reading shelf</p>
        <ul className="v4-reading" data-testid="now-reading">
          {READING.map((b, i) => (
            <li key={i}>
              <span className="v4-reading-title">{b.title}</span>
              <span className="v4-reading-author">{b.author}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="v4-footer">
        <span>© 2026 Makarand Mane</span>
        <span className="dot">·</span>
        <Link to="/">Home</Link>
        <span className="dot">·</span>
        <Link to="/work">Work</Link>
        <span className="dot">·</span>
        <Link to="/speaking">Speaking</Link>
      </footer>
    </V4Layout>
  );
}
