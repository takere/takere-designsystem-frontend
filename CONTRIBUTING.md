# Contributing to Takere Design System

Thank you for your interest in contributing to the Takere Design System! This document provides guidelines and instructions for contributing to this repository.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Guidelines](#development-guidelines)
- [Design Token Guidelines](#design-token-guidelines)
- [Internationalization Guidelines](#internationalization-guidelines)
- [Pull Request Process](#pull-request-process)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Documentation](#documentation)
- [Testing](#testing)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Affected page(s), language and theme** (e.g. `/en/foundations/colors`, dark theme)
- **Environment details** (browser and version, OS, device / screen width)
- **Relevant logs** or console errors
- **Screenshots** if applicable

> [!IMPORTANT]
> Security vulnerabilities must **not** be reported as public issues. Follow the [Security Policy](SECURITY.md) instead.

### Suggesting Enhancements

Enhancement suggestions are welcome! Please provide:

- **Clear use case** - Why is this enhancement needed?
- **Proposed solution** - How would you implement it?
- **Alternative solutions** - What other approaches did you consider?
- **Impact assessment** - How does this affect existing tokens, components, the dark theme or the Takere apps that adopt them?

### Changing Design Tokens

Tokens are meant to be shared by every Takere app, so a change here can affect all of them. Open an issue first describing the value, the reason for the change and the apps affected. See [Design Token Guidelines](#design-token-guidelines).

### Documenting New Components

Before adding a new documentation page:

1. **Discuss in an issue** - Describe the component or foundation and why it belongs in the design system
2. **Support every language** - Each page must exist in Portuguese, English and Spanish
3. **Support both themes** - Each page must work in the light and dark themes
4. **Follow the guidelines** - See [Development Guidelines](#development-guidelines)
5. **Update documentation** - Add the route to the README's Routes section

### Improving Documentation

Documentation improvements are always welcome! This includes:

- Fixing typos or clarifying existing documentation and usage guidelines
- Adding examples or use cases
- Improving README structure
- Adding troubleshooting guides

## 🚀 Getting Started

### Prerequisites

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/takere-designsystem-frontend.git
   cd takere-designsystem-frontend
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/takere/takere-designsystem-frontend.git
   ```
4. **Install Node.js** 20.9 or higher and **Yarn** 1.22 (see README)

### Setting Up Development Environment

1. **Install dependencies**:
   ```bash
   yarn install
   ```

2. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

3. **Start the development server** (http://localhost:3005):
   ```bash
   yarn dev
   ```

4. **Make your changes** following the guidelines below

5. **Test your changes** thoroughly (see [Testing](#testing)):
   ```bash
   yarn lint
   yarn typecheck
   yarn build
   ```

## 📝 Development Guidelines

### General Principles

1. **No hardcoded text** - Site texts belong in `src/i18n/{pt,en,es}/<namespace>.json`
2. **No hardcoded colors** - Use the Takere tokens and utilities (`bg-takere-*`, `text-takere-*`, `rounded-card`, `shadow-card`), never raw hex values
3. **Show, then tell** - Every component needs a live preview, its code and usage guidelines (do/don't)
4. **Server Components by default** - Route files stay as Server Components; only page content in `src/features/` and interactive parts use `"use client"`
5. **Clear naming** - Use descriptive, consistent names for files, components and message keys
6. **Test thoroughly** - Verify changes in every language, in both themes and on desktop and mobile widths

### Project Structure

Maintain the existing structure:

```
takere-designsystem-frontend/
├── .github/workflows/       # CI: build, deploy to GitHub Pages and release
├── public/brand/            # Brand assets
├── scripts/                 # Post-build scripts
└── src/
    ├── app/[locale]/        # Routes (one route tree for all languages)
    ├── components/
    │   ├── layout/          # Site shell
    │   ├── docs/            # Documentation blocks
    │   └── takere/          # Takere reference components
    ├── features/            # Content of each page
    ├── i18n/                # Locale routing, navigation and site texts (pt/, en/, es/)
    ├── lib/                 # Navigation, token metadata and page helpers
    └── styles/tokens.css    # Design tokens
```

### File Organization

- **Routes**: `src/app/[locale]/<group>/<slug>/page.tsx`, containing only metadata and the call to the page content
- **Page content**: One file per page in `src/features/`, named in PascalCase (e.g. `Buttons.tsx`)
- **Documentation blocks**: Reusable blocks (`DocPage`, `Section`, `Guidelines`, `Preview`, `CodeBlock`) in `src/components/docs/`
- **Takere components**: Reference components shared by the Takere apps in `src/components/takere/`
- **Brand assets**: `public/brand/`, optimized before committing

### Styling

1. **Tailwind CSS** - Use Tailwind utilities; Takere utilities are defined in `src/app/globals.css`
2. **Semantic tokens first** - Prefer semantic tokens (`takere-primary`, `takere-surface`, `takere-muted`...), which already switch with the theme, over primitives or the `dark:` variant
3. **HeroUI** - Use HeroUI v3 components; they are themed through the HeroUI bridge in `tokens.css`, so don't override their colors locally
4. **Responsive** - The site must be usable at 360px width without horizontal scroll
5. **Accessibility** - Keep semantic HTML, alt texts, keyboard navigation, visible focus and AA contrast in both themes

### Example Page

```tsx
// src/app/[locale]/components/example/page.tsx
import { Example } from "@/features/Example";
import { initPage, pageMetadata, type PageProps } from "@/lib/page";

export const generateMetadata = pageMetadata("example");

export default async function Page(props: PageProps) {
  await initPage(props);
  return <Example />;
}
```

```tsx
// src/features/Example.tsx
"use client";

import { Button } from "@heroui/react";
import { useTranslations } from "next-intl";
import { DocPage, Section } from "@/components/docs/DocPage";
import { Preview } from "@/components/docs/Preview";

export function Example() {
  const t = useTranslations("example");
  return (
    <DocPage eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")}>
      <Section id="usage" title={t("usage.title")} description={t("usage.description")}>
        <Preview code={`<Button variant="primary">${t("usage.label")}</Button>`}>
          <Button variant="primary">{t("usage.label")}</Button>
        </Preview>
      </Section>
    </DocPage>
  );
}
```

A new page also needs an entry in `NAV` ([`src/lib/nav.ts`](src/lib/nav.ts)), its label under `nav.items` and its texts in its own namespace file in `src/i18n/pt/`, `src/i18n/en/` and `src/i18n/es/`, registered in [`src/i18n/messages.ts`](src/i18n/messages.ts).

## 🎨 Design Token Guidelines

When adding or changing tokens in [`src/styles/tokens.css`](src/styles/tokens.css):

1. **Respect the layers** - Raw values go in the primitives; the UI only uses semantic tokens; HeroUI only reads the bridge
2. **Define both themes** - Every semantic token must have a light value and a dark value
3. **Check contrast** - Text and interactive colors must meet WCAG AA in both themes
4. **Keep the metadata in sync** - Update [`src/lib/tokens.ts`](src/lib/tokens.ts), which lists the values shown on the documentation pages
5. **Keep names stable** - Semantic token names match the ones used by the Takere apps; renaming one is a breaking change for them
6. **Brand palette** - The print palette from the brand files is documented separately; don't replace the canonical UI colors with it

## 🌐 Internationalization Guidelines

1. **Add keys to every message file** - Message keys are typed from the `src/i18n/pt/` files, so a missing key there fails the type check. Keep the `en/` and `es/` files with the same shape
2. **Use the localized navigation helpers** - Import `Link` and the router from `src/i18n/navigation.ts`, never from `next/link` or `next/navigation`
3. **Check every language** - Review the Portuguese (`/...`), English (`/en/...`) and Spanish (`/es/...`) versions of every changed page
4. **Adding a language** - Add it to `locales` and `LOCALE_TAGS` in `src/i18n/routing.ts`, create `src/i18n/<lang>/` with every namespace file and add the language name to the language switcher's messages in every file

## 🔄 Pull Request Process

1. **Update documentation** - Update README.md and other relevant docs
2. **Test thoroughly** - Ensure lint, type check and build pass and pages render correctly
3. **Follow commit guidelines** - Use conventional commit messages
4. **Create pull request** with:
   - Clear title describing the change
   - Detailed description of what and why
   - Reference to related issues (if any)
   - Screenshots (light and dark themes, desktop and mobile) for visual changes
5. **Address review feedback** - Respond to and implement requested changes
6. **Keep PR focused** - One feature/fix per PR

> [!NOTE]
> Token changes are meant to be adopted by the other Takere apps. Mention in the PR which tokens changed so the apps can be updated.

### Pull Request Checklist

- [ ] Code follows project style and guidelines
- [ ] `yarn lint` passes
- [ ] `yarn typecheck` passes
- [ ] `yarn build` passes
- [ ] Changes checked in Portuguese, English and Spanish
- [ ] Changes checked in the light and dark themes
- [ ] Changes checked on desktop and mobile widths
- [ ] Documentation has been updated
- [ ] Commit messages follow conventions
- [ ] No sensitive information (passwords, keys, `.env` files) committed

## 📝 Commit Message Guidelines

Use [Conventional Commits](https://www.conventionalcommits.org/) format. A **context** in parentheses is required between the type and the colon:

```
<type>(<context>): <subject>
```

### Types

- **feat**: New feature (new page, component, token or capability)
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic change)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates

### Context

Use a short scope that identifies the area of the change (for example `tokens`, `colors`, `buttons`, `i18n`, `theme`, `readme`). Context is required on every commit.

### Examples

```
feat(forms): document date picker
```

```
fix(theme): raise muted text contrast in dark mode
```

```
docs(readme): add design tokens section
```

## 📚 Documentation

### What to Document

1. **New pages** - Add them to the README's Routes section
2. **New tokens or utilities** - Document them on the matching foundations page and in `src/lib/tokens.ts`
3. **Usage guidelines** - Every component page explains when to use it and when not to
4. **Breaking changes** - Clearly mark and explain in commit and PR, especially renamed or removed tokens
5. **Non-obvious code** - Add comments explaining *why*, not *what*

### Documentation Standards

- Use clear, concise language
- Write repository documentation in English; site texts go in every supported language
- Include code examples where appropriate
- Add links to external documentation for technologies used
- Keep README.md organized and up-to-date
- Use proper Markdown formatting

## 🧪 Testing

### Automated Checks

Run these checks locally before submitting a PR:

```bash
yarn lint
yarn typecheck
yarn build
```

### Manual Testing

1. **Development server**:
   ```bash
   yarn dev
   ```

2. **Production build** - Check the production output, which can differ from the dev server:
   ```bash
   yarn build
   yarn preview
   ```

3. **Every language** - Check the Portuguese, English and Spanish versions of every changed page; switching language must keep the current page

4. **Both themes** - Check the light and dark themes; the chosen theme must persist after a reload without a flash

5. **Responsive layout** - Check mobile (360px), tablet and desktop widths

6. **Interactions** - Verify previews, copy buttons, navigation, the mobile menu and the 404 page

### Testing Checklist

- [ ] Lint passes without errors
- [ ] Type check passes without errors
- [ ] Build passes without errors
- [ ] Pages render correctly in Portuguese, English and Spanish
- [ ] Pages render correctly in the light and dark themes
- [ ] Layout works on mobile and desktop
- [ ] No console errors in the browser
- [ ] Links, language switcher and theme toggle work
- [ ] Images load and have alt texts

## ❓ Questions?

If you have questions about contributing:

1. Check existing [Issues](https://github.com/takere/takere-designsystem-frontend/issues)
2. Create a new issue with your question
3. Reach out to maintainers

## 🙏 Thank You!

Your contributions help make the Takere Design System better for everyone. We appreciate your time and effort!

---

**Happy Contributing! 🚀**
