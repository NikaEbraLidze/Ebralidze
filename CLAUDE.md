# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio + blog for Nikoloz Ebralidze — React 19, TypeScript, Vite 7 (`rolldown-vite`, pinned via `package.json` `overrides`). Client-rendered SPA (no SSR/SSG), deployed under base path `/Ebralidze` (see `vite.config.ts`, likely GitHub Pages — confirm before changing deploy config).

Full visual design system lives in **`DESIGN.md`** (root) — read it before any UI work. Per-brand reference systems (Apple, Linear, Stripe, Vercel, Cursor, Cal.com, Raycast) live in `.claude/design-references/` for structural inspiration only, never for their colors/type.

## Build & Run

- Dev: `npm run dev`
- Build: `npm run build` (runs `tsc -b && vite build`)
- Lint: `npm run lint`
- Preview production build: `npm run preview`

There is no test suite, no `lint:fix`, and no `format` script configured — don't assume they exist.

## Architecture

```
src/
├── assets/              # Static images/icons (barrel-exported via assets/index.ts)
├── components/          # Shared UI: button, footer, header, input, layout, locales, typography
├── data/                 # Static content data (blogData.ts — the blog has no CMS/backend)
├── pages/                # Route-level pages: home (+ Hero/ExploreMyWork/FeaturedProjects/MyService/Contact), blog, blog-post
├── routes/               # Route config (routeConfig array) + container that renders <Routes>
├── seo/                  # react-helmet-async SEO components (PortfolioHelmet)
├── styles/               # Design tokens: variables.css, spacing.css, theme/{light,dark}.css
└── utils/hooks/          # useLocalizedText, themeContext
```

### File-split convention — follow it for every new component/page

A component or page is never one file. Split into up to four:

- **`index.tsx`** — presentation only. Props in, JSX out. No fetching, no business logic.
- **`container.tsx`** (or `container.ts` for non-JSX logic) — state, handlers, data wiring. This is what the route/parent actually imports and renders.
- **`index.types.ts`** — local prop types and interfaces for this component.
- **`index.module.css`** — CSS Modules, scoped to this component (`localsConvention: camelCase` — import as `styles.myClass`, not `styles["my-class"]`).

Example scaffold for a new page-level feature:
```
src/pages/projects-detail/
├── index.tsx           # <ProjectsDetailView project={project} />
├── container.tsx        # export const ProjectsDetailContainer = () => { ...fetch/derive... ; return <ProjectsDetailView .../> }
├── index.types.ts        # export interface ProjectsDetailProps { project: Project }
└── index.module.css
```
Route config (`src/routes/config.tsx`) lazy-imports the **container**, never `index.tsx` directly. Follow the existing `blog`/`blog-post` pair as the reference implementation.

### Path alias
`@/*` → `src/*` (configured in both `vite.config.ts` and `tsconfig.app.json`). Use `@/components/...`, `@/utils/...` etc. across feature boundaries — never a multi-level relative import (`../../../`).

## Active Technologies

| Category | Technology | Note |
|---|---|---|
| Framework | React 19 + TypeScript 5.9 | strict mode on |
| Build | Vite 7 (`rolldown-vite`) | CSR only, no SSR/SSG |
| Routing | React Router 7 | lazy-loaded per route via `React.lazy` + `Suspense` |
| Styling | CSS Modules | no Tailwind, no CSS-in-JS despite `class-variance-authority`/`tailwind-merge` being installed (see Known Debt) |
| SEO | react-helmet-async | only wired into the Home page currently — see Known Debt |
| Utility | `clsx` | actually used, for conditional className composition (Button, Input) |
| Linting | ESLint 9 + typescript-eslint, react-hooks, react-refresh | no Prettier configured |

## Design System Tokens

**This project is light-mode only** (see `DESIGN.md` — dark mode was a considered and rejected direction). Never hardcode a hex value in a component; always reference a CSS custom property. Full palette, typography roles, and do's/don'ts live in `DESIGN.md` — this is the quick-reference:

**Colors** (`src/styles/theme/light.css`):
- Accent (the one interactive color): `--color-accent-primary` (#17b8a6) + `-hover`/`-active`/`-muted`/`-disabled`/`-focus` states
- Text: `--color-text-primary`, `--color-text-secondary`
- Surface: `--color-bg-primary`, `--color-bg-surface`, `--color-card-bg`
- Links (separate 4-state ladder, don't reuse accent tokens for inline links): `--color-link`, `-hover`, `-active`, `-visited`
- Border: `--color-border-default`
- Error: `--input-border-error`, `--input-error-text`

**Typography** (`src/styles/variables.css`):
- Size scale: `--font-size-10` through `--font-size-48` — **em-based**, so it scales with an ancestor font-size. Never hardcode `px` font sizes.
- Weight: `--font-weight-light/regular/medium/semibold/bold` (300/400/500/600/700). Prefer 600 over 700 for headline emphasis; reserve 300 for a deliberate airy moment, not default body.
- Letter-spacing: `--letter-spacing-tight` (-0.02em, apply at 32px/`h2` and above only), `-normal`, `-wide`.
- Line-height: `--line-height-tight` (1.2, headings), `-normal` (1.5, body), `-relaxed` (1.75, lead paragraphs).

**Spacing** (`src/styles/spacing.css`):
- Scale: `--spacing-zero` through `--spacing-xc` — **em-based**, use scale tokens, not arbitrary px, for anything beyond a one-off micro-adjustment.
- `--gap-section` (120px) — rhythm between major page sections. Don't compress it to fit more content; trim content instead.
- Containers: `--max-width-sm` (928px, text-heavy), `--max-width-md` (1120px), `--max-width-lg` (1440px, card grids).

**Radius** (`src/styles/variables.css`): `--radius-none` through `--radius-full`. Keep component radii in the `sm`–`lg` (4–12px) range — matches Linear's card radius, keeps the site feeling like a developer tool, not a consumer SaaS product.

## Component Reuse — check before writing raw HTML

This project has a small, deliberate component library in `src/components/`. Always check it before reaching for a bare `<button>`, `<span>`, or `<input>`:

- **`Typography`** (`src/components/typography`) — every piece of text goes through this. Props: `weight` (`light|regular|medium|semibold|bold`), `align`, `size` (`10|12|13|14|16|18|20|24|28|32|36|40|48` — a closed set, don't pass an arbitrary number), `underline`, `as` (`span|p|h1..h6|div|label`), `className`.
- **`Button`** (`src/components/button`) — never a bare `<button>` for a CTA. Props: `label`, `leftIcon`/`rightIcon`, `variant` (`filled|outline|text|icon`), `fullWidth`, `isLoading`, `disabled`, plus `containerClassName`/`labelClassName`/`*IconClassName` for one-off overrides. `filled` is the primary accent CTA — one per section/decision point, matching the single-accent design principle.
- **`Input`** (`src/components/input`) — floating-label pattern with `error`/`helperText`/`fullWidth`/`leftIcon` already built in. Reuse rather than rebuilding label/error/focus behavior.

**Known component gap**: `Button`'s `icon` variant has no dedicated `:focus-visible` style beyond the base rule — confirmed missing in a prior accessibility audit. Fix this in `button/index.module.css` before shipping a new icon-only button in a keyboard-navigable flow, or route new icon buttons through the `outline`/`text` variant instead until it's fixed.

## Localization — single source of truth

All user-facing copy must go through `src/components/locales/{en,ka}.ts` via `useLang`/`useLocalizedText`, **not** be hardcoded inline. The whole point is that changing copy means editing one file, not hunting through components.

**Current compliance gap** (fix opportunistically, don't leave it spreading): `Header`, `Footer`, `blog`, `blog-post`, and the route-level `Loading` fallback (`src/routes/config.tsx`) all currently have hardcoded strings (English and Georgian, e.g. `"პოსტი არ მოიძებნა"` in `blog-post/index.tsx`) instead of pulling from `en.ts`/`ka.ts`. Only `pages/home/*` sections are fully wired up. Any new copy — and any touched file with a hardcoded string — should move into the locale files.

## SEO & Structure — continuous improvement

SEO is not a one-time task; check it whenever a page/route changes. See the `seo` agent (`.claude/agents/seo.md`) for the full brief, including why hreflang doesn't apply here (locale is a client-side toggle, not URL-routed) and why CSR-without-prerendering is the site's core technical-SEO risk. Known open gaps: `/blog` and every `/blog/:slug` post currently ship with no per-page title/description/canonical/OG tags (only Home has `PortfolioHelmet`); no `robots.txt`/`sitemap.xml` exist yet.

Structure hygiene applies the same way: when adding a page, follow the file-split convention above; when a folder grows past what it's doing, propose a split rather than letting one file accumulate unrelated logic. Prefer deleting dead code over commenting it out.

## Code Standards

- Check for an existing reusable component before writing new markup — see Component Reuse above.
- KISS, DRY — but don't introduce an abstraction for a single use site. Three similar lines beat a premature helper.
- Use CSS Modules, not inline `style={{}}` — the one exception already in the codebase (dynamic values that can't be a CSS class) should stay rare.
- Use stable keys in `.map()` — never the array index.
- Prefer editing an existing file over creating a new one, and prefer deleting unused code over leaving it commented out.
- Prefer `@/*` alias imports over deep relative paths (see Architecture above).

### React Hooks Discipline

`useCallback`, `useMemo`, and `React.memo` are not free — they cost a dependency check, GC pressure, and stale-closure risk. Use them to fix a real, observed problem, never preemptively. A memoization fix is justified only when **all** of:

1. There's a real re-render/recomputation cost (heavy work, a large list, or a child wrapped in `React.memo`).
2. Dependencies are genuinely stable most renders (otherwise the cache misses every time — pure overhead).
3. The fix doesn't introduce a fragile dependency array.

Anti-patterns already flagged in this codebase and worth avoiding elsewhere:
- Context `value={{...}}` object literals recreated every render (`LanguageContext`, `ThemeContext`) — force every consumer to re-render on any provider state change. Wrap in `useMemo`.
- Deriving state from a static/synchronous source via `useEffect`+`useState` (`blog-post/container.tsx`) instead of a plain `useMemo`/const — causes an unnecessary extra render and a loading flash.
- `useCallback` passed to a non-memoized child — does nothing, only adds cost.
- `React.memo` on a component whose props change every render anyway, or on a trivial 1–2 element component — the wrapper overhead exceeds what it saves.

When in doubt, leave the simpler code.

## Known Debt (address opportunistically, don't let it grow)

- **Unused dependencies** in `package.json`: `three`, `ogl` (no imports anywhere in `src/` — either dead weight or a planned hero effect that never landed), `class-variance-authority`, `tailwind-merge`, `react-icons`, `lucide-react` (none imported; the project uses inline SVG/CSS Modules instead). Confirm intent before removing, in case a planned feature (WebGL hero, icon system) explains them.
- **Dark-mode code still present** despite the light-only design direction in `DESIGN.md`: `src/styles/theme/dark.css`, `ThemeProvider`/`themeContext.tsx`, and the header's theme toggle. Removing this is a deliberate follow-up, not yet done — don't add new `[data-theme="dark"]`-conditional code in the meantime.
- **Localization gaps** — see Localization section above.
- **SEO gaps** — see SEO section above.
- **Mobile menu toggle** (`header/index.module.css`) uses `display:none`↔`flex`, which can't be transitioned — a real UX gap flagged in a prior animation audit, not just a nice-to-have.

## Agents & Skills

Project-scoped agents live in `.claude/agents/` — dispatch them for their named purpose rather than doing the work ad hoc:
- **`frontend-security`** — XSS/CSP/headers/env-var/dependency review, scoped to this frontend-only, no-backend site.
- **`frontend-designer`** — new UI/visual-polish work; enforces `DESIGN.md` tokens and the component-reuse/file-split rules above.
- **`seo`** — metadata, structured data, technical SEO, adapted to this project's CSR/no-CMS/client-toggle-locale reality (not generic Next.js advice).

Project-scoped skills live in `.claude/skills/` (from `emilkowalski/skills` and `leonxlnx/taste-skill`) — animation (`animate`, `improve-animations`, `review-animations`), design taste (`emil-design-eng`, `apple-design`, `taste-skill`, `minimalist-skill`, `brutalist-skill`, etc.), and mobile/native feel (`mobile-native`). Check `Skill` availability before reinventing guidance these already cover.

## Collaboration Rules

When you hit a decision that needs the user's input (scoping call, ambiguous requirement, copy/wording sign-off, a trade-off with no clear default) — use `AskUserQuestion`, don't just pose the question in plain text and keep working past it.

## Workflow by Task Type

| Task Type | Suggested Steps |
|---|---|
| New feature / new UI | `frontend-designer` agent (enforces tokens + component reuse) → implement → verify in dev server |
| Bug fix (non-trivial) | `superpowers:systematic-debugging` → fix → verify |
| Bug fix (trivial) | direct fix → verify |
| SEO / metadata work | `seo` agent |
| Security-sensitive change (forms, external scripts, env vars) | `frontend-security` agent before merge |
| Refactor | plan the change → execute → self-review against Code Standards above |
| Before claiming anything is done | run `npm run lint` and `npm run build` (which runs `tsc -b`); for UI changes, run `npm run dev` and check the actual browser, not just a type-check |
