import type { Metadata } from "next";
import { NotFoundContent } from "@/components/layout/NotFoundContent";
import enNotFound from "@/i18n/en/notFound.json";
import enSite from "@/i18n/en/site.json";
import esNotFound from "@/i18n/es/notFound.json";
import esSite from "@/i18n/es/site.json";
import ptNotFound from "@/i18n/pt/notFound.json";
import ptSite from "@/i18n/pt/site.json";
import { LOCALE_TAGS, routing } from "@/i18n/routing";
import { NO_AI_META, NO_INDEX_ROBOTS } from "@/lib/robots";
import { fontVariables } from "./fonts";
import "./globals.css";

const texts = {
  pt: { ...ptNotFound, siteTitle: ptSite.title },
  en: { ...enNotFound, siteTitle: enSite.title },
  es: { ...esNotFound, siteTitle: esSite.title },
};

export const metadata: Metadata = {
  title: `${ptNotFound.title} · ${ptSite.title}`,
  robots: NO_INDEX_ROBOTS,
  other: NO_AI_META,
};

/**
 * Site-wide 404 ([locale] is the root layout, so unmatched URLs need their own full document).
 * Exported as a single static 404.html: the document is in the default language and
 * NotFoundContent switches the texts on /en/... and /es/... URLs.
 */
export default function GlobalNotFound() {
  return (
    <html lang={LOCALE_TAGS[routing.defaultLocale]} className={`light ${fontVariables}`} data-theme="light">
      <body className="font-sans">
        <NotFoundContent texts={texts} />
      </body>
    </html>
  );
}
