import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

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
        <a href="/" className="mkm-brand">Makarand Mane</a>
        <nav className="mkm-topnav">
          <a href="#work">Work</a>
          <a href="#community">Community</a>
          <a href="#writing">Writing</a>
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
            <a className="mkm-cta-primary" href="#contact">Get in touch</a>
            <a className="mkm-cta-ghost" href="https://wpgenius.in/" target="_blank" rel="noreferrer">
              Visit WPGenius <ArrowUpRight size={14} />
            </a>
          </div>
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
            <li>Speaker &amp; organizer at WordPress meetups</li>
            <li>Volunteer &amp; contributor at WordCamps across India</li>
            <li>Long-time advocate for clean, maintainable open source</li>
          </ul>
          <p className="mkm-muted small">
            <em>Want specific WordCamps featured here? Send me the list and I&rsquo;ll link them.</em>
          </p>
        </section>

        <hr className="mkm-rule" />

        {/* Writing */}
        <section id="writing" className="mkm-section">
          <h2 className="mkm-h2">Writing</h2>
          <p className="mkm-muted">Occasional notes on development, WordPress, and community.</p>
          <ol className="mkm-essays">
            <li>
              <a href="#" className="mkm-essay-link">
                <span className="mkm-essay-title">My Journey with WordPress Since 2011</span>
                <span className="mkm-essay-meta">Essay · WordPress</span>
              </a>
            </li>
            <li>
              <a href="#" className="mkm-essay-link">
                <span className="mkm-essay-title">What Community Events Teach Developers</span>
                <span className="mkm-essay-meta">Notes · Community</span>
              </a>
            </li>
            <li>
              <a href="#" className="mkm-essay-link">
                <span className="mkm-essay-title">Why Website Maintenance Matters After Launch</span>
                <span className="mkm-essay-meta">Guide · Maintenance</span>
              </a>
            </li>
          </ol>
        </section>

        <hr className="mkm-rule" />

        {/* Contact */}
        <section id="contact" className="mkm-section">
          <h2 className="mkm-h2">Get in touch</h2>
          <p>
            If you need help with <b>WordPress</b>, <b>Shopify</b>, <b>maintenance</b>, or
            <b> technical consulting</b> — I&rsquo;d be glad to connect. Send a short note about
            your stack, goals, and timeline.
          </p>
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
          <a href="/">Premium version</a>
        </footer>
      </article>
    </main>
  );
}
