import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import V4Layout from "@/components/V4Layout";
import { OUTCOMES } from "@/data/siteData";
import { DISCOVERY_CALL_URL } from "@/data/blogPosts";

export default function V4Work() {
  return (
    <V4Layout title="Recent Work — Makarand Mane">
      <section className="v4-section" data-testid="work-page">
        <p className="v4-page-kicker">Work</p>
        <h2 className="v4-h1">Outcomes, not a portfolio.</h2>
        <p className="v4-lead">
          A few representative examples of recent work — anonymized to respect client trust.
          Numbers are real; names are not. If you&rsquo;d like a reference for similar work,
          ask me on a call.
        </p>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section" data-testid="work-outcomes">
        <div className="v4-outcomes">
          {OUTCOMES.map((o, i) => (
            <article key={i} className="v4-outcome" data-testid={`work-outcome-${i}`}>
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

      <section className="v4-section">
        <p className="v4-section-label">Want one of these?</p>
        <h3 className="v4-h2">Tell me what&rsquo;s in your way.</h3>
        <p>
          Most of these started with a Slack message, an email, or a panicked call. If something
          on your stack feels brittle, slow, or undocumented — that&rsquo;s usually a 30-minute
          conversation, not a 50-page brief.
        </p>
        <div className="v4-cta-row">
          <a className="v4-cta-primary" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="work-discovery-cta">
            <Calendar size={15} /> Book a Discovery Call
          </a>
          <Link to="/speaking" className="v4-cta-ghost">
            See me speak <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <footer className="v4-footer">
        <span>© 2026 Makarand Mane</span>
        <span className="dot">·</span>
        <Link to="/">Home</Link>
        <span className="dot">·</span>
        <Link to="/writing">Writing</Link>
        <span className="dot">·</span>
        <Link to="/now">Now</Link>
      </footer>
    </V4Layout>
  );
}
