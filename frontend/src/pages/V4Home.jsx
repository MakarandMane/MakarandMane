import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight, ArrowRight } from "lucide-react";
import V4Layout from "@/components/V4Layout";
import { FEATURED_POSTS, DISCOVERY_CALL_URL } from "@/data/blogPosts";
import { OUTCOMES, PULL_QUOTE } from "@/data/siteData";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <div className="v4-newsletter" data-testid="newsletter">
      <h3>Get notified when I publish</h3>
      <p>Occasional notes on WordPress, Shopify, and the long game of running a practice. No spam — unsubscribe anytime.</p>
      <form className="v4-newsletter-form" onSubmit={submit}>
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-testid="newsletter-email"
        />
        <button type="submit" data-testid="newsletter-submit">
          Subscribe
        </button>
      </form>
      {sent && <p className="v4-newsletter-success" data-testid="newsletter-success">Thanks! I&rsquo;ll wire this up to a real provider soon — please email me directly until then.</p>}
    </div>
  );
}

export default function V4Home() {
  const tease = OUTCOMES.slice(0, 3);

  return (
    <V4Layout title="Makarand Mane — WordPress & Shopify Developer · Technical Consultant">
      {/* Intro */}
      <section className="v4-section" data-testid="home-intro">
        <p className="v4-page-eyebrow">A practice, not an agency.</p>
        <h2 className="v4-h1">
          I help businesses run <em>reliable</em> WordPress &amp; Shopify websites — without the chaos.
        </h2>
        <p className="v4-lead">
          Hi, I&rsquo;m Makarand. For 15+ years I&rsquo;ve been doing one thing well: building,
          maintaining, and quietly fixing the web infrastructure that growing businesses depend on.
          Most of my clients didn&rsquo;t start with a brief — they started with a broken site, a
          slow store, or a question their previous developer stopped answering.
        </p>
        <p className="v4-lead">
          I work as a <b>productized solo practice</b>: limited clients, long relationships, clean
          code, and an honest second opinion when you need one.
        </p>

        <div className="v4-cta-row">
          <a className="v4-cta-primary" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="home-discovery-cta">
            <Calendar size={15} /> Book a Discovery Call
          </a>
          <Link to="/work" className="v4-cta-ghost">See recent outcomes <ArrowRight size={14} /></Link>
        </div>
        <p className="v4-microcopy">
          30-minute call · No pitch deck · Bring your problem, not a brief.
        </p>
      </section>

      <hr className="v4-rule" />

      {/* Inline pull-quote */}
      <blockquote className="v4-pullquote">
        {PULL_QUOTE.isPlaceholder && <span className="v4-pullquote-placeholder">Placeholder</span>}
        <p className="v4-pullquote-text">&ldquo;{PULL_QUOTE.text}&rdquo;</p>
        <span className="v4-pullquote-attr">— {PULL_QUOTE.attribution}</span>
      </blockquote>

      <hr className="v4-rule" />

      {/* Recent outcomes tease */}
      <section className="v4-section" data-testid="home-outcomes">
        <div className="v4-section-headrow">
          <div>
            <p className="v4-section-label">Recent work</p>
            <h3 className="v4-h2">Outcomes, not screenshots</h3>
          </div>
          <Link to="/work" className="v4-section-link">All outcomes <ArrowUpRight size={13} /></Link>
        </div>
        <div className="v4-outcomes">
          {tease.map((o, i) => (
            <article key={i} className="v4-outcome" data-testid={`outcome-${i}`}>
              <div>
                <p className="v4-outcome-metric">{o.metric}</p>
                <p className="v4-outcome-label">{o.label}</p>
              </div>
              <div>
                <h4 className="v4-outcome-title">{o.title}</h4>
                <p className="v4-outcome-context">{o.context}</p>
                <div className="v4-outcome-tags">
                  <span className="v4-outcome-tag-tech">{o.tag}</span>
                  <span>{o.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="v4-rule" />

      {/* Writing */}
      <section className="v4-section" data-testid="home-writing">
        <div className="v4-section-headrow">
          <div>
            <p className="v4-section-label">Writing</p>
            <h3 className="v4-h2">Latest posts</h3>
          </div>
          <Link to="/writing" className="v4-section-link">All posts <ArrowUpRight size={13} /></Link>
        </div>
        <ol className="v4-essays">
          {FEATURED_POSTS.map((p) => (
            <li key={p.slug}>
              <a href={p.url} target="_blank" rel="noreferrer" className="v4-essay-link">
                <span className="v4-essay-title">{p.title}</span>
                <span className="v4-essay-meta">{p.date} · {p.category}</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <hr className="v4-rule" />

      {/* Final CTA */}
      <section className="v4-section">
        <p className="v4-section-label">Next step</p>
        <h3 className="v4-h2">Let&rsquo;s see if we&rsquo;re a fit.</h3>
        <p>
          If you&rsquo;re running a business that depends on WordPress or Shopify and you&rsquo;d
          like a quiet, capable developer in your corner — book a short call. Worst case you walk
          away with a clearer view of your own setup.
        </p>
        <a className="v4-cta-primary big" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="home-final-cta">
          <Calendar size={16} /> Book a Discovery Call
        </a>
        <p className="v4-microcopy">
          Or write directly: <a href="mailto:makarand@wpgenius.in">makarand@wpgenius.in</a>
        </p>
      </section>

      <Newsletter />

      <footer className="v4-footer">
        <span>© 2026 Makarand Mane</span>
        <span className="dot">·</span>
        <span>Built with care in Kolhapur, India</span>
        <span className="dot">·</span>
        <Link to="/v3">v3</Link>
        <span className="dot">·</span>
        <Link to="/premium">v1 Premium</Link>
        <span className="dot">·</span>
        <Link to="/minimal">v2 Minimal</Link>
      </footer>
    </V4Layout>
  );
}
