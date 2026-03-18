# Career Fingerprint – Marketing Site

The public marketing website for Career Fingerprint. Built with SvelteKit and powered by Prismic as a headless CMS. Includes the homepage, blog, feature pages, brand guidelines, and newsletter signup.

**Version:** 0.0.1

## Tech Stack

- [SvelteKit 5](https://kit.svelte.dev/) with Svelte 5
- [TailwindCSS 4](https://tailwindcss.com/)
- [Prismic](https://prismic.io/) headless CMS with Slice Machine
- [Prisma](https://www.prisma.io/) + [Neon](https://neon.tech/) PostgreSQL for email signups
- [Vercel](https://vercel.com/) for deployment
- [Mixpanel](https://mixpanel.com/) for analytics
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for form spam protection
- [Satori](https://github.com/vercel/satori) for server-side OG image generation
- TypeScript 5

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server (runs on port 5111):

```bash
npm run dev
```

Other commands:

```bash
npm run build          # Production build
npm run preview        # Preview the production build
npm run check          # Type-check with svelte-check
npm run lint           # Lint and format check
npm run slice          # Start Slice Machine for CMS content editing
npm run vercel-build   # Prisma generate + push + build (used by Vercel CI)
```

## Project Structure

```
src/
  routes/
    (site)/
      [[preview]]/    # Homepage and Prismic preview support
      blog/           # Blog post pages (/blog/[uid])
      tools/          # Feature/tools pages (/tools/[uid])
      brand-guidelines/ # Brand guidelines page
    api/
      email-list/     # Newsletter signup endpoint
      og/             # OG image generation
      preview/        # Prismic preview endpoint
    sign-up-success/  # Post-signup confirmation page
    sitemap.xml/      # Dynamic sitemap
    slice-simulator/  # Prismic Slice Machine preview

  lib/
    slices/           # 34 Prismic slice components (Hero, Pricing, FAQ, etc.)
    Components/       # Reusable UI components (SEO, Header, Footer, Button, etc.)
    Server/
      prisma.ts       # Prisma client singleton
    prismicio.ts      # Prismic client setup
    tracking.ts       # Mixpanel analytics helpers
    icons/            # Icon assets
    fonts/            # Font files
    Images/           # Static images

customtypes/          # Prismic custom type definitions (homepage, page, blog_post, etc.)
prisma/               # Database schema and migrations
static/               # Static assets, favicons, images
```

## CMS

All page content is managed through Prismic. Pages are built from reusable slice components that map to content blocks in the CMS. To edit or add slices locally, use Slice Machine:

```bash
npm run slice
```

## Newsletter Signups

Email signups are collected via an API route and stored in a PostgreSQL database (Neon). Signup forms include Cloudflare Turnstile verification to block spam. The database schema is a single `Email` model with `id`, `email`, and `formID` fields.

## Deployment

The site deploys to Vercel. The `vercel-build` script runs Prisma migrations before the build step.

Domain aliases (`career-fingerprint.com`, `www.career-fingerprint.com`, `skillfingerprint.com`) redirect to the canonical domain via `vercel.json`.

## Environment Variables

- `DATABASE_URL` – Neon PostgreSQL connection string
- `TURNSTILE_SECRET` – Cloudflare Turnstile secret for form verification
- `PUBLIC_MIXPANEL_TOKEN` – Mixpanel project token
- `PRISMIC_ACCESS_TOKEN` – Prismic API access token
