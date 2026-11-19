import type { NextConfig } from "next";
import { PHASE_PRODUCTION_BUILD } from "next/constants";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default function config(phase: string): NextConfig {
  return withNextIntl({
    reactStrictMode: true,
    // `next build` produces a static HTML export (out/) for GitHub Pages; package.json's build script
    // then runs scripts/flatten-default-locale.mjs. Only for builds: an export config also disables
    // the proxy, which `next dev` needs to serve the unprefixed Portuguese URLs.
    ...(phase === PHASE_PRODUCTION_BUILD && { output: "export" as const }),
    // Set by CI when the site is served from a subpath (https://<owner>.github.io/<repo>). Empty with a
    // custom domain. Plain asset paths (next/image, <a download>) need it too: see src/lib/asset.ts.
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    // A local build can use its own folder so it doesn't clobber a running `next dev` (both default to .next).
    // With a custom distDir, the export is written there instead of out/.
    distDir: process.env.NEXT_DIST_DIR || ".next",
    images: {
      // GitHub Pages has no image optimization server.
      unoptimized: true,
    },
    experimental: {
      // src/app/global-not-found.tsx: [locale] is the root layout, so a 404 needs its own full-document page.
      globalNotFound: true,
    },
  });
}
