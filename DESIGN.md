---
version: alpha
name: Ebralidze-portfolio-design
description: A personal developer-portfolio system, light-mode only, built on a teal accent (#17b8a6) over a warm-neutral ink-on-white palette, and an em-based type/spacing scale. Design principles are synthesized from Apple, Linear, Stripe, and Vercel (see .claude/design-references/): one disciplined accent color used sparingly, quiet ink tones rather than pure black, negative tracking on display type, hairline borders over heavy shadows, and generous section rhythm.

colors:
  accent: "#17b8a6"
  accent-hover: "#14a796"
  accent-active: "#119485"
  accent-muted: "#17b8a6cc"
  accent-disabled: "#17b8a680"
  accent-focus: "#17b8a64d"
  bg-primary: "#ffffff"
  bg-surface: "#fafafa"
  card-bg: "#f5f5f5"
  ink: "#111111"
  ink-secondary: "#111111cc"
  ink-muted: "#6b6b6b"
  link: "#0fa395"
  link-hover: "#17b8a6"
  link-active: "#0c8f83"
  link-visited: "#0d7f75"
  border-default: "#e0e0e0"
  error: "#e53935"

typography:
  family: "system-ui, -apple-system, 'Segoe UI', sans-serif (project default stack)"
  scale: "src/styles/variables.css --font-size-10 through --font-size-48 (em-based)"
  weights: "300 light / 400 regular / 500 medium / 600 semibold / 700 bold"
  letter-spacing: "--letter-spacing-tight -0.02em / normal 0 / wide 0.02em"
  line-height: "--line-height-tight 1.2 / normal 1.5 / relaxed 1.75"
  roles:
    hero: { size: "--font-size-48", weight: 600, lineHeight: tight, letterSpacing: tight }
    h1: { size: "--font-size-40", weight: 600, lineHeight: tight, letterSpacing: tight }
    h2: { size: "--font-size-32", weight: 600, lineHeight: tight, letterSpacing: tight }
    h3: { size: "--font-size-24", weight: 600, lineHeight: normal, letterSpacing: normal }
    lead: { size: "--font-size-20", weight: 400, lineHeight: relaxed, letterSpacing: normal }
    body: { size: "--font-size-16", weight: 400, lineHeight: normal, letterSpacing: normal }
    body-strong: { size: "--font-size-16", weight: 600, lineHeight: normal, letterSpacing: normal }
    body-sm: { size: "--font-size-14", weight: 400, lineHeight: normal, letterSpacing: normal }
    caption: { size: "--font-size-13", weight: 400, lineHeight: normal, letterSpacing: normal }
    button: { size: "--font-size-16", weight: 500, lineHeight: tight, letterSpacing: normal }
    nav-link: { size: "--font-size-14", weight: 500, lineHeight: tight, letterSpacing: normal }
    fine-print: { size: "--font-size-12", weight: 400, lineHeight: normal, letterSpacing: normal }

spacing:
  scale: "src/styles/spacing.css --spacing-zero through --spacing-xc (em-based, 4px-ish rhythm)"
  section-gap: "var(--gap-section)"   # 120px
  container-sm: "var(--max-width-sm)" # 928px
  container-md: "var(--max-width-md)" # 1120px
  container-lg: "var(--max-width-lg)" # 1440px

rounded:
  scale: "src/styles/variables.css --radius-none through --radius-full"
---

## Overview

This is a personal developer-portfolio site (React 19 + TypeScript + Vite), not a SaaS marketing surface — the design system stays intentionally lighter than the brand systems it draws from. **The site is light-mode only.** Dark mode has been dropped as a design direction: one considered palette, applied consistently, reads more deliberate than a toggle that has to work everywhere. The system keeps a single teal accent (`#17b8a6`) over a warm-neutral, ink-on-white base, and em-based type/spacing scales that proportionally resize with a root font-size change.

This document borrows the *discipline* of four references analyzed in `.claude/design-references/` — Apple, Linear, Stripe, Vercel — and applies it to a light-only palette.

**What's being borrowed, and from where:**
- **One accent, used sparingly** (Apple, Linear) — `{colors.accent}` should read as the single "click me" signal: CTAs, links, focus rings, the active nav state. It should not appear as a body-text color or a decorative fill.
- **Quiet ink over pure black** (Apple, Stripe) — Apple never uses `#000000` for text (`#1d1d1f`); Stripe uses a navy ink (`#0d253d`). This system uses `{colors.ink}` (`#111111`) as its text color, not pure black — the one deliberate softening applied on top of the site's original light-theme tokens.
- **Negative tracking on display type** (all four references) — headlines at `h2` size and above use `--letter-spacing-tight` (-0.02em); this project's `Typography` component already supports `as`/size props, so this is a per-usage choice, not a new token.
- **Hairline borders over heavy shadows** (Linear, Apple) — `{colors.border-default}` at 1px is the primary depth signal; reserve shadows (if introduced) for a single deliberate use, not general card elevation.
- **Section rhythm, not gradient decoration** — `--gap-section` (120px) already gives pages Apple-tile-like breathing room between sections. No gradient mesh has been introduced; the existing flat-color, high-whitespace approach reads closer to Apple/Linear than Stripe/Vercel's mesh-hero style, and should stay that way for a personal portfolio (a mesh gradient is a product-marketing device, not a portfolio one).

> **Migration note:** the codebase still contains dark-theme infrastructure (`src/styles/theme/dark.css`, `ThemeProvider`/`themeContext.tsx`, the header's theme toggle). This document specifies the *target* design direction; removing that code is a separate implementation step, not yet done.

## Colors

Light-only, flat palette — no `[data-theme]` branching. Values below are the canonical hex; reference them as named tokens (`{colors.accent}`, etc.) in components rather than repeating hex codes.

| Token | Value | Use |
|---|---|---|
| `{colors.accent}` | `#17b8a6` | The one interactive color — CTAs, active links, focus rings, input focus borders. No second accent hue. |
| `{colors.accent-hover}` | `#14a796` | Hover state for accent-colored buttons/links. |
| `{colors.accent-active}` | `#119485` | Pressed/active state. |
| `{colors.accent-muted}` | `#17b8a6cc` (80% alpha) | Secondary accent usage — muted icons, subtle highlights. |
| `{colors.accent-disabled}` | `#17b8a680` (50% alpha) | Disabled buttons/inputs. |
| `{colors.accent-focus}` | `#17b8a64d` (30% alpha) | Focus ring / outline glow. |
| `{colors.bg-primary}` | `#ffffff` | Base page canvas. |
| `{colors.bg-surface}` | `#fafafa` | Slightly lifted surface — sticky headers, subtle section breaks. |
| `{colors.card-bg}` | `#f5f5f5` | Card/panel fill — one step darker than surface for clear card separation without a shadow. |
| `{colors.ink}` | `#111111` | Primary text — a quiet near-black, not `#000000`. |
| `{colors.ink-secondary}` | `#111111cc` (80% alpha) | Secondary body copy, subheadings. |
| `{colors.ink-muted}` | `#6b6b6b` | Captions, helper text, disabled labels. |
| `{colors.link}` / `{colors.link-hover}` / `{colors.link-active}` / `{colors.link-visited}` | `#0fa395` → `#17b8a6` → `#0c8f83` → `#0d7f75` | A 4-state ladder distinct from button accent states — use this ladder for any inline link, don't reach for the button tokens. |
| `{colors.border-default}` | `#e0e0e0` | 1px hairline border — the system's primary depth signal. |
| `{colors.error}` | `#e53935` | The only semantic color — input validation only. |

## Typography

Font stack: system-ui first (`system-ui, -apple-system, "Segoe UI", sans-serif`) — no custom webfont is loaded, matching the project's current setup.

| Role | Size token | Weight | Line height | Letter spacing | Use |
|---|---|---|---|---|---|
| `{typography.hero}` | `--font-size-48` (48px) | 600 | tight (1.2) | tight (-0.02em) | Hero headline (Home) |
| `{typography.h1}` | `--font-size-40` (40px) | 600 | tight | tight | Page-level heading |
| `{typography.h2}` | `--font-size-32` (32px) | 600 | tight | tight | Section heading |
| `{typography.h3}` | `--font-size-24` (24px) | 600 | normal (1.5) | normal (0) | Sub-section / card title |
| `{typography.lead}` | `--font-size-20` (20px) | 400 | relaxed (1.75) | normal | Intro/lead paragraph under a heading |
| `{typography.body}` | `--font-size-16` (16px) | 400 | normal | normal | Default paragraph text |
| `{typography.body-strong}` | `--font-size-16` (16px) | 600 | normal | normal | Inline emphasis within body copy |
| `{typography.body-sm}` | `--font-size-14` (14px) | 400 | normal | normal | Secondary/supporting text, form labels |
| `{typography.caption}` | `--font-size-13` (13px) | 400 | normal | normal | Captions, metadata |
| `{typography.button}` | `--font-size-16` (16px) | 500 | tight | normal | Button labels |
| `{typography.nav-link}` | `--font-size-14` (14px) | 500 | tight | normal | Header/footer nav links |
| `{typography.fine-print}` | `--font-size-12` (12px) | 400 | normal | normal | Legal/footer fine print |

### Principles
- **Scale is em-based** (`--font-size-10` through `--font-size-48` in `src/styles/variables.css`) so it resizes proportionally with an ancestor font-size — never hardcode px sizes in new components.
- **Weight ladder is 300 / 400 / 500 / 600 / 700**, but treat 600 as the headline ceiling for normal use (Apple/Linear both treat 700 as rare) and reserve 300 for a deliberate "airy" lead paragraph, not default body text.
- **Negative tracking (`--letter-spacing-tight`, -0.02em) starts at `h2` (32px) and above.** Below that, use `--letter-spacing-normal` — tight tracking on small text reads as a bug, not a brand signature.
- **Line height by role, not by default**: tight (1.2) for anything acting as a heading, normal (1.5) for body copy, relaxed (1.75) reserved for lead paragraphs that need to breathe.

## Layout

- **Containers**: three fixed max-widths — `{spacing.container-sm}` 928px, `{spacing.container-md}` 1120px, `{spacing.container-lg}` 1440px. Pick by content density, not by habit: text-heavy sections (About, blog post body) → `sm`; card grids (FeaturedProjects) → `md`/`lg`.
- **Section rhythm**: `{spacing.section-gap}` (120px) between major page sections — this is already generous and Apple-tile-like; don't compress it to fit more content, trim content instead.
- **Spacing scale**: `--spacing-zero` through `--spacing-xc`, em-based. Use the scale tokens, not arbitrary px values, for anything that isn't a one-off micro-adjustment.

## Shapes

- **Radius scale**: `--radius-none` (0) through `--radius-full` (pill). Current usage should stay in the `sm`–`lg` (4–12px) range for cards/buttons, matching Linear's 8–12px card radius rather than Apple's sharper edges or Cal's very soft ~12px+ rounding — this keeps the site feeling like a developer tool rather than a consumer SaaS product.

## Do's and Don'ts

### Do
- Keep `{colors.accent}` (#17b8a6) as the only interactive color across the whole site.
- Use `{colors.ink}` (#111111), not `#000000`, for primary text.
- Reuse the existing em-based type/spacing scales (`variables.css`, `spacing.css`) instead of introducing new hardcoded values.
- Apply negative letter-spacing (`h2`/32px and above) for the "tight" display feel the reference systems share.
- Lean on hairline borders (`{colors.border-default}`) for card/section separation before reaching for shadows.
- Preserve the generous `--gap-section` rhythm between page sections.

### Don't
- Don't add a second accent color or a decorative gradient mesh — that's a SaaS-marketing device (Stripe/Vercel), not a portfolio one.
- Don't add a dark theme, a `[data-theme]` toggle, or any dark-mode-conditional styling — the design direction is light-only.
- Don't hardcode `#000000` for new text — use `{colors.ink}`/`{colors.ink-secondary}`/`{colors.ink-muted}`.
- Don't apply tight letter-spacing below `h2` size — it reads as a bug on small text, not a brand signature.
- Don't mix radius scales within one component family — pick one token per component type and stay consistent.
- Don't drop `--gap-section` below its current value to cram in more content.

## Reference Library

Full per-brand system analyses are saved at `.claude/design-references/{apple,linear,stripe,vercel,cursor,cal,raycast}/DESIGN.md` for deeper consultation on any specific pattern (button states, responsive breakpoints, elevation scales) not covered here.
