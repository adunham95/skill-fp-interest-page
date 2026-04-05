# Career Fingerprint — Marketing Site (Interest Page)

## What this is

The public marketing site for Career Fingerprint. Separate from the app — different codebase, deployed to Vercel. Content is managed in Prismic CMS and pulled at build/request time.

---

## Stack

- **SvelteKit 2 / Svelte 5** (TypeScript) — use Svelte 5 runes (`$props()`, `$state()`, `$derived()`, etc.)
- **Tailwind CSS v4** — utility classes only
- **Prismic CMS** (`@prismicio/client`, `@prismicio/svelte`) — content source for all marketing copy, images, and page sections
- **Prisma + Neon** — serverless Postgres for email list signups (`src/lib/Server/prisma.ts`)
- **Amplitude** (`@amplitude/unified`) — analytics (`src/lib/analytics.ts`, `src/lib/tracking.ts`)
- **Satori + resvg** — OG image generation (`src/routes/api/og/`)
- **Vercel** — deployment target (`@sveltejs/adapter-vercel`)

---

## Structure

```
src/
├── routes/
│   ├── (site)/                          # Main site routes
│   │   ├── [[preview=preview]]/         # Prismic preview-aware routes
│   │   │   ├── +page.svelte/server.ts   # Homepage
│   │   │   ├── [uid]/                   # Generic CMS pages
│   │   │   ├── blog/                    # Blog list + [uid] posts
│   │   │   └── tools/[uid]/             # Tool pages
│   │   ├── brand-guidelines/
│   │   └── +layout.svelte
│   ├── api/
│   │   ├── email-list/                  # Email list signup (writes to Neon DB)
│   │   ├── og/                          # OG image generation (satori)
│   │   ├── preview/                     # Prismic preview handler
│   │   └── index-sitemap/
│   ├── sitemap.xml/
│   ├── sign-up-success/
│   └── slice-simulator/                 # Prismic slice simulator
├── lib/
│   ├── Components/                      # Reusable UI components
│   │   ├── Header/                      # Header, HeaderItem, MobileHeaderItem
│   │   ├── Icon/                        # Icon component + iconMap.ts
│   │   ├── Text/                        # Tag
│   │   └── Banner, Button, ButtonRow, ColorCard, CurtainReveal,
│   │       Footer, OGCard, PageContainer, ScrollIndicator, SEO,
│   │       SocialSheet, MpTargetHighlighter
│   ├── slices/                          # Prismic slice components (see below)
│   ├── Utils/
│   │   ├── generatePageName.ts
│   │   └── isEmptyPrismic.ts
│   ├── Server/
│   │   └── prisma.ts                    # Prisma client (Neon serverless)
│   ├── analytics.ts                     # Amplitude setup
│   ├── tracking.ts                      # Event tracking helpers
│   └── prismicio.ts                     # Prismic client factory
├── params/
│   └── preview.ts                       # Prismic preview param matcher
├── prismicio-types.d.ts                 # Generated Prismic types
├── app.css                              # Global styles + Tailwind import
├── brand.css                            # Brand token CSS variables
└── button-variants.css                  # Reusable button variant classes
```

---

## Prismic custom types

| Type          | Description                             |
| ------------- | --------------------------------------- |
| `homepage`    | Homepage document                       |
| `page`        | Generic marketing page (slice-based)    |
| `blog_post`   | Blog post                               |
| `features`    | Features page                           |
| `header`      | Site header (nav links)                 |
| `footer`      | Site footer                             |
| `banner`      | Site-wide announcement banner           |
| `vanity_url`  | Short URL redirects                     |

---

## Prismic slices

All slices live in `src/lib/slices/`. Each has `index.svelte`, `model.json`, and `mocks.json`.

| Slice                          | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `Hero`                         | Main hero, multiple variants (offset, phone)     |
| `HeroWithScreenshot`           | Hero with app screenshot                         |
| `HeroOverBackgroundImage`      | Hero overlaid on a background image              |
| `HeroWithCtaAndNavigationPreview` | Hero with nav preview                         |
| `VideoHero`                    | Hero with embedded video                         |
| `HeadlineOverlay`              | Large headline overlay section                   |
| `FeatureBentoBox`              | Bento grid feature layout                        |
| `FeatureCardsGrid`             | Grid of feature cards                            |
| `FeatureScreenshot`            | Feature with screenshot (light/dark variants)    |
| `FeatureSideHero`              | Side-by-side feature with icon list              |
| `FeatureVideo`                 | Feature with video                               |
| `FeatureWIthImage`             | Feature with image (light/dark variants)         |
| `AudienceOverview`             | Target audience section                          |
| `UseCase`                      | Use case callout                                 |
| `TheWhy`                       | "Why" narrative section                          |
| `StepByStep`                   | Numbered steps                                   |
| `SectionWithSubsections`       | Section with expandable subsections              |
| `PricingOverview`              | Pricing cards                                    |
| `AdvancedPricingTable`         | Detailed pricing comparison                      |
| `PricingComparisonTable`       | Plan comparison table                            |
| `PricingCalculator`            | Interactive pricing calculator                   |
| `FaqGroup`                     | FAQ accordion                                    |
| `SingleTestimonial`            | Testimonial quote                                |
| `TeamOverview`                 | Team member cards                                |
| `FeaturedBlogPosts`            | Blog post highlights                             |
| `CtaBlock`                     | Call to action block                             |
| `GradientCta`                  | Gradient-background CTA                          |
| `MultiActions`                 | Multiple CTA buttons                             |
| `NewsletterSignUp`             | Email capture form                               |
| `ImageBlock`                   | Standalone image                                 |
| `PageTitle`                    | Page title header                                |
| `RichText`                     | Rich text content block                          |

---

## Conventions

- **Content comes from Prismic.** Don't hardcode marketing copy into components.
- **Routing:** standard SvelteKit file-based conventions. Preview-aware routes use the `[[preview=preview]]` optional segment.
- **Svelte 5 runes** throughout — `$props()`, `$state()`, `$derived()`, etc. No Svelte 4 syntax.
- **No raw CSS:** Tailwind v4 utilities only. Brand tokens defined in `brand.css` as CSS variables.
- **Semantic HTML:** `<nav>`, `<main>`, `<section>`, `<button>`, etc. No SvelteKit form actions.
- **Analytics:** use `src/lib/analytics.ts` / `src/lib/tracking.ts` for Amplitude events. No PII.

---

## Brand tokens

| Name          | Hex       | Usage            |
| ------------- | --------- | ---------------- |
| Heatstroke    | `#ff7a8a` | Primary / CTA    |
| Blue Opal     | `#113a5d` | Dark / text      |
| Verditer      | `#00bfa6` | Accent / success |
| Cool December | `#fdfaf9` | Background       |

**Typography:** `Libre Baskerville` for headings, `Josefin Sans` for UI text.

---

## Adding a new page

1. Create `src/routes/(site)/[[preview=preview]]/[uid]/+page.server.ts` — fetch the Prismic document by UID
2. Create the matching `+page.svelte` — render slices via `<SliceZone>`
3. Use `<SEO>` component for meta tags
4. Use brand tokens and existing component patterns

## Adding a new slice

1. Define the model in Prismic dashboard, then sync with `npm run slice`
2. The slice component is scaffolded at `src/lib/slices/[SliceName]/index.svelte`
3. Add it to `src/lib/slices/index.ts`

---

## Things to avoid

- Don't hardcode marketing content that should live in Prismic.
- Don't invent colors — use brand tokens above.
- Don't use SvelteKit form actions.
- Don't use Svelte 4 syntax — use Svelte 5 runes throughout.
- Don't copy components from the app frontend (`front-end/`) — the two codebases are separate.
- Don't log PII to Amplitude.
