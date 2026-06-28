import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Calendar } from "lucide-react";
import { POSTS, DISCOVERY_CALL_URL } from "@/data/blogPosts";

/* Shared blog index — accessible from all 3 landing variants.
   Same minimal aesthetic. Reads as a chronological essay archive. */

export default function BlogIndex() {
  useEffect(() => {
    document.title = "Blog — Makarand Mane";
    window.scrollTo(0, 0);
  }, []);

  // Group posts by year
  const grouped = POSTS.reduce((acc, p) => {
    (acc[p.year] = acc[p.year] || []).push(p);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="blog-page" data-testid="blog-index">
      <header className="blog-top">
        <Link to="/" className="blog-back" data-testid="blog-back">
          <ArrowLeft size={14} /> Back home
        </Link>
        <nav className="blog-topnav">
          <Link to="/">Premium</Link>
          <Link to="/minimal">Minimal</Link>
          <Link to="/sidebar">Sidebar</Link>
        </nav>
      </header>

      <main className="blog-wrap">
        <section className="blog-hero">
          <p className="blog-kicker">Writing</p>
          <h1 className="blog-h1">Notes from 15+ years of building the web.</h1>
          <p className="blog-lead">
            Practical posts on WordPress, Shopify, server admin, business operations, and the
            occasional reflection on community and life. Most pieces were originally written for
            <a className="blog-inline-link" href="https://www.makarandmane.com/blog" target="_blank" rel="noreferrer"> makarandmane.com</a>.
          </p>
        </section>

        <hr className="blog-rule" />

        {years.map((year) => (
          <section key={year} className="blog-year-group">
            <div className="blog-year-label">{year}</div>
            <ol className="blog-list">
              {grouped[year].map((post) => (
                <li key={post.slug} className="blog-item" data-testid={`blog-item-${post.slug}`}>
                  <a className="blog-item-link" href={post.url} target="_blank" rel="noreferrer">
                    <div className="blog-item-meta">
                      <span className="blog-item-date">{post.date}</span>
                      <span className="blog-item-dot">·</span>
                      <span className="blog-item-cat">{post.category}</span>
                    </div>
                    <h2 className="blog-item-title">{post.title}</h2>
                    <p className="blog-item-excerpt">{post.excerpt}</p>
                    <span className="blog-item-readmore">
                      Read on makarandmane.com <ArrowUpRight size={13} />
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        ))}

        <section className="blog-cta">
          <h3 className="blog-cta-title">Working on something I can help with?</h3>
          <p>If you&rsquo;re running a WordPress or Shopify business and need a quiet, capable hand — book a short call.</p>
          <a className="blog-cta-button" href={DISCOVERY_CALL_URL} data-testid="blog-discovery-cta">
            <Calendar size={15} /> Book a Discovery Call
          </a>
        </section>

        <footer className="blog-footer">
          <span>© 2026 Makarand Mane</span>
          <span className="dot">·</span>
          <Link to="/">Home</Link>
        </footer>
      </main>
    </div>
  );
}
