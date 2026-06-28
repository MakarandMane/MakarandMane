# Makarand Mane — Personal Brand Website (v3)

Premium, minimal, essay-style personal website in **plain HTML + CSS**.
Positioned as a *productized solo practice* — primary CTA is **Book a Discovery Call** (Reclaim.ai).

## What's here

```
/website
  index.html      → Home (sidebar layout)
  blog.html       → Blog index (all posts)
  styles.css      → Styles for home
  blog.css        → Styles for blog
  /images
    makarand-hero.jpg
```

## Stack

- HTML5 + CSS3 only
- No JavaScript (none required for the layout)
- Fonts: Fraunces (serif) + Inter (sans), loaded from Google Fonts
- Fully responsive: sidebar collapses to top on ≤960px
- Smooth scroll, accessible focus states

## Layout

- **Fixed left sidebar (320px)** — avatar, name, role, bio, Discovery Call CTA, primary nav, contact meta, socials
- **Right column (~680px max)** — productized service blocks, toolkit, community, writing, final CTA
- Inspired by [abhaykulkarni.com](https://abhaykulkarni.com/) and [vallabhchitnis.com](https://www.vallabhchitnis.com/)

## Discovery Call link

The "Book a Discovery Call" buttons point to:
```
https://app.reclaim.ai/m/wpgenius/quick-meeting
```
To swap to a different scheduler (Cal.com, Calendly, Zoho Bookings), do a project-wide find-and-replace on that URL.

## Deploy

Drop the folder into any static host:

- **GitHub Pages** — enable Pages on `main` branch, root
- **Netlify** — drag the folder into Netlify's web UI
- **Vercel** — `vercel --prod` from inside the folder
- **Cloudflare Pages** — connect your repo

## Customize

Open `styles.css` — all design tokens (colors, spacing, fonts, radii) are CSS variables at the top under `:root`.

Same for `blog.css`.

## Blog content

Blog posts in `blog.html` are real posts from [makarandmane.com/blog](https://www.makarandmane.com/blog) — each card links to the live article. To add more, copy any `<li class="blog-item">…</li>` block in `blog.html` and edit.
