import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing, type AppLocale } from "@/i18n/routing";
import type { NavItemKey } from "./nav";

export type PageProps = { params: Promise<{ locale: string }> };

/** Enables static rendering for a page and returns its locale. */
export async function initPage({ params }: PageProps): Promise<AppLocale> {
  const { locale } = await params;
  const resolved = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  setRequestLocale(resolved);
  return resolved;
}

/** `generateMetadata` for a page whose title is its navigation label. */
export function pageMetadata(key: NavItemKey) {
  return async ({ params }: PageProps): Promise<Metadata> => {
    const locale = await initPage({ params });
    const t = await getTranslations({ locale, namespace: "nav.items" });
    return { title: t(key) };
  };
}
