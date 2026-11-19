import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Providers } from "@/components/layout/Providers";
import { SiteShell } from "@/components/layout/SiteShell";
import { LOCALE_TAGS, routing } from "@/i18n/routing";
import { NO_AI_META, NO_INDEX_ROBOTS } from "@/lib/robots";
import { fontVariables } from "../fonts";
import "../globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Light is the default theme regardless of the OS preference.
  themeColor: "#ffffff",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale, namespace: "site" });
  return {
    title: { default: t("title"), template: `%s · ${t("title")}` },
    description: t("description"),
    robots: NO_INDEX_ROBOTS,
    other: NO_AI_META,
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    // next-themes writes the theme class/attribute before hydration.
    <html lang={LOCALE_TAGS[locale]} className={`light ${fontVariables}`} data-theme="light" suppressHydrationWarning>
      <body className="font-sans">
        <NextIntlClientProvider>
          <Providers localeTag={LOCALE_TAGS[locale]}>
            <SiteShell>{children}</SiteShell>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
