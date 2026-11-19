<p align='center'>
<img src='https://raw.githubusercontent.com/takere/.github/main/docs/images/logo/logo.png' alt="logo" />
</p>

<div align="center">

<h1>Takere - Design System</h1>
<p>Documentation website of the Takere design system.</p>

<a href="CODE_OF_CONDUCT.md"><img src="https://img.shields.io/badge/code%20of-conduct-ff69b4.svg" alt="Code of Conduct" /></a>
<a href="SECURITY.md"><img src="https://img.shields.io/badge/security-policy-orange.svg" alt="Security Policy" /></a>
</div>

---

This repository contains the source code of the Takere design system documentation website: colors, typography, spacing, brand, icons and HeroUI components, each with usage guidelines. It is built with Next.js (App Router) and is available in Portuguese, English and Spanish, with light and dark themes.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Routes](#routes)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Design Tokens](#design-tokens)
- [Internationalization](#internationalization)
- [Theming](#theming)
- [Adding a Page](#adding-a-page)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## 🌟 Overview

The site is a **trilingual documentation website** that:

- Documents the Takere **foundations**: colors, typography, spacing (radii and shadows), brand and icons
- Documents the Takere **components** (buttons, cards, forms, feedback and patterns) with live previews, copyable code and do/don't guidelines
- Keeps the design tokens in a **single source of truth** ([`src/styles/tokens.css`](src/styles/tokens.css)), ready to be adopted by the other Takere apps
- Serves Portuguese at unprefixed URLs (`/foundations/colors`), English under `/en` and Spanish under `/es`
- Ships a light theme (default) and a dark theme
- Is responsive: sidebar on desktop, side menu on mobile

## 🧰 Tech Stack

- **[Next.js 16](https://nextjs.org/)** (App Router)
- **[React 19](https://react.dev/)** + **TypeScript**
- **[Tailwind CSS 4](https://tailwindcss.com/)**
- **[HeroUI 3](https://www.heroui.com/)** and **[React Aria](https://react-spectrum.adobe.com/react-aria/)** components
- **[next-intl](https://next-intl.dev/)** for internationalization
- **[next-themes](https://github.com/pacocoursey/next-themes)** for light/dark themes
- **[Phosphor Icons](https://phosphoricons.com/)**
- **ESLint** (`eslint-config-next`)

## 📁 Repository Structure

```
takere-designsystem-frontend/
├── public/
│   └── brand/                   # Logos, symbol and wallpapers
└── src/
    ├── app/
    │   ├── [locale]/            # Single route tree for all languages (pt, en, es)
    │   │   ├── layout.tsx       # Providers (intl, theme, React Aria) + site shell
    │   │   ├── page.tsx         # Overview
    │   │   ├── foundations/     # colors, typography, spacing, brand, icons
    │   │   └── components/      # buttons, cards, forms, feedback, patterns
    │   ├── globals.css          # Tailwind + HeroUI + Takere utilities
    │   └── not-found.tsx        # 404 page
    ├── components/
    │   ├── layout/              # Shell: header, sidebar, mobile menu, theme and language switchers
    │   ├── docs/                # Documentation blocks: DocPage, Section, Preview, CodeBlock, ColorSwatch
    │   └── takere/              # Takere reference components: TakereCard, PageHero, StatusPill...
    ├── features/                # Content of each page
    ├── i18n/                    # Routing, request config, navigation helpers and site texts
    │   ├── pt/ en/ es/          # One JSON file per namespace (colors.json, nav.json...)
    │   └── messages.ts          # Namespace list, message types and loader
    ├── lib/                     # Navigation, token metadata and page helpers
    ├── styles/
    │   └── tokens.css           # Single source of truth for the design tokens
    └── proxy.ts                 # Locale routing in development (next-intl middleware)
scripts/
└── flatten-default-locale.mjs   # Post-build: moves the Portuguese pages to the site root
.github/workflows/               # CI: build, deploy and release
```

## 🧭 Routes

| Portuguese | English | Spanish | Content |
| --- | --- | --- | --- |
| `/` | `/en` | `/es` | Overview |
| `/foundations/colors` | `/en/foundations/colors` | `/es/foundations/colors` | Brand, semantic, status and care type colors |
| `/foundations/typography` | `/en/foundations/typography` | `/es/foundations/typography` | Type scale |
| `/foundations/spacing` | `/en/foundations/spacing` | `/es/foundations/spacing` | Spacing, radii and shadows |
| `/foundations/brand` | `/en/foundations/brand` | `/es/foundations/brand` | Logos, symbol, clear space and correct/incorrect usage |
| `/foundations/icons` | `/en/foundations/icons` | `/es/foundations/icons` | Phosphor icons, weights and sizes |
| `/components/buttons` | `/en/components/buttons` | `/es/components/buttons` | Buttons |
| `/components/cards` | `/en/components/cards` | `/es/components/cards` | Cards, panels and chips |
| `/components/forms` | `/en/components/forms` | `/es/components/forms` | Inputs, selects, checkboxes and switches |
| `/components/feedback` | `/en/components/feedback` | `/es/components/feedback` | Alerts, toasts and skeletons |
| `/components/patterns` | `/en/components/patterns` | `/es/components/patterns` | PageHero, EmptyState, StatCard |

## ✅ Prerequisites

- **Node.js** 20.9 or higher
- **Yarn** 1.22 (`npm install -g yarn`)

### Verify Installation

```bash
node --version
yarn --version
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/takere/takere-designsystem-frontend.git
   cd takere-designsystem-frontend
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   yarn dev
   ```
   The site will be available at http://localhost:3005.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the development server with hot reload (port `3005`) |
| `yarn build` | Build the static export into `out/` |
| `yarn preview` | Serve `out/` locally |
| `yarn lint` | Run ESLint |
| `yarn typecheck` | Run the TypeScript compiler without emitting files |

### Running the production build

```bash
yarn build
yarn preview
```

> [!NOTE]
> `serve` opens a folder's `index.html` before a page's `.html` file, so `/en/foundations/colors` may show a redirect stub locally. GitHub Pages serves `colors.html` first, which is what the export is built for.

## 🎨 Design Tokens

All tokens live in [`src/styles/tokens.css`](src/styles/tokens.css), organized in three layers:

1. **Primitives** (`--takere-green-500`, `--takere-navy-900`...) — raw brand values; they never change with the theme
2. **Semantic tokens** (`--takere-primary`, `--takere-canvas`, `--takere-text`...) — what the UI uses; redefined in dark mode
3. **HeroUI bridge** (`--accent`, `--background`, `--surface`, `--radius`, `--field-radius`...) — the variables HeroUI v3 reads, pointing to the semantic tokens

[`src/app/globals.css`](src/app/globals.css) exposes them as Tailwind utilities such as `bg-takere-*`, `rounded-card` and `shadow-card`.

> [!IMPORTANT]
> [`src/lib/tokens.ts`](src/lib/tokens.ts) mirrors the token values shown on the documentation pages. When you change a value in `tokens.css`, update it there too.

## 🌐 Internationalization

- Supported languages are declared in [`src/i18n/routing.ts`](src/i18n/routing.ts). Portuguese (`pt`) is the default locale and has **no URL prefix** (`localePrefix: "as-needed"`).
- All site texts live in `src/i18n/<locale>/<namespace>.json` (e.g. [`src/i18n/pt/colors.json`](src/i18n/pt/colors.json)), the same layout as `takere-backend`. The file name is the namespace read by `useTranslations("colors")`. Pages contain no hardcoded text.
- Message keys are typed from the `pt/` files (see [`src/i18n/messages.ts`](src/i18n/messages.ts)), so using a missing key is a **compile error**.
- The site is a **static export** for GitHub Pages. The language comes only from the URL: there is no language cookie or `Accept-Language` redirect.
- In development, [`src/proxy.ts`](src/proxy.ts) (in Next.js 16, middleware is named `proxy.ts`) serves the unprefixed Portuguese URLs. In production, [`scripts/flatten-default-locale.mjs`](scripts/flatten-default-locale.mjs) runs after `next build` and moves the Portuguese pages to the site root (`pt/foundations/colors.html` → `foundations/colors.html`).
- Plain paths to files in `public/` (`next/image`, `<a href download>`) must go through `asset()` from [`src/lib/asset.ts`](src/lib/asset.ts), which adds the base path used on GitHub Pages.
- Use the `Link` and navigation helpers from [`src/i18n/navigation.ts`](src/i18n/navigation.ts) so links keep the current language.

## 🌗 Theming

- Themes are managed by `next-themes`, which sets the `.dark` class and `data-theme` attribute on `<html>` — selectors that HeroUI already recognizes.
- The light theme is the default; the user's choice (light, dark or system) persists across reloads without a theme flash.
- Use the `dark:` Tailwind variant for theme-specific styles, but prefer semantic tokens, which already switch with the theme.

## ✏️ Adding a Page

1. Create the page content in `src/features/MyPage.tsx` (`"use client"`, texts via `useTranslations`)
2. Create the route in `src/app/[locale]/<group>/<slug>/page.tsx` (follow the existing ones)
3. Add the item to [`src/lib/nav.ts`](src/lib/nav.ts)
4. Add the texts to `src/i18n/pt/<namespace>.json`, `src/i18n/en/<namespace>.json` and `src/i18n/es/<namespace>.json`, and register the namespace in `Messages` and `NAMESPACES` in [`src/i18n/messages.ts`](src/i18n/messages.ts)

> [!TIP]
> Build the page with the blocks from `src/components/docs/`: `DocPage`, `Section`, `Preview` (live preview + code), `CodeBlock` and `Guidelines` (do/don't lists).

## 📦 Build & Deployment

The site is a static export hosted on GitHub Pages. Deployment is fully automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). On every push to `main`:

1. **Build** — installs dependencies, runs `yarn build` and the tests (if a `test` script exists)
2. **Deploy** — publishes `out/` to GitHub Pages at **https://design-system.takere.com.br** (the custom domain is set in the repository's Pages settings; [`public/CNAME`](public/CNAME) mirrors it). The workflow passes the Pages base path to the build as `NEXT_PUBLIC_BASE_PATH`: empty with the custom domain, `/<repo>` if it is ever removed
3. **Release** — if the build and tests succeed, bumps the patch version in `package.json`, pushes a `vX.Y.Z` tag and creates a GitHub Release with auto-generated notes

### Search engines and AI crawlers

The site is internal documentation and must not be indexed:

- Every page has `<meta name="robots" content="noindex, nofollow, ...">` plus `noai, noimageai` ([`src/lib/robots.ts`](src/lib/robots.ts)). Search engines are allowed to crawl only so they can read this tag.
- [`src/app/robots.ts`](src/app/robots.ts) generates a `robots.txt` that refuses known AI crawlers (GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot...). It is served at https://design-system.takere.com.br/robots.txt (crawlers only read `robots.txt` at the root of a host, so it relies on the custom domain).
- These are directives that well-behaved crawlers follow, not access control. Anything that must stay private should not be published.

> [!NOTE]
> GitHub Pages must use **GitHub Actions** as its source (Settings → Pages). The version bump commit is pushed by `github-actions[bot]` with `[skip ci]`. Run `git pull` before your next push.

## 🐛 Troubleshooting

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::3005
```
**Solution**: Stop the conflicting process or change the `-p` flag of the `dev` and `start` scripts in `package.json`.

### Dev server breaks after running a build
`next build` and `next dev` share the `.next/` folder, so building while the dev server is running can corrupt it.

**Solution**: Stop `yarn dev`, run the build, then restart the dev server.

### Missing translation key
```
Property '<key>' is missing in type ...
```
**Solution**: Add the key to the namespace file in `src/i18n/pt/` and, with the same shape, to the same file in `src/i18n/en/` and `src/i18n/es/`.

## 🗺️ Roadmap

See [`PLANO.md`](PLANO.md) for the implementation plan and the next phases (tests, contrast audit, CI and adoption of the tokens by the Takere apps).

## 📝 License

This project is part of the Takere ecosystem. See the main project repository for license information.

## 🤝 Contributing

We welcome contributions to the Takere design system! Whether you're fixing bugs, documenting components, improving accessibility, or suggesting enhancements, your help is appreciated.

### Quick Start

1. Read our [Contributing Guidelines](CONTRIBUTING.md)
2. Review our [Code of Conduct](CODE_OF_CONDUCT.md)
3. Fork the repository and create a feature branch
4. Make your changes following the guidelines
5. Run `yarn lint`, `yarn typecheck` and `yarn build`
6. Submit a pull request

### Key Contribution Areas

- **Tokens** - Keep colors, radii and shadows consistent across the Takere apps
- **Components** - Document new components with previews, code and usage guidelines
- **Translations** - Keep Portuguese, English and Spanish texts in sync
- **Accessibility** - Improve semantics and contrast, especially in the dark theme
- **Documentation** - Improve guides, add examples, fix typos
- **Bug fixes** - Help identify and fix issues

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to understand the expectations for participating in this community.
