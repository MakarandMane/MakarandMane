import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  MapPin,
  CalendarCheck2,
  Award,
  Mic2,
  Calendar,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FEATURED_POSTS, DISCOVERY_CALL_URL } from "@/data/blogPosts";

/* ---------- Fade-up on scroll (IntersectionObserver) ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => {
    const cb = document.getElementById("mk-burger");
    if (cb) cb.checked = false;
  };

  return (
    <header className={`mk-header ${scrolled ? "is-scrolled" : ""}`} data-testid="site-header">
      <input type="checkbox" id="mk-burger" className="mk-burger" aria-label="Toggle navigation" />
      <div className="mk-container mk-header-inner">
        <a href="#home" className="mk-logo" data-testid="brand-logo" onClick={close}>
          <span className="dot" />
          Makarand Mane
        </a>
        <nav className="mk-nav" aria-label="Primary">
          <a href="#home" data-testid="nav-home">Home</a>
          <a href="#about" data-testid="nav-about">About</a>
          <a href="#services" data-testid="nav-services">Services</a>
          <a href="#blog" data-testid="nav-blog">Blog</a>
          <a href="#contact" data-testid="nav-contact">Contact</a>
          <a href={DISCOVERY_CALL_URL} className="mk-cta" data-testid="nav-cta">Book a Call</a>
        </nav>
        <label htmlFor="mk-burger" className="mk-burger-btn" aria-label="Open menu" data-testid="mobile-menu-toggle">
          <span />
        </label>
      </div>
      <div className="mk-mobile-nav" data-testid="mobile-nav">
        <div className="inner">
          <a href="#home" onClick={close}>Home</a>
          <a href="#about" onClick={close}>About</a>
          <a href="#services" onClick={close}>Services</a>
          <a href="#blog" onClick={close}>Blog</a>
          <a href="#contact" onClick={close}>Contact</a>
          <a href={DISCOVERY_CALL_URL} className="mk-cta" onClick={close}>Book a Call</a>
        </div>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="mk-hero" data-testid="hero-section">
      <div className="mk-container mk-hero-grid">
        <div>
          <span className="mk-eyebrow fade-up" data-testid="hero-eyebrow">
            <span className="pulse" />
            WordPress Developer • Shopify Developer • Technical Consultant
          </span>
          <h1 className="fade-up d1" data-testid="hero-headline">
            I build <em>reliable</em> WordPress &amp; Shopify websites for growing businesses.
          </h1>
          <p className="lead fade-up d2" data-testid="hero-description">
            I'm Makarand Mane, a developer and technical consultant with 15+ years of experience.
            I help businesses with WordPress development, Shopify development, website maintenance,
            and practical technical solutions that are stable, clean, and maintainable.
          </p>
          <div className="mk-hero-actions fade-up d3">
            <a href={DISCOVERY_CALL_URL} className="btn btn-primary" data-testid="hero-cta-primary">
              <Calendar size={16} strokeWidth={2} />
              Book a Discovery Call
            </a>
            <a href="#about" className="btn btn-ghost" data-testid="hero-cta-secondary">
              Learn More About Me
              <ArrowRight className="arrow" size={17} strokeWidth={2} />
            </a>
          </div>

          <div className="mk-mini-trust fade-up d4">
            <div className="item">
              <span className="num">15+</span> years since 2011
            </div>
            <div className="item">
              <span className="num">●</span> WordPress contributor
            </div>
            <div className="item">
              <span className="num">●</span> Speaker &amp; organizer
            </div>
          </div>
        </div>

        <div className="mk-hero-image-wrap fade-up d2">
          <div className="mk-hero-image" data-testid="hero-image">
            <img
              src="/images/makarand-hero.jpg"
              alt="Portrait of Makarand Mane — WordPress and Shopify Developer"
              loading="eager"
            />
          </div>
          <div className="mk-hero-stamp">Kolhapur, India</div>
          <div className="mk-hero-badge">
            <div className="avatar">MM</div>
            <div className="meta">
              <b>Available for work</b>
              <span>Open for project discussions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust strip ---------- */
function Trust() {
  const items = [
    { ic: <CalendarCheck2 size={18} strokeWidth={1.7} />, k: "15+ Years", v: "Experience" },
    { ic: <Award size={18} strokeWidth={1.7} />, k: "Since 2011", v: "Long-running practice" },
    { ic: <Mic2 size={18} strokeWidth={1.7} />, k: "Contributor", v: "Speaker & organizer" },
    { ic: <ShieldCheck size={18} strokeWidth={1.7} />, k: "Reliable", v: "Development & support" },
  ];
  return (
    <div className="mk-trust" data-testid="trust-strip">
      <div className="mk-container mk-trust-inner">
        {items.map((it, i) => (
          <div key={i} className={`mk-trust-item fade-up d${i + 1}`}>
            <span className="ic">{it.ic}</span>
            <div>
              <b>{it.k}</b>
              <span>{it.v}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="about" className="mk-section mk-about" data-testid="about-section">
      <div className="mk-container">
        <div className="mk-section-head fade-up">
          <span className="mk-label">About</span>
          <h2 className="mk-section-title">A personal brand with strong technical depth.</h2>
          <p className="mk-section-intro">
            I work with businesses and teams that need more than just a website. They need someone
            who can build, improve, maintain, and troubleshoot with clarity.
          </p>
        </div>

        <div className="mk-about-grid">
          <article className="mk-card fade-up d1">
            <h3>Who I am</h3>
            <p>
              I'm a developer, engineer, and long-time WordPress professional based in India. Since
              2011, I've worked on custom WordPress solutions, website optimization, long-term
              maintenance, and technical support.
            </p>
            <p>
              Alongside client work, I actively contribute to the WordPress ecosystem through
              speaking, organizing, volunteering, and community events.
            </p>
          </article>

          <article className="mk-card fade-up d2">
            <h3>Core strengths</h3>
            <ul className="mk-list">
              <li>WordPress development and customization</li>
              <li>Shopify development and storefront improvements</li>
              <li>Website maintenance and technical support</li>
              <li>PHP, MySQL, HTML, CSS, JavaScript, jQuery</li>
              <li>Server maintenance and Proxmox support</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const items = [
    {
      tag: "WordPress",
      title: "WordPress Development",
      content:
        "Custom WordPress websites, theme work, plugin customization, performance improvements, maintenance, and long-term support.",
    },
    {
      tag: "Shopify",
      title: "Shopify Development",
      content:
        "Shopify store setup, theme customization, storefront refinements, and practical improvements for growing online businesses.",
    },
    {
      tag: "Support",
      title: "Website Maintenance & Technical Support",
      content:
        "Ongoing updates, troubleshooting, security improvements, issue fixing, and dependable support to keep business websites running smoothly.",
    },
  ];
  return (
    <section id="services" className="mk-section mk-services" data-testid="services-section">
      <div className="mk-container">
        <div className="mk-section-head fade-up">
          <span className="mk-label">Services</span>
          <h2 className="mk-section-title">What I do.</h2>
          <p className="mk-section-intro">
            Clean implementation, practical problem-solving, and reliable long-term support.
          </p>
        </div>

        <div className="mk-services-grid">
          {items.map((s, i) => (
            <article key={s.tag} className={`mk-service fade-up d${i + 1}`} data-testid={`service-${i + 1}`}>
              <div className="num">— 0{i + 1}</div>
              <span className="tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.content}</p>
              <div className="rule" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Blog ---------- */
function Blog() {
  return (
    <section id="blog" className="mk-section" data-testid="blog-section">
      <div className="mk-container">
        <div className="mk-section-head fade-up">
          <span className="mk-label">Blog</span>
          <h2 className="mk-section-title">Writing on development, WordPress, and community.</h2>
          <p className="mk-section-intro">
            Thoughts, lessons, and practical ideas from real work, contribution, and learning.
          </p>
        </div>

        <div className="mk-blog-grid">
          {FEATURED_POSTS.map((p, i) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className={`mk-post fade-up d${i + 1}`}
              data-testid={`blog-post-${i + 1}`}
            >
              <div className="meta">
                <span className="tag">{p.category}</span>
                <span>{p.date}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
              <span className="mk-readmore" data-testid={`blog-readmore-${i + 1}`}>
                Read More <ArrowRight size={15} strokeWidth={2} />
              </span>
            </a>
          ))}
        </div>

        <div className="fade-up" style={{ marginTop: 36, textAlign: "center" }}>
          <Link to="/blog" className="btn btn-ghost" data-testid="view-all-posts">
            View all posts <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Discovery Call (was Contact) ---------- */
function Contact() {
  return (
    <section id="contact" className="mk-section mk-contact" data-testid="contact-section">
      <div className="mk-container">
        <div className="mk-section-head fade-up">
          <span className="mk-label">Work with me</span>
          <h2 className="mk-section-title">Let&rsquo;s see if we&rsquo;re a fit.</h2>
          <p className="mk-section-intro">
            If you&rsquo;re running a business that depends on WordPress or Shopify and you&rsquo;d like
            a quiet, capable developer in your corner — book a short call. Worst case you walk away
            with a clearer view of your own setup.
          </p>
        </div>

        <div className="mk-discovery">
          <div className="mk-discovery-card fade-up d1">
            <div className="mk-discovery-icon">
              <Calendar size={26} strokeWidth={1.5} />
            </div>
            <h3 className="mk-discovery-title">Discovery Call</h3>
            <p>
              30-minute call · No pitch deck · Bring your problem, not a brief. We&rsquo;ll talk
              about your stack, your goals, and whether I&rsquo;m the right person to help.
            </p>
            <a href={DISCOVERY_CALL_URL} className="btn btn-primary" data-testid="discovery-cta">
              <Calendar size={16} />
              Book a Discovery Call
            </a>
            <p className="mk-discovery-micro">
              Or write directly: <a href="mailto:makarand@wpgenius.in" data-testid="contact-email">makarand@wpgenius.in</a>
            </p>
          </div>

          <ul className="mk-contact-details fade-up d2">
            <li>
              <span className="ic"><Mail size={18} strokeWidth={1.7} /></span>
              <div>
                <span className="k">Email</span>
                <a href="mailto:makarand@wpgenius.in" className="v">makarand@wpgenius.in</a>
              </div>
            </li>
            <li>
              <span className="ic"><MapPin size={18} strokeWidth={1.7} /></span>
              <div>
                <span className="k">Location</span>
                <span className="v">Kolhapur, India</span>
              </div>
            </li>
            <li>
              <span className="ic"><Sparkles size={18} strokeWidth={1.7} /></span>
              <div>
                <span className="k">Availability</span>
                <span className="v">Open for project discussions</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="mk-footer" data-testid="site-footer">
      <div className="mk-container mk-footer-inner">
        <span>© 2026 Makarand Mane. All rights reserved.</span>
        <span className="mk-footer-versions">
          View other versions: <Link to="/">Sidebar (primary)</Link> · <Link to="/minimal">Minimal</Link> · <Link to="/blog">Blog</Link>
        </span>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
export default function MakarandLanding() {
  useReveal();
  return (
    <main data-testid="landing-page">
      <Header />
      <Hero />
      <Trust />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
