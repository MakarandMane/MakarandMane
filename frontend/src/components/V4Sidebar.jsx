import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Mail,
  Globe,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Home,
  Briefcase,
  Mic2,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { DISCOVERY_CALL_URL } from "@/data/blogPosts";
import { CAPACITY } from "@/data/siteData";
import ThemeToggle from "@/components/ThemeToggle";

const NAV = [
  { to: "/", label: "Home", icon: <Home size={14} strokeWidth={1.8} /> },
  { to: "/work", label: "Work", icon: <Briefcase size={14} strokeWidth={1.8} /> },
  { to: "/speaking", label: "Speaking", icon: <Mic2 size={14} strokeWidth={1.8} /> },
  { to: "/writing", label: "Writing", icon: <BookOpen size={14} strokeWidth={1.8} /> },
  { to: "/now", label: "Now", icon: <Sparkles size={14} strokeWidth={1.8} /> },
];

export default function V4Sidebar() {
  const { pathname } = useLocation();
  const isActive = (to) => (to === "/" ? pathname === "/" : pathname.startsWith(to));

  return (
    <aside className="v4-sidebar" data-testid="v4-sidebar">
      <div className="v4-sidebar-inner">
        <div className="v4-side-top">
          <img className="v4-avatar" src="/images/makarand-hero.jpg" alt="Makarand Mane" />
        </div>

        <h1 className="v4-name">Makarand Mane</h1>
        <p className="v4-role">
          WordPress &amp; Shopify Developer<br />
          Technical Consultant · Kolhapur
        </p>

        {/* Now & availability — the v4 idea */}
        <div className="v4-status" data-testid="status-block">
          <div className="v4-status-row">
            <span className={`v4-status-dot ${CAPACITY.status === "open" ? "is-open" : CAPACITY.status === "closed" ? "is-closed" : ""}`} />
            <span className="v4-status-label">
              {CAPACITY.status === "open" ? "Open for new work" : CAPACITY.status === "closed" ? "Not taking new work" : "Limited capacity"}
            </span>
          </div>
          <p className="v4-status-line">{CAPACITY.slotsLine}</p>
          <p className="v4-status-sub">{CAPACITY.startLine}</p>
          <p className="v4-status-now">
            {CAPACITY.focusLine} <Link to="/now">More →</Link>
          </p>
        </div>

        <a
          className="v4-cta"
          href={DISCOVERY_CALL_URL}
          target="_blank"
          rel="noreferrer"
          data-testid="sidebar-discovery-cta"
        >
          <Calendar size={15} strokeWidth={2} />
          Book a Discovery Call
        </a>

        <nav className="v4-nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={isActive(item.to) ? "is-active" : ""}
              data-testid={`nav-${item.label.toLowerCase()}`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        <ul className="v4-meta">
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

        <div className="v4-side-bottom">
          <div className="v4-social">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} strokeWidth={1.8} /></a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X / Twitter"><Twitter size={15} strokeWidth={1.8} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} strokeWidth={1.8} /></a>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
