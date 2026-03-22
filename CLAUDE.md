# CLAUDE.md — Website Frontend Rules

> These rules apply when working on Murphy Rental Property Management website files.
> The root CLAUDE.md (WATT framework) also applies — use existing tools before building new ones, document what you learn in workflows, and keep the self-improvement loop running.

## Tech Stack
- **Next.js** (App Router) with TypeScript
- **Tailwind CSS v4** (PostCSS-integrated, not CDN)
- **shadcn/ui v4** (uses `@base-ui/react`, not Radix — no `asChild` prop, use `render` prop for polymorphism)
- **Formspree** for all forms (no backend)
- **Vercel** deployment target
- Domain: `murphyrentalpropertymanagement.com`

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `cd website && npm run dev` (serves at `http://localhost:3000`)
- If the server is already running, do not start a second instance.

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`

## Design Tokens (defined in globals.css)
- **Primary:** Navy `#1B2A4A`
- **Accent:** Warm amber `#D4A853`
- **Heading font:** DM Serif Display (serif)
- **Body font:** Inter (sans-serif)
- **Backgrounds:** White `#FFFFFF`, Section `#F5F7FA`, Hero gradient `#EEF2F7`
- **Shadows:** Color-tinted with navy, layered — never flat `shadow-md`

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Use brand tokens.
- **Shadows:** Use layered, color-tinted shadows with low opacity.
- **Typography:** Headings use DM Serif Display, body uses Inter. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## SEO Checklist (Required for Every New Page)
Every new page MUST include:
1. **Metadata** — `export const metadata` or `generateMetadata()` in the page file with title and description
2. **Canonical URL** — via `metadataBase` in root layout (already set to `murphyrentalpropertymanagement.com`)
3. **Sitemap entry** — Add the new URL to `public/sitemap.xml`
4. **Navigation links** — Add to Navbar and/or Footer where appropriate
5. **Alt text** — All images must have descriptive `alt` attributes

## Component Conventions
- Server components by default — only add `"use client"` when state or browser APIs are needed
- Forms are always client components (`"use client"`)
- Use `next/font/google` for fonts (already configured in root layout)
- Use `next/image` for optimized images where possible
- shadcn/ui Button does NOT support `asChild` — use `render` prop or plain styled `<Link>` elements

## Hard Rules
- Do not add sections, features, or content not in the spec
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
- Mobile-first responsive — majority of tenants will view on phone
