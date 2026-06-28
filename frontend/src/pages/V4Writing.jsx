import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight } from "lucide-react";
import V4Layout from "@/components/V4Layout";
import { POSTS, DISCOVERY_CALL_URL } from "@/data/blogPosts";

export default function V4Writing() {
  // Group posts by year
  const grouped = POSTS.reduce((acc, p) => {
    (acc[p.year] = acc[p.year] || []).push(p);
    return acc;
  }, {});
  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <V4Layout title="Writing — Makarand Mane">
      <section className="v4-section" data-testid="writing-page">
        <p className="v4-page-kicker">Writing</p>
        <h2 className="v4-h1">Notes from 15+ years of building the web.</h2>
        <p className="v4-lead">
          Practical posts on WordPress, Shopify, server admin, business operations, and the
          occasional reflection on community and life. Most pieces are originally published on{" "}
          <a className="v4-link" href="https://www.makarandmane.com/blog" target="_blank" rel="noreferrer">makarandmane.com</a>.
        </p>
      </section>

      <hr className="v4-rule" />

      {years.map((year) => (
        <section key={year} className="v4-section" data-testid={`year-${year}`} style={{ marginBottom: 40 }}>
          <p className="v4-section-label">{year}</p>
          <ol className="v4-essays">
            {grouped[year].map((post) => (
              <li key={post.slug}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="v4-essay-link"
                  data-testid={`post-${post.slug}`}
                >
                  <span className="v4-essay-title">{post.title}</span>
                  <span className="v4-essay-meta">{post.date} · {post.category}</span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      ))}

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Liked what you read?</p>
        <h3 className="v4-h2">Talk to me about your stack.</h3>
        <p>
          If something on your WordPress or Shopify setup needs a careful, capable hand — book a
          short call. Worst case you walk away with a clearer view of your own setup.
        </p>
        <a className="v4-cta-primary" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="writing-cta">
          <Calendar size={15} /> Book a Discovery Call
        </a>
      </section>

      <footer className="v4-footer">
        <span>© 2026 Makarand Mane</span>
        <span className="dot">·</span>
        <Link to="/">Home</Link>
        <span className="dot">·</span>
        <a href="https://www.makarandmane.com/blog" target="_blank" rel="noreferrer">All on makarandmane.com <ArrowUpRight size={12} /></a>
      </footer>
    </V4Layout>
  );
}
