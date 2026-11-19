import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  // pt has no prefix (/colors), the others do (/en/colors), as in takere-landing-page.
  localePrefix: "as-needed",
  // The site is a static export (GitHub Pages): no proxy runs in production, so the language comes
  // only from the URL. Detection is off so `next dev` behaves the same (no cookie/Accept-Language redirects).
  localeDetection: false,
  localeCookie: false,
});

export type AppLocale = (typeof routing.locales)[number];

/** BCP 47 tags for react-aria (dates, numbers) and <html lang>. */
export const LOCALE_TAGS: Record<AppLocale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-ES",
};
