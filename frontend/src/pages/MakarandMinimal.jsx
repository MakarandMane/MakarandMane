import { useEffect } from "react";
import { ArrowUpRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { FEATURED_POSTS, DISCOVERY_CALL_URL } from "@/data/blogPosts";

/* Minimal, essay-style personal page.
   Inspired by abhaykulkarni.com + vallabhchitnis.com.
   Single column. Plain type. No cards. Honest voice. */

function ExtLink({ href, children }) {
  return (
    <a className="mkm-link" href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
      {href?.startsWith("http") && <ArrowUpRight size={13} strokeWidth={2} className="mkm-arrow" />}
    </a>
  );
}

export default function MakarandMinimal() {
  useEffect(() => {
    document.title = "Makarand Mane — WordPress & Shopify Developer";
  }, []);

  return (
    <main className="mkm-page" data-testid="minimal-page">
      <header className="mkm-top">
        <Link to="/" className="mkm-brand">Makarand Mane</Link>
        <nav className="mkm-topnav">
          <a href="#work">Work</a>
          <a href="#community">Community</a>
          <a href="#writing">Writing</a>
          <Link to="/blog">Blog</Link>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <article className="mkm-wrap">
        {/* Identity */}
        <section className="mkm-hero">
          <img
            className="mkm-avatar"
            src="/images/makarand-hero.jpg"
            alt="Makarand Mane"
            loading="eager"
          />
          <h1 className="mkm-h1">Makarand Mane</h1>
          <p className="mkm-tag">
            WordPress &amp; Shopify Developer · Technical Consultant · Kolhapur, India
          </p>

          <p className="mkm-lead">
            Hi, I&rsquo;m Makarand — a developer and technical consultant. I&rsquo;ve been building
            and maintaining websites since <b>2011</b>. Most of my work sits quietly in the background:
            reliable WordPress and Shopify sites, careful long-term maintenance, and the small
            technical decisions that keep a business&rsquo;s web presence stable.
          </p>

          <p className="mkm-lead">
            I run <ExtLink href="https://wpgenius.in/">WPGenius</ExtLink>, a small studio I&rsquo;ve
            been growing for over a decade. Alongside client work, I contribute to the WordPress
            project — speaking, organizing, and volunteering at meetups and WordCamps in India.
          </p>

          <div className="mkm-cta-row">
            <a className="mkm-cta-primary" href={DISCOVERY_CALL_URL} data-testid="minimal-discovery-cta">
              <Calendar size={14} />
              Book a Discovery Call
            </a>
            <a className="mkm-cta-ghost" href="https://wpgenius.in/" target="_blank" rel="noreferrer">
              Visit WPGenius <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="mkm-muted small" style={{ marginTop: 10 }}>
            30-minute call · No pitch deck · Bring your problem, not a brief.
          </p>
        </section>

        <hr className="mkm-rule" />

        {/* What I Do */}
        <section id="work" className="mkm-section">
          <h2 className="mkm-h2">What I do</h2>

          <div className="mkm-block">
            <h3 className="mkm-h3">WordPress Development &amp; Customization</h3>
            <p>
              Custom WordPress builds, theme work, plugin customization, performance tuning, and
              long-term maintenance. I work with growing businesses that need a developer who&rsquo;ll
              still be around in two years to answer the email.
            </p>
          </div>

          <div className="mkm-block">
            <h3 className="mkm-h3">Shopify Development</h3>
            <p>
              Store setup, theme customization, and storefront refinements for online retailers.
              I focus on clarity, conversion, and stores that don&rsquo;t fall over during a campaign.
            </p>
          </div>

          <div className="mkm-block">
            <h3 className="mkm-h3">Website Maintenance &amp; Technical Support</h3>
            <p>
              Ongoing updates, security hardening, troubleshooting, and dependable support. Most of
              my long-term clients started with a "can you take a look at this?" — and stayed.
            </p>
          </div>

          <div className="mkm-block">
            <h3 className="mkm-h3">Technical Consulting</h3>
            <p>
              Audits, architectural decisions, server/hosting choices, Proxmox setups, and the
              honest second opinion you didn&rsquo;t want but probably needed.
            </p>
          </div>
        </section>

        <hr className="mkm-rule" />

        {/* Stack */}
        <section className="mkm-section">
          <h2 className="mkm-h2">My toolkit</h2>
          <p className="mkm-muted">The boring, dependable parts of the web.</p>
          <ul className="mkm-inline">
            <li>WordPress</li>
            <li>Shopify</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>HTML &amp; CSS</li>
            <li>Linux server admin</li>
            <li>Proxmox</li>
          </ul>
        </section>

        <hr className="mkm-rule" />

        {/* Community */}
        <section id="community" className="mkm-section">
          <h2 className="mkm-h2">Community</h2>
          <p>
            I&rsquo;ve been part of the WordPress community in India for years — as a speaker,
            organizer, and volunteer at meetups and WordCamps. The community shaped my work; I try
            to pay that back.
          </p>
          <ul className="mkm-list">
            <li>Speaker — WordCamp Bengaluru 2025</li>
            <li>Organizing team — WordCamp Asia 2026</li>
            <li>Volunteer &amp; contributor across multiple WordCamps and meetups</li>
            <li>Long-time advocate for clean, maintainable open source</li>
          </ul>
        </section>

        <hr className="mkm-rule" />

        {/* Writing */}
        <section id="writing" className="mkm-section">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
            <h2 className="mkm-h2" style={{ margin: 0 }}>Writing</h2>
            <Link to="/blog" className="mkm-link" style={{ fontSize: 13 }}>All posts <ArrowUpRight size={12} /></Link>
          </div>
          <p className="mkm-muted">Notes from real work, contribution, and learning.</p>
          <ol className="mkm-essays">
            {FEATURED_POSTS.map((p) => (
              <li key={p.slug}>
                <a href={p.url} target="_blank" rel="noreferrer" className="mkm-essay-link">
                  <span className="mkm-essay-title">{p.title}</span>
                  <span className="mkm-essay-meta">{p.date} · {p.category}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <hr className="mkm-rule" />

        {/* Discovery call */}
        <section id="contact" className="mkm-section">
          <h2 className="mkm-h2">Let&rsquo;s see if we&rsquo;re a fit.</h2>
          <p>
            If you&rsquo;re running a business that depends on <b>WordPress</b> or <b>Shopify</b>,
            and you&rsquo;d like a quiet, capable developer in your corner — book a short call.
            Worst case you walk away with a clearer view of your own setup.
          </p>
          <div className="mkm-cta-row" style={{ marginTop: 8 }}>
            <a className="mkm-cta-primary" href={DISCOVERY_CALL_URL} data-testid="minimal-final-cta">
              <Calendar size={14} />
              Book a Discovery Call
            </a>
            <a className="mkm-cta-ghost" href="mailto:makarand@wpgenius.in">
              Or email me
            </a>
          </div>
          <ul className="mkm-contact">
            <li>
              <span className="mkm-k">Email</span>
              <a className="mkm-v mkm-link" href="mailto:makarand@wpgenius.in">makarand@wpgenius.in</a>
            </li>
            <li>
              <span className="mkm-k">Studio</span>
              <ExtLink href="https://wpgenius.in/">wpgenius.in</ExtLink>
            </li>
            <li>
              <span className="mkm-k">Location</span>
              <span className="mkm-v">Kolhapur, India</span>
            </li>
            <li>
              <span className="mkm-k">Availability</span>
              <span className="mkm-v">Open for project discussions</span>
            </li>
          </ul>
        </section>

        <footer className="mkm-footer">
          <span>© 2026 Makarand Mane</span>
          <span className="dot">·</span>
          <Link to="/">Premium</Link>
          <span className="dot">·</span>
          <Link to="/sidebar">Sidebar</Link>
          <span className="dot">·</span>
          <Link to="/blog">Blog</Link>
        </footer>
      </article>
    </main>
  );
}
