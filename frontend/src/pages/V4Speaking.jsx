import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight } from "lucide-react";
import V4Layout from "@/components/V4Layout";
import { TALKS_PAST, TALKS_UPCOMING } from "@/data/siteData";
import { DISCOVERY_CALL_URL } from "@/data/blogPosts";

function TalkList({ talks, emptyNote, testid }) {
  if (!talks || talks.length === 0) {
    return <p className="v4-microcopy" style={{ marginTop: 0 }}>{emptyNote}</p>;
  }
  return (
    <div className="v4-talks" data-testid={testid}>
      {talks.map((t, i) => (
        <article key={i} className="v4-talk">
          <div className="v4-talk-date">{t.date}</div>
          <div>
            <div className="v4-talk-title-row">
              <span className="v4-talk-title">{t.event}</span>
              <span className="v4-talk-role">{t.role}</span>
            </div>
            <p className="v4-talk-meta">{t.location}</p>
            <p className="v4-talk-note">{t.note}</p>
            {t.url && (
              <a className="v4-talk-link" href={t.url} target="_blank" rel="noreferrer">
                Read more <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function V4Speaking() {
  return (
    <V4Layout title="Speaking — Makarand Mane">
      <section className="v4-section" data-testid="speaking-page">
        <p className="v4-page-kicker">Speaking</p>
        <h2 className="v4-h1">On stages and in rooms, mostly about WordPress.</h2>
        <p className="v4-lead">
          I speak, organize, and volunteer at WordCamps and meetups across India. The community
          shaped my work — I try to pay that back. If you&rsquo;re organizing an event, I&rsquo;m
          happy to chat.
        </p>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Upcoming</p>
        <h3 className="v4-h2">Where you can catch me next</h3>
        <TalkList
          talks={TALKS_UPCOMING}
          emptyNote="Nothing publicly confirmed at the moment — check back, or follow me on LinkedIn / X for updates."
          testid="speaking-upcoming"
        />
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Past</p>
        <h3 className="v4-h2">Recent talks &amp; roles</h3>
        <TalkList talks={TALKS_PAST} testid="speaking-past" />
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Topics I&rsquo;m happy to speak on</p>
        <ul className="v4-inline">
          <li>WordPress maintenance done right</li>
          <li>Running a 15-year solo practice</li>
          <li>Performance for real businesses</li>
          <li>Why community matters in tech</li>
          <li>Shopify storefront refinements</li>
          <li>Server admin for developers</li>
        </ul>
      </section>

      <hr className="v4-rule" />

      <section className="v4-section">
        <p className="v4-section-label">Organizing your event?</p>
        <h3 className="v4-h2">Let&rsquo;s talk.</h3>
        <p>
          I&rsquo;m most useful as a speaker, panelist, or session host on the topics above.
          Booking a discovery call is the fastest way to start the conversation — same calendar.
        </p>
        <a className="v4-cta-primary" href={DISCOVERY_CALL_URL} target="_blank" rel="noreferrer" data-testid="speaking-cta">
          <Calendar size={15} /> Book a Discovery Call
        </a>
      </section>

      <footer className="v4-footer">
        <span>© 2026 Makarand Mane</span>
        <span className="dot">·</span>
        <Link to="/">Home</Link>
        <span className="dot">·</span>
        <Link to="/work">Work</Link>
        <span className="dot">·</span>
        <Link to="/writing">Writing</Link>
      </footer>
    </V4Layout>
  );
}
