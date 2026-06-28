import { useEffect } from "react";
import { ArrowUpRight, Mail, Globe, MapPin, Calendar, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { POSTS, FEATURED_POSTS, DISCOVERY_CALL_URL } from "@/data/blogPosts";

/* v3 — Minimal essay layout WITH a fixed left sidebar.
   Inspired by abhaykulkarni.com + vallabhchitnis.com.
   Positions Makarand-as-a-service — primary CTA is "Book a Discovery Call". */

function Sidebar() {
  return (
    <aside className="mks-sidebar" data-testid="sidebar">
      <div className="mks-sidebar-inner">
        <img className="mks-avatar" src="/images/makarand-hero.jpg" alt="Makarand Mane" />
        <h1 className="mks-name">Makarand Mane</h1>
        <p className="mks-role">
          WordPress &amp; Shopify Developer<br />
          Technical Consultant
        </p>

        <p className="mks-bio">
          Building reliable websites since 2011 from Kolhapur, India. WordPress contributor,
          speaker, and organizer.
        </p>

        <a
          className="mks-discovery-cta"
          href={DISCOVERY_CALL_URL}
          target="_blank"
          rel="noreferrer"
          data-testid="sidebar-discovery-cta"
        >
          <Calendar size={15} strokeWidth={2} />
          Book a Discovery Call
        </a>

        <nav className="mks-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#community">Community</a>
          <a href="#writing">Writing</a>
          <Link to="/blog">All Posts</Link>
        </nav>

        <ul className="mks-meta">
          <li>
            <Mail size={13} strokeWidth={1.8} />
            <a href="mailto:makarand@wpgenius.in">makarand@wpgenius.in</a>
          </li>
          <li>
            <Globe size={13} strokeWidth={1.8} />
            <a href="https://wpgenius.in/" target="_blank" rel="noreferrer">wpgenius.in</a>
          </li>
          <li>
            <MapPin size={13} strokeWidth={1.8} />
            <span>Kolhapur, India</span>
          </li>
        </ul>

        <div className="mks-social">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} strokeWidth={1.8} /></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X / Twitter"><Twitter size={15} strokeWidth={1.8} /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} strokeWidth={1.8} /></a>
        </div>

        <div className="mks-versions">
          <span className="mks-versions-label">Other versions</span>
          <div className="mks-versions-links">
            <Link to="/premium">Premium</Link>
            <span>·</span>
            <Link to="/minimal">Minimal</Link>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default function MakarandSidebar() {
  useEffect(() => {
    document.title = "Makarand Mane — Build reliable websites with a developer who'll still be around in two years";
  }, []);

  return (
    <div className="mks-page" data-testid="sidebar-page">
      <Sidebar />

      <main className="mks-main">
        <article className="mks-article">
          {/* Identity / intro */}
          <section id="about" className="mks-intro">
            <p className="mks-eyebrow">A practice, not an agency.</p>
            <h2 className="mks-h1">
              I help businesses run <em>reliable</em> WordPress &amp; Shopify websites — without the chaos.
            </h2>
            <p className="mks-lead">
              Hi, I&rsquo;m Makarand. For 15+ years I&rsquo;ve been doing one thing well: building,
              maintaining, and quietly fixing the web infrastructure that growing businesses
              depend on. Most of my clients didn&rsquo;t start with a brief — they started with a
              broken site, a slow store, or a question their previous developer stopped answering.
            </p>
            <p className="mks-lead">
              I work as a <b>productized solo practice</b>: limited clients, long relationships,
              clean code, and an honest second opinion when you need one. If that sounds like the
              kind of working relationship you&rsquo;ve been looking for, let&rsquo;s talk.
            </p>

            <div className="mks-cta-row">
              <a className="mks-cta-primary" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="intro-discovery-cta">
                <Calendar size={15} /> Book a Discovery Call
              </a>
              <a className="mks-cta-ghost" href="https://wpgenius.in/" target="_blank" rel="noreferrer">
                Visit WPGenius <ArrowUpRight size={14} />
              </a>
            </div>

            <p className="mks-microcopy">
              30-minute call · No pitch deck · Bring your problem, not a brief.
            </p>
          </section>

          <hr className="mks-rule" />

          {/* Services — productized */}
          <section id="services" className="mks-section">
            <p className="mks-section-label">Services</p>
            <h3 className="mks-h2">How we can work together</h3>

            <div className="mks-service">
              <div className="mks-service-head">
                <h4 className="mks-h3">WordPress Development &amp; Customization</h4>
                <span className="mks-service-tag">Project · Retainer</span>
              </div>
              <p>
                Custom builds, theme work, plugin customization, performance tuning, and long-term
                maintenance. Best fit for businesses with a serious WordPress dependency.
              </p>
            </div>

            <div className="mks-service">
              <div className="mks-service-head">
                <h4 className="mks-h3">Shopify Development &amp; Storefront Refinements</h4>
                <span className="mks-service-tag">Project</span>
              </div>
              <p>
                Store setup, theme customization, and the small storefront improvements that
                quietly lift conversion without redesigning everything.
              </p>
            </div>

            <div className="mks-service">
              <div className="mks-service-head">
                <h4 className="mks-h3">Maintenance &amp; Technical Support</h4>
                <span className="mks-service-tag">Monthly retainer</span>
              </div>
              <p>
                Ongoing updates, security hardening, troubleshooting, server admin, Proxmox setups,
                and dependable support. The boring work that keeps revenue running.
              </p>
            </div>

            <div className="mks-service">
              <div className="mks-service-head">
                <h4 className="mks-h3">Technical Consulting</h4>
                <span className="mks-service-tag">Hourly · Fixed-scope</span>
              </div>
              <p>
                Audits, architectural decisions, hosting choices, second opinions. When you need
                someone with 15+ years of context to call your bluff (or theirs).
              </p>
            </div>
          </section>

          <hr className="mks-rule" />

          {/* Toolkit */}
          <section className="mks-section">
            <p className="mks-section-label">Toolkit</p>
            <h3 className="mks-h2">The boring, dependable parts of the web</h3>
            <ul className="mks-inline">
              <li>WordPress</li>
              <li>Shopify</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>HTML &amp; CSS</li>
              <li>Linux server admin</li>
              <li>Proxmox</li>
              <li>Zoho Books (for the LLPs I support)</li>
            </ul>
          </section>

          <hr className="mks-rule" />

          {/* Community */}
          <section id="community" className="mks-section">
            <p className="mks-section-label">Community</p>
            <h3 className="mks-h2">WordPress, in the open</h3>
            <p>
              I&rsquo;ve been part of the WordPress community in India for years — as a speaker,
              organizer, and volunteer at meetups and WordCamps. Most recently as a speaker at
              <b> WordCamp Bengaluru 2025</b>, and part of the organizing team for
              <b> WordCamp Asia 2026</b>.
            </p>
            <ul className="mks-list">
              <li>Speaker — WordCamp Bengaluru 2025</li>
              <li>Organizing team — WordCamp Asia 2026</li>
              <li>Volunteer &amp; contributor — multiple WordCamps and meetups</li>
              <li>Long-time advocate for clean, maintainable open source</li>
            </ul>
          </section>

          <hr className="mks-rule" />

          {/* Writing */}
          <section id="writing" className="mks-section">
            <div className="mks-section-headrow">
              <div>
                <p className="mks-section-label">Writing</p>
                <h3 className="mks-h2">Recent posts</h3>
              </div>
              <Link to="/blog" className="mks-allposts">All posts <ArrowUpRight size={13} /></Link>
            </div>
            <ol className="mks-essays">
              {FEATURED_POSTS.map((p) => (
                <li key={p.slug}>
                  <a href={p.url} target="_blank" rel="noreferrer" className="mks-essay-link">
                    <span className="mks-essay-title">{p.title}</span>
                    <span className="mks-essay-meta">{p.date} · {p.category}</span>
                  </a>
                </li>
              ))}
            </ol>
          </section>

          <hr className="mks-rule" />

          {/* Final CTA — discovery call */}
          <section className="mks-section">
            <p className="mks-section-label">Next step</p>
            <h3 className="mks-h2">Let&rsquo;s see if we&rsquo;re a fit.</h3>
            <p>
              If you&rsquo;re running a business that depends on WordPress or Shopify and you&rsquo;d like
              a quiet, capable developer in your corner — book a short call. Worst case you walk
              away with a clearer view of your own setup.
            </p>
            <a className="mks-cta-primary big" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="footer-discovery-cta">
              <Calendar size={16} /> Book a Discovery Call
            </a>
            <p className="mks-microcopy">
              Or write directly: <a className="mks-link" href="mailto:makarand@wpgenius.in">makarand@wpgenius.in</a>
            </p>
          </section>

          <footer className="mks-footer">
            <span>© 2026 Makarand Mane</span>
            <span className="dot">·</span>
            <span>Built with care in Kolhapur, India</span>
          </footer>
        </article>
      </main>
    </div>
  );
}
