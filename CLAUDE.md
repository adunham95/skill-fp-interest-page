# Career Fingerprint — Marketing Site (Interest Page)

## What this is

The public marketing site for Career Fingerprint. Separate from the app — different codebase, different deployment. Content is managed in Prismic CMS and pulled at build/request time.

---

## Stack

- **SvelteKit** (TypeScript)
- **Tailwind CSS** (confirm version in package.json)
- **Prismic CMS** — content source for all marketing copy, images, and page sections

---

## Structure

```
Interest Page/
├── src/
│   ├── routes/      # SvelteKit file-based routing
│   ├── lib/
│   │   ├── components/
│   │   └── utils/
│   └── app.html
└── package.json
```

---

## Conventions

- **Content comes from Prismic.** Don't hardcode marketing copy into components — it should be fetched from Prismic so it can be edited without a deploy.
- **Routing:** standard SvelteKit file-based conventions.
- **Semantic HTML:** use proper elements (`<nav>`, `<main>`, `<section>`, `<button>`, etc.). No SvelteKit form actions.
- **No raw CSS:** Tailwind utilities only.

---

## Brand tokens

Same brand system as the app — keep these consistent:

| Name          | Hex       | Usage            |
| ------------- | --------- | ---------------- |
| Heatstroke    | `#ff7a8a` | Primary / CTA    |
| Blue Opal     | `#113a5d` | Dark / text      |
| Verditer      | `#00bfa6` | Accent / success |
| Cool December | `#fdfaf9` | Background       |

**Typography:** `Libre Baskerville` for headings, `Josefin Sans` for UI text.

---

## Prismic

- Content types/slices defined in the Prismic dashboard.
- Fetch content in `+page.server.ts` load functions using the Prismic client.
- Don't duplicate content that lives in Prismic into hardcoded strings.

> **TODO:** List key Prismic custom types and slice names here so Claude knows what's available without opening the Prismic dashboard.

---

## Adding a new page

1. Create `src/routes/[path]/+page.svelte`
2. In `+page.server.ts`, fetch the relevant Prismic document
3. Pass data to the page component as props
4. Use brand tokens and existing component patterns

---

## Things to avoid

- Don't hardcode marketing content that should live in Prismic.
- Don't invent colors — use brand tokens above.
- Don't use SvelteKit form actions.
- Don't copy components from the app frontend (`front-end/`) — the two codebases are separate.
