// Real blog posts from makarandmane.com/blog
// Used by /blog index and writing previews across all three landing variants.

export const DISCOVERY_CALL_URL = "https://app.reclaim.ai/m/wpgenius/quick-meeting";

export const POSTS = [
  {
    slug: "how-i-recovered-21-git-commits-i-accidentally-lost",
    title: "How I Recovered 21 Git Commits I Accidentally Lost",
    date: "Jun 28, 2026",
    year: "2026",
    category: "Development",
    excerpt:
      "There are moments in every developer's journey that make your heart skip a beat. For me, this happened when I thought I had lost 21 commits—around 15 days of work—with a single Git reset command. Fortunately, Git had my back.",
    url: "https://www.makarandmane.com/blog/how-i-recovered-21-git-commits-i-accidentally-lost/",
    cover:
      "https://cdn.makarandmane.com/wp-content/uploads/2026/06/how-I-recovered-my-21-commits-517x291.jpg",
  },
  {
    slug: "in-loving-memory-of-zeel-thakkar",
    title: "In Loving Memory of Zeel Thakkar",
    date: "Nov 24, 2025",
    year: "2025",
    category: "Community",
    excerpt:
      "Gone too soon, but forever inspiring. The loss of Zeel Thakkar still feels unreal — she passed away right on stage while contributing to the community she loved so much, and her absence has been felt across our entire WordPress community.",
    url: "https://www.makarandmane.com/blog/in-loving-memory-of-zeel-thakkar/",
    cover:
      "https://cdn.makarandmane.com/wp-content/uploads/2025/11/zeel-thakkar-437x291.jpg",
  },
  {
    slug: "year-end-accounting-zoho-books-llp-partnership",
    title:
      "Year-End Accounting in Zoho Books for LLPs and Partnership Firms",
    date: "Oct 18, 2025",
    year: "2025",
    category: "Business",
    excerpt:
      "Every March, LLPs and partnership firms in India need to close their books, reconcile with their CA's reports, and prepare for ITR filing. A step-by-step guide to the exact year-end accounting process I follow in Zoho Books.",
    url: "https://www.makarandmane.com/blog/year-end-accounting-zoho-books-llp-partnership/",
    cover: null,
  },
  {
    slug: "wordcamp-bengaluru-2025",
    title:
      "From Steering Wheel to Stage: My Drive to WordCamp Bengaluru 2025",
    date: "Oct 17, 2025",
    year: "2025",
    category: "WordPress",
    excerpt:
      "This August I went to WordCamp Bengaluru 2025 — not just as an attendee, but as a speaker and a representative of WordCamp Asia 2026, where I'm part of the organizing team. A road-trip story with a side of community.",
    url: "https://www.makarandmane.com/blog/wordcamp-bengaluru-2025/",
    cover:
      "https://cdn.makarandmane.com/wp-content/uploads/2025/10/AQ8A0094-636x291.jpg",
  },
  {
    slug: "your-path-to-youtube-riches-make-money-online-the-smart-way",
    title: "Your Path to YouTube Riches: Make Money Online, the Smart Way",
    date: "Oct 13, 2023",
    year: "2023",
    category: "Online Business",
    excerpt:
      "A practical look at building a YouTube channel that actually earns — no fancy buzzwords, just the smart, slow-and-steady approach that compounds.",
    url: "https://www.makarandmane.com/blog/your-path-to-youtube-riches-make-money-online-the-smart-way/",
    cover: null,
  },
  {
    slug: "raspberry-pi-3b-kit",
    title: "Raspberry Pi 3B+ Kit — A Gateway to DIY Computing",
    date: "Jul 31, 2021",
    year: "2021",
    category: "Hardware",
    excerpt:
      "The Raspberry Pi 3B+ Kit bundles the famous board with all the essentials. Whether you're a hobbyist, an educator, or just curious, here's why it's still a great starting point.",
    url: "https://www.makarandmane.com/blog/raspberry-pi-3b-kit/",
    cover: null,
  },
  {
    slug: "install-configure-big-blue-button-ubuntu-18-04-10-minutes",
    title: "Install & Configure BigBlueButton on Ubuntu 18.04 in 10 Minutes",
    date: "Jun 23, 2021",
    year: "2021",
    category: "DevOps",
    excerpt:
      "A simplified, step-by-step guide for installing the open-source web conferencing platform BigBlueButton on Ubuntu 18.x with root access.",
    url: "https://www.makarandmane.com/blog/install-configure-big-blue-button-ubuntu-18-04-10-minutes/",
    cover: null,
  },
  {
    slug: "remote-desktop-connection-multiple-users-windows-10",
    title: "Remote Desktop Connection for Multiple Users on Windows 10",
    date: "Jan 27, 2020",
    year: "2020",
    category: "Sysadmin",
    excerpt:
      "How to enable multi-user remote desktop access on Windows 10 — the practical configuration steps that actually work.",
    url: "https://www.makarandmane.com/blog/remote-desktop-connection-multiple-users-windows-10/",
    cover: null,
  },
];

// Featured = the latest 3 for landing previews
export const FEATURED_POSTS = POSTS.slice(0, 3);
