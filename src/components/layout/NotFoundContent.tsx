"use client";

import { useEffect, useSyncExternalStore } from "react";
import { LOCALE_TAGS, routing, type AppLocale } from "@/i18n/routing";
import { BASE_PATH } from "@/lib/asset";

type Texts = Record<AppLocale, { title: string; description: string; back: string; siteTitle: string }>;

/** Locale of the requested URL ("/en/x" -> "en"); the default locale while prerendering. */
function localeFromUrl(): AppLocale {
  const first = window.location.pathname.slice(BASE_PATH.length).split("/")[1];
  return routing.locales.find((locale) => locale === first) ?? routing.defaultLocale;
}

const noSubscription = () => () => {};

/**
 * Body of the site-wide 404. The static host serves a single 404.html for every
 * missing URL, so the language is picked in the browser from the requested path.
 */
export function NotFoundContent({ texts }: { texts: Texts }) {
  const locale = useSyncExternalStore(noSubscription, localeFromUrl, () => routing.defaultLocale);

  useEffect(() => {
    document.documentElement.lang = LOCALE_TAGS[locale];
    document.title = `${texts[locale].title} · ${texts[locale].siteTitle}`;
  }, [locale, texts]);

  const t = texts[locale];
  const home = `${BASE_PATH}${locale === routing.defaultLocale ? "" : `/${locale}`}` || "/";

  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-4 text-center">
      <p className="text-[56px] font-bold text-takere-primary">404</p>
      <h1 className="text-[22px] font-bold text-takere-heading">{t.title}</h1>
      <p className="mt-2 text-takere-muted">{t.description}</p>
      <a href={home} className="mt-6 rounded-control bg-takere-primary px-5 py-2.5 font-semibold text-white hover:bg-takere-primary-hover">
        {t.back}
      </a>
    </main>
  );
}
