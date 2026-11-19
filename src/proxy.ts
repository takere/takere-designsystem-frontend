/**
 * Dev server only: the production build is a static export (no proxy), where
 * scripts/flatten-default-locale.mjs moves the Portuguese pages to the site root instead.
 */
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Everything except API routes, Next internals and files with an extension.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
