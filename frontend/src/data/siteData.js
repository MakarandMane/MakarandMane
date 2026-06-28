// Shared v4 site data — single source of truth for outcomes, talks, now-page, capacity.

export const CAPACITY = {
  status: "limited", // "open" | "limited" | "closed"
  slotsLine: "2 retainer slots open",
  startLine: "Next start: Q1 2026",
  focusLine: "Heads-down on WordCamp Asia 2026 prep this month.",
};

// Anonymized client outcomes — replace numbers with real ones when ready.
export const OUTCOMES = [
  {
    metric: "4.8s → 1.2s",
    label: "Mobile TTI",
    title: "Trimmed an apparel Shopify storefront's mobile load time",
    context:
      "Indian fashion brand · 12k visitors/month · Shopify 2.0 theme · audit + theme refactor + image pipeline",
    tag: "Shopify",
    duration: "3 weeks",
  },
  {
    metric: "92%",
    label: "Fewer P1 incidents",
    title: "Stabilized a 9-year-old WordPress site after years of plugin drift",
    context:
      "B2B service business · custom theme audit · plugin consolidation · monthly retainer ongoing",
    tag: "WordPress",
    duration: "Retainer (12+ months)",
  },
  {
    metric: "Zero",
    label: "Downtime during migration",
    title: "Migrated a high-traffic WordPress site to a new host without a maintenance window",
    context:
      "Education sector · 200k+ monthly pageviews · Proxmox-based staging + DNS choreography",
    tag: "Infrastructure",
    duration: "1 week",
  },
  {
    metric: "+38%",
    label: "Checkout completion",
    title: "Untangled a broken Shopify checkout flow inherited from a previous developer",
    context:
      "DTC food brand · third-party app conflict diagnosed and resolved · custom liquid cleanup",
    tag: "Shopify",
    duration: "2 weeks",
  },
  {
    metric: "From scratch",
    label: "Custom plugin",
    title: "Built a WordPress plugin to automate a 4-hour weekly accounting export",
    context:
      "LLP/partnership firm · Zoho Books integration · saves the team a half-day every week",
    tag: "WordPress",
    duration: "4 weeks",
  },
];

export const TALKS_PAST = [
  {
    event: "WordCamp Bengaluru 2025",
    role: "Speaker",
    location: "Bengaluru, India",
    date: "Aug 2025",
    note: "Spoke as a representative of the WordCamp Asia 2026 organizing team.",
    url: "https://www.makarandmane.com/blog/wordcamp-bengaluru-2025/",
  },
  {
    event: "WordCamp Asia 2026",
    role: "Organizing team",
    location: "Mumbai, India",
    date: "Feb 2026",
    note: "Currently part of the organizing team for India's biggest WordPress event.",
    url: null,
  },
  {
    event: "WordPress Kolhapur Meetup",
    role: "Speaker · Organizer",
    location: "Kolhapur, India",
    date: "Ongoing",
    note: "Regular speaker and co-organizer of local WordPress meetups since 2017.",
    url: null,
  },
];

export const TALKS_UPCOMING = [
  // user-editable; placeholder for now
];

// "Now" page content — dated. Update this monthly.
export const NOW = {
  asOf: "December 2025",
  lastUpdated: "Dec 1, 2025",
  workingOn: [
    {
      title: "WordCamp Asia 2026 organizing",
      body:
        "Logistics, speaker outreach, and a hundred small calls. The closer we get to February, the more this fills my calendar.",
    },
    {
      title: "A long-running WordPress maintenance client",
      body:
        "12+ months in. Quarterly performance reviews, plugin audits, and the kind of slow, boring work that compounds.",
    },
    {
      title: "A Shopify migration for an apparel brand",
      body:
        "Moving from a stale Shopify 1.0 theme to a clean 2.0 build. Aiming to ship in January.",
    },
  ],
  learning:
    "Re-reading parts of *High Output Management* by Andy Grove. Mid-career operator energy hits different in your fifteenth year of running a practice.",
  awayFromWork:
    "Road trips. The drive to WordCamp Bengaluru reminded me that good highways are India's most underrated infrastructure.",
};

// One inline pull-quote — keep PLACEHOLDER until a real testimonial replaces it.
export const PULL_QUOTE = {
  text:
    "He is the kind of developer who answers an email three years after a project — and remembers the password policy you chose.",
  attribution: "Long-term retainer client · Pune, India",
  isPlaceholder: true,
};

// Useful tools / current stack snapshot — humanizing strip
export const USING = [
  "VS Code",
  "Sequel Pro",
  "Proxmox",
  "Linode + Cloudflare",
  "Zoho Books",
  "Reclaim.ai",
  "Notion (lightly)",
];

export const READING = [
  { title: "High Output Management", author: "Andrew Grove" },
  { title: "Anything You Want", author: "Derek Sivers" },
  { title: "Don't Make Me Think", author: "Steve Krug" },
];
